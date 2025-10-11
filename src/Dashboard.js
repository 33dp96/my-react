
export default function Dashboard(){
    return<>
        <div className="container-scroller">
            {/* partial:partials/_navbar.html */}
            <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
                <div className="navbar-brand-wrapper d-flex justify-content-center">
                    <div className="navbar-brand-inner-wrapper d-flex justify-content-between align-items-center w-100">
                        <a href="index.html" className="navbar-brand brand-logo">
                            <img src="images/logo.svg" alt="logo"/>
                        </a>
                        <a href="index.html" className="navbar-brand brand-logo-mini">
                            <img src="images/logo-mini.svg" alt="logo"/>
                        </a>
                        <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                            <span className="typcn typcn-th-menu"></span>
                        </button>
                    </div>
                </div>
                <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
                    <ul className="navbar-nav mr-lg-2">
                        <li className="nav-item nav-profile dropdown">
                            <a href="#" className="nav-link" id="profileDropdown" data-toggle="dropdown">
                                <img src="images/faces/face5.jpg" alt="profile"/>
                                <span className="nav-profile-name">Eugenia Mullins</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
                                <a className="dropdown-item">
                                    <i className="typcn typcn-cog-outline text-primary"></i>
                                    Settings
                                </a>
                                <a className="dropdown-item">
                                    <i className="typcn typcn-eject text-primary"></i>
                                    Logout
                                </a>
                            </div>
                        </li>
                        <li className="nav-item nav-user-status dropdown">
                            <p className="mb-0">Last login was 23 hours ago.</p>
                        </li>
                    </ul>
                    <ul className="navbar-nav navbar-nav-right">
                        <li className="nav-item nav-date dropdown">
                            <a href="javascript:;" className="nav-link d-flex justify-content-center align-items-center">
                                <h6 className="date mb-0">Today : Mar 23</h6>
                                <i className="typcn typcn-calendar"></i>
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a href="#" className="nav-link count-indicator dropdown-toggle d-flex justify-content-center align-items-center" id="messageDropdown" data-toggle="dropdown">
                                <i className="typcn typcn-cog-outline mx-0"></i>
                                <span className="count"></span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="messageDropdown">
                                <p className="mb-0 font-weight-normal float-left dropdown-header">Messages</p>
                                <a className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <img src="images/faces/face4.jpg" alt="image" className="profile-pic"/>
                                    </div>
                                    <div className="preview-item-content flex-grow">
                                        <h6 className="preview-subject ellipsis font-weight-normal">David Grey</h6>
                                        <p className="font-weight-light small-text text-muted mb-0">The meeting is cancelled</p>
                                    </div>
                                </a>
                                <a className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <img src="images/faces/face2.jpg" alt="image" className="profile-pic"/>
                                    </div>
                                    <div className="preview-item-content flex-grow">
                                        <h6 className="preview-subject ellipsis font-weight-normal">Tim Cook</h6>
                                        <p className="font-weight-light small-text text-muted mb-0">New product launch</p>
                                    </div>
                                </a>
                                <a className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <img src="images/faces/face3.jpg" alt="image" className="profile-pic"/>
                                    </div>
                                    <div className="preview-item-content flex-grow">
                                        <h6 className="preview-subject ellipsis font-weight-normal">Johnson</h6>
                                        <p className="font-weight-light small-text text-muted mb-0">Upcoming board meeting</p>
                                    </div>
                                </a>
                            </div>
                        </li>
                        <li className="nav-item dropdown mr-0">
                            <a href="#" className="nav-link count-indicator dropdown-toggle d-flex align-items-center justify-content-center" id="notificationDropdown" data-toggle="dropdown">
                                <i className="typcn typcn-bell mx-0"></i>
                                <span className="count"></span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
                                <p className="mb-0 font-weight-normal float-left dropdown-header">Notifications</p>
                                <a className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <div className="preview-icon bg-success">
                                            <i className="typcn typcn-info mx-0"></i>
                                        </div>
                                    </div>
                                    <div className="preview-item-content">
                                        <h6 className="preview-subject font-weight-normal">Application Error</h6>
                                        <p className="font-weight-light small-text mb-0 text-muted">Just now</p>
                                    </div>
                                </a>
                                <a className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <div className="preview-icon bg-warning">
                                            <i className="typcn typcn-cog-outline mx-0"></i>
                                        </div>
                                    </div>
                                    <div className="preview-item-content">
                                        <h6 className="preview-subject font-weight-normal">Settings</h6>
                                        <p className="font-weight-light small-text mb-0 text-muted">Private message</p>
                                    </div>
                                </a>
                                <a className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <div className="preview-icon bg-info">
                                            <i className="typcn typcn-user mx-0"></i>
                                        </div>
                                    </div>
                                    <div className="preview-item-content">
                                        <h6 className="preview-subject font-weight-normal">New user registration</h6>
                                        <p className="font-weight-light small-text mb-0 text-muted">2 days ago</p>
                                    </div>
                                </a>
                            </div>
                        </li>
                    </ul>
                    <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                        <span className="typcn typcn-th-menu"></span>
                    </button>
                </div>
            </nav>
            {/* partial */}
            <nav className="navbar-breadcrumb col-xl-12 col-12 d-flex flex-row p-0">
                <div className="navbar-links-wrapper d-flex align-items-stretch">
                    <div className="nav-link">
                        <a href="javascript:;">
                            <i className="typcn typcn-calendar-outline"></i>
                        </a>
                    </div>
                    <div className="nav-link">
                        <a href="javascript:;">
                            <i className="typcn typcn-mail"></i>
                        </a>
                    </div>
                    <div className="nav-link">
                        <a href="javascript:;">
                            <i className="typcn typcn-folder"></i>
                        </a>
                    </div>
                    <div className="nav-link">
                        <a href="javascript:;">
                            <i className="typcn typcn-document-text"></i>
                        </a>
                    </div>
                </div>
                <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
                    <ul className="navbar-nav mr-lg-2">
                        <li className="nav-item ml-0">
                            <h4 className="mb-0">Dashboard</h4>
                        </li>
                        <li className="nav-item">
                            <div className="d-flex align-items-baseline">
                                <p className="mb-0">Home</p>
                                <i className="typcn typcn-chevron-right"></i>
                                <p className="mb-0">Main Dahboard</p>
                            </div>
                        </li>
                    </ul>
                    <ul className="navbar-nav navbar-nav-right">
                        <li className="nav-item nav-search d-none d-md-block mr-0">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search..." aria-label="search" aria-describedby="search"/>
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="search">
                                        <i className="typcn typcn-zoom"></i>
                                    </span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="container-fluid page-body-wrapper">
                {/* partial:partials/_settings-panel.html */}
                <div className="theme-setting-wrapper">
                    <div id="settings-trigger">
                        <i className="typcn typcn-cog-outline"></i>
                    </div>
                    <div className="settings-panel" id="theme-settings">
                        <i className="settings-close typcn typcn-times"></i>
                        <p className="settings-heading">SIDEBAR SKINS</p>
                        <div className="sidebar-bg-options selected" id="sidebar-light-theme">
                            <div className="img-ss rounded-circle bg-light border mr-3"></div>
                            Light
                        </div>
                        <div className="sidebar-bg-options" id="sidebar-dark-theme">
                            <div className="img-ss rounded-circle bg-dark border mr-3"></div>
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
                    <i className="settings-close typcn typcn-times"></i>
                    <ul className="nav nav-tabs" id="setting-panel" role="tablist">
                        <li className="nav-item">
                            <a href="#todo-section" className="nav-link active" id="todo-tab" data-toggle="tab" role="tab" aria-controls="todo-section" aria-expanded="true">TO DO LIST</a>
                        </li>
                        <li className="nav-item">
                            <a href="#todo-section" className="nav-link" id="chats-tab" data-toggle="tab" role="tab" aria-controls="chats-section" aria-expanded="true">CHATS</a>
                        </li>
                    </ul>
                    <div className="tab-content" id="setting-content">
                        <div className="tab-pane fade show active scroll-wrapper ps ps--active-y" id="todo-section" role="tabpanel" aria-labelledby="todo-section">
                            <div className="add-items d-flex px-3 mb-0">
                                <form className="form w-100">
                                    <div className="form-group d-flex">
                                        <input type="text" className="form-control todo-list-input" placeholder="Add To-do"/>
                                        <button className="add btn btn-primary todo-list-add-btn" id="add-task" type="submit">Add</button>
                                    </div>
                                </form>
                            </div>
                            <div className="list-wrapper px-3">
                                <ul className="d-flex flex-column-reverse todo-list">
                                    <li>
                                        ::marker
                                        <div className="form-check">
                                            <label className="form-check-label">
                                                <input type="checkbox" className="checkbox"/>
                                                Team review meeting at 3.00 PM
                                                <i className="input-helper"></i>
                                            </label>
                                        </div>
                                        <i className="remove typcn typcn-delete-outline"></i>
                                    </li>
                                    <li>
                                        ::marker
                                        <div className="form-check">
                                            <label className="form-check-label">
                                                <input type="checkbox" className="checkbox"/>
                                                Prepare for presentation
                                                <i className="input-helper"></i>
                                            </label>
                                        </div>
                                        <i className="remove typcn typcn-delete-outline"></i>
                                    </li>
                                    <li>
                                        ::marker
                                        <div className="form-check">
                                            <label className="form-check-label">
                                                <input type="checkbox" className="checkbox"/>
                                                Resolve all the low priority tickets due today
                                                <i className="input-helper"></i>
                                            </label>
                                        </div>
                                        <i className="remove typcn typcn-delete-outline"></i>
                                    </li>
                                    <li className="completed">
                                        ::marker
                                        <div className="form-check">
                                            <label className="form-check-label">
                                                <input type="checkbox" className="checkbox" checked=""/>
                                                Schedule meeting for next week
                                                <i className="input-helper"></i>
                                            </label>
                                        </div>
                                        <i className="remove typcn typcn-delete-outline"></i>
                                    </li>
                                    <li className="completed">
                                        ::marker
                                        <div className="form-check">
                                            <label className="form-check-label">
                                                <input type="checkbox" className="checkbox" checked="" />
                                                Project review
                                                <i className="input-helper"></i>
                                            </label>
                                        </div>
                                        <i className="remove typcn typcn-delete-outline"></i>
                                    </li>
                                </ul>
                            </div>
                            <div className="events py-4 border-bottom px-3">
                                <div className="wrapper d-flex mb-2">
                                    <i className="typcn typcn-media-record-outline text-primary mr-2"></i>
                                    <span>Feb 11 2018</span>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>           
        </div>
    </>
}