// mocks.js
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

mock.onGet('/api/data').reply(200, {
    message: 'Mocked response data',
    // Other data as needed
});

mock.onGet(`./backend/api/job-offers/WNwi6CGqp9lgOmD4XeW8kZNdQr4DthiOpCXxOlVrh2XcJGeOuPeQ6d05o5hmyp4X`).reply(200,
    {
        "pageTitle": "Tööpakkumine",
        "businessName": "Marienthali Pruulikoda OÜ",
        "applicant": {
            "firstName": "Mari",
            "lastName": "Maasikas"
        },

        "welcomeText": `Ettevõte Marienthali Pruulikoda OÜ on Teile teinud tööpakkumise.
        Pakkumise tingimustega saate tutvuda allpool. Tööpakkumise vastuvõtmiseks vajutage
        vormi lõpus olevat nuppu 'Kinnita tööpakkumine'. Peale seda suunatakse teid uue
        töötaja isikuandmete ankeeti täitma.`,

        "contract": {
        "contractType": "Employment",
        "positionName": "Turundusjuht",
        "structureTreeFullPath": "Marienthali Pruulikoda OÜ / Müük / Turundus",
        "startDate": "2023-05-29T00:00:00",
        "endDate": null,
        "fteWorkload": 1.0000,
        "remunerationType": "MonthlySalary",
        "remunerationGrossAmount": 2750.0000,
        "remunerationCurrency": "EUR",
        "probationaryPeriodStartDate": "2023-05-29T00:00:00",
        "probationaryPeriodEndDate": "2023-09-28T00:00:00"
        },

        "benefits": [
            "7 kalendripäeva lisapuhkust aastas",
            "Kaugtöö võimalus",
            "Sporditoetus 33 eurot kuus",
            "Confido terviselahenduss",
            "Iga-aastased kogupereüritused ja koosviibimised",
            "Isikliku mobiiltelefoni kasutamise kompensatsioon"
        ]
    }

    )

    mock.onGet(`./backend/api/new-employee-form/WNwi6CGqp9lgOmD4XeW8kZNdQr4DthiOpCXxOlVrh2XcJGeOuPeQ6d05o5hmyp4X`).reply(200,
        {
            "pageTitle": "Uue töötaja isikuandmete ankeet",
            "applicant": {
            "firstName": "Mari",
            "lastName": "Maasikas",
            "nationalIdentityNumber": null,
            "dateOfBirth": null,
            "gender": null
            },
            "contactDetails": {
            "postalAddress": null,
            "phoneNumber": null,
            "emailAddress": "mari.maasikas@supermailer.com"
            },
            "bankAccount": {
            "recipientName": "Mari Maasikas",
            "iban": null
            },
            "emergencyContact": {
            "firstName": null,
            "lastName": null,
            "relationshipType": null,
            "phoneNumber": null,
            "emailAddress": null
            }
        }
    );

// Add more mock endpoints as necessary

export default mock;
