// src/pages/ServiceDetailPage.jsx
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
    FaArrowLeft,
    FaCheck,
    FaQuoteLeft,
    FaPhone,
    FaWhatsapp,
    FaPaintBrush,
    FaShoppingCart,
    FaHeadset
} from 'react-icons/fa'
import {
    HiOutlineCode,
    HiOutlineDeviceMobile,
    HiOutlineGlobe,
    HiOutlineChip,
    HiOutlineCloud,
    HiOutlineChatAlt2,
    HiOutlineCheck,
    HiOutlineLightningBolt
} from 'react-icons/hi'
import { useState } from 'react'

const ServiceDetailPage = () => {
    const { serviceId } = useParams()
    const navigate = useNavigate()

    // 📦 Complete Services Data - Using Brand Colors Only
    const servicesData = {
        'software-development': {
            id: 'software-development',
            title: 'Software Development',
            subtitle: 'Custom Solutions for Your Business',
            tagline: 'Transforming Ideas into Powerful Software',
            icon: <HiOutlineCode className="text-5xl" />,
            gradient: 'from-[#3234a2] to-[#32a162]',
            heroImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=600&fit=crop',
            description: 'We build custom software solutions tailored to your unique business needs. Our expert team delivers scalable, secure, and high-performance applications using modern technologies and best practices.',
            longDescription: `Our software development services encompass the entire development lifecycle, from initial concept and planning to deployment and ongoing maintenance. We specialize in creating enterprise-grade solutions that drive business growth.

Our approach combines technical excellence with deep understanding of business requirements. We use agile methodologies to ensure rapid delivery while maintaining the highest quality standards.

Whether you need a complete enterprise system, a customer-facing application, or integration between existing systems, our team has the expertise to deliver.`,
            features: [
                { title: 'Custom Solutions', description: 'Tailored software built specifically for your business requirements', icon: <HiOutlineCode /> },
                { title: 'Scalable Architecture', description: 'Built to grow with your business without performance issues', icon: <HiOutlineLightningBolt /> },
                { title: 'Clean Code', description: 'Maintainable, well-documented code following best practices', icon: <HiOutlineCheck /> },
                { title: 'Agile Development', description: 'Iterative development with regular updates and feedback', icon: <HiOutlineCode /> }
            ],
            technologies: ['React', 'Node.js', 'Python', 'Java', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker'],
            process: [
                { step: '01', title: 'Discovery', description: 'Understanding your requirements and goals' },
                { step: '02', title: 'Planning', description: 'Creating detailed technical specifications' },
                { step: '03', title: 'Development', description: 'Building your solution with agile sprints' },
                { step: '04', title: 'Testing', description: 'Rigorous QA and user acceptance testing' },
                { step: '05', title: 'Deployment', description: 'Seamless launch and go-live support' },
                { step: '06', title: 'Support', description: 'Ongoing maintenance and updates' }
            ],
            stats: { 'Projects Delivered': '150+', 'Happy Clients': '80+', 'Years Experience': '10+', 'Team Members': '25+' },
            pricing: [
                { name: 'Starter', price: '₹2,00,000', features: ['Basic Features', '3 Month Timeline', 'Email Support', 'Bug Fixes'] },
                { name: 'Professional', price: '₹5,00,000', features: ['Advanced Features', '6 Month Timeline', 'Priority Support', '1 Year Maintenance'], popular: true },
                { name: 'Enterprise', price: 'Custom', features: ['Full Customization', 'Dedicated Team', '24/7 Support', 'Lifetime Updates'] }
            ],
            testimonial: {
                text: "The team delivered exceptional software that transformed our operations. Their technical expertise and commitment to quality exceeded our expectations.",
                author: "Rahul Sharma",
                role: "CTO, TechStart India",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
            },
            faqs: [
                { q: 'How long does software development take?', a: 'Timeline depends on complexity. Simple projects take 2-3 months, while complex systems can take 6-12 months.' },
                { q: 'What technologies do you use?', a: 'We use modern technologies like React, Node.js, Python, and cloud services based on project requirements.' },
                { q: 'Do you provide post-launch support?', a: 'Yes, we offer comprehensive maintenance and support packages to keep your software running smoothly.' }
            ]
        },
        'web-applications': {
            id: 'web-applications',
            title: 'Web Applications',
            subtitle: 'Modern Web Solutions',
            tagline: 'Fast, Responsive, and Scalable Web Apps',
            icon: <HiOutlineGlobe className="text-5xl" />,
            gradient: 'from-[#3234a2] to-[#4a4cff]',
            heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop',
            description: 'We create responsive, fast, and scalable web applications that deliver exceptional user experiences across all devices and platforms.',
            longDescription: `Our web application development services focus on creating powerful, user-friendly applications that work seamlessly across all browsers and devices.

We specialize in building:
• Progressive Web Apps (PWAs)
• Single Page Applications (SPAs)
• Enterprise Web Portals
• E-commerce Platforms
• Content Management Systems

Our team uses cutting-edge technologies like React, Next.js, Vue.js, and Angular to build modern web applications that are fast, secure, and SEO-friendly.`,
            features: [
                { title: 'Responsive Design', description: 'Perfect experience on desktop, tablet, and mobile', icon: <HiOutlineGlobe /> },
                { title: 'SEO Optimized', description: 'Built for search engine visibility and rankings', icon: <HiOutlineGlobe /> },
                { title: 'Fast Performance', description: 'Optimized for speed with sub-2 second load times', icon: <HiOutlineLightningBolt /> },
                { title: 'Modern UI/UX', description: 'Beautiful interfaces with intuitive user experience', icon: <FaPaintBrush /> }
            ],
            technologies: ['React', 'Next.js', 'Vue.js', 'Angular', 'Node.js', 'TypeScript', 'Tailwind CSS', 'GraphQL'],
            process: [
                { step: '01', title: 'Research', description: 'User research and competitive analysis' },
                { step: '02', title: 'Design', description: 'UI/UX design and prototyping' },
                { step: '03', title: 'Development', description: 'Frontend and backend development' },
                { step: '04', title: 'Testing', description: 'Cross-browser and device testing' },
                { step: '05', title: 'Launch', description: 'Deployment and performance optimization' },
                { step: '06', title: 'Maintain', description: 'Updates and continuous improvement' }
            ],
            stats: { 'Websites Built': '200+', 'Uptime': '99.9%', 'Load Speed': '<2s', 'Client Rating': '4.9/5' },
            pricing: [
                { name: 'Basic', price: '₹50,000', features: ['5 Pages', 'Responsive Design', 'Basic SEO', 'Contact Form'] },
                { name: 'Business', price: '₹1,50,000', features: ['15 Pages', 'CMS Integration', 'Advanced SEO', 'Analytics'], popular: true },
                { name: 'Custom', price: 'Custom', features: ['Unlimited Pages', 'Custom Features', 'E-commerce', 'Priority Support'] }
            ],
            testimonial: {
                text: "Our new website has increased conversions by 150%. The team understood our vision and delivered beyond expectations.",
                author: "Priya Patel",
                role: "Marketing Director, GrowthCo",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
            },
            faqs: [
                { q: 'How long does it take to build a website?', a: 'Simple websites take 2-4 weeks, while complex web applications can take 2-4 months.' },
                { q: 'Will my website be mobile-friendly?', a: 'Absolutely! All our websites are fully responsive and optimized for all devices.' },
                { q: 'Do you provide hosting?', a: 'Yes, we offer reliable hosting solutions with 99.9% uptime guarantee.' }
            ]
        },
        'mobile-apps': {
            id: 'mobile-apps',
            title: 'Mobile Applications',
            subtitle: 'iOS & Android Development',
            tagline: 'Apps That Users Love',
            icon: <HiOutlineDeviceMobile className="text-5xl" />,
            gradient: 'from-[#32a162] to-[#3bc475]',
            heroImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=600&fit=crop',
            description: 'We build native and cross-platform mobile applications for iOS and Android with stunning interfaces, smooth performance, and engaging user experiences.',
            longDescription: `Our mobile app development services cover the entire spectrum of mobile solutions, from consumer apps to enterprise mobility solutions.

We specialize in:
• Native iOS Development (Swift)
• Native Android Development (Kotlin)
• Cross-Platform Development (Flutter, React Native)
• App Store Optimization
• App Maintenance & Updates

Our apps are designed for performance, security, and user engagement, helping businesses connect with their customers on the devices they use most.`,
            features: [
                { title: 'iOS & Android', description: 'Native apps for both major platforms', icon: <HiOutlineDeviceMobile /> },
                { title: 'Cross-Platform', description: 'Single codebase for multiple platforms with Flutter', icon: <HiOutlineDeviceMobile /> },
                { title: 'Offline Support', description: 'Apps that work without internet connection', icon: <HiOutlineCloud /> },
                { title: 'Push Notifications', description: 'Engage users with timely notifications', icon: <HiOutlineChatAlt2 /> }
            ],
            technologies: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase', 'SQLite', 'REST APIs', 'GraphQL'],
            process: [
                { step: '01', title: 'Strategy', description: 'App concept and feature planning' },
                { step: '02', title: 'Design', description: 'UI/UX design following platform guidelines' },
                { step: '03', title: 'Develop', description: 'Native or cross-platform development' },
                { step: '04', title: 'Test', description: 'Comprehensive testing on real devices' },
                { step: '05', title: 'Launch', description: 'App store submission and approval' },
                { step: '06', title: 'Grow', description: 'Updates, analytics, and optimization' }
            ],
            stats: { 'Apps Launched': '100+', 'Downloads': '5M+', 'App Rating': '4.8★', 'Active Users': '500K+' },
            pricing: [
                { name: 'MVP', price: '₹3,00,000', features: ['Single Platform', 'Core Features', '3 Month Dev', 'Basic Support'] },
                { name: 'Standard', price: '₹6,00,000', features: ['iOS + Android', 'Full Features', 'Push Notifications', '6 Month Support'], popular: true },
                { name: 'Premium', price: 'Custom', features: ['Custom Features', 'Backend Development', 'Analytics', 'Lifetime Support'] }
            ],
            testimonial: {
                text: "Our app has over 50,000 downloads and a 4.8-star rating. The development team was professional and delivered an amazing product.",
                author: "Amit Kumar",
                role: "Founder, Dhuniya News",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
            },
            faqs: [
                { q: 'Should I build native or cross-platform?', a: 'It depends on your needs. Cross-platform (Flutter) is cost-effective, while native offers best performance.' },
                { q: 'How long does app development take?', a: 'Simple apps take 2-3 months, while complex apps can take 4-6 months.' },
                { q: 'Do you help with app store submission?', a: 'Yes, we handle the entire submission process for both Apple App Store and Google Play Store.' }
            ]
        },
        'ai-automation': {
            id: 'ai-automation',
            title: 'AI & Automation',
            subtitle: 'Intelligent Business Solutions',
            tagline: 'Automate, Optimize, Innovate',
            icon: <HiOutlineChip className="text-5xl" />,
            gradient: 'from-[#3234a2] to-[#32a162]',
            heroImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop',
            description: 'Harness the power of artificial intelligence and automation to transform your business operations, reduce costs, and drive innovation.',
            longDescription: `Our AI and automation services help businesses leverage cutting-edge technologies to streamline operations, make data-driven decisions, and create intelligent customer experiences.

We offer:
• Custom AI/ML Solutions
• Chatbots & Virtual Assistants
• Process Automation (RPA)
• Predictive Analytics
• Natural Language Processing
• Computer Vision Solutions

Our team of AI specialists works closely with your business to identify automation opportunities and implement solutions that deliver measurable ROI.`,
            features: [
                { title: 'Machine Learning', description: 'Custom ML models for your specific use cases', icon: <HiOutlineChip /> },
                { title: 'Process Automation', description: 'Automate repetitive tasks and workflows', icon: <HiOutlineChip /> },
                { title: 'Chatbots', description: 'AI-powered conversational interfaces', icon: <HiOutlineChatAlt2 /> },
                { title: 'Predictive Analytics', description: 'Data-driven insights and forecasting', icon: <HiOutlineLightningBolt /> }
            ],
            technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'LangChain', 'FastAPI', 'Docker', 'AWS SageMaker'],
            process: [
                { step: '01', title: 'Assess', description: 'Identify automation opportunities' },
                { step: '02', title: 'Design', description: 'AI/ML solution architecture' },
                { step: '03', title: 'Data', description: 'Data collection and preparation' },
                { step: '04', title: 'Train', description: 'Model training and optimization' },
                { step: '05', title: 'Deploy', description: 'Production deployment' },
                { step: '06', title: 'Monitor', description: 'Continuous improvement' }
            ],
            stats: { 'Automation Rate': '70%', 'Model Accuracy': '95%', 'Cost Savings': '40%', 'Time Saved': '60%' },
            pricing: [
                { name: 'Chatbot', price: '₹1,00,000', features: ['Basic Chatbot', 'FAQ Responses', 'Web Integration', '3 Month Support'] },
                { name: 'Automation', price: '₹3,00,000', features: ['Process Automation', 'Custom Workflows', 'Analytics Dashboard', '6 Month Support'], popular: true },
                { name: 'Enterprise AI', price: 'Custom', features: ['Custom ML Models', 'Full Integration', 'Dedicated Team', 'Ongoing Support'] }
            ],
            testimonial: {
                text: "AI automation reduced our customer support workload by 60% while improving response times. The ROI has been incredible.",
                author: "Sneha Reddy",
                role: "Operations Head, ServiceFirst",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
            },
            faqs: [
                { q: 'What business problems can AI solve?', a: 'AI can automate customer support, analyze data, predict trends, optimize operations, and much more.' },
                { q: 'Do we need a lot of data for AI?', a: 'It depends on the solution. Some AI models require large datasets, while others can work with smaller amounts.' },
                { q: 'How long does AI implementation take?', a: 'Simple chatbots take 2-4 weeks, while complex ML solutions can take 3-6 months.' }
            ]
        },
        'cloud-devops': {
            id: 'cloud-devops',
            title: 'Cloud & DevOps',
            subtitle: 'Infrastructure Excellence',
            tagline: 'Scalable, Secure, Reliable',
            icon: <HiOutlineCloud className="text-5xl" />,
            gradient: 'from-[#32a162] to-[#288a52]',
            heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop',
            description: 'Build and manage scalable cloud infrastructure with modern DevOps practices for reliable, secure, and efficient operations.',
            longDescription: `Our cloud and DevOps services help businesses leverage the power of cloud computing while implementing best practices for continuous integration and deployment.

We provide:
• Cloud Architecture Design
• AWS, Azure, GCP Setup & Management
• CI/CD Pipeline Implementation
• Container Orchestration (Docker, Kubernetes)
• Infrastructure as Code (Terraform, CloudFormation)
• 24/7 Monitoring & Support

Our certified cloud engineers ensure your infrastructure is optimized for performance, security, and cost efficiency.`,
            features: [
                { title: 'Multi-Cloud', description: 'AWS, Azure, and Google Cloud expertise', icon: <HiOutlineCloud /> },
                { title: 'CI/CD Pipeline', description: 'Automated build, test, and deployment', icon: <HiOutlineCode /> },
                { title: 'Containerization', description: 'Docker and Kubernetes orchestration', icon: <HiOutlineCloud /> },
                { title: '24/7 Monitoring', description: 'Real-time monitoring and alerting', icon: <HiOutlineLightningBolt /> }
            ],
            technologies: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'GitHub Actions'],
            process: [
                { step: '01', title: 'Audit', description: 'Infrastructure assessment' },
                { step: '02', title: 'Design', description: 'Cloud architecture planning' },
                { step: '03', title: 'Migrate', description: 'Safe migration to cloud' },
                { step: '04', title: 'Automate', description: 'CI/CD implementation' },
                { step: '05', title: 'Secure', description: 'Security hardening' },
                { step: '06', title: 'Optimize', description: 'Cost and performance optimization' }
            ],
            stats: { 'Uptime': '99.99%', 'Deployments': '500+', 'Cost Reduction': '35%', 'Servers Managed': '200+' },
            pricing: [
                { name: 'Starter', price: '₹50,000/mo', features: ['Cloud Setup', 'Basic CI/CD', 'Email Support', 'Monthly Reports'] },
                { name: 'Business', price: '₹1,50,000/mo', features: ['Full DevOps', 'Auto-scaling', '24/7 Support', 'Daily Backups'], popular: true },
                { name: 'Enterprise', price: 'Custom', features: ['Dedicated Team', 'Custom SLA', 'Disaster Recovery', 'Compliance'] }
            ],
            testimonial: {
                text: "Moving to cloud with their DevOps practices reduced our deployment time from days to minutes. Incredible transformation!",
                author: "Vikram Singh",
                role: "CTO, FinTech Startup",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
            },
            faqs: [
                { q: 'Which cloud provider should I choose?', a: 'It depends on your needs. AWS is most popular, Azure integrates well with Microsoft, and GCP excels in data/AI.' },
                { q: 'How much can I save with cloud?', a: 'Most businesses see 20-40% cost reduction through optimization and pay-as-you-go pricing.' },
                { q: 'Is cloud migration risky?', a: 'With proper planning and execution, cloud migration is safe. We ensure zero downtime migrations.' }
            ]
        },
        'digital-marketing': {
            id: 'digital-marketing',
            title: 'SMS & WhatsApp Marketing',
            subtitle: 'Direct Customer Engagement',
            tagline: 'Reach Customers Instantly',
            icon: <HiOutlineChatAlt2 className="text-5xl" />,
            gradient: 'from-[#3234a2] to-[#4a4cff]',
            heroImage: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=1200&h=600&fit=crop',
            description: 'Powerful SMS and WhatsApp marketing solutions to reach your customers directly with personalized, targeted campaigns that drive engagement and conversions.',
            longDescription: `Our digital marketing services help businesses connect with customers through the most direct channels - SMS and WhatsApp.

We offer:
• Bulk SMS Campaigns
• WhatsApp Business API Integration
• Automated Marketing Messages
• Campaign Analytics & Reporting
• Customer Segmentation
• Personalized Messaging
• Transactional SMS/WhatsApp
• Two-way Conversations

With 98% open rates for SMS and growing WhatsApp usage, these channels provide unmatched engagement for your marketing efforts.`,
            features: [
                { title: 'Bulk SMS', description: 'Send thousands of messages instantly', icon: <HiOutlineChatAlt2 /> },
                { title: 'WhatsApp Business', description: 'Official WhatsApp API integration', icon: <FaWhatsapp /> },
                { title: 'Campaign Analytics', description: 'Track delivery, opens, and conversions', icon: <HiOutlineLightningBolt /> },
                { title: 'Automation', description: 'Scheduled and triggered messages', icon: <HiOutlineChip /> }
            ],
            technologies: ['WhatsApp Business API', 'Twilio', 'MSG91', 'Custom Dashboard', 'Analytics', 'CRM Integration'],
            process: [
                { step: '01', title: 'Setup', description: 'Account and API configuration' },
                { step: '02', title: 'Template', description: 'Message template approval' },
                { step: '03', title: 'Segment', description: 'Customer list segmentation' },
                { step: '04', title: 'Campaign', description: 'Campaign creation and scheduling' },
                { step: '05', title: 'Send', description: 'Message delivery' },
                { step: '06', title: 'Analyze', description: 'Performance reporting' }
            ],
            stats: { 'Messages Sent': '10M+', 'Delivery Rate': '99%', 'Clients': '500+', 'Open Rate': '98%' },
            pricing: [
                { name: 'Starter', price: '₹5,000/mo', features: ['5,000 SMS', 'Basic Analytics', 'Email Support', 'Standard Templates'] },
                { name: 'Growth', price: '₹15,000/mo', features: ['25,000 SMS', 'WhatsApp Integration', 'Priority Support', 'Custom Templates'], popular: true },
                { name: 'Enterprise', price: 'Custom', features: ['Unlimited Messages', 'Dedicated Manager', 'API Access', 'Advanced Analytics'] }
            ],
            testimonial: {
                text: "WhatsApp marketing increased our customer engagement by 300%. The delivery rates and response rates are incredible!",
                author: "Meera Joshi",
                role: "Marketing Manager, RetailBrand",
                image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
            },
            faqs: [
                { q: 'Is WhatsApp marketing legal?', a: "Yes, when done with proper consent and using official WhatsApp Business API, it's completely legal and compliant." },
                { q: 'What are the delivery rates?', a: 'SMS delivery rates are 98-99%, and WhatsApp messages have near 100% delivery to active users.' },
                { q: 'Can I personalize messages?', a: 'Yes, you can personalize messages with customer names, purchase history, and other dynamic content.' }
            ]
        },
        'ui-ux-design': {
            id: 'ui-ux-design',
            title: 'UI/UX Design',
            subtitle: 'Beautiful User Experiences',
            tagline: 'Design That Delights Users',
            icon: <FaPaintBrush className="text-5xl" />,
            gradient: 'from-[#32a162] to-[#3bc475]',
            heroImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=600&fit=crop',
            description: 'Create beautiful, intuitive, and user-centered designs that create memorable digital experiences and drive user engagement.',
            longDescription: `Our UI/UX design services focus on creating digital experiences that users love. We combine aesthetics with functionality to design interfaces that are both beautiful and easy to use.

Our services include:
• User Research & Personas
• Information Architecture
• Wireframing & Prototyping
• Visual Design
• Interaction Design
• Usability Testing
• Design Systems
• Mobile App Design
• Web Design

We follow a user-centered design process that ensures every decision is backed by research and testing.`,
            features: [
                { title: 'User Research', description: "Deep understanding of your users' needs", icon: <HiOutlineGlobe /> },
                { title: 'Wireframing', description: 'Structured layouts before visual design', icon: <HiOutlineCode /> },
                { title: 'Prototyping', description: 'Interactive prototypes for testing', icon: <HiOutlineDeviceMobile /> },
                { title: 'Design Systems', description: 'Consistent design language across products', icon: <FaPaintBrush /> }
            ],
            technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle', 'Framer', 'Zeplin', 'Miro'],
            process: [
                { step: '01', title: 'Research', description: 'User research and analysis' },
                { step: '02', title: 'Strategy', description: 'UX strategy and IA' },
                { step: '03', title: 'Wireframe', description: 'Low-fidelity wireframes' },
                { step: '04', title: 'Design', description: 'High-fidelity visual design' },
                { step: '05', title: 'Prototype', description: 'Interactive prototyping' },
                { step: '06', title: 'Test', description: 'Usability testing and iteration' }
            ],
            stats: { 'Designs Created': '300+', 'Users Impacted': '1M+', 'Client Satisfaction': '97%', 'Design Awards': '15+' },
            pricing: [
                { name: 'Basic', price: '₹75,000', features: ['5 Screens', 'Wireframes', 'UI Design', '2 Revisions'] },
                { name: 'Standard', price: '₹1,50,000', features: ['15 Screens', 'User Research', 'Prototyping', '5 Revisions'], popular: true },
                { name: 'Complete', price: 'Custom', features: ['Full App Design', 'Design System', 'Usability Testing', 'Unlimited Revisions'] }
            ],
            testimonial: {
                text: "The design team transformed our app's user experience. User satisfaction scores increased by 45% after the redesign!",
                author: "Ravi Menon",
                role: "Product Manager, AppStart",
                image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop"
            },
            faqs: [
                { q: "What's the difference between UI and UX?", a: 'UX is about the overall experience and usability, while UI is about the visual design and interface elements.' },
                { q: 'How long does design take?', a: 'Simple app designs take 2-4 weeks, while complex products can take 2-3 months.' },
                { q: 'Do you do user testing?', a: 'Yes, we conduct usability testing to validate designs before development begins.' }
            ]
        },
        'ecommerce-solutions': {
            id: 'ecommerce-solutions',
            title: 'E-Commerce Solutions',
            subtitle: 'Online Store Development',
            tagline: 'Sell Online, Grow Your Business',
            icon: <FaShoppingCart className="text-5xl" />,
            gradient: 'from-[#3234a2] to-[#32a162]',
            heroImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop',
            description: 'Complete e-commerce solutions from single online stores to multi-vendor marketplaces with secure payment integration and inventory management.',
            longDescription: `Our e-commerce development services help businesses sell online effectively. We build custom e-commerce solutions that are secure, scalable, and optimized for conversions.

We offer:
• Custom E-commerce Websites
• Multi-vendor Marketplaces
• Mobile Commerce Apps
• Payment Gateway Integration
• Inventory Management
• Order Management
• Shipping Integration
• Analytics & Reporting

Whether you're launching your first online store or scaling an existing business, we have the expertise to help you succeed.`,
            features: [
                { title: 'Online Stores', description: 'Custom e-commerce website development', icon: <FaShoppingCart /> },
                { title: 'Payment Gateway', description: 'Secure payment processing integration', icon: <HiOutlineCheck /> },
                { title: 'Inventory Management', description: 'Real-time stock tracking and management', icon: <HiOutlineCode /> },
                { title: 'Order Tracking', description: 'End-to-end order management system', icon: <HiOutlineLightningBolt /> }
            ],
            technologies: ['Shopify', 'WooCommerce', 'Magento', 'Custom Solutions', 'Razorpay', 'Stripe', 'PayPal'],
            process: [
                { step: '01', title: 'Plan', description: 'Requirements and feature planning' },
                { step: '02', title: 'Design', description: 'Store design and UX' },
                { step: '03', title: 'Build', description: 'Development and integration' },
                { step: '04', title: 'Products', description: 'Catalog setup and configuration' },
                { step: '05', title: 'Test', description: 'Testing and quality assurance' },
                { step: '06', title: 'Launch', description: 'Go-live and marketing support' }
            ],
            stats: { 'Stores Built': '100+', 'Total GMV': '₹50Cr+', 'Products Listed': '1M+', 'Client Growth': '+150%' },
            pricing: [
                { name: 'Starter Store', price: '₹1,00,000', features: ['50 Products', 'Payment Integration', 'Basic Theme', 'Email Support'] },
                { name: 'Business Store', price: '₹3,00,000', features: ['500 Products', 'Custom Design', 'Inventory System', 'Priority Support'], popular: true },
                { name: 'Marketplace', price: 'Custom', features: ['Multi-vendor', 'Commission System', 'Advanced Features', 'Dedicated Team'] }
            ],
            testimonial: {
                text: "Our e-commerce store generates ₹50 lakh monthly revenue. The platform is robust, fast, and our customers love the shopping experience!",
                author: "Fatima Sheikh",
                role: "Founder, Ishu's Store",
                image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop"
            },
            faqs: [
                { q: 'Which e-commerce platform is best?', a: 'It depends on your needs. Shopify is great for quick launch, WooCommerce for WordPress, and custom for unique requirements.' },
                { q: 'How do you handle payments?', a: 'We integrate secure payment gateways like Razorpay, Stripe, PayPal, and support UPI, cards, and net banking.' },
                { q: 'Can you migrate my existing store?', a: 'Yes, we handle complete migration including products, customers, and order history.' }
            ]
        },
        'support-maintenance': {
            id: 'support-maintenance',
            title: 'Support & Maintenance',
            subtitle: '24/7 Technical Support',
            tagline: "We've Got Your Back",
            icon: <FaHeadset className="text-5xl" />,
            gradient: 'from-[#32a162] to-[#288a52]',
            heroImage: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=600&fit=crop',
            description: '24/7 technical support and maintenance services to keep your applications running smoothly, securely, and up-to-date.',
            longDescription: `Our support and maintenance services ensure your applications continue to perform optimally long after launch.

We provide:
• 24/7 Technical Support
• Bug Fixes and Issue Resolution
• Security Updates and Patches
• Performance Optimization
• Feature Enhancements
• Server Maintenance
• Backup Management
• Monitoring and Alerting

Our dedicated support team is always available to help you resolve issues quickly and keep your systems running smoothly.`,
            features: [
                { title: '24/7 Support', description: 'Round-the-clock technical assistance', icon: <FaHeadset /> },
                { title: 'Bug Fixes', description: 'Quick resolution of issues and bugs', icon: <HiOutlineCode /> },
                { title: 'Security Updates', description: 'Regular security patches and updates', icon: <HiOutlineCheck /> },
                { title: 'Performance Optimization', description: 'Continuous performance improvements', icon: <HiOutlineLightningBolt /> }
            ],
            technologies: ['Jira', 'Zendesk', 'Slack', 'PagerDuty', 'Datadog', 'New Relic', 'AWS CloudWatch'],
            process: [
                { step: '01', title: 'Onboard', description: 'Understanding your systems' },
                { step: '02', title: 'Monitor', description: 'Setting up monitoring tools' },
                { step: '03', title: 'Support', description: 'Handling support requests' },
                { step: '04', title: 'Fix', description: 'Issue resolution' },
                { step: '05', title: 'Update', description: 'Regular updates and patches' },
                { step: '06', title: 'Report', description: 'Monthly performance reports' }
            ],
            stats: { 'Response Time': '<1hr', 'Resolution Rate': '95%', 'Client Retention': '98%', 'Uptime': '99.9%' },
            pricing: [
                { name: 'Basic', price: '₹25,000/mo', features: ['Email Support', '8hr Response', 'Bug Fixes', 'Monthly Updates'] },
                { name: 'Standard', price: '₹50,000/mo', features: ['24/7 Support', '2hr Response', 'All Fixes', 'Weekly Updates'], popular: true },
                { name: 'Premium', price: '₹1,00,000/mo', features: ['Dedicated Team', '30min Response', 'Proactive Monitoring', 'Unlimited Updates'] }
            ],
            testimonial: {
                text: "Their support team resolved a critical issue at 2 AM within 30 minutes. That's the kind of reliability you need for business applications.",
                author: "Dr. Anil Gupta",
                role: "IT Director, Hospital Chain",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop"
            },
            faqs: [
                { q: "What's your average response time?", a: 'For critical issues, we respond within 30 minutes. Standard issues are addressed within 2-4 hours.' },
                { q: 'Do you support applications built by others?', a: 'Yes, we can take over support for applications built by other teams after a code review.' },
                { q: "What's included in maintenance?", a: 'Maintenance includes bug fixes, security updates, performance optimization, and minor feature updates.' }
            ]
        }
    }

    const service = servicesData[serviceId]

    // 404 - Service Not Found
    if (!service) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center p-8"
                >
                    <div className="text-8xl mb-6">🔍</div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
                    <p className="text-gray-600 mb-8">The service you're looking for doesn't exist.</p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate('/services')}
                        className="px-8 py-4 bg-gradient-to-r from-[#3234a2] to-[#32a162] text-white rounded-xl font-bold shadow-lg"
                    >
                        View All Services
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
            <section className={`relative pt-20 pb-32 bg-gradient-to-br ${service.gradient} overflow-hidden`}>
                <div className="absolute inset-0">
                    <img
                        src={service.heroImage}
                        alt={service.title}
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center text-white"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6"
                        >
                            {service.icon}
                        </motion.div>

                        <h1 className="text-4xl md:text-6xl font-black mb-4">{service.title}</h1>
                        <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">{service.tagline}</p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate('/#contact')}
                                className="px-8 py-4 bg-white text-gray-900 rounded-xl font-bold flex items-center gap-2 shadow-lg"
                            >
                                <FaPhone />
                                Get Free Consultation
                            </motion.button>
                            <motion.a
                                href="https://wa.me/919876543210"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-[#25D366] text-white rounded-xl font-bold flex items-center gap-2 shadow-lg"
                            >
                                <FaWhatsapp />
                                WhatsApp Us
                            </motion.a>
                        </div>
                    </motion.div>
                </div>

                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#f9fafb" />
                    </svg>
                </div>
            </section>

            {/* Stats Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
                >
                    {Object.entries(service.stats).map(([key, value], idx) => (
                        <motion.div
                            key={key}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow"
                        >
                            <div className={`text-3xl font-black bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                                {value}
                            </div>
                            <div className="text-sm text-gray-500 mt-1">{key}</div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Description */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-8 shadow-lg mb-12"
                >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">About This Service</h2>
                    <p className="text-gray-600 leading-relaxed whitespace-pre-line">{service.longDescription}</p>
                </motion.section>

                {/* Features Grid */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What We Offer</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {service.features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
                            >
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center text-white mb-4`}>
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-600 text-sm">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Process Section */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Process</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {service.process.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="text-center"
                            >
                                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.gradient} text-white font-bold text-xl flex items-center justify-center mx-auto mb-3`}>
                                    {step.step}
                                </div>
                                <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                                <p className="text-xs text-gray-500">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Technologies */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-8 shadow-lg mb-12"
                >
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Technologies We Use</h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        {service.technologies.map((tech, idx) => (
                            <motion.span
                                key={idx}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className={`px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${service.gradient} text-white`}
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                </motion.section>

                {/* Pricing */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Pricing Plans</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {service.pricing.map((plan, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={`bg-white rounded-2xl p-6 shadow-lg relative ${plan.popular ? 'ring-2 ring-[#3234a2]' : ''}`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#3234a2] to-[#32a162] text-white text-xs font-bold rounded-full">
                                        MOST POPULAR
                                    </div>
                                )}
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                                <div className={`text-3xl font-black bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent mb-4`}>
                                    {plan.price}
                                </div>
                                <ul className="space-y-3 mb-6">
                                    {plan.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-center gap-2 text-gray-600">
                                            <FaCheck className="text-[#32a162] flex-shrink-0" />
                                            <span className="text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => navigate('/#contact')}
                                    className={`w-full py-3 rounded-xl font-bold ${plan.popular ? `bg-gradient-to-r ${service.gradient} text-white` : 'bg-gray-100 text-gray-900 hover:bg-gray-200'} transition-colors`}
                                >
                                    Get Started
                                </motion.button>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Testimonial */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`bg-gradient-to-r ${service.gradient} rounded-2xl p-8 text-white mb-12`}
                >
                    <FaQuoteLeft className="text-4xl text-white/30 mb-4" />
                    <p className="text-xl italic mb-6">"{service.testimonial.text}"</p>
                    <div className="flex items-center gap-4">
                        <img
                            src={service.testimonial.image}
                            alt={service.testimonial.author}
                            className="w-14 h-14 rounded-full object-cover border-2 border-white/30"
                        />
                        <div>
                            <div className="font-bold">{service.testimonial.author}</div>
                            <div className="text-white/70">{service.testimonial.role}</div>
                        </div>
                    </div>
                </motion.section>

                {/* FAQs */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-8 shadow-lg mb-12"
                >
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {service.faqs.map((faq, idx) => (
                            <div key={idx} className="border-b border-gray-100 pb-4">
                                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                                <p className="text-gray-600 text-sm">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* CTA Section */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="bg-gray-900 rounded-3xl p-8 md:p-12 text-white text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started? 🚀</h2>
                        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                            Let's discuss your project and find the perfect solution for your needs
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate('/#contact')}
                                className={`px-8 py-4 bg-gradient-to-r ${service.gradient} text-white rounded-xl font-bold text-lg shadow-lg`}
                            >
                                Contact Us →
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate('/services')}
                                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-xl font-bold text-lg"
                            >
                                View All Services
                            </motion.button>
                        </div>
                    </div>
                </motion.section>
            </div>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-8">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-gray-400">© {new Date().getFullYear()} Your Company. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default ServiceDetailPage