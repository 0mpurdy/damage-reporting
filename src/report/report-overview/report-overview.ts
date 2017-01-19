import { Component, Input } from '@angular/core';

@Component({
  selector: 'report-overview',
  templateUrl: './report-overview.html',
})
export class ReportOverview {
  
  @Input() reports;

}
