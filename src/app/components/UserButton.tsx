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
    
    <div className="dropdown dropdown-hover bg-inherit border-none mt-10 sm:mt-0">
      <div tabIndex={0} role="button" className="btn m-1 bg-inherit border-none hover:bg-transparent">
      <Image
          src={user.image || avatarPlaceholder}
          alt="User profile picture"
          width={1000}
          height={1000}
          className="w-[6em] avatar aspect-square rounded-full hover:scale-150 transition duration-500"
        />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-gradient-to-r from-green-800 to-green-300 rounded-box z-[1] w-52 p-2 shadow"
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