
chrome.storage.sync.get(['instanceUrl'], function (result) {
    var bookmarkUrl = window.location;
    var applicationUrl = result.instanceUrl + '/bookmarks/new';
    applicationUrl += '?url=' + encodeURIComponent(bookmarkUrl);
    applicationUrl += '&auto_close';
    window.open(applicationUrl);
});