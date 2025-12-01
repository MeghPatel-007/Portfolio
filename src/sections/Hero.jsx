function Hero() {
  return (
    <>
      <div className="w-full h-screen flex flex-col items-center justify-center px-4 bg-black bg-cover bg-center">
        <div className="text-5xl font-semi-bold text-white font-ADLaM-Display select-none md:text-8xl sm:text-7xl lg:text-10x1">
          <span className="text-orange">W</span>ELCO
          <span className="text-orange">M</span>E
        </div>
      </div>
      <div className="w-screen h-screen flex absolute bottom-0 scale-[-1]">
        <div className="w-[20%] h-[50%] bg-zinc-900 "></div>
        <div className="w-[20%] h-[35%] bg-zinc-900 "></div>
        <div className="w-[20%] h-[15%] bg-zinc-900 "></div>
        <div className="w-[20%] h-[35%] bg-zinc-900 "></div>
        <div className="w-[20%] h-[50%] bg-zinc-900 "></div>
      </div>
      <div className="w-screen">
        <div className="w-[90%] h-4 bg-orange absolute bottom-15 left-0  "></div>
        <div className="w-[80%] h-4 bg-orange absolute bottom-5 right-0 "></div>
      </div>
    </>
  );
}

export default Hero;
