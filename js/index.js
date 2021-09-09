// SideBar
let sideBar = document.getElementById("mobile-nav");
let openSidebar = document.getElementById("openSideBar");
let closeSidebar = document.getElementById("closeSideBar");
sideBar.style.transform = "translateX(-260px)";

function sidebarHandler(flag) {
    if (flag) {
        sideBar.style.transform = "translateX(0px)";
        openSidebar.classList.add("hidden");
        closeSidebar.classList.remove("hidden");
    } else {
        sideBar.style.transform = "translateX(-260px)";
        closeSidebar.classList.add("hidden");
        openSidebar.classList.remove("hidden");
    }
}


// common getInput function
function getInputValue(inputID) {
    const inputField = document.getElementById(inputID);
    const inputFieldText = inputField.value;
    const inputFieldValue = parseFloat(inputFieldText);

    // clear inputField
    inputField.value = '';

    return inputFieldValue;
}

// common addition function


// deposite & balance
document.getElementById('deposit-btn').addEventListener('click', function () {

    // input deposite
    const depositAmount = getInputValue('inputDeposit');
    // const inputFieldText = inputField.value;
    // const inputField = parseFloat(inputFieldText);


    if (depositAmount > 0) {
        // deposit display
        const depositDisplay = document.getElementById('depositDisplay');
        const depositBalanceText = depositDisplay.innerText;
        const depositBalance = parseFloat(depositBalanceText);
        depositDisplay.innerText = depositBalance + depositAmount;

        // balance display
        const displayBalance = document.getElementById('displayBalance');
        const balanceText = displayBalance.innerText;
        const balance = parseFloat(balanceText);
        displayBalance.innerText = depositAmount + balance;
    }

})

// withdraw
document.getElementById('withdraw-btn').addEventListener('click', function () {

    // input withdraw
    const inputWithdraw = getInputValue('inputWithdraw');
    // const withdrawText = inputWithdraw.value;
    // const withdraw = parseFloat(withdrawText);

    if (inputWithdraw > 0) {
        // display withdraw
        const withdrawDisplay = document.getElementById('displayWithdraw');
        const withdrawAmountText = withdrawDisplay.innerText;
        const withdrawAmount = parseFloat(withdrawAmountText);
        const withdrawSum = inputWithdraw + withdrawAmount;
        withdrawDisplay.innerText = withdrawSum;

        const remainingBalance = document.getElementById('displayBalance');
        const remainingBalanceText = remainingBalance.innerText;
        const remainingBalanceParse = parseFloat(remainingBalanceText);
        const remainingBalanceSum = remainingBalanceParse - withdrawSum;
        remainingBalance.innerText = remainingBalanceSum;

    }


})