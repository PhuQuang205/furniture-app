import { Heart, Maximize2, Star } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export interface Product {
  id: string
  name: string
  category: string
  price: number
  originalPrice: number
  rating: number
  image: string
  discount: number
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const discountPercentage = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)

  return (
    <Card className="group relative overflow-hidden border-border bg-card transition-shadow hover:shadow-lg">
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Discount Badge */}
        {discountPercentage > 0 && (
          <div className="absolute left-3 top-3 rounded-md bg-success px-2.5 py-1 text-xs font-semibold text-white">
            {discountPercentage}% off
          </div>
        )}

        {/* Action Buttons */}
        <div className="absolute right-3 top-3 flex flex-col gap-2 opacity-0 transition-opacity group-hover:opacity-100">
          <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full bg-white shadow-md hover:bg-white/90">
            <Heart className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full bg-white shadow-md hover:bg-white/90">
            <Maximize2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <p className="text-xs text-muted-foreground">{product.category}</p>
        <h3 className="mt-1 font-medium text-foreground">{product.name}</h3>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-1">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium">{product.rating}</span>
        </div>

        {/* Price */}
        <div className="mt-2 flex items-center gap-2">
          <span className="text-lg font-bold text-foreground">${product.price.toFixed(2)}</span>
          {product.originalPrice > product.price && (
            <span className="text-sm text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>
          )}
        </div>
      </div>
    </Card>
  )
}
