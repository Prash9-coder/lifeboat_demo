// src/pages/ProjectDetailPage.jsx
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
    FaArrowLeft,
    FaExternalLinkAlt,
    FaGithub,
    FaCalendar,
    FaUsers,
    FaStar,
    FaClock,
    FaCheckCircle,
    FaLightbulb,
    FaTools,
    FaQuoteLeft,
    FaGooglePlay,
    FaAppStore,
    FaGlobe
} from 'react-icons/fa'
import { useState } from 'react'

const ProjectDetailPage = () => {
    const { projectId } = useParams()
    const navigate = useNavigate()
    const [selectedImage, setSelectedImage] = useState(0)

    // 📦 Complete Project Data with Correct Details
    const projectData = {
        'dhuniya-news': {
            title: 'Dhuniya',
            subtitle: 'Smart, Personalized News App',
            category: 'mobile',
            tagline: 'Your News, Your Way – Real-time & Personalized',
            description: 'Dhuniya is a modern news platform delivering real-time, reliable, and hyper-personalized content to users across India.',
            longDescription: `Dhuniya is a modern news platform we developed to deliver real-time, reliable, and hyper-personalized content to users across India. 

Built with intelligent categorization, multilingual support, and a clean, intuitive UI, Dhuniya ensures that users stay informed with the stories that matter most to them.

From breaking news to curated insights, the app is designed for speed, accuracy, and an engaging reading experience. Our AI-powered recommendation engine learns from user behavior to deliver increasingly relevant content.

The app supports multiple Indian languages including Hindi, English, Telugu, Tamil, and more – making news accessible to millions of users across the country. With offline reading capabilities, users can stay informed even without an internet connection.`,
            features: [
                'Real-time Breaking News Alerts',
                'Hyper-personalized Content Feed',
                'Intelligent News Categorization',
                'Multilingual Support (Hindi, English, Telugu, Tamil+)',
                'Clean & Intuitive User Interface',
                'Offline Reading Mode',
                'Curated Insights & Deep Dives',
                'Bookmark & Save Articles',
                'Dark/Light Mode Toggle',
                'Text-to-Speech Feature',
                'Share to Social Media',
                'Speed-optimized Loading',
                'Push Notifications for Breaking News',
                'Personalized News Digest'
            ],
            technologies: ['Flutter', 'Dart', 'Firebase', 'News API', 'TensorFlow Lite', 'Hive DB', 'Provider', 'FCM', 'Google Analytics'],
            gradient: 'from-[#3234a2] to-cyan-500',
            images: [
                '/assets/Dhuniya.jpeg',
                'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1495020689067-958852a7765e?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1586339949216-35c2747cc36d?w=800&h=600&fit=crop'
            ],
            liveLink: 'https://play.google.com/store/apps/details?id=com.dhuniya.news.business.listings.classifieds.ott&hl=en_IN',
            githubLink: '',
            playStoreLink: 'https://play.google.com/store/apps/details?id=com.dhuniya.news.business.listings.classifieds.ott&hl=en_IN',
            appStoreLink: '',
            metrics: {
                downloads: '50K+',
                activeUsers: '15K+',
                accuracy: '92%',
                languages: '5+',
                articles: '1M+',
                rating: '4.5★'
            },
            timeline: '4 Months',
            team: '4 Members',
            client: 'Dhuniya Media',
            year: '2024',
            challenges: [
                'Aggregating news from 100+ reliable sources in real-time',
                'Building accurate AI-powered personalization algorithm',
                'Supporting multiple Indian languages seamlessly',
                'Ensuring fast loading speeds across network conditions',
                'Offline data synchronization without data loss',
                'Optimizing app performance for low-end devices'
            ],
            solutions: [
                'Built custom news aggregation pipeline with Redis caching for real-time updates',
                'Implemented collaborative filtering with TensorFlow Lite for personalization',
                'Integrated Google ML Kit for automatic language detection and translation',
                'Used lazy loading, image compression, and CDN for speed optimization',
                'Implemented Hive local database with background sync mechanism',
                'Optimized Flutter widgets and used efficient state management'
            ],
            testimonial: {
                text: "Dhuniya has transformed how I consume news. The personalization is incredibly accurate, and I love reading news in my native language!",
                author: "Rajesh Kumar",
                role: "Daily User, Delhi"
            },
            results: [
                { label: 'User Retention', value: '78%', description: '30-day retention rate' },
                { label: 'Session Duration', value: '12 min', description: 'Average reading time' },
                { label: 'Play Store Rating', value: '4.5★', description: 'User satisfaction' }
            ],
            keyHighlights: [
                'Hyper-personalized news experience',
                'Multi-language support for pan-India reach',
                'Speed & accuracy focused design',
                'Engaging reading experience'
            ]
        },

        'schoolfirst': {
            title: 'SchoolFirst',
            subtitle: 'An All-in-One School Ecosystem App',
            category: 'mobile',
            tagline: 'Streamlining Education for Schools, Parents, Teachers & Students',
            description: 'SchoolFirst is a comprehensive digital solution created to streamline communication and operations for schools, parents, teachers, and students.',
            longDescription: `SchoolFirst is a comprehensive digital solution created to streamline communication and operations for schools, parents, teachers, and students.

The platform centralizes attendance, homework, fee management, announcements, academic progress, and more—providing each stakeholder with tailored tools designed for their specific needs.

SchoolFirst enhances school efficiency, boosts parent engagement, and brings transparency to the entire educational workflow. Whether it's tracking a child's attendance, submitting homework, paying fees online, or receiving important announcements – everything is just a tap away.

The platform supports multiple user roles with dedicated dashboards:
• **Schools/Admin**: Complete school management, analytics, and reporting
• **Teachers**: Attendance marking, homework assignment, grade management
• **Parents**: Real-time updates on child's progress, fee payments, communication
• **Students**: Homework tracking, study materials, academic progress`,
            features: [
                'Centralized Attendance Management',
                'Digital Homework Submission & Tracking',
                'Online Fee Management & Payments',
                'Real-time Announcements & Notifications',
                'Academic Progress Tracking',
                'Parent-Teacher Communication Portal',
                'Dedicated Dashboards for Each Stakeholder',
                'Student Report Cards & Analytics',
                'Event Calendar & Scheduling',
                'School Bus Tracking',
                'Digital Library & Study Materials',
                'Exam Schedule & Results',
                'Leave Application Management',
                'Multi-school Support'
            ],
            technologies: ['Flutter', 'Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Firebase', 'AWS', 'WebSocket', 'Razorpay'],
            gradient: 'from-yellow-500 to-orange-500',
            images: [
                '/assets/SF.png',
                'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop'
            ],
            liveLink: 'https://www.schoolfirst.ai/',
            githubLink: '',
            playStoreLink: '',
            appStoreLink: '',
            websiteLink: 'https://www.schoolfirst.ai/',
            metrics: {
                schools: '500+',
                students: '100K+',
                teachers: '5K+',
                parents: '80K+',
                satisfaction: '98%'
            },
            timeline: '8 Months',
            team: '8 Members',
            client: 'SchoolFirst EdTech',
            year: '2023',
            challenges: [
                'Managing multiple user roles with different access levels',
                'Handling concurrent users during peak hours (morning attendance)',
                'Secure payment gateway integration for fee collection',
                'Real-time sync across all stakeholders',
                'Building intuitive UI for non-tech-savvy parents',
                'Multi-tenant architecture for different schools'
            ],
            solutions: [
                'Implemented role-based access control (RBAC) with dedicated dashboards',
                'Used auto-scaling infrastructure with Kubernetes for peak loads',
                'Integrated Razorpay with PCI-DSS compliance for secure payments',
                'WebSocket implementation for real-time updates across devices',
                'Extensive user testing with parents and teachers for UX optimization',
                'Built multi-tenant SaaS architecture with data isolation'
            ],
            testimonial: {
                text: "SchoolFirst has reduced our administrative work by 60%. Parent engagement has improved dramatically, and the transparency it brings is invaluable!",
                author: "Dr. Meena Sharma",
                role: "Principal, Delhi Public School"
            },
            results: [
                { label: 'Admin Time Saved', value: '60%', description: 'Reduction in paperwork' },
                { label: 'Parent Engagement', value: '85%', description: 'Monthly active parents' },
                { label: 'School Efficiency', value: '+40%', description: 'Operational improvement' }
            ],
            keyHighlights: [
                'Complete school ecosystem in one app',
                'Tailored tools for each stakeholder',
                'Enhanced transparency & communication',
                'Streamlined educational workflow'
            ]
        },

        'familifirst': {
            title: 'FamiliFirst',
            subtitle: 'A Private, Connected Family App',
            category: 'mobile',
            tagline: 'Keeping Families Connected, Organized & Informed',
            description: 'FamiliFirst is a secure family management and communication app designed to help families stay connected, organized, and informed.',
            longDescription: `FamiliFirst is a secure family management and communication app designed to help families stay connected, organized, and informed.

It includes features such as shared calendars, event planning, reminders, and edutainment for entertainment and education. The app strengthens family bonds by offering a safe digital hub for everyday coordination and long-term memories.

In today's busy world, families often struggle to stay coordinated. FamiliFirst solves this by providing a private, secure space where family members can:
• Share important dates and events
• Coordinate schedules and activities
• Store and share precious memories
• Access educational content for kids
• Stay entertained together

All communications are end-to-end encrypted, ensuring that family moments stay within the family. Unlike public social media, FamiliFirst is designed exclusively for your family circle.`,
            features: [
                'Shared Family Calendar',
                'Event Planning & RSVP',
                'Smart Reminders & Notifications',
                'Edutainment Section (Education + Entertainment)',
                'Private Photo & Video Albums',
                'Family Chat & Messaging',
                'Memory Timeline & Highlights',
                'Task Assignment & Chores',
                'Shopping Lists (Shared)',
                'Location Sharing for Safety',
                'Family Tree Builder',
                'Milestone Tracking (Birthdays, Anniversaries)',
                'Recipe Sharing',
                'End-to-End Encryption'
            ],
            technologies: ['React Native', 'Firebase', 'TypeScript', 'Node.js', 'MongoDB', 'Socket.io', 'AWS S3', 'FCM'],
            gradient: 'from-[#32a162] to-teal-500',
            images: [
                'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop'
            ],
            liveLink: '#',
            githubLink: '',
            playStoreLink: '',
            appStoreLink: '',
            metrics: {
                families: '50K+',
                members: '200K+',
                events: '500K+',
                memories: '2M+',
                rating: '4.9★'
            },
            timeline: '6 Months',
            team: '5 Members',
            client: 'FamiliFirst Inc',
            year: '2024',
            challenges: [
                'Implementing end-to-end encryption for all communications',
                'Building intuitive UX for all age groups (kids to grandparents)',
                'Cross-platform sync for photos and videos',
                'Managing family hierarchies and permissions',
                'Balancing privacy with sharing features'
            ],
            solutions: [
                'Implemented Signal Protocol for E2E encryption',
                'Conducted user testing across age groups for UX optimization',
                'Built custom photo sync with conflict resolution and compression',
                'Created flexible family role management system',
                'Designed granular privacy controls for each feature'
            ],
            testimonial: {
                text: "Finally, a place where our family can share memories and coordinate without worrying about privacy. The kids love the edutainment section!",
                author: "The Sharma Family",
                role: "Family of 8 members, Mumbai"
            },
            results: [
                { label: 'Daily Active', value: '75%', description: 'Family members active daily' },
                { label: 'Memories Shared', value: '2M+', description: 'Photos & videos' },
                { label: 'User Rating', value: '4.9★', description: 'App store rating' }
            ],
            keyHighlights: [
                'Safe digital hub for families',
                'Edutainment for education & entertainment',
                'Strengthens family bonds',
                'Long-term memory preservation'
            ]
        },

        'ishu-store': {
            title: "Ishu's Store",
            subtitle: 'A Digital Storefront for Modest Fashion',
            category: 'mobile',
            tagline: 'Style, Comfort & Modesty – Delivered Globally',
            description: "Ishu's Store is an elegant e-commerce platform built for a modest fashion brand specializing in hijabs, abayas, and contemporary modest wear.",
            longDescription: `Ishu's Store is an elegant e-commerce platform built for a modest fashion brand specializing in hijabs, abayas, and contemporary modest wear.

The app offers a seamless shopping experience with curated collections, detailed product visuals, secure checkout, and personalized recommendations. Ishu's Store empowers the brand to reach customers globally while staying true to its identity of style, comfort, and modesty.

Key aspects of the platform:
• **Curated Collections**: Carefully selected hijabs, abayas, and modest wear
• **Detailed Visuals**: High-quality product images from multiple angles
• **Secure Checkout**: Multiple payment options with complete security
• **Personalized Experience**: AI-powered recommendations based on preferences
• **Global Reach**: Shipping to customers worldwide

The platform celebrates modest fashion while embracing modern e-commerce capabilities, helping the brand connect with its audience authentically.`,
            features: [
                'Curated Modest Fashion Collections',
                'Hijabs, Abayas & Contemporary Wear',
                'Detailed Product Visuals (Multi-angle)',
                'Secure Payment Gateway',
                'Personalized Recommendations',
                'Wishlist & Favorites',
                'Size Guide & Fit Assistance',
                'Order Tracking in Real-time',
                'Easy Returns & Exchange',
                'Global Shipping Support',
                'New Arrival Notifications',
                'Style Lookbooks & Inspiration',
                'Customer Reviews & Ratings',
                'Loyalty Points Program'
            ],
            technologies: ['React Native', 'TypeScript', 'Firebase', 'Node.js', 'MongoDB', 'Stripe', 'AWS', 'Algolia'],
            gradient: 'from-[#32a162] to-teal-500',
            images: [
                '/assets/Ishu store.jpg',
                'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1607082349566-187342175e2f?w=800&h=600&fit=crop'
            ],
            liveLink: 'https://ishustore.com/',
            githubLink: '',
            websiteLink: 'https://ishustore.com/',
            metrics: {
                products: '5K+',
                customers: '25K+',
                countries: '15+',
                orders: '50K+',
                rating: '4.9★'
            },
            timeline: '5 Months',
            team: '5 Members',
            client: "Ishu's Fashion Pvt Ltd",
            year: '2024',
            challenges: [
                'Showcasing fabric quality through digital medium',
                'Building trust for online modest fashion shopping',
                'Managing inventory across multiple product categories',
                'International shipping and currency handling',
                'Creating authentic brand experience digitally'
            ],
            solutions: [
                'High-quality multi-angle product photography with zoom',
                'Added video reviews, influencer content, and detailed descriptions',
                'Built real-time inventory management with low-stock alerts',
                'Integrated multi-currency support with international shipping APIs',
                'Designed UI reflecting brand identity of elegance and modesty'
            ],
            testimonial: {
                text: "Ishu's Store made it so easy to find beautiful modest wear. The quality is amazing, and the shopping experience is seamless!",
                author: "Fatima Ahmed",
                role: "Regular Customer, Dubai"
            },
            results: [
                { label: 'Conversion Rate', value: '4.2%', description: 'Above industry average' },
                { label: 'Return Rate', value: '<2%', description: 'Industry lowest' },
                { label: 'Repeat Customers', value: '65%', description: 'Loyal customer base' }
            ],
            keyHighlights: [
                'Elegant modest fashion platform',
                'Global customer reach',
                'Seamless shopping experience',
                'True to brand identity'
            ]
        },

        'ishaa-trends': {
            title: 'Ishaa Trends',
            subtitle: "Kids' Clothing Brand",
            category: 'web',
            tagline: 'Trendy, Comfortable & Affordable Kids Fashion',
            description: "Ishaa Trends is a vibrant e-commerce platform crafted for a children's fashion brand, designed with parents in mind.",
            longDescription: `Ishaa Trends is a vibrant e-commerce platform crafted for a children's fashion brand. Designed with parents in mind, it showcases trendy, comfortable, and affordable kids' clothing through a playful and user-friendly interface.

With features like smart size guides, fast checkout, and curated collections, Ishaa Trends delivers a delightful shopping experience for modern families.

Understanding that kids grow quickly, we've built features that help parents:
• **Smart Size Guides**: Recommendations based on age and measurements
• **Curated Collections**: Age-appropriate, trendy clothing options
• **Fast Checkout**: Quick and hassle-free purchasing
• **Playful UI**: Fun, colorful interface that reflects kids' fashion

The platform makes kids' clothing shopping enjoyable, efficient, and affordable for busy parents.`,
            features: [
                'Trendy Kids Clothing Collections',
                'Smart Size Guide by Age',
                'Playful & User-Friendly Interface',
                'Fast Checkout Process',
                'Curated Age-Appropriate Collections',
                'Comfortable & Affordable Options',
                'Wishlist for Future Purchases',
                'Gift Registry for Occasions',
                'Size Exchange Policy',
                'New Collection Alerts',
                'Parent Reviews & Photos',
                'Bundle Discounts',
                'Seasonal Sales',
                'Easy Navigation by Age Group'
            ],
            technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS', 'Redis', 'Cloudinary'],
            gradient: 'from-pink-500 to-purple-500',
            images: [
                'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=800&h=600&fit=crop'
            ],
            liveLink: '#',
            githubLink: '',
            metrics: {
                products: '3K+',
                parents: '15K+',
                orders: '30K+',
                sizeAccuracy: '95%',
                rating: '4.8★'
            },
            timeline: '4 Months',
            team: '4 Members',
            client: 'Ishaa Trends Pvt Ltd',
            year: '2024',
            challenges: [
                'Accurate size recommendations for growing children',
                'Creating playful yet professional e-commerce experience',
                'Managing seasonal inventory and trends',
                'Building trust with first-time online shoppers',
                'Easy navigation for busy parents'
            ],
            solutions: [
                'Built smart size guide with age-based recommendations',
                'Designed colorful, fun UI while maintaining professionalism',
                'Implemented predictive inventory management',
                'Added customer photos and honest reviews section',
                'Created intuitive filters by age, size, occasion'
            ],
            testimonial: {
                text: "Shopping for my kids has never been easier! The size guide is spot-on, and the clothes are both trendy and comfortable.",
                author: "Sneha Reddy",
                role: "Mom of 2, Hyderabad"
            },
            results: [
                { label: 'Size Accuracy', value: '95%', description: 'Correct size selections' },
                { label: 'Return Rate', value: '5%', description: 'Below industry average' },
                { label: 'Repeat Buyers', value: '70%', description: 'Loyal customers' }
            ],
            keyHighlights: [
                'Designed with parents in mind',
                'Trendy, comfortable & affordable',
                'Playful user-friendly interface',
                'Smart size recommendations'
            ]
        },

        'sru-clothing': {
            title: 'SRU',
            subtitle: 'Clothing & Cosmetics Lifestyle App',
            category: 'mobile',
            tagline: 'Style & Self-Care in One Unified Platform',
            description: 'SRU is a stylish, dual-category e-commerce app offering a curated blend of fashion apparel and premium cosmetics.',
            longDescription: `SRU is a stylish, dual-category e-commerce app offering a curated blend of fashion apparel and premium cosmetics. Designed to deliver a seamless lifestyle shopping experience, the platform features trend-driven clothing collections, high-quality beauty products, personalized recommendations, secure checkout, and an intuitive browsing interface.

SRU brings together style and self-care in one unified digital storefront, helping customers discover everything they need to look and feel their best.

The platform serves as a one-stop destination for:
• **Fashion Apparel**: Trend-driven clothing collections for every occasion
• **Premium Cosmetics**: High-quality beauty and skincare products
• **Personalized Experience**: AI-powered recommendations based on preferences
• **Seamless Shopping**: Intuitive interface with secure checkout

SRU represents the modern lifestyle where fashion and beauty complement each other.`,
            features: [
                'Dual-Category Shopping (Fashion + Cosmetics)',
                'Trend-Driven Clothing Collections',
                'Premium Beauty Products',
                'Personalized Recommendations',
                'Secure Checkout',
                'Intuitive Browsing Interface',
                'Virtual Try-On for Cosmetics',
                'Style Guides & Lookbooks',
                'Beauty Tutorials',
                'Subscription Boxes',
                'Loyalty Rewards Program',
                'Flash Sales & Offers',
                'Wishlist & Collections',
                'Express Delivery Options'
            ],
            technologies: ['Angular', 'Ionic', 'Node.js', 'MongoDB', 'AWS', 'Stripe', 'ML Kit', 'Firebase'],
            gradient: 'from-[#3234a2] to-[#32a162]',
            images: [
                'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&h=600&fit=crop'
            ],
            liveLink: '#',
            githubLink: '',
            metrics: {
                downloads: '100K+',
                products: '10K+',
                categories: '2',
                customers: '50K+',
                rating: '4.7★'
            },
            timeline: '6 Months',
            team: '6 Members',
            client: 'SRU Lifestyle Inc',
            year: '2023',
            challenges: [
                'Managing two distinct product categories in one app',
                'Creating cohesive shopping experience across fashion & beauty',
                'Accurate cosmetic shade matching for diverse skin tones',
                'Inventory management across multiple brands',
                'Building unified recommendation engine'
            ],
            solutions: [
                'Designed category-specific browsing with unified cart & checkout',
                'Created consistent design language that works for both categories',
                'Implemented ML-based skin tone detection for cosmetic recommendations',
                'Built centralized inventory system with brand-specific APIs',
                'Developed hybrid recommendation engine considering both categories'
            ],
            testimonial: {
                text: "I love that I can shop for clothes and makeup in one app! The recommendations are always on point.",
                author: "Priya Patel",
                role: "Fashion & Beauty Enthusiast"
            },
            results: [
                { label: 'Cross-Category Sales', value: '35%', description: 'Users buy from both' },
                { label: 'User Satisfaction', value: '4.7★', description: 'App store rating' },
                { label: 'Avg. Order Value', value: '+25%', description: 'Higher than single-category' }
            ],
            keyHighlights: [
                'Fashion + Cosmetics in one platform',
                'Seamless lifestyle shopping',
                'Trend-driven & curated',
                'Look and feel your best'
            ]
        }
    }

    const project = projectData[projectId]

    // 404 - Project Not Found
    if (!project) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center p-8"
                >
                    <div className="text-8xl mb-6">🔍</div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
                    <p className="text-gray-600 mb-8">The project you're looking for doesn't exist or has been moved.</p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate('/projects')}
                        className="px-8 py-4 bg-gradient-to-r from-[#3234a2] to-[#32a162] text-white rounded-xl font-bold shadow-lg"
                    >
                        View All Projects
                    </motion.button>
                </motion.div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Fixed Back Button */}
            <motion.button
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                onClick={() => navigate(-1)}
                className="fixed top-24 left-4 md:left-8 z-50 px-4 py-2 bg-white rounded-xl shadow-lg border border-gray-200 flex items-center gap-2 hover:shadow-xl transition-all group"
            >
                <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                <span className="hidden md:inline font-semibold">Back</span>
            </motion.button>

            {/* Hero Section */}
            <section className={`relative pt-20 pb-32 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }} />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center text-white"
                    >
                        {/* Category Badge */}
                        <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-semibold mb-6 uppercase tracking-wider"
                        >
                            {project.category} Project
                        </motion.span>

                        {/* Title */}
                        <h1 className="text-4xl md:text-6xl font-black mb-2">
                            {project.title}
                        </h1>

                        {/* Subtitle */}
                        <h2 className="text-2xl md:text-3xl font-semibold text-white/90 mb-4">
                            {project.subtitle}
                        </h2>

                        {/* Tagline */}
                        <p className="text-xl md:text-2xl text-white/80 mb-6">
                            {project.tagline}
                        </p>

                        {/* Description */}
                        <p className="text-lg text-white/70 max-w-3xl mx-auto mb-8">
                            {project.description}
                        </p>

                        {/* Quick Stats */}
                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                <FaCalendar />
                                <span>{project.year}</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                <FaClock />
                                <span>{project.timeline}</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                <FaUsers />
                                <span>{project.team}</span>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap justify-center gap-4">
                            {project.liveLink && project.liveLink !== '#' && (
                                <motion.a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 bg-white text-gray-900 rounded-xl font-bold flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
                                >
                                    <FaGlobe />
                                    Visit Website
                                </motion.a>
                            )}
                            {project.playStoreLink && project.playStoreLink !== '' && (
                                <motion.a
                                    href={project.playStoreLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 bg-gray-900 text-white rounded-xl font-bold flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
                                >
                                    <FaGooglePlay />
                                    Play Store
                                </motion.a>
                            )}
                        </div>
                    </motion.div>
                </div>

                {/* Wave Divider */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#f9fafb" />
                    </svg>
                </div>
            </section>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">

                {/* Key Highlights */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
                >
                    {project.keyHighlights.map((highlight, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white rounded-2xl p-4 shadow-lg text-center hover:shadow-xl transition-shadow"
                        >
                            <div className="text-2xl mb-2">
                                {['✨', '🚀', '💡', '🎯'][idx]}
                            </div>
                            <div className="text-sm font-semibold text-gray-700">
                                {highlight}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Metrics Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16"
                >
                    {Object.entries(project.metrics).map(([key, value], idx) => (
                        <motion.div
                            key={key}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white rounded-2xl p-5 shadow-lg text-center hover:shadow-xl transition-shadow"
                        >
                            <div className={`text-2xl md:text-3xl font-black bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                                {value}
                            </div>
                            <div className="text-sm text-gray-500 capitalize mt-1">
                                {key.replace(/([A-Z])/g, ' $1').trim()}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Image Gallery */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                        <span className={`w-10 h-10 rounded-xl bg-gradient-to-r ${project.gradient} flex items-center justify-center text-white`}>
                            📸
                        </span>
                        Project Gallery
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        {/* Main Image */}
                        <div className="lg:col-span-2">
                            <motion.img
                                key={selectedImage}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                src={project.images[selectedImage]}
                                alt={`${project.title} screenshot`}
                                className="w-full h-80 md:h-96 object-cover rounded-2xl shadow-lg"
                            />
                        </div>

                        {/* Thumbnails */}
                        <div className="grid grid-cols-4 lg:grid-cols-1 gap-4">
                            {project.images.map((img, idx) => (
                                <motion.button
                                    key={idx}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setSelectedImage(idx)}
                                    className={`relative rounded-xl overflow-hidden ${selectedImage === idx ? 'ring-4 ring-[#3234a2]' : ''}`}
                                >
                                    <img
                                        src={img}
                                        alt={`Thumbnail ${idx + 1}`}
                                        className="w-full h-20 lg:h-[5.5rem] object-cover"
                                    />
                                    {selectedImage === idx && (
                                        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-30`} />
                                    )}
                                </motion.button>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {/* Left Column - Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Overview */}
                        <motion.section
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl p-8 shadow-lg"
                        >
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <FaLightbulb className="text-yellow-500" />
                                Project Overview
                            </h2>
                            <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                                {project.longDescription}
                            </p>
                        </motion.section>

                        {/* Features */}
                        <motion.section
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl p-8 shadow-lg"
                        >
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <FaCheckCircle className="text-green-500" />
                                Key Features
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {project.features.map((feature, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.03 }}
                                        className="flex items-start gap-3"
                                    >
                                        <div className={`w-2 h-2 rounded-full mt-2 bg-gradient-to-r ${project.gradient} flex-shrink-0`} />
                                        <span className="text-gray-700">{feature}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.section>

                        {/* Challenges & Solutions */}
                        <motion.section
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        >
                            {/* Challenges */}
                            <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
                                <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                                    🎯 Challenges Faced
                                </h3>
                                <ul className="space-y-3">
                                    {project.challenges.map((challenge, idx) => (
                                        <li key={idx} className="text-red-700 text-sm flex items-start gap-2">
                                            <span className="text-red-400 mt-1">•</span>
                                            <span>{challenge}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Solutions */}
                            <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
                                <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                                    ✅ Our Solutions
                                </h3>
                                <ul className="space-y-3">
                                    {project.solutions.map((solution, idx) => (
                                        <li key={idx} className="text-green-700 text-sm flex items-start gap-2">
                                            <span className="text-green-400 mt-1">•</span>
                                            <span>{solution}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.section>
                    </div>

                    {/* Right Column - Sidebar */}
                    <div className="space-y-6">
                        {/* Technologies */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl p-6 shadow-lg"
                        >
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <FaTools className="text-[#3234a2]" />
                                Technologies Used
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, idx) => (
                                    <motion.span
                                        key={idx}
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.05 }}
                                        className={`px-3 py-2 rounded-lg text-sm font-medium bg-gradient-to-r ${project.gradient} text-white`}
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Project Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white rounded-2xl p-6 shadow-lg"
                        >
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Project Info</h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-500">Client</span>
                                    <span className="font-semibold text-gray-900 text-right text-sm">{project.client}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-500">Year</span>
                                    <span className="font-semibold text-gray-900">{project.year}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-500">Duration</span>
                                    <span className="font-semibold text-gray-900">{project.timeline}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-500">Team Size</span>
                                    <span className="font-semibold text-gray-900">{project.team}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-500">Category</span>
                                    <span className={`font-semibold capitalize px-3 py-1 rounded-full text-xs bg-gradient-to-r ${project.gradient} text-white`}>
                                        {project.category}
                                    </span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Results */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white rounded-2xl p-6 shadow-lg"
                        >
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <FaStar className="text-yellow-500" />
                                Key Results
                            </h3>
                            <div className="space-y-4">
                                {project.results.map((result, idx) => (
                                    <div key={idx} className="text-center p-4 bg-gray-50 rounded-xl">
                                        <div className={`text-2xl font-black bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                                            {result.value}
                                        </div>
                                        <div className="font-semibold text-gray-900">{result.label}</div>
                                        <div className="text-xs text-gray-500">{result.description}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Testimonial */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className={`bg-gradient-to-br ${project.gradient} rounded-2xl p-6 text-white`}
                        >
                            <FaQuoteLeft className="text-3xl text-white/30 mb-4" />
                            <p className="text-white/90 italic mb-4 text-sm leading-relaxed">
                                "{project.testimonial.text}"
                            </p>
                            <div>
                                <div className="font-bold">{project.testimonial.author}</div>
                                <div className="text-white/70 text-sm">{project.testimonial.role}</div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* CTA Section */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="bg-gradient-to-r from-[#3234a2] to-[#32a162] rounded-3xl p-8 md:p-12 text-white text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Have a Similar Project in Mind? 🚀
                        </h2>
                        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                            Let's discuss how we can bring your vision to life with cutting-edge technology
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate('/#contact')}
                                className="px-8 py-4 bg-white text-[#3234a2] rounded-xl font-bold text-lg shadow-lg"
                            >
                                Start Your Project →
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate('/projects')}
                                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-xl font-bold text-lg"
                            >
                                View More Projects
                            </motion.button>
                        </div>
                    </div>
                </motion.section>
            </div>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-8">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-gray-400">
                        © {new Date().getFullYear()} Your Company. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default ProjectDetailPage