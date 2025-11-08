import { FaPhone,   FaHeadset,  FaWhatsapp } from "react-icons/fa";

function ContactHero() {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-blue-700 px-4 py-2 rounded-full mb-6 border border-blue-200">
              <FaHeadset className="text-blue-600" />
              <span className="text-sm font-medium">24/7 Customer Support</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              Let's Start
              <span className="block bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                A Conversation
              </span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8 mx-auto lg:mx-[0] max-w-lg">
              Ready to take your business to the next level? Our team is here to
              help you achieve your goals with innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mx-auto lg:mx-[0] w-full sm:w-fit">
              <button className="cursor-pointer group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-2xl shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3">
                <FaPhone className="text-sm" />
                <span>Call Now</span>
              </button>
              <button className=" cursor-pointer group text-md bg-white/80 backdrop-blur-sm hover:bg-white text-slate-700 px-8 py-4 rounded-2xl border border-blue-200 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3">
                <FaWhatsapp className="text-green-600 text-2xl" />
                <span>Send Message </span>
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl md:mt-6">
              <img
                src="/hero.jpg"
                alt="Modern Office"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactHero;
