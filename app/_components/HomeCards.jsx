import React from 'react'
import CourseCard from './CourseCrard'



const RecentCards = () => {
  return (
      <div className=' w-full md:w-[92%] mx-auto flex items-start justify-center flex-wrap gap-10'>
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          
      </div>
  )
}

export default RecentCards