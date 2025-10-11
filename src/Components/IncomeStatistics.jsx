export default function IncomeStatistics(){
    return<>
        <div className="col-xl-6 grid-margin stretch-card flex-column">
            <h5 className="mb-2 text-titlecase mb-4">Income statistics</h5>
            <div className="row h-100">
                <div className="col-md-12 stretch-card">
                    <div className="card">
                        <div className="card-body"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
                            <div className="d-flex justify-content-between align-items-start flex-wrap">
                                <div>
                                    <p className="mb-3">Monthly Increase</p>
                                    <h3>67842</h3>
                                </div>
                                <div id="income-chart-legend" className="d-flex flex-wrap mt-1 mt-md-0"><div className="d-flex align-items-center mr-3"><div className="mr-2" style={{width: "12px", "border-radius": "50%", height: "12px", "background-color": "#a43cda"}}></div><p className="mb-0">Register User</p></div><div className="d-flex align-items-center"><div className="mr-2" style={{width: "12px", "border-radius": "50%", height: "12px", "background-color": "#00c8bf"}}></div><p className="mb-0">Premium User</p></div></div>
                            </div>
                            <canvas id="income-chart" style={{display: "block", height: "274px", width: "549px"}} width="686" height="342" className="chartjs-render-monitor"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}