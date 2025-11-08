import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin,  FaPaperPlane } from "react-icons/fa";

function MapSocialContact() {
  return (
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white/80 backdrop-blur-sm border border-blue-200 rounded-3xl shadow-xl p-8  lg:p-12 lg:py-7">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                  <FaPaperPlane className="text-white text-lg" />
                </div>
                <h2 className="text-3xl font-bold text-slate-800">Send Message</h2>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-700 mb-3 font-medium">Full Name</label>
                    <input
                      type="text"
                      className="w-full px-6 py-3 bg-white border border-blue-200 rounded-2xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 mb-3 font-medium">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-6 py-3 bg-white border border-blue-200 rounded-2xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 mb-3 font-medium">Subject</label>
                  <input
                    type="text"
                    className="w-full px-6 py-3 bg-white border border-blue-200 rounded-2xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 mb-3 font-medium">Message</label>
                  <textarea
                    rows="4"
                    className="w-full px-6 py-3 bg-white border border-blue-200 rounded-2xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-4 cursor-pointer rounded-2xl font-semibold text-lg shadow-xl transition-all duration-300 hover:scale-105 transform flex items-center justify-center gap-3"
                >
                  <FaPaperPlane className="text-sm" />
                  Send Message
                </button>
              </form>
            </div>



            {/* Map & Social Media */}
            <div className="space-y-8">

              {/* Map */}
              <div className="bg-white/80 backdrop-blur-sm border border-blue-200 rounded-3xl shadow-xl overflow-hidden">
                <div className="h-80 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center relative">
                  {/* Mock Interactive Map */}
                  <iframe className="w-full h-full " src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54696.04375201857!2d31.43592323077768!3d31.040101248079115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f79da6867fcc13%3A0x22f943e156730a8e!2z2KfZhNmF2YbYtdmI2LHYqSAo2YLYs9mFIDIp2Iwg2KfZhNmF2YbYtdmI2LHYqdiMINmF2K3Yp9mB2LjYqSDYp9mE2K_ZgtmH2YTZitip!5e0!3m2!1sar!2seg!4v1762469449910!5m2!1sar!2seg" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                  {/* Map Mark */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-8 h-8 bg-blue-500 rounded-full animate-ping opacity-60"></div>
                    <div className="w-6 h-6 bg-blue-600 rounded-full absolute top-1 left-1"></div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white/80 backdrop-blur-sm border border-blue-200 rounded-3xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-slate-800 text-center mb-8">Follow Us</h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <a href="#" className="group bg-white hover:bg-blue-600 border border-blue-200 rounded-2xl p-4 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <FaFacebook className="text-2xl text-blue-600 group-hover:text-white mx-auto mb-2" />
                    <span className="text-slate-700 group-hover:text-white text-sm">Facebook</span>
                  </a>
                  <a href="#" className="group bg-white hover:bg-blue-400 border border-blue-200 rounded-2xl p-4 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <FaTwitter className="text-2xl text-blue-400 group-hover:text-white mx-auto mb-2" />
                    <span className="text-slate-700 group-hover:text-white text-sm">Twitter</span>
                  </a>
                  <a href="#" className="group bg-white hover:bg-gradient-to-br from-purple-600 to-pink-600 border border-blue-200 rounded-2xl p-4 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <FaInstagram className="text-2xl text-pink-500 group-hover:text-white mx-auto mb-2" />
                    <span className="text-slate-700 group-hover:text-white text-sm">Instagram</span>
                  </a>
                  <a href="#" className="group bg-white hover:bg-blue-700 border border-blue-200 rounded-2xl p-4 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <FaLinkedin className="text-2xl text-blue-700 group-hover:text-white mx-auto mb-2" />
                    <span className="text-slate-700 group-hover:text-white text-sm">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>  )
}

export default MapSocialContact