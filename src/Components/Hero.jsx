
const Hero = () => {
    return (
        <div className="text-black">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <h1 className="md:text-7xl md:py-3 sm:text-6xl sm:py-2 text-4xl font-bold py-1 font-round">Assisting dog trainers in</h1> 
                <h1 className="md:text-7xl md:py-3 sm:text-6xl sm:py-2 text-4xl font-bold py-1 font-round">EXPANDING their Business.</h1>
                <div>
                    <p className="md:text-3xl sm:text-2xl text-xl mt-5 ">The #1 Leading Marketing Firm for Canine Instructors.</p>
                </div>
                <div className="flex flex-row justify-center">
                    <button className="border-2 p-2 px-4 rounded-xl my-5 border-blue-500 bg-blue-500 text-white hover:bg-gray-50 hover:text-black transition mr-4">Book a call</button>
                    <button className="border-2 p-2 px-4 rounded-xl my-5 border-yellow-500 hover:bg-yellow-500 transition">Book a call</button>
                </div>
            </div>
        </div>
    )
}

export default Hero;