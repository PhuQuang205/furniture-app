"use client";

import type React from "react";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ImagePlus } from "lucide-react";

interface PhotoUploadProps {
	onPhotoSelect?: (file: File) => void;
	initialImage?: string | null;
	disabled?: boolean;
}

export function PhotoUpload({
	disabled,
	onPhotoSelect,
	initialImage,
}: PhotoUploadProps) {
	const [dragActive, setDragActive] = useState(false);
	const [selectedPhoto, setSelectedPhoto] = useState<string | null>(
		initialImage || null
	);
	const fileInputRef = useRef<HTMLInputElement>(null);

	const handleDrag = (e: React.DragEvent) => {
		if (disabled) return;
		e.preventDefault();
		e.stopPropagation();
		if (e.type === "dragenter" || e.type === "dragover") setDragActive(true);
		else if (e.type === "dragleave") setDragActive(false);
	};

	const handleFile = (file: File) => {
		if (disabled) return;
		if (file.type.startsWith("image/")) {
			const reader = new FileReader();
			reader.onload = (e) => setSelectedPhoto(e.target?.result as string);
			reader.readAsDataURL(file);
			onPhotoSelect?.(file);
		}
	};

	const handleDrop = (e: React.DragEvent) => {
		if (disabled) return;

		e.preventDefault();
		e.stopPropagation();
		setDragActive(false);
		if (e.dataTransfer.files?.[0]) handleFile(e.dataTransfer.files[0]);
	};

	const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (disabled) return;

		if (e.target.files?.[0]) handleFile(e.target.files[0]);
	};

	const openFileDialog = () => fileInputRef.current?.click();

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
								src={
									selectedPhoto ||
									"https://i.pinimg.com/736x/03/5c/40/035c409a7450fe3149baec88d278d8b0.jpg"
								}
								unoptimized
								alt="Profile preview"
								className="size-20 object-cover"
								width={80}
								height={80}
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
					disabled={disabled}
				/>
				<Button
					type="button"
					variant="outline"
					disabled={disabled}
					onClick={openFileDialog}
					className="w-full text-greenly font-semibold hover:bg-transparent hover:text-greenly/90 border-none bg-transparent shadow-none"
				>
					Browse
				</Button>
			</div>
		</div>
	);
}
