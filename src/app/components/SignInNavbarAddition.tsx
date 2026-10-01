import { auth, signIn } from "../lib/auth";
import UserButton from "./UserButton";

export default async function SignInNavbarAddition() {
  const session = await auth();
  const user = session?.user;
  return user ? <UserButton user={user} /> : <SignInButton />;
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
        className="inline-flex items-center px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm tracking-wide border border-emerald-400 transition-colors duration-300 whitespace-nowrap"
      >
        Sign In
      </button>
    </form>
  );
}
