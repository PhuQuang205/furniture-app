"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

interface Address {
	id: string;
	firstName: string;
	lastName: string;
	street: string;
	city: string;
	phone: string;
	email: string;
}

const Address = () => {
	const formElement = useRef<HTMLFormElement>(null);
	const [editingId, setEditingId] = useState<string | null>(null);
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		streetAddress: "",
		city: "",
		phone: "",
		email: "",
	});
	const [addresses, setAddresses] = useState<Address[]>([
		{
			id: "1",
			firstName: "Bessie",
			lastName: "Cooper",
			street: "2464 Royal Ln.",
			city: "mesa",
			phone: "",
			email: "",
		},
		{
			id: "2",
			firstName: "Bessie",
			lastName: "Cooper",
			street: "6391 Elgin St.",
			city: "celina",
			phone: "",
			email: "",
		},
	]);

	console.log(formData);

	const handleEdit = (address: Address) => {
		setEditingId(address.id);
		setFormData({
			firstName: address.firstName,
			lastName: address.lastName,
			streetAddress: address.street,
			city: address.city,
			phone: address.phone,
			email: address.email,
		});
		formElement.current?.scrollIntoView({ behavior: "smooth", block: "start" });
	};

	const handleDelete = (id: string) => {
		setAddresses(addresses.filter((addr) => addr.id !== id));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (editingId) {
			// Update existing address
			setAddresses(
				addresses.map((addr) =>
					addr.id === editingId
						? {
								id: addr.id,
								firstName: formData.firstName,
								lastName: formData.lastName,
								street: formData.streetAddress,
								city: formData.city,
								phone: formData.phone,
								email: formData.email,
						  }
						: addr
				)
			);
			setEditingId(null);
		} else {
			// Add new address
			const newAddress: Address = {
				id: Date.now().toString(),
				firstName: formData.firstName,
				lastName: formData.lastName,
				street: formData.streetAddress,
				city: formData.city,
				phone: formData.phone,
				email: formData.email,
			};
			setAddresses([...addresses, newAddress]);
		}

		// Reset form
		setFormData({
			firstName: "",
			lastName: "",
			streetAddress: "",
			city: "",
			phone: "",
			email: "",
		});
	};

	const handleCancel = () => {
		setEditingId(null);
		setFormData({
			firstName: "",
			lastName: "",
			streetAddress: "",
			city: "",
			phone: "",
			email: "",
		});
	};

	return (
		<div className="space-y-6">
			<div className="space-y-4 border border-gray-300 p-4 rounded-2xl">
				{addresses.map((address) => (
					<div
						key={address.id}
						className="flex items-center justify-between not-last:border-b not-last:pb-4 border-gray-300"
					>
						<div>
							<h3 className="font-medium text-foreground">
								{address.firstName} {address.lastName}
							</h3>
							<p className="text-sm text-muted-foreground">
								{address.street} {address.city}
							</p>
						</div>
						<div className="flex gap-4 font-semibold">
							<button
								onClick={() => handleEdit(address)}
								className="text-sm text-greenly hover:underline underline-offset-4 cursor-pointer"
							>
								Sửa
							</button>
							<button
								onClick={() => handleDelete(address.id)}
								className="text-sm text-red-500 hover:underline underline-offset-4 cursor-pointer"
							>
								Xóa
							</button>
						</div>
					</div>
				))}
			</div>

			<div className="space-y-6">
				<h2 className="text-lg font-semibold text-foreground">
					{editingId ? "Chỉnh sửa địa chỉ" : "Thêm địa chỉ mới"}
				</h2>

				<form onSubmit={handleSubmit} className="space-y-4" ref={formElement}>
					<div className="grid grid-cols-2 gap-4">
						<div className="space-y-2">
							<Label htmlFor="firstName" className="text-md">
								Họ <span className="text-red-500">*</span>
							</Label>
							<Input
								id="firstName"
								placeholder="Ex. John"
								value={formData.firstName}
								onChange={(e) =>
									setFormData({ ...formData, firstName: e.target.value })
								}
								required
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="lastName" className="text-md">
								Tên <span className="text-red-500">*</span>
							</Label>
							<Input
								id="lastName"
								placeholder="Ex. Doe"
								value={formData.lastName}
								onChange={(e) =>
									setFormData({ ...formData, lastName: e.target.value })
								}
								required
							/>
						</div>
					</div>

					<div className="space-y-2">
						<Label htmlFor="streetAddress" className="text-md">
							Địa chỉ đường <span className="text-red-500">*</span>
						</Label>
						<Input
							id="streetAddress"
							placeholder="Enter Street Address"
							value={formData.streetAddress}
							onChange={(e) =>
								setFormData({ ...formData, streetAddress: e.target.value })
							}
							required
						/>
					</div>

					<div className="space-y-2">
						<Label htmlFor="city" className="text-md">
							Thành phố <span className="text-red-500">*</span>
						</Label>
						<Select
							value={formData.city}
							onValueChange={(value) =>
								setFormData({ ...formData, city: value })
							}
							required
						>
							<SelectTrigger className="w-full h-12 text-sm text-red-500">
								<SelectValue placeholder="Chọn thành phố" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="mesa">Mesa</SelectItem>
								<SelectItem value="celina">Celina</SelectItem>
								<SelectItem value="phoenix">Phoenix</SelectItem>
								<SelectItem value="tucson">Tucson</SelectItem>
							</SelectContent>
						</Select>
					</div>

					<div className="space-y-2">
						<Label htmlFor="phone" className="text-md">
							Số điện thoại <span className="text-red-500">*</span>
						</Label>
						<Input
							id="phone"
							type="tel"
							placeholder="Nhập số điện thoại"
							value={formData.phone}
							onChange={(e) =>
								setFormData({ ...formData, phone: e.target.value })
							}
							required
						/>
					</div>

					<div className="space-y-2">
						<Label htmlFor="email" className="text-md">
							Email <span className="text-red-500">*</span>
						</Label>
						<Input
							id="email"
							type="email"
							placeholder="Nhập địa chỉ email"
							value={formData.email}
							onChange={(e) =>
								setFormData({ ...formData, email: e.target.value })
							}
							required
						/>
					</div>

					<div className="flex gap-3">
						<Button
							type="submit"
							className="bg-greenly text-white hover:bg-greenly/80 h-12 cursor-pointer"
						>
							{editingId ? "Update Address" : "Add Address"}
						</Button>
						{editingId && (
							<Button
								type="button"
								variant="outline"
								onClick={handleCancel}
								className="h-12 cursor-pointer"
							>
								Cancel
							</Button>
						)}
					</div>
				</form>
			</div>
		</div>
	);
};

export default Address;
