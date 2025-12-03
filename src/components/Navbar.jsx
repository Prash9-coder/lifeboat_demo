import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Close mobile menu when route changes
    useEffect(() => {
        setMobileMenuOpen(false)
        window.scrollTo(0, 0)
    }, [location])

    const menuItems = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'About', path: '/about' },
        { name: 'Projects', path: '/projects' },
        { name: 'Team', path: '/team' },
        { name: 'Testimonials', path: '/testimonials' },
        { name: 'Contact', path: '/contact' },
    ]

    const isActive = (path) => location.pathname === path

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-lg shadow-2xl py-2' : 'py-4 bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-3 cursor-pointer"
                    >
                        <Link to="/" className="flex items-center space-x-3">
                            <img
                                src="/assets/life logo.png"
                                alt="Lifeboat Technologies"
                                className="w-12 h-12 object-contain"
                            />
                            <span className="text-2xl font-bold font-display hidden sm:block text-gray-900">
                                Lifeboat <span className="text-[#32a162]">Technologies</span>
                            </span>
                        </Link>
                    </motion.div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {menuItems.map((item, index) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link
                                    to={item.path}
                                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 relative group ${isActive(item.path)
                                        ? 'text-[#3234a2]'
                                        : 'text-gray-700 hover:text-[#3234a2]'
                                        }`}
                                >
                                    {item.name}
                                    <span
                                        className={`absolute bottom-0 left-0 h-0.5 bg-[#3234a2] transition-all duration-300 ${isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
                                            }`}
                                    />
                                </Link>
                            </motion.div>
                        ))}

                        <Link to="/contact">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="ml-4 px-6 py-3 bg-[#32a162] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                            >
                                Get Started
                            </motion.button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        className="lg:hidden p-2 z-50"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? (
                            <HiX className="w-7 h-7 text-gray-900" />
                        ) : (
                            <HiMenu className="w-7 h-7 text-gray-900" />
                        )}
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200"
                    >
                        <div className="px-4 py-6 space-y-1">
                            {menuItems.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        to={item.path}
                                        className={`block px-4 py-3 rounded-lg font-medium ${isActive(item.path)
                                            ? 'text-[#3234a2] bg-[#3234a2]/10'
                                            : 'text-gray-700 hover:text-[#3234a2] hover:bg-gray-100'
                                            }`}
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <Link to="/contact">
                                <motion.button
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: menuItems.length * 0.1 }}
                                    className="w-full mt-4 px-6 py-3 bg-[#32a162] text-white rounded-xl font-semibold"
                                >
                                    Get Started 🚀
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}

export default Navbar