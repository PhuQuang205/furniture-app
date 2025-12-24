import BreadcrumbHeader from "@/components/breadcrumb-header";
import { NavProfile } from "@/components";
import { CommitSection } from "@/components/section";

export default function AccountLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<BreadcrumbHeader
				title="Tài khoản của tôi"
				breadcrumbs={[
					{ label: "Trang chủ", href: "/" },
					{ label: "Tài khoản" },
				]}
			/>

			<div className="container mx-auto">
				<div className="px-8 lg:px-4 py-8 lg:py-16">
					<div className="flex flex-col lg:flex-row max-sm:items-center gap-8">
						<NavProfile />
						<div className="w-full">{children}</div>
					</div>
				</div>
			</div>
			<CommitSection />
		</>
	);
}
