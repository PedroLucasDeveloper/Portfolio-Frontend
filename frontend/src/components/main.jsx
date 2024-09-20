import Nav from "./nav";
import Hero from "./hero";
import Project from "./project";
import Coisas from "./coisas";
import Footer from "./footer";

const main = () =>{
    return(
        <div className="bg-red-600">
            <Nav/>
            <Hero/>
            <Project/>
            <Coisas/>
            <Footer/>
        </div>
    );
}

export default main;