export async function getActiveTabURL() {
    let queryOptions = { active: true, currentWindow: true}; // active true gives current tab seen on the screen and currentWindow true gives the selected tab from the multiple tabs.
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
}