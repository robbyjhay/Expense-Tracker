let totalAmount = 0;

document.getElementById('expense-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('expense-name').value;
    const amount = parseFloat(document.getElementById('expense-amount').value);

    const li = document.createElement('li');
    li.textContent = `${name}: N${amount.toFixed(2)}`;
    document.getElementById('expense-list').appendChild(li);

    totalAmount += amount;
    document.getElementById('total-amount').textContent = `Total: N${totalAmount.toFixed(2)}`;

    document.getElementById('expense-name').value = '';
    document.getElementById('expense-amount').value = '';
});
