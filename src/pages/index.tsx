import Head from 'next/head';

export default function Home() {
  return (
    <div className="w-full max-w-screen-md p-4 mx-auto">
      <Head>
        <title>Yes, i build a saas</title>
        <meta
          name="description"
          content="Yes, i build a saas with nextjs, tailwindcss, supabase, stripe, and more."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex space-x-3">Hi</main>
    </div>
  );
}
