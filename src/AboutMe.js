import profilePic from "./profilePic.png"
const AboutMe = () => {
    return (
        <div className='background'>
            <div className="container">
                <div style={{flex:'1'}} className="center">
                    <img
                        src={profilePic}
                        alt="profile"
                        height='60%'

                    />
                </div>
                <div style={{flex: '2'}} className="center">
                    Hi! My name is Sohoan. <br/>
                    I'm a full stack developer who loves building/ automating/ improving. <br/>
                    Before becoming a software engineer, I majored in Biology because I love anatomy, physiology, and how everything works together. <br/>


                </div>
            </div>

        </div>
        // <div className="container">
        //     <div className="box" id='box1'>1</div>
        //     <div className="box" id='box2'>2</div>
        //     <div className="box" id='box3'>3</div>
        //     <div className="box" id='box4'>4</div>
        // </div>
    )
};
export default AboutMe;
