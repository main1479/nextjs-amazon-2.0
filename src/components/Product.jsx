/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import { useState } from 'react';
import { FormatPrice } from '../utils/helpers';

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ title, price, description, category, image, rating }) {
	const [hasPrime] = useState(Math.random() > 0.5);
	const tempStars = Array.from({ length: 5 }, (_, index) => {
		const number = index + 0.5;
		return (
			<span key={index} className="flex text-yellow-400">
				{rating.rate > number ? <BsStarFill /> : rating.rate > index ? <BsStarHalf /> : <BsStar />}
			</span>
		);
	});

	return (
		<div className="relative flex flex-col m-5 bg-white p-10 z-30 ">
			<p className="absolute py-3 px-5 text-xs text-gray-500 italic top-0 font-semibold right-0">
				{category}
			</p>
			<Image src={image} objectFit="contain" width={200} height={200} alt={title} />
			<h4 className="mt-5 mb-3 font-semibold">{title}</h4>
			<div className="flex">{tempStars}</div>
			<p className="text-xs my-2 line-clamp-2">{description}</p>
			<p className="font-semibold mb-3">
				<FormatPrice price={price} />
			</p>
			{hasPrime && (
				<div className="flex items-center -mt-3 mb-3 space-x-2">
					<img className="w-12" src="https://links.papareact.com/fdw" alt="Prime" />
					<p className="text-xs text-gray-500">Free next day delivery</p>
				</div>
			)}
			<button className="mt-auto button">Add To Cart</button>
		</div>
	);
}

export default Product;
