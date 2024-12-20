import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import { CiPlay1, CiPause1 } from "react-icons/ci";
import Banner from '../../assets/banner.mp4';

const Video = () => {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const playerRef = useRef(null);

  const handlePlayClick = () => {
    setPlaying(true);
  };

  const handlePauseClick = () => {
    setPlaying(false);
  };

  const handleVideoEnd = () => {
    setPlaying(false);
  };

  const handleProgress = (state) => {
    setProgress(state.played * 100);
  };

  const handleSeek = (e) => {
    const newTime = (e.nativeEvent.offsetX / e.target.offsetWidth) * playerRef.current.getDuration();
    playerRef.current.seekTo(newTime);
  };

  return (
    <section className="w-full bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12">
          <div className="w-full lg:w-1/2 space-y-6" data-aos="fade-up">
            <h1 className="text-3xl font-semibold text-gray-800 leading-tight">
              Our goal is to provide a superior customer experience
            </h1>
            <p className=" text-gray-600 leading-relaxed text-xl">
            We strive to deliver exceptional service by understanding customer needs, ensuring satisfaction, 
and continuously improving our offerings to exceed expectations.
            </p>
            <button className="px-6 py-3 bg-[#f1a986] text-white rounded-md hover:bg-white 
              hover:text-[#f1a986] transition-colors duration-300 border border-[#f1a986]">
              GET STARTED
            </button>
          </div>

          <div className="w-full lg:w-1/2" data-aos="fade-up" data-aos-delay="100">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <div className="transition-transform duration-300">
                <ReactPlayer
                  ref={playerRef}
                  url={Banner}
                  playing={playing}
                  muted
                  playsinline
                  width="100%"
                  height="100%"
                  className="object-cover"
                  onEnded={handleVideoEnd}
                  onProgress={handleProgress}
                />
              </div>

              <div className="absolute inset-0 flex items-center justify-center bg-opacity-30">
                {!playing && (
                  <button
                    className="p-4 rounded-full transition-all duration-300 bg-[#f1a986]"
                    onClick={handlePlayClick}
                  >
                    <CiPlay1 className="w-6 h-6 text-white" />
                  </button>
                )}
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-300 cursor-pointer" onClick={handleSeek}>
                <div
                  className="h-full bg-[#f1a986]"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>

              {playing && (
                <div 
                  className="absolute inset-0 flex items-center justify-center bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity">
                  <button
                    className="p-4 rounded-full transition-all duration-300 bg-[#f1a986]"
                    onClick={handlePauseClick}
                  >
                    <CiPause1 className="w-6 h-6 text-white" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
