import ReactPlayer from "react-player";
import { Card, CardContent, CardFooter } from "../../ui/card";

export default function VideoPlayer() {
  return (
    <Card className="w-full h-full rounded-none">
      <CardContent>
        <ReactPlayer
          url="/videos/1. Introduction.mp4"
          controls={true}
          width="100%"
          height="100%"
        />
        <CardFooter className="flex py-1 px-2">
          <h4 className="font-bold">Video&apos;s title</h4>
        </CardFooter>
      </CardContent>
    </Card>
  );
}
