
  const dataTable = document.getElementById("dataTable");
  const data = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "Bob", age: 22 }
  ];

  const headerRow = document.createElement("tr");
  for (const key in data[0]) {
    const th = document.createElement("th");
    th.textContent = key;
    headerRow.appendChild(th);
  }
  dataTable.appendChild(headerRow);

  data.forEach(item => {
    const row = document.createElement("tr");
    for (const key in item) {
      const cell = document.createElement("td");
      cell.textContent = item[key];
      row.appendChild(cell);
    }
    dataTable.appendChild(row);
  });

