import { getToken } from 'next-auth/jwt';
import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const protectedRoutes = ['/profile', '/home', '/course'];
const onlyAdmin = ['/id'];
const allowedIPs = ['156.199.133.80', '203.0.113.0', '192.168.1.5'];

async function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
    const isAuth = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

    const ip = request.headers.get('x-forwarded-for') || request.headers.get('remote-addr') || '';

    if (onlyAdmin.some((route) => pathname.startsWith(route)) && !allowedIPs.includes(ip)) {
        console.log(ip);
        return NextResponse.redirect(new URL('/unauthorized', request.url));
    }

    if (!isAuth && protectedRoutes.some((route) => pathname.startsWith(route))) {
        return NextResponse.redirect(new URL('/auth/login', request.url));
    }

    if (isAuth && (pathname.startsWith('/auth') || pathname === '/')) {
        return NextResponse.redirect(new URL('/home', request.url));
    }

    return NextResponse.next();
}

export default withAuth(middleware, {
    callbacks: {
        async authorized() {
            return true;
        }
    }
});

export const config = {
    matcher: ['/profile/:path*', '/auth/:path*', '/', '/home', '/course/:path*', '/id/:path*']
};
