export default function PerformanceLineChart(){
    return(<>
        <div className="col-12 col-lg-4 col-lg-12 grid-margin stretch-card">
            <div className="card card-rounded">
                <div className="card-body">
                    <div className="d-sm-flex justify-content-between align-items-start">
                        <div>
                            <h4 className="card-title card-title-dash">Performance Line Chart</h4>
                            <h5 className="card-subtitle card-subtitle-dash">Lorem Ipsum is simply dummy text of the printing</h5>
                        </div>
                        <div id="performance-line-legend">
                            <div className="chartjs-legend">
                                <ul>
                                    <li>
                                        <span style={{ "background-color": "#1F3BB3" }}></span>
                                        This week
                                    </li>
                                    <li>
                                        <span style={{ "background-color": "#52CDFF" }}></span>
                                        Last week
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="chartjs-wrapper mt-5">
                        <div className="chartjs-size-monitor">
                            <div className="chartjs-size-monitor-expand">
                                <div className=""></div>
                            </div>
                            <div className="chartjs-size-monitor-shrink">
                                <div className=""></div>
                            </div>
                        </div>
                        <canvas className="chartjs-render-monitor" id="performaneLine" style={{ display: "block", height: "150px", width: "759px" }}></canvas>
                    </div>
                </div>
            </div>
        </div>
    </>)
}