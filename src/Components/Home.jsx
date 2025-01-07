import React, { useState } from "react";
import Navbar from "./Navbar";
import FlowerComponent from "./FlowerComponent";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Bloom from "./Bloom";
import ObserverProvider from "../ObserverProvider";
const Home = () => {
  // const [showBloom, setShowBloom] = useState(false);

  // const handleTransitionComplete = () => {
  //   setShowBloom(true); // Show Bloom component after transition
  // };

  return (
    <>
      <Navbar />
        <div className="relative bg-black h-screen flex items-center">
          <div className="motion-translate-y-in-100 motion-duration-[3s] motion-ease-spring-smooth absolute top-1/4 left-10 text-white max-w-md">
            <h1 className="text-6xl font-bold leading-tight">
              Redefining Social Media <br /> for a Better Tomorrow
            </h1>
            <p className="text-lg mt-4">
              Stop Doomscrolling Start Purposeful Connecting...
            </p>
            <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded shadow-lg hover:bg-gray-200">
              Join the Movement
            </button>
          </div>
          <FlowerComponent />
        </div>
      <ObserverProvider>
        <Bloom />
      </ObserverProvider>
      <HeroSection />
      <Footer />
    </>
  );
};

export default Home;




//  import React from "react";
// import Navbar from "./Navbar";
// import FlowerComponent from "./FlowerComponent";
// import Footer from "./Footer";
// import HeroSection from "./HeroSection";

// const Home = () => {
//   return (
//     <>
//       <Navbar />
//       <div className="relative bg-black h-screen flex items-center">
//         {/* Tagline Section */}
//         <div className="absolute top-1/4 left-10 text-white max-w-md 
//          motion-translate-y-in-100 motion-duration-[2s] motion-ease-spring-smooth">
//           <h1 className="text-6xl font-bold leading-tight">
//             Redefining Social Media <br /> for a Better Tomorrow
//           </h1>
//           <p className="text-lg mt-4">
//             Stop Doomscrolling Start Purposeful Connecting...
//           </p>
//           <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded shadow-lg hover:bg-gray-200">
//             Join the Movement
//           </button>
//         </div>
//         <FlowerComponent />
//       </div>
//       <HeroSection/>
//       <Footer />
//     </>
//   );
// };

// export default Home;

