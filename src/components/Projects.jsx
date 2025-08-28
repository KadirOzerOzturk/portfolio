import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { useAppContext } from '../context/AppContext';

function Projects() {
    const { t } = useTranslation();
    const { isDark } = useAppContext();
    const [activeCategory, setActiveCategory] = useState('frontend');
    const [activeProject, setActiveProject] = useState(0);

    const frontendProjects = [
        {
            title: t('projects.projectData.shorterly.title'),
            description: t('projects.projectData.shorterly.description'),
            tech: ["React", "Node.js", "MongoDB", "Express"],
            gradient: "from-purple-500 to-pink-500",
            url: "https://shorterly.net/",
            github: "https://github.com/KadirOzerOzturk",
            features: t('projects.projectData.shorterly.features', { returnObjects: true }),
            icon: "🔗",
            type: "Full Stack"
        },
        {
            title: t('projects.projectData.proguard.title'),
            description: t('projects.projectData.proguard.description'),
            tech: ["React", "TypeScript", "Node.js", "Security"],
            gradient: "from-green-500 to-blue-500",
            url: "https://procguard.netlify.app/",
            github: "https://github.com/KadirOzerOzturk",
            features: t('projects.projectData.proguard.features', { returnObjects: true }),
            icon: "🛡️",
            type: "Security Platform"
        }
    ];

    const backendProjects = [
        
        {
            title: t('projects.projectData.codegen.title'),
            description: t('projects.projectData.codegen.description'),
            tech: ["Golang", "CLI", "Code Generation", "File Management"],
            gradient: "from-blue-500 to-indigo-500",
            github: "https://github.com/KadirOzerOzturk",
            features: t('projects.projectData.codegen.features', { returnObjects: true }),
            icon: "⚙️",
            type: "CLI Tool"
        },
        {
            title: t('projects.projectData.mibparser.title'),
            description: t('projects.projectData.mibparser.description'),
            tech: ["Golang", "SNMP", "Parser", "Network Management"],
            gradient: "from-green-500 to-emerald-500",
            github: "https://github.com/KadirOzerOzturk",
            features: t('projects.projectData.mibparser.features', { returnObjects: true }),
            icon: "🌐",
            type: "Network Tool"
        },
        {
            title: t('projects.projectData.springsecurity.title'),
            description: t('projects.projectData.springsecurity.description'),
            tech: ["Spring Boot", "Spring Security", "JWT", "PostgreSQL"],
            gradient: "from-red-500 to-orange-500",
            github: "https://github.com/KadirOzerOzturk",
            features: t('projects.projectData.springsecurity.features', { returnObjects: true }),
            icon: "🔐",
            type: "Security System"
        },
        {
            title: t('projects.projectData.eventbooking.title'),
            description: t('projects.projectData.eventbooking.description'),
            tech: ["Spring Boot", "PostgreSQL", "REST API", "JPA"],
            gradient: "from-purple-500 to-pink-500",
            github: "https://github.com/KadirOzerOzturk",
            features: t('projects.projectData.eventbooking.features', { returnObjects: true }),
            icon: "🎫",
            type: "Web Service"
        }
    ];

    const currentProjects = activeCategory === 'frontend' ? frontendProjects : backendProjects;

    return (
        <>
            <Helmet>
                <meta name="description" content={t('projects.subtitle')} />
                <meta name="keywords" content="projeler, web geliştirme, React, Spring Boot, portfolio, yazılım projeleri" />
                <meta name="author" content="Kadir Özer Öztürk" />
                <meta property="og:title" content={`${t('nav.projects')} - Kadir Özer Öztürk`} />
                <meta property="og:description" content={t('projects.subtitle')} />
            </Helmet>

            <div className="max-w-7xl mx-auto px-4 py-16">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className={`inline-flex items-center gap-2 ${isDark 
                        ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20' 
                        : 'bg-gradient-to-r from-purple-200/50 to-pink-200/50'
                    } backdrop-blur-lg rounded-full px-6 py-3 border ${isDark 
                        ? 'border-white/20' 
                        : 'border-gray-300'
                    } mb-8`}>
                        <span className="text-2xl">💼</span>
                        <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>{t('projects.portfolio')}</span>
                    </div>
                    
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className={`${isDark 
                            ? 'bg-gradient-to-r from-white via-purple-200 to-pink-300 bg-clip-text text-transparent' 
                            : 'bg-gradient-to-r from-gray-800 via-purple-600 to-pink-600 bg-clip-text text-transparent'
                        }`}>
                            {t('projects.title')}
                        </span>
                    </h2>
                    
                    <p className={`text-xl md:text-2xl ${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed max-w-4xl mx-auto`}>
                        {t('projects.subtitle')}
                    </p>
                </div>

                {/* Category Navigation */}
                <div className="flex justify-center mb-8">
                    <div className={`flex gap-4 ${isDark 
                        ? 'bg-black/30' 
                        : 'bg-white/50'
                    } backdrop-blur-lg rounded-2xl p-2 border ${isDark 
                        ? 'border-white/20' 
                        : 'border-gray-300'
                    }`}>
                        <button
                            onClick={() => {
                                setActiveCategory('frontend');
                                setActiveProject(0);
                            }}
                            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                                activeCategory === 'frontend'
                                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                                    : isDark 
                                        ? 'text-gray-400 hover:text-white hover:bg-white/10'
                                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                            }`}
                        >
                            🎨 {t('projects.categories.frontend')}
                        </button>
                        <button
                            onClick={() => {
                                setActiveCategory('backend');
                                setActiveProject(0);
                            }}
                            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                                activeCategory === 'backend'
                                    ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg'
                                    : isDark 
                                        ? 'text-gray-400 hover:text-white hover:bg-white/10'
                                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                            }`}
                        >
                            ⚙️ {t('projects.categories.backend')}
                        </button>
                    </div>
                </div>

                {/* Project Navigation */}
                <div className="flex justify-center mb-12">
                    <div className={`flex flex-wrap justify-center gap-2 ${isDark 
                        ? 'bg-black/30' 
                        : 'bg-white/50'
                    } backdrop-blur-lg rounded-2xl p-2 border ${isDark 
                        ? 'border-white/20' 
                        : 'border-gray-300'
                    }`}>
                        {currentProjects.map((project, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveProject(index)}
                                className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                                    activeProject === index
                                        ? `bg-gradient-to-r ${project.gradient} text-white shadow-lg transform scale-105`
                                        : isDark 
                                            ? 'text-gray-400 hover:text-white hover:bg-white/10'
                                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                                }`}
                            >
                                <span className="text-lg">{project.icon}</span>
                                <span className="hidden sm:inline">{project.title}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Main Project Display */}
                <div className="relative">
                    {currentProjects.map((project, index) => (
                        <div
                            key={index}
                            className={`transition-all duration-700 ${
                                activeProject === index 
                                    ? 'opacity-100 transform translate-y-0' 
                                    : 'opacity-0 transform translate-y-12 absolute inset-0 pointer-events-none'
                            }`}
                        >
                            <div className={`${isDark 
                                ? 'bg-gradient-to-br from-gray-900/90 to-gray-800/90' 
                                : 'bg-gradient-to-br from-white/90 to-gray-50/90'
                            } backdrop-blur-xl rounded-3xl border ${isDark 
                                ? 'border-white/10' 
                                : 'border-gray-200'
                            } shadow-2xl overflow-hidden`}>
                                
                                {/* Project Header */}
                                <div className={`bg-gradient-to-r ${project.gradient} p-8 text-white`}>
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="text-4xl">{project.icon}</span>
                                        <div>
                                            <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                                            <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                                                {project.type}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map((tech, techIndex) => (
                                            <span 
                                                key={techIndex}
                                                className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <p className="text-lg opacity-90 leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="grid lg:grid-cols-2 gap-8 p-8">
                                    {/* Project Details */}
                                    <div className="space-y-6">
                                        <div>
                                            <h4 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                                                {t('projects.keyFeatures')}
                                            </h4>
                                            <ul className="space-y-3">
                                                {project.features.map((feature, featureIndex) => (
                                                    <li key={featureIndex} className={`flex items-center gap-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                                        <span className="text-green-400 text-xl">✓</span>
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="flex gap-4 pt-4">
                                            {project.url && project.url !== "#" && (
                                                <a
                                                    href={project.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`inline-flex items-center gap-2 bg-gradient-to-r ${project.gradient} text-white px-6 py-3 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
                                                >
                                                    <span>🌐</span>
                                                    {t('projects.liveDemo')}
                                                </a>
                                            )}
                                            {project.github && project.github !== "#" && (
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`inline-flex items-center gap-2 ${isDark 
                                                        ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                                                        : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                                                    } px-6 py-3 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
                                                >
                                                    <span>📱</span>
                                                    {t('projects.sourceCode')}
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    {/* Project Preview */}
                                    <div className="space-y-4">
                                        <h4 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>
                                            {t('projects.projectPreview')}
                                        </h4>
                                        <div className={`relative ${isDark 
                                            ? 'bg-black/20' 
                                            : 'bg-white/50'
                                        } backdrop-blur-sm rounded-2xl overflow-hidden border ${isDark 
                                            ? 'border-white/10' 
                                            : 'border-gray-200'
                                        }`}>
                                            {project.url && project.url !== "#" ? (
                                                <iframe
                                                    src={project.url}
                                                    title={project.title}
                                                    className="w-full h-96 border-0"
                                                    loading="lazy"
                                                />
                                            ) : (
                                                <div className="w-full h-96 flex items-center justify-center">
                                                    <div className="text-center">
                                                        <div className="text-6xl mb-4">{project.icon}</div>
                                                        <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                                            {t('projects.previewNotAvailable')}
                                                        </p>
                                                        <p className={`text-sm mt-2 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                                                            Backend/CLI Projesi
                                                        </p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className={`text-center p-6 rounded-2xl ${isDark 
                        ? 'bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/20' 
                        : 'bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200'
                    }`}>
                        <div className="text-3xl font-bold text-blue-400 mb-2">
                            {15}+
                        </div>
                        <div className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            {t('projects.stats.completed')}
                        </div>
                    </div>
                    <div className={`text-center p-6 rounded-2xl ${isDark 
                        ? 'bg-gradient-to-br from-green-900/30 to-emerald-900/30 border border-green-500/20' 
                        : 'bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200'
                    }`}>
                        <div className="text-3xl font-bold text-green-400 mb-2">15+</div>
                        <div className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            {t('projects.stats.technologies')}
                        </div>
                    </div>
                    <div className={`text-center p-6 rounded-2xl ${isDark 
                        ? 'bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/20' 
                        : 'bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200'
                    }`}>
                        <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
                        <div className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            {t('projects.stats.responsive')}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;
