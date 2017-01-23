import { Component, Input } from '@angular/core';

import { ReportType } from '../fake-report.service';

@Component({
    selector: 'report-overview',
    templateUrl: './report-overview.html',
})
export class ReportOverview {

    @Input() reports;

    public ReportType = ReportType;
    public reportType: ReportType = ReportType.Any;

    // ngAfterViewChecked() {
    //     console.log('currentReportType =' + this.reportType);
    //     console.log('Is any =' + (this.reportType == ReportType.Any));
    // }

}
