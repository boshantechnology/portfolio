import React from "react";
import Clutch1 from "../assets/Clutch1.png";
import Clutch2 from "../assets/Clutch2.png";
import Top_ranked from "../assets/Top_ranked.png";
import Upwork from "../assets/Upwork.png";
import GoodFirms from "../assets/GoodFirms.png";

function ExcellenceSection() {
  return (
    <div className="px-4 py-16 bg-white text-center">
      <h2 className="text-3xl sm:text4xl md:text-5xl font-bold mb-8  leading-sung">
        <span className="font-roboto text-blue-700 ">Over 18 years</span>{' '}
        <span className="text-gray-700"> Of Excellence In IT Solutions </span>
      </h2>
      <p className="font-roboto text-gray-700 max-w-5xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed px-2 text-left">
        At Eoxysit, we are leaders in using Artificial Intelligence and machine
        learning to provide innovative business solutions. With over 18 years of
        experience, we help businesses design and develop excellent and unique
        solutions to challenges in the IT sector, hence making your business
        experience exponential growth and increased efficiency. We don’t just
        create applications but virtual solutions that grow and change based on
        the required alterations.
        <br/>  
        For a company offering services in the AI market, our expert team is
        always at your disposal to provide solutions that perfectly meet your
        budget and time requirements while ensuring that your company does not
        lag in an ever-so-competitive market. It is time to embrace change for
        business growth by availing artificial intelligence innovation.
      </p>

      <div className="flex justify-center items-center gap-2 mt-12 flex-wrap">
        {[Clutch1, Clutch2, Top_ranked, Upwork, GoodFirms].map(
          (logo, index) => (
            <div
              key={index}
              className="w-64 h-64 border border-blue-500 rounded-xl flex items-center justify-center p-2 hover:shadow-lg transition duration-300"
            >
              <img
                src={logo}
                alt={`logo ${index + 1}`}
                className="h-48 object-contain max-w-96"
              />
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default ExcellenceSection;
