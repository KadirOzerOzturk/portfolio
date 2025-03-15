import React from 'react';

function Contact() {

    const sendEmail = () => {
        alert("Message Sent!");
    }

    return (
        <div className="w-screen  min-h-screen flex flex-col items-center justify-center bg-custom-black text-center py-12">
            <h2 className="text-4xl font-bold text-custom-purple mb-6">Contact Me</h2>
            
            <div className="w-full max-w-lg bg-custom-gray p-8 rounded-xl shadow-lg border border-custom-purple">
                <p className="text-gray-400 mb-4">
                    Feel free to reach out via email or connect with me on LinkedIn!
                </p>

                {/* Contact Links */}
                <div className="flex flex-col gap-4 text-gray-300">
                    <a href="mailto:oztrkkadirozer@email.com" className="hover:text-custom-lightPurple transition-all">
                        📧 oztrkkadirozer@email.com
                    </a>
                    <a href="https://www.linkedin.com/in/kadirozerozturk/" target="_blank" rel="noopener noreferrer"
                        className="hover:text-custom-lightPurple transition-all">
                        🔗 LinkedIn Profile
                    </a>
                    <a href="https://github.com/KadirOzerOzturk" target="_blank" rel="noopener noreferrer"
                        className="hover:text-custom-lightPurple transition-all">
                        🐙 GitHub Profile
                    </a>
                </div>

                {/* Contact Form */}
                <form className="mt-6 flex flex-col gap-4" onSubmit={sendEmail}>
                    <input type="text" placeholder="Your Name"
                        className="w-full p-3 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:border-custom-purple" />
                    
                    <input type="email" placeholder="Your Email"
                        className="w-full p-3 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:border-custom-purple" />
                    
                    <textarea placeholder="Your Message" rows="4"
                        className="w-full p-3 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:border-custom-purple"></textarea>

                    <button  type="submit"
                        className="w-full py-3 bg-custom-purple text-white  font-semibold rounded-md hover:bg-purple-600 transition-all">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
