import Navbar from './Components/StarAdmin/Navbar'
import SettingsPanel from './Components/StarAdmin/SettingsPanel'
import ThemeSettingWrapper from './Components/StarAdmin/ThemeSettingWrapper'

export default function Dashboard() {
    return <>
        <div className="container-scroller">
            <Navbar />
            <div className="container-fluid page-body-wrapper">
                <ThemeSettingWrapper/>
                <SettingsPanel/>
            </div>
        </div>
    </>
}