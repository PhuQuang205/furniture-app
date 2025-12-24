interface TestimonialCardProps {
	quote: string;
	name: string;
	title: string;
}

const TestimonialCard = ({ name, title }: TestimonialCardProps) => {
	return (
		<div className="absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur-sm rounded-lg p-6 text-white">
			{/* <blockquote className="text-sm leading-relaxed mb-4">"{quote}"</blockquote> */}
			<div>
				<div className="font-semibold">{name}</div>
				<div className="text-sm text-gray-300">{title}</div>
			</div>
			<div className="flex gap-1 mt-4">
				<div className="w-8 h-1 bg-yellow-400 rounded-full"></div>
				<div className="w-2 h-1 bg-gray-500 rounded-full"></div>
				<div className="w-2 h-1 bg-gray-500 rounded-full"></div>
			</div>
		</div>
	);
};

export default TestimonialCard;
