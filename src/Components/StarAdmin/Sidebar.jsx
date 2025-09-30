import { Link } from "react-router-dom";

export default function sidebar(){
    return(<>
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav">
                <li className="nav-item active">
                    <a href="index.html" className="nav-link">
                        <i className="mdi mdi-grid-large menu-icon"></i>
                        <span className="menu-title">Dashboard</span>
                    </a>
                </li>
                <Link to="/Dashboard">Go to Website</Link>
                <li className="nav-item nav-category">UI Elements</li>
                <li className="nav-item">
                    <a href="#ui-basic" className="nav-link" data-bs-toggle="collapse" aria-expanded="false" aria-controls="ui-basic">
                        <i className="menu-icon mdi mdi-floor-plan"></i>
                        <span className="menu-title">UI Elements</span>
                        <i className="menu-arrow"></i>
                    </a>
                    <div className="collapse" id="ui-basic">
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item">
                                <a href="pages/ui-features/buttons.html" className="nav-link">Buttons</a>
                            </li>
                            <li className="nav-item">
                                <a href="pages/ui-features/dropdowns.html" className="nav-link">Dropdowns</a>
                            </li>
                            <li className="nav-item">
                                <a href="pages/ui-features/typography.html" className="nav-link">Typography</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="nav-item nav-category">Forms and Datas</li>
                <li className="nav-item">
                    <a href="#form-elements" className="nav-link" data-bs-toggle="collapse" aria-expanded="false" aria-controls="form-elements">
                        <i className="menu-icon mdi mdi-card-text-outline"></i>
                        <span className="menu-title">Form elements</span>
                        <i className="menu-arrow"></i>
                    </a>
                    <div className="collapse" id="form-elements">
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item">
                                <a href="pages/forms/basic_elements.html" className="nav-link">Basic Elements</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="nav-item">
                    <a href="#charts" className="nav-link" data-bs-toggle="collapse" aria-expanded="false" aria-controls="charts">
                        <i className="menu-icon mdi mdi-chart-line"></i>
                        <span className="menu-title">Charts</span>
                        <i className="menu-arrow"></i>
                    </a>
                    <div className="collapse" id="charts">
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item">
                                <a href="pages/charts/chartjs.html" className="nav-link">ChartJs</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="nav-item">
                    <a href="#tables" className="nav-link" data-bs-toggle="collapse" aria-expanded="false" aria-controls="tables">
                        <i className="menu-icon mdi mdi-table"></i>
                        <span className="menu-title">Tables</span>
                        <i className="menu-arrow"></i>
                    </a>
                    <div className="collapse" id="tables">
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item">
                                <a href="pages/tables/basic-table.html" className="nav-link">Basic table</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="nav-item">
                    <a href="#icons" className="nav-link" data-bs-toggle="collapse" aria-expanded="false" aria-controls="icons">
                        <i className="menu-icon mdi mdi-layers-outline"></i>
                        <span className="menu-title">Icons</span>
                        <i className="menu-arrow"></i>
                    </a>
                    <div className="collapse" id="icons">
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item">
                                <a href="pages/icons/mdi.html" className="nav-link">Mdi icons</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="nav-item nav-category">Pages</li>
                <li className="nav-item">
                    <a href="#auth" className="nav-link" data-bs-toggle="collapse" aria-expanded="false" aria-controls="auth">
                        <i className="menu-icon mdi mdi-account-circle-outline"></i>
                        <span className="menu-title"></span>
                        <i className="menu-arrow"></i>
                    </a>
                    <div className="collapse" id="auth">
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item">
                                {/* <a href="pages/samples/login.html" className="nav-link">Login</a> */}
                                <Link to="/SignUp" className="nav-link">Login</Link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="nav-item nav-category">help</li>
                <li className="nav-item">
                    <a href="http://bootstrapdash.com/demo/star-admin2-free/docs/documentation.html" className="nav-link">
                        <i className="menu-icon mdi mdi-file-document"></i>
                        <span className="menu-title">Documentation</span>
                    </a>
                </li>
            </ul>
        </nav> 
    </>)
}