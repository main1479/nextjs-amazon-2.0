/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Product from './Product';

function ProductFeed({ products }) {
	return (
		<div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-0 md:-mt-52">
			{products.slice(0, 4).map((product) => (
				<Product key={product.id} {...product} />
			))}
			<img className="col-span-full mx-auto" src="https://links.papareact.com/dyz" alt="banner" />

			<div className="md:col-span-2">
				{products.slice(4, 5).map((product) => (
					<Product key={product.id} {...product} />
				))}
			</div>
			{products.slice(5, products.length).map((product) => (
				<Product key={product.id} {...product} />
			))}
		</div>
	);
}

export default ProductFeed;
