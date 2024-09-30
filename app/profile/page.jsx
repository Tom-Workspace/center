import Image from 'next/image';
import React from 'react';
import { getServerSession } from "next-auth";
import { authOptions } from '@/app/lib/nextAuth';
import SignoutButton from '../_components/SignoutButton';

const Profile = async () => {
    const session = await getServerSession(authOptions);
    console.log(session);
    
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            {session && (
                <div>
                    <h1>Welcome: {session.user?.name}</h1>
                    <h1>Your email: {session.user?.email}</h1>
                    {session.user?.image && (
                        <Image 
                            src={session.user.image} 
                            alt="Profile image" 
                            height={50} 
                            width={50} 
                        />
                    )}
                    <SignoutButton/>
                </div>
                
            )}
        </div>
    );
};

export default Profile;
