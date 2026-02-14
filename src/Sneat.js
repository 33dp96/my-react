<<<<<<< HEAD
export default function Sneat(){
    return(<>

    </>)
}
=======
import LayoutMenu from "./Sneat/LayoutMenu";

export default function Sneat(){
    return<>
        <div className="layout-wrapper layout-content-navbar">
            <div className="layout-container">
                <LayoutMenu/>
                <div className="menu-mobile-toggler d-xl-none rounded-1">
                    <a href="javascript:void(0);" className="layout-menu-toggle menu-link text-large text-bg-secondary p-2 rounded-1">
                        <i className="bx bx-menu icon-base"></i>
                        <i className="bx bx-chevron-right icon-base"></i>
                    </a>
                </div>
            </div>
        </div>
    </>
};
    
>>>>>>> main
