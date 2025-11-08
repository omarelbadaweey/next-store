
export const metadata = {
  title: "Contact Us",
};

import { FaPhone, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaHeadset, FaPaperPlane, FaWhatsapp } from "react-icons/fa";
import MapSocialContact from "../components/MapSocialContact";
import ContactHero from "../components/ContactHero";

function Contact() {
  return (
    <div className=" min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">

      {/* Hero Section */}
      <ContactHero />

      {/* Contact Form & Map */}
      <MapSocialContact />
    </div>
  );
}

export default Contact;