import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";

const MainPage = () => {
    return (
        <>
            <main>
                <div className="bg1">
                {/* <Header /> */}
                <Hero />
                </div>                
                <About />
            </main>
        </>
    );
};

export default MainPage;
