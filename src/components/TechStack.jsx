import { motion } from 'framer-motion'
import {
    FaReact, FaNodeJs, FaPython, FaAws, FaDocker,
    FaAngular, FaVuejs, FaLaravel, FaDatabase,
    FaSwift
} from 'react-icons/fa'
import {
    SiTypescript, SiMongodb, SiGraphql, SiKubernetes,
    SiRedis, SiPostgresql, SiTailwindcss, SiNextdotjs,
    SiNestjs, SiFigma, SiFirebase, SiVercel,
    SiKotlin
} from 'react-icons/si'

const TechStack = () => {
    const technologies = [
        {
            name: 'React',
            Icon: FaReact,
            color: 'primary',
            iconColor: 'text-[#61DAFB]',
            description: 'UI Library',
            proficiency: 95
        },
        {
            name: 'Node.js',
            Icon: FaNodeJs,
            color: 'accent',
            iconColor: 'text-[#339933]',
            description: 'Backend Runtime',
            proficiency: 92
        },
        {
            name: 'TypeScript',
            Icon: SiTypescript,
            color: 'primary',
            iconColor: 'text-[#3178C6]',
            description: 'Type Safety',
            proficiency: 90
        },
        {
            name: 'Python',
            Icon: FaPython,
            color: 'accent',
            iconColor: 'text-[#3776AB]',
            description: 'ML & Backend',
            proficiency: 88
        },
        {
            name: 'Next.js',
            Icon: SiNextdotjs,
            color: 'primary',
            iconColor: 'text-[#000000]',
            description: 'React Framework',
            proficiency: 93
        },
        {
            name: 'GraphQL',
            Icon: SiGraphql,
            color: 'accent',
            iconColor: 'text-[#E10098]',
            description: 'API Query',
            proficiency: 85
        },
        {
            name: 'MongoDB',
            Icon: SiMongodb,
            color: 'primary',
            iconColor: 'text-[#47A248]',
            description: 'NoSQL DB',
            proficiency: 90
        },
        {
            name: 'PostgreSQL',
            Icon: SiPostgresql,
            color: 'accent',
            iconColor: 'text-[#4169E1]',
            description: 'SQL Database',
            proficiency: 87
        },
        {
            name: 'Angular',
            Icon: FaAngular,
            color: 'primary',
            iconColor: 'text-[#DD0031]',
            description: 'Frontend Framework',
            proficiency: 85
        },
        {
            name: 'Vue.js',
            Icon: FaVuejs,
            color: 'accent',
            iconColor: 'text-[#4FC08D]',
            description: 'Frontend Framework',
            proficiency: 83
        },
        {
            name: 'Swift',
            Icon: FaSwift,
            color: 'primary',
            iconColor: 'text-[#FF2D20]',
            description: 'IOS Framework',
            proficiency: 82
        },
        {
            name: 'SQL',
            Icon: FaDatabase,
            color: 'accent',
            iconColor: 'text-[#4479A1]',
            description: 'Database Language',
            proficiency: 88
        },
        {
            name: 'AWS',
            Icon: FaAws,
            color: 'primary',
            iconColor: 'text-[#FF9900]',
            description: 'Cloud Platform',
            proficiency: 91
        },
        {
            name: 'Docker',
            Icon: FaDocker,
            color: 'accent',
            iconColor: 'text-[#2496ED]',
            description: 'Containerization',
            proficiency: 89
        },
        {
            name: 'Kubernetes',
            Icon: SiKubernetes,
            color: 'primary',
            iconColor: 'text-[#326CE5]',
            description: 'Orchestration',
            proficiency: 82
        },
        {
            name: 'Kotlin',
            Icon: SiKotlin,
            color: 'accent',
            iconColor: 'text-[#06B6D4]',
            description: 'Android Framework',
            proficiency: 96
        },
        {
            name: 'Firebase',
            Icon: SiFirebase,
            color: 'primary',
            iconColor: 'text-[#FFCA28]',
            description: 'BaaS Platform',
            proficiency: 88
        },
        {
            name: 'Redis',
            Icon: SiRedis,
            color: 'accent',
            iconColor: 'text-[#DC382D]',
            description: 'Caching',
            proficiency: 85
        },
        {
            name: 'Figma',
            Icon: SiFigma,
            color: 'primary',
            iconColor: 'text-[#F24E1E]',
            description: 'Design Tool',
            proficiency: 90
        },
        {
            name: 'Vercel',
            Icon: SiVercel,
            color: 'accent',
            iconColor: 'text-[#000000]',
            description: 'Deployment',
            proficiency: 92
        },
    ]

    return (
        <section className="py-24 relative overflow-hidden bg-gray-50">

            {/* BACKGROUND GRID */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
                        backgroundSize: '50px 50px'
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* HEADER */}
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
                        className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 bg-gray-100 text-gray-700 border border-gray-200"
                    >
                        💻 Technologies
                    </motion.span>

                    <h2 className="text-4xl md:text-6xl font-black mb-6 font-display text-gray-900">
                        Our <span className="text-primary">Tech Stack</span>
                    </h2>

                    <p className="text-xl max-w-2xl mx-auto text-gray-600">
                        Cutting-edge technologies we master to build exceptional products
                    </p>
                </motion.div>

                {/* MAIN GRID */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6 mb-12">
                    {technologies.slice(0, 16).map((tech, index) => {
                        const Icon = tech.Icon
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: index * 0.05,
                                    duration: 0.4,
                                    type: 'spring',
                                    stiffness: 100
                                }}
                                whileHover={{
                                    y: -15,
                                    scale: 1.1,
                                    rotateY: 10,
                                    rotateX: 10
                                }}
                                className="group cursor-pointer"
                            >
                                <div
                                    className="aspect-square rounded-2xl p-4 flex flex-col items-center justify-center relative overflow-hidden bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500"
                                >
                                    {/* Hover BG */}
                                    <motion.div
                                        className={`absolute inset-0 bg-${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                                    />

                                    {/* ICON with professional color */}
                                    <motion.div
                                        className={`text-5xl mb-2 relative z-10 ${tech.iconColor}`}
                                        whileHover={{ scale: 1.2, rotate: 360 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <Icon />
                                    </motion.div>

                                    {/* NAME */}
                                    <p className="text-xs font-bold text-center relative z-10 text-gray-900">
                                        {tech.name}
                                    </p>

                                    {/* DESC */}
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        whileHover={{ opacity: 1 }}
                                        className="text-xs text-center mt-1 text-gray-600"
                                    >
                                        {tech.description}
                                    </motion.p>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                {/* DETAILED CARDS - REMOVED */}

            </div>

            {/* FLOATING ICONS */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
                {[...Array(15)].map((_, i) => {
                    const RandomIcon = technologies[Math.floor(Math.random() * technologies.length)].Icon
                    const tech = technologies[Math.floor(Math.random() * technologies.length)]
                    return (
                        <motion.div
                            key={i}
                            className="absolute text-6xl"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                color: tech.iconColor.replace('text-[', '').replace(']', '')
                            }}
                            animate={{
                                y: [0, -50, 0],
                                x: [0, Math.random() * 30 - 15, 0],
                                rotate: [0, 360],
                                opacity: [0.1, 0.3, 0.1],
                            }}
                            transition={{
                                duration: Math.random() * 20 + 10,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <RandomIcon />
                        </motion.div>
                    )
                })}
            </div>
        </section>
    )
}

export default TechStack