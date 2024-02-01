import git from './techStacks/git.svg'
import js from './techStacks/js.svg'
import github from './techStacks/github.svg'
import python from './techStacks/python.svg'
import typescript from './techStacks/typescript.svg'
import react from './techStacks/react.svg'
import html from './techStacks/html.svg'
import css from './techStacks/css.svg'
import tailwind from './techStacks/tailwind.svg'
import node from './techStacks/node.svg'
import django from './techStacks/django.svg'
import postgresql from './techStacks/postgresql.svg'
import mongodb from './techStacks/mongodb.svg'
import api from './techStacks/api.svg'
import sql from './techStacks/sql.svg'
import dbsm from './techStacks/dbms.svg'
import docker from './techStacks/docker.svg'

const TechStacks = () => {

    return (
        <>
            <div>frontend

                <img className='img' alt='js' src={js}/>
                <img className='img' alt='typescript' src={typescript}/>
                <img className='img' alt='python' src={python}/>
                <img className='img' alt='react' src={react}/>
                <img className='img' alt='html' src={html}/>
                <img className='img' alt='css' src={css}/>
                <img className='img' alt='tailwind' src={tailwind}/>
            </div>
            <div>backend
                <img className='img' alt='node' src={node}/>
                <img className='img' alt='django' src={django}/>
                <img className='img' alt='postgresql' src={postgresql}/>
                <img className='img' alt='mongodb' src={mongodb}/>
                <img className='img' alt='api' src={api}/>
                <img className='img' alt='sql' src={sql}/>
                <img className='img' alt='dbsm' src={dbsm}/>
            </div>
            <div>Testing/ Deployment/ Tools
                <img className='img' alt='git' src={git}/>
                <img className='img' alt='github' src={github}/>
                <img className='img' alt='docker' src={docker}/>


            </div>
        </>
    );
};
export default TechStacks;
