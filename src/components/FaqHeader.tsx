import IconStar from '../assets/images/icon-star.svg?react';

const FaqHeader = () => {
	return (
		<header className="flex justify-start items-center gap-x-3 pt-10 px-[10px]">
			<IconStar />
			<h1 className="text-6xl font-bold text-gray-900 pl-3">FAQs</h1>
		</header>
	);
};

export default FaqHeader;
