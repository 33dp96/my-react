export default function OverallSales(){
    return<>
        <div className="col-xl-4 grid-margin stretch-card">
            <div className="card">
                <div className="card-body border-bottom">
                    <div className="d-flex justify-content-between align-items-center flex-wrap">
                        <h6 className="mb-2 mb-md-0 text-uppercase font-weight-medium">Overall sales</h6>
                        <div className="dropdown">
                            <button className="btn bg-white p-0 pb-1 text-muted btn-sm dropdown-toggle" type="button" id="dropdownMenuSizeButton3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Last 30 days
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuSizeButton3">
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
                    <canvas id="sales-chart-c" className="mt-2 chartjs-render-monitor" style={{display: "block", height: "169px", width: "339px"}} width="423" height="211"></canvas>
                    <div className="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3 mt-4">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <p className="text-muted">Gross Sales</p>
                            <h5>492</h5>
                            <div className="d-flex align-items-baseline">
                                <p className="text-success mb-0">0.5%</p>
                                <i className="typcn typcn-arrow-up-thick text-success"></i>
                            </div>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <p className="text-muted">Purchases</p>
                            <h5>87k</h5>
                            <div className="d-flex align-items-baseline">
                                <p className="text-success mb-0">0.8%</p>
                                <i className="typcn typcn-arrow-up-thick text-success"></i>
                            </div>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <p className="text-muted">Tax Return</p>
                            <h5>882</h5>
                            <div className="d-flex align-items-baseline">
                                <p className="text-danger mb-0">-04%</p>
                                <i className="typcn typcn-arrow-down-thick text-danger"></i>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="dropdown">
                            <button className="btn bg-white p-0 pb-1 pt-1 text-muted btn-sm dropdown-toggle" type="button" id="dropdownMenuSizeButton3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Last 7 days
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuSizeButton3">
                                <h6 className="dropdown-header">Settings</h6>
                                <a className="dropdown-item" href="javascript:;">Action</a>
                                <a className="dropdown-item" href="javascript:;">Another action</a>
                                <a className="dropdown-item" href="javascript:;">Something else here</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="javascript:;">Separated link</a>
                            </div>
                        </div>
                        <p className="mb-0">overview</p>
                    </div>
                </div>
            </div>
        </div>
    </>
}