"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, MotionValue, useMotionValueEvent } from "framer-motion";

interface ImageSequenceProps {
  progress: MotionValue<number>;
  frameCount: number;
}

export function ImageSequence({ progress, frameCount }: ImageSequenceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);

  // Preload all images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      // Format number to 3 digits e.g. 001, 002
      const formattedNum = i.toString().padStart(3, "0");
      img.src = `/mandhiframe/ezgif-frame-${formattedNum}.jpg`;

      img.onload = () => {
        loadedCount++;
        if (loadedCount === frameCount) {
          setLoaded(true);
        }
      };

      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, [frameCount]);

  // Frame calculation based on scroll progress
  const frameIndex = useTransform(progress, [0, 1], [0, frameCount - 1]);

  const drawImage = (index: number) => {
    if (!canvasRef.current || images.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images[Math.round(index)];
    if (!img) return;

    // Set canvas dimensions to window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

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
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full object-cover"
    />
  );
}
