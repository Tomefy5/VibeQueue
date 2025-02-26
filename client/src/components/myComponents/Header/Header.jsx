import { Link } from "react-router-dom";
import MenuVibe from "./MenuVibe";
import Image from "../../../images/TaskFlow.png";
import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="rounded flex justify-between py-2 px-1">
      <div className="flex items-center">
        <MenuVibe />
        <Link to={"/"}>
          <h1 className="font-bold text-xl">VibeQueue</h1>
        </Link>
      </div>
      <div>
        <Button variant="circle">
          <Avatar className="shadow shadow-white">
            <AvatarImage src={Image} alt="Pdp" />
            <AvatarFallback>PDP</AvatarFallback>
          </Avatar>
        </Button>
      </div>
    </header>
  );
}
