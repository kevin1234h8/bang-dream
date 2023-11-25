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

export const getYoutubeVideoIdLong = (embedUrl: string) => {
  const url = new URL(embedUrl);
  return url.searchParams.get("v");
};

export const getYoutubeVideoId = (embedUrl: string) => {
  return embedUrl.split("/").pop();
};
