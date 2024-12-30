import { CgProfile } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";

export const UserNav = () => {
  return (
    <div className="p-2 relative inline-block border rounded-full">
      <button className="flex items-center">
        <FiMenu size={20} />
        <CgProfile size={25} />
      </button>
    </div>
  );
};
