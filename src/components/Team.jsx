import { motion } from 'framer-motion'
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa'
import { useState } from 'react'

const Team = ({ darkMode }) => {
    const [hoveredMember, setHoveredMember] = useState(null)

    const team = [
        {
            name: 'Ranjith Padidala',
            role: 'CEO & Founder',
            image: 'src\\assets\\ranjith.jpg',
            bio: 'Visionary leader with 15+ years in tech industry, driving innovation and growth',
            expertise: ['Leadership', 'Strategy', 'Innovation'],
            gradient: 'from-purple-500 to-pink-500',
            social: {
                linkedin: 'www.linkedin.com/in/ranjith-padidala-profile',
                email: 'ranjith@lifeboat.co.in'
            },
            stats: {
                experience: '15+ Years',
                projects: '200+',
                awards: '25+'
            }
        },
        {
            name: 'Priya Sharma',
            role: 'Chief Technology Officer',
            image: 'https://i.pravatar.cc/400?img=45',
            bio: 'Expert in cloud architecture, AI/ML, and scalable system design',
            expertise: ['Cloud Architecture', 'AI/ML', 'DevOps'],
            gradient: 'from-blue-500 to-cyan-500',
            social: {
                linkedin: '#',
                twitter: '#',
                github: '#',
                email: 'priya@lifeboat.tech'
            },
            stats: {
                experience: '12+ Years',
                certifications: '15+',
                patents: '5'
            }
        },
        {
            name: 'Arjun Patel',
            role: 'Lead Full-Stack Developer',
            image: 'https://i.pravatar.cc/400?img=13',
            bio: 'Full-stack wizard specializing in React, Node.js, and microservices',
            expertise: ['React', 'Node.js', 'Microservices'],
            gradient: 'from-green-500 to-teal-500',
            social: {
                linkedin: '#',
                twitter: '#',
                github: '#',
                email: 'arjun@lifeboat.tech'
            },
            stats: {
                experience: '10+ Years',
                commits: '50K+',
                contributions: '1000+'
            }
        },
        {
            name: 'Sneha Reddy',
            role: 'Head of UI/UX Design',
            image: 'https://i.pravatar.cc/400?img=47',
            bio: 'Creating beautiful, intuitive user experiences that users love',
            expertise: ['UI Design', 'UX Research', 'Design Systems'],
            gradient: 'from-pink-500 to-rose-500',
            social: {
                linkedin: '#',
                twitter: '#',
                github: '#',
                email: 'sneha@lifeboat.tech'
            },
            stats: {
                experience: '8+ Years',
                designs: '500+',
                awards: '12+'
            }
        },
        {
            name: 'Vikram Singh',
            role: 'Head of Product',
            image: 'https://i.pravatar.cc/400?img=33',
            bio: 'Product strategist focused on user-centric solutions and market fit',
            expertise: ['Product Strategy', 'Analytics', 'Growth'],
            gradient: 'from-orange-500 to-red-500',
            social: {
                linkedin: '#',
                twitter: '#',
                github: '#',
                email: 'vikram@lifeboat.tech'
            },
            stats: {
                experience: '11+ Years',
                launches: '50+',
                revenue: '$100M+'
            }
        },
        {
            name: 'Ananya Iyer',
            role: 'Senior Mobile Developer',
            image: 'https://i.pravatar.cc/400?img=48',
            bio: 'Mobile app expert with deep knowledge of React Native and Flutter',
            expertise: ['React Native', 'Flutter', 'iOS/Android'],
            gradient: 'from-indigo-500 to-purple-500',
            social: {
                linkedin: '#',
                twitter: '#',
                github: '#',
                email: 'ananya@lifeboat.tech'
            },
            stats: {
                experience: '9+ Years',
                apps: '100+',
                downloads: '10M+'
            }
        },
        {
            name: 'Karthik Menon',
            role: 'DevOps & Cloud Architect',
            image: 'https://i.pravatar.cc/400?img=68',
            bio: 'Infrastructure expert ensuring 99.9% uptime and seamless deployments',
            expertise: ['AWS', 'Kubernetes', 'CI/CD'],
            gradient: 'from-yellow-500 to-orange-500',
            social: {
                linkedin: '#',
                twitter: '#',
                github: '#',
                email: 'karthik@lifeboat.tech'
            },
            stats: {
                experience: '10+ Years',
                uptime: '99.9%',
                deployments: '10K+'
            }
        },
        {
            name: 'Divya Krishnan',
            role: 'AI/ML Engineer',
            image: 'https://i.pravatar.cc/400?img=49',
            bio: 'Building intelligent systems with deep learning and neural networks',
            expertise: ['TensorFlow', 'PyTorch', 'NLP'],
            gradient: 'from-cyan-500 to-blue-500',
            social: {
                linkedin: '#',
                twitter: '#',
                github: '#',
                email: 'divya@lifeboat.tech'
            },
            stats: {
                experience: '7+ Years',
                models: '50+',
                accuracy: '98%'
            }
        },
    ]

    return (
        <section className={`py-24 relative overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-white'
            }`}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, ${darkMode ? '#fff' : '#000'} 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <motion.span
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 ${darkMode
                            ? 'bg-purple-900/50 text-purple-300 border border-purple-500/30'
                            : 'bg-purple-100 text-purple-700 border border-purple-200'
                            }`}
                    >
                        👥 Our Team
                    </motion.span>

                    <h2 className={`text-4xl md:text-6xl font-black mb-6 font-display ${darkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                        Meet the <span className="gradient-text">Dream Team</span>
                    </h2>

                    <p className={`text-xl max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                        Talented individuals driving innovation and excellence every day
                    </p>
                </motion.div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8, y: 50 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            onHoverStart={() => setHoveredMember(index)}
                            onHoverEnd={() => setHoveredMember(null)}
                            className="group"
                        >
                            <motion.div
                                whileHover={{ y: -15, rotateY: 5 }}
                                className={`h-full rounded-2xl overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-gray-50'
                                    } border-2 border-transparent hover:border-purple-500 transition-all duration-500 shadow-lg hover:shadow-2xl relative`}
                            >
                                {/* Gradient Border Animation */}
                                <motion.div
                                    className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10`}
                                />

                                {/* Image Container */}
                                <div className="relative overflow-hidden">
                                    <motion.img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-80 object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                                        animate={{
                                            scale: hoveredMember === index ? 1.1 : 1,
                                        }}
                                        transition={{ duration: 0.6 }}
                                    />

                                    {/* Gradient Overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-t ${member.gradient} opacity-40 group-hover:opacity-60 transition-opacity duration-500`} />

                                    {/* Social Links Overlay */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{
                                            opacity: hoveredMember === index ? 1 : 0,
                                            y: hoveredMember === index ? 0 : 20
                                        }}
                                        className="absolute inset-0 flex items-center justify-center gap-3 bg-black/50 backdrop-blur-sm"
                                    >
                                        {[
                                            { Icon: FaLinkedin, link: member.social.linkedin, color: '#0077b5' },
                                            { Icon: FaTwitter, link: member.social.twitter, color: '#1da1f2' },
                                            { Icon: FaGithub, link: member.social.github, color: '#333' },
                                            { Icon: FaEnvelope, link: `mailto:${member.social.email}`, color: '#ea4335' },
                                        ].map((social, idx) => (
                                            <motion.a
                                                key={idx}
                                                href={social.link}
                                                whileHover={{ scale: 1.2, rotate: 5 }}
                                                whileTap={{ scale: 0.9 }}
                                                className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg"
                                                style={{ color: social.color }}
                                            >
                                                <social.Icon className="text-xl" />
                                            </motion.a>
                                        ))}
                                    </motion.div>

                                    {/* Role Badge */}
                                    <div className="absolute top-4 left-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold bg-white/90 backdrop-blur-sm text-gray-900`}>
                                            {member.role.split(' ')[0]}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'
                                        }`}>
                                        {member.name}
                                    </h3>

                                    <p className={`text-sm font-semibold mb-3 bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}>
                                        {member.role}
                                    </p>

                                    <p className={`text-sm mb-4 line-clamp-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'
                                        }`}>
                                        {member.bio}
                                    </p>

                                    {/* Expertise Tags */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {member.expertise.map((skill, idx) => (
                                            <motion.span
                                                key={idx}
                                                initial={{ opacity: 0, scale: 0 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: idx * 0.1 }}
                                                className={`px-2 py-1 rounded-lg text-xs font-semibold ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
                                                    }`}
                                            >
                                                {skill}
                                            </motion.span>
                                        ))}
                                    </div>

                                    {/* Stats */}
                                    <div className="grid grid-cols-3 gap-2">
                                        {Object.entries(member.stats).map(([key, value], idx) => (
                                            <div key={idx} className={`text-center p-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'
                                                }`}>
                                                <div className={`text-sm font-black bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}>
                                                    {value}
                                                </div>
                                                <div className={`text-xs capitalize ${darkMode ? 'text-gray-400' : 'text-gray-600'
                                                    }`}>
                                                    {key}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Shine Effect */}
                                <motion.div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                    style={{
                                        background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
                                        backgroundSize: '200% 200%',
                                    }}
                                    animate={{
                                        backgroundPosition: hoveredMember === index ? ['0% 0%', '100% 100%'] : '0% 0%',
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: hoveredMember === index ? Infinity : 0,
                                    }}
                                />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Join Team CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`mt-16 p-12 rounded-3xl text-center ${darkMode
                        ? 'bg-gradient-to-br from-purple-900/50 to-pink-900/50 border border-purple-500/30'
                        : 'bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200'
                        }`}
                >
                    <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-6xl mb-4"
                    >
                        🚀
                    </motion.div>
                    <h3 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Want to Join Our Team?
                    </h3>
                    <p className={`text-lg mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        We're always looking for talented individuals to join our mission
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold text-lg shadow-lg neon-glow"
                    >
                        View Open Positions →
                    </motion.button>
                </motion.div>
            </div>
        </section>
    )
}

export default Team