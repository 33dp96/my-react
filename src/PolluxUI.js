import Navbar from "./Components/PolluxUI/Navbar";
import SubNavbar from "./Components/PolluxUI/SubNavbar";

export default function PolluxUI(){
  return<>
    <div className="container-scroller">
      <Navbar/>
      <SubNavbar/>
      <div className="container-fluid page-body-wrapper">
        
      </div>
    </div>
  </>
}
