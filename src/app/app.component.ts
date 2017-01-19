import { Component } from '@angular/core';

import { FakeReportService } from '../report/fake-report.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Damage Reported';
  public reports = null;

  constructor(public reportService: FakeReportService) { 
    this.reports = reportService.fakeReports;
  }

}
