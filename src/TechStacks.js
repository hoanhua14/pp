import git from './techStacks/git.svg'
import js from './techStacks/js.svg'
import github from './techStacks/github.svg'
import python from './techStacks/python.svg'
import typescript from './techStacks/typescript.svg'

const TechStacks = () => {

    return (
        <div>techstacks
           <img alt='git' src={git}/>
           <img alt='github' src={github}/>
           <img alt='js' src={js}/>
           <img alt='typescript' src={typescript}/>
           <img alt='python' src={python}/>
        </div>
    );
};
export default TechStacks;
