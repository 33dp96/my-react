export default function LeaveReport(){
    return(<>
        <div className="col-12 grid-margin stretch-card">
            <div className="card card-rounded">
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <div>
                                    <h4 className="card-title card-title-dash">Leave Report</h4>
                                </div>
                                <div>
                                    <div className="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle toggle-dark btn-lg mb-0 me-0" type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Month Wise </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton3">
                                            <h6 className="dropdown-header">week Wise</h6>
                                            <a className="dropdown-item" href="#">Year Wise</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
                                <canvas id="leaveReport" style={{display: "block", height: "150px", width: "340px"}} width="425" height="187" className="chartjs-render-monitor"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}