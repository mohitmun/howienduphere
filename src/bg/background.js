chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {

    // Misc
    // remove url params
    // write tests
    // generate graph
    // detect refresh, and dont add to db
    tab.ts = new Date().getTime();
    chrome.storage.local.get("data", function(result) {
      data = result.data || []
      data.push(tab)
      chrome.storage.local.set({data: data})
    });
  }
})
