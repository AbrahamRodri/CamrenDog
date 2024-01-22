const Partners = () => {
    return(
        <div className="pt-20">
            <h1 className="text-white md:text-5xl text-2xl sm:py-2 mb-20 text-center">Hear what our partners say <br /> about us</h1>
            <div className="max-w-[1000px] w-full h-full mx-auto text-center flex flex-col md:flex-row justify-center m-5 pb-20">
                <div className="bg-white border-4 border-yellow-500 m-5 rounded-3xl">
                    <p className="m-5 text-start">Cole puts in 1000% effort to assure your success. Easy to work with and super attentive to requests.</p>
                    <h1 className="font-bold">Allen C.</h1>
                </div>
                <div className="bg-white border-4 border-yellow-500 m-5 rounded-3xl">
                    <p className="m-5 text-start">Excellent team to work with! They get you results pretty soon and they take all the guess work out of advertising.</p>
                    <h1 className="font-bold">Aryanna V.</h1>
                </div>
                <div className="bg-white border-4 border-yellow-500 m-5 rounded-3xl">
                    <p className="m-5 text-start">They have done excellent work for my company. Prices for service is more than reasonable.</p>
                    <h1 className="font-bold">Christine L.</h1>
                </div>
                <div className="bg-white border-4 border-yellow-500 m-5 rounded-3xl">
                    <p className="m-5 text-start">Very hard working crew, clear communication. Very easy to work with and fast on results.</p>
                    <h1 className="font-bold mb-16">Amanda L.</h1>
                </div>
            </div>
        </div>
    )
}
export default Partners;