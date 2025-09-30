export default function TotalVisitors(){
    return(<>
        <div className="col-md-6 col-lg-12 grid-margin stretch-card">
            <div className="card card-rounded">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="d-flex justify-content-between align-items-center mb-2 mb-sm-0">
                                <div className="circle-progress-width">
                                    <div id="totalVisitors" className="progressbar-js-circle pr-2">
                                        <div className="progressbar-text" style={{position: "absolute", left: "50%", top: "50%", padding: "0px", margin: "0px", transform: "translate(-50%, -50%)", color: "rgb(255, 255, 255)", "font-size": "0rem"}}>64</div></div>
                                </div>
                                <div>
                                    <p className="text-small mb-2">Total Visitors</p>
                                    <h4 className="mb-0 fw-bold">26.80%</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="circle-progress-width">
                                    <div id="visitperday" className="progressbar-js-circle pr-2">
                                        <div className="progressbar-text" style={{position: "absolute", left: "50%", top: "50%", padding: "0px", margin: "0px", transform: "translate(-50%, -50%)", color: "rgb(255, 255, 255)", "font-size": "0rem"}}>34</div></div>
                                </div>
                                <div>
                                    <p className="text-small mb-2">Visits per day</p>
                                    <h4 className="mb-0 fw-bold">9065</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}