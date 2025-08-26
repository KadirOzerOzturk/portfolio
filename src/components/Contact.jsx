import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { useAppContext } from '../context/AppContext';

function Contact() {
    const { t } = useTranslation();
    const { isDark } = useAppContext();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState(null);
    const [emailError, setEmailError] = useState('');
    const [loading, setLoading] = useState(false); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (name === 'email') {
            setEmailError(isValidEmail(value) ? '' : t('contact.form.emailError'));
        }
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailRegex.test(email);
    };

    const isFormValid = () => {
        return formData.name !== '' && formData.email !== '' && formData.message !== '' && !emailError;
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (!isFormValid()) {
            if (!formData.name || !formData.email || !formData.message) {
                setStatus({ type: "error", message: "Lütfen tüm alanları doldurun. ❌" });
            } else if (emailError) {
                setStatus({ type: "error", message: "Lütfen e-posta hatasını düzeltin. ❌" });
            }
            return;
        }

        setLoading(true); 

        emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            formData,
            process.env.REACT_APP_EMAILJS_USER_ID
        ).then(
            (response) => {
                console.log("Email sent successfully!", response);
                setStatus({ type: "success", message: t('contact.form.success') });
                setFormData({ name: '', email: '', message: '' });
            },
            (error) => {
                console.error("Error sending email:", error);
                setStatus({ type: "error", message: t('contact.form.error') });
            }
        ).finally(() => {
            setLoading(false);
        });
    };

    const contactMethods = [
        {
            icon: "📧",
            title: t('contact.methods.email'),
            value: "oztrkkadirozer@email.com",
            link: "mailto:oztrkkadirozer@email.com",
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: "💼",
            title: t('contact.methods.linkedin'),
            value: "Kadir Özer Öztürk",
            link: "https://www.linkedin.com/in/kadirozerozturk/",
            color: "from-blue-600 to-blue-800"
        },
        {
            icon: "🐙",
            title: t('contact.methods.github'),
            value: "KadirOzerOzturk",
            link: "https://github.com/KadirOzerOzturk",
            color: "from-gray-600 to-gray-800"
        }
    ];

    return (
        <>
            <Helmet>
                <meta name="description" content="Kadir Özer Öztürk ile iletişime geçin. E-posta veya LinkedIn üzerinden ulaşabilirsiniz." />
                <meta name="keywords" content="iletişim, e-posta, LinkedIn, GitHub, Kadir Özer Öztürk" />
                <meta name="author" content="Kadir Özer Öztürk" />
                <meta property="og:title" content="İletişim - Kadir Özer Öztürk" />
                <meta property="og:description" content="İş birliği, sorular veya fırsatlar için Kadir Özer Öztürk'a ulaşın." />
            </Helmet>

            <div className="max-w-7xl mx-auto px-4 py-16">
                
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-full px-6 py-3 border border-white/20 mb-8">
                        <span className="text-2xl">📞</span>
                        <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>{t('nav.contact')}</span>
                    </div>
                    
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                            {t('contact.title')}
                        </span>
                    </h2>
                    
                    <p className={`text-xl max-w-2xl mx-auto leading-relaxed ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                        {t('contact.subtitle')}
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    
                    {/* Contact Methods */}
                    <div className="space-y-8">
                        <div>
                            <h3 className={`text-2xl font-bold mb-6 flex items-center gap-2 ${
                                isDark ? 'text-white' : 'text-gray-900'
                            }`}>
                                <span className="text-purple-400">⚡</span>
                                {t('contact.quickContact')}
                            </h3>
                            
                            <div className="space-y-4">
                                {contactMethods.map((method, index) => (
                                    <a
                                        key={index}
                                        href={method.link}
                                        target={method.link.startsWith('http') ? '_blank' : undefined}
                                        rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        className="group block"
                                    >
                                        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-2xl border border-white/10 p-6 hover:border-white/20 transition-all duration-300 hover:scale-105">
                                            <div className="flex items-center gap-4">
                                                <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                                                    {method.icon}
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className={`font-semibold text-lg ${
                                                       isDark ? 'text-white' : 'text-gray-900'
                                                    }`}>{method.title}</h4>
                                                    <p className={`transition-colors duration-300 ${
                                                         isDark ? 'text-gray-400 group-hover:text-white' : 'text-gray-600 group-hover:text-gray-900'
                                                    }`}>{method.value}</p>
                                                </div>
                                                <div className={`transition-colors duration-300 ${
                                                    isDark 
                                                        ? 'text-gray-400 group-hover:text-white' 
                                                        : 'text-gray-600 group-hover:text-gray-900'
                                                }`}>
                                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Info Card */}
                        <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-xl rounded-2xl border border-purple-500/20 p-6">
                            <h4 className={`text-xl font-bold mb-4 flex items-center gap-2 ${
                                isDark ? 'text-white' : 'text-gray-900'
                            }`}>
                                <span className="text-purple-400">💡</span>
                                {t('contact.capabilities.title')}
                            </h4>
                            <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                <li className="flex items-center gap-2">
                                    <span className="text-green-400">✓</span>
                                    {t('contact.capabilities.web')}
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-green-400">✓</span>
                                    {t('contact.capabilities.backend')}
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-green-400">✓</span>
                                    {t('contact.capabilities.devops')}
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-green-400">✓</span>
                                    {t('contact.capabilities.consulting')}
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="relative">
                        {/* Background Glow */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl"></div>
                        
                        <div className="relative bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-3xl border border-white/10 p-8">
                            <div className="text-center mb-8">
                                <h3 className={`text-2xl font-bold mb-2 ${
                                    isDark ? 'text-white' : 'text-gray-900'
                                }`}>{t('contact.form.title')}</h3>
                                <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>{t('contact.form.description')}</p>
                            </div>

                            <form onSubmit={sendEmail} className="space-y-6">
                                <div className="space-y-4">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder={t('contact.form.name')}
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className={`w-full p-4 border rounded-xl focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 ${
                                                isDark 
                                                    ? 'bg-black/20 border-white/20 text-white placeholder-gray-400' 
                                                    : 'bg-slate-100/90 border-gray-300 text-gray-900 placeholder-gray-500'
                                            }`}
                                        />
                                    </div>

                                    <div className="relative">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder={t('contact.form.email')}
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className={`w-full p-4 border rounded-xl focus:outline-none transition-all duration-300 ${
                                                isDark 
                                                    ? 'bg-black/20 text-white placeholder-gray-400' 
                                                    : 'bg-slate-100/90 text-gray-900 placeholder-gray-500'
                                            } ${
                                                emailError 
                                                    ? 'border-red-400 focus:border-red-400 focus:ring-red-400/20' 
                                                    :  'border-white/20 focus:border-purple-400 focus:ring-purple-400/20'
                                                       
                                            }`}
                                        />
                                        {emailError && (
                                            <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                                                <span>⚠️</span>
                                                {emailError}
                                            </p>
                                        )}
                                    </div>

                                    <div className="relative">
                                        <textarea
                                            name="message"
                                            placeholder={t('contact.form.message')}
                                            rows="5"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            className={`w-full p-4 border rounded-xl focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 resize-none ${
                                                isDark 
                                                    ? 'bg-black/20 border-white/20 text-white placeholder-gray-400' 
                                                    : 'bg-slate-100/90 border-gray-300 text-gray-900 placeholder-gray-500'
                                            }`}
                                        ></textarea>
                                    </div>
                                </div>

                                {status && (
                                    <div className={`p-4 rounded-xl flex items-center gap-2 ${
                                        status.type === "success" 
                                            ? "bg-green-500/20 border border-green-500/30 text-green-400" 
                                            : "bg-red-500/20 border border-red-500/30 text-red-400"
                                    }`}>
                                        <span>{status.type === "success" ? "✅" : "❌"}</span>
                                        {status.message}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={!isFormValid() || loading}
                                    className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                                        isFormValid() && !loading
                                            ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 hover:scale-105 shadow-lg hover:shadow-purple-500/25'
                                            : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                                    }`}
                                >
                                    {loading ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            {t('contact.form.sending')}
                                        </span>
                                    ) : (
                                        <span className="flex items-center justify-center gap-2">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                                            </svg>
                                            {t('contact.form.send')}
                                        </span>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-lg rounded-2xl border border-purple-500/20 p-8 max-w-2xl mx-auto">
                        <h4 className={`text-2xl font-bold mb-4 ${
                            isDark ? 'text-white' : 'text-gray-900'
                        }`}>{t('contact.cta.title')}</h4>
                        <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            {t('contact.cta.description')}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
