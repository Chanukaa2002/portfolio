import React, { useState, useEffect, useRef } from "react";
import { certificatesData, badgesData } from "../data/portfolioData";

export const CertificatesSection = () => {
  const [activeTab, setActiveTab] = useState("certificates");
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const items = activeTab === "certificates" ? certificatesData : badgesData;
  const total = items.length;

  // Reset to first slide when switching tabs
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeTab]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handleGoToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Touch swipe gestures
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  const currentItem = items[currentIndex] || items[0];

  return (
    <section
      id="certificates"
      className="relative py-24 px-4 sm:px-6 lg:px-12 bg-transparent overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-900/15 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-left mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-3">
            Certificates
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-3xl">
            Check out some of my Certificates, ranging from Web Development Professional to Machine Learning.
          </p>

          {/* Toggle Tabs */}
          <div className="flex items-center gap-4 mt-6">
            <button
              type="button"
              onClick={() => {
                setActiveTab("certificates");
                setCurrentIndex(0);
              }}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === "certificates"
                  ? "bg-purple-600 text-white shadow-glow scale-105"
                  : "bg-slate-800/70 text-slate-400 hover:text-white border border-slate-700/60"
              }`}
            >
              Certificates ({certificatesData.length})
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveTab("badges");
                setCurrentIndex(0);
              }}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === "badges"
                  ? "bg-cyan-600 text-white shadow-glowCyan scale-105"
                  : "bg-slate-800/70 text-slate-400 hover:text-white border border-slate-700/60"
              }`}
            >
              Badges ({badgesData.length})
            </button>
          </div>
        </div>

        {/* Clean Modern 3D Sliding Stage */}
        <div
          className="carousel-3d-stage relative flex items-center justify-center min-h-[360px] sm:min-h-[460px] my-6 select-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Stage Left Arrow Button for Instant Slide */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-2 sm:left-6 lg:left-10 z-40 p-3 rounded-full bg-slate-900/80 hover:bg-purple-600 text-white border border-slate-700 hover:border-purple-400 shadow-xl transition-all hover:scale-110 active:scale-95"
            aria-label="Previous Slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Cards Track */}
          {items.map((item, index) => {
            // Compute circular offset from currentIndex
            let offset = index - currentIndex;
            if (offset < -Math.floor(total / 2)) offset += total;
            if (offset > Math.floor(total / 2)) offset -= total;

            const isCenter = offset === 0;
            const isLeft = offset === -1 || (currentIndex === 0 && index === total - 1 && total > 2);
            const isRight = offset === 1 || (currentIndex === total - 1 && index === 0 && total > 2);

            let transform = "translate3d(0, 0, 0) scale(1) rotateY(0deg)";
            let opacity = 1;
            let zIndex = 20;

            if (isCenter) {
              transform = "translate3d(0, 0, 0) scale(1) rotateY(0deg)";
              opacity = 1;
              zIndex = 20;
            } else if (isLeft) {
              transform = "translate3d(-65%, 0, -100px) scale(0.84) rotateY(14deg)";
              opacity = 0.45;
              zIndex = 25;
            } else if (isRight) {
              transform = "translate3d(65%, 0, -100px) scale(0.84) rotateY(-14deg)";
              opacity = 0.45;
              zIndex = 25;
            } else {
              transform = offset < 0
                ? "translate3d(-140%, 0, -200px) scale(0.65) rotateY(25deg)"
                : "translate3d(140%, 0, -200px) scale(0.65) rotateY(-25deg)";
              opacity = 0;
              zIndex = 0;
            }

            const isBadges = activeTab === "badges";

            return (
              <div
                key={item.id || index}
                onClick={(e) => {
                  e.stopPropagation();
                  handleGoToSlide(index);
                }}
                className="absolute w-full max-w-sm sm:max-w-md lg:max-w-lg aspect-[4/3] transition-all duration-600 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer"
                style={{
                  transform,
                  opacity,
                  zIndex,
                  pointerEvents: opacity === 0 ? "none" : "auto",
                }}
              >
                <div
                  className={`w-full h-full transition-all duration-500 flex items-center justify-center ${
                    isBadges
                      ? isCenter
                        ? "p-2 sm:p-4 bg-transparent border-none shadow-none ring-0"
                        : "p-2 sm:p-4 bg-transparent border-none shadow-none ring-0 opacity-40 hover:opacity-75"
                      : isCenter
                        ? "rounded-3xl overflow-hidden p-3 sm:p-4 bg-white border-2 border-purple-500 shadow-[0_0_40px_rgba(168,85,247,0.4),0_20px_45px_rgba(0,0,0,0.85)] ring-1 ring-purple-400/40"
                        : "rounded-3xl overflow-hidden p-3 sm:p-4 bg-slate-900/90 border border-slate-800/80 shadow-lg opacity-80 hover:opacity-100"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`w-full h-full object-contain ${
                      isBadges ? "drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]" : "rounded-2xl"
                    }`}
                    draggable={false}
                  />
                </div>
              </div>
            );
          })}

          {/* Stage Right Arrow Button for Instant Slide */}
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-2 sm:right-6 lg:right-10 z-40 p-3 rounded-full bg-slate-900/80 hover:bg-purple-600 text-white border border-slate-700 hover:border-purple-400 shadow-xl transition-all hover:scale-110 active:scale-95"
            aria-label="Next Slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Animated Details & Navigation Controls */}
        <div
          key={`${activeTab}-${currentIndex}`}
          className="slide-fade-in mt-10 text-center space-y-4 max-w-xl mx-auto"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {currentItem?.title}
          </h3>
          {currentItem?.issuer && (
            <p className="text-sm font-medium text-slate-400">
              {currentItem.issuer}
            </p>
          )}

          {/* Verification CTA Button */}
          {currentItem?.verifyUrl && (
            <div className="flex items-center justify-center gap-4 pt-2">
              <a
                href={currentItem.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-semibold text-white transition-all hover:scale-105 ${
                  activeTab === "badges"
                    ? "bg-gradient-to-r from-cyan-600 via-teal-600 to-blue-600 hover:from-cyan-500 hover:via-teal-500 hover:to-blue-500 shadow-md shadow-cyan-900/40"
                    : "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 shadow-md shadow-purple-900/40"
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Verify Credential
              </a>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default CertificatesSection;
