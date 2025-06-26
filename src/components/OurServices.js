import React from "react";
import Artificiallntelligen from "../assets/ArtificialIntelligen.png";
import Claud from "../assets/Claud.svg";
import ECommerce from "../assets/ECommerce.png";
import Mobileand from "../assets/Mobileand.png";
import MobileIcon from "../assets/MobileIcon.png";
import Recipition from "../assets/Recipition.png";

const services = [
  {
    title: "Mobile and Web Application Development",
    icon: MobileIcon,
    points: [
      "Custom mobile app development (iOS & Android)",
      "Progressive Web App development",
      "Cross-platform app development",
      "API integration and backend development",
    ],
  },

  {
    title: "Blockchain Technology",
    icon: Recipition,
    points: [
      "Blockchain application development",
      "Smart contract development",
      "Payment wallet app development",
      "Blockchain and exchange solutions",
    ],
  },

  {
    title: "Artificial Intelligence and Machine Learning Solutions",
    icon: Artificiallntelligen,
    points: [
      "Custom AI/ML model development",
      "Smart business analytics",
      "Natural language processing",
      "Computer vision applications",
    ],
  },

  {
    title: "UI/UX Designing",
    icon: Mobileand,
    points: [
      "User Interface and User Experience Design",
      "Product Wireframing and Prototyping",
      "Mobile/Web App Design",
      "Interactive Design and User Research",
    ],
  },

  {
    title: "E-commerce Solutions",
    icon: ECommerce,
    points: [
      "Custom e-commerce platform development",
      "Payment gateway integration",
      "Cart and checkout systems",
      "Marketplace design and optimization",
    ],
  },

  {
    title: "Cloud Computing Services",
    icon: Claud,
    points: [
      "Cloud infrastructure setup (AWS, Azure, Google Cloud)",
      "Cloud migration and deployment",
      "Backend infrastructure development",
      "Managed cloud services",
    ],
  },
];
function OurServices() {
  return (
    <div className="bg-white text-center">
      <h1 className="text-gray-800  font-bold text-center text-5xl ">
        Our Services{" "}
      </h1>
      <p className=" text-gray-700  max-w-7xl  sm:text-lg md:text-xl  m-2 px-2 mx-auto text-left leading-relaxed">
        At Eoxysit, we treat success as a process and a goal progressively
        achieved in steps. The holistic approach to integrating AI, machine
        learning, and digital innovations for your business means we can take it
        from the idea stage to becoming a market leader. We know that growth is
        a process; thus, our offer is flexible, visionary, and powered by
        breakthrough technological solutions. That is how we assist you in
        changing the picture for your business:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8 mb-8 px-16">
        {services.map((service, index) => (
          <div
            key={index}
            className=" border border-blue-500 rounded-2xl  p-4 "
          >
            <div className="flex justify-betwwen items-start">
              <div className="text-left">
                <h2 className="text-xl font-semibold mb-4 text-black-700">
                  {service.title}
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {service.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
              <img
                src={service.icon}
                alt={`${service.title} icon`}
                className="h-20 w-20 ml-4 "
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurServices;
