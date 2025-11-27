'use client'
import { useState, useEffect } from 'react'
import Header from '../components/Header'
import ProductGrid from '../components/ProductGrid'
import AIChatBot from '../components/AIChatBot'
import CategoryFilter from '../components/CategoryFilter'

export default function Home() {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')

  useEffect(() => {
    const mockProducts = generateMockProducts()
    setProducts(mockProducts)
    setFilteredProducts(mockProducts)
  }, [])

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProducts(products)
    } else {
      setFilteredProducts(products.filter(product => 
        product.category === selectedCategory
      ))
    }
  }, [selectedCategory, products])

  return (
    <div className="min-h-screen gradient-bg">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold neon-text mb-4">
            ANON<span className="text-accent">BUY</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Next Generation Tech Marketplace • AI-Powered Shopping
          </p>
        </div>

        <CategoryFilter 
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <ProductGrid products={filteredProducts} />
      </main>
      
      <AIChatBot />
    </div>
  )
}

function generateMockProducts() {
  const categories = [
    'gaming', 'cybersecurity', 'smartphones', 'laptops', 
    'wearables', 'audio', 'drones', 'smart-home'
  ]
  
  const products = []
  
  for (let i = 1; i <= 100; i++) {
    const category = categories[Math.floor(Math.random() * categories.length)]
    const price = (Math.random() * 2000 + 50).toFixed(2)
    
    products.push({
      id: i,
      name: `Tech Product ${i}`,
      price: parseFloat(price),
      category: category,
      image: `https://picsum.photos/400/300?random=${i}`,
      rating: (Math.random() * 2 + 3).toFixed(1),
      reviews: Math.floor(Math.random() * 1000)
    })
  }
  
  return products
}
