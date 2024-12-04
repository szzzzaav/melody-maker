import { SiMusicbrainz } from "react-icons/si";
import { FaItunes } from "react-icons/fa";
interface SideBarProps {}

const Header: React.FC<
  SideBarProps
> = () => {
  return (
    <div className="flex flex-row  gap-x-2 h-[20%] w-full">
      <div className="bg-neutral-900 rounded-lg h-full w-[20%]">
        <div className="flex flex-col gap-4 px-5 py-7 w-full">
          <div className="flex flex-row h-auto items-center w-full gap-x-4 text-md font-medium cursor-pointer hover:text-white transition text-neutral-200 py-1">
            <SiMusicbrainz />
            <div>
              SonarCraft-BeatMaker
            </div>
          </div>
          <div className="flex flex-row h-auto items-center w-full gap-x-4 text-md font-medium cursor-pointer hover:text-white transition text-neutral-400 py-1">
            <FaItunes />
            <div>compose with AI</div>
          </div>
        </div>
      </div>

      <div className="h-full bg-gradient-to-b from-indigo-600 via-purple-600  to-orange-600 p-6 w-full rounded-lg flex items-end ">
        <h1 className="text-white text-3xl font-semibold">
          Welcome Back
        </h1>
      </div>
    </div>
  );
};

export default Header;
