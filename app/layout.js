import './globals.css'

export const metadata = {
  title: 'ANONBUY - Next Gen Tech Shop',
  description: 'The coolest tech marketplace with AI-powered shopping',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  )
}
