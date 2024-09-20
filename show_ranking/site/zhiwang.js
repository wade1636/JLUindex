const zhiwang = {};// 创建一个名为 zhiwang 的对象

zhiwang.rankingSpanProvider = [];// 初始化 rankingSpanProvider 为一个空数组，用于存储提供排名信息的函数
// 定义一个启动函数，开始周期性地添加排名信息
zhiwang.start = function() {
// 每隔 2000 毫秒（2 秒）执行一次 zhiwang.addRankings 函数
		setInterval(function() {
			zhiwang.addRankings();
		}, 2000);
}

// 定义一个函数，用于在页面上添加排名信息
zhiwang.addRankings = function() {
	// 使用 jQuery 选择所有位于 <td> 元素内的 <a> 元素，并将其存储在 results 中
	var results = $("td.source a");

	results.each(function(index) {
		let result = $(this);
		var parent = result.parent();
		var flag = $(parent);
		
		if (flag.find("span").length == 0) {
			let source = result.text();
			if (source.length != 0) {
				let name = source;
				for (let getRankingSpan of zhiwang.rankingSpanProvider) {
					let span = getRankingSpan(name);                    
					result.after(span);
				}
			}
		}
	});
};
