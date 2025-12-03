import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'

const StatsBanner = () => {
    const [ref, inView] = useInView({
        threshold: 0.3,
        triggerOnce: true
    })

    const stats = [
        { icon: '⚡', number: 99.9, suffix: '%', label: 'Uptime SLA', prefix: '' },
        { icon: '⏱️', number: 100, suffix: 'ms', label: 'Response Time', prefix: '<' },
        { icon: '🏆', number: 50, suffix: '+', label: 'Awards Won', prefix: '' },
        { icon: '🌟', number: 5.0, suffix: '/5', label: 'Client Rating', prefix: '', decimals: 1 }
    ]

    return (
        <section
            ref={ref}
            className="py-16 relative overflow-hidden bg-gray-50"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.5, y: 50 }}
                            animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                            transition={{
                                delay: index * 0.1,
                                type: 'spring',
                                stiffness: 100
                            }}
                            whileHover={{
                                scale: 1.1,
                                y: -10,
                                transition: { duration: 0.2 }
                            }}
                            className="text-center group cursor-pointer"
                        >
                            <motion.div
                                className="text-5xl md:text-6xl mb-3"
                                animate={{
                                    rotate: [0, 10, -10, 0],
                                    scale: [1, 1.1, 1]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatType: 'reverse'
                                }}
                            >
                                {stat.icon}
                            </motion.div>

                            <div className="text-4xl md:text-5xl font-black mb-2 font-display text-gray-900">
                                {stat.prefix}
                                {inView && (
                                    <CountUp
                                        end={stat.number}
                                        duration={2.5}
                                        decimals={stat.decimals || 0}
                                        decimal="."
                                    />
                                )}
                                {stat.suffix}
                            </div>

                            <div className="text-sm font-medium text-[#3234a2]">
                                {stat.label}
                            </div>

                            <motion.div
                                className="w-0 h-1 bg-[#32a162] mx-auto mt-2 group-hover:w-full transition-all duration-300 rounded-full"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default StatsBanner