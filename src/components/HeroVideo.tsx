import { useEffect, useRef } from "react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.play().catch(() => {
        console.log("Autoplay blocked");
      });
    }
  }, []);

  return (
    <div className="w-full aspect-video overflow-hidden relative">

      {/* VIDEO ONLY */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://res.cloudinary.com/dvnoyis73/video/upload/q_auto/f_auto/v1778479442/DREAMLIFE.LK_NOHAZZ_WEB_LOOP_wll32w.mp4"
          type="video/mp4"
        />
      </video>

    </div>
  );
}