var ex = require('excel4node');
var wb = new ex.Workbook();
var ws = wb.addWorksheet();

ws.cell(1, 1).string('codice');
ws.cell(1, 2).string('materiale');

var materiale = ["doppini", "fusibili", "prese elettriche", "lampadine"];

var riga = 2;
var codice = 1;

for (var i = 0; i < materiale.length; i++) {
    ws.cell(riga, 1).number(codice);
    ws.cell(riga, 2).string(materiale[i]);
    riga++;
    codice++;
}

wb.write("materiale.xlsx");