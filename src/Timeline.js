import { useRef, useEffect, useState } from "react";
import TimelineObserver, {setObserver} from "react-timeline-animation";
import { fireConfetti } from "./styling/confetti";

const Timeline = () => {
    const [scrumptious, setScrumptious] = useState("");
    const [productive, setProductive] = useState("");
    const [wardrobify, setWardrobify] = useState("");
    const [conferencego, setConferencego] = useState("");
    const [carinc, setCarinc] = useState("");
    const [mrq, setMrq] = useState("");
    const [finish, setFinish] = useState("");

    const timeline1 = useRef(null);
    const timeline2 = useRef(null);
    const timeline3 = useRef(null);
    const circle1 = useRef(null);
    const circle2 = useRef(null);
    const circle3 = useRef(null);

    const scrumptiousCB = () => {
        setScrumptious('https://github.com/hoanhua14/scrumptious');
    }

    const productiveCB = () => {
        setProductive('https://github.com/hoanhua14/productive');
    }

    const finishCB = () => {
        setFinish("Contact Me");
        fireConfetti();
    }

    useEffect(() => {
        setObserver(circle1.current, scrumptiousCB);
        setObserver(circle2.current, productiveCB);
        setObserver(circle3.current, finishCB);

    }, [])
    return (
        <>
            <div className="wrapper">
                <div id="timeline1" ref={timeline1} className="timeline" />
                <div className="circleWrapper">
                    <div id="circle1" ref={circle1} className="circle">
                    1
                    </div>
                    <div className="message">{scrumptious}</div>
                </div>
                <div id="timeline2" ref={timeline2} className="timeline" />
                <div className="circleWrapper">
                    <div id="circle2" ref={circle2} className="circle">
                    2
                    </div>
                    <div className="message">{productive}</div>
                </div>
                <div id="timeline3" ref={timeline3} className="timeline" />
                <div className="circleWrapper">
                    <div id="circle3" ref={circle3} className="circle">
                    3
                    </div>
                    <div className="message">{finish}</div>
                </div>
            </div>
        </>
    )
};
export default Timeline;
