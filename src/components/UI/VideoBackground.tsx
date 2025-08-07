'use client';

const VideoBackground = () => (
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
  >
    <source src="/background.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
);

export default VideoBackground;
