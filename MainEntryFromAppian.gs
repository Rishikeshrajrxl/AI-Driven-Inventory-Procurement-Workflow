function doPost(e) {

  try {

    if (!e || !e.postData || !e.postData.contents) {
      return jsonResponse({ status: "error", message: "No data received" });
    }

    var data = JSON.parse(e.postData.contents);

    Logger.log("Incoming Data: " + JSON.stringify(data));

    var itemId = data.itemID;
    var newQty = data.availableQty;

    if (!itemId || newQty === undefined) {
      return jsonResponse({
        status: "error",
        message: "Missing itemID or availableQty"
      });
    }

    var result = updateInventory(itemId, newQty);

    return jsonResponse(result);

  } catch (err) {

    Logger.log("ERROR: " + err.message);

    return jsonResponse({
      status: "error",
      message: err.message
    });
  }
}
