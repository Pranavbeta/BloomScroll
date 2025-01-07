import React from "react";
import Card from "./Card";

const HeroSection = () => {
  return (
    <section className="bg-white py-16 px-8">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold mb-4">
          An all-in-one membership, for people who want more
        </h2>
        <p className="text-lg text-gray-600">
        Discover meaningful connections and unlock your true potential. Explore communities, share your passions, 
        grow your knowledge, and create a positive impact in a purposeful digital space.
        </p>
      </div>
      <div className="flex justify-center gap-6 flex-wrap motion-preset-pop">
        <Card
          title="Community Engagement"
          text="Join communities based on your interests and connect purposefully."
          Icon={() => <img src="/assets/images/community.jpeg" alt="Community" />}
        />
        <Card
          title="Discover Interests"
          text="Explore topics and find your next passion project or hobby."
          Icon={() => <img src="/assets/images/discover.jpeg" alt="Discover" />}
        />
        <Card
          title="Learn & Grow"
          text="Access resources tailored to your growth and development."
          Icon={() => <img src="/assets/images/learn.jpeg" alt="Learn" />}
        />
        <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Break Free from Endless Scrolling</h2>
        <p className="text-lg leading-relaxed mb-6">
          We believe that social media should empower you, not consume you. Mindless scrolling wastes time 
          and potential, but purposeful connections can ignite creativity, foster growth, and bring meaning 
          to your online presence.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Our vision is a social media experience reimagined—a space where you focus on what matters. Join 
          communities that inspire, share knowledge that uplifts, and connect with others who align with your purpose.
        </p>
        <p className="text-lg font-semibold">Let’s build a better tomorrow together. <span className="text-indigo-600">It’s time to scroll with intention.</span></p>
      </div>
      </div>
    </section>
  );
};

export default HeroSection;
