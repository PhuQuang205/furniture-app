import Image from "next/image"
import Link from "next/link"


  const categories = [
    {
      id: "chairs",
      name: "Chairs",
      itemCount: "1500+",
      image: "/modern-gray-upholstered-bar-stool-with-wooden-legs.jpg",
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
      span: "row-span-2", // Takes up 2 rows in the grid
    },
    {
      id: "sofa",
      name: "Sofa",
      itemCount: "750+",
      image: "/gray-tufted-armchair-with-wooden-legs.jpg",
      subcategories: ["Reception Sofa", "Sectional Sofa", "Armless Sofa", "Curved Sofa"],
      href: "/categories/sofa",
      span: "row-span-1",
    },
    {
      id: "lighting",
      name: "Lighting",
      itemCount: "450+",
      image: "/copper-bronze-pendant-light-fixture.jpg",
      subcategories: ["Table Lights", "Floor Lights", "Ceiling Lights", "Wall Lights"],
      href: "/categories/lighting",
      span: "row-span-1",
    },
  ]

export const IntroCategorySection = () => {
  return (
   <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 auto-rows-max">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              href={category.href}
              className={`group bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 ${
                index === 0 ? "lg:row-span-2" : ""
              }`}
            >
              <div className="flex flex-col lg:flex-row items-start gap-6 h-full">
                {/* Left Content */}
                <div className="flex-1 space-y-4">
                  <div className="space-y-2">
                    <span className="text-orange-500 font-semibold text-lg">{category.itemCount} Items</span>
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">{category.name}</h3>
                  </div>

                  {/* Subcategories List */}
                  <div className="space-y-2">
                    {category.subcategories.map((subcategory, subIndex) => (
                      <div key={subIndex} className="text-gray-600 text-sm">
                        {subcategory}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Image */}
                <div className="flex-shrink-0">
                  <div className="relative w-48 h-48 lg:w-56 lg:h-56">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
