import Navbar from "./Components/PolluxUI/Navbar";
import SettingsPanel from "./Components/PolluxUI/SettingsPanel";
import SubNavbar from "./Components/PolluxUI/SubNavbar";
import ThemeSettingWrapper from "./Components/PolluxUI/ThemeSettingWrapper";

export default function PolluxUI(){
  return<>
    <div className="container-scroller">
      <Navbar/>
      <SubNavbar/>
      <div className="container-fluid page-body-wrapper">
        <ThemeSettingWrapper/>
        <SettingsPanel/>
      </div>
    </div>
  </>
}
