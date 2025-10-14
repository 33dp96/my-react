import Navbar from "./Components/StarAdmin/Navbar";
import ThemeSettingWrapper from "./Components/StarAdmin/ThemeSettingWrapper";
import SettingsPanel from "./Components/StarAdmin/SettingsPanel";
import SidebarBottons from "./Components/StarAdmin/SidebarBottons";
import SidebarDashboard from "./Components/StarAdmin/SidebarDashboard";

export default function Buttons(){
    return<>
        <div className="container-scroller">
            <Navbar/>
            <div className="container-fluid page-body-wrapper">
                <ThemeSettingWrapper/>
                <SettingsPanel/>
                <SidebarBottons/>
            </div>
        </div>
    </>
}