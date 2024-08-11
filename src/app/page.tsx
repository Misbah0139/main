import React from 'react'

const page = () => {
  return(
     <div><figure className="bg-red-100 rounded-xl p-8 dark:bg-red-800">
     <img className="w-24 h-24 rounded-full mx-auto" src="/misbah.jpg" alt="" width="384" height="512"></img>
     <div className="pt-6 text-center space-y-4">
       <blockquote>
         <p className="text-lg font-medium">
           “Hello, my name is Misbah and I am a student pursuing a Bachelor of Science in Cyber Security. I am excited to learn and explore the world of cybersecurity, and I look forward to connecting with like-minded individuals who share my passion for technology and security."


         </p>
       </blockquote>
       <figcaption className="font-medium">
         <div className="text-purple-500 dark:text-Purple-400">
           Misbah Arshad
         </div>
         <div className="text-slate-700 dark:text-slate-500">
           Cyber Security 
         </div>
       </figcaption>
     </div>
   </figure></div>
  )
}

export default page
