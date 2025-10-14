import Navbar from "./Components/StarAdmin/Navbar";
import SettingsPanel from "./Components/StarAdmin/SettingsPanel";
import Sidebar from "./Components/StarAdmin/Sidebar";
import ThemeSettingWrapper from "./Components/StarAdmin/ThemeSettingWrapper";
export default function StarAdmin(){
     return<>
          <div className="container-scroller">
               <Navbar/>
               <div className="container-fluid page-body-wrapper">
                    <ThemeSettingWrapper/>
                    <SettingsPanel/>
                    <Sidebar/>                    
               </div>
          </div>
     </>
}
