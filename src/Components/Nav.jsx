import { Link } from "react-scroll"
import { useState } from "react"
import { FaTimes } from "react-icons/fa"
import { CiMenuFries } from "react-icons/ci"

const Nav = () => {
    const [click,setClick] = useState(false);
    const handleClick = () => {
        setClick(!click)
    }
    const content = <> 
        <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-blue-500 transition">
            <ul className="text-center text-xl p-20">
                <Link spy={true} smooth ={true} to="Services">
                    <li className="my-4 py-4 border-b border-yellow-500 hover:bg-blue-400 hover:rounded">Services</li>
                </Link>
                <Link spy={true} smooth ={true} to="Testimonials">
                    <li className="my-4 py-4 border-b border-yellow-500 hover:bg-blue-400 hover:rounded">Testimonials</li>
                </Link>
                <Link spy={true} smooth ={true} to="Contact">
                    <li className="my-4 py-4 border-b border-yellow-500 hover:bg-blue-400 hover:rounded">Contact</li>
                </Link>
            </ul>
        </div> 
    </>
    return(
        <nav>
            <div className ="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 flex-1">
                <div className ="flex items-center flex-1">
                    <span className="text-3xl font-bold flex">
                        K9 PROMO
                        </span>
                </div>
                <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
                    <div className="flex-10">
                        <ul className="flex gap-8 mr-16 text-[18px]">
                            <Link spy={true} smooth ={true} to="Services">
                                <li className="hover:text-yellow-400 transition border-b-2 border-blue-500 hover:border-yellow-400 cursor-pointer">Services</li>
                            </Link>
                            <Link spy={true} smooth ={true} to="Testimonials">
                                <li className="hover:text-yellow-400 transition border-b-2 border-blue-500 hover:border-yellow-400 cursor-pointer">Testimonials</li>
                            </Link>
                            <Link spy={true} smooth ={true} to="Contact">
                                <li className="hover:text-yellow-400 transition border-b-2 border-blue-500 hover:border-yellow-400 cursor-pointer">Contact</li>
                            </Link>
                        </ul>
                    </div>
                </div>
                <div>
                        {click && content}
                </div>

                <button className="block md:hidden transiton" onClick={handleClick}>
                        {click ? <FaTimes/> : <CiMenuFries/>}
                </button>
            </div>
        </nav>
    );
};

export default Nav;