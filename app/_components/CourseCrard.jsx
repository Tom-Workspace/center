import Image from "next/image";
import Link from "next/link";

export default function CourseCard() {
  return (
    <div className="relative group w-[90%] md:max-w-[412px] h-fit outline outline-offset-4 outline-Olive-600 dark:outline-midNight-900 hover:outline-offset-0 px-3 card-cover rounded-md pt-4 bg-Olive-50 dark:bg-[#111827] smooth">
      <div>
        <div className="group-hover:scale-105 smooth flex-center-both">
          <Image
            src="https://api.mahmoud-magdy.com/courses_images/AvoL8xIvduwsCPGscFASVvArRxbTuicIFY1dJ9Mn.png"
            alt="course"
            width={412}
            height={400}
            className="undefined w-[90%] md:w-[80%] h-auto group-hover:w-[95%] group-hover:rounded-md smooth"
          />
        </div>
      </div>
      <div className="px-0 md:px-5 mt-5 relative z-10">
        <div className="w-full clr-text-primary px-4 py-2 smooth">
          <svg
            width="306"
            height="6"
            viewBox="0 0 306 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-midNight-800 mb-4 dark:fill-Olive-200 smooth w-[90%] md:w-full mx-auto"
          >
            <path d="M0.43099 3.29443C0.43099 4.76719 1.6249 5.9611 3.09766 5.9611C4.57042 5.9611 5.76432 4.76719 5.76432 3.29443C5.76432 1.82167 4.57042 0.627767 3.09766 0.627767C1.6249 0.627767 0.43099 1.82167 0.43099 3.29443ZM300.431 3.29443C300.431 4.76719 301.625 5.9611 303.098 5.9611C304.57 5.9611 305.764 4.76719 305.764 3.29443C305.764 1.82167 304.57 0.627767 303.098 0.627767C301.625 0.627767 300.431 1.82167 300.431 3.29443ZM3.09766 3.79443H303.098V2.79443H3.09766V3.79443Z" />
          </svg>
          <div className="flex flex-col space-y-6">
            <div className="flex-col flex space-y-3">
              <div className="w-full font-bold text-[.75rem] flex flex-col-reverse sm:flex-row space-y-4 space-y-reverse sm:space-y-0 sm:space-x-reverse sm:space-x-4 justify-between items-center">
                <div>
                  <div className="bg-midNight-950 text-midNight-100 dark:bg-Olive-500 dark:text-midNight-950 smooth rounded-lg py-1 px-3 space-x-2 space-x-reverse">
                    <span className="bg-[--primary-color] text-[--secondary-color] smooth px-2 py-px rounded-md ">
                      160.00
                    </span>
                    <span>جنيهًا</span>
                  </div>
                </div>
                <div className="flex sm:justify-end sm:items-start flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-1 items-center sm:space-x-reverse clr-text-secondary flex-wrap">
                  <div className="flex flex-col space-y-2 shrink-0">
                    <div className="flex justify-between space-x-1 space-x-reverse">
                      <span className="flex-center-both">
                        الثلاثاء، ١ أكتوبر ٢٠٢٤
                      </span>
                      <span className="font-normal flex-center-both transform -translate-y-px">
                        {/* SVG Icon */}
                      </span>
                    </div>
                    <div className="flex justify-between space-x-1 space-x-reverse">
                      <span className="flex-center-both">
                        الخميس، ١٢ سبتمبر ٢٠٢٤
                      </span>
                      <span className="font-normal flex-center-both transform -translate-y-px">
                        {/* SVG Icon */}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <svg
              width="306"
              height="6"
              viewBox="0 0 306 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-midNight-800 dark:fill-Olive-200 smooth w-[90%] md:w-full mx-auto"
            >
              <path d="M0.43099 3.29443C0.43099 4.76719 1.6249 5.9611 3.09766 5.9611C4.57042 5.9611 5.76432 4.76719 5.76432 3.29443C5.76432 1.82167 4.57042 0.627767 3.09766 0.627767C1.6249 0.627767 0.43099 1.82167 0.43099 3.29443ZM300.431 3.29443C300.431 4.76719 301.625 5.9611 303.098 5.9611C304.57 5.9611 305.764 4.76719 305.764 3.29443C305.764 1.82167 304.57 0.627767 303.098 0.627767C301.625 0.627767 300.431 1.82167 300.431 3.29443ZM3.09766 3.79443H303.098V2.79443H3.09766V3.79443Z" />
            </svg>
            <div className="flex items-center justify-center flex-col space-y-6 sm:space-y-10">
              <div className="flex-center-both flex-col space-y-4 w-full">
                <div className="font-bold text-[1.125rem] pr-3">
                  كورس الشهر الثاني للصف الثالث الثانوي 2025
                </div>
                <div className="clr-text-secondary text-center">
                  <span>
                    المحتوى : 4 أسابيع
                    <br />
                  </span>
                  <span>
                    1 - &quot;الفصل الأول&quot; المحاضرة الخامسة : تجزئة التيار
                    - الدائرة الكاملة وجزء من دائرة - القدرة الكهزبية <br />
                  </span>
                  <span>
                    2 - ورشة عمل الدرس الأول والثاني &quot;الفصل الأول&quot;
                    <br />
                  </span>
                  <span>
                    3 - &quot;الفصل الأول&quot; ⁠المحاضرة السادسة : قانون أوم
                    للدوائر المغلقة <br />
                  </span>
                  <span>
                    4 - &quot;الفصل الأول&quot; ⁠المحاضرة السابعة : توصيل
                    البطاريات - أماكن الفولتميتر&nbsp;- أسئلة&nbsp;القرار
                    <br />
                  </span>
                </div>
              </div>
              <div className="font-[.75rem] shrink-0 flex flex-col sm:flex-row space-y-5 sm:space-y-0 space-x-0 sm:space-x-reverse sm:space-x-6 pb-5">
                  <Link  href="/course/20" className="border-2 text-center border-teal-500 rounded-full px-3 py-1 hover:bg-teal-500 hover:text-white smooth text-[--secondary-color]">
                    الدخول للكورس
                  </Link>
                  <Link href="/course/20/subscribe/previous_invoices/" className="bg-Olive-400 min-w-[150px] text-midNight-950 font-bold rounded-full px-3 py-2 sm:py-1 flex-center-both">
                    اشترك الآن!
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
