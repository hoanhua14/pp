import portPic from "./grayPPic.jpg"
const AboutMe = () => {
    return (
        <>
            <div >

                <img
                    src={portPic}
                    alt="profile"
                    style={{flex:'1', maxWidth:'33%', maxHeight:'50%'}}
                />
            </div>
        </>
    )
};
export default AboutMe;
