import React, { useState } from "react";
import { Link } from "react-router-dom";

const Badges = () => {
  const [selectedBadge, setSelectedBadge] = useState(null);

  const badges = [
    {
      id: 1,
      title: "Machine Learning Foundations",
      issuer: "AWS Educate",
      date: "2025",
      image:
        "https://res.cloudinary.com/dlohr6hrn/image/upload/v1753361920/aws-educate-machine-learning-foundations_1_ty3wr8.png",
      verifyUrl:
        "https://www.credly.com/badges/c40e216b-918d-4feb-b9e4-db33c9175cca/linked_in?t=szw33z",
    },
    {
      id: 2,
      title: "GenAI 101 with Pieces",
      issuer: "Pieces",
      date: "2024",
      image:
        "https://res.cloudinary.com/dlohr6hrn/image/upload/v1753361935/assertion-7Adyw2SzTSeP7JjSB0yRAg_ignc2d.png",
      verifyUrl:
        "https://badgr.com/public/assertions/67b04377157e9b171a2b1617?identity__email=mchanuka72@gmail.com",
    },
    {
      id: 3,
      title: "Emerging Talent Community",
      issuer: "AWS Educate",
      date: "2024",
      image:
        "https://res.cloudinary.com/dlohr6hrn/image/upload/v1753361920/AWSEBadge_bqkjmw.png",
      verifyUrl:
        "https://www.credly.com/badges/c40e216b-918d-4feb-b9e4-db33c9175cca/linked_in?t=szw33z",
    },
    {
      id: 4,
      title: "API Fundamentals Student Expert",
      issuer: "Postman",
      date: "2024",
      image:
        "https://res.cloudinary.com/dlohr6hrn/image/upload/v1753361935/pstmn_mbyi1x.png",
      verifyUrl:
        "https://badgr.com/public/assertions/RxZSosLjRKK2jkcPuRJt7g?identity__email=mchanuka72@gmail.com",
    },
    // Add more badges as needed
  ];

  const handleBadgeClick = (badge) => {
    setSelectedBadge(badge);
  };

  const closeModal = () => {
    setSelectedBadge(null);
  };

  return (
    <div className="min-h-screen text-white bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Header */}
      <div className="pb-10 text-center pt-28">
        <Link
          to="/"
          className="inline-flex items-center mb-6 transition-colors text-lime-400 hover:text-lime-300"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to About
        </Link>
        <h1 className="mb-4 text-4xl font-bold">My Badges</h1>
        <p className="max-w-2xl mx-auto text-xl text-gray-300">
          A collection of my digital badges and achievements in software
          development and technology.
        </p>
      </div>

      {/* Badges Grid */}
      <div className="container px-4 pb-20 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {badges.map((badge) => (
            <div
              key={badge.id}
              onClick={() => handleBadgeClick(badge)}
              className="p-6 transition-all duration-300 transform border cursor-pointer bg-white/5 backdrop-blur-md border-white/20 rounded-xl hover:bg-white/10 hover:scale-105 hover:shadow-2xl"
            >
              {/* ✅ CORRECTED IMAGE CONTAINER ✅ */}
              <div className="flex items-center justify-center h-48 mb-4">
                <img
                  src={badge.image}
                  alt={badge.title}
                  className="object-contain w-auto h-full"
                />
              </div>

              <h3 className="mb-2 text-xl font-bold text-center text-lime-400">
                {badge.title}
              </h3>
              <p className="mb-2 text-center text-gray-300">{badge.issuer}</p>
              <p className="text-sm text-center text-gray-400">{badge.date}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Badge Details (No changes needed here) */}
      {selectedBadge && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-gray-900 border border-white/20 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="mb-2 text-2xl font-bold text-lime-400">
                    {selectedBadge.title}
                  </h2>
                  <p className="text-gray-300">{selectedBadge.issuer}</p>
                  <p className="text-sm text-gray-400">{selectedBadge.date}</p>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 text-gray-400 hover:text-white"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="relative flex items-center justify-center mb-6 overflow-hidden rounded-lg aspect-video ">
                <img
                  src={selectedBadge.image}
                  alt={selectedBadge.title}
                  className="object-contain w-full h-full"
                />
              </div>

              <div className="flex gap-4">
                <a
                  href={selectedBadge.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-3 font-medium text-center text-black transition-colors rounded-lg bg-lime-400 hover:bg-lime-300"
                >
                  Verify Badge
                </a>
                <button
                  onClick={closeModal}
                  className="px-6 py-3 transition-colors border rounded-lg border-white/20 hover:bg-white/5"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Badges;
