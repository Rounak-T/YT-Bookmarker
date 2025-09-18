chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (tab.url && tab.url.includes("youtube.com/watch")) {
        
        const querryParameters = tab.url.split("?")[1]; // Unique Id's for each video.
        const urlParameters = new URLSearchParams(querryParameters);

        chrome.tabs.sendMessage(tabId,{
            type: "NEW",
            videoId: urlParameters.get("v"),
        });
    }
})