const Testimonials = () => {
    return(
        <div className="text-black" id="Testimonials">
            <div className="max-w-[800px] w-full h-full mx-auto text-center flex flex-col  justify-center m-5">
                <h1 className="md:text-6xl text-3xl sm:py-2 font-bold m-10 font-round">See for yourself</h1>
                <div className="flex justify-center flex-col md:flex-row m-5">
                    <iframe className="flex justify-center mt-5 md:m-0" title="vimeo-player" src="https://player.vimeo.com/video/872132517?h=4d0273b986" width="auto" height="360" frameborder="0"    allowfullscreen></iframe>
                    <iframe className="flex justify-center mt-5 md:m-0" title="vimeo-player" src="https://player.vimeo.com/video/884106906?h=629840a157" width="auto" height="360" frameborder="0"    allowfullscreen></iframe>
                    <iframe className="flex justify-center mt-5 md:m-0" title="vimeo-player" src="https://player.vimeo.com/video/872132109?h=4716e1f260" width="auto" height="360" frameborder="0"    allowfullscreen></iframe>
                </div>
                <h2 className="md:text-4xl text-2xl sm:py-2 font-bold m-5 mt-32">Never Worry about leads again with our</h2>
                    <h1 className="md:text-5xl sm:py-2 text-4xl font-bold m-5 mb-10">DOGS ON DEMAND SYSTEM</h1>
                <div className="flex flex-col md:flex-row justify-center mb-16">
                    <div className="border-4 rounded-3xl border-blue-500 m-4 ">
                        <h2 className="text-xl font-bold m-5">Lead Generation</h2>
                        <p className="text-xs text-gray-500 m-3">Using platforms like Facebook and Instagram, we will generate consistent leads for your business.</p>
                    </div>
                    <div className="border-4 rounded-3xl border-blue-500 m-4 ">
                        <h2 className="text-xl  font-bold m-5">Follow Up System</h2>
                        <p className="text-xs text-gray-500 m-3">We will call and text all leads for you - making sure we find out what kind of training their dogs need.</p>
                    </div>
                    <div className="border-4 rounded-3xl border-blue-500 m-4 ">
                        <h2 className="text-xl  font-bold m-5">Consultation</h2>
                        <p className="text-xs text-gray-500 m-3">After qualification, we make sure leads will book a consultation call with you - completely hands free!</p>
                    </div>
                    <div className="border-4 rounded-3xl border-blue-500 m-4 ">
                        <h2 className="text-xl  font-bold m-5">Collection</h2>
                        <p className="text-xs text-gray-500 m-3">You can then choose which package works best for the client. Simple and easy - no stress.</p>
                    </div>
                </div>
            </div>
        </div>    
    );
}

export default Testimonials;