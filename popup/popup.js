let default_displayUnit = [ 'jlu'];

function save_options() {

	let array = [];
	let checkboxes = document.getElementById("check").querySelectorAll('input[type=checkbox]:checked');

	for (let i = 0; i < checkboxes.length; i++) {
		array.push(checkboxes[i].value);
	}
	chrome.storage.sync.set({
		"displayUnit": array
	}, function() {
		setTimeout(function() {
			document.getElementById("save").innerHTML="Save";
		}, 800);
		document.getElementById("save").innerHTML="Success!";
		// $(".button > span").css("color","#958D50");
	});
}

function restore_options() {
	chrome.storage.sync.get({"displayUnit": default_displayUnit}, function(items) {
		items = items["displayUnit"];
		document.getElementById('jlu').checked = items.includes('jlu');
		
	});
}

function checkAll(){
	var check1 = document.getElementById("check-all");
	var checked = check1.checked;
	var checks = document.getElementsByTagName("input");
	for(var i = 0; i < checks.length; i++){
		var checkone = checks[i];
		checkone.checked = checked;
	}
}

function cancelCheckAll(){
	var checks = document.getElementsByTagName("input");
	for(var i = 1; i < checks.length; i++){
		var checkone = checks[i];
		if(checkone.checked == false){
			document.getElementById("check-all").checked = checkone.checked;
			break;
		}
		document.getElementById("check-all").checked = checkone.checked;
	}
}

$(function(){
	$(':input').labelauty();
});


document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',save_options);
document.getElementById('check-all').addEventListener('click',checkAll);

var inputList = document.getElementsByTagName('input')
for(var i = 1; i < inputList.length; i++){
	inputList[i].addEventListener('click',cancelCheckAll);
}
