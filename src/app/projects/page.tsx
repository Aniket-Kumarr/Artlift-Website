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
  CheckCircle,
  Filter,
  Search,
  ExternalLink,
  Calendar,
  Clock,
  DollarSign,
  TrendingUp,
  Layers,
  Smartphone,
  Monitor,
  Tablet,
  Palette as PaletteIcon,
  Image as ImageIcon,
  Video,
  Headphones,
  Gamepad2,
  BookOpen,
  FileText,
  BarChart3,
  PieChart,
  Target as TargetIcon,
  Zap as ZapIcon,
  Heart as HeartIcon,
  Star as StarIcon
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const projects = [
  {
    id: 1,
    title: "Digital Art Masterpiece",
    category: "Digital Art",
    description: "A stunning digital painting that combines traditional techniques with modern technology, creating a masterpiece that transcends boundaries.",
    image: "/api/placeholder/400/300",
    price: "$2,500",
    duration: "2-3 weeks",
    rating: 5,
    reviews: 24,
    features: ["4K Resolution", "Print Ready", "Source Files", "Unlimited Revisions"],
    icon: PaletteIcon,
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "Traditional Oil Painting",
    category: "Traditional Art",
    description: "Handcrafted oil painting on canvas, showcasing classical techniques with contemporary subject matter and exceptional attention to detail.",
    image: "/api/placeholder/400/300",
    price: "$3,800",
    duration: "4-6 weeks",
    rating: 5,
    reviews: 18,
    features: ["Gallery Quality", "Certificate of Authenticity", "Framing Options", "Shipping Included"],
    icon: Paintbrush,
    color: "from-cyan-500 to-indigo-500"
  },
  {
    id: 3,
    title: "Art Consultation Package",
    category: "Consultation",
    description: "Comprehensive art consultation service including concept development, style analysis, and project planning for your creative vision.",
    image: "/api/placeholder/400/300",
    price: "$800",
    duration: "1-2 weeks",
    rating: 5,
    reviews: 32,
    features: ["Strategy Session", "Style Guide", "Project Roadmap", "Follow-up Support"],
    icon: Lightbulb,
    color: "from-indigo-500 to-blue-500"
  },
  {
    id: 4,
    title: "3D Digital Sculpture",
    category: "3D Art",
    description: "Advanced 3D modeling and sculpting work, perfect for game assets, product visualization, or artistic expression in three dimensions.",
    image: "/api/placeholder/400/300",
    price: "$4,200",
    duration: "3-4 weeks",
    rating: 5,
    reviews: 15,
    features: ["Multiple Formats", "Animation Ready", "Texture Maps", "Rendering Passes"],
    icon: Layers,
    color: "from-blue-500 to-purple-500"
  },
  {
    id: 5,
    title: "Mixed Media Installation",
    category: "Mixed Media",
    description: "Innovative mixed media artwork combining digital elements with physical materials, creating an immersive artistic experience.",
    image: "/api/placeholder/400/300",
    price: "$5,500",
    duration: "6-8 weeks",
    rating: 5,
    reviews: 12,
    features: ["Installation Guide", "Maintenance Manual", "Artist Statement", "Exhibition Support"],
    icon: Sparkles,
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 6,
    title: "Art Restoration Service",
    category: "Restoration",
    description: "Professional restoration of damaged or aged artwork, preserving the original beauty while ensuring longevity for future generations.",
    image: "/api/placeholder/400/300",
    price: "$1,200",
    duration: "2-4 weeks",
    rating: 5,
    reviews: 28,
    features: ["Condition Report", "Before/After Photos", "Conservation Materials", "Care Instructions"],
    icon: Shield,
    color: "from-pink-500 to-red-500"
  }
];

const categories = ["All", "Digital Art", "Traditional Art", "Consultation", "3D Art", "Mixed Media", "Restoration"];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Floating Geometric Shapes */}
        <motion.div 
          className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-40 right-32 w-24 h-24 bg-indigo-500/15 rounded-lg blur-lg"
          animate={{ x: [0, -80, 0], y: [0, 60, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-32 left-1/3 w-40 h-40 bg-cyan-500/8 rounded-full blur-2xl"
          animate={{ x: [0, 60, 0], y: [0, -80, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Rotating Rings */}
        <motion.div 
          className="absolute top-1/2 right-20 w-64 h-64 border border-blue-500/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-48 h-48 border border-indigo-500/15 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Sparkling Particles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
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
          className="text-center relative z-10 mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Badge */}
          <motion.div 
            className="mb-8"
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
              Our Creative Portfolio
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            className="text-6xl md:text-7xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Explore Our
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Artistic Universe
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-2xl text-blue-200 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Discover a world of creativity, innovation, and artistic excellence. Each project represents 
            our commitment to transforming visions into breathtaking digital and traditional masterpieces.
          </motion.p>

          {/* Search and Filter Bar */}
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-400" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  className="w-full pl-12 pr-4 py-4 bg-black/30 backdrop-blur-sm border border-blue-500/30 rounded-2xl text-white placeholder-blue-300 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                />
              </div>
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Filter className="w-5 h-5" />
                <span>Filter</span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                category === "All" 
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/25" 
                  : "bg-black/20 backdrop-blur-sm border border-blue-500/30 text-blue-300 hover:bg-blue-500/20 hover:border-cyan-400"
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group bg-black/20 backdrop-blur-xl rounded-3xl border border-blue-500/20 hover:border-blue-400/50 transition-all duration-700 hover:bg-black/30 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 overflow-hidden"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 overflow-hidden">
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <project.icon className="w-20 h-20 text-white opacity-60" />
                </div>
                <div className="absolute top-4 right-4">
                  <motion.div 
                    className="bg-black/50 backdrop-blur-sm rounded-full p-2"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Heart className="w-5 h-5 text-red-400" />
                  </motion.div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center space-x-1 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white text-sm font-medium">{project.rating}</span>
                    <span className="text-blue-300 text-xs">({project.reviews})</span>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-cyan-400 text-sm font-medium bg-cyan-500/20 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <motion.div 
                    className="text-2xl font-bold text-white"
                    whileHover={{ scale: 1.05 }}
                  >
                    {project.price}
                  </motion.div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-blue-200 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Project Stats */}
                <div className="flex items-center justify-between mb-6 text-sm text-blue-300">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{project.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4" />
                    <span>Premium</span>
                  </div>
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {project.features.slice(0, 4).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2 text-sm text-blue-200">
                      <CheckCircle className="w-4 h-4 text-cyan-400" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 rounded-2xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 flex items-center justify-center space-x-2 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>View Details</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
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
              Ready to Start Your
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}Creative Journey?
              </span>
            </motion.h2>
            <p className="text-2xl text-blue-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              Let's collaborate to bring your artistic vision to life. Our team of experts is ready 
              to create something extraordinary just for you.
            </p>
            <motion.a
              href="/payment"
              className="inline-block bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 text-white px-16 py-6 rounded-3xl text-2xl font-bold hover:from-blue-700 hover:via-cyan-700 hover:to-indigo-700 transition-all duration-500 shadow-2xl hover:shadow-blue-500/30 transform hover:scale-105 flex items-center justify-center space-x-3 mx-auto"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles className="w-7 h-7" />
              <span>Start Your Project Today</span>
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
