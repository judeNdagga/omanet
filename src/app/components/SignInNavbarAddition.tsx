import { auth, signIn } from "../lib/auth";
import Link from "next/link";
import UserButton from "./UserButton";

export default async function SignInNavbarAddition() {
  const session = await auth();
  const user = session?.user;
  return (
    <div className="fixed z-50 sm:z-50 right-1 sm:right-[28%] mt-0 sm:mt-7 bg-transparent">
      {user ? <UserButton user={user} /> : <SignInButton />}
    </div>
  );
}

function SignInButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn();
      }}
    >
      <button
        type="submit"
        className="mt-12 sm:mt-2 btn rounded-full text-white 
       bg-gradient-to-r
        from-green-800 to-green-300
         border-none hover:scale-150 transition
          duration-500"
      >
        SIGN IN
      </button>
    </form>
  );
}
