function updateInventory(itemId, newQty) {

  var spreadsheet = SpreadsheetApp.openById("1nRtJXTQCguCdWdQrJOTHD5o7qi8YWUjZDhAgMTHPl50");

  Logger.log("Available Sheets: " + spreadsheet.getSheets().map(s => s.getName()));

  var sheet = spreadsheet.getSheetByName("Inventory_Master");

  if (!sheet) {
    return {
      status: "error",
      message: "Sheet not found"
    };
  }

  var data = sheet.getDataRange().getValues();

  for (var i = 1; i < data.length; i++) {

    if (data[i][0].toString().trim() === itemId.toString().trim()) {

      var rowNumber = i + 1;

      sheet.getRange(rowNumber, 4).setValue(newQty);
      sheet.getRange(rowNumber, 10).setValue("");

      Logger.log("Updated Row: " + rowNumber);

      return {
        status: "success",
        row: rowNumber
      };
    }
  }

  return {
    status: "error",
    message: "Item not found"
  };
}
