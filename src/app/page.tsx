'use client';
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Palette, 
  Brush, 
  Sparkles, 
  Star, 
  Zap, 
  Heart, 
  ArrowRight, 
  Play,
  Award,
  Users,
  Globe,
  Shield,
  Rocket,
  Target,
  Lightbulb,
  Camera,
  Music,
  Code,
  Paintbrush,
  Eye,
  Sparkle,
  ArrowUpRight,
  ChevronRight,
  CheckCircle
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 overflow-hidden">
      {/* Simple Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-indigo-500/15 rounded-lg blur-lg"></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-cyan-500/8 rounded-full blur-2xl"></div>
      </div>

      {/* Header */}
      <motion.header 
        className="relative bg-black/30 backdrop-blur-xl border-b border-blue-500/20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <motion.div 
                className="w-14 h-14 bg-gradient-to-br from-blue-500 via-cyan-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/25"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Palette className="w-8 h-8 text-white" />
              </motion.div>
              <motion.h1 
                className="ml-4 text-4xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent"
                whileHover={{ scale: 1.02 }}
              >
                Artlift
              </motion.h1>
            </motion.div>
            
            <nav className="hidden md:flex space-x-8">
              {[
                { href: "/", label: "Home", icon: Palette },
                { href: "/projects", label: "Projects", icon: Palette },
                { href: "/payment", label: "Services", icon: Brush },
              ].map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="flex items-center space-x-2 text-blue-200 hover:text-cyan-300 transition-colors duration-300 group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  <span>{item.label}</span>
                </motion.a>
              ))}
              
              <motion.a
                href="/payment"
                className="bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 text-white px-8 py-3 rounded-2xl font-semibold hover:from-blue-700 hover:via-cyan-700 hover:to-indigo-700 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 flex items-center justify-center space-x-2"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Rocket className="w-5 h-5" />
                <span>Get Started</span>
              </motion.a>
            </nav>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div 
          className="text-center relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Badge */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full text-blue-300 text-lg font-medium backdrop-blur-sm">
              <motion.div 
                className="w-3 h-3 bg-cyan-400 rounded-full mr-3"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <Sparkles className="w-5 h-5 mr-2" />
              Creating Digital Masterpieces Since 2024
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            className="text-7xl md:text-8xl font-bold mb-12 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Elevate Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Creative Vision
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-2xl text-blue-200 mb-16 max-w-5xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Transform your artistic dreams into reality with Artlift. We blend cutting-edge technology 
            with boundless creativity to create breathtaking digital masterpieces that inspire and captivate.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-8 justify-center mb-20"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <motion.a
              href="/projects"
              className="group bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 text-white px-12 py-6 rounded-3xl text-2xl font-bold hover:from-blue-700 hover:via-cyan-700 hover:to-indigo-700 transition-all duration-500 shadow-2xl hover:shadow-blue-500/30 transform hover:scale-105 flex items-center justify-center space-x-3"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Palette className="w-7 h-7 group-hover:rotate-12 transition-transform duration-300" />
              <span>Explore Our Portfolio</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </motion.a>

            <motion.a
              href="/payment"
              className="group border-2 border-blue-500/50 text-blue-300 px-12 py-6 rounded-2xl text-xl font-semibold hover:bg-blue-500/10 hover:border-cyan-400 transition-all duration-500 backdrop-blur-sm flex items-center justify-center space-x-3"
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" />
              <span>Start Your Project</span>
              <Zap className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid md:grid-cols-3 gap-10 relative z-10"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {[
            {
              icon: Lightbulb,
              title: "Creative Consultation",
              description: "Expert guidance to bring your artistic vision to life with personalized strategies and innovative approaches.",
              color: "from-blue-500 to-cyan-500",
              hoverColor: "hover:border-blue-400"
            },
            {
              icon: Paintbrush,
              title: "Custom Artwork",
              description: "Bespoke digital creations designed specifically for you, crafted with precision and artistic excellence.",
              color: "from-cyan-500 to-indigo-500",
              hoverColor: "hover:border-cyan-400"
            },
            {
              icon: Rocket,
              title: "Fast Delivery",
              description: "Quick turnaround times without compromising quality, ensuring your vision becomes reality swiftly.",
              color: "from-indigo-500 to-blue-500",
              hoverColor: "hover:border-indigo-400"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="group p-10 bg-black/20 backdrop-blur-xl rounded-3xl border border-blue-500/20 hover:border-blue-400/50 transition-all duration-700 hover:bg-black/30 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <motion.div 
                className={`w-24 h-24 bg-gradient-to-br ${feature.color} rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:shadow-2xl group-hover:shadow-blue-500/25 transition-all duration-500`}
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <feature.icon className="w-12 h-12 text-white" />
              </motion.div>
              <h3 className="text-3xl font-bold text-white mb-6 text-center group-hover:text-cyan-300 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-blue-200 text-center leading-relaxed text-lg group-hover:text-blue-100 transition-colors duration-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="mt-32 grid md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {[
            { icon: Users, number: "500+", label: "Happy Clients", color: "text-blue-400" },
            { icon: Award, number: "50+", label: "Awards Won", color: "text-cyan-400" },
            { icon: Globe, number: "25+", label: "Countries", color: "text-indigo-400" },
            { icon: Star, number: "4.9", label: "Rating", color: "text-blue-400" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className={`w-20 h-20 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <stat.icon className={`w-10 h-10 ${stat.color}`} />
              </motion.div>
              <div className="text-4xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                {stat.number}
              </div>
              <div className="text-blue-300 group-hover:text-blue-200 transition-colors duration-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="mt-32 text-center relative z-10"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="bg-gradient-to-r from-blue-900/50 via-cyan-900/50 to-indigo-900/50 backdrop-blur-xl rounded-3xl shadow-2xl border border-blue-500/20 p-20 max-w-6xl mx-auto">
            <motion.h2 
              className="text-5xl font-bold text-white mb-8"
              whileInView={{ scale: [0.9, 1] }}
              transition={{ duration: 0.6 }}
            >
              Ready to Create Something
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}Extraordinary?
              </span>
            </motion.h2>
            <p className="text-2xl text-blue-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              Join countless satisfied clients who have transformed their digital presence and lives 
              with Artlift's innovative artistic solutions and unparalleled creativity.
            </p>
            <motion.a
              href="/payment"
              className="inline-block bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 text-white px-16 py-6 rounded-3xl text-2xl font-bold hover:from-blue-700 hover:via-cyan-700 hover:to-indigo-700 transition-all duration-500 shadow-2xl hover:shadow-blue-500/30 transform hover:scale-105 flex items-center justify-center space-x-3 mx-auto"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles className="w-7 h-7" />
              <span>Start Your Masterpiece Today</span>
              <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </motion.a>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <motion.footer 
        className="relative bg-black/40 backdrop-blur-xl border-t border-blue-500/20 mt-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <motion.div 
                className="flex items-center mb-8"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-cyan-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                  <Palette className="w-7 h-7 text-white" />
                </div>
                <span className="ml-4 text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Artlift
                </span>
              </motion.div>
              <p className="text-blue-300 leading-relaxed text-lg">
                Elevating art and creativity through professional consultation and custom solutions. 
                We transform visions into digital masterpieces.
              </p>
            </div>
            
            {[
              {
                title: "Services",
                items: ["Art Consultation", "Custom Artwork", "Creative Solutions", "Project Management"]
              },
              {
                title: "Company",
                items: ["About Us", "Our Team", "Portfolio", "Contact"]
              },
              {
                title: "Connect",
                items: ["Get Started", "View Projects", "Client Portal", "Support"]
              }
            ].map((section, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold text-white mb-8">{section.title}</h3>
                <ul className="space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <motion.li 
                      key={itemIndex}
                      className="text-blue-300 hover:text-cyan-300 transition-colors cursor-pointer flex items-center space-x-2 group"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <motion.div 
            className="border-t border-blue-500/20 mt-16 pt-8 text-center text-blue-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
          >
            <p className="flex items-center justify-center space-x-2">
              <Shield className="w-5 h-5" />
              <span>© 2024 Artlift. All rights reserved. Secure payments powered by Stripe.</span>
            </p>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
}
