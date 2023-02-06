const form = document.querySelector("form");
const totalAmount = document.querySelector("#total-amount");
const expenseReport = document.querySelector("#expense-report");
let currentAmount = parseFloat(totalAmount.value);

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const amountInput = document.querySelector("#amount");
    const typeInput = document.querySelector("#type");
    const categoryInput = document.querySelector("#category");
    const noteInput = document.querySelector("#note");

    const amountValue = parseFloat(amountInput.value);
    const typeValue = typeInput.value;
    const categoryValue = categoryInput.value;
    const noteValue = noteInput.value;

    if (typeValue === "Thu") {
        currentAmount += amountValue;
    } else {
        currentAmount -= amountValue;
    }

    totalAmount.value = currentAmount;

    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${amountValue}</td>
    <td>${typeValue}</td>
    <td>${categoryValue}</td>
    <td>${noteValue}</td>
    <td>${new Date().toLocaleDateString()}</td>
  `;

    expenseReport.appendChild(row);

});
