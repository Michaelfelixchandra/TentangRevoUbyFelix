document.getElementById("messageLink").addEventListener("click", function() {
  document.getElementById("message").scrollIntoView({ behavior: 'smooth' });
});

function saveData() {
  var tanggal = document.getElementById("dob").value;
  var nama = document.getElementById("name").value;
  var jenisKelamin = document.getElementById("gender").value;
  var pesan = document.getElementById("w3review").value;

  var data = {
    Tanggal: tanggal,
    Nama: nama,
    "Jenis Kelamin": jenisKelamin,
    Pesan: pesan,
  };

  var dataArray = [];
  dataArray.push(data);

  var workbook = XLSX.utils.book_new();
  var worksheet = XLSX.utils.json_to_sheet(dataArray);
  XLSX.utils.book_append_sheet(workbook, worksheet, "Data");

  var excelFile = XLSX.write(workbook, { type: "binary", bookType: "xlsx" });

  function s2ab(s) {
    var buf = new ArrayBuffer(s.length);
    var view = new Uint8Array(buf);
    for (var i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xff;
    return buf;
  }

  var blob = new Blob([s2ab(excelFile)], { type: "application/octet-stream" });

  var downloadLink = document.createElement("a");
  downloadLink.href = URL.createObjectURL(blob);
  downloadLink.download = "data.xlsx";
  downloadLink.click();
}


function saveProfile() {
  var tanggal = document.getElementById("dob").value;
  var nama = document.getElementById("name").value;
  var jenisKelamin = document.getElementById("gender").value;
  var pesan = document.getElementById("w3review").value;

  var resultDiv = document.getElementById("result");

  var table = document.createElement("table");
  table.classList.add("profile-table");
  var tableBody = document.createElement("tbody");

  var row1 = document.createElement("tr");
  var row1Cell1 = document.createElement("td");
  row1Cell1.textContent = "Tanggal";
  var row1Cell2 = document.createElement("td");
  row1Cell2.textContent = tanggal;
  row1.appendChild(row1Cell1);
  row1.appendChild(row1Cell2);

  var row2 = document.createElement("tr");
  var row2Cell1 = document.createElement("td");
  row2Cell1.textContent = "Nama";
  var row2Cell2 = document.createElement("td");
  row2Cell2.textContent = nama;
  row2.appendChild(row2Cell1);
  row2.appendChild(row2Cell2);

  var row3 = document.createElement("tr");
  var row3Cell1 = document.createElement("td");
  row3Cell1.textContent = "Jenis Kelamin";
  var row3Cell2 = document.createElement("td");
  row3Cell2.textContent = jenisKelamin;
  row3.appendChild(row3Cell1);
  row3.appendChild(row3Cell2);

  var row4 = document.createElement("tr");
  var row4Cell1 = document.createElement("td");
  row4Cell1.textContent = "Pesan";
  var row4Cell2 = document.createElement("td");
  row4Cell2.textContent = pesan;
  row4.appendChild(row4Cell1);
  row4.appendChild(row4Cell2);

  tableBody.appendChild(row1);
  tableBody.appendChild(row2);
  tableBody.appendChild(row3);
  tableBody.appendChild(row4);

  table.appendChild(tableBody);
  resultDiv.innerHTML = "";
  resultDiv.appendChild(table);
}

  function hapusKonten() {
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "";
  }