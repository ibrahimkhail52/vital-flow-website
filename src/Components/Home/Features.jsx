import React from 'react'
import { careNetwork, consultationsy, easyAppoinment, medical, patient, personalizedPlans } from '../../assets/features img'

function Features() {
  return (
    <div className='max-w-7xl mx-auto px-6 md:px-8 lg:px-14'>
      {/* Header */}
      <div className='flex flex-col justify-center items-center gap-5 mt-[3rem] px-5'>
        <div className="flex items-center gap-2">
            <div className="bg-blue-500 w-2 h-2 rounded-full"></div>
            <h5 className="text-[rgb(13,13,13)]">Features</h5>
        </div>
        <div className="flex flex-col justify-center items-center gap-6">
            <h2 className="text-center font-medium text-[2.5rem] leading-[3rem] text-[rgb(13,13,13)] mmd:leading-[3.3rem] mmd:text-[3rem]  ">
              Innovative solutions to {" "}
              <span className="mmd:block">enhance medical service</span>
            </h2>
        </div>
      </div>
      {/* Cards */}
      <div className='border flex flex-col mt-[4rem] mmd:flex-row mmd:flex-wrap mmd:justify-center mmd:items-center mmd:border-b-0 '>
       
        {/* Card */}
        <div className='flex flex-col justify-center items-center  gap-6 py-10 px-4 border border-t-0 border-l-0 border-r-0 mmd:border-r-2 mmd:border-b-2 mmd:w-[50%] xl:w-[33.33%]'>
          <div className='p-4 bg-[rgb(245,250,255)] rounded-full'>
            <img src={easyAppoinment} alt="" className='w-12 h-12'/>
          </div>
          <div className='flex flex-col items-center justify-center  gap-2 '>
            <h4 className='font-semibold text-[1.4rem]'>Easy appointment</h4>
            <p className=' text-[1.1rem] font-medium text-[rgb(94,94,94)] text-center max-w-[20rem] '>Schedule your appointments quickly with our simple and efficient booking system.</p>
          </div> 
        </div>

        {/* Card */}
        <div className='flex flex-col justify-center items-center  gap-6 py-10 px-4 border border-t-0 border-l-0 border-r-0 mmd:border-b-2 mmd:w-[50%] xl:w-[33.33%] xl:border-r-2'>
          <div className='p-4 bg-[rgb(245,250,255)] rounded-full'>
            <img src={personalizedPlans} alt="" className='w-12 h-12'/>
          </div>
          <div className='flex flex-col items-center justify-center  gap-2 '>
            <h4 className='font-semibold text-[1.4rem]'>Personalized plans</h4>
            <p className=' text-[1.1rem] font-medium text-[rgb(94,94,94)] text-center max-w-[20rem] '>Receive tailored care plans designed to meet your unique health needs and goals.</p>
          </div> 
        </div>

        {/* Card */}
        <div className='flex flex-col justify-center items-center  gap-6 py-10 px-4 border border-t-0 border-l-0 border-r-0 mmd:border-r-2 mmd:border-b-2 mmd:w-[50%] xl:w-[33.33%] xl:border-r-0'>
          <div className='p-4 bg-[rgb(245,250,255)] rounded-full'>
            <img src={consultationsy} alt="" className='w-12 h-12'/>
          </div>
          <div className='flex flex-col items-center justify-center  gap-2 '>
            <h4 className='font-semibold text-[1.4rem]'>24/7 consultationsy</h4>
            <p className=' text-[1.1rem] font-medium text-[rgb(94,94,94)] text-center max-w-[20rem] '>Access expert medical advice anytime through secure and reliable virtual visits.</p>
          </div> 
        </div>

        {/* Card */}
        <div className='flex flex-col justify-center items-center  gap-6 py-10 px-4 border border-t-0 border-l-0 border-r-0 mmd:border-b-2 mmd:w-[50%] xl:w-[33.33%] xl:border-r-2 xl:border-b-0'>
          <div className='p-4 bg-[rgb(245,250,255)] rounded-full'>
            <img src={medical} alt="" className='w-12 h-12'/>
          </div>
          <div className='flex flex-col items-center justify-center  gap-2 '>
            <h4 className='font-semibold text-[1.4rem]'>Medical technology</h4>
            <p className=' text-[1.1rem] font-medium text-[rgb(94,94,94)] text-center max-w-[20rem] '>Experience modern healthcare with innovative tools and state-of-the-art equipment.</p>
          </div> 
        </div>

       {/* Card */}
        <div className='flex flex-col justify-center items-center  gap-6 py-10 px-4 border border-t-0 border-l-0 border-r-0 mmd:border-r-2 mmd:border-b-2  mmd:w-[50%] xl:w-[33.33%] xl:border-b-0'>
          <div className='p-4 bg-[rgb(245,250,255)] rounded-full'>
            <img src={patient} alt="" className='w-12 h-12'/>
          </div>
          <div className='flex flex-col items-center justify-center  gap-2 '>
            <h4 className='font-semibold text-[1.4rem]'>Patient records</h4>
            <p className=' text-[1.1rem] font-medium text-[rgb(94,94,94)] text-center max-w-[20rem] '>Stay organized with secure, easy access to your medical records whenever needed.</p>
          </div> 
        </div>

        {/* Card */}
        <div className='flex flex-col justify-center items-center  gap-6 py-10 px-4 border border-t-0 border-l-0 border-r-0 mmd:border-b-2 mmd:w-[50%] xl:w-[33.33%] xl:border-b-0'>
          <div className='p-4 bg-[rgb(245,250,255)] rounded-full'>
            <img src={careNetwork} alt="" className='w-12 h-12'/>
          </div>
          <div className='flex flex-col items-center justify-center  gap-2 '>
            <h4 className='font-semibold text-[1.4rem]'>Care network</h4>
            <p className=' text-[1.1rem] font-medium text-[rgb(94,94,94)] text-center max-w-[20rem] '>Connect with top specialists and facilities to ensure complete healthcare coverage.</p>
          </div> 
        </div>

     



        
        
      </div>
    </div>
     
  )
}

export default Features