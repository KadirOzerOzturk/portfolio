import axios from 'axios';
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Helmet } from 'react-helmet';

function Projects() {
    const [repos, setRepos] = useState([]);
    const navigate = (url) => () => window.open(url, '_blank'); 

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await axios.get('https://api.github.com/users/KadirOzerOzturk/repos', {
                    headers: {
                        Authorization: `${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`
                    }
                });
                setRepos(response.data);
            } catch (error) {
                console.error("Error fetching GitHub repositories:", error);
            }
        };

        fetchRepos();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center my-7 w-full px-4 md:px-12">
            <Helmet>
                <meta name="description" content="Explore the GitHub repositories of Kadir Ozer Ozturk. View projects, descriptions, and more." />
                <meta name="keywords" content="GitHub, Repositories, Portfolio, Projects, Kadir Ozer Ozturk" />
                <meta name="author" content="Kadir Ozer Ozturk" />
                <meta property="og:title" content="GitHub Repositories | Portfolio" />
                <meta property="og:description" content="Explore the GitHub repositories of Kadir Ozer Ozturk. View projects, descriptions, and more." />
                <meta property="og:type" content="website" />
            </Helmet>

            <h2 className="text-2xl md:text-3xl font-semibold text-custom-purple mb-6">
                GitHub Repositories
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
                {repos.map((repo) => (
                    <div 
                        key={repo.id} 
                        className="border border-custom-purple p-5 rounded-xl shadow-lg bg-custom-black hover:scale-105 transition-transform duration-300"
                    >
                        <h3 className="text-lg md:text-xl font-bold text-custom-lightPurple">
                            {repo.name}
                        </h3>
                        <p className="text-gray-400 mt-2 text-sm">
                            {repo.description ? repo.description : "No description available"}
                        </p>
                        <p className="text-gray-500 text-xs mt-3">
                            Last updated: {moment(repo.updated_at).format("DD.MM.YYYY")}
                        </p>
                        <div className="flex justify-between items-center mt-4">
                            <p className="text-gray-500 text-sm">{repo.language || "Unknown"}</p>
                            <a
                                href={repo.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-custom-purple text-white rounded-md hover:bg-purple-600 transition-all text-sm"
                            >
                                View on GitHub
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <button 
                onClick={navigate("https://github.com/KadirOzerOzturk")} 
                className="mt-8 px-5 py-2 border border-custom-purple text-custom-purple rounded-md hover:bg-custom-purple hover:text-white transition-all text-sm md:text-base"
            >
                See More
            </button>
        </div>
    );
}

export default Projects;
