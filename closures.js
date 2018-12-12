/*
    Closures:

    At first glance, a closure is simply a function defined within another
    function. 
    
    However, the power of closures is derived from the fact that 
    the inner function remembers the environment in which is was created.

    In other words, the inner function has access to the outer function's
    variables and parameters.

    Practical Uses of Closures:

    * Function Factories

    * Namespacing Private Functions

*/


/* Function Factories */
function addition(num1) {
    return function(num2) {
        return num1 + num2;
    };
}
const threePlus = addition(3);
const tenPlus = addition(10);
console.log(threePlus(3));
console.log(tenPlus(5));


/* Namespacing Private Functions */
const bankAccount = (function() {
    let balance = 0;
    function transaction(amount) {
        balance += amount;
    }
    return {
        deposit: function() {
            transaction(100);
        },
        withdraw: function() {
            transaction(-100);
        },
        getBalance: function() {
            return `Current Balance = $${balance}`;
        }
    };
})();
bankAccount.deposit();
bankAccount.deposit();
bankAccount.deposit();
console.log(bankAccount.getBalance());
bankAccount.withdraw();
bankAccount.withdraw();
console.log(bankAccount.getBalance());
