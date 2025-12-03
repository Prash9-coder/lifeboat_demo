import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { useState } from 'react'

const Team = () => {
    const [hoveredMember, setHoveredMember] = useState(null)
    const navigate = useNavigate()  // ✅ Added navigation

    const team = [
        {
            name: 'Ranjith Padidala',
            role: 'CEO & Founder',
            image: '/assets/ranjith.jpg',
            bio: 'Visionary leader with 15+ years in tech industry, driving innovation and growth',
            expertise: ['Leadership', 'Strategy', 'Innovation'],
            gradient: 'from-[#3234a2] to-[#32a162]',
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
            name: 'Sai Tej',
            role: 'UI/UX Designer',
            image: '/assets/saitej.jpg',
            bio: 'Creating beautiful, intuitive user experiences that users love',
            expertise: ['UI Design', 'UX Research', 'Design Systems'],
            gradient: 'from-[#3234a2] to-[#32a162]',
            social: {
                linkedin: '#',
                email: 'saitej@lifeboat.co.in'
            },
            stats: {
                experience: '8+ Years',
                designs: '500+',
                awards: '12+'
            }
        },
        {
            name: 'Abhinay',
            role: 'Senior Android Developer',
            image: '/assets/Abhinay.jpeg',
            bio: 'Proficient Android developer specializing in creating robust, scalable mobile applications with clean architecture and optimal performance.',
            expertise: ['Kotlin/Java', 'MVVM/MVI Architecture', 'Coroutines/Flow'],
            gradient: 'from-[#32a162] to-[#3234a2]',
            social: {
                linkedin: '#',
                email: 'abhinay.android@lifeboat.co.in'
            },
            stats: {
                experience: '6+ Years',
                apps: '40+',
                reviews: '2000+'
            }
        },
        {
            name: 'Karthik',
            role: 'System Architect',
            image: '/assets/Karthik.jpg',
            bio: 'Strategic system architect with expertise in designing robust, scalable enterprise solutions. Specializes in cloud migration, system integration, and performance optimization.',
            expertise: ['Enterprise Architecture', 'AWS/Azure/GCP', 'Containerization'],
            gradient: 'from-[#3234a2] to-[#32a162]',
            social: {
                linkedin: '#',
                email: 'karthik@lifeboat.co.in'
            },
            stats: {
                experience: '10+ Years',
                projects: '30+',
                performance: '+300%'
            }
        },
        {
            name: 'Charan',
            role: 'Python Developer',
            image: '/assets/charan.jpg',
            bio: 'Seasoned Python developer with extensive experience in backend development, microservices architecture, and building robust enterprise-grade applications.',
            expertise: ['Python 3', 'FastAPI', 'Microservices'],
            gradient: 'from-[#32a162] to-[#3234a2]',
            social: {
                linkedin: '#',
                email: 'charan.python@lifeboat.co.in'
            },
            stats: {
                experience: '5+ Years',
                microservices: '30+',
                scalability: '10x'
            }
        },
        {
            name: 'Pavan',
            role: 'Frontend Developer',
            image: '/assets/pavan.jpg',
            bio: 'Passionate frontend developer focused on building user-friendly interfaces with clean code and optimal performance. Expertise in React ecosystem and modern CSS techniques.',
            expertise: ['React & Redux', 'TypeScript', 'Next.js'],
            gradient: 'from-[#3234a2] to-[#32a162]',
            social: {
                linkedin: '#',
                email: 'pavan.frontend@lifeboat.co.in'
            },
            stats: {
                experience: '5+ Years',
                components: '500+',
                optimized: '-60%'
            }
        },
        {
            name: 'Musharaf',
            role: 'iOS Developer',
            image: '/assets/musharaf.jpg',
            bio: 'Seasoned iOS developer with extensive experience in creating sophisticated mobile applications. Expertise includes advanced iOS frameworks, performance optimization, and implementing clean architecture.',
            expertise: ['Swift Programming', 'iOS Architecture', 'Performance'],
            gradient: 'from-[#32a162] to-[#3234a2]',
            social: {
                linkedin: 'https://www.linkedin.com/in/musharaf-mohammad-236b1120a',
                email: 'musharaf@lifeboat.co.in'
            },
            stats: {
                experience: '5+ Years',
                apps: '30+',
                reviews: '1000+'
            }
        },
        {
            name: 'Manasa',
            role: 'Android Developer',
            image: '/assets/manasa.jpg',
            bio: 'Expert Android developer building high-performance mobile applications.',
            expertise: ['Kotlin', 'Java', 'Android Studio'],
            gradient: 'from-[#3234a2] to-[#32a162]',
            social: {
                linkedin: '#',
                email: 'manasa@lifeboat.co.in'
            },
            stats: {
                experience: '5+ Years',
                apps: '50+',
                downloads: '1M+'
            }
        },
        {
            name: 'Prashanth Nimmala',
            role: 'MERN Stack Developer',
            image: '/assets/Prashanth.jpg',
            bio: 'Proficient MERN stack developer specializing in building scalable web applications with responsive interfaces and robust backend systems.',
            expertise: ['MERN Stack', 'REST APIs', 'Redux'],
            gradient: 'from-[#32a162] to-[#3234a2]',
            social: {
                linkedin: '#',
                email: 'prashanth.dev@lifeboat.co.in'
            },
            stats: {
                experience: '4+ Years',
                applications: '60+',
                endpoints: '200+'
            }
        },
        {
            name: 'Harshini',
            role: 'UI/UX Designer',
            image: '/assets/Harshini.jpg',
            bio: 'Award-winning UI/UX designer with expertise in creating visually stunning and highly functional digital products. Specializes in mobile app design and responsive web interfaces.',
            expertise: ['Mobile UI Design', 'Responsive Web', 'Figma/XD'],
            gradient: 'from-[#32a162] to-[#3234a2]',
            social: {
                linkedin: 'https://www.linkedin.com/in/bonagiri-harshini-a325062a1',
                email: 'harshini@lifeboat.co.in'
            },
            stats: {
                experience: '6+ Years',
                awards: '5+',
                satisfaction: '4.9/5'
            }
        },
        {
            name: 'Anu Charan',
            role: 'Graphic Designer',
            image: '/assets/anucharan.jpg',
            bio: 'Versatile graphic designer skilled in creating visually stunning marketing materials, logos, and branding assets. Combines artistic creativity with strategic thinking to deliver impactful designs.',
            expertise: ['Logo & Branding', 'Marketing', 'Adobe Suite'],
            gradient: 'from-[#3234a2] to-[#32a162]',
            social: {
                linkedin: 'https://www.linkedin.com/in/enugula-anucharan-490282343/',
                email: 'anucharan@lifeboat.co.in'
            },
            stats: {
                experience: '5+ Years',
                logos: '100+',
                campaigns: '30+'
            }
        },
        {
            name: 'Mahitha',
            role: 'Human Resources Officer',
            image: '/assets/mahitha.jpg',
            bio: 'Skilled HR officer managing end-to-end employee lifecycle processes.',
            expertise: ['Recruitment', 'Onboarding', 'HR Admin'],
            gradient: 'from-[#32a162] to-[#3234a2]',
            social: {
                linkedin: '#',
                email: 'mahitha@lifeboat.co.in'
            },
            stats: {
                experience: '8+ Years',
                hires: '200+',
                retention: '95%'
            }
        }
    ]

    // ✅ Navigation handler for View Open Positions
    const handleViewCareers = () => {
        navigate('/careers')
    }

    return (
        <section id="team" className="py-24 relative overflow-hidden bg-white">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
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
                        className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 bg-[#3234a2]/10 text-[#3234a2] border border-[#3234a2]/20"
                    >
                        👥 Our Team
                    </motion.span>

                    <h2 className="text-4xl md:text-6xl font-black mb-6 font-display text-gray-900">
                        Meet the <span className="bg-gradient-to-r from-[#3234a2] to-[#32a162] bg-clip-text text-transparent">Dream Team</span>
                    </h2>

                    <p className="text-xl max-w-2xl mx-auto text-gray-600">
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
                                className="h-full rounded-2xl overflow-hidden bg-gray-50 border-2 border-transparent hover:border-[#3234a2] transition-all duration-500 shadow-lg hover:shadow-2xl relative flex flex-col"
                            >
                                {/* Image Container */}
                                <div className="relative overflow-hidden flex-shrink-0">
                                    <motion.img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-80 object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                                        animate={{
                                            scale: hoveredMember === index ? 1.1 : 1,
                                        }}
                                        transition={{ duration: 0.6 }}
                                        onError={(e) => {
                                            e.target.src = `https://ui-avatars.com/api/?name=${member.name}&size=400&background=3234a2&color=fff`
                                        }}
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
                                        className="absolute inset-0 flex items-center justify-center gap-4 bg-black/50 backdrop-blur-sm"
                                    >
                                        <motion.a
                                            href={member.social.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.2, rotate: 5 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#0077b5] hover:text-white transition-all"
                                            style={{ color: '#0077b5' }}
                                        >
                                            <FaLinkedin className="text-xl" />
                                        </motion.a>

                                        <motion.a
                                            href={`mailto:${member.social.email}`}
                                            whileHover={{ scale: 1.2, rotate: 5 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#ea4335] hover:text-white transition-all"
                                            style={{ color: '#ea4335' }}
                                        >
                                            <FaEnvelope className="text-xl" />
                                        </motion.a>
                                    </motion.div>

                                    {/* Role Badge */}
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/90 backdrop-blur-sm text-gray-900">
                                            {member.role.split(' ')[0]}
                                        </span>
                                    </div>
                                </div>

                                {/* Content - ✅ Fixed Alignment */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold mb-2 text-gray-900">
                                        {member.name}
                                    </h3>

                                    <p className={`text-sm font-semibold mb-3 bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}>
                                        {member.role}
                                    </p>

                                    {/* ✅ Fixed height for bio */}
                                    <p className="text-sm mb-4 text-gray-600 line-clamp-2 min-h-[40px]">
                                        {member.bio}
                                    </p>

                                    {/* ✅ Fixed Expertise Tags - always 3 */}
                                    <div className="flex flex-wrap gap-2 mb-4 min-h-[60px]">
                                        {member.expertise.slice(0, 3).map((skill, idx) => (
                                            <span
                                                key={idx}
                                                className="px-2 py-1 rounded-lg text-xs font-semibold bg-gray-200 text-gray-700"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>

                                    {/* ✅ Fixed Stats - always at bottom, 3 columns */}
                                    <div className="grid grid-cols-3 gap-2 mt-auto">
                                        {Object.entries(member.stats).slice(0, 3).map(([key, value], idx) => (
                                            <div key={idx} className="text-center p-2 rounded-lg bg-gray-100">
                                                <div className={`text-xs font-black bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}>
                                                    {value}
                                                </div>
                                                <div className="text-[10px] capitalize text-gray-600 truncate">
                                                    {key}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Join Team CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 p-12 rounded-3xl text-center bg-gradient-to-br from-[#3234a2]/5 to-[#32a162]/5 border border-[#3234a2]/20"
                >
                    <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-6xl mb-4"
                    >
                        🚀
                    </motion.div>
                    <h3 className="text-3xl font-bold mb-4 text-gray-900">
                        Want to Join Our Team?
                    </h3>
                    <p className="text-lg mb-6 text-gray-600">
                        We're always looking for talented individuals to join our mission
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleViewCareers}  // ✅ Added navigation
                        className="px-10 py-4 bg-gradient-to-r from-[#3234a2] to-[#32a162] text-white rounded-xl font-bold text-lg shadow-lg"
                    >
                        View Open Positions →
                    </motion.button>
                </motion.div>
            </div>
        </section>
    )
}

export default Team