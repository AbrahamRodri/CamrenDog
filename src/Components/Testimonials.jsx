const Testimonials = () => {
    return(
        <div className="text-black" id="Testimonials">
            <div className="max-w-[800px] w-full h-full mx-auto text-center flex flex-col  justify-center m-5">
                <h1 className="md:text-6xl text-3xl sm:py-2 font-bold m-10 font-round">Look at what our clients say about us</h1>
                <div className="flex justify-center flex-col md:flex-row m-5">
                    <iframe 
                        className="flex justify-center mt-5 md:m-0"
                        title="vimeo-player" 
                        src="https://player.vimeo.com/video/872132517?h=4d0273b986" 
                        width="auto" 
                        height="360" 
                        frameBorder="0" 
                        allowFullScreen>
                    </iframe>
                    <iframe 
                        className="flex justify-center mt-5 md:m-0" 
                        title="vimeo-player" 
                        src="https://player.vimeo.com/video/884106906?h=629840a157" 
                        width="auto" 
                        height="360" 
                        frameBorder="0" 
                        allowFullScreen>
                    </iframe>
                    <iframe 
                        className="flex justify-center mt-5 md:m-0" 
                        title="vimeo-player" 
                        src="https://player.vimeo.com/video/872132109?h=4716e1f260" 
                        width="auto" 
                        height="360" 
                        frameBorder="0" 
                        allowFullScreen>
                    </iframe>
                </div>
                <h2 className="md:text-4xl text-2xl sm:py-2 font-bold m-5 mt-32">Forget about lead concerns with our…</h2>
                    <h1 className="md:text-5xl sm:py-2 text-4xl font-bold m-5 mb-10">Instant Dog Services System</h1>
                <div className="flex flex-col md:flex-row justify-center mb-16">
                    <div className="border-4 rounded-3xl border-blue-500 m-4 ">
                        <h2 className="text-xl font-bold m-5">Lead Generation</h2>
                        <p className="text-xs text-gray-500 m-3">Utilizing platforms such as Instagram/Facebook Advertisement, we can generate steady leads for your business</p>
                    </div>
                    <div className="border-4 rounded-3xl border-blue-500 m-4 ">
                        <h2 className="text-xl  font-bold m-5">CRM</h2>
                        <p className="text-xs text-gray-500 m-3">You get to sit back whilst we handle all the leads inbound via calls & texts, ensuring we understand the training needs of their dogs</p>
                    </div>
                    <div className="border-4 rounded-3xl border-blue-500 m-4 ">
                        <h2 className="text-xl  font-bold m-5">Consultation</h2>
                        <p className="text-xs text-gray-500 m-3">Once qualified, we ensure that leads schedule a consultation call with you - all without any effort on your part!</p>
                    </div>
                    <div className="border-4 rounded-3xl border-blue-500 m-4 ">
                        <h2 className="text-xl  font-bold m-5">Collection</h2>
                        <p className="text-xs text-gray-500 m-3">You can then select the package that suits the client best. It’s straightforward and stress-free</p>
                    </div>
                </div>
            </div>
        </div>    
    );
}

export default Testimonials;