let data = []; // Store users
const tableBody = document.querySelector('#userTable tbody');
const table = document.getElementById('userTable');
const totalWealthDiv = document.getElementById('totalWealth');

// Fetch and add a random user
async function addUser() {
  const res = await fetch('https://randomuser.me/api/');
  const userData = (await res.json()).results[0];

  data.push({
    name: `${userData.name.first} ${userData.name.last}`,
    wealth: Math.floor(Math.random() * 1000000)
  });

  // Show table if hidden
  table.style.display = 'table';
  totalWealthDiv.style.display = 'block';

  updateDOM(data);
}

// Update the table using appendChild
function updateDOM(arr) {
  tableBody.innerHTML = ''; // Clear table first
  arr.forEach(user => {
    const tr = document.createElement('tr');

    const tdName = document.createElement('td');
    tdName.textContent = user.name;

    const tdWealth = document.createElement('td');
    tdWealth.textContent = `$${user.wealth.toLocaleString()}`;

    tr.appendChild(tdName);
    tr.appendChild(tdWealth);

    tableBody.appendChild(tr);
  });
}

// Double money
function doubleMoney() {
  data.forEach(user => user.wealth *= 2);
  updateDOM(data);
}

// Show only millionaires
function showMillionaires() {
  const millionaires = data.filter(user => user.wealth >= 1000000);
  updateDOM(millionaires);
}

// Sort by richest
function sortRichest() {
  data.sort((a, b) => b.wealth - a.wealth);
  updateDOM(data);
}

// Calculate total wealth
function calculateWealth() {
  const total = data.reduce((sum, user) => sum + user.wealth, 0);
  totalWealthDiv.textContent = `💰 Total Wealth: $${total.toLocaleString()}`;
}

// Button events
document.getElementById('addUser').onclick = addUser;
document.getElementById('doubleMoney').onclick = doubleMoney;
document.getElementById('showMillionaires').onclick = showMillionaires;
document.getElementById('sortRichest').onclick = sortRichest;
document.getElementById('calculateWealth').onclick = calculateWealth;
