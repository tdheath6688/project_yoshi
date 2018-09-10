$(function(){

chrome.storage.sync.get(['dashboard_default','api_key','api_secret', 'api_url', 'host'], function(items){
  document.getElementById('dashboard_default').value = items.dashboard_default;
  document.getElementById('api_key').value = items.api_key;
  document.getElementById('api_secret').value = items.api_secret;
  document.getElementById('api_url').value = items.api_url;
  document.getElementById('host').value = items.host;
});

  $('#save').click(function(){
    var dashboard_default = document.getElementById('dashboard_default').value;
    var api_key = document.getElementById('api_key').value;
    var api_secret = document.getElementById('api_secret').value;
    var api_url = document.getElementById('api_url').value;
    var host = document.getElementById('host').value;
    var settings = {
      "dashboard_default": dashboard_default,
      "api_key": api_key,
      "api_secret": api_secret,
      "api_url": api_url,
      "host": host
    }
    if (dashboard_default || api_key || api_secret || host || api_url) {
      chrome.storage.sync.set(settings, function(){
        close();
      });
    }
  });
});

