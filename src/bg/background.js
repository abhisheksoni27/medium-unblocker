const googleCacheURL = "https://webcache.googleusercontent.com/search?q=cache:";

function checkForValidUrl(tabId, changeInfo, tab) {
  chrome.pageAction.show(tabId);
}

chrome.tabs.onUpdated.addListener(checkForValidUrl);

chrome.pageAction.onClicked.addListener(function(activeTab) {
  const originalURL = activeTab.url;

  if (originalURL) {
    const newURL = `${googleCacheURL}${originalURL}`;
    chrome.tabs.create({ url: newURL });
  }
});
