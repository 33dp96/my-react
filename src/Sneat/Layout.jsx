export default function Layout(){
    return<>
       <div className="layout-page">
          

          <nav className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme" id="layout-navbar">
            <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
              <a className="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
                <i className="bx bx-menu bx-sm"></i>
              </a>
            </div>

            <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
              
              <div className="navbar-nav align-items-center">
                <div className="nav-item d-flex align-items-center">
                  <i className="bx bx-search fs-4 lh-0"></i>
                  <input type="text" className="form-control border-0 shadow-none" placeholder="Search..." aria-label="Search..."/>
                </div>
              </div>
              

              <ul className="navbar-nav flex-row align-items-center ms-auto">
                
                <li className="nav-item lh-1 me-3">
                  <span></span>
                </li>

                
                <li className="nav-item navbar-dropdown dropdown-user dropdown">
                  <a className="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
                    <div className="avatar avatar-online">
                      <img src="../assets/img/avatars/1.png" alt="" className="w-px-40 h-auto rounded-circle"/>
                    </div>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <a className="dropdown-item" href="#">
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar avatar-online">
                              <img src="../assets/img/avatars/1.png" alt="" className="w-px-40 h-auto rounded-circle"/>
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <span className="fw-semibold d-block">John Doe</span>
                            <small className="text-muted">Admin</small>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <div className="dropdown-divider"></div>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="bx bx-user me-2"></i>
                        <span className="align-middle">My Profile</span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="bx bx-cog me-2"></i>
                        <span className="align-middle">Settings</span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <span className="d-flex align-items-center align-middle">
                          <i className="flex-shrink-0 bx bx-credit-card me-2"></i>
                          <span className="flex-grow-1 align-middle">Billing</span>
                          <span className="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">4</span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <div className="dropdown-divider"></div>
                    </li>
                    <li>
                      <a className="dropdown-item" href="auth-login-basic.html">
                        <i className="bx bx-power-off me-2"></i>
                        <span className="align-middle">Log Out</span>
                      </a>
                    </li>
                  </ul>
                </li>
        
              </ul>
            </div>
          </nav>


 
          <div className="content-wrapper">
     

            <div className="container-xxl flex-grow-1 container-p-y">
              <div className="row">
                <div className="col-lg-8 mb-4 order-0">
                  <div className="card">
                    <div className="d-flex align-items-end row">
                      <div className="col-sm-7">
                        <div className="card-body">
                          <h5 className="card-title text-primary">Congratulations John! 🎉</h5>
                          <p className="mb-4">
                            You have done <span className="fw-bold">72%</span> more sales today. Check your new badge in
                            your profile.
                          </p>

                          <a href="javascript:;" className="btn btn-sm btn-outline-primary">View Badges</a>
                        </div>
                      </div>
                      <div className="col-sm-5 text-center text-sm-left">
                        <div className="card-body pb-0 px-0 px-md-4">
                          <img src="../assets/img/illustrations/man-with-laptop-light.png" height="140" alt="View Badge User" data-app-dark-img="illustrations/man-with-laptop-dark.png" data-app-light-img="illustrations/man-with-laptop-light.png"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 order-1">
                  <div className="row">
                    <div className="col-lg-6 col-md-12 col-6 mb-4">
                      <div className="card">
                        <div className="card-body">
                          <div className="card-title d-flex align-items-start justify-content-between">
                            <div className="avatar flex-shrink-0">
                              <img src="../assets/img/icons/unicons/chart-success.png" alt="chart success" className="rounded"/>
                            </div>
                            <div className="dropdown">
                              <button className="btn p-0" type="button" id="cardOpt3" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="bx bx-dots-vertical-rounded"></i>
                              </button>
                              <div className="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt3">
                                <a className="dropdown-item" href="javascript:void(0);">View More</a>
                                <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                              </div>
                            </div>
                          </div>
                          <span className="fw-semibold d-block mb-1">Profit</span>
                          <h3 className="card-title mb-2">$12,628</h3>
                          <small className="text-success fw-semibold"><i className="bx bx-up-arrow-alt"></i> +72.80%</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-6 mb-4">
                      <div className="card">
                        <div className="card-body">
                          <div className="card-title d-flex align-items-start justify-content-between">
                            <div className="avatar flex-shrink-0">
                              <img src="../assets/img/icons/unicons/wallet-info.png" alt="Credit Card" className="rounded"/>
                            </div>
                            <div className="dropdown">
                              <button className="btn p-0" type="button" id="cardOpt6" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="bx bx-dots-vertical-rounded"></i>
                              </button>
                              <div className="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt6">
                                <a className="dropdown-item" href="javascript:void(0);">View More</a>
                                <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                              </div>
                            </div>
                          </div>
                          <span>Sales</span>
                          <h3 className="card-title text-nowrap mb-1">$4,679</h3>
                          <small className="text-success fw-semibold"><i className="bx bx-up-arrow-alt"></i> +28.42%</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="col-12 col-lg-8 order-2 order-md-3 order-lg-2 mb-4">
                  <div className="card">
                    <div className="row row-bordered g-0">
                      <div className="col-md-8">
                        <h5 className="card-header m-0 me-2 pb-3">Total Revenue</h5>
                        <div id="totalRevenueChart" className="px-2" style={{"min-height": "315px"}}><div id="apexchartsjvo2q6um" className="apexcharts-canvas apexchartsjvo2q6um apexcharts-theme-light" style={{width: "522px", height: "300px"}}><svg id="SvgjsSvg1799" width="522" height="300" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev" className="apexcharts-svg" xmlns:data="ApexChartsNS" transform="translate(0, 0)" style={{background: "transparent"}}><foreignObject x="0" y="0" width="522" height="300"><div className="apexcharts-legend apexcharts-align-left apx-legend-position-top" xmlns="http://www.w3.org/1999/xhtml" style={{right: "0px", position: "absolute", left: "0px", top: "4px", "max-height": "150px"}}><div className="apexcharts-legend-series" style={{margin: "2px 10px"}} rel="1" seriesname="2021" data:collapsed="false"><span className="apexcharts-legend-marker" style={{background: "rgb(105, 108, 255) !important", color: "rgb(105, 108, 255)", height: "8px", width: "8px", left: "-3px", top: "0px", "border-width": "0px", "border-color": "rgb(255, 255, 255); border-radius: 12px;"}} rel="1" data:collapsed="false"></span><span className="apexcharts-legend-text" style={{color: "rgb(161, 172, 184)", "font-size": "12px", "font-weight": "400", "font-family": "Helvetica, Arial, sans-serif"}} rel="1" i="0" data:default-text="2021" data:collapsed="false">2021</span></div><div className="apexcharts-legend-series" style={{margin: "2px 10px;"}} rel="2" seriesname="2020" data:collapsed="false"><span className="apexcharts-legend-marker" style={{background: "rgb(3, 195, 236) !important", color: "rgb(3, 195, 236)", height: "8px", width: "8px", left: "-3px", top: "0px", "border-width": "0px", "border-color": "rgb(255, 255, 255)", "border-radius": "12px"}} rel="2" data:collapsed="false"></span><span className="apexcharts-legend-text" style={{color: "rgb(161, 172, 184)", "font-size": "12px", "font-weight": "400", "font-family": "Helvetica, Arial, sans-serif"}} rel="2" i="1" data:default-text="2020" data:collapsed="false">2020</span></div></div>
                        <style type="text/css">	
      .apexcharts-legend {	
        display: "flex",	
        overflow: "auto",	
        padding: "0 10px"	
      }	
      .apexcharts-legend.apx-legend-position-bottom, .apexcharts-legend.apx-legend-position-top {	
        flex-wrap: wrap	
      }	
      .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {	
        flex-direction: column;	
        bottom: 0;	
      }	
      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left, .apexcharts-legend.apx-legend-position-top.apexcharts-align-left, .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {	
        justify-content: flex-start;	
      }	
      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center, .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {	
        justify-content: center;  	
      }	
      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right, .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {	
        justify-content: flex-end;	
      }	
      .apexcharts-legend-series {	
        cursor: pointer;	
        line-height: normal;	
      }	
      .apexcharts-legend.apx-legend-position-bottom .apexcharts-legend-series, .apexcharts-legend.apx-legend-position-top .apexcharts-legend-series{	
        display: flex;	
        align-items: center;	
      }	
      .apexcharts-legend-text {	
        position: relative;	
        font-size: 14px;	
      }	
      .apexcharts-legend-text *, .apexcharts-legend-marker * {	
        pointer-events: none;	
      }	
      .apexcharts-legend-marker {	
        position: relative;	
        display: inline-block;	
        cursor: pointer;	
        margin-right: 3px;	
        border-style: solid;
      }	
      	
      .apexcharts-legend.apexcharts-align-right .apexcharts-legend-series, .apexcharts-legend.apexcharts-align-left .apexcharts-legend-series{	
        display: inline-block;	
      }	
      .apexcharts-legend-series.apexcharts-no-click {	
        cursor: auto;	
      }	
      .apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {	
        display: none !important;	
      }	
      .apexcharts-inactive-legend {	
        opacity: 0.45;	
      }</style></foreignObject><g id="SvgjsG1801" className="apexcharts-inner apexcharts-graphical" transform="translate(55.40000915527344, 52)"><defs id="SvgjsDefs1800"><linearGradient id="SvgjsLinearGradient1805" x1="0" y1="0" x2="0" y2="1"><stop id="SvgjsStop1806" stop-opacity="0.4" stop-color="rgba(216,227,240,0.4)" offset="0"></stop><stop id="SvgjsStop1807" stop-opacity="0.5" stop-color="rgba(190,209,230,0.5)" offset="1"></stop><stop id="SvgjsStop1808" stop-opacity="0.5" stop-color="rgba(190,209,230,0.5)" offset="1"></stop></linearGradient><clipPath id="gridRectMaskjvo2q6um"><rect id="SvgjsRect1810" width="456.59999084472656" height="223.70080061721802" x="-5" y="-3" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath><clipPath id="forecastMaskjvo2q6um"></clipPath><clipPath id="nonForecastMaskjvo2q6um"></clipPath><clipPath id="gridRectMarkerMaskjvo2q6um"><rect id="SvgjsRect1811" width="450.59999084472656" height="221.70080061721802" x="-2" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath></defs><rect id="SvgjsRect1809" width="22.32999954223633" height="217.70080061721802" x="0" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke-dasharray="3" fill="url(#SvgjsLinearGradient1805)" className="apexcharts-xcrosshairs" y2="217.70080061721802" filter="none" fill-opacity="0.9"></rect><g id="SvgjsG1831" className="apexcharts-xaxis" transform="translate(0, 0)"><g id="SvgjsG1832" className="apexcharts-xaxis-texts-g" transform="translate(0, -4)"><text id="SvgjsText1834" font-family="Helvetica, Arial, sans-serif" x="31.899999346051896" y="246.70080061721802" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#a1acb8" className="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1835">Jan</tspan><title>Jan</title></text><text id="SvgjsText1837" font-family="Helvetica, Arial, sans-serif" x="95.69999803815568" y="246.70080061721802" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#a1acb8" className="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1838">Feb</tspan><title>Feb</title></text><text id="SvgjsText1840" font-family="Helvetica, Arial, sans-serif" x="159.49999673025948" y="246.70080061721802" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#a1acb8" className="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1841">Mar</tspan><title>Mar</title></text><text id="SvgjsText1843" font-family="Helvetica, Arial, sans-serif" x="223.29999542236328" y="246.70080061721802" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#a1acb8" className="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1844">Apr</tspan><title>Apr</title></text><text id="SvgjsText1846" font-family="Helvetica, Arial, sans-serif" x="287.09999411446705" y="246.70080061721802" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#a1acb8" className="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1847">May</tspan><title>May</title></text><text id="SvgjsText1849" font-family="Helvetica, Arial, sans-serif" x="350.8999928065708" y="246.70080061721802" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#a1acb8" className="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1850">Jun</tspan><title>Jun</title></text><text id="SvgjsText1852" font-family="Helvetica, Arial, sans-serif" x="414.6999914986746" y="246.70080061721802" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#a1acb8" className="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1853">Jul</tspan><title>Jul</title></text></g></g><g id="SvgjsG1868" className="apexcharts-grid"><g id="SvgjsG1869" className="apexcharts-gridlines-horizontal"><line id="SvgjsLine1871" x1="0" y1="0" x2="446.59999084472656" y2="0" stroke="#eceef1" stroke-dasharray="0" stroke-linecap="butt" className="apexcharts-gridline"></line><line id="SvgjsLine1872" x1="0" y1="43.540160123443606" x2="446.59999084472656" y2="43.540160123443606" stroke="#eceef1" stroke-dasharray="0" stroke-linecap="butt" className="apexcharts-gridline"></line><line id="SvgjsLine1873" x1="0" y1="87.08032024688721" x2="446.59999084472656" y2="87.08032024688721" stroke="#eceef1" stroke-dasharray="0" stroke-linecap="butt" className="apexcharts-gridline"></line><line id="SvgjsLine1874" x1="0" y1="130.62048037033082" x2="446.59999084472656" y2="130.62048037033082" stroke="#eceef1" stroke-dasharray="0" stroke-linecap="butt" className="apexcharts-gridline"></line><line id="SvgjsLine1875" x1="0" y1="174.16064049377442" x2="446.59999084472656" y2="174.16064049377442" stroke="#eceef1" stroke-dasharray="0" stroke-linecap="butt" className="apexcharts-gridline"></line><line id="SvgjsLine1876" x1="0" y1="217.70080061721802" x2="446.59999084472656" y2="217.70080061721802" stroke="#eceef1" stroke-dasharray="0" stroke-linecap="butt" className="apexcharts-gridline"></line></g><g id="SvgjsG1870" className="apexcharts-gridlines-vertical"></g><line id="SvgjsLine1878" x1="0" y1="217.70080061721802" x2="446.59999084472656" y2="217.70080061721802" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt"></line><line id="SvgjsLine1877" x1="0" y1="1" x2="0" y2="217.70080061721802" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt"></line></g><g id="SvgjsG1812" className="apexcharts-bar-series apexcharts-plot-series"><g id="SvgjsG1813" className="apexcharts-series" seriesName="2021" rel="1" data:realIndex="0"><path id="SvgjsPath1815" d="M 20.73499957493373 120.62048037033082L 20.73499957493373 62.24819214813233Q 20.73499957493373 52.24819214813233 30.73499957493373 52.24819214813233L 27.06499911717006 52.24819214813233Q 37.06499911717006 52.24819214813233 37.06499911717006 62.24819214813233L 37.06499911717006 62.24819214813233L 37.06499911717006 120.62048037033082Q 37.06499911717006 130.62048037033082 27.06499911717006 130.62048037033082L 30.73499957493373 130.62048037033082Q 20.73499957493373 130.62048037033082 20.73499957493373 120.62048037033082z" fill="rgba(105,108,255,0.85)" fill-opacity="1" stroke="#ffffff" stroke-opacity="1" stroke-linecap="round" stroke-width="6" stroke-dasharray="0" className="apexcharts-bar-area" index="0" clip-path="url(#gridRectMaskjvo2q6um)" pathTo="M 20.73499957493373 120.62048037033082L 20.73499957493373 62.24819214813233Q 20.73499957493373 52.24819214813233 30.73499957493373 52.24819214813233L 27.06499911717006 52.24819214813233Q 37.06499911717006 52.24819214813233 37.06499911717006 62.24819214813233L 37.06499911717006 62.24819214813233L 37.06499911717006 120.62048037033082Q 37.06499911717006 130.62048037033082 27.06499911717006 130.62048037033082L 30.73499957493373 130.62048037033082Q 20.73499957493373 130.62048037033082 20.73499957493373 120.62048037033082z" pathFrom="M 20.73499957493373 120.62048037033082L 20.73499957493373 120.62048037033082L 37.06499911717006 120.62048037033082L 37.06499911717006 120.62048037033082L 37.06499911717006 120.62048037033082L 37.06499911717006 120.62048037033082L 37.06499911717006 120.62048037033082L 20.73499957493373 120.62048037033082" cy="52.24819214813233" cx="81.53499826703752" j="0" val="18" barHeight="78.37228822219849" barWidth="22.32999954223633"></path><path id="SvgjsPath1816" d="M 84.53499826703752 120.62048037033082L 84.53499826703752 110.1423682839203Q 84.53499826703752 100.1423682839203 94.53499826703752 100.1423682839203L 90.86499780927386 100.1423682839203Q 100.86499780927386 100.1423682839203 100.86499780927386 110.1423682839203L 100.86499780927386 110.1423682839203L 100.86499780927386 120.62048037033082Q 100.86499780927386 130.62048037033082 90.86499780927386 130.62048037033082L 94.53499826703752 130.62048037033082Q 84.53499826703752 130.62048037033082 84.53499826703752 120.62048037033082z" fill="rgba(105,108,255,0.85)" fill-opacity="1" stroke="#ffffff" stroke-opacity="1" stroke-linecap="round" stroke-width="6" stroke-dasharray="0" className="apexcharts-bar-area" index="0" clip-path="url(#gridRectMaskjvo2q6um)" pathTo="M 84.53499826703752 120.62048037033082L 84.53499826703752 110.1423682839203Q 84.53499826703752 100.1423682839203 94.53499826703752 100.1423682839203L 90.86499780927386 100.1423682839203Q 100.86499780927386 100.1423682839203 100.86499780927386 110.1423682839203L 100.86499780927386 110.1423682839203L 100.86499780927386 120.62048037033082Q 100.86499780927386 130.62048037033082 90.86499780927386 130.62048037033082L 94.53499826703752 130.62048037033082Q 84.53499826703752 130.62048037033082 84.53499826703752 120.62048037033082z" pathFrom="M 84.53499826703752 120.62048037033082L 84.53499826703752 120.62048037033082L 100.86499780927386 120.62048037033082L 100.86499780927386 120.62048037033082L 100.86499780927386 120.62048037033082L 100.86499780927386 120.62048037033082L 100.86499780927386 120.62048037033082L 84.53499826703752 120.62048037033082" cy="100.1423682839203" cx="145.3349969591413" j="1" val="7" barHeight="30.478112086410523" barWidth="22.32999954223633"></path><path id="SvgjsPath1817" d="M 148.3349969591413 120.62048037033082L 148.3349969591413 75.31024018516541Q 148.3349969591413 65.31024018516541 158.3349969591413 65.31024018516541L 154.66499650137763 65.31024018516541Q 164.66499650137763 65.31024018516541 164.66499650137763 75.31024018516541L 164.66499650137763 75.31024018516541L 164.66499650137763 120.62048037033082Q 164.66499650137763 130.62048037033082 154.66499650137763 130.62048037033082L 158.3349969591413 130.62048037033082Q 148.3349969591413 130.62048037033082 148.3349969591413 120.62048037033082z" fill="rgba(105,108,255,0.85)" fill-opacity="1" stroke="#ffffff" stroke-opacity="1" stroke-linecap="round" stroke-width="6" stroke-dasharray="0" className="apexcharts-bar-area" index="0" clip-path="url(#gridRectMaskjvo2q6um)" pathTo="M 148.3349969591413 120.62048037033082L 148.3349969591413 75.31024018516541Q 148.3349969591413 65.31024018516541 158.3349969591413 65.31024018516541L 154.66499650137763 65.31024018516541Q 164.66499650137763 65.31024018516541 164.66499650137763 75.31024018516541L 164.66499650137763 75.31024018516541L 164.66499650137763 120.62048037033082Q 164.66499650137763 130.62048037033082 154.66499650137763 130.62048037033082L 158.3349969591413 130.62048037033082Q 148.3349969591413 130.62048037033082 148.3349969591413 120.62048037033082z" pathFrom="M 148.3349969591413 120.62048037033082L 148.3349969591413 120.62048037033082L 164.66499650137763 120.62048037033082L 164.66499650137763 120.62048037033082L 164.66499650137763 120.62048037033082L 164.66499650137763 120.62048037033082L 164.66499650137763 120.62048037033082L 148.3349969591413 120.62048037033082" cy="65.31024018516541" cx="209.1349956512451" j="2" val="15" barHeight="65.31024018516541" barWidth="22.32999954223633"></path><path id="SvgjsPath1818" d="M 212.1349956512451 120.62048037033082L 212.1349956512451 14.354016012344374Q 212.1349956512451 4.354016012344374 222.1349956512451 4.354016012344374L 218.46499519348143 4.354016012344374Q 228.46499519348143 4.354016012344374 228.46499519348143 14.354016012344374L 228.46499519348143 14.354016012344374L 228.46499519348143 120.62048037033082Q 228.46499519348143 130.62048037033082 218.46499519348143 130.62048037033082L 222.1349956512451 130.62048037033082Q 212.1349956512451 130.62048037033082 212.1349956512451 120.62048037033082z" fill="rgba(105,108,255,0.85)" fill-opacity="1" stroke="#ffffff" stroke-opacity="1" stroke-linecap="round" stroke-width="6" stroke-dasharray="0" className="apexcharts-bar-area" index="0" clip-path="url(#gridRectMaskjvo2q6um)" pathTo="M 212.1349956512451 120.62048037033082L 212.1349956512451 14.354016012344374Q 212.1349956512451 4.354016012344374 222.1349956512451 4.354016012344374L 218.46499519348143 4.354016012344374Q 228.46499519348143 4.354016012344374 228.46499519348143 14.354016012344374L 228.46499519348143 14.354016012344374L 228.46499519348143 120.62048037033082Q 228.46499519348143 130.62048037033082 218.46499519348143 130.62048037033082L 222.1349956512451 130.62048037033082Q 212.1349956512451 130.62048037033082 212.1349956512451 120.62048037033082z" pathFrom="M 212.1349956512451 120.62048037033082L 212.1349956512451 120.62048037033082L 228.46499519348143 120.62048037033082L 228.46499519348143 120.62048037033082L 228.46499519348143 120.62048037033082L 228.46499519348143 120.62048037033082L 228.46499519348143 120.62048037033082L 212.1349956512451 120.62048037033082" cy="4.354016012344374" cx="272.9349943433489" j="3" val="29" barHeight="126.26646435798645" barWidth="22.32999954223633"></path><path id="SvgjsPath1819" d="M 275.9349943433489 120.62048037033082L 275.9349943433489 62.24819214813233Q 275.9349943433489 52.24819214813233 285.9349943433489 52.24819214813233L 282.2649938855852 52.24819214813233Q 292.2649938855852 52.24819214813233 292.2649938855852 62.24819214813233L 292.2649938855852 62.24819214813233L 292.2649938855852 120.62048037033082Q 292.2649938855852 130.62048037033082 282.2649938855852 130.62048037033082L 285.9349943433489 130.62048037033082Q 275.9349943433489 130.62048037033082 275.9349943433489 120.62048037033082z" fill="rgba(105,108,255,0.85)" fill-opacity="1" stroke="#ffffff" stroke-opacity="1" stroke-linecap="round" stroke-width="6" stroke-dasharray="0" className="apexcharts-bar-area" index="0" clip-path="url(#gridRectMaskjvo2q6um)" pathTo="M 275.9349943433489 120.62048037033082L 275.9349943433489 62.24819214813233Q 275.9349943433489 52.24819214813233 285.9349943433489 52.24819214813233L 282.2649938855852 52.24819214813233Q 292.2649938855852 52.24819214813233 292.2649938855852 62.24819214813233L 292.2649938855852 62.24819214813233L 292.2649938855852 120.62048037033082Q 292.2649938855852 130.62048037033082 282.2649938855852 130.62048037033082L 285.9349943433489 130.62048037033082Q 275.9349943433489 130.62048037033082 275.9349943433489 120.62048037033082z" pathFrom="M 275.9349943433489 120.62048037033082L 275.9349943433489 120.62048037033082L 292.2649938855852 120.62048037033082L 292.2649938855852 120.62048037033082L 292.2649938855852 120.62048037033082L 292.2649938855852 120.62048037033082L 292.2649938855852 120.62048037033082L 275.9349943433489 120.62048037033082" cy="52.24819214813233" cx="336.73499303545265" j="4" val="18" barHeight="78.37228822219849" barWidth="22.32999954223633"></path><path id="SvgjsPath1820" d="M 339.73499303545265 120.62048037033082L 339.73499303545265 88.3722882221985Q 339.73499303545265 78.3722882221985 349.73499303545265 78.3722882221985L 346.064992577689 78.3722882221985Q 356.064992577689 78.3722882221985 356.064992577689 88.3722882221985L 356.064992577689 88.3722882221985L 356.064992577689 120.62048037033082Q 356.064992577689 130.62048037033082 346.064992577689 130.62048037033082L 349.73499303545265 130.62048037033082Q 339.73499303545265 130.62048037033082 339.73499303545265 120.62048037033082z" fill="rgba(105,108,255,0.85)" fill-opacity="1" stroke="#ffffff" stroke-opacity="1" stroke-linecap="round" stroke-width="6" stroke-dasharray="0" className="apexcharts-bar-area" index="0" clip-path="url(#gridRectMaskjvo2q6um)" pathTo="M 339.73499303545265 120.62048037033082L 339.73499303545265 88.3722882221985Q 339.73499303545265 78.3722882221985 349.73499303545265 78.3722882221985L 346.064992577689 78.3722882221985Q 356.064992577689 78.3722882221985 356.064992577689 88.3722882221985L 356.064992577689 88.3722882221985L 356.064992577689 120.62048037033082Q 356.064992577689 130.62048037033082 346.064992577689 130.62048037033082L 349.73499303545265 130.62048037033082Q 339.73499303545265 130.62048037033082 339.73499303545265 120.62048037033082z" pathFrom="M 339.73499303545265 120.62048037033082L 339.73499303545265 120.62048037033082L 356.064992577689 120.62048037033082L 356.064992577689 120.62048037033082L 356.064992577689 120.62048037033082L 356.064992577689 120.62048037033082L 356.064992577689 120.62048037033082L 339.73499303545265 120.62048037033082" cy="78.3722882221985" cx="400.5349917275564" j="5" val="12" barHeight="52.248192148132325" barWidth="22.32999954223633"></path><path id="SvgjsPath1821" d="M 403.5349917275564 120.62048037033082L 403.5349917275564 101.43433625923157Q 403.5349917275564 91.43433625923157 413.5349917275564 91.43433625923157L 409.86499126979277 91.43433625923157Q 419.86499126979277 91.43433625923157 419.86499126979277 101.43433625923157L 419.86499126979277 101.43433625923157L 419.86499126979277 120.62048037033082Q 419.86499126979277 130.62048037033082 409.86499126979277 130.62048037033082L 413.5349917275564 130.62048037033082Q 403.5349917275564 130.62048037033082 403.5349917275564 120.62048037033082z" fill="rgba(105,108,255,0.85)" fill-opacity="1" stroke="#ffffff" stroke-opacity="1" stroke-linecap="round" stroke-width="6" stroke-dasharray="0" className="apexcharts-bar-area" index="0" clip-path="url(#gridRectMaskjvo2q6um)" pathTo="M 403.5349917275564 120.62048037033082L 403.5349917275564 101.43433625923157Q 403.5349917275564 91.43433625923157 413.5349917275564 91.43433625923157L 409.86499126979277 91.43433625923157Q 419.86499126979277 91.43433625923157 419.86499126979277 101.43433625923157L 419.86499126979277 101.43433625923157L 419.86499126979277 120.62048037033082Q 419.86499126979277 130.62048037033082 409.86499126979277 130.62048037033082L 413.5349917275564 130.62048037033082Q 403.5349917275564 130.62048037033082 403.5349917275564 120.62048037033082z" pathFrom="M 403.5349917275564 120.62048037033082L 403.5349917275564 120.62048037033082L 419.86499126979277 120.62048037033082L 419.86499126979277 120.62048037033082L 419.86499126979277 120.62048037033082L 419.86499126979277 120.62048037033082L 419.86499126979277 120.62048037033082L 403.5349917275564 120.62048037033082" cy="91.43433625923157" cx="464.3349904196602" j="6" val="9" barHeight="39.186144111099246" barWidth="22.32999954223633"></path></g><g id="SvgjsG1822" className="apexcharts-series" seriesName="2020" rel="2" data:realIndex="1"><path id="SvgjsPath1824" d="M 20.73499957493373 150.62048037033082L 20.73499957493373 187.22268853080752Q 20.73499957493373 197.22268853080752 30.73499957493373 197.22268853080752L 27.06499911717006 197.22268853080752Q 37.06499911717006 197.22268853080752 37.06499911717006 187.22268853080752L 37.06499911717006 187.22268853080752L 37.06499911717006 150.62048037033082Q 37.06499911717006 140.62048037033082 27.06499911717006 140.62048037033082L 30.73499957493373 140.62048037033082Q 20.73499957493373 140.62048037033082 20.73499957493373 150.62048037033082z" fill="rgba(3,195,236,0.85)" fill-opacity="1" stroke="#ffffff" stroke-opacity="1" stroke-linecap="round" stroke-width="6" stroke-dasharray="0" className="apexcharts-bar-area" index="1" clip-path="url(#gridRectMaskjvo2q6um)" pathTo="M 20.73499957493373 150.62048037033082L 20.73499957493373 187.22268853080752Q 20.73499957493373 197.22268853080752 30.73499957493373 197.22268853080752L 27.06499911717006 197.22268853080752Q 37.06499911717006 197.22268853080752 37.06499911717006 187.22268853080752L 37.06499911717006 187.22268853080752L 37.06499911717006 150.62048037033082Q 37.06499911717006 140.62048037033082 27.06499911717006 140.62048037033082L 30.73499957493373 140.62048037033082Q 20.73499957493373 140.62048037033082 20.73499957493373 150.62048037033082z" pathFrom="M 20.73499957493373 150.62048037033082L 20.73499957493373 150.62048037033082L 37.06499911717006 150.62048037033082L 37.06499911717006 150.62048037033082L 37.06499911717006 150.62048037033082L 37.06499911717006 150.62048037033082L 37.06499911717006 150.62048037033082L 20.73499957493373 150.62048037033082" cy="177.22268853080752" cx="81.53499826703752" j="0" val="-13" barHeight="-56.602208160476685" barWidth="22.32999954223633"></path><path id="SvgjsPath1825" d="M 84.53499826703752 150.62048037033082L 84.53499826703752 208.99276859252933Q 84.53499826703752 218.99276859252933 94.53499826703752 218.99276859252933L 90.86499780927386 218.99276859252933Q 100.86499780927386 218.99276859252933 100.86499780927386 208.99276859252933L 100.86499780927386 208.99276859252933L 100.86499780927386 150.62048037033082Q 100.86499780927386 140.62048037033082 90.86499780927386 140.62048037033082L 94.53499826703752 140.62048037033082Q 84.53499826703752 140.62048037033082 84.53499826703752 150.62048037033082z" fill="rgba(3,195,236,0.85)" fill-opacity="1" stroke="#ffffff" stroke-opacity="1" stroke-linecap="round" stroke-width="6" stroke-dasharray="0" className="apexcharts-bar-area" index="1" clip-path="url(#gridRectMaskjvo2q6um)" pathTo="M 84.53499826703752 150.62048037033082L 84.53499826703752 208.99276859252933Q 84.53499826703752 218.99276859252933 94.53499826703752 218.99276859252933L 90.86499780927386 218.99276859252933Q 100.86499780927386 218.99276859252933 100.86499780927386 208.99276859252933L 100.86499780927386 208.99276859252933L 100.86499780927386 150.62048037033082Q 100.86499780927386 140.62048037033082 90.86499780927386 140.62048037033082L 94.53499826703752 140.62048037033082Q 84.53499826703752 140.62048037033082 84.53499826703752 150.62048037033082z" pathFrom="M 84.53499826703752 150.62048037033082L 84.53499826703752 150.62048037033082L 100.86499780927386 150.62048037033082L 100.86499780927386 150.62048037033082L 100.86499780927386 150.62048037033082L 100.86499780927386 150.62048037033082L 100.86499780927386 150.62048037033082L 84.53499826703752 150.62048037033082" cy="198.99276859252933" cx="145.3349969591413" j="1" val="-18" barHeight="-78.37228822219849" barWidth="22.32999954223633"></path><path id="SvgjsPath1826" d="M 148.3349969591413 150.62048037033082L 148.3349969591413 169.80662448143008Q 148.3349969591413 179.80662448143008 158.3349969591413 179.80662448143008L 154.66499650137763 179.80662448143008Q 164.66499650137763 179.80662448143008 164.66499650137763 169.80662448143008L 164.66499650137763 169.80662448143008L 164.66499650137763 150.62048037033082Q 164.66499650137763 140.62048037033082 154.66499650137763 140.62048037033082L 158.3349969591413 140.62048037033082Q 148.3349969591413 140.62048037033082 148.3349969591413 150.62048037033082z" fill="rgba(3,195,236,0.85)" fill-opacity="1" stroke="#ffffff" stroke-opacity="1" stroke-linecap="round" stroke-width="6" stroke-dasharray="0" className="apexcharts-bar-area" index="1" clip-path="url(#gridRectMaskjvo2q6um)" pathTo="M 148.3349969591413 150.62048037033082L 148.3349969591413 169.80662448143008Q 148.3349969591413 179.80662448143008 158.3349969591413 179.80662448143008L 154.66499650137763 179.80662448143008Q 164.66499650137763 179.80662448143008 164.66499650137763 169.80662448143008L 164.66499650137763 169.80662448143008L 164.66499650137763 150.62048037033082Q 164.66499650137763 140.62048037033082 154.66499650137763 140.62048037033082L 158.3349969591413 140.62048037033082Q 148.3349969591413 140.62048037033082 148.3349969591413 150.62048037033082z" pathFrom="M 148.3349969591413 150.62048037033082L 148.3349969591413 150.62048037033082L 164.66499650137763 150.62048037033082L 164.66499650137763 150.62048037033082L 164.66499650137763 150.62048037033082L 164.66499650137763 150.62048037033082L 164.66499650137763 150.62048037033082L 148.3349969591413 150.62048037033082" cy="159.80662448143008" cx="209.1349956512451" j="2" val="-9" barHeight="-39.186144111099246" barWidth="22.32999954223633"></path><path id="SvgjsPath1827" d="M 212.1349956512451 150.62048037033082L 212.1349956512451 191.57670454315186Q 212.1349956512451 201.57670454315186 222.1349956512451 201.57670454315186L 218.46499519348143 201.57670454315186Q 228.46499519348143 201.57670454315186 228.46499519348143 191.57670454315186L 228.46499519348143 191.57670454315186L 228.46499519348143 150.62048037033082Q 228.46499519348143 140.62048037033082 218.46499519348143 140.62048037033082L 222.1349956512451 140.62048037033082Q 212.1349956512451 140.62048037033082 212.1349956512451 150.62048037033082z" fill="rgba(3,195,236,0.85)" fill-opacity="1" stroke="#ffffff" stroke-opacity="1" stroke-linecap="round" stroke-width="6" stroke-dasharray="0" className="apexcharts-bar-area" index="1" clip-path="url(#gridRectMaskjvo2q6um)" pathTo="M 212.1349956512451 150.62048037033082L 212.1349956512451 191.57670454315186Q 212.1349956512451 201.57670454315186 222.1349956512451 201.57670454315186L 218.46499519348143 201.57670454315186Q 228.46499519348143 201.57670454315186 228.46499519348143 191.57670454315186L 228.46499519348143 191.57670454315186L 228.46499519348143 150.62048037033082Q 228.46499519348143 140.62048037033082 218.46499519348143 140.62048037033082L 222.1349956512451 140.62048037033082Q 212.1349956512451 140.62048037033082 212.1349956512451 150.62048037033082z" pathFrom="M 212.1349956512451 150.62048037033082L 212.1349956512451 150.62048037033082L 228.46499519348143 150.62048037033082L 228.46499519348143 150.62048037033082L 228.46499519348143 150.62048037033082L 228.46499519348143 150.62048037033082L 228.46499519348143 150.62048037033082L 212.1349956512451 150.62048037033082" cy="181.57670454315186" cx="272.9349943433489" j="3" val="-14" barHeight="-60.956224172821045" barWidth="22.32999954223633"></path><path id="SvgjsPath1828" d="M 275.9349943433489 150.62048037033082L 275.9349943433489 152.39056043205264Q 275.9349943433489 162.39056043205264 285.9349943433489 162.39056043205264L 282.2649938855852 162.39056043205264Q 292.2649938855852 162.39056043205264 292.2649938855852 152.39056043205264L 292.2649938855852 152.39056043205264L 292.2649938855852 150.62048037033082Q 292.2649938855852 140.62048037033082 282.2649938855852 140.62048037033082L 285.9349943433489 140.62048037033082Q 275.9349943433489 140.62048037033082 275.9349943433489 150.62048037033082z" fill="rgba(3,195,236,0.85)" fill-opacity="1" stroke="#ffffff" stroke-opacity="1" stroke-linecap="round" stroke-width="6" stroke-dasharray="0" className="apexcharts-bar-area" index="1" clip-path="url(#gridRectMaskjvo2q6um)" pathTo="M 275.9349943433489 150.62048037033082L 275.9349943433489 152.39056043205264Q 275.9349943433489 162.39056043205264 285.9349943433489 162.39056043205264L 282.2649938855852 162.39056043205264Q 292.2649938855852 162.39056043205264 292.2649938855852 152.39056043205264L 292.2649938855852 152.39056043205264L 292.2649938855852 150.62048037033082Q 292.2649938855852 140.62048037033082 282.2649938855852 140.62048037033082L 285.9349943433489 140.62048037033082Q 275.9349943433489 140.62048037033082 275.9349943433489 150.62048037033082z" pathFrom="M 275.9349943433489 150.62048037033082L 275.9349943433489 150.62048037033082L 292.2649938855852 150.62048037033082L 292.2649938855852 150.62048037033082L 292.2649938855852 150.62048037033082L 292.2649938855852 150.62048037033082L 292.2649938855852 150.62048037033082L 275.9349943433489 150.62048037033082" cy="142.39056043205264" cx="336.73499303545265" j="4" val="-5" barHeight="-21.770080061721803" barWidth="22.32999954223633"></path><path id="SvgjsPath1829" d="M 339.73499303545265 150.62048037033082L 339.73499303545265 204.63875258018496Q 339.73499303545265 214.63875258018496 349.73499303545265 214.63875258018496L 346.064992577689 214.63875258018496Q 356.064992577689 214.63875258018496 356.064992577689 204.63875258018496L 356.064992577689 204.63875258018496L 356.064992577689 150.62048037033082Q 356.064992577689 140.62048037033082 346.064992577689 140.62048037033082L 349.73499303545265 140.62048037033082Q 339.73499303545265 140.62048037033082 339.73499303545265 150.62048037033082z" fill="rgba(3,195,236,0.85)" fill-opacity="1" stroke="#ffffff" stroke-opacity="1" stroke-linecap="round" stroke-width="6" stroke-dasharray="0" className="apexcharts-bar-area" index="1" clip-path="url(#gridRectMaskjvo2q6um)" pathTo="M 339.73499303545265 150.62048037033082L 339.73499303545265 204.63875258018496Q 339.73499303545265 214.63875258018496 349.73499303545265 214.63875258018496L 346.064992577689 214.63875258018496Q 356.064992577689 214.63875258018496 356.064992577689 204.63875258018496L 356.064992577689 204.63875258018496L 356.064992577689 150.62048037033082Q 356.064992577689 140.62048037033082 346.064992577689 140.62048037033082L 349.73499303545265 140.62048037033082Q 339.73499303545265 140.62048037033082 339.73499303545265 150.62048037033082z" pathFrom="M 339.73499303545265 150.62048037033082L 339.73499303545265 150.62048037033082L 356.064992577689 150.62048037033082L 356.064992577689 150.62048037033082L 356.064992577689 150.62048037033082L 356.064992577689 150.62048037033082L 356.064992577689 150.62048037033082L 339.73499303545265 150.62048037033082" cy="194.63875258018496" cx="400.5349917275564" j="5" val="-17" barHeight="-74.01827220985413" barWidth="22.32999954223633"></path><path id="SvgjsPath1830" d="M 403.5349917275564 150.62048037033082L 403.5349917275564 195.93072055549624Q 403.5349917275564 205.93072055549624 413.5349917275564 205.93072055549624L 409.86499126979277 205.93072055549624Q 419.86499126979277 205.93072055549624 419.86499126979277 195.93072055549624L 419.86499126979277 195.93072055549624L 419.86499126979277 150.62048037033082Q 419.86499126979277 140.62048037033082 409.86499126979277 140.62048037033082L 413.5349917275564 140.62048037033082Q 403.5349917275564 140.62048037033082 403.5349917275564 150.62048037033082z" fill="rgba(3,195,236,0.85)" fill-opacity="1" stroke="#ffffff" stroke-opacity="1" stroke-linecap="round" stroke-width="6" stroke-dasharray="0" className="apexcharts-bar-area" index="1" clip-path="url(#gridRectMaskjvo2q6um)" pathTo="M 403.5349917275564 150.62048037033082L 403.5349917275564 195.93072055549624Q 403.5349917275564 205.93072055549624 413.5349917275564 205.93072055549624L 409.86499126979277 205.93072055549624Q 419.86499126979277 205.93072055549624 419.86499126979277 195.93072055549624L 419.86499126979277 195.93072055549624L 419.86499126979277 150.62048037033082Q 419.86499126979277 140.62048037033082 409.86499126979277 140.62048037033082L 413.5349917275564 140.62048037033082Q 403.5349917275564 140.62048037033082 403.5349917275564 150.62048037033082z" pathFrom="M 403.5349917275564 150.62048037033082L 403.5349917275564 150.62048037033082L 419.86499126979277 150.62048037033082L 419.86499126979277 150.62048037033082L 419.86499126979277 150.62048037033082L 419.86499126979277 150.62048037033082L 419.86499126979277 150.62048037033082L 403.5349917275564 150.62048037033082" cy="185.93072055549624" cx="464.3349904196602" j="6" val="-15" barHeight="-65.31024018516541" barWidth="22.32999954223633"></path></g><g id="SvgjsG1814" className="apexcharts-datalabels" data:realIndex="0"></g><g id="SvgjsG1823" className="apexcharts-datalabels" data:realIndex="1"></g></g><line id="SvgjsLine1879" x1="0" y1="0" x2="446.59999084472656" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" stroke-linecap="butt" className="apexcharts-ycrosshairs"></line><line id="SvgjsLine1880" x1="0" y1="0" x2="446.59999084472656" y2="0" stroke-dasharray="0" stroke-width="0" stroke-linecap="butt" className="apexcharts-ycrosshairs-hidden"></line><g id="SvgjsG1881" className="apexcharts-yaxis-annotations"></g><g id="SvgjsG1882" className="apexcharts-xaxis-annotations"></g><g id="SvgjsG1883" className="apexcharts-point-annotations"></g></g><g id="SvgjsG1854" className="apexcharts-yaxis" rel="0" transform="translate(17.400009155273438, 0)"><g id="SvgjsG1855" className="apexcharts-yaxis-texts-g"><text id="SvgjsText1856" font-family="Helvetica, Arial, sans-serif" x="20" y="53.5" text-anchor="end" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#a1acb8" className="apexcharts-text apexcharts-yaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1857">30</tspan><title>30</title></text><text id="SvgjsText1858" font-family="Helvetica, Arial, sans-serif" x="20" y="97.0401601234436" text-anchor="end" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#a1acb8" className="apexcharts-text apexcharts-yaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1859">20</tspan><title>20</title></text><text id="SvgjsText1860" font-family="Helvetica, Arial, sans-serif" x="20" y="140.5803202468872" text-anchor="end" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#a1acb8" className="apexcharts-text apexcharts-yaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1861">10</tspan><title>10</title></text><text id="SvgjsText1862" font-family="Helvetica, Arial, sans-serif" x="20" y="184.1204803703308" text-anchor="end" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#a1acb8" className="apexcharts-text apexcharts-yaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1863">0</tspan><title>0</title></text><text id="SvgjsText1864" font-family="Helvetica, Arial, sans-serif" x="20" y="227.6606404937744" text-anchor="end" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#a1acb8" className="apexcharts-text apexcharts-yaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1865">-10</tspan><title>-10</title></text><text id="SvgjsText1866" font-family="Helvetica, Arial, sans-serif" x="20" y="271.200800617218" text-anchor="end" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#a1acb8" className="apexcharts-text apexcharts-yaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1867">-20</tspan><title>-20</title></text></g></g><g id="SvgjsG1802" className="apexcharts-annotations"></g></svg><div className="apexcharts-tooltip apexcharts-theme-light"><div className="apexcharts-tooltip-title" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"></div><div className="apexcharts-tooltip-series-group" style="order: 1;"><span className="apexcharts-tooltip-marker" style="background-color: rgb(105, 108, 255);"></span><div className="apexcharts-tooltip-text" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"><div className="apexcharts-tooltip-y-group"><span className="apexcharts-tooltip-text-y-label"></span><span className="apexcharts-tooltip-text-y-value"></span></div><div className="apexcharts-tooltip-goals-group"><span className="apexcharts-tooltip-text-goals-label"></span><span className="apexcharts-tooltip-text-goals-value"></span></div><div className="apexcharts-tooltip-z-group"><span className="apexcharts-tooltip-text-z-label"></span><span className="apexcharts-tooltip-text-z-value"></span></div></div></div><div className="apexcharts-tooltip-series-group" style="order: 2;"><span className="apexcharts-tooltip-marker" style="background-color: rgb(3, 195, 236);"></span><div className="apexcharts-tooltip-text" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"><div className="apexcharts-tooltip-y-group"><span className="apexcharts-tooltip-text-y-label"></span><span className="apexcharts-tooltip-text-y-value"></span></div><div className="apexcharts-tooltip-goals-group"><span className="apexcharts-tooltip-text-goals-label"></span><span className="apexcharts-tooltip-text-goals-value"></span></div><div className="apexcharts-tooltip-z-group"><span className="apexcharts-tooltip-text-z-label"></span><span className="apexcharts-tooltip-text-z-value"></span></div></div></div></div><div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light"><div className="apexcharts-yaxistooltip-text"></div></div></div></div>
                      <div className="resize-triggers"><div className="expand-trigger"><div style="width: 539px; height: 386px;"></div></div><div className="contract-trigger"></div></div></div>
                      <div className="col-md-4">
                        <div className="card-body">
                          <div className="text-center">
                            <div className="dropdown">
                              <button className="btn btn-sm btn-outline-primary dropdown-toggle" type="button" id="growthReportId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                2022
                              </button>
                              <div className="dropdown-menu dropdown-menu-end" aria-labelledby="growthReportId">
                                <a className="dropdown-item" href="javascript:void(0);">2021</a>
                                <a className="dropdown-item" href="javascript:void(0);">2020</a>
                                <a className="dropdown-item" href="javascript:void(0);">2019</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="growthChart" style="min-height: 176.95px;"><div id="apexcharts15lxzu6p" className="apexcharts-canvas apexcharts15lxzu6p apexcharts-theme-light" style="width: 269px; height: 176.95px;"><svg id="SvgjsSvg1884" width="269" height="176.9499969482422" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev" className="apexcharts-svg" xmlns:data="ApexChartsNS" transform="translate(0, 0)" style="background: transparent;"><g id="SvgjsG1886" className="apexcharts-inner apexcharts-graphical" transform="translate(27.5, -25)"><defs id="SvgjsDefs1885"><clipPath id="gridRectMask15lxzu6p"><rect id="SvgjsRect1888" width="222" height="285" x="-3" y="-1" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath><clipPath id="forecastMask15lxzu6p"></clipPath><clipPath id="nonForecastMask15lxzu6p"></clipPath><clipPath id="gridRectMarkerMask15lxzu6p"><rect id="SvgjsRect1889" width="220" height="287" x="-2" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath><linearGradient id="SvgjsLinearGradient1894" x1="1" y1="0" x2="0" y2="1"><stop id="SvgjsStop1895" stop-opacity="1" stop-color="rgba(105,108,255,1)" offset="0.3"></stop><stop id="SvgjsStop1896" stop-opacity="0.6" stop-color="rgba(255,255,255,0.6)" offset="0.7"></stop><stop id="SvgjsStop1897" stop-opacity="0.6" stop-color="rgba(255,255,255,0.6)" offset="1"></stop></linearGradient><linearGradient id="SvgjsLinearGradient1905" x1="1" y1="0" x2="0" y2="1"><stop id="SvgjsStop1906" stop-opacity="1" stop-color="rgba(105,108,255,1)" offset="0.3"></stop><stop id="SvgjsStop1907" stop-opacity="0.6" stop-color="rgba(105,108,255,0.6)" offset="0.7"></stop><stop id="SvgjsStop1908" stop-opacity="0.6" stop-color="rgba(105,108,255,0.6)" offset="1"></stop></linearGradient></defs><g id="SvgjsG1890" className="apexcharts-radialbar"><g id="SvgjsG1891"><g id="SvgjsG1892" className="apexcharts-tracks"><g id="SvgjsG1893" className="apexcharts-radialbar-track apexcharts-track" rel="1"><path id="apexcharts-radialbarTrack-0" d="M 73.83506097560974 167.17541022773656 A 68.32987804878049 68.32987804878049 0 1 1 142.16493902439026 167.17541022773656" fill="none" fill-opacity="1" stroke="rgba(255,255,255,0.85)" stroke-opacity="1" stroke-linecap="butt" stroke-width="17.357317073170734" stroke-dasharray="0" className="apexcharts-radialbar-area" data:pathOrig="M 73.83506097560974 167.17541022773656 A 68.32987804878049 68.32987804878049 0 1 1 142.16493902439026 167.17541022773656"></path></g></g><g id="SvgjsG1899"><g id="SvgjsG1904" className="apexcharts-series apexcharts-radial-series" seriesName="Growth" rel="1" data:realIndex="0"><path id="SvgjsPath1909" d="M 73.83506097560974 167.17541022773656 A 68.32987804878049 68.32987804878049 0 1 1 175.95555982735613 100.85758285229481" fill="none" fill-opacity="0.85" stroke="url(#SvgjsLinearGradient1905)" stroke-opacity="1" stroke-linecap="butt" stroke-width="17.357317073170734" stroke-dasharray="5" className="apexcharts-radialbar-area apexcharts-radialbar-slice-0" data:angle="234" data:value="78" index="0" j="0" data:pathOrig="M 73.83506097560974 167.17541022773656 A 68.32987804878049 68.32987804878049 0 1 1 175.95555982735613 100.85758285229481"></path></g><circle id="SvgjsCircle1900" r="54.65121951219512" cx="108" cy="108" className="apexcharts-radialbar-hollow" fill="transparent"></circle><g id="SvgjsG1901" className="apexcharts-datalabels-group" transform="translate(0, 0) scale(1)" style="opacity: 1;"><text id="SvgjsText1902" font-family="Public Sans" x="108" y="123" text-anchor="middle" dominant-baseline="auto" font-size="15px" font-weight="500" fill="#566a7f" className="apexcharts-text apexcharts-datalabel-label" style="font-family: Public Sans;">Growth</text><text id="SvgjsText1903" font-family="Public Sans" x="108" y="99" text-anchor="middle" dominant-baseline="auto" font-size="22px" font-weight="500" fill="#566a7f" className="apexcharts-text apexcharts-datalabel-value" style="font-family: Public Sans;">78%</text></g></g></g></g><line id="SvgjsLine1910" x1="0" y1="0" x2="216" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" stroke-linecap="butt" className="apexcharts-ycrosshairs"></line><line id="SvgjsLine1911" x1="0" y1="0" x2="216" y2="0" stroke-dasharray="0" stroke-width="0" stroke-linecap="butt" className="apexcharts-ycrosshairs-hidden"></line></g><g id="SvgjsG1887" className="apexcharts-annotations"></g></svg><div className="apexcharts-legend"></div></div></div>
                        <div className="text-center fw-semibold pt-3 mb-2">62% Company Growth</div>

                        <div className="d-flex px-xxl-4 px-lg-2 p-4 gap-xxl-3 gap-lg-1 gap-3 justify-content-between">
                          <div className="d-flex">
                            <div className="me-2">
                              <span className="badge bg-label-primary p-2"><i className="bx bx-dollar text-primary"></i></span>
                            </div>
                            <div className="d-flex flex-column">
                              <small>2022</small>
                              <h6 className="mb-0">$32.5k</h6>
                            </div>
                          </div>
                          <div className="d-flex">
                            <div className="me-2">
                              <span className="badge bg-label-info p-2"><i className="bx bx-wallet text-info"></i></span>
                            </div>
                            <div className="d-flex flex-column">
                              <small>2021</small>
                              <h6 className="mb-0">$41.2k</h6>
                            </div>
                          </div>
                        </div>
                      <div className="resize-triggers"><div className="expand-trigger"><div style="width: 270px; height: 386px;"></div></div><div className="contract-trigger"></div></div></div>
                    </div>
                  </div>
                </div>
                <!--/ Total Revenue -->
                <div className="col-12 col-md-8 col-lg-4 order-3 order-md-2">
                  <div className="row">
                    <div className="col-6 mb-4">
                      <div className="card">
                        <div className="card-body">
                          <div className="card-title d-flex align-items-start justify-content-between">
                            <div className="avatar flex-shrink-0">
                              <img src="../assets/img/icons/unicons/paypal.png" alt="Credit Card" className="rounded">
                            </div>
                            <div className="dropdown">
                              <button className="btn p-0" type="button" id="cardOpt4" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="bx bx-dots-vertical-rounded"></i>
                              </button>
                              <div className="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt4">
                                <a className="dropdown-item" href="javascript:void(0);">View More</a>
                                <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                              </div>
                            </div>
                          </div>
                          <span className="d-block mb-1">Payments</span>
                          <h3 className="card-title text-nowrap mb-2">$2,456</h3>
                          <small className="text-danger fw-semibold"><i className="bx bx-down-arrow-alt"></i> -14.82%</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 mb-4">
                      <div className="card">
                        <div className="card-body">
                          <div className="card-title d-flex align-items-start justify-content-between">
                            <div className="avatar flex-shrink-0">
                              <img src="../assets/img/icons/unicons/cc-primary.png" alt="Credit Card" className="rounded">
                            </div>
                            <div className="dropdown">
                              <button className="btn p-0" type="button" id="cardOpt1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="bx bx-dots-vertical-rounded"></i>
                              </button>
                              <div className="dropdown-menu" aria-labelledby="cardOpt1">
                                <a className="dropdown-item" href="javascript:void(0);">View More</a>
                                <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                              </div>
                            </div>
                          </div>
                          <span className="fw-semibold d-block mb-1">Transactions</span>
                          <h3 className="card-title mb-2">$14,857</h3>
                          <small className="text-success fw-semibold"><i className="bx bx-up-arrow-alt"></i> +28.14%</small>
                        </div>
                      </div>
                    </div>
                    <!-- </div>
    <div className="row"> -->
                    <div className="col-12 mb-4">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex justify-content-between flex-sm-row flex-column gap-3" style="position: relative;">
                            <div className="d-flex flex-sm-column flex-row align-items-start justify-content-between">
                              <div className="card-title">
                                <h5 className="text-nowrap mb-2">Profile Report</h5>
                                <span className="badge bg-label-warning rounded-pill">Year 2021</span>
                              </div>
                              <div className="mt-sm-auto">
                                <small className="text-success text-nowrap fw-semibold"><i className="bx bx-chevron-up"></i> 68.2%</small>
                                <h3 className="mb-0">$84,686k</h3>
                              </div>
                            </div>
                            <div id="profileReportChart" style="min-height: 80px;"><div id="apexchartsa474hv4p" className="apexcharts-canvas apexchartsa474hv4p apexcharts-theme-light" style="width: 205px; height: 80px;"><svg id="SvgjsSvg1913" width="205" height="80" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev" className="apexcharts-svg" xmlns:data="ApexChartsNS" transform="translate(0, 0)" style="background: transparent;"><g id="SvgjsG1915" className="apexcharts-inner apexcharts-graphical" transform="translate(0, 0)"><defs id="SvgjsDefs1914"><clipPath id="gridRectMaska474hv4p"><rect id="SvgjsRect1920" width="206" height="85" x="-4.5" y="-2.5" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath><clipPath id="forecastMaska474hv4p"></clipPath><clipPath id="nonForecastMaska474hv4p"></clipPath><clipPath id="gridRectMarkerMaska474hv4p"><rect id="SvgjsRect1921" width="201" height="84" x="-2" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath><filter id="SvgjsFilter1927" filterUnits="userSpaceOnUse" width="200%" height="200%" x="-50%" y="-50%"><feFlood id="SvgjsFeFlood1928" flood-color="#ffab00" flood-opacity="0.15" result="SvgjsFeFlood1928Out" in="SourceGraphic"></feFlood><feComposite id="SvgjsFeComposite1929" in="SvgjsFeFlood1928Out" in2="SourceAlpha" operator="in" result="SvgjsFeComposite1929Out"></feComposite><feOffset id="SvgjsFeOffset1930" dx="5" dy="10" result="SvgjsFeOffset1930Out" in="SvgjsFeComposite1929Out"></feOffset><feGaussianBlur id="SvgjsFeGaussianBlur1931" stdDeviation="3 " result="SvgjsFeGaussianBlur1931Out" in="SvgjsFeOffset1930Out"></feGaussianBlur><feBlend id="SvgjsFeBlend1932" in="SourceGraphic" in2="SvgjsFeGaussianBlur1931Out" mode="normal" result="SvgjsFeBlend1932Out"></feBlend></filter></defs><line id="SvgjsLine1919" x1="0" y1="0" x2="0" y2="80" stroke="#b6b6b6" stroke-dasharray="3" stroke-linecap="butt" className="apexcharts-xcrosshairs" x="0" y="0" width="1" height="80" fill="#b1b9c4" filter="none" fill-opacity="0.9" stroke-width="1"></line><g id="SvgjsG1933" className="apexcharts-xaxis" transform="translate(0, 0)"><g id="SvgjsG1934" className="apexcharts-xaxis-texts-g" transform="translate(0, -4)"></g></g><g id="SvgjsG1942" className="apexcharts-grid"><g id="SvgjsG1943" className="apexcharts-gridlines-horizontal" style="display: none;"><line id="SvgjsLine1945" x1="0" y1="0" x2="197" y2="0" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" className="apexcharts-gridline"></line><line id="SvgjsLine1946" x1="0" y1="20" x2="197" y2="20" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" className="apexcharts-gridline"></line><line id="SvgjsLine1947" x1="0" y1="40" x2="197" y2="40" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" className="apexcharts-gridline"></line><line id="SvgjsLine1948" x1="0" y1="60" x2="197" y2="60" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" className="apexcharts-gridline"></line><line id="SvgjsLine1949" x1="0" y1="80" x2="197" y2="80" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" className="apexcharts-gridline"></line></g><g id="SvgjsG1944" className="apexcharts-gridlines-vertical" style="display: none;"></g><line id="SvgjsLine1951" x1="0" y1="80" x2="197" y2="80" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt"></line><line id="SvgjsLine1950" x1="0" y1="1" x2="0" y2="80" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt"></line></g><g id="SvgjsG1922" className="apexcharts-line-series apexcharts-plot-series"><g id="SvgjsG1923" className="apexcharts-series" seriesName="seriesx1" data:longestSeries="true" rel="1" data:realIndex="0"><path id="SvgjsPath1926" d="M 0 76C 13.79 76 25.61 12 39.4 12C 53.19 12 65.00999999999999 62 78.8 62C 92.59 62 104.41 22 118.2 22C 131.99 22 143.81 38 157.6 38C 171.39 38 183.21 6 197 6" fill="none" fill-opacity="1" stroke="rgba(255,171,0,0.85)" stroke-opacity="1" stroke-linecap="butt" stroke-width="5" stroke-dasharray="0" className="apexcharts-line" index="0" clip-path="url(#gridRectMaska474hv4p)" filter="url(#SvgjsFilter1927)" pathTo="M 0 76C 13.79 76 25.61 12 39.4 12C 53.19 12 65.00999999999999 62 78.8 62C 92.59 62 104.41 22 118.2 22C 131.99 22 143.81 38 157.6 38C 171.39 38 183.21 6 197 6" pathFrom="M -1 120L -1 120L 39.4 120L 78.8 120L 118.2 120L 157.6 120L 197 120"></path><g id="SvgjsG1924" className="apexcharts-series-markers-wrap" data:realIndex="0"><g className="apexcharts-series-markers"><circle id="SvgjsCircle1957" r="0" cx="0" cy="0" className="apexcharts-marker wgnevurg3 no-pointer-events" stroke="#ffffff" fill="#ffab00" fill-opacity="1" stroke-width="2" stroke-opacity="0.9" default-marker-size="0"></circle></g></g></g><g id="SvgjsG1925" className="apexcharts-datalabels" data:realIndex="0"></g></g><line id="SvgjsLine1952" x1="0" y1="0" x2="197" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" stroke-linecap="butt" className="apexcharts-ycrosshairs"></line><line id="SvgjsLine1953" x1="0" y1="0" x2="197" y2="0" stroke-dasharray="0" stroke-width="0" stroke-linecap="butt" className="apexcharts-ycrosshairs-hidden"></line><g id="SvgjsG1954" className="apexcharts-yaxis-annotations"></g><g id="SvgjsG1955" className="apexcharts-xaxis-annotations"></g><g id="SvgjsG1956" className="apexcharts-point-annotations"></g></g><rect id="SvgjsRect1918" width="0" height="0" x="0" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fefefe"></rect><g id="SvgjsG1941" className="apexcharts-yaxis" rel="0" transform="translate(-18, 0)"></g><g id="SvgjsG1916" className="apexcharts-annotations"></g></svg><div className="apexcharts-legend" style="max-height: 40px;"></div><div className="apexcharts-tooltip apexcharts-theme-light"><div className="apexcharts-tooltip-title" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"></div><div className="apexcharts-tooltip-series-group" style="order: 1;"><span className="apexcharts-tooltip-marker" style="background-color: rgb(255, 171, 0);"></span><div className="apexcharts-tooltip-text" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"><div className="apexcharts-tooltip-y-group"><span className="apexcharts-tooltip-text-y-label"></span><span className="apexcharts-tooltip-text-y-value"></span></div><div className="apexcharts-tooltip-goals-group"><span className="apexcharts-tooltip-text-goals-label"></span><span className="apexcharts-tooltip-text-goals-value"></span></div><div className="apexcharts-tooltip-z-group"><span className="apexcharts-tooltip-text-z-label"></span><span className="apexcharts-tooltip-text-z-value"></span></div></div></div></div><div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light"><div className="apexcharts-yaxistooltip-text"></div></div></div></div>
                          <div className="resize-triggers"><div className="expand-trigger"><div style="width: 344px; height: 118px;"></div></div><div className="contract-trigger"></div></div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <!-- Order Statistics -->
                <div className="col-md-6 col-lg-4 col-xl-4 order-0 mb-4">
                  <div className="card h-100">
                    <div className="card-header d-flex align-items-center justify-content-between pb-0">
                      <div className="card-title mb-0">
                        <h5 className="m-0 me-2">Order Statistics</h5>
                        <small className="text-muted">42.82k Total Sales</small>
                      </div>
                      <div className="dropdown">
                        <button className="btn p-0" type="button" id="orederStatistics" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i className="bx bx-dots-vertical-rounded"></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-end" aria-labelledby="orederStatistics">
                          <a className="dropdown-item" href="javascript:void(0);">Select All</a>
                          <a className="dropdown-item" href="javascript:void(0);">Refresh</a>
                          <a className="dropdown-item" href="javascript:void(0);">Share</a>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center mb-3" style="position: relative;">
                        <div className="d-flex flex-column align-items-center gap-1">
                          <h2 className="mb-2">8,258</h2>
                          <span>Total Orders</span>
                        </div>
                        <div id="orderStatisticsChart" style="min-height: 154.583px;"><div id="apexcharts9kw9gxx2" className="apexcharts-canvas apexcharts9kw9gxx2 apexcharts-theme-light" style="width: 130px; height: 154.583px;"><svg id="SvgjsSvg1958" width="130" height="154.58334350585938" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev" className="apexcharts-svg" xmlns:data="ApexChartsNS" transform="translate(0, 0)" style="background: transparent;"><g id="SvgjsG1960" className="apexcharts-inner apexcharts-graphical" transform="translate(-7, 0)"><defs id="SvgjsDefs1959"><clipPath id="gridRectMask9kw9gxx2"><rect id="SvgjsRect1962" width="150" height="173" x="-4.5" y="-2.5" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath><clipPath id="forecastMask9kw9gxx2"></clipPath><clipPath id="nonForecastMask9kw9gxx2"></clipPath><clipPath id="gridRectMarkerMask9kw9gxx2"><rect id="SvgjsRect1963" width="145" height="172" x="-2" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath></defs><g id="SvgjsG1964" className="apexcharts-pie"><g id="SvgjsG1965" transform="translate(0, 0) scale(1)"><circle id="SvgjsCircle1966" r="44.835365853658544" cx="70.5" cy="70.5" fill="transparent"></circle><g id="SvgjsG1967" className="apexcharts-slices"><g id="SvgjsG1968" className="apexcharts-series apexcharts-pie-series" seriesName="Electronic" rel="1" data:realIndex="0"><path id="SvgjsPath1969" d="M 70.5 10.71951219512195 A 59.78048780487805 59.78048780487805 0 0 1 97.63977353321047 123.7648046533095 L 90.85483014990785 110.44860348998213 A 44.835365853658544 44.835365853658544 0 0 0 70.5 25.664634146341456 L 70.5 10.71951219512195 z" fill="rgba(105,108,255,1)" fill-opacity="1" stroke-opacity="1" stroke-linecap="butt" stroke-width="5" stroke-dasharray="0" className="apexcharts-pie-area apexcharts-donut-slice-0" index="0" j="0" data:angle="153" data:startAngle="0" data:strokeWidth="5" data:value="85" data:pathOrig="M 70.5 10.71951219512195 A 59.78048780487805 59.78048780487805 0 0 1 97.63977353321047 123.7648046533095 L 90.85483014990785 110.44860348998213 A 44.835365853658544 44.835365853658544 0 0 0 70.5 25.664634146341456 L 70.5 10.71951219512195 z" stroke="#ffffff"></path></g><g id="SvgjsG1970" className="apexcharts-series apexcharts-pie-series" seriesName="Sports" rel="2" data:realIndex="1"><path id="SvgjsPath1971" d="M 97.63977353321047 123.7648046533095 A 59.78048780487805 59.78048780487805 0 0 1 70.5 130.28048780487805 L 70.5 115.33536585365854 A 44.835365853658544 44.835365853658544 0 0 0 90.85483014990785 110.44860348998213 L 97.63977353321047 123.7648046533095 z" fill="rgba(133,146,163,1)" fill-opacity="1" stroke-opacity="1" stroke-linecap="butt" stroke-width="5" stroke-dasharray="0" className="apexcharts-pie-area apexcharts-donut-slice-1" index="0" j="1" data:angle="27" data:startAngle="153" data:strokeWidth="5" data:value="15" data:pathOrig="M 97.63977353321047 123.7648046533095 A 59.78048780487805 59.78048780487805 0 0 1 70.5 130.28048780487805 L 70.5 115.33536585365854 A 44.835365853658544 44.835365853658544 0 0 0 90.85483014990785 110.44860348998213 L 97.63977353321047 123.7648046533095 z" stroke="#ffffff"></path></g><g id="SvgjsG1972" className="apexcharts-series apexcharts-pie-series" seriesName="Decor" rel="3" data:realIndex="2"><path id="SvgjsPath1973" d="M 70.5 130.28048780487805 A 59.78048780487805 59.78048780487805 0 0 1 10.71951219512195 70.50000000000001 L 25.664634146341456 70.5 A 44.835365853658544 44.835365853658544 0 0 0 70.5 115.33536585365854 L 70.5 130.28048780487805 z" fill="rgba(3,195,236,1)" fill-opacity="1" stroke-opacity="1" stroke-linecap="butt" stroke-width="5" stroke-dasharray="0" className="apexcharts-pie-area apexcharts-donut-slice-2" index="0" j="2" data:angle="90" data:startAngle="180" data:strokeWidth="5" data:value="50" data:pathOrig="M 70.5 130.28048780487805 A 59.78048780487805 59.78048780487805 0 0 1 10.71951219512195 70.50000000000001 L 25.664634146341456 70.5 A 44.835365853658544 44.835365853658544 0 0 0 70.5 115.33536585365854 L 70.5 130.28048780487805 z" stroke="#ffffff"></path></g><g id="SvgjsG1974" className="apexcharts-series apexcharts-pie-series" seriesName="Fashion" rel="4" data:realIndex="3"><path id="SvgjsPath1975" d="M 10.71951219512195 70.50000000000001 A 59.78048780487805 59.78048780487805 0 0 1 70.48956633664653 10.719513105630845 L 70.4921747524849 25.664634829223125 A 44.835365853658544 44.835365853658544 0 0 0 25.664634146341456 70.5 L 10.71951219512195 70.50000000000001 z" fill="rgba(113,221,55,1)" fill-opacity="1" stroke-opacity="1" stroke-linecap="butt" stroke-width="5" stroke-dasharray="0" className="apexcharts-pie-area apexcharts-donut-slice-3" index="0" j="3" data:angle="90" data:startAngle="270" data:strokeWidth="5" data:value="50" data:pathOrig="M 10.71951219512195 70.50000000000001 A 59.78048780487805 59.78048780487805 0 0 1 70.48956633664653 10.719513105630845 L 70.4921747524849 25.664634829223125 A 44.835365853658544 44.835365853658544 0 0 0 25.664634146341456 70.5 L 10.71951219512195 70.50000000000001 z" stroke="#ffffff"></path></g></g></g><g id="SvgjsG1976" className="apexcharts-datalabels-group" transform="translate(0, 0) scale(1)"><text id="SvgjsText1977" font-family="Helvetica, Arial, sans-serif" x="70.5" y="90.5" text-anchor="middle" dominant-baseline="auto" font-size="0.8125rem" font-weight="400" fill="#a1acb8" className="apexcharts-text apexcharts-datalabel-label" style="font-family: Helvetica, Arial, sans-serif;">Weekly</text><text id="SvgjsText1978" font-family="Public Sans" x="70.5" y="71.5" text-anchor="middle" dominant-baseline="auto" font-size="1.5rem" font-weight="400" fill="#566a7f" className="apexcharts-text apexcharts-datalabel-value" style="font-family: Public Sans;">38%</text></g></g><line id="SvgjsLine1979" x1="0" y1="0" x2="141" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" stroke-linecap="butt" className="apexcharts-ycrosshairs"></line><line id="SvgjsLine1980" x1="0" y1="0" x2="141" y2="0" stroke-dasharray="0" stroke-width="0" stroke-linecap="butt" className="apexcharts-ycrosshairs-hidden"></line></g><g id="SvgjsG1961" className="apexcharts-annotations"></g></svg><div className="apexcharts-legend"></div><div className="apexcharts-tooltip apexcharts-theme-dark"><div className="apexcharts-tooltip-series-group" style="order: 1;"><span className="apexcharts-tooltip-marker" style="background-color: rgb(105, 108, 255);"></span><div className="apexcharts-tooltip-text" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"><div className="apexcharts-tooltip-y-group"><span className="apexcharts-tooltip-text-y-label"></span><span className="apexcharts-tooltip-text-y-value"></span></div><div className="apexcharts-tooltip-goals-group"><span className="apexcharts-tooltip-text-goals-label"></span><span className="apexcharts-tooltip-text-goals-value"></span></div><div className="apexcharts-tooltip-z-group"><span className="apexcharts-tooltip-text-z-label"></span><span className="apexcharts-tooltip-text-z-value"></span></div></div></div><div className="apexcharts-tooltip-series-group" style="order: 2;"><span className="apexcharts-tooltip-marker" style="background-color: rgb(133, 146, 163);"></span><div className="apexcharts-tooltip-text" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"><div className="apexcharts-tooltip-y-group"><span className="apexcharts-tooltip-text-y-label"></span><span className="apexcharts-tooltip-text-y-value"></span></div><div className="apexcharts-tooltip-goals-group"><span className="apexcharts-tooltip-text-goals-label"></span><span className="apexcharts-tooltip-text-goals-value"></span></div><div className="apexcharts-tooltip-z-group"><span className="apexcharts-tooltip-text-z-label"></span><span className="apexcharts-tooltip-text-z-value"></span></div></div></div><div className="apexcharts-tooltip-series-group" style="order: 3;"><span className="apexcharts-tooltip-marker" style="background-color: rgb(3, 195, 236);"></span><div className="apexcharts-tooltip-text" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"><div className="apexcharts-tooltip-y-group"><span className="apexcharts-tooltip-text-y-label"></span><span className="apexcharts-tooltip-text-y-value"></span></div><div className="apexcharts-tooltip-goals-group"><span className="apexcharts-tooltip-text-goals-label"></span><span className="apexcharts-tooltip-text-goals-value"></span></div><div className="apexcharts-tooltip-z-group"><span className="apexcharts-tooltip-text-z-label"></span><span className="apexcharts-tooltip-text-z-value"></span></div></div></div><div className="apexcharts-tooltip-series-group" style="order: 4;"><span className="apexcharts-tooltip-marker" style="background-color: rgb(113, 221, 55);"></span><div className="apexcharts-tooltip-text" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"><div className="apexcharts-tooltip-y-group"><span className="apexcharts-tooltip-text-y-label"></span><span className="apexcharts-tooltip-text-y-value"></span></div><div className="apexcharts-tooltip-goals-group"><span className="apexcharts-tooltip-text-goals-label"></span><span className="apexcharts-tooltip-text-goals-value"></span></div><div className="apexcharts-tooltip-z-group"><span className="apexcharts-tooltip-text-z-label"></span><span className="apexcharts-tooltip-text-z-value"></span></div></div></div></div></div></div>
                      <div className="resize-triggers"><div className="expand-trigger"><div style="width: 344px; height: 156px;"></div></div><div className="contract-trigger"></div></div></div>
                      <ul className="p-0 m-0">
                        <li className="d-flex mb-4 pb-1">
                          <div className="avatar flex-shrink-0 me-3">
                            <span className="avatar-initial rounded bg-label-primary"><i className="bx bx-mobile-alt"></i></span>
                          </div>
                          <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div className="me-2">
                              <h6 className="mb-0">Electronic</h6>
                              <small className="text-muted">Mobile, Earbuds, TV</small>
                            </div>
                            <div className="user-progress">
                              <small className="fw-semibold">82.5k</small>
                            </div>
                          </div>
                        </li>
                        <li className="d-flex mb-4 pb-1">
                          <div className="avatar flex-shrink-0 me-3">
                            <span className="avatar-initial rounded bg-label-success"><i className="bx bx-closet"></i></span>
                          </div>
                          <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div className="me-2">
                              <h6 className="mb-0">Fashion</h6>
                              <small className="text-muted">T-shirt, Jeans, Shoes</small>
                            </div>
                            <div className="user-progress">
                              <small className="fw-semibold">23.8k</small>
                            </div>
                          </div>
                        </li>
                        <li className="d-flex mb-4 pb-1">
                          <div className="avatar flex-shrink-0 me-3">
                            <span className="avatar-initial rounded bg-label-info"><i className="bx bx-home-alt"></i></span>
                          </div>
                          <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div className="me-2">
                              <h6 className="mb-0">Decor</h6>
                              <small className="text-muted">Fine Art, Dining</small>
                            </div>
                            <div className="user-progress">
                              <small className="fw-semibold">849k</small>
                            </div>
                          </div>
                        </li>
                        <li className="d-flex">
                          <div className="avatar flex-shrink-0 me-3">
                            <span className="avatar-initial rounded bg-label-secondary"><i className="bx bx-football"></i></span>
                          </div>
                          <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div className="me-2">
                              <h6 className="mb-0">Sports</h6>
                              <small className="text-muted">Football, Cricket Kit</small>
                            </div>
                            <div className="user-progress">
                              <small className="fw-semibold">99</small>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <!--/ Order Statistics -->

                <!-- Expense Overview -->
                <div className="col-md-6 col-lg-4 order-1 mb-4">
                  <div className="card h-100">
                    <div className="card-header">
                      <ul className="nav nav-pills" role="tablist">
                        <li className="nav-item">
                          <button type="button" className="nav-link active" role="tab" data-bs-toggle="tab" data-bs-target="#navs-tabs-line-card-income" aria-controls="navs-tabs-line-card-income" aria-selected="true">
                            Income
                          </button>
                        </li>
                        <li className="nav-item">
                          <button type="button" className="nav-link" role="tab">Expenses</button>
                        </li>
                        <li className="nav-item">
                          <button type="button" className="nav-link" role="tab">Profit</button>
                        </li>
                      </ul>
                    </div>
                    <div className="card-body px-0">
                      <div className="tab-content p-0">
                        <div className="tab-pane fade show active" id="navs-tabs-line-card-income" role="tabpanel" style="position: relative;">
                          <div className="d-flex p-4 pt-3">
                            <div className="avatar flex-shrink-0 me-3">
                              <img src="../assets/img/icons/unicons/wallet.png" alt="User">
                            </div>
                            <div>
                              <small className="text-muted d-block">Total Balance</small>
                              <div className="d-flex align-items-center">
                                <h6 className="mb-0 me-1">$459.10</h6>
                                <small className="text-success fw-semibold">
                                  <i className="bx bx-chevron-up"></i>
                                  42.9%
                                </small>
                              </div>
                            </div>
                          </div>
                          <div id="incomeChart" style="min-height: 215px;"><div id="apexchartsmbowa5wc" className="apexcharts-canvas apexchartsmbowa5wc apexcharts-theme-light" style="width: 391px; height: 215px;"><svg id="SvgjsSvg1981" width="391" height="215" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev" className="apexcharts-svg apexcharts-zoomable" xmlns:data="ApexChartsNS" transform="translate(0, 0)" style="background: transparent;"><g id="SvgjsG1983" className="apexcharts-inner apexcharts-graphical" transform="translate(0, 10)"><defs id="SvgjsDefs1982"><clipPath id="gridRectMaskmbowa5wc"><rect id="SvgjsRect1988" width="379.6916666030884" height="176.70080061721802" x="-3" y="-1" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath><clipPath id="forecastMaskmbowa5wc"></clipPath><clipPath id="nonForecastMaskmbowa5wc"></clipPath><clipPath id="gridRectMarkerMaskmbowa5wc"><rect id="SvgjsRect1989" width="401.6916666030884" height="202.70080061721802" x="-14" y="-14" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath><linearGradient id="SvgjsLinearGradient2009" x1="0" y1="0" x2="0" y2="1"><stop id="SvgjsStop2010" stop-opacity="0.5" stop-color="rgba(105,108,255,0.5)" offset="0"></stop><stop id="SvgjsStop2011" stop-opacity="0.25" stop-color="rgba(195,196,255,0.25)" offset="0.95"></stop><stop id="SvgjsStop2012" stop-opacity="0.25" stop-color="rgba(195,196,255,0.25)" offset="1"></stop></linearGradient></defs><line id="SvgjsLine1987" x1="0" y1="0" x2="0" y2="174.70080061721802" stroke="#b6b6b6" stroke-dasharray="3" stroke-linecap="butt" className="apexcharts-xcrosshairs" x="0" y="0" width="1" height="174.70080061721802" fill="#b1b9c4" filter="none" fill-opacity="0.9" stroke-width="1"></line><g id="SvgjsG2015" className="apexcharts-xaxis" transform="translate(0, 0)"><g id="SvgjsG2016" className="apexcharts-xaxis-texts-g" transform="translate(0, -4)"><text id="SvgjsText2018" font-family="Helvetica, Arial, sans-serif" x="0" y="203.70080061721802" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#a1acb8" className="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan2019"></tspan><title></title></text><text id="SvgjsText2021" font-family="Helvetica, Arial, sans-serif" x="53.38452380044119" y="203.70080061721802" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#a1acb8" className="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan2022">Jan</tspan><title>Jan</title></text><text id="SvgjsText2024" font-family="Helvetica, Arial, sans-serif" x="106.76904760088239" y="203.70080061721802" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#a1acb8" className="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan2025">Feb</tspan><title>Feb</title></text><text id="SvgjsText2027" font-family="Helvetica, Arial, sans-serif" x="160.1535714013236" y="203.70080061721802" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#a1acb8" className="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan2028">Mar</tspan><title>Mar</title></text><text id="SvgjsText2030" font-family="Helvetica, Arial, sans-serif" x="213.5380952017648" y="203.70080061721802" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#a1acb8" className="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan2031">Apr</tspan><title>Apr</title></text><text id="SvgjsText2033" font-family="Helvetica, Arial, sans-serif" x="266.922619002206" y="203.70080061721802" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#a1acb8" className="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan2034">May</tspan><title>May</title></text><text id="SvgjsText2036" font-family="Helvetica, Arial, sans-serif" x="320.30714280264715" y="203.70080061721802" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#a1acb8" className="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan2037">Jun</tspan><title>Jun</title></text><text id="SvgjsText2039" font-family="Helvetica, Arial, sans-serif" x="373.6916666030883" y="203.70080061721802" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#a1acb8" className="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan2040">Jul</tspan><title>Jul</title></text></g></g><g id="SvgjsG2043" className="apexcharts-grid"><g id="SvgjsG2044" className="apexcharts-gridlines-horizontal"><line id="SvgjsLine2046" x1="0" y1="0" x2="373.6916666030884" y2="0" stroke="#eceef1" stroke-dasharray="3" stroke-linecap="butt" className="apexcharts-gridline"></line><line id="SvgjsLine2047" x1="0" y1="43.675200154304505" x2="373.6916666030884" y2="43.675200154304505" stroke="#eceef1" stroke-dasharray="3" stroke-linecap="butt" className="apexcharts-gridline"></line><line id="SvgjsLine2048" x1="0" y1="87.35040030860901" x2="373.6916666030884" y2="87.35040030860901" stroke="#eceef1" stroke-dasharray="3" stroke-linecap="butt" className="apexcharts-gridline"></line><line id="SvgjsLine2049" x1="0" y1="131.02560046291353" x2="373.6916666030884" y2="131.02560046291353" stroke="#eceef1" stroke-dasharray="3" stroke-linecap="butt" className="apexcharts-gridline"></line><line id="SvgjsLine2050" x1="0" y1="174.70080061721802" x2="373.6916666030884" y2="174.70080061721802" stroke="#eceef1" stroke-dasharray="3" stroke-linecap="butt" className="apexcharts-gridline"></line></g><g id="SvgjsG2045" className="apexcharts-gridlines-vertical"></g><line id="SvgjsLine2052" x1="0" y1="174.70080061721802" x2="373.6916666030884" y2="174.70080061721802" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt"></line><line id="SvgjsLine2051" x1="0" y1="1" x2="0" y2="174.70080061721802" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt"></line></g><g id="SvgjsG1990" className="apexcharts-area-series apexcharts-plot-series"><g id="SvgjsG1991" className="apexcharts-series" seriesName="seriesx1" data:longestSeries="true" rel="1" data:realIndex="0"><path id="SvgjsPath2013" d="M 0 174.70080061721802L 0 113.5555204011917C 18.684583330154418 113.5555204011917 34.699940470286776 126.65808044748304 53.384523800441194 126.65808044748304C 72.06910713059561 126.65808044748304 88.08446427072798 87.35040030860898 106.76904760088239 87.35040030860898C 125.45363093103681 87.35040030860898 141.46898807116918 122.2905604320526 160.1535714013236 122.2905604320526C 178.83815473147803 122.2905604320526 194.85351187161035 34.940160123443576 213.53809520176478 34.940160123443576C 232.2226785319192 34.940160123443576 248.23803567205155 104.8204803703308 266.922619002206 104.8204803703308C 285.60720233236043 104.8204803703308 301.62255947249275 65.51280023145674 320.3071428026472 65.51280023145674C 338.9917261328016 65.51280023145674 355.007083272934 91.71792032403944 373.6916666030884 91.71792032403944C 373.6916666030884 91.71792032403944 373.6916666030884 91.71792032403944 373.6916666030884 174.70080061721802M 373.6916666030884 91.71792032403944z" fill="url(#SvgjsLinearGradient2009)" fill-opacity="1" stroke-opacity="1" stroke-linecap="butt" stroke-width="0" stroke-dasharray="0" className="apexcharts-area" index="0" clip-path="url(#gridRectMaskmbowa5wc)" pathTo="M 0 174.70080061721802L 0 113.5555204011917C 18.684583330154418 113.5555204011917 34.699940470286776 126.65808044748304 53.384523800441194 126.65808044748304C 72.06910713059561 126.65808044748304 88.08446427072798 87.35040030860898 106.76904760088239 87.35040030860898C 125.45363093103681 87.35040030860898 141.46898807116918 122.2905604320526 160.1535714013236 122.2905604320526C 178.83815473147803 122.2905604320526 194.85351187161035 34.940160123443576 213.53809520176478 34.940160123443576C 232.2226785319192 34.940160123443576 248.23803567205155 104.8204803703308 266.922619002206 104.8204803703308C 285.60720233236043 104.8204803703308 301.62255947249275 65.51280023145674 320.3071428026472 65.51280023145674C 338.9917261328016 65.51280023145674 355.007083272934 91.71792032403944 373.6916666030884 91.71792032403944C 373.6916666030884 91.71792032403944 373.6916666030884 91.71792032403944 373.6916666030884 174.70080061721802M 373.6916666030884 91.71792032403944z" pathFrom="M -1 218.3760007715225L -1 218.3760007715225L 53.384523800441194 218.3760007715225L 106.76904760088239 218.3760007715225L 160.1535714013236 218.3760007715225L 213.53809520176478 218.3760007715225L 266.922619002206 218.3760007715225L 320.3071428026472 218.3760007715225L 373.6916666030884 218.3760007715225"></path><path id="SvgjsPath2014" d="M 0 113.5555204011917C 18.684583330154418 113.5555204011917 34.699940470286776 126.65808044748304 53.384523800441194 126.65808044748304C 72.06910713059561 126.65808044748304 88.08446427072798 87.35040030860898 106.76904760088239 87.35040030860898C 125.45363093103681 87.35040030860898 141.46898807116918 122.2905604320526 160.1535714013236 122.2905604320526C 178.83815473147803 122.2905604320526 194.85351187161035 34.940160123443576 213.53809520176478 34.940160123443576C 232.2226785319192 34.940160123443576 248.23803567205155 104.8204803703308 266.922619002206 104.8204803703308C 285.60720233236043 104.8204803703308 301.62255947249275 65.51280023145674 320.3071428026472 65.51280023145674C 338.9917261328016 65.51280023145674 355.007083272934 91.71792032403944 373.6916666030884 91.71792032403944" fill="none" fill-opacity="1" stroke="#696cff" stroke-opacity="1" stroke-linecap="butt" stroke-width="2" stroke-dasharray="0" className="apexcharts-area" index="0" clip-path="url(#gridRectMaskmbowa5wc)" pathTo="M 0 113.5555204011917C 18.684583330154418 113.5555204011917 34.699940470286776 126.65808044748304 53.384523800441194 126.65808044748304C 72.06910713059561 126.65808044748304 88.08446427072798 87.35040030860898 106.76904760088239 87.35040030860898C 125.45363093103681 87.35040030860898 141.46898807116918 122.2905604320526 160.1535714013236 122.2905604320526C 178.83815473147803 122.2905604320526 194.85351187161035 34.940160123443576 213.53809520176478 34.940160123443576C 232.2226785319192 34.940160123443576 248.23803567205155 104.8204803703308 266.922619002206 104.8204803703308C 285.60720233236043 104.8204803703308 301.62255947249275 65.51280023145674 320.3071428026472 65.51280023145674C 338.9917261328016 65.51280023145674 355.007083272934 91.71792032403944 373.6916666030884 91.71792032403944" pathFrom="M -1 218.3760007715225L -1 218.3760007715225L 53.384523800441194 218.3760007715225L 106.76904760088239 218.3760007715225L 160.1535714013236 218.3760007715225L 213.53809520176478 218.3760007715225L 266.922619002206 218.3760007715225L 320.3071428026472 218.3760007715225L 373.6916666030884 218.3760007715225"></path><g id="SvgjsG1992" className="apexcharts-series-markers-wrap" data:realIndex="0"><g id="SvgjsG1994" className="apexcharts-series-markers" clip-path="url(#gridRectMarkerMaskmbowa5wc)"><circle id="SvgjsCircle1995" r="6" cx="0" cy="113.5555204011917" className="apexcharts-marker no-pointer-events w88n69lpvg" stroke="transparent" fill="transparent" fill-opacity="1" stroke-width="4" stroke-opacity="0.9" rel="0" j="0" index="0" default-marker-size="6"></circle><circle id="SvgjsCircle1996" r="6" cx="53.384523800441194" cy="126.65808044748304" className="apexcharts-marker no-pointer-events wpu8m8jah" stroke="transparent" fill="transparent" fill-opacity="1" stroke-width="4" stroke-opacity="0.9" rel="1" j="1" index="0" default-marker-size="6"></circle></g><g id="SvgjsG1997" className="apexcharts-series-markers" clip-path="url(#gridRectMarkerMaskmbowa5wc)"><circle id="SvgjsCircle1998" r="6" cx="106.76904760088239" cy="87.35040030860898" className="apexcharts-marker no-pointer-events wdgr0fafg" stroke="transparent" fill="transparent" fill-opacity="1" stroke-width="4" stroke-opacity="0.9" rel="2" j="2" index="0" default-marker-size="6"></circle></g><g id="SvgjsG1999" className="apexcharts-series-markers" clip-path="url(#gridRectMarkerMaskmbowa5wc)"><circle id="SvgjsCircle2000" r="6" cx="160.1535714013236" cy="122.2905604320526" className="apexcharts-marker no-pointer-events wur95o9vm" stroke="transparent" fill="transparent" fill-opacity="1" stroke-width="4" stroke-opacity="0.9" rel="3" j="3" index="0" default-marker-size="6"></circle></g><g id="SvgjsG2001" className="apexcharts-series-markers" clip-path="url(#gridRectMarkerMaskmbowa5wc)"><circle id="SvgjsCircle2002" r="6" cx="213.53809520176478" cy="34.940160123443576" className="apexcharts-marker no-pointer-events whced7nodj" stroke="transparent" fill="transparent" fill-opacity="1" stroke-width="4" stroke-opacity="0.9" rel="4" j="4" index="0" default-marker-size="6"></circle></g><g id="SvgjsG2003" className="apexcharts-series-markers" clip-path="url(#gridRectMarkerMaskmbowa5wc)"><circle id="SvgjsCircle2004" r="6" cx="266.922619002206" cy="104.8204803703308" className="apexcharts-marker no-pointer-events w1k5a7rri" stroke="transparent" fill="transparent" fill-opacity="1" stroke-width="4" stroke-opacity="0.9" rel="5" j="5" index="0" default-marker-size="6"></circle></g><g id="SvgjsG2005" className="apexcharts-series-markers" clip-path="url(#gridRectMarkerMaskmbowa5wc)"><circle id="SvgjsCircle2006" r="6" cx="320.3071428026472" cy="65.51280023145674" className="apexcharts-marker no-pointer-events wua4vzpke" stroke="transparent" fill="transparent" fill-opacity="1" stroke-width="4" stroke-opacity="0.9" rel="6" j="6" index="0" default-marker-size="6"></circle></g><g id="SvgjsG2007" className="apexcharts-series-markers" clip-path="url(#gridRectMarkerMaskmbowa5wc)"><circle id="SvgjsCircle2008" r="6" cx="373.6916666030884" cy="91.71792032403944" className="apexcharts-marker no-pointer-events w3p39nb5k" stroke="#696cff" fill="#ffffff" fill-opacity="1" stroke-width="4" stroke-opacity="0.9" rel="7" j="7" index="0" default-marker-size="6"></circle></g></g></g><g id="SvgjsG1993" className="apexcharts-datalabels" data:realIndex="0"></g></g><line id="SvgjsLine2053" x1="0" y1="0" x2="373.6916666030884" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" stroke-linecap="butt" className="apexcharts-ycrosshairs"></line><line id="SvgjsLine2054" x1="0" y1="0" x2="373.6916666030884" y2="0" stroke-dasharray="0" stroke-width="0" stroke-linecap="butt" className="apexcharts-ycrosshairs-hidden"></line><g id="SvgjsG2055" className="apexcharts-yaxis-annotations"></g><g id="SvgjsG2056" className="apexcharts-xaxis-annotations"></g><g id="SvgjsG2057" className="apexcharts-point-annotations"></g><rect id="SvgjsRect2058" width="0" height="0" x="0" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fefefe" className="apexcharts-zoom-rect"></rect><rect id="SvgjsRect2059" width="0" height="0" x="0" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fefefe" className="apexcharts-selection-rect"></rect></g><rect id="SvgjsRect1986" width="0" height="0" x="0" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fefefe"></rect><g id="SvgjsG2041" className="apexcharts-yaxis" rel="0" transform="translate(-8, 0)"><g id="SvgjsG2042" className="apexcharts-yaxis-texts-g"></g></g><g id="SvgjsG1984" className="apexcharts-annotations"></g></svg><div className="apexcharts-legend" style="max-height: 107.5px;"></div><div className="apexcharts-tooltip apexcharts-theme-light"><div className="apexcharts-tooltip-title" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"></div><div className="apexcharts-tooltip-series-group" style="order: 1;"><span className="apexcharts-tooltip-marker" style="background-color: rgb(105, 108, 255);"></span><div className="apexcharts-tooltip-text" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"><div className="apexcharts-tooltip-y-group"><span className="apexcharts-tooltip-text-y-label"></span><span className="apexcharts-tooltip-text-y-value"></span></div><div className="apexcharts-tooltip-goals-group"><span className="apexcharts-tooltip-text-goals-label"></span><span className="apexcharts-tooltip-text-goals-value"></span></div><div className="apexcharts-tooltip-z-group"><span className="apexcharts-tooltip-text-z-label"></span><span className="apexcharts-tooltip-text-z-value"></span></div></div></div></div><div className="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom apexcharts-theme-light"><div className="apexcharts-xaxistooltip-text" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"></div></div><div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light"><div className="apexcharts-yaxistooltip-text"></div></div></div></div>
                          <div className="d-flex justify-content-center pt-4 gap-2">
                            <div className="flex-shrink-0" style="position: relative;">
                              <div id="expensesOfWeek" style="min-height: 57.7px;"><div id="apexchartsrwptt1i8" className="apexcharts-canvas apexchartsrwptt1i8 apexcharts-theme-light" style="width: 60px; height: 57.7px;"><svg id="SvgjsSvg2060" width="60" height="57.7" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev" className="apexcharts-svg" xmlns:data="ApexChartsNS" transform="translate(0, 0)" style="background: transparent;"><g id="SvgjsG2062" className="apexcharts-inner apexcharts-graphical" transform="translate(-10, -10)"><defs id="SvgjsDefs2061"><clipPath id="gridRectMaskrwptt1i8"><rect id="SvgjsRect2064" width="86" height="87" x="-3" y="-1" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath><clipPath id="forecastMaskrwptt1i8"></clipPath><clipPath id="nonForecastMaskrwptt1i8"></clipPath><clipPath id="gridRectMarkerMaskrwptt1i8"><rect id="SvgjsRect2065" width="84" height="89" x="-2" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath></defs><g id="SvgjsG2066" className="apexcharts-radialbar"><g id="SvgjsG2067"><g id="SvgjsG2068" className="apexcharts-tracks"><g id="SvgjsG2069" className="apexcharts-radialbar-track apexcharts-track" rel="1"><path id="apexcharts-radialbarTrack-0" d="M 40 18.098170731707313 A 21.901829268292687 21.901829268292687 0 1 1 39.99617740968999 18.098171065291247" fill="none" fill-opacity="1" stroke="rgba(236,238,241,0.85)" stroke-opacity="1" stroke-linecap="round" stroke-width="2.0408536585365864" stroke-dasharray="0" className="apexcharts-radialbar-area" data:pathOrig="M 40 18.098170731707313 A 21.901829268292687 21.901829268292687 0 1 1 39.99617740968999 18.098171065291247"></path></g></g><g id="SvgjsG2071"><g id="SvgjsG2075" className="apexcharts-series apexcharts-radial-series" seriesName="seriesx1" rel="1" data:realIndex="0"><path id="SvgjsPath2076" d="M 40 18.098170731707313 A 21.901829268292687 21.901829268292687 0 1 1 22.2810479140526 52.873572242130095" fill="none" fill-opacity="0.85" stroke="rgba(105,108,255,0.85)" stroke-opacity="1" stroke-linecap="round" stroke-width="4.081707317073173" stroke-dasharray="0" className="apexcharts-radialbar-area apexcharts-radialbar-slice-0" data:angle="234" data:value="65" index="0" j="0" data:pathOrig="M 40 18.098170731707313 A 21.901829268292687 21.901829268292687 0 1 1 22.2810479140526 52.873572242130095"></path></g><circle id="SvgjsCircle2072" r="18.881402439024395" cx="40" cy="40" className="apexcharts-radialbar-hollow" fill="transparent"></circle><g id="SvgjsG2073" className="apexcharts-datalabels-group" transform="translate(0, 0) scale(1)" style="opacity: 1;"><text id="SvgjsText2074" font-family="Helvetica, Arial, sans-serif" x="40" y="45" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#697a8d" className="apexcharts-text apexcharts-datalabel-value" style="font-family: Helvetica, Arial, sans-serif;">$65</text></g></g></g></g><line id="SvgjsLine2077" x1="0" y1="0" x2="80" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" stroke-linecap="butt" className="apexcharts-ycrosshairs"></line><line id="SvgjsLine2078" x1="0" y1="0" x2="80" y2="0" stroke-dasharray="0" stroke-width="0" stroke-linecap="butt" className="apexcharts-ycrosshairs-hidden"></line></g><g id="SvgjsG2063" className="apexcharts-annotations"></g></svg><div className="apexcharts-legend"></div></div></div>
                            <div className="resize-triggers"><div className="expand-trigger"><div style="width: 61px; height: 59px;"></div></div><div className="contract-trigger"></div></div></div>
                            <div>
                              <p className="mb-n1 mt-1">Expenses This Week</p>
                              <small className="text-muted">$39 less than last week</small>
                            </div>
                          </div>
                        <div className="resize-triggers"><div className="expand-trigger"><div style="width: 392px; height: 377px;"></div></div><div className="contract-trigger"></div></div></div>
                      </div>
                    </div>
                  </div>
                </div>
                <!--/ Expense Overview -->

                <!-- Transactions -->
                <div className="col-md-6 col-lg-4 order-2 mb-4">
                  <div className="card h-100">
                    <div className="card-header d-flex align-items-center justify-content-between">
                      <h5 className="card-title m-0 me-2">Transactions</h5>
                      <div className="dropdown">
                        <button className="btn p-0" type="button" id="transactionID" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i className="bx bx-dots-vertical-rounded"></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-end" aria-labelledby="transactionID">
                          <a className="dropdown-item" href="javascript:void(0);">Last 28 Days</a>
                          <a className="dropdown-item" href="javascript:void(0);">Last Month</a>
                          <a className="dropdown-item" href="javascript:void(0);">Last Year</a>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <ul className="p-0 m-0">
                        <li className="d-flex mb-4 pb-1">
                          <div className="avatar flex-shrink-0 me-3">
                            <img src="../assets/img/icons/unicons/paypal.png" alt="User" className="rounded">
                          </div>
                          <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div className="me-2">
                              <small className="text-muted d-block mb-1">Paypal</small>
                              <h6 className="mb-0">Send money</h6>
                            </div>
                            <div className="user-progress d-flex align-items-center gap-1">
                              <h6 className="mb-0">+82.6</h6>
                              <span className="text-muted">USD</span>
                            </div>
                          </div>
                        </li>
                        <li className="d-flex mb-4 pb-1">
                          <div className="avatar flex-shrink-0 me-3">
                            <img src="../assets/img/icons/unicons/wallet.png" alt="User" className="rounded">
                          </div>
                          <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div className="me-2">
                              <small className="text-muted d-block mb-1">Wallet</small>
                              <h6 className="mb-0">Mac'D</h6>
                            </div>
                            <div className="user-progress d-flex align-items-center gap-1">
                              <h6 className="mb-0">+270.69</h6>
                              <span className="text-muted">USD</span>
                            </div>
                          </div>
                        </li>
                        <li className="d-flex mb-4 pb-1">
                          <div className="avatar flex-shrink-0 me-3">
                            <img src="../assets/img/icons/unicons/chart.png" alt="User" className="rounded">
                          </div>
                          <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div className="me-2">
                              <small className="text-muted d-block mb-1">Transfer</small>
                              <h6 className="mb-0">Refund</h6>
                            </div>
                            <div className="user-progress d-flex align-items-center gap-1">
                              <h6 className="mb-0">+637.91</h6>
                              <span className="text-muted">USD</span>
                            </div>
                          </div>
                        </li>
                        <li className="d-flex mb-4 pb-1">
                          <div className="avatar flex-shrink-0 me-3">
                            <img src="../assets/img/icons/unicons/cc-success.png" alt="User" className="rounded">
                          </div>
                          <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div className="me-2">
                              <small className="text-muted d-block mb-1">Credit Card</small>
                              <h6 className="mb-0">Ordered Food</h6>
                            </div>
                            <div className="user-progress d-flex align-items-center gap-1">
                              <h6 className="mb-0">-838.71</h6>
                              <span className="text-muted">USD</span>
                            </div>
                          </div>
                        </li>
                        <li className="d-flex mb-4 pb-1">
                          <div className="avatar flex-shrink-0 me-3">
                            <img src="../assets/img/icons/unicons/wallet.png" alt="User" className="rounded">
                          </div>
                          <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div className="me-2">
                              <small className="text-muted d-block mb-1">Wallet</small>
                              <h6 className="mb-0">Starbucks</h6>
                            </div>
                            <div className="user-progress d-flex align-items-center gap-1">
                              <h6 className="mb-0">+203.33</h6>
                              <span className="text-muted">USD</span>
                            </div>
                          </div>
                        </li>
                        <li className="d-flex">
                          <div className="avatar flex-shrink-0 me-3">
                            <img src="../assets/img/icons/unicons/cc-warning.png" alt="User" className="rounded">
                          </div>
                          <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div className="me-2">
                              <small className="text-muted d-block mb-1">Mastercard</small>
                              <h6 className="mb-0">Ordered Food</h6>
                            </div>
                            <div className="user-progress d-flex align-items-center gap-1">
                              <h6 className="mb-0">-92.45</h6>
                              <span className="text-muted">USD</span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <!--/ Transactions -->
              </div>
            </div>
            <!-- / Content -->

            <!-- Footer -->
            <footer className="content-footer footer bg-footer-theme">
              <div className="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
                <div className="mb-2 mb-md-0">
                  ©
                  <script>
                    document.write(new Date().getFullYear());
                  </script>2025
                  , made with ❤️ by
                  <a href="https://themeselection.com" target="_blank" className="footer-link fw-bolder">ThemeSelection</a>
                </div>
                <div>
                  <a href="https://themeselection.com/license/" className="footer-link me-4" target="_blank">License</a>
                  <a href="https://themeselection.com/" target="_blank" className="footer-link me-4">More Themes</a>

                  <a href="https://themeselection.com/demo/sneat-bootstrap-html-admin-template/documentation/" target="_blank" className="footer-link me-4">Documentation</a>

                  <a href="https://github.com/themeselection/sneat-html-admin-template-free/issues" target="_blank" className="footer-link me-4">Support</a>
                </div>
              </div>
            </footer>
            

            <div className="content-backdrop fade"></div>
          </div>
          
        </div>
    </>
}