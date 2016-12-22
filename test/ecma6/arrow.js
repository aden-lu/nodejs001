
var request=accounts.map(function (account) {
    return ajax('/balances/'+account);
})
var request1=accounts.map(account =>ajax('/balances/'+account));

