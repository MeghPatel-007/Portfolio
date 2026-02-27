import React from 'react'

function Contact() {
  return (
    <section className="bg-zinc-900 pl-4 md:pl-13 lg:pl-20 xl:pl-20 2xl:pl-50 py-20 relative">
      <div className="flex flex-col items-center">
        <div className="text-5xl font-semi-bold text-white font-ADLaM-Display select-none md:text-7xl lg:text-[7rem] xl:text-[10rem] z-2 flex gap-15 lg:gap-20 xl:gap-30">
          Let's<span className="text-semi-black"><p>Build</p></span>

        </div>
        <div className="text-5xl font-semi-bold text-white font-ADLaM-Display select-none md:text-7xl lg:text-[7rem]  xl:text-[10rem] z-2 flex gap-9 lg:gap-10 xl:gap-15">
          Some<span className="text-semi-black"><p>thing</p></span>

        </div>
        <div className="text-5xl font-semi-bold text-white font-ADLaM-Display select-none md:text-7xl lg:text-[7rem] xl:text-[10rem] z-2 flex gap-6 xl:gap-10">
          Toge<span className="text-semi-black"><p>ther</p></span>

        </div>
      </div>
   </section>  
  )
}

export default Contact