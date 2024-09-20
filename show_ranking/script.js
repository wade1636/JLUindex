let optionCheckd;
let default_displayUnit = [ 'jlu'];

function checkOption() {
	chrome.storage.sync.get({"displayUnit": default_displayUnit}, function(items) {
		optionCheckd = items["displayUnit"];
		start();
	});
}

function start(){
	if (location.href.startsWith(
			"https://webvpn.swufe.edu.cn/https/77726476706e69737468656265737421fbf952d2243e635930068cb8/kns8/defaultresult/index"
		) || location.href.startsWith("https://kns.cnki.net/kns8s/defaultresult") || location.href.startsWith("https://kns.cnki.net/kns8s/AdvSearch")) {
		if(optionCheckd.includes("jlu")){
			zhiwang.rankingSpanProvider.push(jlu.getRankingSpan);
		}
		
		zhiwang.start();
	}
}

$(document).ready(checkOption);