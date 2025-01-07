import React from "react";
import Card from "./Card";
import Navbar from "./Navbar";

const Discover = () => {
  const posts = [
    {
      id: 1,
      title: "Side Projects That Make Your Resume Shine ✨",
      text: "Trying to make your resume stand out with side projects? Pick the ones that actually make a difference—and avoid the ones that...",
      author: "Iren Azra Zou",
      time: "4d ago",
      views: 393,
      comments: 14,
      image: "/assets/images/Resume.jpeg",
    },
    {
      id: 2,
      title: "How Does Reading Affect Your Brain",
      text: "Let me explain the WHY part.",
      author: "Sufyan Maan, M.Eng",
      time: "Feb 16, 2024",
      views: "16.3K",
      comments: 354,
      image: "/assets/images/brain.jpeg",
    },
  ];

  return (
    <>
    <Navbar/>
    <section className="bg-gray-100 py-10 px-6 mt-8">
      <div className="max-w-5xl mx-auto motion-preset-slide-right">
        {posts.map((post) => (
          <div key={post.id} className="bg-white shadow-md rounded-lg p-6 mb-6 flex gap-4">
            <img src={post.image} alt={post.title} className="w-40 h-40 rounded-md object-cover" />
            <div>
              <h3 className="text-xl font-bold">{post.title}</h3>
              <p className="text-gray-600">{post.text}</p>
              <p className="text-gray-500 text-sm mt-2">
                By {post.author} • {post.time} • {post.views} views • {post.comments} comments
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default Discover;
