import Hero from "./Components/Hero";
import Nav from "./Components/Nav";
import Services from "./Components/Services";
import Testimonials from "./Components/Testimonials";

const App = () => {
    return(
        <>
            <div className="bg-slate-900">
                <Nav/>
                <Hero/>
                <Services/>
            </div>
            <Testimonials/>
        </>
    );

}


export default App;