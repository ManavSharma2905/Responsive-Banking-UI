document.addEventListener('DOMContentLoaded', () => {
    const balanceDisplay = document.getElementById('balanceDisplay');
    const depositAmountInput = document.getElementById('depositAmount');
    const depositButton = document.getElementById('depositButton');
    const withdrawAmountInput = document.getElementById('withdrawAmount');
    const withdrawButton = document.getElementById('withdrawButton');

    let currentBalance = 0;

    function updateBalanceDisplay() {
        balanceDisplay.textContent = `$${currentBalance.toFixed(2)}`;

        if (currentBalance < 0) {
            balanceDisplay.classList.add('negative');
        } else {
            balanceDisplay.classList.remove('negative');
        }
    }

    depositButton.addEventListener('click', () => {
        const depositAmount = parseFloat(depositAmountInput.value);

        if (isNaN(depositAmount) || depositAmount <= 0) {
            alert('Please enter a valid positive deposit amount.');
            return;
        }

        currentBalance += depositAmount;
        updateBalanceDisplay();
        depositAmountInput.value = '';
    });

    withdrawButton.addEventListener('click', () => {
        const withdrawAmount = parseFloat(withdrawAmountInput.value);

        if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
            alert('Please enter a valid positive withdrawal amount.');
            return;
        }

        if (withdrawAmount > currentBalance) {
            alert('Insufficient funds for this withdrawal.');
            return;
        }

        currentBalance -= withdrawAmount;
        updateBalanceDisplay();
        withdrawAmountInput.value = '';
    });

    updateBalanceDisplay();
});