export default function SubNavbar(){
    return<>
        <nav className="navbar-breadcrumb col-xl-12 col-12 d-flex flex-row p-0">
            <div className="navbar-links-wrapper d-flex align-items-stretch">
                <div className="nav-link">
                    <a href="javascript:;"><i className="typcn typcn-calendar-outline"></i></a>
                </div>
                <div className="nav-link">
                    <a href="javascript:;"><i className="typcn typcn-mail"></i></a>
                </div>
                <div className="nav-link">
                    <a href="javascript:;"><i className="typcn typcn-folder"></i></a>
                </div>
                <div className="nav-link">
                    <a href="javascript:;"><i className="typcn typcn-document-text"></i></a>
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
    </>
}