  
  export function createTable(data) {
    const table = document.createElement('table');
    const headerRow = table.insertRow();
    const headerCells = ['Brand', 'Material', 'Warranty', 'Color', 'Size', 'Weight'];
  
    headerCells.forEach(headerText => {
      const th = document.createElement('th');
      th.textContent = headerText;
      headerRow.appendChild(th);
    });
  
    data.forEach(person => {
      const row = table.insertRow();
      Object.values(person).forEach(value => {
        const cell = document.createElement('td');
        cell.textContent = value;
        row.appendChild(cell);
      });
    });
  
    document.getElementById('details').body.appendChild(table);
  }
  
  
  