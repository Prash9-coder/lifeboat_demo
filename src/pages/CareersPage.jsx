import { motion } from 'framer-motion'
import { FaBriefcase, FaMapMarkerAlt, FaClock, FaRupeeSign, FaPaperPlane } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const CareersPage = () => {
    const benefits = [
        { icon: '💰', title: 'Competitive Salary', desc: 'Industry-leading compensation packages' },
        { icon: '🏥', title: 'Health Insurance', desc: 'Comprehensive medical coverage for you & family' },
        { icon: '📚', title: 'Learning Budget', desc: 'Annual budget for courses & certifications' },
        { icon: '🏠', title: 'Remote Friendly', desc: 'Flexible work from home options' },
        { icon: '🎯', title: 'Performance Bonus', desc: 'Quarterly bonuses based on performance' },
        { icon: '🎉', title: 'Team Events', desc: 'Regular team outings & celebrations' },
    ]

    const openPositions = [
        {
            title: 'Senior React Developer',
            department: 'Engineering',
            location: 'Hanamkonda / Remote',
            type: 'Full-time',
            salary: '8-15 LPA',
            skills: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
        },
        {
            title: 'Android Developer',
            department: 'Mobile',
            location: 'Hanamkonda',
            type: 'Full-time',
            salary: '6-12 LPA',
            skills: ['Kotlin', 'Java', 'Android SDK', 'Firebase'],
        },
        {
            title: 'UI/UX Designer',
            department: 'Design',
            location: 'Hanamkonda / Remote',
            type: 'Full-time',
            salary: '5-10 LPA',
            skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
        },
        {
            title: 'DevOps Engineer',
            department: 'Infrastructure',
            location: 'Remote',
            type: 'Full-time',
            salary: '10-18 LPA',
            skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
        },
        {
            title: 'Python Developer',
            department: 'Engineering',
            location: 'Hanamkonda',
            type: 'Full-time',
            salary: '7-14 LPA',
            skills: ['Python', 'Django', 'FastAPI', 'PostgreSQL'],
        },
        {
            title: 'Digital Marketing Executive',
            department: 'Marketing',
            location: 'Hanamkonda',
            type: 'Full-time',
            salary: '3-6 LPA',
            skills: ['SEO', 'Social Media', 'Google Ads', 'Analytics'],
        },
    ]

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="py-24 relative overflow-hidden bg-gradient-to-br from-[#3234a2] to-[#32a162]">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
                        backgroundSize: '50px 50px'
                    }} />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 bg-white/20 text-white border border-white/30">
                            🚀 Join Our Team
                        </span>

                        <h1 className="text-5xl md:text-7xl font-black mb-6 text-white font-display">
                            Build Your Career With Us
                        </h1>

                        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10">
                            Join a team of passionate innovators and help us shape the future of technology
                        </p>

                        <div className="flex flex-wrap justify-center gap-6">
                            <div className="flex items-center gap-2 px-6 py-3 bg-white/10 rounded-full text-white">
                                <span className="text-2xl">👥</span>
                                <span className="font-semibold">50+ Team Members</span>
                            </div>
                            <div className="flex items-center gap-2 px-6 py-3 bg-white/10 rounded-full text-white">
                                <span className="text-2xl">🌍</span>
                                <span className="font-semibold">Remote Friendly</span>
                            </div>
                            <div className="flex items-center gap-2 px-6 py-3 bg-white/10 rounded-full text-white">
                                <span className="text-2xl">📈</span>
                                <span className="font-semibold">Fast Growth</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
                            Why Work With <span className="gradient-text">Us?</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            We believe in taking care of our team with amazing benefits
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="p-8 rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-2xl hover:border-[#3234a2] transition-all duration-300"
                            >
                                <div className="text-5xl mb-4">{benefit.icon}</div>
                                <h3 className="text-xl font-bold mb-2 text-gray-900">{benefit.title}</h3>
                                <p className="text-gray-600">{benefit.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Positions Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
                            Open <span className="gradient-text">Positions</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Find your perfect role and join our growing team
                        </p>
                    </motion.div>

                    <div className="space-y-6">
                        {openPositions.map((job, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ x: 10 }}
                                className="p-6 rounded-2xl bg-gray-50 border border-gray-200 hover:border-[#3234a2] hover:shadow-xl transition-all duration-300"
                            >
                                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-3">
                                            <FaBriefcase className="text-[#3234a2]" />
                                            <span className="text-sm font-semibold text-[#3234a2]">{job.department}</span>
                                        </div>
                                        <h3 className="text-2xl font-bold mb-3 text-gray-900">{job.title}</h3>

                                        <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                                            <span className="flex items-center gap-1">
                                                <FaMapMarkerAlt className="text-[#32a162]" />
                                                {job.location}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <FaClock className="text-[#32a162]" />
                                                {job.type}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <FaRupeeSign className="text-[#32a162]" />
                                                {job.salary}
                                            </span>
                                        </div>

                                        <div className="flex flex-wrap gap-2">
                                            {job.skills.map((skill, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-3 py-1 rounded-full text-xs font-semibold bg-[#3234a2]/10 text-[#3234a2]"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <motion.a
                                        href={`mailto:careers@lifeboat.co.in?subject=Application for ${job.title}`}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#3234a2] to-[#32a162] text-white rounded-xl font-semibold shadow-lg"
                                    >
                                        <FaPaperPlane />
                                        Apply Now
                                    </motion.a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-12 rounded-3xl bg-gradient-to-r from-[#3234a2] to-[#32a162] text-white"
                    >
                        <h2 className="text-3xl md:text-4xl font-black mb-4">
                            Don't See Your Role?
                        </h2>
                        <p className="text-xl text-white/90 mb-8">
                            We're always looking for talented individuals. Send us your resume!
                        </p>
                        <motion.a
                            href="mailto:careers@lifeboat.co.in"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-[#3234a2] rounded-xl font-bold text-lg shadow-xl"
                        >
                            <FaPaperPlane />
                            Send Your Resume
                        </motion.a>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default CareersPage