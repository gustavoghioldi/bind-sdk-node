const sdk = require('../index');

new sdk.Login('gustavoghioldi@gmail.com', '2GYbpFkDlY1H8dp');

var transfer = {
    "origin_id": "55789",
    "to": {
        "label": "AliasPrueba1234"
    },
    "value": {
        "currency": "ARS",
        "amount": 10
    },
    "description": "COMPLETE_TRANS",
    "concept": "VAR",
    "emails": [
        "apibank@poincenot.com"
    ]
};

// sdk.Transfer.create(322, '21-1-99999-2-6', 'owner', transfer)
//     .then(r => console.log(r))
//     .catch(err => console.log(err))
// sdk.Transfer.getAll(322, '21-1-99999-2-6', 'owner')
//     .then(r => console.log(r))
//     .catch(err => console.log(err))

sdk.Transfer.delete(322, '21-1-99999-2-6', 'owner', '1-23257244849-015114433092974-0')
    .then(r => console.log(r))
    .catch(err => console.log(err))
// sdk.Auth.login()
//     .then(r => console.log(r));

// sdk.Account.getViews(322)
//     .then(r => console.log(r));

// sdk.Account.getAccounts(322, 'owner')
//     .then(r => console.log(r));

// sdk.Account.getAccountDetail(322, '21-1-99999-2-6', 'owner')
//     .then(r => console.log(r))

// sdk.Account.getMovements(322, '21-1-99999-2-6', 'owner')
//     .then(r => console.log(r));

// sdk.Account.getAccountByAlias('aliasDeCbuValido')
//     .then(r => console.log(r));

// sdk.Account.getAccountByCBUorCVU('0000033802019012400011')
//     .then(r => console.log(r))
//     .catch(err=>console.log(err))

// sdk.People.isBanked('20312528046')
// .then(r => console.log(r))