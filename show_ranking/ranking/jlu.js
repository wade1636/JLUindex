const jlu = {};


jlu.getRankingInfo = function(name) {
	let rankingInfo = {};
	rankingInfo.rankings = [];
	rankingInfo.info = '';

	let ranking;
	let name_list = processName(name);
	for(let i = 0; i < name_list.length; i++) {
		ranking = jlu.rankingFullName[name_list[i]];
		if(ranking != null){
			break;
		}
	}
	if (ranking == null) {
		ranking = ""
	}
	else {
		ranking = "jlu " + ranking;
	}

	rankingInfo.rankings.push(ranking);

	return rankingInfo;
}

jlu.getRankingInfoEn = function(name) {
	let rankingInfo = {};
	rankingInfo.rankings = [];
	rankingInfo.info = '';
	let ranking;
	let name_list = processNameEn(name);
	for(let i = 0; i < name_list.length; i++) {
		ranking = jlu.rankingFullNameEn[name_list[i]];
		if(ranking != null){
			break;
		}
	}
	if (ranking == null) {
		ranking = "";
	}else{
		ranking = "jlu " + ranking;
	}
	rankingInfo.rankings.push(ranking);
	
	return rankingInfo;
}




jlu.getRankingClass = function(rankings) {
	for (let result of rankings) { // 
		if (result == "jlu A") {
			return 'jlu-A';
		} else if (result == "jlu B") {
			return 'jlu-B';
		} else if (result == "jlu C") {
			return 'jlu-C';
		} 
	}
	return 'jlu-none';
}

jlu.getRankingSpan = function(name) {
	let rankingInfo = jlu.getRankingInfo(name);
	let span = $('<span>').addClass(jlu.getRankingClass(rankingInfo.rankings)).text(
		rankingInfo.rankings.join('/'));
	if (jlu.getRankingClass(rankingInfo.rankings) != "jlu-none"){
		span.addClass("ccf-ranking");
	}
	return span;
}

jlu.getRankingSpanEn = function(name) {
	let rankingInfo = jlu.getRankingInfoEn(name);
	let span = $('<span>').addClass(jlu.getRankingClass(rankingInfo.rankings)).text(
		rankingInfo.rankings.join('/'));
	if (jlu.getRankingClass(rankingInfo.rankings) != "jlu-none"){
		span.addClass("ccf-ranking");
	}
	return span;
}

