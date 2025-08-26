import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { useAppContext } from '../context/AppContext';

function Home() {
    const { t } = useTranslation();
    const { isDark } = useAppContext();
    const [typedText, setTypedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const fullText = t('home.mainTitle');

    useEffect(() => {
        setTypedText('');
        setCurrentIndex(0);
    }, [fullText]);

    useEffect(() => {
        if (currentIndex < fullText.length) {
            const timeout = setTimeout(() => {
                setTypedText(prev => prev + fullText[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, 100);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, fullText]);

    const downloadResume = (lang) => {
        const resumePath = lang === "tr"
            ? "/assets/KadirOzerOzturk-CV.pdf"
            : "/assets/KadirOzerOzturk-CV-ENG.pdf";

        const link = document.createElement("a");
        link.href = resumePath;
        link.setAttribute("download", resumePath.split("/").pop());
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const techStack = [
        { 
            name: "Java",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
            color: "from-orange-500 to-red-600"
        },
        { 
            name: "React",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            color: "from-blue-400 to-cyan-500"
        },
        { 
            name: "Go",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
            color: "from-cyan-400 to-blue-600"
        },
        { 
            name: "Spring Boot",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
            color: "from-green-400 to-emerald-600"
        },
        { 
            name: "Docker",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
            color: "from-blue-500 to-indigo-600"
        },
        { 
            name: "AWS",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
            color: "from-yellow-400 to-orange-500"
        }
    ];

    return (
        <>
            <Helmet>
                <meta name="description" content={t('about.subtitle')} />
                <meta name="keywords" content="software engineer, Kadir Özer Öztürk, resume, tech, problem-solving, Java, React, Go" />
                <meta property="og:title" content={`${t('nav.home')} - Kadir Özer Öztürk`} />
                <meta property="og:description" content={t('about.description')} />
            </Helmet>

            <div className="min-h-screen flex items-center justify-center px-4 py-20">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Sol Taraf - Ana İçerik */}
                    <div className="space-y-8">
                        {/* Rol Badge */}
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg">
                            <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                            {t('home.role')}
                        </div>

                        {/* Ana Başlık */}
                        <div>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                                <span className={`${isDark 
                                    ? 'bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent' 
                                    : 'bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent'
                                }`}>
                                    {typedText}
                                </span>
                                <span className="animate-pulse text-purple-400">|</span>
                            </h1>
                        </div>

                        {/* Alt Başlık */}
                        <p className={`text-xl md:text-2xl leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            <span className="text-purple-400 font-semibold">{t('home.subtitle')}</span>
                            <br />
                            <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>{t('home.description')}</span>
                        </p>

                        {/* Aksiyon Butonları */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button 
                                onClick={() => downloadResume("eng")} 
                                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"/>
                                    </svg>
                                    {t('home.resumeEng')}
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                            
                            <button 
                                onClick={() => downloadResume("tr")} 
                                className={`group px-8 py-4 border-2 border-purple-400 text-purple-400 rounded-xl font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 hover:scale-105 ${isDark 
                                    ? 'hover:bg-purple-400' 
                                    : 'hover:bg-purple-500'
                                }`}
                            >
                                <span className="flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"/>
                                    </svg>
                                    {t('home.resumeTr')}
                                </span>
                            </button>
                        </div>

                        {/* İstatistikler */}
                        <div className="flex gap-8 pt-8">
                            <div className="text-center">
                                <div className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>1+</div>
                                <div className={isDark ? 'text-gray-400' : 'text-gray-600'}>{t('home.stats.experience')}</div>
                            </div>
                            <div className="text-center">
                                <div className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>15+</div>
                                <div className={isDark ? 'text-gray-400' : 'text-gray-600'}>{t('home.stats.projects')}</div>
                            </div>
                            <div className="text-center">
                                <div className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>10+</div>
                                <div className={isDark ? 'text-gray-400' : 'text-gray-600'}>{t('home.stats.technologies')}</div>
                            </div>
                        </div>
                    </div>

                    {/* Sağ Taraf - Tech Stack */}
                    <div className="relative">
                        {/* Animasyonlu Arkaplan */}
                        <div className={`absolute inset-0 ${isDark 
                            ? 'bg-gradient-to-r from-purple-500/20 to-blue-500/20' 
                            : 'bg-gradient-to-r from-purple-300/30 to-blue-300/30'
                        } rounded-3xl blur-3xl animate-pulse`}></div>
                        
                        {/* Tech Grid */}
                        <div className="relative grid grid-cols-2 md:grid-cols-3 gap-6 p-8">
                            {techStack.map((tech, index) => (
                                <div
                                    key={index}
                                    className={`group relative ${isDark 
                                        ? 'bg-gray-800/50' 
                                        : 'bg-white/70'
                                    } backdrop-blur-xl rounded-2xl p-6 hover:scale-110 transition-all duration-500 border ${isDark 
                                        ? 'border-white/10 hover:border-white/20' 
                                        : 'border-gray-200 hover:border-gray-300'
                                    } shadow-lg`}
                                    style={{
                                        animationDelay: `${index * 0.1}s`
                                    }}
                                >
                                    {/* Hover Gradient */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300`}></div>
                                    
                                    {/* Tech Icon */}
                                    <div className="relative flex flex-col items-center gap-3">
                                        <img 
                                            src={tech.icon} 
                                            alt={tech.name}
                                            className="w-12 h-12 md:w-16 md:h-16 group-hover:drop-shadow-lg transition-all duration-300"
                                        />
                                        <span className={`text-sm font-medium transition-colors duration-300 ${isDark 
                                            ? 'text-gray-300 group-hover:text-white' 
                                            : 'text-gray-700 group-hover:text-gray-900'
                                        }`}>
                                            {tech.name}
                                        </span>
                                    </div>

                                    {/* Hover Ring */}
                                    <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-opacity-20 transition-all duration-300 ${isDark 
                                        ? 'group-hover:border-white' 
                                        : 'group-hover:border-gray-400'
                                    }`}></div>
                                </div>
                            ))}
                        </div>

                        {/* Floating Elements */}
                        <div className={`absolute -top-4 -right-4 w-20 h-20 ${isDark 
                            ? 'bg-purple-500/20' 
                            : 'bg-purple-300/30'
                        } rounded-full blur-xl animate-bounce`}></div>
                        <div className={`absolute -bottom-4 -left-4 w-16 h-16 ${isDark 
                            ? 'bg-blue-500/20' 
                            : 'bg-blue-300/30'
                        } rounded-full blur-xl animate-bounce delay-1000`}></div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className={`w-6 h-10 border-2 ${isDark 
                        ? 'border-white/30' 
                        : 'border-gray-400'
                    } rounded-full flex justify-center`}>
                        <div className={`w-1 h-3 ${isDark 
                            ? 'bg-white/50' 
                            : 'bg-gray-500'
                        } rounded-full mt-2 animate-pulse`}></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
