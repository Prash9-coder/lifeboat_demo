// Navbar.jsx - CLEANED (No logo background color)
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const menuItems = ['services', 'about', 'projects', 'team', 'testimonials', 'contact']

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
                className={`fixed w-full z-50 transition-all duration-500 ${scrolled
                    ? 'bg-white/95 backdrop-blur-lg shadow-2xl py-2'
                    : 'py-4 bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center space-x-3 cursor-pointer z-50"
                        >
                            <motion.div
                                animate={{
                                    rotate: [0, 360],
                                    scale: [1, 1.1, 1]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                            >
                                {/* Logo Image - NO BACKGROUND COLOR */}
                                <img
                                    src="src/assets/life logo.png"
                                    alt="Lifeboat Technologies"
                                    className="w-14 h-14 object-contain"
                                />
                            </motion.div>
                            <span className="text-2xl font-bold font-display hidden sm:block text-gray-900">
                                Lifeboat <span className="text-accent">Technologies</span>
                            </span>
                        </motion.div>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex items-center space-x-1">
                            {menuItems.map((item, index) => (
                                <motion.div
                                    key={item}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        to={item}
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                        className="px-4 py-2 rounded-lg font-medium cursor-pointer transition-all duration-300 capitalize relative group text-gray-700 hover:text-gray-900"
                                    >
                                        {item}
                                        <motion.span
                                            className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 bg-primary"
                                        />
                                    </Link>
                                </motion.div>
                            ))}

                            {/* CTA Button */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="ml-4 px-6 py-3 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all bg-accent"
                            >
                                Get Started
                            </motion.button>
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            className="lg:hidden p-2 z-50"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <AnimatePresence mode="wait">
                                {mobileMenuOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                    >
                                        <HiX className="w-7 h-7 text-gray-900" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                    >
                                        <HiMenu className="w-7 h-7 text-gray-900" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
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
                            transition={{ duration: 0.3 }}
                            className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200"
                        >
                            <div className="px-4 py-6 space-y-1">
                                {menuItems.map((item, index) => (
                                    <motion.div
                                        key={item}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link
                                            to={item}
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={500}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="block px-4 py-3 rounded-lg font-medium capitalize cursor-pointer transition-all text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                                        >
                                            {item}
                                        </Link>
                                    </motion.div>
                                ))}
                                <motion.button
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: menuItems.length * 0.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full mt-4 px-6 py-3 text-white rounded-xl font-semibold bg-accent"
                                >
                                    Get Started 🚀
                                </motion.button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </>
    )
}

export default Navbar