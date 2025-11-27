'use client'
import { Star, Heart } from 'lucide-react'

export default function ProductGrid({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product.id} className="product-card bg-secondary rounded-lg overflow-hidden border border-gray-800">
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <button className="absolute top-2 right-2 p-1 bg-black bg-opacity-50 rounded-full hover:bg-accent transition-colors">
              <Heart size={20} />
            </button>
          </div>
          
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
            
            <div className="flex items-center mb-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-400 ml-2">
                ({product.reviews})
              </span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-accent">
                ${product.price}
              </span>
              <button className="bg-accent text-black px-4 py-2 rounded-lg font-semibold hover:bg-green-400 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
