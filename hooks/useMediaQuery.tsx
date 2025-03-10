import { useEffect, useState } from 'react';

export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    console.log(media);
    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    listener();
    return () => media.removeEventListener('change', listener);
  }, [query]);
  return matches;
};
