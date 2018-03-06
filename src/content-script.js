'use strict';
function changeStatus(message,sender){
	console.log("Event received ",message,sender);
	if(message.action == "status"){
		if(document.getElementById("status-description-work-offline").style.display == "none"){
			if(message.status == "locked"){
				window.postMessage("do-8x8-break","*");
			}
			if(message.status == "active"){
				window.postMessage("do-8x8-available","*");
			}
		}
	}
}
chrome.runtime.onMessage.addListener(changeStatus);

var script = document.createElement("script");
script.type = "text/javascript";
script.src = chrome.extension.getURL("inpage-script.js");
document.body.append(script);
