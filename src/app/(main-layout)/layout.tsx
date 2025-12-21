import type { Metadata } from "next";
import { Inter, Monsieur_La_Doulaise } from "next/font/google";
import {
	FooterSection,
	HeaderSection,
	TopHeaderSection,
} from "@/components/section";
import { Toaster } from "@/components/ui/sonner";
import "@/app/globals.css";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["vietnamese"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	display: "swap",
});

const monsieur = Monsieur_La_Doulaise({
	variable: "--font-mosieur",
	subsets: ["latin"],
	weight: ["400"],
	display: "swap",
});

export const metadata: Metadata = {
	title: {
		default: "Nội Thất Hoàng Hà | Kiến Tạo Không Gian Sống Đẳng Cấp",
		template: "%s | Nội Thất Hoàng Hà",
	},
	description:
		"Nội Thất Hoàng Hà chuyên cung cấp nội thất gỗ tự nhiên, sofa hiện đại và giải pháp thiết kế không gian tinh tế. Biến ngôi nhà thành tổ ấm lý tưởng với chi phí tối ưu.",
	keywords: [
		"nội thất hoàng hà",
		"bàn ghế gỗ",
		"sofa phòng khách",
		"thiết kế nội thất đẹp",
		"nội thất phòng ngủ",
		"đồ gỗ cao cấp",
	],
	authors: [{ name: "Nội Thất Hoàng Hà" }],
	openGraph: {
		title: "Hoàng Hà - Nội Thất Tinh Tế Cho Ngôi Nhà Việt",
		description:
			"Khám phá bộ sưu tập nội thất mới nhất năm 2025. Chất lượng vượt trội, bảo hành dài hạn, giao hàng tận nơi.",
		url: "https://noithathoangha.com",
		siteName: "Nội Thất Hoàng Hà",
		images: [
			{
				url: "/images/og-interior.jpg",
				width: 1200,
				height: 630,
				alt: "Không gian nội thất sang trọng tại Hoàng Hà",
			},
		],
		locale: "vi_VN",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Nội Thất Hoàng Hà | Nâng Tầm Giá Trị Sống",
		description: "Ưu đãi lên đến 30% cho các gói thiết kế nội thất trọn gói.",
		images: ["/images/og-interior.jpg"],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${inter.variable} ${monsieur.variable} antialiased selection:bg-orange-100`}
			>
				<TopHeaderSection />
				<HeaderSection />
				<main className="min-h-screen">{children}</main>
				<FooterSection />
				<Toaster position="top-right" />
			</body>
		</html>
	);
}
