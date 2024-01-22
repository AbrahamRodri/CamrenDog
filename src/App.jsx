import Hero from "./Components/Hero";
import Nav from "./Components/Nav";
import Partners from "./Components/Partners";
import Services from "./Components/Services";
import Testimonials from "./Components/Testimonials";
import FAQ from "./Components/FAQ";
import Contact from "./Components/Contact";

const App = () => {
    return(
        <>
            <div className="bg-blue-500">
                <Nav/>
            </div>
            <Hero/>
            <div className="bg-blue-500">
                <Services/>
            </div>
            <Testimonials/>
            <div className="bg-blue-500">
                <Partners/>
            </div>
            <FAQ/>
            <Contact/>
        </>
    );

}


export default App;