import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { useAppContext } from '../context/AppContext';

function About() {
    const { t } = useTranslation();
    const { isDark } = useAppContext();
    const [activeSkill, setActiveSkill] = useState(0);

    const skills = [
        {
            title: t('about.skillsData.frontend.title'),
            description: t('about.skillsData.frontend.description'),
            icon: "🎨",
            technologies: t('about.skillsData.frontend.technologies', { returnObjects: true }),
            color: "from-blue-500 to-cyan-500"
        },
        {
            title: t('about.skillsData.backend.title'), 
            description: t('about.skillsData.backend.description'),
            icon: "⚙️",
            technologies: t('about.skillsData.backend.technologies', { returnObjects: true }),
            color: "from-green-500 to-emerald-500"
        },
        {
            title: t('about.skillsData.devops.title'),
            description: t('about.skillsData.devops.description'),
            icon: "☁️",
            technologies: t('about.skillsData.devops.technologies', { returnObjects: true }),
            color: "from-purple-500 to-pink-500"
        }
    ];

    const techCategories = {
        frontend: [
            { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", level: 90 },
            { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", level: 85 },
            { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", level: 85 },
            { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", level: 95 },
        ],
        backend: [
            { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", level: 90 },
            { name: "Golang", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg", level: 80 },
            { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg", level: 80 },
            { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", level: 90 },
        ],
        devops: [
            { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg", level: 85 },
            { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", level: 75 },
            { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", level: 90 },
            { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", level: 90 },
        ]
    };

    return (
        <>
            <Helmet>
                <meta name="description" content={t('about.subtitle')} />
                <meta name="keywords" content="Kadir Özer Öztürk, yazılım geliştirici, React, Spring Boot, Golang, DevOps, Docker, AWS" />
                <meta name="author" content="Kadir Özer Öztürk" />
                <meta property="og:title" content={`${t('nav.about')} - Kadir Özer Öztürk`} />
                <meta property="og:description" content={t('about.description')} />
            </Helmet>

            <div className="max-w-7xl mx-auto px-4 py-16">
                
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className={`inline-flex items-center gap-2 ${isDark 
                        ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20' 
                        : 'bg-gradient-to-r from-blue-200/50 to-purple-200/50'
                    } backdrop-blur-lg rounded-full px-6 py-3 border ${isDark 
                        ? 'border-white/20' 
                        : 'border-gray-300'
                    } mb-8`}>
                        <span className="text-2xl">👋</span>
                        <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>{t('about.introduce')}</span>
                    </div>
                    
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className={`${isDark 
                            ? 'bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent' 
                            : 'bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent'
                        }`}>
                            {t('about.title')}
                        </span>
                    </h2>
                    
                    <div className="max-w-4xl mx-auto">
                        <p className={`text-xl md:text-2xl leading-relaxed mb-8 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            <span className="text-purple-400 font-semibold">{t('about.subtitle').split(' ')[0]}</span>{' '}
                            {t('about.subtitle').split(' ').slice(1).join(' ')}
                        </p>
                        
                        <div className="flex flex-wrap justify-center gap-6 text-sm">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>1+ {t('home.stats.experience')}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                                <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>15+ {t('home.stats.projects')}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-700"></div>
                                <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>{t('about.description')}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="mb-20">
                    <h3 className={`text-3xl font-bold text-center mb-12 ${isDark 
                        ? 'bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent' 
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'
                    }`}>
                        {t('about.skills')}
                    </h3>
                    
                    {/* Skill Navigation */}
                    <div className="flex justify-center mb-12">
                        <div className={`flex ${isDark 
                            ? 'bg-black/30' 
                            : 'bg-white/50'
                        } backdrop-blur-lg rounded-full p-2 border ${isDark 
                            ? 'border-white/20' 
                            : 'border-gray-300'
                        }`}>
                            {skills.map((skill, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveSkill(index)}
                                    className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 ${
                                        activeSkill === index
                                            ? `bg-gradient-to-r ${skill.color} text-white shadow-lg`
                                            : `${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`
                                    }`}
                                >
                                    <span>{skill.icon}</span>
                                    <span className="hidden md:inline">{skill.title}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Active Skill Display */}
                    <div className="relative">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className={`transition-all duration-500 ${
                                    activeSkill === index 
                                        ? 'opacity-100 transform translate-y-0' 
                                        : 'opacity-0 transform translate-y-8 absolute inset-0 pointer-events-none'
                                }`}
                            >
                                <div className={`${isDark 
                                    ? 'bg-gradient-to-br from-gray-900/80 to-gray-800/80' 
                                    : 'bg-gradient-to-br from-white/80 to-gray-50/80'
                                } backdrop-blur-xl rounded-3xl border ${isDark 
                                    ? 'border-white/10' 
                                    : 'border-gray-200'
                                } p-8 shadow-2xl`}>
                                    <div className="grid md:grid-cols-2 gap-8 items-center">
                                        <div>
                                            <div className={`inline-flex items-center gap-3 bg-gradient-to-r ${skill.color} text-white px-6 py-3 rounded-2xl text-2xl font-bold mb-6`}>
                                                <span className="text-3xl">{skill.icon}</span>
                                                {skill.title}
                                            </div>
                                            <p className={`text-lg leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                                {skill.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {skill.technologies.map((tech, techIndex) => (
                                                    <span 
                                                        key={techIndex}
                                                        className={`${isDark 
                                                            ? 'bg-white/10 text-white' 
                                                            : 'bg-gray-100 text-gray-800'
                                                        } px-3 py-1 rounded-full text-sm backdrop-blur-sm`}
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="relative">
                                            <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-20 rounded-2xl blur-2xl`}></div>
                                            <div className={`relative ${isDark 
                                                ? 'bg-black/20' 
                                                : 'bg-white/50'
                                            } rounded-2xl p-6 border ${isDark 
                                                ? 'border-white/10' 
                                                : 'border-gray-200'
                                            }`}>
                                                <div className="text-6xl text-center mb-4">{skill.icon}</div>
                                                <div className="text-center">
                                                    <div className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                                                        Deneyim Seviyesi
                                                    </div>
                                                    <div className="flex justify-center">
                                                        {[...Array(5)].map((_, i) => (
                                                            <div
                                                                key={i}
                                                                className={`w-3 h-3 mx-1 rounded-full ${
                                                                    i < (index === 0 ? 4 : index === 1 ? 4 : 3)
                                                                        ? `bg-gradient-to-r ${skill.color}`
                                                                        : `${isDark ? 'bg-gray-600' : 'bg-gray-300'}`
                                                                }`}
                                                            ></div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Technologies Grid */}
                <div className="mb-16">
                    <h3 className={`text-3xl font-bold text-center mb-12 ${isDark 
                        ? 'bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent' 
                        : 'bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent'
                    }`}>
                        {t('about.technologies')}
                    </h3>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        {Object.entries(techCategories).map(([category, techs], categoryIndex) => (
                            <div
                                key={category}
                                className={`${isDark 
                                    ? 'bg-gradient-to-br from-gray-900/50 to-gray-800/50' 
                                    : 'bg-gradient-to-br from-white/70 to-gray-50/70'
                                } backdrop-blur-xl rounded-2xl p-6 border ${isDark 
                                    ? 'border-white/10' 
                                    : 'border-gray-200'
                                } shadow-lg`}
                            >
                                <h4 className={`text-xl font-bold mb-6 text-center capitalize ${isDark ? 'text-white' : 'text-gray-800'}`}>
                                    {category === 'frontend' ? 'Frontend' : category === 'backend' ? 'Backend' : 'DevOps'}
                                </h4>
                                <div className="space-y-4">
                                    {techs.map((tech, techIndex) => (
                                        <div key={techIndex} className="group">
                                            <div className="flex items-center gap-4 mb-2">
                                                <img 
                                                    src={tech.icon} 
                                                    alt={tech.name}
                                                    className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
                                                />
                                                <span className={`font-medium flex-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                                    {tech.name}
                                                </span>
                                                <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                                                    {tech.level}%
                                                </span>
                                            </div>
                                            <div className={`w-full ${isDark ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2`}>
                                                <div 
                                                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                                                    style={{ width: `${tech.level}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
