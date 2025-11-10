import { useEffect } from "react";
import Header from "./Components/iPortfolio/Header";
import Main from "./Components/iPortfolio/Main";
import AOS from 'aos';                    // این خط اضافه شد
import 'aos/dist/aos.css';                // این خط هم اضافه شد

export default function IPortfolio(){
    return<>
        <Header/>
        <Main/>        
    </>;
}