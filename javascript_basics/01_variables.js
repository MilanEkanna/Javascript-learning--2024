const accountId = 8899420176
let accountEmail = "milanmekanna@gmail.com"
var accountPassword = "12345"
accountCity = "Ghaziabad"
let accountState;
// accountId = 2 // not allowed
/*
  ->> Preffered not to use var 
      because of the problem in block scope and functional scope
*/


accountEmail = "mikkumilan@gmail.com"
accountPassword = "12433333333336"
accountCity = "Mumbai"
console.log(accountId);
console.table([accountEmail, accountId, accountPassword, accountCity, accountState])