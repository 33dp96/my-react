import Buttons from "./Components/StarAdmin/Dashboard/Bottons";
import Navbar from "./Components/StarAdmin/Dashboard/Navbar";
import SettingsPanel from "./Components/StarAdmin/Dashboard/SettingsPanel";
import Sidebar from "./Components/StarAdmin/Dashboard/Sidebar";
import ThemeSettingWrapper from "./Components/StarAdmin/Dashboard/ThemeSettingWrapper";
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
