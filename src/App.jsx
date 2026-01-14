import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Zap, Shield, Target, TrendingUp, ArrowRight, Menu, X, Cpu, Activity, Cloud, Lock } from 'lucide-react'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const heroRef = useRef(null)
  const featuresRef = useRef(null)
  const bentoRef = useRef(null)
  const ctaRef = useRef(null)
  
  const heroInView = useInView(heroRef, { once: true })
  const featuresInView = useInView(featuresRef, { once: true })
  const bentoInView = useInView(bentoRef, { once: true })
  const ctaInView = useInView(ctaRef, { once: true })

  const title = "Aether Mind"
  const subtitle = "The Future of AI Intelligence"

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* HEADER */}
      <header className="fixed top-0 w-full bg-black/80 backdrop-blur-2xl z-50 border-b border-white/5">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-cosmic-purple to-purple-700 rounded-lg flex items-center justify-center">
              <Cpu className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold tracking-tight">Aether Mind</span>
          </motion.div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-400 hover:text-cosmic-purple transition-colors duration-300">Features</a>
            <a href="#advantages" className="text-gray-400 hover:text-cosmic-purple transition-colors duration-300">Advantages</a>
            <a href="#contact" className="text-gray-400 hover:text-cosmic-purple transition-colors duration-300">Contact</a>
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block bg-cosmic-purple hover:bg-purple-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 glow-purple-hover"
          >
            Get Started
          </motion.button>

          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-2xl border-t border-white/5"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col space-y-4">
              <a href="#features" className="text-gray-400 hover:text-cosmic-purple transition-colors">Features</a>
              <a href="#advantages" className="text-gray-400 hover:text-cosmic-purple transition-colors">Advantages</a>
              <a href="#contact" className="text-gray-400 hover:text-cosmic-purple transition-colors">Contact</a>
              <button className="bg-cosmic-purple hover:bg-purple-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-colors">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </header>

      {/* HERO SECTION */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-gradient pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(138,43,226,0.1)_0%,transparent_70%)]" />
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            className="mb-8"
          >
            <h1 className="text-7xl md:text-9xl font-thin tracking-tighter mb-4">
              {title.split('').map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  className="inline-block"
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-3xl md:text-4xl text-cosmic-purple font-light mb-8 tracking-tight"
          >
            {subtitle}
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Harness the power of next-generation artificial intelligence. Our cutting-edge platform transforms complex data into actionable insights, empowering your business to reach unprecedented heights.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-cosmic-purple hover:bg-purple-700 text-white px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 glow-purple-hover"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/5 hover:bg-white/10 text-white px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300 backdrop-blur-xl border border-white/10"
            >
              Watch Demo
            </motion.button>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* FEATURES SECTION */}
      <section id="features" ref={featuresRef} className="py-32 px-6 bg-black relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(138,43,226,0.05)_0%,transparent_50%)]" />
        
        <div className="container mx-auto relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: featuresInView ? 1 : 0, y: featuresInView ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-thin tracking-tighter text-center mb-6"
          >
            Powerful <span className="text-cosmic-purple font-light">Features</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: featuresInView ? 1 : 0, y: featuresInView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center text-gray-500 text-xl mb-20 font-light"
          >
            Everything you need to revolutionize your AI workflow
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: 'Lightning Fast', desc: 'Process millions of data points in milliseconds with our optimized neural architecture' },
              { icon: Shield, title: 'Enterprise Security', desc: 'Military-grade encryption and compliance with global data protection standards' },
              { icon: Cloud, title: 'Cloud Native', desc: 'Seamlessly scale across distributed systems with automatic load balancing' },
              { icon: Activity, title: 'Real-time Analytics', desc: 'Monitor performance metrics and gain insights with live dashboards' },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ 
                  opacity: featuresInView ? 1 : 0, 
                  y: featuresInView ? 0 : 30,
                  scale: featuresInView ? 1 : 0.9
                }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/5 backdrop-blur-2xl p-8 rounded-2xl border border-white/10 hover:border-cosmic-purple/50 transition-all duration-300 group"
              >
                <div className="bg-cosmic-purple/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cosmic-purple/20 transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-cosmic-purple" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 tracking-tight">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed font-light">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BENTO GRID SECTION */}
      <section id="advantages" ref={bentoRef} className="py-32 px-6 bg-black relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(138,43,226,0.05)_0%,transparent_50%)]" />
        
        <div className="container mx-auto relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: bentoInView ? 1 : 0, y: bentoInView ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-thin tracking-tighter text-center mb-20"
          >
            Why Choose <span className="text-cosmic-purple font-light">Aether Mind</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Large card - spans 2 columns */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ 
                opacity: bentoInView ? 1 : 0, 
                y: bentoInView ? 0 : 30,
                scale: bentoInView ? 1 : 0.9
              }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="md:col-span-2 bg-gradient-to-br from-cosmic-purple/10 to-purple-900/10 backdrop-blur-2xl p-12 rounded-3xl border border-cosmic-purple/30 hover:border-cosmic-purple/60 transition-all duration-300"
            >
              <Target className="w-12 h-12 text-cosmic-purple mb-6" />
              <h3 className="text-4xl font-semibold mb-4 tracking-tight">Precision Intelligence</h3>
              <p className="text-gray-400 text-lg leading-relaxed font-light">
                Our advanced machine learning algorithms deliver 99.7% accuracy in predictive analytics, helping you make data-driven decisions with confidence. Train custom models in minutes, not days.
              </p>
            </motion.div>

            {/* Small card */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ 
                opacity: bentoInView ? 1 : 0, 
                y: bentoInView ? 0 : 30,
                scale: bentoInView ? 1 : 0.9
              }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-2xl p-8 rounded-3xl border border-white/10 hover:border-cosmic-purple/50 transition-all duration-300"
            >
              <Lock className="w-10 h-10 text-cosmic-purple mb-4" />
              <h3 className="text-2xl font-semibold mb-3 tracking-tight">Secure by Design</h3>
              <p className="text-gray-400 leading-relaxed font-light">
                End-to-end encryption with zero-knowledge architecture
              </p>
            </motion.div>

            {/* Small card */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ 
                opacity: bentoInView ? 1 : 0, 
                y: bentoInView ? 0 : 30,
                scale: bentoInView ? 1 : 0.9
              }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-2xl p-8 rounded-3xl border border-white/10 hover:border-cosmic-purple/50 transition-all duration-300"
            >
              <TrendingUp className="w-10 h-10 text-cosmic-purple mb-4" />
              <h3 className="text-2xl font-semibold mb-3 tracking-tight">Scalable Growth</h3>
              <p className="text-gray-400 leading-relaxed font-light">
                From startup to enterprise, scale seamlessly
              </p>
            </motion.div>

            {/* Large card - spans 2 columns */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ 
                opacity: bentoInView ? 1 : 0, 
                y: bentoInView ? 0 : 30,
                scale: bentoInView ? 1 : 0.9
              }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              className="md:col-span-2 bg-gradient-to-br from-purple-900/10 to-cosmic-purple/10 backdrop-blur-2xl p-12 rounded-3xl border border-cosmic-purple/30 hover:border-cosmic-purple/60 transition-all duration-300"
            >
              <Cpu className="w-12 h-12 text-cosmic-purple mb-6" />
              <h3 className="text-4xl font-semibold mb-4 tracking-tight">Neural Architecture</h3>
              <p className="text-gray-400 text-lg leading-relaxed font-light">
                Built on cutting-edge transformer models and reinforcement learning frameworks. Our proprietary architecture processes natural language with human-level comprehension while maintaining blazing-fast inference speeds.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section ref={ctaRef} className="py-32 px-6 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(138,43,226,0.15)_0%,transparent_70%)]" />
        
        <div className="container mx-auto text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: ctaInView ? 1 : 0, y: ctaInView ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-thin tracking-tighter mb-6"
          >
            Ready to <span className="text-cosmic-purple font-light">Transform</span> Your Business?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: ctaInView ? 1 : 0, y: ctaInView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light"
          >
            Join thousands of companies already leveraging Aether Mind. Start your free trial today—no credit card required.
          </motion.p>
          
          <motion.button 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: ctaInView ? 1 : 0, y: ctaInView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-cosmic-purple hover:bg-purple-700 text-white px-14 py-5 rounded-xl text-xl font-semibold transition-all duration-300 glow-purple-hover inline-flex items-center gap-3"
          >
            Start Free Trial
            <ArrowRight className="w-6 h-6" />
          </motion.button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-white/5 py-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-cosmic-purple to-purple-700 rounded-lg flex items-center justify-center">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">Aether Mind</span>
            </div>
            
            <div className="flex gap-8 text-gray-500 text-sm">
              <a href="#" className="hover:text-cosmic-purple transition-colors">Privacy</a>
              <a href="#" className="hover:text-cosmic-purple transition-colors">Terms</a>
              <a href="#" className="hover:text-cosmic-purple transition-colors">Documentation</a>
            </div>
          </div>
          
          <div className="text-center text-gray-600 text-sm mt-8 font-light">
            © 2024 Aether Mind. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App