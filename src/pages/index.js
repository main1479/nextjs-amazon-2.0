import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner';
import ProductFeed from '../components/ProductFeed';

export default function Home({ products }) {
	return (
		<>
			<Head>
				<title>Amazon 2.0</title>
			</Head>
			{/* Header */}
			<Header />
			<main className="max-w-screen-2xl mx-auto bg-gray-100">
				{/* Banner */}
				<Banner />

				{/* Product Feed */}
				<ProductFeed products={products} />
			</main>
		</>
	);
}

export async function getServerSideProps(context) {
	const res = await fetch('https://fakestoreapi.com/products');
	const products = await res.json();

	return {
		props: {
			products,
		},
	};
}
