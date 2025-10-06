import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const OrderCard = () => {
	return (
		<div className="rounded-2xl overflow-hidden border border-gray-300">
			<div className="bg-yelly">
				{/* Tieeu ddee */}
				<div className="p-4 flex justify-between flex-wrap">
					<div className="flex flex-col pr-4 gap-2 border-r border-black/10">
						<p className="text-sm text-black/60">Order ID</p>
						<h3 className="text-black text-sm lg:text-md font-medium">#34ISDFHSD</h3>
					</div>					
					<div className="flex flex-col pr-4 gap-2 border-r border-black/10">
						<p className="text-sm text-black/60">Order ID</p>
						<h3 className="text-black text-sm lg:text-md font-medium">#34ISDFHSD</h3>
					</div>					
					<div className="flex flex-col pr-4 gap-2 border-r border-black/10">
						<p className="text-sm text-black/60">Order ID</p>
						<h3 className="text-black text-sm lg:text-md font-medium">#34ISDFHSD</h3>
					</div>					
					<div className="flex flex-col gap-2">
						<p className="text-sm text-black/60">Order ID</p>
						<h3 className="text-black text-sm lg:text-md font-medium">#34ISDFHSD</h3>
					</div>					
				</div>
			</div>

			{/* Phan order */}
			<div className="p-4">
        <div className="border-b border-b-gray-300 py-2">
          <div className="flex items-center gap-4">
            <div className="size-24 flex items-center justify-center bg-subbg rounded-lg">
              <Image src="https://i.pinimg.com/1200x/fe/72/50/fe725093cc70ce613ee7269ac25a1bab.jpg" alt="" width={50} height={50} className="size-18 object-contain"/>
            </div>
            <div className="flex flex-col">
              <h3 className="font-medium text-md">Ghế Sofa Phòng Khách</h3>
              <p className="text-sm text-black/60">Số lượng: 2</p>
            </div>
          </div>
        </div>
        <div className="border-b border-b-gray-300 py-2">
          <div className="flex items-center gap-4">
            <div className="size-24 flex items-center justify-center bg-subbg rounded-lg">
              <Image src="https://i.pinimg.com/1200x/fe/72/50/fe725093cc70ce613ee7269ac25a1bab.jpg" alt="" width={50} height={50} className="size-18 object-contain"/>
            </div>
            <div className="flex flex-col">
              <h3 className="font-medium text-md">Ghế Sofa Phòng Khách</h3>
              <p className="text-sm text-black/60">Số lượng: 2</p>
            </div>
          </div>
        </div>
        <div className="border-b border-b-gray-300 py-2">
          <div className="flex items-center gap-4">
            <div className="size-24 flex items-center justify-center bg-subbg rounded-lg">
              <Image src="https://i.pinimg.com/1200x/fe/72/50/fe725093cc70ce613ee7269ac25a1bab.jpg" alt="" width={50} height={50} className="size-18 object-contain"/>
            </div>
            <div className="flex flex-col">
              <h3 className="font-medium text-md">Ghế Sofa Phòng Khách</h3>
              <p className="text-sm text-black/60">Số lượng: 2</p>
            </div>
          </div>
        </div>
        <div className="border-b border-b-gray-300 py-2">
          <div className="flex items-center gap-4">
            <div className="size-24 flex items-center justify-center bg-subbg rounded-lg">
              <Image src="https://i.pinimg.com/1200x/fe/72/50/fe725093cc70ce613ee7269ac25a1bab.jpg" alt="" width={50} height={50} className="size-18 object-contain"/>
            </div>
            <div className="flex flex-col">
              <h3 className="font-medium text-md">Ghế Sofa Phòng Khách</h3>
              <p className="text-sm text-black/60">Số lượng: 2</p>
            </div>
          </div>
        </div>
      </div>
			{/* Xu ly don hang hoac huy don hang */}
			<div className="p-4">
				<div className="flex gap-2">
					<Badge variant="outline" className="rounded-full">
						Đã chấp nhận
					</Badge>
					<p className="text-sm ">Đơn hàng của bạn đã được chấp nhận</p>
				</div>
				<div className="mt-8 flex justify-between items-center">
					<div className="flex gap-1.5">
						<Button>Theo dõi</Button>
						<Button variant="outline">Hóa đơn</Button>
					</div>
          <Button variant="empty" className="cursor-pointer hover:bg-white/10">Hủy đơn</Button>
				</div>
			</div>
		</div>
	);
};
