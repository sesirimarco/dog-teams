import { useState, useEffect, useCallback } from 'react';
export const useImagesLoaded = () => {
  const [loadedImages, setLoadedImages] = useState(0);
  const [totalImages, setTotalImagesToLoad] = useState(0);
  const [allImagesDonde, setAllImagesDonde] = useState(false);

  const setImageLoaded = useCallback(() => {
    setLoadedImages(loadedImages + 1);
  });
  const setTotalImages = useCallback((amount) => {
    setTotalImagesToLoad(amount);
  });
  useEffect(() => {
    if (totalImages > 0 && totalImages === loadedImages) {
      setAllImagesDonde(true);
    }
  }, [loadedImages]);
  return [setTotalImages, setImageLoaded, allImagesDonde];
};
