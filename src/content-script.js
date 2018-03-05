'use strict';
function doBreak(){
	window.postMessage("do-8x8-break","*");
}
function doAvailable(){
	window.postMessage("do-8x8-available","*");
}
function changeStatus(message,sender){
	console.log("Event received ",message,sender);
	if(message.action == "status"){
		if(message.status == "locked"){
			doBreak();	
		}
		if(message.status == "active"){
			doAvailable();
		}
	}
}
chrome.runtime.onMessage.addListener(changeStatus);

var script = document.createElement("script");
script.type = "text/javascript";
script.src = chrome.extension.getURL("inpage-script.js");
document.body.append(script);
