import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import {
    FaArrowRight,
    FaPaintBrush,
    FaShoppingCart,
    FaBullhorn,
    FaHeadset
} from 'react-icons/fa'
import {
    HiOutlineCode,
    HiOutlineDeviceMobile,
    HiOutlineGlobe,
    HiOutlineChip,
    HiOutlineCloud,
    HiOutlineChatAlt2
} from 'react-icons/hi'

const Services = () => {
    const navigate = useNavigate()

    const services = [
        {
            id: 'software-development',
            icon: <HiOutlineCode className="text-4xl" />,
            title: 'Software Development',
            description: 'Custom software solutions tailored to your business needs with modern technologies, scalable architecture, and best practices.',
            gradient: 'from-[#3234a2] to-[#32a162]',
            image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
            features: ['Custom Solutions', 'Scalable Architecture', 'Clean Code', 'Agile Development'],
            stats: { projects: '150+', clients: '80+', satisfaction: '98%' }
        },
        {
            id: 'web-applications',
            icon: <HiOutlineGlobe className="text-4xl" />,
            title: 'Web Applications',
            description: 'Responsive, fast, and scalable web applications that deliver exceptional user experiences across all devices.',
            gradient: 'from-[#3234a2] to-[#4a4cff]',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
            features: ['Responsive Design', 'SEO Optimized', 'Fast Performance', 'Modern UI/UX'],
            stats: { websites: '200+', uptime: '99.9%', speed: '<2s' }
        },
        {
            id: 'mobile-apps',
            icon: <HiOutlineDeviceMobile className="text-4xl" />,
            title: 'Mobile Applications',
            description: 'Native and cross-platform mobile applications for iOS and Android with stunning interfaces and smooth performance.',
            gradient: 'from-[#32a162] to-[#3bc475]',
            image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
            features: ['iOS & Android', 'Cross-Platform', 'Offline Support', 'Push Notifications'],
            stats: { apps: '100+', downloads: '5M+', rating: '4.8★' }
        },
        {
            id: 'ai-automation',
            icon: <HiOutlineChip className="text-4xl" />,
            title: 'AI & Automation',
            description: 'Intelligent automation solutions powered by machine learning and artificial intelligence to transform your business.',
            gradient: 'from-[#3234a2] to-[#32a162]',
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
            features: ['Machine Learning', 'Process Automation', 'Chatbots', 'Predictive Analytics'],
            stats: { automation: '70%', accuracy: '95%', savings: '40%' }
        },
        {
            id: 'cloud-devops',
            icon: <HiOutlineCloud className="text-4xl" />,
            title: 'Cloud & DevOps',
            description: 'Scalable cloud infrastructure and DevOps practices for reliable, secure, and efficient operations.',
            gradient: 'from-[#32a162] to-[#288a52]',
            image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
            features: ['AWS/Azure/GCP', 'CI/CD Pipeline', 'Docker & Kubernetes', '24/7 Monitoring'],
            stats: { uptime: '99.99%', deployments: '500+', servers: '200+' }
        },
        {
            id: 'digital-marketing',
            icon: <HiOutlineChatAlt2 className="text-4xl" />,
            title: 'SMS & WhatsApp Marketing',
            description: 'Powerful SMS and WhatsApp marketing solutions to reach your customers directly with personalized campaigns.',
            gradient: 'from-[#3234a2] to-[#4a4cff]',
            image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=600&h=400&fit=crop',
            features: ['Bulk SMS', 'WhatsApp Business API', 'Campaign Analytics', 'Automated Messages'],
            stats: { messages: '10M+', delivery: '99%', clients: '500+' }
        },
        {
            id: 'ui-ux-design',
            icon: <FaPaintBrush className="text-4xl" />,
            title: 'UI/UX Design',
            description: 'Beautiful, intuitive, and user-centered designs that create memorable digital experiences for your users.',
            gradient: 'from-[#32a162] to-[#3bc475]',
            image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
            features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
            stats: { designs: '300+', users: '1M+', satisfaction: '97%' }
        },
        {
            id: 'ecommerce-solutions',
            icon: <FaShoppingCart className="text-4xl" />,
            title: 'E-Commerce Solutions',
            description: 'Complete e-commerce solutions from online stores to multi-vendor marketplaces with secure payment integration.',
            gradient: 'from-[#3234a2] to-[#32a162]',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
            features: ['Online Stores', 'Payment Gateway', 'Inventory Management', 'Order Tracking'],
            stats: { stores: '100+', transactions: '$50M+', products: '1M+' }
        },
        {
            id: 'support-maintenance',
            icon: <FaHeadset className="text-4xl" />,
            title: 'Support & Maintenance',
            description: '24/7 technical support and maintenance services to keep your applications running smoothly and securely.',
            gradient: 'from-[#32a162] to-[#288a52]',
            image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop',
            features: ['24/7 Support', 'Bug Fixes', 'Security Updates', 'Performance Optimization'],
            stats: { response: '<1hr', resolution: '95%', clients: '200+' }
        }
    ]

    // Show only first 6 services on home page
    const displayedServices = services.slice(0, 6)

    const handleViewService = (serviceId) => {
        navigate(`/services/${serviceId}`)
    }

    const handleViewAllServices = () => {
        navigate('/services')
    }

    return (
        <section
            id="services"
            className="py-24 relative overflow-hidden bg-gray-50"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%233234a2' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: 'spring', stiffness: 100 }}
                        className="inline-block mb-4"
                    >
                        <span className="px-4 py-2 rounded-full text-sm font-semibold bg-[#3234a2]/10 text-[#3234a2] border border-[#3234a2]/20">
                            🚀 What We Offer
                        </span>
                    </motion.div>

                    <h2 className="text-4xl md:text-6xl font-black mb-6 font-display text-gray-900">
                        Our <span className="bg-gradient-to-r from-[#3234a2] to-[#32a162] bg-clip-text text-transparent">Services</span>
                    </h2>

                    <p className="text-xl max-w-2xl mx-auto text-gray-600">
                        Comprehensive software solutions to accelerate your digital transformation
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayedServices.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            className="group cursor-pointer"
                            onClick={() => handleViewService(service.id)}
                        >
                            <div className="h-full rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-500 relative">

                                {/* Image with Overlay */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-70 group-hover:opacity-50 transition-opacity duration-500`} />

                                    {/* Icon */}
                                    <motion.div
                                        whileHover={{ rotate: 360, scale: 1.1 }}
                                        transition={{ duration: 0.5 }}
                                        className="absolute top-4 right-4 w-14 h-14 bg-white/20 backdrop-blur-xl rounded-xl flex items-center justify-center text-white shadow-lg"
                                    >
                                        {service.icon}
                                    </motion.div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#3234a2] transition-colors">
                                        {service.title}
                                    </h3>

                                    <p className="mb-4 text-gray-600 text-sm line-clamp-2">
                                        {service.description}
                                    </p>

                                    {/* Features */}
                                    <div className="space-y-2 mb-4">
                                        {service.features.slice(0, 3).map((feature, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: idx * 0.1 }}
                                                className="flex items-center space-x-2"
                                            >
                                                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
                                                <span className="text-sm text-gray-600">
                                                    {feature}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Stats */}
                                    <div className="flex justify-between items-center pt-4 border-t border-gray-100 mb-4">
                                        {Object.entries(service.stats).slice(0, 3).map(([key, value], idx) => (
                                            <div key={idx} className="text-center">
                                                <div className={`text-sm font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                                                    {value}
                                                </div>
                                                <div className="text-xs text-gray-500 capitalize">{key}</div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA Button */}
                                    <motion.button
                                        whileHover={{ x: 5 }}
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            handleViewService(service.id)
                                        }}
                                        className={`flex items-center space-x-2 font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent group/btn`}
                                    >
                                        <span>Learn More</span>
                                        <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform text-[#3234a2]" />
                                    </motion.button>
                                </div>

                                {/* Hover Shine Effect */}
                                <motion.div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                    style={{
                                        background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
                                        backgroundSize: '200% 200%',
                                    }}
                                    animate={{
                                        backgroundPosition: ['0% 0%', '100% 100%'],
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                    }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View All Services Button */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleViewAllServices}
                        className="px-10 py-4 bg-gradient-to-r from-[#3234a2] to-[#32a162] text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-shadow"
                    >
                        View All Services →
                    </motion.button>
                </motion.div>
            </div>
        </section>
    )
}

export default Services