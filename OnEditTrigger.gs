function onEdit(e) {
  // Only allow installable trigger (not simple trigger)
  if (e.authMode !== ScriptApp.AuthMode.FULL) return;

  var sheet = e.source.getActiveSheet();
  var range = e.range;

  var triggerCol = 10;

  if (range.getColumn() == triggerCol) {

    var row = range.getRow();
    var isChecked = sheet.getRange(row, triggerCol).getValue();

    if (isChecked === true) {

      var itemId = sheet.getRange(row, 1).getValue();
      var requestedQuantity = sheet.getRange(row, 9).getValue();

      var payload = {
        itemId: itemId,
        requestedQuantity: requestedQuantity,
      };

      var options = {
        method: "post",
        contentType: "application/json",
        payload: JSON.stringify(payload),
        headers: {
          "Appian-api-key": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1MjQ0YTZjNy1kMDhkLTMwMzAtZjdhMy0xODZhMmViZjYxZmYifQ.k75mgK-BwObVe6CY_k9ujG3Hmf7R7pW8cS-L70iJJzs"
        }
      };

      try {
        Logger.log("Calling API...");
        var response = UrlFetchApp.fetch(
          "https://appcinodev.appiancloud.com/suite/webapi/sendEmail",
          options
        );
        Logger.log(response.getContentText());
      } catch (error) {
        Logger.log("Error: " + error);
      }
    }
  }
}
