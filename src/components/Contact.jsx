import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Helmet } from 'react-helmet';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState(null);
    const [emailError, setEmailError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (name === 'email') {
            setEmailError(isValidEmail(value) ? '' : 'Please enter a valid email address.');
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
                setStatus({ type: "error", message: "Please fill out all fields. ❌" });
            } else if (emailError) {
                setStatus({ type: "error", message: "Please fix the email error. ❌" });
            }
            return;
        }

        emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            formData,
            process.env.REACT_APP_EMAILJS_USER_ID
        ).then(
            (response) => {
                console.log("Email sent successfully!", response);
                setStatus({ type: "success", message: "Message sent successfully! ✅" });
                setFormData({ name: '', email: '', message: '' });
            },
            (error) => {
                console.error("Error sending email:", error);
                setStatus({ type: "error", message: "Failed to send message. ❌" });
            }
        );
    };


    return (
        <>

            <Helmet>
                <meta name="description" content="Get in touch with Kadir Özer Öztürk, a passionate developer, via email or LinkedIn." />
                <meta name="keywords" content="contact, email, LinkedIn, GitHub, Kadir Özer Öztürk" />
                <meta name="author" content="Kadir Özer Öztürk" />
                <meta property="og:title" content="Contact Me - Kadir Özer Öztürk" />
                <meta property="og:description" content="Reach out to Kadir Özer Öztürk for collaborations, questions, or opportunities." />
            </Helmet>

            <div className="w-screen min-h-screen flex flex-col items-center justify-center bg-custom-black text-center py-12 px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-custom-purple mb-6">Contact Me</h2>

                <div className="w-full max-w-lg bg-custom-gray p-8 rounded-xl shadow-lg border border-custom-purple">
                    <p className="text-gray-400 mb-4">
                        Feel free to reach out via email or connect with me on LinkedIn!
                    </p>

                    <div className="flex flex-col gap-4 text-gray-300">
                        <a
                            href="mailto:oztrkkadirozer@email.com"
                            className="hover:text-custom-lightPurple transition-all"
                            aria-label="Send an email to Kadir Özer Öztürk"
                        >
                            📧 oztrkkadirozer@email.com
                        </a>
                        <a
                            href="https://www.linkedin.com/in/kadirozerozturk/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-custom-lightPurple transition-all"
                            aria-label="Visit Kadir Özer Öztürk's LinkedIn profile"
                        >
                            🔗 LinkedIn Profile
                        </a>
                        <a
                            href="https://github.com/KadirOzerOzturk"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-custom-lightPurple transition-all"
                            aria-label="Visit Kadir Özer Öztürk's GitHub profile"
                        >
                            🐙 GitHub Profile
                        </a>
                    </div>

                    <form className="mt-6 flex flex-col gap-4" onSubmit={sendEmail}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full p-3 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:border-custom-purple"
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-3 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:border-custom-purple"
                        />

                        {emailError && (
                            <p className="text-sm text-red-400 mt-1">{emailError}</p>
                        )}

                        <textarea
                            name="message"
                            placeholder="Your Message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full p-3 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:border-custom-purple"
                        ></textarea>

                        {status && (
                            <p className={`text-sm ${status.type === "success" ? "text-green-400" : "text-red-400"} mt-2`}>
                                {status.message}
                            </p>
                        )}

                        <button
                            type="submit"
                            disabled={!isFormValid()}
                            className={`w-full py-3 bg-custom-purple text-white font-semibold rounded-md hover:bg-purple-600 transition-all ${!isFormValid() ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Contact;
