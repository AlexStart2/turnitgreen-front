import NavigationBar from "./navbar";
import Footer from "./footer";

function Layout({children}){
    return (
        <div>
        <NavigationBar />
        {children}
        <Footer/>
        </div>  
    );
}

export default Layout;