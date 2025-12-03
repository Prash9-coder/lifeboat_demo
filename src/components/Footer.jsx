import { motion } from 'framer-motion'
import { FaHeart, FaLinkedin, FaTwitter, FaGithub, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    const footerLinks = {
        Services: [
            { name: 'Web Development', path: '/services' },
            { name: 'Mobile Apps', path: '/services' },
            { name: 'AI & ML', path: '/services' },
            { name: 'Cloud Solutions', path: '/services' },
            { name: 'UI/UX Design', path: '/services' },
        ],
        Company: [
            { name: 'About Us', path: '/about' },
            { name: 'Our Team', path: '/team' },
            { name: 'Projects', path: '/projects' },
            { name: 'Testimonials', path: '/testimonials' },
            { name: 'Contact', path: '/contact' },
        ],
    }

    const contactInfo = [
        { name: 'contact@lifeboat.co.in', href: 'mailto:contact@lifeboat.co.in', icon: FaEnvelope },
        { name: '+91 9014651719', href: 'tel:+919014651719', icon: FaPhone },
        { name: 'Hanamkonda, Telangana', href: 'https://maps.app.goo.gl/xynyqCDBtkNt5KFN6', icon: FaMapMarkerAlt },
    ]

    const socialLinks = [
        { Icon: FaLinkedin, link: 'https://linkedin.com/company/lifeboat-tech' },
        { Icon: FaInstagram, link: 'https://instagram.com/lifeboattech' },
    ]

    return (
        <footer className="relative overflow-hidden bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer */}
                <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Logo & Description */}
                    <div className="lg:col-span-1">
                        <Link to="/" className="flex items-center space-x-3 mb-6">
                            <img src="/assets/logo1.png" alt="Lifeboat" className="w-30 h-30 object-contain" />
                            {/* <span className="text-2xl font-bold font-display">
                                Lifeboat <span className="text-[#32a162]">Tech</span>
                            </span> */}
                        </Link>
                        <p className="text-gray-400 mb-6">
                            Building the future, one line of code at a time. Transform your ideas into innovative digital solutions.
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-3">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.2, y: -3 }}
                                    className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#3234a2] transition-all"
                                >
                                    <social.Icon className="text-lg" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Services</h3>
                        <ul className="space-y-3">
                            {footerLinks.Services.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-400 hover:text-[#32a162] transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Company</h3>
                        <ul className="space-y-3">
                            {footerLinks.Company.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-400 hover:text-[#32a162] transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Contact</h3>
                        <ul className="space-y-3">
                            {contactInfo.map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={item.href}
                                        target={item.href.startsWith('http') ? '_blank' : '_self'}
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                                    >
                                        <item.icon className="text-[#32a162]" />
                                        <span className="text-sm">{item.name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="py-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm">
                        © {currentYear} Lifeboat Technologies. All rights reserved. Made with{' '}
                        <FaHeart className="inline text-red-500" /> in Hanamkonda
                    </p>
                    <div className="flex gap-6 text-sm">
                        <a href="#" className="text-gray-400 hover:text-white">Privacy</a>
                        <a href="#" className="text-gray-400 hover:text-white">Terms</a>
                        <a href="#" className="text-gray-400 hover:text-white">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer