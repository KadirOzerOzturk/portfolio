import axios from 'axios';
import React, { useEffect, useState } from 'react';
import moment from 'moment';

function Projects() {
    const [repos, setRepos] = useState([]);

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
        <div className='flex flex-col items-center justify-center mt-7'> 
            <p>Github Repositories</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6'>
            
            {repos.map((repo) => (
                <div key={repo.id} className='border border-purple p-6 rounded-lg shadow-lg bg-custom-black'>
                    <h1 className='text-xl font-bold text-purple-500'>{repo.name}</h1>
                    <p className='text-gray-400 mt-2'>
                        {repo.description ? repo.description : "No description available"}
                    </p>
                    <p className='text-gray-500 text-sm mt-4'>
                        Last updated: {moment(repo.updated_at).format("DD.MM.YYYY")}
                    </p>
                    <div className='flex justify-between items-center mt-2 '>
                        <p className='text-gray-500'>{repo.language}</p>
                    <a
                        href={repo.html_url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className=' inline-block text-purple-400 hover:underline'
                    >
                        View on GitHub
                    </a>
                    </div>
                </div>
            ))}
            <h1>See more</h1>
        </div>
        </div>
        
    );
}

export default Projects;
