import StripePaymentForm from '@/components/StripePaymentForm';
import StripeProvider from '@/components/StripeProvider';
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
  CreditCard,
  Lock,
  Shield as ShieldIcon,
  Zap as ZapIcon,
  Palette as PaletteIcon,
  Clock
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function PaymentPage() {
  return (
    <StripeProvider>
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
                  { href: "/", label: "Home", icon: PaletteIcon },
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
                Secure Payment Gateway
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
                Start Your
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Creative Project
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              className="text-2xl text-blue-200 mb-16 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Transform your artistic vision into reality with our secure payment system. 
              Choose your service, enter your details, and let's create something extraordinary together.
            </motion.p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Payment Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <StripePaymentForm />
            </motion.div>

            {/* Right Column - Features & Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="space-y-8"
            >
              {/* About Artlift */}
              <motion.div 
                className="bg-black/20 backdrop-blur-xl rounded-3xl border border-blue-500/20 p-8"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-4">
                    <Palette className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">About Artlift</h3>
                    <p className="text-blue-300">Professional Art Services</p>
                  </div>
                </div>
                <p className="text-blue-200 leading-relaxed">
                  We specialize in creating breathtaking digital and traditional artwork, providing expert consultation, 
                  and delivering custom solutions that transform spaces and inspire creativity.
                </p>
              </motion.div>

              {/* Security Features */}
              <motion.div 
                className="bg-black/20 backdrop-blur-xl rounded-3xl border border-blue-500/20 p-8"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Shield className="w-6 h-6 text-cyan-400 mr-3" />
                  Security Features
                </h3>
                <div className="space-y-4">
                  {[
                    { icon: Lock, text: "256-bit SSL encryption", color: "text-green-400" },
                    { icon: ShieldIcon, text: "PCI DSS compliant", color: "text-blue-400" },
                    { icon: ZapIcon, text: "Real-time fraud detection", color: "text-yellow-400" },
                    { icon: CheckCircle, text: "Secure payment processing", color: "text-cyan-400" }
                  ].map((feature, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <feature.icon className={`w-5 h-5 ${feature.color}`} />
                      <span className="text-blue-200">{feature.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Service Highlights */}
              <motion.div 
                className="bg-black/20 backdrop-blur-xl rounded-3xl border border-blue-500/20 p-8"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Star className="w-6 h-6 text-yellow-400 mr-3" />
                  Why Choose Artlift?
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Users, text: "Expert Team", color: "from-blue-500 to-cyan-500" },
                    { icon: Award, text: "Quality Guaranteed", color: "from-cyan-500 to-indigo-500" },
                    { icon: Clock, text: "Fast Delivery", color: "from-indigo-500 to-purple-500" },
                    { icon: Heart, text: "Customer Focused", color: "from-purple-500 to-pink-500" }
                  ].map((feature, index) => (
                    <motion.div 
                      key={index}
                      className="text-center p-4 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl border border-blue-500/20"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-blue-200 text-sm font-medium">{feature.text}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div 
                className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 backdrop-blur-xl rounded-3xl border border-blue-500/20 p-8 text-center"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <Shield className="w-6 h-6 text-cyan-400" />
                  <span className="text-cyan-300 font-semibold">Trusted by 500+ Clients</span>
                </div>
                <div className="flex items-center justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-blue-200 ml-2">4.9/5 Rating</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div 
            className="mt-32 text-center relative z-10"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
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
                Join countless satisfied clients who have transformed their spaces and lives with Artlift's 
                innovative artistic solutions and unparalleled creativity.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.a
                  href="/projects"
                  className="bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 text-white px-12 py-5 rounded-2xl text-xl font-semibold hover:from-blue-700 hover:via-cyan-700 hover:to-indigo-700 transition-all duration-500 shadow-2xl hover:shadow-blue-500/30 transform hover:scale-105 flex items-center justify-center space-x-3"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Palette className="w-6 h-6" />
                  <span>View Our Portfolio</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.a>
                
                <motion.a
                  href="/"
                  className="border-2 border-blue-500/50 text-blue-300 px-12 py-5 rounded-2xl text-xl font-semibold hover:bg-blue-500/10 hover:border-cyan-400 transition-all duration-500 backdrop-blur-sm flex items-center justify-center space-x-3"
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Palette className="w-6 h-6" />
                  <span>Back to Home</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </main>

        {/* Footer */}
        <motion.footer 
          className="relative bg-black/40 backdrop-blur-xl border-t border-blue-500/20 mt-32"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
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
              transition={{ duration: 1, delay: 1.4 }}
            >
              <p className="flex items-center justify-center space-x-2">
                <Shield className="w-5 h-5" />
                <span>© 2024 Artlift. All rights reserved. Secure payments powered by Stripe.</span>
              </p>
            </motion.div>
          </div>
        </motion.footer>
      </div>
    </StripeProvider>
  );
}
