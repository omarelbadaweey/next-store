
function AboutTeamSection() {
  return (
          <section className="min-h-screen flex items-center justify-center  py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-6xl font-black text-slate-800 mb-6">
              THE <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">VISIONARIES</span>
            </h2>
            <p className="text-2xl text-slate-600 max-w-3xl mx-auto">
              Meet the brilliant minds and creative souls who turn imagination into reality
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                name: "ALEX CHEN",
                role: "CHIEF EXECUTIVE OFFICER", 
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                description: "Visionary leader with 15+ years driving technological innovation and business transformation across global markets."
              },
              {
                name: "SARAH JOHNSON",
                role: "CREATIVE DIRECTOR",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                description: "Award-winning designer passionate about creating exceptional user experiences that blend aesthetics with functionality."
              },
              {
                name: "MARCUS RIVERA", 
                role: "TECHNOLOGY DIRECTOR",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                description: "Full-stack architect and technology evangelist with deep expertise in scalable systems and emerging technologies."
              }
            ].map((member, index) => (
              <div key={index} className="group text-center bg-gradient-to-br from-blue-50 to-blue-100 rounded-[2rem] p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.03] border-2 border-blue-200">
                <div className="relative mb-8">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-40 h-40 rounded-2xl mx-auto object-cover border-4 border-white shadow-2xl group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 rounded-full border-4 border-white shadow-lg"></div>
                </div>
                <h3 className="text-2xl font-black text-slate-800 mb-3">{member.name}</h3>
                <p className="text-blue-600 font-bold text-lg mb-6">{member.role}</p>
                <p className="text-slate-600 leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default AboutTeamSection