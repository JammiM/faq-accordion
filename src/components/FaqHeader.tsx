import IconStar from '../assets/images/icon-star.svg?react';

const FaqHeader = () => {
	return (
		<header className="flex items-center justify-start gap-x-3 px-[10px] pt-10">
			<IconStar />
			<h1 className="pl-3 text-6xl font-bold text-gray-900">FAQs</h1>
		</header>
	);
};

export default FaqHeader;
