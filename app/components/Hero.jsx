// components/Hero.jsx

import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative h-[calc(100vh-80px)] mt-20 flex items-center justify-center ">
      <div className="absolute inset-0 ">
        <img
          src="/hero.jpg"
          alt="NextStore Background"
          className="object-cover w-full h-full"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className=" z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
          <span className="block text-xl font-bold">Welcome to</span>
          <span className="block font-normal -mt-1">Next-Store</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-gray-300 my-8 max-w-2xl mx-auto leading-relaxed">
          Where style meets simplicity. Discover curated collections that
          reflect your unique taste and elevate your everyday.
        </p>

        {/* Divider */}
        <div className="w-24 h-0.5 bg-gray-400 mx-auto my-8"></div>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <a href="#products" className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 border border-white/20 hover:border-white/40 backdrop-blur-sm">
            Explore Collection
          </a>

          <Link href="/about" className="bg-transparent hover:bg-white/10 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 border border-white/30 hover:border-white/50">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
