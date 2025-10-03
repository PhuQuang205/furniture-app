import { Faq } from "@/app/faqs/page";
import { Product } from "@/components/product-card";

export const NAV_LINK = [
	{
		title: "Trang chủ",
		path: "/",
	},
	{
		title: "Cửa hàng",
		path: "/shop",
	},
	{
		title: "Danh mục",
		path: "/category",
	},
	{
		title: "Giới thiệu",
		path: "/about",
	},
	{
		title: "Liên hệ",
		path: "/contact",
	},
	{
		title: "Bài viết",
		path: "/blog",
	},
];

export const BANNER_CONTENT = [
	{
		image: "/images/dinner-room-warm.jpg",
		title: "Modern Kitchen Design",
		text: "Một không gian bếp hiện đại với tông màu xanh pastel kết hợp gỗ tự nhiên, tạo cảm giác vừa sang trọng vừa ấm cúng.",
		author: "Cameron Williamson",
		role: "Interior Designer",
	},
	{
		image: "/images/living-beauty.jpg",
		title: "Functional & Stylish",
		text: "Thiết kế ưu tiên công năng nhưng không kém phần thẩm mỹ, mang lại trải nghiệm nấu ăn thoải mái và tiện nghi.",
		author: "Cameron Williamson",
		role: "Interior Designer",
	},
	{
		image: "/images/living-room-white.jpg",
		title: "Warm Lighting Concept",
		text: "Ánh sáng vàng ấm được kết hợp tinh tế với hệ tủ và đảo bếp, mang lại cảm giác thư giãn và thân thiện.",
		author: "Cameron Williamson",
		role: "Interior Designer",
	},
	{
		image: "/images/living-room.jpg",
		title: "Minimalist Elegance",
		text: "Lối thiết kế tối giản nhưng tinh tế, chú trọng vào chất liệu và chi tiết nhỏ để tạo nên sự khác biệt.",
		author: "Cameron Williamson",
		role: "Interior Designer",
	},
];

export const FEATURES = [
	{
		id: 1,
		title: "Miễn phí vận chuyển",
		description: "Miễn phí giao hàng cho đơn trên 180.000VND",
		impage: "/resource/commit/1.png",
	},
	{
		id: 2,
		title: "Thanh toán linh hoạt",
		description: "Nhiều tùy chọn thanh toán an toàn",
		impage: "/resource/commit/2.png",
	},
	{
		id: 3,
		title: "Hỗ trợ 24/7",
		description: "Chúng tôi hỗ trợ trực tuyến mọi ngày",
		impage: "/resource/commit/3.png",
	},
];

export const CATEGORY_INTROS = [
	{
		id: "chairs",
		name: "Chairs",
		itemCount: "1500+",
		image: "/resource/category-image/1.png",
		subcategories: [
			"Gaming Chair",
			"Lounge Chair",
			"Folding Chair",
			"Dining Chair",
			"Office Chair",
			"Armchair",
			"Bar Stool",
			"Club Chair",
		],
		href: "/categories/chairs",
		span: "row-span-2",
	},
	{
		id: "table",
		name: "Sofa",
		itemCount: "750+",
		image: "/resource/category-image/2.png",
		subcategories: [
			"Reception Sofa",
			"Sectional Sofa",
			"Armless Sofa",
			"Curved Sofa",
		],
		href: "/categories/sofa",
		span: "row-span-1",
	},
	{
		id: "shelf",
		name: "shelf",
		itemCount: "450+",
		image: "/resource/category-image/3.png",
		subcategories: [
			"Table Lights",
			"Floor Lights",
			"Ceiling Lights",
			"Wall Lights",
		],
		href: "/categories/lighting",
		span: "row-span-1",
	},
];

export const PARTNER = [
	{
		id: 1,
		image: "/resource/partner/an-cuong.png",
	},
	{
		id: 2,
		image: "/resource/partner/cariny.png",
	},
	{
		id: 3,
		image: "/resource/partner/blum.png",
	},
	{
		id: 4,
		image: "/resource/partner/euro-gold.png",
	},
	{
		id: 5,
		image: "/resource/partner/euro-kit.png",
	},
	{
		id: 6,
		image: "/resource/partner/het-tich.png",
	},
	{
		id: 7,
		image: "/resource/partner/minh-long.png",
	},
];

export const ARTICLES = [
	{
		id: 1,
		date: "15 April 2024",
		title: "Furniture Trends 2024: What's Hot and What's Not",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
		image: "/resource/articles/articles-1.jpg",
	},
	{
		id: 2,
		date: "14 April 2024",
		title: "The Ultimate Guide to Choosing the Perfect Sofa",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
		image: "/resource/articles/articles-2.jpg",
	},
	{
		id: 3,
		date: "12 April 2024",
		title: "Choosing the Right Dining Table for Your Lifestyle",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
		image: "/resource/articles/articles-3.jpg",
	},
];

export const products: Product[] = [
	{
		id: "1",
		name: "Wooden Sofa Chair",
		category: "Chair",
		price: 80.0,
		originalPrice: 100.0,
		rating: 4.8,
		image: "/modern-wooden-chair-with-cushion.jpg",
		discount: 20,
	},
	{
		id: "2",
		name: "Circular Sofa Chair",
		category: "Chair",
		price: 108.0,
		originalPrice: 120.0,
		rating: 5.0,
		image: "/circular-papasan-chair.jpg",
		discount: 10,
	},
	{
		id: "3",
		name: "Wooden Nightstand",
		category: "Nightstand",
		price: 54.0,
		originalPrice: 60.0,
		rating: 4.8,
		image: "/wooden-nightstand-with-drawers.jpg",
		discount: 10,
	},
	{
		id: "4",
		name: "Bean Bag chair",
		category: "Chair",
		price: 72.0,
		originalPrice: 90.0,
		rating: 4.8,
		image: "/beige-bean-bag-chair.jpg",
		discount: 20,
	},
	{
		id: "5",
		name: "Wingback Chair",
		category: "Chair",
		price: 160.0,
		originalPrice: 200.0,
		rating: 4.9,
		image: "/leather-wingback-chair-tufted.jpg",
		discount: 20,
	},
	{
		id: "6",
		name: "Gaming Chair",
		category: "Chair",
		price: 90.0,
		originalPrice: 100.0,
		rating: 4.9,
		image: "/black-gaming-chair-ergonomic.jpg",
		discount: 10,
	},
	{
		id: "7",
		name: "Swivel Chair",
		category: "Chair",
		price: 60.0,
		originalPrice: 100.0,
		rating: 4.8,
		image: "/orange-swivel-office-chair.jpg",
		discount: 40,
	},
	{
		id: "8",
		name: "Table Lamp",
		category: "Lighting",
		price: 40.0,
		originalPrice: 60.0,
		rating: 4.9,
		image: "/ceramic-table-lamp-white.jpg",
		discount: 33,
	},
	{
		id: "9",
		name: "Nightstand Wooden",
		category: "Nightstand",
		price: 45.0,
		originalPrice: 50.0,
		rating: 4.9,
		image: "/wooden-nightstand-with-shelf.jpg",
		discount: 10,
	},
	{
		id: "10",
		name: "Bar Stool",
		category: "Chair",
		price: 48.0,
		originalPrice: 60.0,
		rating: 4.8,
		image: "/wooden-bar-stool-leather-seat.jpg",
		discount: 20,
	},
	{
		id: "11",
		name: "Bentwood Chair",
		category: "Chair",
		price: 40.0,
		originalPrice: 50.0,
		rating: 4.9,
		image: "/bentwood-dining-chair.jpg",
		discount: 20,
	},
	{
		id: "12",
		name: "Brown Bean Bag Chair",
		category: "Chair",
		price: 90.0,
		originalPrice: 100.0,
		rating: 4.9,
		image: "/brown-leather-bean-bag-chair.jpg",
		discount: 10,
	},
];

export const CONTACT_INFO = {
	address: "8502 Preston Rd. Inglewood, Maine 98380",
	contact: {
		phone: "+0123-456-789",
		email: "example@gmail.com",
	},
	openTime: [
		{
			day: "Thứ Hai – Thứ Sáu",
			time: "10:00 - 20:00",
		},
		{
			day: "Thứ Bảy – Chủ Nhật",
			time: "11:00 - 18:00",
		},
	],
	socialLinks: [
		{
			id: 1,
			name: "Facebook",
			image: "/images/contact-image/facebook.png",
			url: "#",
		},
		{
			id: 2,
			name: "Twitter",
			image: "/images/contact-image/zalo.png",
			url: "#",
		},
		{
			id: 3,
			name: "Pinterest",
			image: "/images/contact-image/youtube.png",
			url: "#",
		},
	],
};

export const STATS = [
	{
		id: 1,
		value: "25+",
		label: "Năm kinh nghiệm",
	},
	{
		id: 2,
		value: "180+",
		label: "Cửa hàng",
	},
	{
		id: 3,
		value: "100k+",
		label: "Khách hàng",
	},
	{
		id: 4,
		value: "35+",
		label: "Giải thưởng",
	},
	{
		id: 5,
		value: "98%",
		label: "Hài lòng",
	},
];

export const FAQDATA = [
	{
		id: 0,
		question: "Bạn cung cấp những loại nội thất nào?",
		answer:
			"+ Chúng tôi cung cấp đa dạng sản phẩm như bàn, ghế, tủ, giường, sofa và nhiều sản phẩm trang trí nội thất khác.",
	},
	{
		id: 1,
		question: "Bạn chấp nhận những phương thức thanh toán nào?",
		answer:
			"+ Chúng tôi chấp nhận thanh toán bằng tiền mặt khi nhận hàng (COD), chuyển khoản ngân hàng, và thẻ tín dụng/ghi nợ.",
	},
	{
		id: 2,
		question: "Tôi có thể theo dõi đơn hàng nội thất của mình không?",
		answer:
			"+ Có, sau khi đặt hàng thành công, bạn sẽ nhận được mã vận đơn để theo dõi trạng thái giao hàng.",
	},
	{
		id: 3,
		question: "Chính sách đổi trả của cửa hàng là gì?",
		answer:
			"+ Bạn có thể đổi/trả sản phẩm trong vòng 7 ngày nếu sản phẩm bị lỗi từ nhà sản xuất hoặc không đúng mô tả.",
	},
	{
		id: 4,
		question: "Nội thất được làm từ những chất liệu gì?",
		answer:
			"+ Các sản phẩm nội thất được làm từ gỗ tự nhiên, gỗ công nghiệp, kim loại, kính và vải bọc cao cấp.",
	},
	{
		id: 5,
		question: "Hiện tại có chương trình khuyến mãi nào không?",
		answer:
			"+ Chúng tôi thường xuyên có các chương trình giảm giá, khuyến mãi theo mùa. Vui lòng xem chi tiết tại trang khuyến mãi.",
	},
];

export const FAQS: Faq[] = [
	{
		id: "general",
		name: "Thông tin chung",
		questions: [
			{
				id: 1,
				question: "Làm thế nào để tôi có thể đặt hàng?",
				answer:
					"Bạn có thể đặt hàng bằng cách duyệt sản phẩm, thêm các mặt hàng vào giỏ, và tiến hành thanh toán. Chỉ cần làm theo các bước đơn giản để hoàn tất đơn hàng.",
			},
			{
				id: 2,
				question: "Bạn chấp nhận những phương thức thanh toán nào?",
				answer:
					"Chúng tôi chấp nhận nhiều phương thức thanh toán bao gồm thẻ tín dụng (Visa, Mastercard, American Express), PayPal và chuyển khoản ngân hàng. Tất cả giao dịch đều được bảo mật và mã hóa.",
			},
			{
				id: 3,
				question: "Bạn có cung cấp dịch vụ hỗ trợ khách hàng không?",
				answer:
					"Có, chúng tôi cung cấp dịch vụ hỗ trợ khách hàng 24/7 qua email, trò chuyện trực tuyến và điện thoại. Đội ngũ chuyên trách của chúng tôi luôn sẵn sàng hỗ trợ bạn với mọi câu hỏi hoặc thắc mắc.",
			},
			{
				id: 4,
				question: "Tôi có cần tạo tài khoản để mua hàng không?",
				answer:
					"Bạn không bắt buộc phải tạo tài khoản, nhưng việc đăng ký sẽ giúp bạn quản lý đơn hàng, lưu địa chỉ giao hàng và nhận các ưu đãi độc quyền.",
			},
			{
				id: 5,
				question: "Thời gian xử lý đơn hàng mất bao lâu?",
				answer:
					"Thông thường đơn hàng sẽ được xử lý trong vòng 24 giờ làm việc kể từ khi bạn thanh toán thành công. Một số đơn hàng đặc biệt có thể mất nhiều thời gian hơn.",
			},
			{
				id: 6,
				question: "Làm thế nào để theo dõi tình trạng đơn hàng?",
				answer:
					"Sau khi đặt hàng, bạn sẽ nhận được email xác nhận cùng mã theo dõi. Bạn có thể dùng mã này để theo dõi tình trạng giao hàng trực tuyến.",
			},
		],
	},
	{
		id: "ordering",
		name: "Đặt hàng & Giao hàng",
		questions: [
			{
				id: 4,
				question: "Tôi có thể theo dõi đơn hàng sau khi đặt không?",
				answer:
					"Có. Khi đơn hàng của bạn được gửi đi, bạn sẽ nhận được mã vận đơn qua email. Bạn có thể dùng mã này để theo dõi tình trạng giao hàng theo thời gian thực trên website của chúng tôi hoặc website của đơn vị vận chuyển.",
			},
			{
				id: 5,
				question: "Thời gian giao hàng mất bao lâu?",
				answer:
					"Giao hàng tiêu chuẩn thường mất từ 5–7 ngày làm việc. Ngoài ra, bạn có thể chọn gói giao hàng nhanh với thời gian từ 2–3 ngày. Đối với đơn hàng quốc tế, thời gian giao hàng có thể từ 10–15 ngày làm việc.",
			},
			{
				id: 6,
				question: "Bạn có giao hàng quốc tế không?",
				answer:
					"Có, chúng tôi giao hàng đến hầu hết các quốc gia trên thế giới. Chi phí vận chuyển và thời gian giao hàng sẽ khác nhau tùy theo địa điểm. Vui lòng tham khảo chính sách vận chuyển của chúng tôi để biết thêm chi tiết.",
			},
		],
	},
	{
		id: "returns",
		name: "Đổi trả & Trao đổi",
		questions: [
			{
				id: 7,
				question: "Chính sách đổi trả của bạn là gì?",
				answer:
					"Chúng tôi áp dụng chính sách đổi trả trong vòng 30 ngày cho hầu hết các sản phẩm. Sản phẩm phải còn nguyên vẹn, chưa qua sử dụng và trong bao bì gốc. Vui lòng liên hệ bộ phận chăm sóc khách hàng để bắt đầu quy trình đổi trả.",
			},
			{
				id: 8,
				question: "Làm thế nào để tôi đổi một sản phẩm?",
				answer:
					"Để đổi sản phẩm, hãy liên hệ với bộ phận chăm sóc khách hàng, cung cấp số đơn hàng và sản phẩm bạn muốn đổi. Chúng tôi sẽ hướng dẫn bạn chi tiết các bước thực hiện.",
			},
			{
				id: 9,
				question: "Ai sẽ chịu phí vận chuyển khi trả hàng?",
				answer:
					"Nếu sản phẩm bị lỗi hoặc giao sai, chúng tôi sẽ chịu phí vận chuyển trả hàng. Với các trường hợp đổi trả khác, khách hàng sẽ chịu phí vận chuyển.",
			},
		],
	},
	{
		id: "payments",
		name: "Thanh toán & Khuyến mãi",
		questions: [
			{
				id: 10,
				question: "Bạn có chương trình khuyến mãi hay giảm giá không?",
				answer:
					"Có, chúng tôi thường xuyên có các chương trình khuyến mãi và giảm giá. Hãy đăng ký nhận bản tin để nhận ưu đãi độc quyền và cập nhật sớm nhất về các đợt giảm giá.",
			},
			{
				id: 11,
				question: "Tôi có thể sử dụng nhiều mã giảm giá cùng lúc không?",
				answer:
					"Thông thường, mỗi đơn hàng chỉ áp dụng được một mã giảm giá. Tuy nhiên, một số chương trình khuyến mãi đặc biệt có thể được áp dụng chồng. Vui lòng kiểm tra điều khoản và điều kiện của từng ưu đãi.",
			},
			{
				id: 12,
				question: "Thông tin thanh toán của tôi có an toàn không?",
				answer:
					"Hoàn toàn an toàn. Chúng tôi sử dụng chuẩn mã hóa SSL để bảo vệ thông tin thanh toán của bạn. Chúng tôi không bao giờ lưu trữ đầy đủ thông tin thẻ tín dụng trên hệ thống.",
			},
		],
	},
	{
		id: "account",
		name: "Tài khoản & Hồ sơ",
		questions: [
			{
				id: 13,
				question: "Làm thế nào để tạo tài khoản?",
				answer:
					'Nhấn vào nút "Đăng ký" ở góc trên bên phải, điền thông tin bao gồm email và mật khẩu, sau đó xác minh email để hoàn tất đăng ký.',
			},
			{
				id: 14,
				question: "Tôi có thể thay đổi thông tin tài khoản không?",
				answer:
					"Có, bạn có thể cập nhật thông tin tài khoản bất cứ lúc nào bằng cách đăng nhập và vào phần cài đặt tài khoản. Bạn có thể thay đổi email, mật khẩu và địa chỉ giao hàng.",
			},
			{
				id: 15,
				question: "Làm thế nào để đặt lại mật khẩu?",
				answer:
					'Nhấn vào "Quên mật khẩu" ở trang đăng nhập, nhập địa chỉ email của bạn và làm theo hướng dẫn trong email để đặt lại mật khẩu.',
			},
		],
	},
];
