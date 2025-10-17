export default function SalesStatistics(){
    return<>
        <div className="col-md-6 col-xl-4 grid-margin stretch-card">
            <div className="card">
                <div className="card-body border-bottom">
                    <div className="d-flex justify-content-between align-items-center flex-wrap">
                        <h6 className="mb-2 mb-md-0 text-uppercase font-weight-medium">Sales statistics</h6>
                        <div className="dropdown">
                            <button className="btn bg-white p-0 pb-1 text-muted btn-sm dropdown-toggle" type="button" id="dropdownMenuSizeButton4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Last 7 days
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuSizeButton4">
                                <h6 className="dropdown-header">Settings</h6>
                                <a className="dropdown-item" href="javascript:;">Action</a>
                                <a className="dropdown-item" href="javascript:;">Another action</a>
                                <a className="dropdown-item" href="javascript:;">Something else here</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="javascript:;">Separated link</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
                    <canvas id="sales-chart-d" height="451" style={{display: "block", height: "361px", width: "339px"}} width="423" className="chartjs-render-monitor"></canvas>
                </div>
            </div>
        </div>
    </>
}