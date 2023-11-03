export const onPlayerReady = (event: any) => {
  event.target.playVideo();
};

export const closeIframe = (setState: any, iframeVideo: any) => {
  setState(false);
  if (iframeVideo) {
    iframeVideo.destroy();
    iframeVideo = null;
  }
};
