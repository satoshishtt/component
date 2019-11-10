/* ===================================================================
 javascript 研修
=================================================================== */
/* ====回答結果を実行======*/
function answer_build_1(elmId) {
	var table = document.getElementById(elmId);
	for(var i = 1; i < table.rows.length; i++) {
		var cell = table.rows[i].cells;
		for(var j = 0; j < cell.length; j++) {
			cell[j].style.width = "200px";
			cell[j].style.height = "50px";
		}
	}
}
function answer_build_2(elmId) {
	var sec = "#" + elmId;
	var str = sec + '{height:150px;width:200px;}';
	try {
		var style = document.createElement('style');
		style.innerHTML = str;
		var entry = document.getElementsByTagName('script')[0];
		entry.parentNode.insertBefore(style,entry);
	} catch(e) {
		alert(e);
	}

}

function answer_build_3() {
	var str = 'span font {font-size:18px;}';
	try {
		var style = document.createElement('style');
		style.innerHTML = str;
		var entry = document.getElementsByTagName('script')[0];
		entry.parentNode.insertBefore(style,entry);
	} catch(e) {
		alert(e);
	}
}

/* ====実行結果をリセット======*/
function answer_reset(elmId,tableId) {
	var sec = "#" + elmId;
	var table = document.createElement('table');
	table.id = tableId;
	table.border = 1;
	createTableHead(table, ["No.", "国", "英語"]);
	createTableData(table, ["1", "日本", "JAPAN"]);
	createTableData(table, ["2", "アメリカ", "America"]);
	createTableData(table, ["3", "中国", "CHAINA"]);
	$(sec).html(table.outerHTML);
}

function answer_style_reset_1(tableId) {
	var str = '#tableId2 {color : black ;}';
	try {
		var style = document.createElement('style');
		style.innerHTML = str;
		var entry = document.getElementsByTagName('script')[0];
		entry.parentNode.insertBefore(style,entry);
	} catch(e) {
		alert(e);
	}
}

function answer_style_reset() {
	try {
		var list = document.getElementsByTagName("style");
		if (list.length == 0) return;
		var entry = document.getElementsByTagName('script')[0];
		entry.parentNode.removeChild(list[list.length-1]);
	} catch(e) {
		alert(e);
	}
}
