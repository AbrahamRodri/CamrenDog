const Footer = () => {
    return (
        <div className="text-white">
            <div className="max-w-[800px] w-full mx-auto flex flex-col justify-center h-[30vh]">
                <div className="flex flex-row border-b-2 py-4">
                    <div>
                        <h3 className="mb-2">Canine Compass</h3>
                        <p className="mb-8">Never worry about marketing again.</p>
                    </div>
                    <div></div>
                </div>
                <div className="flex flex-col justify-center text-center w-full py-4">
                <h3 className="my-2">Powered by AROD Media</h3>
                <h3>©Canine Compass LLC. All rights reserved.</h3>
                </div>
            </div>
        </div>
    );
}

export default Footer;