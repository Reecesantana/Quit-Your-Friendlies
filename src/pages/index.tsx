import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Last Set</title>
        <meta name='description' content='Quit your Friendlies' />
        <link rel='icon' href='/shine.png' />
      </Head>

      <main className='bg-neutral-100 text-neutral-800 mx-auto flex flex-col items-center min-h-screen'>
        <h1 className='text-3xl text-neutral-50 p-1 top-0 sticky'>Home</h1>
      </main>
    </>
  );
};

export default Home;
