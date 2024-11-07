export default function json2html(data) {
  const headers = ["Name", "Age", "Gender"];
  
  let table = `<table data-user="jsriharshasharma@gmail.com"><thead><tr>`;
  
  // Add table headers
  headers.forEach(header => {
    table += `<th>${header}</th>`;
  });
  
  table += `</tr></thead><tbody>`;
  
  // Add table rows
  data.forEach(row => {
    table += `<tr>`;
    headers.forEach(header => {
      table += `<td>${row[header] !== undefined ? row[header] : ''}</td>`;
    });
    table += `</tr>`;
  });
  
  table += `</tbody></table>`;
  
  return table;
}
