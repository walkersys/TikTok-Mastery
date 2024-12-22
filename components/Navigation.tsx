'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [progress, setProgress] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    const updateProgress = () => {
      const winScroll = document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (winScroll / height) * 100
      setProgress(scrolled)
    }

    window.addEventListener('scroll', updateProgress)
    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  return (
    <>
      <div className="progress-bar" style={{ width: `${progress}%` }} />
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-gray-800">
              BoughtOnTikTok
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link 
                href="/creators" 
                className={`nav-link text-gray-600 hover:text-gray-900 ${
                  pathname === '/creators' ? 'text-primary' : ''
                }`}
              >
                Content Creators
              </Link>
              <Link 
                href="/sellers"
                className={`nav-link text-gray-600 hover:text-gray-900 ${
                  pathname === '/sellers' ? 'text-primary' : ''
                }`}
              >
                Sellers
              </Link>
              <Link 
                href="/affiliates"
                className={`nav-link text-gray-600 hover:text-gray-900 ${
                  pathname === '/affiliates' ? 'text-primary' : ''
                }`}
              >
                Affiliates
              </Link>
              <Link 
                href="/features"
                className={`nav-link text-gray-600 hover:text-gray-900 ${
                  pathname === '/features' ? 'text-primary' : ''
                }`}
              >
                Features
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}