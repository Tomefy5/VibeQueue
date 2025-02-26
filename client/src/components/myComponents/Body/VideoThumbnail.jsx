import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useState } from "react";
import ReactPlayer from "react-player";
import Image from "../../../images/Capture d’écran du 2025-02-26 12-44-18.png";

export default function VideoThumbnail({ videoUrl, thumbnail }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Card
      className="rounded-none"
      onMouseEnter={() => setIsPlaying(true)}
      onMouseLeave={() => setIsPlaying(false)}
    >
      <CardContent className="p-0">
        {isPlaying ? (
          <ReactPlayer
            url="/videos/1. Introduction.mp4"
            width="100%"
            height="100%"
            controls={false}
            volume={0}
            muted={true}
            loop={true}
            playbackRate={8}
            playing={isPlaying}
            playsinline
          />
        ) : (
          <img
            src={Image}
            alt="video's img"
            className="w-full h-full object-cover"
          />
        )}
        <CardFooter className="flex py-1 px-2">
          <h4 className="font-bold text-sm">Video&apos;s title</h4>
        </CardFooter>
      </CardContent>  
    </Card>
  );
}
