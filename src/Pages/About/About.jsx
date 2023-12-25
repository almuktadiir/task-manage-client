import { Helmet } from "react-helmet-async";

const About = () => {
    return (
        <div className="mt-24">
            <Helmet>
                <title>Task Management || About</title>
            </Helmet>
            <div className="hero h-[500px] bg-fixed" style={{ backgroundImage: 'url(https://i.ibb.co/c265vM5/banner.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="-mt-96">
                    <div className="max-w-screen-md mt-10 mb-6 mx-auto bg-[#cf939365] bg-opacity-50 text-[#ffffffd7] shadow-2xl py-3 lg:py-4 px-10 rounded-tr-full rounded-bl-full">
                        <h2 className="text-2xl md:text-3xl lg:text-5xl font-medium  pb-4 text-center">
                            Our Information
                        </h2>
                    </div>
                </div>
                <div className="max-w-screen-xl mt-5 mx-auto bg-[#c46c6c65] bg-opacity-50 text-[#ffffffd7] p-5 rounded-lg">
                    <p className="text-2xl">
                    Welcome to Task Management, where task management meets simplicity and efficiency. Our intuitive interface, collaboration features, and customizable options make staying organized a breeze. Set deadlines, track progress, and enjoy timely reminders in a secure and reliable environment. Choose Task Management for a streamlined task management experience that adapts to your unique needs, boosting productivity and bringing order to your life.
                    </p>
                </div>
            </div>
            <div className="divider pt-6"></div>
        </div>
    );
};

export default About;