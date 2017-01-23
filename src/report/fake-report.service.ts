import { Injectable } from '@angular/core';

Injectable()
export class FakeReportService {

    public fakeReports = [
        {
            reporter: {
                forenames: 'Jack',
                surname: 'Johnson',
                address: '72 Juniper Lane',
                town: 'Barham',
                postCode: 'BH7 6YY'
            },
            location: {
                x: 53.914907,
                y: -1.389669
            },
            type: ReportType.Vandalism,
            comment: 'Bad graffiti',
            picture: null
        },
        {
            reporter: {
                forenames: 'Ian',
                surname: 'Ferris',
                address: '12 Oak Lane',
                town: 'Barham',
                postCode: 'BH3 6DY'
            },
            location: {
                x: 53.914907,
                y: -1.389669
            },
            type: ReportType.Drainage,
            comment: 'Blocked drain',
            picture: null
        },
        {
            reporter: {
                forenames: 'Steph',
                surname: 'Lynn',
                address: '18 Ash Crescent',
                town: 'Barham',
                postCode: 'BH7 6YP'
            },
            location: {
                x: 53.914907,
                y: -1.389669
            },
            type: ReportType.Roads,
            comment: 'Faded double yellow lines',
            picture: null
        },
        {
            reporter: {
                forenames: 'Ben',
                surname: 'Jamison',
                address: '11 Juniper Lane',
                town: 'Barham',
                postCode: 'BH7 6YY'
            },
            location: {
                x: 53.914907,
                y: -1.389669
            },
            type: ReportType.Vandalism,
            comment: 'Damaged bus shelter',
            picture: null
        },
    ]
}

export enum ReportType {
    Any,
    Litter,
    Vandalism,
    Drainage,
    Roads,
    Other
}