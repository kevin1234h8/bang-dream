export const getNextMusicTitle = (
  musicTitles: string[],
  currentTitle: string
) => {
  const currentIndex = musicTitles.indexOf(currentTitle);
  const nextIndex = (currentIndex + 1) % musicTitles.length;
  return musicTitles[nextIndex];
};

export const getPreviousMusicTitle = (
  musicTitles: string[],
  currentTitle: string
) => {
  const currentIndex = musicTitles.indexOf(currentTitle);
  const previousIndex =
    (currentIndex - 1 + musicTitles.length) % musicTitles.length;
  return musicTitles[previousIndex];
};
