export default function StatusStatistics(){
    return<>
        <div className="col-xl-6 grid-margin stretch-card flex-column">
            <h5 className="mb-2 text-titlecase mb-4">Status statistics</h5>
            <div className="row">
                <div className="col-md-6 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body d-flex flex-column justify-content-between"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
                            <div className="d-flex justify-content-between align-items-center mb-2">
                                <p className="mb-0 text-muted">Transactions</p>
                                <p className="mb-0 text-muted">+1.37%</p>
                            </div>
                            <h4>1352</h4>
                            <canvas id="transactions-chart" className="mt-auto chartjs-render-monitor" height="81" style={{display: "block", height: "65px", width: "235px"}} width="293"></canvas>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body d-flex flex-column justify-content-between"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
                            <div className="d-flex justify-content-between align-items-center mb-2">
                                <div>
                                    <p className="mb-2 text-muted">Sales</p>
                                    <h6 className="mb-0">563</h6>
                                </div>
                                <div>
                                    <p className="mb-2 text-muted">Orders</p>
                                    <h6 className="mb-0">720</h6>
                                </div>
                                <div>
                                    <p className="mb-2 text-muted">Revenue</p>
                                    <h6 className="mb-0">5900</h6>
                                </div>
                            </div>
                            <canvas id="sales-chart-a" className="mt-auto chartjs-render-monitor" height="81" style={{display: "block", height: "65px", width: "235px"}} width="293"></canvas>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row h-100">
                <div className="col-md-6 stretch-card grid-margin grid-margin-md-0">
                    <div className="card">
                        <div className="card-body d-flex flex-column justify-content-between"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
                            <p className="text-muted">Sales Analytics</p>
                            <div className="d-flex justify-content-between align-items-center mb-2">
                                <h3 className="mb-">27632</h3>
                                <h3 className="mb-">78%</h3>
                            </div>
                            <canvas id="sales-chart-b" className="mt-auto chartjs-render-monitor" height="47" style={{display: "block", height: "38px", width: "235px"}} width="293"></canvas>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <div className="row h-100">
                                <div className="col-6 d-flex flex-column justify-content-between"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
                                    <p className="text-muted">CPU</p>
                                    <h4>55%</h4>
                                    <canvas id="cpu-chart" className="mt-auto chartjs-render-monitor" style={{display: "block", height: "52px", width: "106px"}} width="132" height="65"></canvas>
                                </div>
                                <div className="col-6 d-flex flex-column justify-content-between"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
                                    <p className="text-muted">Memory</p>
                                    <h4>123,65</h4>
                                    <canvas id="memory-chart" className="mt-auto chartjs-render-monitor" style={{display: "block", height: "52px", width: "106px"}} width="132" height="65"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}