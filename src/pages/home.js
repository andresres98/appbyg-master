import AppBrownie from "./brownie";
import AppGalleta from "./galleta";
import AppMnicake from "./minicake";
import AppHeader from "./../components/header";
import AppFooter from "./../components/footer";
import AppHero from "../components/hero";
import AppCatalogo from "../components/catalogo";

function Home() {
    return (
        <div className="App">
            <header id="header">
            <AppHeader/>
            </header>
            <main>
                <AppHero />
                <AppCatalogo />
                
            </main>
            <footer id="footer">
            <AppFooter/>
            </footer>
        </div>
    );
}

export default Home;