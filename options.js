function save_options() {
    var instance_url = document.getElementById('linkdingUrl').value.replace(/\/+$/, "");

    chrome.storage.sync.set({
        instanceUrl: instance_url
    }, function () {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function () {
            status.textContent = '';
        }, 750);
    });
}


chrome.storage.sync.get(['instanceUrl'], function (result) {
    if(result.instanceUrl !== undefined){
        document.getElementById("linkdingUrl").value = result.instanceUrl;
    }
});

document.getElementById('save').addEventListener('click',
    save_options);