export default function BaseFrame({ title, subtitle, children, customClass }) {
    return <>
        <div className={customClass ? customClass : "col-md-6 col-lg-4 col-xl-4 order-0 mb-4"}>
            <div className="card h-100">
                <div className="card-header d-flex align-items-center justify-content-between pb-0">
                    <div className="card-title mb-0">
                        <h5 className="m-0 me-2">{title}</h5>
                        <small className="text-muted">{subtitle}</small>
                    </div>
                    <div className="dropdown">
                        <button className="btn p-0" type="button" id="orederStatistics" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="bx bx-dots-vertical-rounded"></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-end" aria-labelledby="orederStatistics">
                            <a className="dropdown-item" href="javascript:void(0);">Select All</a>
                            <a className="dropdown-item" href="javascript:void(0);">Refresh</a>
                            <a className="dropdown-item" href="javascript:void(0);">Share</a>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    {children}
                </div>
            </div>
        </div>
    </>
}