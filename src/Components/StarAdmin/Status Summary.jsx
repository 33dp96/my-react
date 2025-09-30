export default function StatusSummary(){
    return(<>
        <div className="col-md-6 col-lg-12 grid-margin stretch-card">
            <div className="card bg-primary card-rounded">
                <div className="card-body pb-0">
                    <h4 className="card-title card-title-dash text-white mb-4">Status Summary</h4>
                    <div className="row">
                        <div className="col-sm-4">
                            <p className="status-summary-ight-white mb-1">Closed Value</p>
                            <h2 className="text-info">357</h2>
                        </div>
                        <div className="col-sm-8">
                            <div className="status-summary-chart-wrapper pb-4">
                                <div className="chartjs-size-monitor">
                                    <div className="chartjs-size-monitor-expand">
                                        <div className=""></div>
                                    </div>
                                    <div className="chartjs-size-monitor-shrink">
                                        <div className=""></div>
                                    </div>
                                </div>
                                <canvas className="chartjs-render-monitor" id="status-summary" style={{ display: "block", height: "66px", width: "217px" }} width="271" height="82"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}