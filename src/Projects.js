const Projects = () => {

    const projects = [
        {
            name: 'scrumptious',
            description: 'a page with recipes',
            git: 'https://github.com/hoanhua14/scrumptious'
        },
        {
            name: 'productive',
            description: 'a planner',
            git: 'https://github.com/hoanhua14/productive'
        },
        {
            name: 'wardrobify',
            description: 'wardrobe sorter',
            git: 'https://github.com/hoanhua14/wardrobify'
        },
        {
            name: 'conferencego',
            description: 'conference listing',
            git: 'https://github.com/hoanhua14/conference-go'
        },
        {
            name: 'carinc',
            description: 'car dealership app',
            git: 'https://github.com/hoanhua14/carinc'
        },
        {
            name: 'mrq',
            description: 'fitness tracking app',
            git: 'https://github.com/hoanhua14/mrq'
        },

    ]
    return(
        <>
            <div>
                {projects.map((project, index) => (
                    <div key={index}>
                        <li>{project.name}</li>
                        <li>{project.description}</li>
                        <li>{project.git}</li>

                    </div>
                ))}
            </div>
        </>
    )
}
export default Projects;
