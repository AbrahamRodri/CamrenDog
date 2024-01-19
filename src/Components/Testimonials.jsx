const Testimonials = () => {
    return(
        <div className="text-black">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <h1 className="md:text-5xl sm:text-3xl sm:py-2 text-xl font-bold">See for yourself</h1>
                <div className="flex justify-center">
                    <iframe title="vimeo-player" src="https://player.vimeo.com/video/872132517?h=4d0273b986" width="640" height="360" frameborder="0"    allowfullscreen></iframe>
                    <iframe title="vimeo-player" src="https://player.vimeo.com/video/884106906?h=629840a157" width="640" height="360" frameborder="0"    allowfullscreen></iframe>
                    <iframe title="vimeo-player" src="https://player.vimeo.com/video/872132109?h=4716e1f260" width="640" height="360" frameborder="0"    allowfullscreen></iframe>
                </div>
            </div>
        </div>    
    );
}

export default Testimonials;