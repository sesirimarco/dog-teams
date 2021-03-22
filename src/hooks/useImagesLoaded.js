import { useState, useEffect } from 'react';
export const useImagesLoaded = () => {
  const [loadedImages, setLoadedImages] = useState(0);
  const [totalImages, setTotalImagesToLoad] = useState(0);
  const [allImagesDonde, setAllImagesDonde] = useState(false);
  
  const setImageLoaded = () => {
    setLoadedImages(loadedImages + 1);
  };
  const setTotalImages = (amount) => {
    setTotalImagesToLoad(amount);
  };
  useEffect(() => {
    if (totalImages > 0 && totalImages === loadedImages) {
      setAllImagesDonde(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps,
  }, [loadedImages]);
  const calcPorc = (total, partial) => {
    if(total > 0 && partial > 0){
      return Math.round(loadedImages * 100 / totalImages) < 10 
      ? '0' + Math.round(loadedImages * 100 / totalImages)
      : Math.round(loadedImages * 100 / totalImages)
    } 
    
  }
  return [setTotalImages, setImageLoaded, allImagesDonde, calcPorc(totalImages, loadedImages)];
};
