export default function BaseItem({ title, subtitle}) {
    return <>
        <div class="card">
            <div class="card-body d-flex flex-column justify-content-between">
                <div class="chartjs-size-monitor">
                    <div class="chartjs-size-monitor-expand">
                        <div class=""></div>
                    </div>
                    <div class="chartjs-size-monitor-shrink">
                        <div class=""></div>
                    </div>
                </div>
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <p class="mb-0 text-muted">{title}</p>
                    <p class="mb-0 text-muted">{title}</p>
                </div>
                <h4>{subtitle}</h4>
                <canvas id="transactions-chart" class="mt-auto chartjs-render-monitor" height="81" style={{display: "block", height: "65px", width: "235px"}} width="293"></canvas>
            </div>
        </div>
    </>
}