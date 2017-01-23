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
                postCode: 'BH76YY'
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
                forenames: 'Jack',
                surname: 'Johnson',
                address: '72 Juniper Lane',
                town: 'Barham',
                postCode: 'BH76YY'
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
                forenames: 'Jack',
                surname: 'Johnson',
                address: '72 Juniper Lane',
                town: 'Barham',
                postCode: 'BH76YY'
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
                forenames: 'Jack',
                surname: 'Johnson',
                address: '72 Juniper Lane',
                town: 'Barham',
                postCode: 'BH76YY'
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