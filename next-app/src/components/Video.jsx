'use client';
import React, { useRef, useState } from 'react';

const Video = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((error) => console.error('Error playing video:', error));
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/assets/img/next.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center p-6 text-center">
        {/* Event Details */}
        <div className="max-w-2xl mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join global AI expert Alexander Morad
          </h2>
          <p className="text-xl text-white mb-2">May 1st, 2025 at 10 AM</p>
          <p className="text-xl text-white mb-4">
            University of Ibadan, Faculty of Science
          </p>
          <p className="text-lg md:text-xl text-white">
            Discover how Generative AI is reshaping content, business, and
            education—powered by NEXT.
          </p>
        </div>

        {/* Play/Pause Button */}
        <button
          onClick={togglePlayPause}
          className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-4 transition-all duration-300 shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isPlaying ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
            )}
          </svg>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
    </div>
  );
};

export default Video;
