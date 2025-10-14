import Buttons from "./Components/StarAdmin/Bottons";
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
                    <div className="main-panel">
                         <div className="content-wrapper">
                              <div className="row">
                                   <div className="col-sm-12">
                                        <div className="home-tab">
                                             <Buttons/>
                                             <div className="tab-content tab-content-basic">
                                                  <div className="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview"></div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>                  
               </div>
          </div>
     </>
}
