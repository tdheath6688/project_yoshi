chrome.runtime.onMessageExternal.addListener(
    function(request, sender, sendResponse) {
        if (request.type == 'dashboard') {
            chrome.tabs.executeScript({file: '/execute/api_calls.js'});
        } else if (request.type == 'option') {
            chrome.runtime.openOptionsPage();
        }
        return;
});
