import Head from 'next/head';
import { supabase } from 'lib/supabase';
import { GetStaticProps } from 'next';

import { Product } from 'interfaces/product';

interface Props {
  products: Product[];
}

export default function Home({ products }: Props) {
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

      <main className="flex space-x-4 mt-12">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-100 border border-transparent rounded-md transition duration-200 space-y-1 p-4 hover:border-blue-400"
          >
            <h1 className="font-semibold text-xl">{product.name}</h1>
            <p className="text-gray-700">{product.description}</p>
          </div>
        ))}
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data: products } = await supabase.from(`products`).select(`*`);

  return {
    props: { products },
  };
};
