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
            comment: 'Faded double yellow lines',
            picture: null
        }
    ]
}