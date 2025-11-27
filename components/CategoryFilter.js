'use client'

const categories = [
  { id: 'all', name: 'All Products', icon: '🛍️' },
  { id: 'gaming', name: 'Gaming', icon: '🎮' },
  { id: 'cybersecurity', name: 'Cyber Security', icon: '🛡️' },
  { id: 'smartphones', name: 'Smartphones', icon: '📱' },
  { id: 'laptops', name: 'Laptops', icon: '💻' },
  { id: 'wearables', name: 'Wearables', icon: '⌚' },
  { id: 'audio', name: 'Audio', icon: '🎧' },
  { id: 'drones', name: 'Drones', icon: '🚁' },
  { id: 'smart-home', name: 'Smart Home', icon: '🏠' }
]

export default function CategoryFilter({ selectedCategory, onCategoryChange }) {
  return (
    <div className="flex overflow-x-auto space-x-4 py-4 mb-8 scrollbar-hide">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`flex items-center space-x-2 px-6 py-3 rounded-full whitespace-nowrap transition-all ${
            selectedCategory === category.id
              ? 'bg-accent text-black'
              : 'bg-gray-800 text-white hover:bg-gray-700'
          }`}
        >
          <span className="text-lg">{category.icon}</span>
          <span className="font-medium">{category.name}</span>
        </button>
      ))}
    </div>
  )
}
