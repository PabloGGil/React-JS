import Header from './Header'; 
import Footer from './Footer'; 
import {Outlet} from "react-router-dom"
 
export default function Laiau({ children }) { 
    return ( 
        <div> 
            <Header /> 
            <main> 
                {<Outlet />} 
            </main> 
            <Footer />
        </div>
    );
}
