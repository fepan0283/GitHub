let expenses = JSON.parse(localStorage.getItem('expenses'));
let totalExpenses = 0;
totalExpenses = totalExpenses.toFixed(2);
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

function updateExpenseTable() {
    expenses = JSON.parse(localStorage.getItem('expenses'));
    // add first total row
    document.getElementById('expense-table').innerHTML = "";
    document.getElementById('expense-table').innerHTML += `
    <tr>
        <th>Date</th>
        <th>Description</th>
        <th>Category</th>
        <th>Amount</th>
        <th style="width: 10px"></th>
    </tr>
    <tr class="totals-row">
        <td >TOTAL</td>
        <td ></td>
        <td ></td>
        <td >${totalExpenses} €</td>
        <td style="width: 10px"></td>
    </tr>`;
    // add all other rows from local storage
    for (i = 0; i < expenses.length; i++) {
        document.getElementById('expense-table').innerHTML += `
        <tr>
            <td id="entry${i}">${expenses[i]["date"]}</td>
            <td id="entry${i}">${expenses[i]["description"]}</td>
            <td id="entry${i}">${expenses[i]["category"]}</td>
            <td id="entry${i}">${expenses[i]["amount"]} €</td>
            <td><img id="entry${i}" onclick="deleteEntry(this.id)" src="/img/x.png"></td>
        </tr>
        `;
    }
    updateMonthlyTable()
    updateCategoryTable()
    calculateTotalExpenses()
}

function addEntryToArray() {
    document.getElementById('category-table').innerHTML = "";
    // add new entry to expenses Array in local storage
    let newEntry = {};
    date = document.getElementById('date').value;
    description = document.getElementById('description').value;
    category = document.getElementById('category').value;
    amount = parseFloat(document.getElementById('amount').value);
    newEntry["date"] = date;
    newEntry["description"] = description;
    newEntry["amount"] = amount;
    newEntry["category"] = category;
    expenses.push(newEntry);
    // set inputs to zero
    document.getElementById('date').value = "";
    document.getElementById('description').value = "";
    document.getElementById('category').value = "";
    document.getElementById('amount').value = "";
    // save to localStorage
    localStorage.setItem("expenses", JSON.stringify(expenses));
    calculateTotalExpenses();
    updateExpenseTable();
}

function deleteEntry(id) {
    let entrynumber = id.slice(-1);
    expenses.splice(entrynumber);
    localStorage.setItem("expenses", JSON.stringify(expenses));
    expenses = JSON.parse(localStorage.getItem('expenses'));
    calculateTotalExpenses();
    updateExpenseTable();
    updateMonthlyTable();
    updateCategoryTable();
    console.log(expenses);
}

function updateMonthlyTable(totalAmount) {
    // update all months in table
    expenses = JSON.parse(localStorage.getItem('expenses'));
    document.getElementById('total-monthly-expenses').innerHTML = totalAmount;
    let monthExpenses = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (j = 1; j < 13; j++) {
        for (i = 0; i < expenses.length; i++) {
            let month = parseInt(expenses[i].date[3] + expenses[i].date[4]);
            if (month === j) {
                monthExpenses[j] += expenses[i].amount;
                document.getElementById(`month${j}`).innerHTML = monthExpenses[j] + " €";
            }
        }
    }
    document.getElementById('total-monthly-expenses').innerHTML = totalExpenses + " €";

}

function updateCategoryTable() {
    // get unique list of categories
    let categories = [];
    for (i = 0; i < expenses.length; i++) {
        if (categories.includes(expenses[i].category)) {
        } else {
            categories.push(expenses[i].category)
        }
    }
    console.log(categories);
    // create table of categories
    document.getElementById("category-table").innerHTML = "";
    document.getElementById("category-table").innerHTML += `
        <tr>
            <th>Category</th>
            <th class="text-align-right">Amount</th>
        </tr>
        <tr class="totals-row">
            <td>TOTAL</td>
            <td class="text-align-right" id="total-category">0.00 €</td>
        </tr>
`;
    for (i = 0; i < categories.length; i++) {
        document.getElementById("category-table").innerHTML += `
        <tr>
            <td>${categories[i]}</td>
            <td class="text-align-right" id="category${i}">0</td>
        </tr>
        `;
    }
    // get totals for each category
    let sums = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (i = 0; i < categories.length; i++) {
        for (j = 0; j < expenses.length; j++) {
            if (categories[i] === expenses[j].category) {
                sums[i] += expenses[j].amount;
            }
        }
        document.getElementById('category' + i).innerHTML = sums[i] + " €";
    }
    document.getElementById('total-category').innerHTML = totalExpenses + " €";
}

function calculateTotalExpenses() {
    expenses = JSON.parse(localStorage.getItem('expenses'));
    totalExpenses = 0;
    for (i = 0; i < expenses.length; i++) {
        totalExpenses += parseFloat(expenses[i].amount);
    }
}