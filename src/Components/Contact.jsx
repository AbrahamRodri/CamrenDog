import Footer from "./Footer"
const Contact = () => {
    return (
        <div className="text-black" id="Contact">
            <div className="max-w-[1000px] mt-[-96px] w-full h-[70vh] mx-auto text-center flex flex-col justify-center">
                <h1 className="md:text-6xl md:py-3 sm:text-6xl sm:py-2 text-4xl font-bold py-1">Grow your business NOW</h1> 
                <div>
                    <p className="md:text-3xl sm:text-2xl text-xl mt-5">Get in touch</p>
                </div>
                <div>
                <button className="border-2 p-2 px-4 rounded-xl my-5 border-yellow-500 hover:bg-yellow-500 transition">Book a call</button>
                </div>
            </div>
            <div className="bg-blue-500 h-[30vh]">
                <Footer/>
            </div>
        </div>
    );
}

export default Contact;