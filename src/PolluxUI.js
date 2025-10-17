import EmailAddress from "./Components/PolluxUI/EmailAddress";
import IncomeStatistics from "./Components/PolluxUI/IncomeStatistics";
import Navbar from "./Components/PolluxUI/Navbar";
import OverallSales from "./Components/PolluxUI/OverallSales";
import Phone from "./Components/PolluxUI/Phone";
import SalesStatistics from "./Components/PolluxUI/SalesStatistics";
import SettingsPanel from "./Components/PolluxUI/SettingsPanel";
import Sidebar from "./Components/PolluxUI/Sidebar";
import StatusStatistics from "./Components/PolluxUI/StatusStatistics";
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
        <Sidebar/>
        <div className="main-panel">
          <div className="content-wrapper">
            <div className="row">
              <StatusStatistics/>
              <IncomeStatistics/>
            </div>
            <div className="row">
              <OverallSales/>
              <div className="col-md-6 col-xl-4 grid-margin stretch-card">
                <div className="row">
                  <EmailAddress/>
                  <Phone/>
                </div>
              </div>
              <SalesStatistics/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}
