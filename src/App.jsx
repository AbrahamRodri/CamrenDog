import Hero from "./Components/Hero";
import Nav from "./Components/Nav";
import Services from "./Components/Services";

const App = () => {
    return(
        <div className="bg-slate-900">
            <Nav/>
            <Hero/>
            <Services/>
        </div>
    );

}


export default App;