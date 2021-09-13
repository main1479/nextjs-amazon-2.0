import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

export default function Stars({ rating }) {
	const tempStars = Array.from({ length: 5 }, (_, index) => {
		const number = index + 0.5;
		return (
			<span key={index} className="flex text-yellow-400">
				{rating > number ? <BsStarFill /> : rating > index ? <BsStarHalf /> : <BsStar />}
			</span>
		);
	});
	return <div className="flex">{tempStars}</div>;
}
