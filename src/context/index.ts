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
		{ id: 1, name: "Facebook", image: "/images/contact-image/facebook.png", url: "#" },
		{ id: 2, name: "Twitter", image: "/images/contact-image/zalo.png", url: "#" },
		{ id: 3, name: "Pinterest", image: "/images/contact-image/youtube.png", url: "#" },
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
