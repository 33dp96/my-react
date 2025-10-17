export default function StockItem(){
    return<>
        <div className="col-md-4 grid-margin stretch-card">
            <div className="card">
                <div className="card-body"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
                    <div className="d-flex align-items-center justify-content-between justify-content-md-center justify-content-xl-between flex-wrap mb-4">
                        <div>
                            <p className="mb-2 text-md-center text-lg-left">Total Expenses</p>
                            <h1 className="mb-0">8742</h1>
                        </div>
                        <i className="typcn typcn-briefcase icon-xl text-secondary"></i>
                    </div>
                    <canvas id="expense-chart" height="112" style={{display: "block", height: "90px", width: "339px"}} width="423" className="chartjs-render-monitor"></canvas>
                </div>
            </div>
        </div>
    </>
}