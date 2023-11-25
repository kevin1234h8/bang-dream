export const getBaseApiUrl = () => {
  if (!process.env.NEXT_PUBLIC_BASE_API_URL) {
    return null;
  }
};
