"use client";

import type React from "react";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ImagePlus } from "lucide-react";

interface PhotoUploadProps {
	onPhotoSelect?: (file: File) => void;
}

export function PhotoUpload({ onPhotoSelect }: PhotoUploadProps) {
	const [dragActive, setDragActive] = useState(false);
	const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
	const fileInputRef = useRef<HTMLInputElement>(null);

	const handleDrag = (e: React.DragEvent) => {
		e.preventDefault();
		e.stopPropagation();
		if (e.type === "dragenter" || e.type === "dragover") {
			setDragActive(true);
		} else if (e.type === "dragleave") {
			setDragActive(false);
		}
	};

	const handleDrop = (e: React.DragEvent) => {
		e.preventDefault();
		e.stopPropagation();
		setDragActive(false);

		if (e.dataTransfer.files && e.dataTransfer.files[0]) {
			handleFile(e.dataTransfer.files[0]);
		}
	};

	const handleFile = (file: File) => {
		if (file.type.startsWith("image/")) {
			const reader = new FileReader();
			reader.onload = (e) => {
				setSelectedPhoto(e.target?.result as string);
			};
			reader.readAsDataURL(file);
			onPhotoSelect?.(file);
		}
	};

	const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			handleFile(e.target.files[0]);
		}
	};

	const openFileDialog = () => {
		fileInputRef.current?.click();
	};

	return (
		<div className="space-y-2">
			<div
				className={`size-40 border border-dashed p-4 cursor-pointer rounded-xl flex flex-col items-center justify-center ${
					dragActive ? "border-greenly bg-greenly/10" : "border-gray-300"
				}`}
				onDragEnter={handleDrag}
				onDragLeave={handleDrag}
				onDragOver={handleDrag}
				onDrop={handleDrop}
				onClick={openFileDialog}
			>
				{selectedPhoto ? (
					<div className="space-y-2 flex flex-col items-center mt-4">
						<div className="w-20 h-20 mx-auto rounded-full overflow-hidden">
							<Image
								src={selectedPhoto || "/placeholder.svg"}
								alt="Profile preview"
								className="size-20 object-cover"
								width={500}
								height={500}
							/>
						</div>
						<p className="text-sm text-black">Chọn ảnh khác</p>
					</div>
				) : (
					<div className="flex flex-col items-center justify-center">
						<ImagePlus className="size-9 text-black" />
						<p className="text-sm text-black">Kéo một ảnh</p>
					</div>
				)}
				<input
					ref={fileInputRef}
					type="file"
					accept="image/*"
					onChange={handleFileInput}
					className="hidden"
				/>
				<Button
					type="button"
					variant="outline"
					onClick={openFileDialog}
					className="w-full text-greenly font-semibold hover:bg-transparent   hover:text-greenly/90 border-none bg-transparent shadow-none"
				>
					Browse
				</Button>
			</div>
		</div>
	);
}
