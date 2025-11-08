
import AboutHero from "../components/AboutHero";
import AboutQuality from "../components/AboutQuality";
import AboutTeamSection from "../components/AboutTeamSection";

export const metadata = {
  title: "About Us",
};

export default function About() {
  return (
    <div className="mt-20 min-h-screen bg-gradient-to-l from-blue-50 via-blue-100 to-blue-200">
      <AboutHero />


      {/* Team_Section  */}
      <AboutTeamSection/>

      {/* Quality */}
      <AboutQuality/>
    </div>
  );
}










// import AboutHero from "../components/AboutHero";

// export const metadata = {
//   title: "About | Next Store",
//   description:
//     "Learn more about Next Store — our mission, vision, and commitment to redefining e-commerce with innovation and design.",
// };

// export default function AboutPage() {
//   return (
//     <main className="bg-white">
//       {/* Hero Section */}


//       {/* About Content */}
//       <section className="max-w-6xl mx-auto px-6 py-20 text-center">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
//           Our Mission & Vision
//         </h2>
//         <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
//           At <span className="text-blue-700 font-semibold">Next Store</span>, we aim to revolutionize online shopping
//           by building experiences that are fast, elegant, and deeply human.  
//           We believe technology should serve people — not the other way around.
//         </p>

//         <div className="grid md:grid-cols-3 gap-8 mt-16">
//           {/* Card 1 */}
//           <div className="bg-blue-50 rounded-2xl shadow-md p-8 hover:shadow-lg transition-all duration-300">
//             <h3 className="text-xl font-semibold text-blue-700 mb-3">Innovation First</h3>
//             <p className="text-gray-600">
//               We constantly explore new technologies to keep our platform fast,
//               secure, and future-ready.
//             </p>
//           </div>

//           {/* Card 2 */}
//           <div className="bg-blue-100 rounded-2xl shadow-md p-8 hover:shadow-lg transition-all duration-300">
//             <h3 className="text-xl font-semibold text-blue-700 mb-3">User Experience</h3>
//             <p className="text-gray-600">
//               Every pixel, animation, and interaction is designed with the
//               customer in mind — ensuring simplicity and joy.
//             </p>
//           </div>

//           {/* Card 3 */}
//           <div className="bg-blue-200 rounded-2xl shadow-md p-8 hover:shadow-lg transition-all duration-300">
//             <h3 className="text-xl font-semibold text-blue-700 mb-3">Global Impact</h3>
//             <p className="text-gray-600">
//               Our vision extends beyond borders — empowering brands and
//               entrepreneurs around the world to grow digitally.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Team Section */}
//       <section className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 py-20">
//         <div className="max-w-6xl mx-auto px-6 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
//             Meet Our Team
//           </h2>
//           <p className="text-gray-600 text-lg mb-10 max-w-3xl mx-auto">
//             Behind every great experience is a passionate team of creators,
//             developers, and designers — working together to make digital dreams come true.
//           </p>

//           <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
//             {/* Member 1 */}
//             <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all">
//               <img
//                 src="https://randomuser.me/api/portraits/men/75.jpg"
//                 alt="Team Member"
//                 className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
//               />
//               <h3 className="font-semibold text-blue-700 text-lg">James Carter</h3>
//               <p className="text-gray-500">Lead Developer</p>
//             </div>

//             {/* Member 2 */}
//             <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all">
//               <img
//                 src="https://randomuser.me/api/portraits/women/65.jpg"
//                 alt="Team Member"
//                 className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
//               />
//               <h3 className="font-semibold text-blue-700 text-lg">Sophia Lee</h3>
//               <p className="text-gray-500">UI/UX Designer</p>
//             </div>

//             {/* Member 3 */}
//             <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all">
//               <img
//                 src="https://randomuser.me/api/portraits/men/32.jpg"
//                 alt="Team Member"
//                 className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
//               />
//               <h3 className="font-semibold text-blue-700 text-lg">Michael Smith</h3>
//               <p className="text-gray-500">Project Manager</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-blue-950 text-white text-center py-6 mt-16">
//         <p className="text-sm opacity-80">
//           © {new Date().getFullYear()} Next Store. All rights reserved.
//         </p>
//       </footer>
//     </main>
//   );
// }
