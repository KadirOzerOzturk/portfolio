import axios from 'axios';
import React, { useEffect, useState } from 'react';

import moment from 'moment';

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
        <div className='flex flex-col items-center justify-center my-7 w-full px-4'> 
            <h2 className='text-3xl font-semibold text-custom-purple mb-6'>GitHub Repositories</h2>
            
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl'>
                {repos.map((repo) => (
                    <div key={repo.id} className='border border-custom-purple p-6 rounded-xl shadow-lg bg-custom-black hover:scale-105 transition-transform duration-300'>
                        <h3 className='text-2xl font-bold text-custom-lightPurple'>{repo.name}</h3>
                        <p className='text-gray-400 mt-2 text-sm'>
                            {repo.description ? repo.description : "No description available"}
                        </p>
                        <p className='text-gray-500 text-xs mt-4'>
                            Last updated: {moment(repo.updated_at).format("DD.MM.YYYY")}
                        </p>
                        <div className='flex justify-between items-center mt-4'>
                            <p className='text-gray-500 text-sm'>{repo.language || "Unknown"}</p>
                            <a
                                href={repo.html_url}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='px-4 py-2 bg-custom-purple text-white rounded-md hover:bg-purple-600 transition-all text-sm'
                            >
                                View on GitHub
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <button onClick={navigate("https://github.com/KadirOzerOzturk")} className='mt-8 px-6 py-3 border border-custom-purple text-custom-purple rounded-md hover:bg-custom-purple hover:text-white transition-all'>
                See More
            </button>
        </div>
    );
}

export default Projects;
