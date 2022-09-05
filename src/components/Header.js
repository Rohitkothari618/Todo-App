import { GoThreeBars } from 'react-icons/go';
import { MdOutlineDashboard } from 'react-icons/md';
import { BsBell, BsFillFolderFill, BsPlus, BsSearch } from 'react-icons/bs';

const Header = () => {
  return (
    <header className="flex justify-between w-full h-16  px-8 text-gray-400 bg-[#21212B] shadow-lg">
      <div className="flex flex-row space-x-5">
        <div className="flex items-center justify-center">
          <GoThreeBars className="w-5 h-5 transition hover:text-white" />
        </div>
        <div className="flex items-center justify-center space-x-2 transition hover:text-white">
          <div>
            <MdOutlineDashboard className="w-4 h-4 " />
          </div>
          <div>Dashboard</div>
        </div>
        <div className="flex items-center justify-center space-x-2 transition hover:text-white">
          <div>
            <BsFillFolderFill className="w-4 h-4 " />
          </div>
          <div>Collections</div>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-5 text-white text-md">
        <div className="text-white transition cursor-pointer">
          <BsPlus className="w-6 h-6 transform rounded-lg hover:scale-105 bg-gradient-to-tr from-pink-700 via-pink-500 to-pink-300" />
        </div>
        <div>
          <BsSearch className="w-4 h-4 transition " />
        </div>
        <div>
          <BsBell className="w-4 h-4 transition" />
        </div>
        <div className="w-6 h-6 bg-white rounded-full" />
      </div>
    </header>
  );
};

export default Header;
