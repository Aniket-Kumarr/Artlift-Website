import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <h1 className="ml-3 text-2xl font-bold text-gray-900">Artlift</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-blue-600 font-semibold">
                About
              </Link>
              <Link href="/products" className="text-gray-700 hover:text-blue-600 transition-colors">
                Products
              </Link>
              <Link href="/payment" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Get Started
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            About Artlift
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming healthcare spaces through the power of art and creativity
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6">
              At Artlift, we believe that art has the power to heal, inspire, and transform. 
              Our mission is to bring beauty and serenity to healthcare environments, creating 
              spaces that promote healing and well-being for patients, families, and staff.
            </p>
            <p className="text-lg text-gray-600">
              We specialize in creating custom artwork and art consultation services specifically 
              designed for hospitals, clinics, and healthcare facilities, ensuring that every 
              piece contributes to a healing atmosphere.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
            <div className="w-full h-64 bg-gradient-to-br from-blue-200 to-purple-200 rounded-xl flex items-center justify-center">
              <svg className="w-24 h-24 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Creativity</h3>
              <p className="text-gray-600">
                We approach every project with fresh eyes and innovative thinking, 
                creating unique solutions for each healthcare environment.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Compassion</h3>
              <p className="text-gray-600">
                We understand the healing journey and create art that brings comfort, 
                hope, and tranquility to patients and their families.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality</h3>
              <p className="text-gray-600">
                We maintain the highest standards in materials, craftsmanship, and 
                service, ensuring lasting beauty and durability.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Expert Team</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-2xl">S</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Sarah Chen</h3>
                  <p className="text-blue-600">Lead Art Consultant</p>
                </div>
              </div>
              <p className="text-gray-600">
                With over 15 years of experience in healthcare art consultation, Sarah specializes 
                in creating healing environments that promote patient recovery and staff well-being.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-2xl">M</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Michael Rodriguez</h3>
                  <p className="text-purple-600">Creative Director</p>
                </div>
              </div>
              <p className="text-gray-600">
                Michael brings artistic vision and technical expertise to every project, ensuring 
                that each piece of art is both beautiful and perfectly suited for healthcare settings.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-xl p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Space?
            </h2>
            <p className="text-gray-600 mb-8">
              Let us help you create a healing environment through the power of art.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
              >
                View Our Products
              </Link>
              <Link
                href="/payment"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Start Consultation
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <span className="ml-2 text-xl font-bold">Artlift</span>
              </div>
              <p className="text-gray-400">
                Elevating healthcare spaces through the power of art and creativity.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Art Consultation</li>
                <li>Custom Artwork</li>
                <li>Healthcare Art</li>
                <li>Project Management</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li>Our Team</li>
                <li>Portfolio</li>
                <li>Contact</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/products" className="hover:text-white transition-colors">Products</Link></li>
                <li>Get Started</Link></li>
                <li>Client Portal</li>
                <li>Support</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Artlift. All rights reserved. Secure payments powered by Stripe.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

