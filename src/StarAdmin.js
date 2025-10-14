import Navbar from "./Components/StarAdmin/Navbar";
import ThemeSettingWrapper from "./Components/StarAdmin/ThemeSettingWrapper";
export default function StarAdmin(){
     return<>
          <div className="container-scroller">
               <Navbar/>
               <div className="container-fluid page-body-wrapper">
                    <ThemeSettingWrapper/>                    
               </div>
          </div>
     </>
}
