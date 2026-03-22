function testDoPost() {

  var mockEvent = {
    postData: {
      contents: JSON.stringify({
        itemID: "ITM001",
        availableQty: 8
      })
    }
  };

  var res = doPost(mockEvent);

  Logger.log(res.getContent());
}
