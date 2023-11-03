"use client";

import { BangDreamBandLogo } from "@/type";
import { useEffect, useRef } from "react";
type BangDreamBandYoutubeIFrameVideoProps = {
  isBangDreamBandYoutubeIFrameVideoOpen: boolean;
  closeIframe: any;
};
const BangDreamBandYoutubeIFrameVideo = ({
  isBangDreamBandYoutubeIFrameVideoOpen,
  closeIframe,
}: BangDreamBandYoutubeIFrameVideoProps) => {
  const iFrameWrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleWrapperClick = (event: MouseEvent) => {
      if (
        iFrameWrapperRef.current &&
        !iFrameWrapperRef.current.contains(event.target as Node)
      ) {
        closeIframe();
      }
    };
    if (isBangDreamBandYoutubeIFrameVideoOpen) {
      document.addEventListener("click", handleWrapperClick);
    }
    return () => {
      document.removeEventListener("click", handleWrapperClick);
    };
  }, [isBangDreamBandYoutubeIFrameVideoOpen]);

  return (
    <div
      className={`fixed bg-[rgba(0,0,0,0.3)] ${
        isBangDreamBandYoutubeIFrameVideoOpen ? "flex" : "hidden"
      } inset-0 z-20 items-center justify-center m-0 h-full `}
    >
      <div
        ref={iFrameWrapperRef}
        className="w-[75%] h-[75%] "
        onClick={(e) => e.stopPropagation()}
      >
        <div id="youtube-iframe"></div>
      </div>
    </div>
  );
};

export default BangDreamBandYoutubeIFrameVideo;
