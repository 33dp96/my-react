export default function ModPanel(){
    return(<>
        <div className="container-scroller">
            {/* Navbar */}
            <nav className="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex align-items-top flex-row">
                <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-start">
                    <div className="me-3">
                        <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-bs-toggle="minimize">
                            <span className="icon-menu"></span>
                        </button>
                    </div>
                    <div>
                        <a href="index.html" className="navbar-brand brand-logo">
                            <img src="images/logo.svg" alt="logo"/>
                        </a>
                        <a href="index.html" className="navbar-brand brand-logo-mini">
                            <img src="images/logo-mini.svg" alt="logo" />
                        </a>
                    </div>
                </div>
                <div className="navbar-menu-wrapper d-flex align-items-top">
                    <ul className="navbar-nav">
                        <li className="nav-item font-weight-semibold d-none d-lg-block ms-0">
                            <h1 className="welcome-text">
                                Good Morning, 
                                <span className="text-black fw-bold">John Doe</span>
                            </h1>
                            <h3 className="welcome-sub-text">Your performance summary this week</h3>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item dropdown d-none d-lg-block">
                            <a href="#" className="nav-link dropdown-bordered dropdown-toggle dropdown-toggle-split" id="messageDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                Select Category 
                            </a>
                            <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0" aria-labelledby="messageDropdown">
                                <a className="dropdown-item py-3">
                                    <p className="mb-0 font-weight-medium float-left">Select category</p>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item preview-item">
                                    <div className="preview-item-content flex-grow py-2">
                                        <p className="preview-subject ellipsis font-weight-medium text-dark">Bootstrap Bundle</p>
                                        <p className="fw-light small-text mb-0">This is a Bundle featuring 16 unique dashboards</p>
                                    </div>
                                </a>
                                <a className="dropdown-item preview-item">
                                    <div className="preview-item-content flex-grow py-2">
                                        <p className="preview-subject ellipsis font-weight-medium text-dark">Angular Bundle</p>
                                        <p className="fw-light small-text mb-0">Everything you’ll ever need for your Angular projects</p>
                                    </div>
                                </a>
                                <a className="dropdown-item preview-item">
                                    <div className="preview-item-content flex-grow py-2">
                                        <p className="preview-subject ellipsis font-weight-medium text-dark">VUE Bundle</p>
                                        <p className="fw-light small-text mb-0">Bundle of 6 Premium Vue Admin Dashboard</p>
                                    </div>
                                </a>
                                <a className="dropdown-item preview-item">
                                    <div className="preview-item-content flex-grow py-2">
                                        <p className="preview-subject ellipsis font-weight-medium text-dark">React Bundle</p>
                                        <p className="fw-light small-text mb-0">Bundle of 8 Premium React Admin Dashboard</p>
                                    </div>
                                </a>
                            </div>
                        </li>
                        <li className="nav-item d-none d-lg-block">
                            <div className="input-group date datepicker navbar-date-picker" id="datepicker-popup">
                                <span className="input-group-addon input-group-prepend border-right">
                                    <span className="icon-calendar input-group-text calendar-icon"></span>
                                </span>
                                <input type="text" className="form-control"/>
                            </div>
                        </li>
                        <li className="nav-item">
                            <form action="#" className="search-form">
                                <i className="icon-search"></i>
                                <input type="search" className="form-control" placeholder="Search Here" title="Search here" />
                            </form>
                        </li>
                        <li className="nav-item dropdown">
                            <a href="#" className="nav-link count-indicator" id="notificationDropdown" data-bs-toggle="dropdown">
                                <i className="icon-mail icon-lg"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0" aria-labelledby="notificationDropdown">
                                <a className="dropdown-item py-3 border-bottom">
                                    <p className="dropdown-item py-3 border-bottom"></p>
                                    <span className="badge badge-pill badge-primary float-right">View all</span>
                                </a>
                                <a className="dropdown-item preview-item py-3">
                                    <div className="preview-thumbnail">
                                        <i className="mdi mdi-alert m-auto text-primary"></i>
                                    </div>
                                    <div className="preview-item-content">
                                        <h6 className="preview-subject fw-normal text-dark mb-1" Application Error></h6>
                                        <p className="fw-light small-text mb-0">Just now</p>
                                    </div>
                                </a>
                                <a className="dropdown-item preview-item py-3">
                                    <div className="preview-thumbnail">
                                        <i className="mdi mdi-settings m-auto text-primary"></i>
                                    </div>
                                    <div className="preview-item-content">
                                        <h6 className="preview-subject fw-normal text-dark mb-1">Settings</h6>
                                        <p className="fw-light small-text mb-0">Private message</p>
                                    </div>
                                </a>
                                <a className="dropdown-item preview-item py-3">
                                    <div className="preview-thumbnail">
                                        <i className="mdi mdi-airballoon m-auto text-primary"></i>
                                    </div>
                                    <div className="preview-item-content">
                                        <h6 className="preview-subject fw-normal text-dark mb-1">New user registration</h6>
                                        <p className="fw-light small-text mb-0">2 days ago</p>
                                    </div>
                                </a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a href="#" className="nav-link count-indicator" id="countDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="icon-bell"></i>
                                <span className="count"></span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0" aria-labelledby="countDropdown">
                                <a className="dropdown-item py-3">
                                    <p className="mb-0 font-weight-medium float-left">You have 7 unread mails</p>
                                    <span className="badge badge-pill badge-primary float-right">View all</span>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <img src="images/faces/face10.jpg" alt="image" className="img-sm profile-pic"/>
                                    </div>
                                    <div className="preview-item-content flex-grow py-2">
                                        <p className="preview-subject ellipsis font-weight-medium text-dark">Marian Garner</p>
                                        <p className="fw-light small-text mb-0">The meeting is cancelled</p>
                                    </div>
                                </a>
                                <a className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <img src="images/faces/face12.jpg" alt="image" className="img-sm profile-pic"/>
                                    </div>
                                    <div className="preview-item-content flex-grow py-2">
                                        <p className="preview-subject ellipsis font-weight-medium text-dark">David Grey</p>
                                        <p className="fw-light small-text mb-0">The meeting is cancelled</p>
                                    </div>
                                </a>
                                <a className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <img src="images/faces/face1.jpg" alt="image" className="img-sm profile-pic"/>
                                    </div>
                                    <div className="preview-item-content flex-grow py-2">
                                        <p className="preview-subject ellipsis font-weight-medium text-dark">Travis Jenkins</p>
                                        <p className="fw-light small-text mb-0">The meeting is cancelled</p>
                                    </div>
                                </a>
                            </div>
                        </li>
                        <li className="nav-item dropdown d-none d-lg-block user-dropdown">
                            <a href="#" className="nav-link" id="UserDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="images/faces/face8.jpg" alt="Profile image" className="img-xs rounded-circle"/>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="UserDropdown">
                                <div className="dropdown-header text-center">
                                    <img src="images/faces/face8.jpg" alt="Profile image" className="img-md rounded-circle"/>
                                    <p className="mb-1 mt-3 font-weight-semibold">Allen Moreno</p>
                                    <p className="fw-light text-muted mb-0">allenmoreno@gmail.com</p>
                                </div>
                                <a className="dropdown-item">
                                    <i className="dropdown-item-icon mdi mdi-account-outline text-primary me-2">My Profile</i>
                                    <span className="badge badge-pill badge-danger">1</span>
                                </a>
                                <a className="dropdown-item">
                                    <i className="dropdown-item-icon mdi mdi-message-text-outline text-primary me-2">Messages</i>
                                </a>
                                <a className="dropdown-item">
                                    <i className="dropdown-item-icon mdi mdi-calendar-check-outline text-primary me-2">Activity</i>
                                </a>
                                <a className="dropdown-item">
                                    <i className="dropdown-item-icon mdi mdi-help-circle-outline text-primary me-2">FAQ</i>
                                </a>
                                <a className="dropdown-item">
                                    <i className="dropdown-item-icon mdi mdi-power text-primary me-2">Sign Out</i>
                                </a>
                            </div>
                        </li>
                    </ul>
                    <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-bs-toggle="offcanvas">
                        <span className="mdi mdi-menu"></span>
                    </button>
                </div>
            </nav>
            {/* partial */}
            <div className="container-fluid page-body-wrapper">
                {/* partial:partials/_settings-panel.html */}
                <div className="theme-setting-wrapper">
                    <div id="settings-trigger">
                        <i className="ti-settings"></i>
                    </div>
                    <div className="settings-panel" id="theme-settings">
                        <i className="settings-close ti-close"></i>
                        <p className="settings-heading">SIDEBAR SKINS</p>
                        <div className="sidebar-bg-options selected" id="sidebar-light-theme">
                            <div className="img-ss rounded-circle bg-light border me-3"></div>
                            Light
                        </div>
                        <div className="sidebar-bg-options" id="sidebar-dark-theme">
                            <div className="img-ss rounded-circle bg-dark border me-3"></div>
                            Dark
                        </div>
                        <p className="settings-heading mt-2">HEADER SKINS</p>
                        <div className="color-tiles mx-0 px-4">
                            <div className="tiles success"></div>
                            <div className="tiles warning"></div>
                            <div className="tiles danger"></div>
                            <div className="tiles info"></div>
                            <div className="tiles dark"></div>
                            <div className="tiles default"></div>
                        </div>
                    </div>
                </div>
                <div className="settings-panel" id="right-sidebar">
                    <i className="settings-close ti-close"></i>
                    <ul className="nav nav-tabs border-top" id="setting-panel" role="tablist">
                        <li className="nav-item">
                            <a href="#todo-section" className="nav-link active" id="todo-tab" data-bs-toggle="tab" role="tab" aria-controls="todo-section" aria-expanded="true">TO DO LIST</a>
                        </li>
                        <li className="nav-item">
                            <a href="#chats-section" className="nav-link" id="chats-tab" data-bs-toggle="tab" role="tab" aria-controls="todo-section">CHATS</a>                            
                        </li>
                    </ul>
                    <div className="tab-content" id="setting-content">
                        <div className="tab-pane fade show active scroll-wrapper ps ps--active-y" id="todo-section" role="tabpanel" aria-labelledby="todo-section">
                            <div className="add-items d-flex px-3 mb-0">
                                <form className="form w-100">
                                    <div className="form-group d-flex">
                                        <input type="text" className="form-control todo-list-input" placeholder="Add To-do"/>
                                        <button className="add btn btn-primary todo-list-add-btn" id="add-task" type="submit">
                                        Add
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="list-wrapper px-3">
                                <ul className="d-flex flex-column-reverse todo-list">
                                    <li>
                                        <div className="form-check">
                                            <label className="form-check-label">
                                                <input type="checkbox" className="checkbox"/>
                                                Team review meeting at 3.00 PM
                                                <i className="input-helper"></i>
                                            </label>
                                        </div>
                                        <i className="remove ti-close"></i>
                                    </li>
                                    <li>
                                        <div className="form-check">
                                            <label className="form-check-label">
                                                <input type="checkbox" className="checkbox"/>
                                                Prepare for presentation
                                                <i className="input-helper"></i>
                                            </label>
                                        </div>
                                        <i className="remove ti-close"></i>
                                    </li>
                                    <li>
                                        <div className="form-check">
                                            <label className="form-check-label">
                                                <input type="checkbox" className="checkbox"/>
                                                Resolve all the low priority tickets due today
                                                <i className="input-helper"></i>
                                            </label>
                                        </div>
                                        <i className="remove ti-close"></i>
                                    </li>
                                    <li className="completed">
                                        <div className="form-check">
                                            <label className="form-check-label">
                                                <input type="checkbox" className="checkbox" checked=""/>
                                                Schedule meeting for next week
                                                <i className="input-helper"></i>
                                            </label>
                                        </div>
                                        <i className="remove ti-close"></i>
                                    </li>
                                    <li className="completed">
                                        <div className="form-check">
                                            <label className="form-check-label">
                                                <input type="checkbox" className="checkbox" checked=""/>
                                                Project review
                                                <i className="input-helper"></i>
                                            </label>
                                        </div>
                                        <i className="remove ti-close"></i>
                                    </li>
                                </ul>
                            </div>
                            <h4 className="px-3 text-muted mt-5 fw-light mb-0">Events</h4>
                            <div className="events pt-4 px-3">
                                <div className="wrapper d-flex mb-2">
                                    <i className="ti-control-record text-primary me-2"></i>
                                    <span>Feb 11 2018</span>
                                </div>
                                <p className="mb-0 font-weight-thin text-gray">Creating component page build a js</p>
                                <p className="text-gray mb-0">The total number of sessions</p>
                            </div>
                            <div className="events pt-4 px-3">
                                <div className="wrapper d-flex mb-2">
                                    <i className="ti-control-record text-primary me-2"></i>
                                    <span>Feb 7 2018</span>
                                </div>
                                <p className="mb-0 font-weight-thin text-gray">Meeting with Alisa</p>
                                <p className="text-gray mb-0 ">Call Sarah Graves</p>
                            </div>
                            <div className="ps__rail-x" style={{left: "0px",bottom: "0px"}}>
                                <div className="ps__thumb-x" tabindex="0" style={{left: "0px", width: "0px"}}></div>
                            </div>
                            <div className="ps__rail-y" style={{top: "0px", height: "678px", right: "0px"}}>
                                <div className="ps__thumb-y" tabindex="0" style={{ top: "0px", height: "596px"}}></div>
                            </div>
                        </div>
                        {/* To do section tab ends */}
                        <div className="tab-pane fade" id="chats-section" role="tabpanel" aria-labelledby="chats-section">
                            <div className="d-flex align-items-center justify-content-between border-bottom">
                                <p className="settings-heading border-top-0 mb-3 pl-3 pt-0 border-bottom-0 pb-0">Friends</p>
                                <small className="settings-heading border-top-0 mb-3 pt-0 border-bottom-0 pb-0 pr-3 fw-normal">See All
                                </small>
                            </div>
                            <ul className="chat-list">
                                <li className="list active">
                                    <div className="profile">
                                        <img src="images/faces/face1.jpg" alt="image"/>
                                        <span className="online"></span>
                                    </div>
                                    <div className="info">
                                        <p>Thomas Douglas</p>
                                        <p>Available</p>
                                    </div>
                                    <small className="text-muted my-auto">19 min</small>
                                </li>
                                <li className="list">
                                    <div className="profile">
                                        <img src="images/faces/face2.jpg" alt="image"/>
                                        <span className="offline"></span>
                                    </div>
                                    <div className="info">
                                        <div className="wrapper d-flex">
                                            <p>Catherine</p>
                                        </div>
                                        <p>Away</p>
                                    </div>
                                    <div className="badge badge-success badge-pill my-auto mx-2">4</div>
                                    <small className="text-muted my-auto">23 min</small>
                                </li>
                                <li className="list">
                                    <div className="profile">
                                        <img src="images/faces/face3.jpg" alt="image"/>
                                        <span className="online"></span>
                                    </div>
                                    <div className="info">
                                        <p>Daniel Russell</p>
                                        <p>Available</p>
                                    </div>
                                    <small className="text-muted my-auto">14 min</small>
                                </li>
                                <li className="list">
                                    <div className="profile">
                                        <img src="images/faces/face4.jpg" alt="image"/>
                                        <span className="offline"></span>
                                    </div>
                                    <div className="info">
                                        <p>James Richardson</p>
                                        <p>Away</p>
                                    </div>
                                    <small className="text-muted my-auto">2 min</small>
                                </li>
                                <li className="list">
                                    <div className="profile">
                                        <img src="images/faces/face5.jpg" alt="image"/>
                                        <span className="online"></span>
                                    </div>
                                    <div className="info">
                                        <p>Madeline Kennedy</p>
                                        <p>Available</p>
                                    </div>
                                    <small className="text-muted my-auto">5 min</small>
                                </li>
                                <li className="list">
                                    <div className="profile">
                                        <img src="images/faces/face6.jpg" alt="image"/>
                                        <span className="online"></span>
                                    </div>
                                    <div className="info">
                                        <p>Sarah Graves</p>
                                        <p>Available</p>
                                    </div>
                                    <small className="text-muted my-auto">47 min</small>
                                </li>
                            </ul>
                        </div>
                        {/* chat tab ends */}
                    </div>
                </div>
                {/* partial */}
                {/* partial:partials/_sidebar.html */}
                <nav className="sidebar sidebar-offcanvas" id="sidebar">
                    <ul className="nav">
                        <li className="nav-item active">
                            <a href="index.html" className="nav-link">
                                <i className="mdi mdi-grid-large menu-icon"></i>
                                <span className="menu-title">Dashboard</span>
                            </a>
                        </li>
                        <li className="nav-item nav-category">UI Elements</li>
                        <li className="nav-item">
                            <a href="#ui-basic" className="nav-link collapsed" data-bs-toggle="collapse" aria-expanded="false" aria-controls="ui-basic">
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
                        <li className="nav-item nav-category">pages</li>
                        <li className="nav-item">
                            <a href="#auth" className="nav-link" data-bs-toggle="collapse" aria-expanded="false" aria-controls="auth">
                                <i className="menu-icon mdi mdi-account-circle-outline"></i>
                                <span className="menu-title">User Pages</span>
                                <i className="menu-arrow"></i>
                            </a>
                            <div className="collapse" id="auth">
                                <ul className="nav flex-column sub-menu">
                                    <li className="nav-item">
                                        <a href="pages/samples/login.html" className="nav-link">Login</a>
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
                {/* partial */}
            </div>
        </div>
    </>)
}