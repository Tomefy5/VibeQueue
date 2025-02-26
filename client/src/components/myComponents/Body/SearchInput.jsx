import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="relative flex items-center w-full max-w-md mx-auto">
      <Input
        type="text"
        placeholder="Search..."
        className="pl-10 pr-4 py-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-primary shadow shadow-white"
      />
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
    </div>
  );
}
