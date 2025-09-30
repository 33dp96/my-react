export default function Buttons(){
    return<>
        <div className="container-scroller">
            <nav className="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex align-items-top flex-row">
                <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-start">
                    <div className="me-3">
                        <button className="navbar-toggler navbar-toggler align-self-center">
                            <span className="icon-menu"></span>
                        </button>
                    </div>
                    <div>
                        <a href="/index.html" className="navbar-brand brand-logo">
                            <img src="/images/logo.svg" alt="logo" />
                        </a>
                        <a href="/index.html" className="navbar-brand brand-logo-mini">
                            <img src="/images/logo-mini.svg" alt="logo" />
                        </a>
                    </div>
                </div>
                <div className="navbar-menu-wrapper d-flex align-items-top">
                    <ul className="navbar-nav">
                        <li className="nav-item font-weight-semibold d-none d-lg-block ms-0">
                            <h1 className="welcome-text">
                                Good Morning,
                                <span className="text-black fw-bold"> John Doe</span>
                            </h1>
                            <h3 className="welcome-sub-text">
                            Your performance summary this week</h3>
                        </li>
                    </ul>
                    
                </div>
            </nav>
        </div>
    </>
}