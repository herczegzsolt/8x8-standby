'use strict';
window.addEventListener("message", function(ev){
	if(ev.data == "do-8x8-break"){
		AgentStatusController.change(STATUS_ON_BREAK);
		console.log("Changed status to STATUS_ON_BREAK");
	}
	if(ev.data == "do-8x8-available"){
		AgentStatusController.change(STATUS_WAITING_TRANSACT);
		console.log("Changed status to STATUS_WAITING_TRANSACT");
	}
}, false);
