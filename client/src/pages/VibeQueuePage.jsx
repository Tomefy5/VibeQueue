import SearchBar from "@/components/myComponents/Body/SearchInput";
import VideoPlayer from "@/components/myComponents/Body/VideoPlayer";
import VideoThumbnail from "@/components/myComponents/Body/VideoThumbnail";
import BasicLayout from "@/layouts/BasicLayout";

export default function VibeQueuePage() {
  return (
    <BasicLayout>
      <div className="my-4">
        <SearchBar />
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-4 my-4 min-h-[70vh]">
          <div className="bg-purple-200">
            <VideoPlayer />
          </div>
          <div className="bg-purple-200 flex flex-col gap-2 overflow-y-auto max-h-[70vh]">
            <VideoThumbnail />
            <VideoThumbnail />
            <VideoThumbnail />
            <VideoThumbnail />
            <VideoThumbnail />
            <VideoThumbnail />
          </div>
        </div>
      </div>
    </BasicLayout>
  );
}
