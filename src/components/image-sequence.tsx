"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, MotionValue, useMotionValueEvent } from "framer-motion";

interface ImageSequenceProps {
  progress: MotionValue<number>;
  frameCount: number;
}

export function ImageSequence({ progress, frameCount }: ImageSequenceProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);

  // Preload all images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      // Format number to 3 digits e.g. 001, 002
      const formattedNum = i.toString().padStart(3, "0");
      img.src = `/mandhiframe/ezgif-frame-${formattedNum}.jpg`;

      // Draw immediately when the first frame loads to avoid blank screen
      if (i === 1) {
        img.onload = () => {
          setLoaded(true);
        };
      } else {
        // Redraw if this specific frame just loaded and it's the one we're currently viewing
        img.onload = () => {
          if (Math.round(frameIndex.get()) === i - 1) {
            // Trigger a dummy state update to force the redraw effect
            setLoaded(l => !l ? true : l); 
            // Better yet, just call drawImage directly via requestAnimationFrame
            requestAnimationFrame(() => drawImage(frameIndex.get(), loadedImages));
          }
        };
      }

      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, [frameCount]);

  // Frame calculation based on scroll progress
  const frameIndex = useTransform(progress, [0, 1], [0, frameCount - 1]);

  const drawImage = (index: number, imgList = images) => {
    if (!canvasRef.current || imgList.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imgList[Math.round(index)];
    // Ensure image is actually fully downloaded before trying to draw it
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    // Set canvas dimensions to wrapper size
    canvas.width = wrapper.clientWidth;
    canvas.height = wrapper.clientHeight;

    // Calculate object-fit cover dimensions
    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;

    let drawWidth = canvas.width;
    let drawHeight = canvas.height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      drawHeight = canvas.width / imgRatio;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      drawWidth = canvas.height * imgRatio;
      offsetX = (canvas.width - drawWidth) / 2;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  // Initial draw when loaded or window resizes
  useEffect(() => {
    if (loaded) {
      drawImage(Math.round(frameIndex.get()));
    }

    const handleResize = () => {
      drawImage(Math.round(frameIndex.get()));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [loaded]);

  // Update canvas on scroll
  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (loaded) {
      requestAnimationFrame(() => drawImage(latest));
    }
  });

  return (
    <div ref={wrapperRef} className="absolute top-0 right-0 w-full md:w-[70%] lg:w-[60%] h-full">
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
