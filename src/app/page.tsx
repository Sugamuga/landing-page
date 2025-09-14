'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { 
  ArrowRight, 
  Zap, 
  Shield, 
  Sparkles, 
  Server, 
  Brain, 
  Shirt,
  CheckCircle,
  Star,
  Menu,
  X,
  Instagram,
  Linkedin
} from 'lucide-react'

// Button Component
const Button = ({ children, variant = 'primary', size = 'md', className = '', onClick, ...props }: {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  [key: string]: any
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2'
  const variants = {
    primary: 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl',
    secondary: 'bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm',
    ghost: 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
  }
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }
  
  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

// Card Component
const Card = ({ children, className = '', ...props }: {
  children: React.ReactNode
  className?: string
  [key: string]: any
}) => {
  return (
    <div className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 ${className}`} {...props}>
      {children}
    </div>
  )
}

// Navigation Component
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Sugamuga</span>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
            <a href="#why-us" className="text-gray-300 hover:text-white transition-colors">Why Us</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
            <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a>
            <Button variant="secondary" size="sm" onClick={() => window.location.href = 'mailto:contact@sugamuga.com'}>Get Started</Button>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4 space-y-4"
          >
            <a href="#services" className="block text-gray-300 hover:text-white transition-colors">Services</a>
            <a href="#why-us" className="block text-gray-300 hover:text-white transition-colors">Why Us</a>
            <a href="#pricing" className="block text-gray-300 hover:text-white transition-colors">Pricing</a>
            <a href="#testimonials" className="block text-gray-300 hover:text-white transition-colors">Testimonials</a>
            <Button variant="secondary" size="sm" className="w-full" onClick={() => window.location.href = 'mailto:contact@sugamuga.com'}>Get Started</Button>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

// Hero Section
const HeroSection = () => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-pink-900">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>
      
      <motion.div 
        style={{ y }}
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full px-6 py-2 text-purple-200 text-sm font-medium"
          >
            ✨ Transforming businesses with AI
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
              AI Transformation.
            </span>
            <br />
            <span className="text-white">On Your Own Terms.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From AI integration to self-hosted infrastructure, we empower your business 
            with cutting-edge technology while keeping you in complete control.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="group" onClick={() => window.location.href = 'mailto:contact@sugamuga.com'}>
              Start Your Transformation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="secondary" size="lg">
              Watch Demo
            </Button>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Floating elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-10 w-20 h-20 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-2xl backdrop-blur-sm hidden lg:block"
      />
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-1/3 right-10 w-16 h-16 bg-gradient-to-br from-pink-500/30 to-purple-500/30 rounded-full backdrop-blur-sm hidden lg:block"
      />
    </section>
  )
}

// Services Section
const ServicesSection = () => {
  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Transformation Consultancy",
      description: "Seamlessly integrate AI into your business processes. From strategy to implementation, we guide you through every step of your AI journey.",
      features: ["Custom AI Solutions", "Process Automation", "Data Analytics", "Team Training"]
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Self-Hosted Infrastructure",
      description: "Take control of your data with our self-hosted solutions. Mail servers, automation systems, and RAG implementations tailored to your needs.",
      features: ["Private Mail Servers", "Automation Systems", "RAG Implementation", "24/7 Support"]
    },
    {
      icon: <Shirt className="w-8 h-8" />,
      title: "Merch & Branding",
      description: "Showcase your tech-forward identity with our premium merchandise. Books, apparel, and branded materials that reflect innovation.",
      features: ["Technical Books", "Premium Apparel", "Custom Branding", "Fast Shipping"]
    }
  ]
  
  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive solutions designed to elevate your business in the digital age
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full hover:bg-white/10 transition-all duration-300">
                <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Why Sugamuga Section
const WhySection = () => {
  const reasons = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast Implementation",
      description: "We get your AI solutions up and running in weeks, not months. Our proven methodologies ensure rapid deployment without compromising quality."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Your Data, Your Control",
      description: "Complete ownership of your infrastructure and data. No vendor lock-in, no hidden dependencies. True digital sovereignty for your business."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Cutting-Edge Innovation",
      description: "Stay ahead of the curve with the latest AI technologies and best practices. We continuously update our solutions to leverage emerging innovations."
    }
  ]
  
  return (
    <section id="why-us" className="py-20 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Sugamuga</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're not just another tech consultancy. We're your partners in digital transformation.
          </p>
        </motion.div>
        
        <div className="space-y-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="flex-1">
                <Card className="p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="text-purple-400 mb-4">
                    {reason.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{reason.title}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">{reason.description}</p>
                </Card>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl backdrop-blur-sm border border-white/10 flex items-center justify-center">
                  <div className="text-6xl text-purple-400 opacity-50">
                    {reason.icon}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Pricing Section
const PricingSection = () => {
  const plans = [
    {
      name: "Basic",
      price: "$2,500",
      period: "one-time",
      description: "Perfect for startups ready to dip their toes into AI",
      features: [
        "AI Strategy Consultation",
        "Basic Implementation",
        "Email Support",
        "30-day Support"
      ],
      popular: false
    },
    {
      name: "Pro",
      price: "$7,500",
      period: "one-time",
      description: "Complete AI transformation for growing businesses",
      features: [
        "Full AI Integration",
        "Self-hosted Infrastructure",
        "Priority Support",
        "3-month Support",
        "Team Training",
        "Custom Solutions"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "quote",
      description: "Tailored solutions for large-scale operations",
      features: [
        "Everything in Pro",
        "Dedicated Team",
        "24/7 Support",
        "Unlimited Revisions",
        "SLA Guarantee",
        "White-label Options"
      ],
      popular: false
    }
  ]
  
  return (
    <section id="pricing" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Simple <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transparent pricing with no hidden fees. Choose the plan that fits your needs.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className={`relative ${plan.popular ? 'scale-105' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <Card className={`h-full p-8 ${plan.popular ? 'border-purple-500 bg-gradient-to-b from-purple-900/20 to-pink-900/20' : ''}`}>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    {plan.period !== 'quote' && (
                      <span className="text-gray-400 ml-2">/{plan.period}</span>
                    )}
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.popular ? 'primary' : 'secondary'} 
                  className="w-full"
                  onClick={() => window.location.href = 'mailto:contact@sugamuga.com'}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Testimonials Section
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, TechFlow Inc",
      content: "Sugamuga transformed our entire data infrastructure in just 6 weeks. The self-hosted solutions gave us the control we needed while maintaining enterprise-grade security.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Founder, InnovateLabs",
      content: "The AI integration was seamless. Our productivity increased by 300% and we maintained complete ownership of our data. Absolutely game-changing.",
      rating: 5
    },
    {
      name: "Emily Watson",
      role: "VP Operations, DataSync",
      content: "Professional, knowledgeable, and incredibly responsive. They delivered everything on time and exceeded our expectations. The team training was invaluable.",
      rating: 5
    }
  ]
  
  return (
    <section id="testimonials" className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders have to say about working with us.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full p-6 hover:bg-white/5 transition-all duration-300">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Footer Section
const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Sugamuga</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Empowering businesses with AI transformation and self-hosted infrastructure solutions. 
              Your data, your control, your success.
            </p>
            <div className="mb-6">
              <a href="mailto:contact@sugamuga.com" className="text-purple-400 hover:text-purple-300 transition-colors">
                contact@sugamuga.com
              </a>
            </div>
            <div className="flex space-x-4">
              <a href="https://instagram.com/sugamugaofficial" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="https://www.linkedin.com/company/109079268/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">AI Consultancy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Infrastructure Setup</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Merch & Branding</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Training</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="mailto:contact@sugamuga.com" className="hover:text-white transition-colors">Email Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">
              © 2025 Sugamuga. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-pink-500 to-slate-700 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies that have already taken control of their AI transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-slate-900 hover:bg-gray-100" onClick={() => window.location.href = 'mailto:contact@sugamuga.com'}>
                Schedule Free Consultation
              </Button>
              <Button size="lg" variant="ghost" className="text-white border-white hover:bg-white/10">
                View Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

// Main Page Component
export default function SugamugaLanding() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e: Event) {
        e.preventDefault()
        const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href')
        const target = document.querySelector(href!)
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' })
        }
      })
    })
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <WhySection />
      <PricingSection />
      <TestimonialsSection />
      <Footer />
    </div>
  )
}