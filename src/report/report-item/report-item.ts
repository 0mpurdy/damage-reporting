import { Component, Input } from '@angular/core';

@Component({
    selector: 'report-item',
    templateUrl: './report-item.html',
    styleUrls: ['./report-item.css']
})
export class ReportItem {

    @Input() report;

    public detailButtonText: string = 'Show Detail';
    public showDetail: boolean = false;

    toggleShowDetail() {
        this.showDetail = !this.showDetail;
        switch (this.showDetail) {
            case true:
                this.detailButtonText = 'Hide detail';
                break;
            case false:
                this.detailButtonText = 'Show Detail';
                break;
        }
    }

}
