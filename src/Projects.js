import { useRef } from "react";
import { useEffect } from "react";
// const Projects = () => {
//     return (
//         <>
//             <div id="timeline100500"  className="timeline" />;
//         </>
//     )
// };
const Projects = ({ setObserver, callback }) => {
    const timeline = useRef(null);

    // It Will be fired when the element crossed the middle of the screen.
    const someCallback = () => {
        callback();
    };

    useEffect(() => {
        if (timeline.current) {
            setObserver(timeline.current, someCallback);
        }
    }, []);

    return <div id="timeline100500" ref={timeline} className="timeline" />;
};

export default Projects;
