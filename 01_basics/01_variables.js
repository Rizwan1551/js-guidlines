const accountId = 112233
let acountEmail = "rizwan@google.com"
var accountPassword = "12345"
accountCity = "Lahore"
let accountState;


// accountId = 2 // not allowed

accountEmail = "Rizz"
accountPassword = "212121"
accountCity = "Burewala"

console.log(accountId);

/*
prefer not to use var because of issue in block scope and functional scope
*/
console.table([accountId, accountPassword, accountEmail, accountCity, accountState])