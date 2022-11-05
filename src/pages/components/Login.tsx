import { useSession, signIn, signOut } from "next-auth/react";
export default function Login() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <button
          className='bg-sky-400 text-neutral-50 w-64 h-12 justify-center text-center text-2xl font-weight:600 bottom-0 absolute'
          onClick={() => signOut()}
        >
          Sign Out
        </button>
      </>
    );
  }
  return (
    <>
      <button
        className='bg-sky-400 text-neutral-50 w-64 h-12 justify-center text-center text-2xl font-weight:600 bottom-0 absolute'
        onClick={() => signIn()}
      >
        Sign In
      </button>
    </>
  );
}
