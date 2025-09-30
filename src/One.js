import './App.css';
import Sidebar from './sneat/Sidebar';

export default function One() {
    return(<>
        <div className="layout-wrapper layout-content-navbar">
            <div className="layout-container">
                <Sidebar/>
            </div>
        </div>           
    </>);
}