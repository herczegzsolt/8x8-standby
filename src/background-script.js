'use strict';
var tabs = [];
function idleNotify(state){
	// Notify all *.8x8.com windows about status changes
        chrome.tabs.query({"url":"https://*.8x8.com/*"},function(tabs){
                tabs.forEach(function(tab){
			chrome.tabs.sendMessage(tab.id,{"action":"status","status":state});
                });
        });
	// Notify all *.mycontactual.com windows about status changes
        chrome.tabs.query({"url":"https://*.mycontactual.com/*"},function(tabs){
                tabs.forEach(function(tab){
			chrome.tabs.sendMessage(tab.id,{"action":"status","status":state});
                });
        });
	var d = new Date();
	console.info("["+d.toLocaleTimeString()+"] became "+state);
}
chrome.idle.onStateChanged.addListener(idleNotify);
