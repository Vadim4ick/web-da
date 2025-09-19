"use client";

import React, { useState } from "react";
import clsx from "clsx";

const ImageWithSkeleton = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt?: string;
  className?: string;
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full">
      {/* Скелетон */}
      {!loaded && (
        <div
          className={clsx(
            "bg-additional-grey-cold absolute inset-0 animate-pulse rounded-[8px]",
          )}
        />
      )}

      <img
        src={src}
        alt={alt}
        className={clsx(
          "w-full transition-opacity duration-500",
          loaded ? "opacity-100" : "opacity-0",
          className,
        )}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

export { ImageWithSkeleton };
