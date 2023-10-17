"use client";

import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";
import { useCuratedPhotosStore } from "global_states/CuratedPhotosStore";
import ImageWrapper from "../ImageWrapper";

export default async function IndexCuratedImages() {
  const curatedPhotosArray = useCuratedPhotosStore(
    (state) => state.curatedPhotosArray,
  );
  const minCuratedPhotos = useCuratedPhotosStore(
    (state) => state.minCuratedPhotos,
  );

  useEffect(() => {
    try {
      minCuratedPhotos();
    } catch (error) {
      throw new Error(console.log("Failed to fetch images."));
    }
  }, []);

  return (
    <div className="columns-container margin-auto-1440">
      {curatedPhotosArray?.map((photo) => {
        return (
          <ImageWrapper
            key={uuidv4()}
            photoObj={photo}
            photostash_url={photo.id}
            originalImg={photo.src.original}
            photographer={photo.photographer}
            src={photo.src.large + `&height=800&width=500`}
            alt={photo.alt}
          />
        );
      })}
    </div>
  );
}
