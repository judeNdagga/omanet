import avatarPlaceholder from "../../../public/images/avatar_placeholder.png"
import { User } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { CiSettings } from "react-icons/ci";
import { PiSignOut } from "react-icons/pi";
import { signOut } from "../lib/auth";


interface UserButtonProps {
  user: User;
}

export default function UserButton({ user }: UserButtonProps) {
  return (
    
    <div className="dropdown dropdown-hover bg-inherit border-none">
      <div tabIndex={0} role="button" className="p-0 bg-transparent border-none hover:bg-transparent cursor-pointer">
        <Image
          src={user.image || avatarPlaceholder}
          alt="User profile picture"
          width={40}
          height={40}
          className="w-9 h-9 rounded-full ring-2 ring-emerald-400 hover:ring-white transition duration-300"
        />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-emerald-800 rounded-xl z-[1] w-48 p-2 shadow-xl mt-2"
      >
           <li>
          <a>{user.name || "User"}</a>
        </li>
        <li>
          <a className="flex"><CiSettings className="text-2xl"/> Settings</a>
        </li>
        <form 
        action={async() => {
          "use server";
          await signOut();
        } }>
        <li>
          <button type="submit" className="flex"><PiSignOut className="text-2xl"/> Sign Out</button>
        </li>
        </form>
       
      </ul>
    </div>
  
  );
}