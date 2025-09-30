export default function TypeByAmount(){
    return(<>
        <div className="col-12 grid-margin stretch-card">
            <div className="card card-rounded">
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-12"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="card-title card-title-dash">Type By Amount</h4>
                            </div>
                            <canvas className="my-auto chartjs-render-monitor" id="doughnutChart" height="282" style={{display: "block", height: "226px", width: "340px"}} width="425"></canvas>
                            <div id="doughnut-chart-legend" className="mt-5 text-center"><div className="chartjs-legend"><ul className="justify-content-center"><li><span style={{"background-color":"#1F3BB3"}}></span>Total</li><li><span style={{"background-color":"#FDD0C7"}}></span>Net</li><li><span style={{"background-color":"#52CDFF"}}></span>Gross</li><li><span style={{"background-color":"#81DADA"}}></span>AVG</li></ul></div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}