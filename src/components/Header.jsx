/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import { MenuIcon, SearchIcon } from '@heroicons/react/outline';
import { FiShoppingBag } from 'react-icons/fi';
import { signIn, signOut, useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { selectItems } from '../slices/basketSlice';

function Header() {
	const [session] = useSession();
	const router = useRouter();
	const items = useSelector(selectItems);
	return (
		<header>
			{/* Top Nav */}
			<div className="flex items-center p-1 flex-grow py-2 bg-amazon_blue">
				<div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
					<Image
						onClick={() => router.push('/')}
						src="https://i.ibb.co/nMHYPsp/image.png"
						width="150"
						height="40"
						objectFit="contain"
						className="cursor-pointer"
						alt="Amazon2.0"
					/>
				</div>

				<div className="hidden sm:flex items-center flex-grow rounded-md h-10 bg-yellow-400  cursor-pointer hover:bg-yellow-500 ">
					<input
						type="text"
						className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none  px-4"
					/>
					<SearchIcon className="h-12 p-4 " />
				</div>

				<div className="text-white flex items-center space-x-6 text-xs mx-6 whitespace-nowrap">
					<div className="link" onClick={signIn}>
						<p>{session ? 'Hello, ' + session.user.name : 'SignIn'}</p>
						<p className="font-extrabold md:text-sm">Account & Lists</p>
					</div>
					<div className="link">
						<p>Returns</p>
						<p className="font-extrabold md:text-sm"> & Orders</p>
					</div>
					<div
						className="link relative flex items-center "
						onClick={() => router.push('/checkout')}
					>
						<span
							className="absolute top-0 right-0 md:right-11
            text-center bg-yellow-400 text-black font-bold w-4 h-4 rounded-full"
						>
							{items.length}
						</span>
						<FiShoppingBag className="h-10 w-8" />
						<p className="font-extrabold md:text-sm hidden md:inline mt-2 ">Basket</p>
					</div>
				</div>
			</div>

			{/* Bottom Nav */}
			<div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
				<p className="link flex items-center">
					<MenuIcon className="h-6 mr-1" />
					All
				</p>
				<p className="link">Prime Video</p>
				<p className="link">Amazon Business</p>
				<p className="link">Today's Deals</p>
				<p className="link hidden lg:inline">Electronic</p>
				<p className="link hidden lg:inline">Food & grocery</p>
				<p className="link hidden lg:inline">Prime</p>
				<p className="link hidden lg:inline">Buy Again </p>
				<p className="link hidden lg:inline">Shopper Toolkit</p>
				<p className="link hidden lg:inline">Health & Personal Care</p>
			</div>
		</header>
	);
}

export default Header;
