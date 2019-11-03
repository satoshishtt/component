/* ===================================================================
  プログラミング基礎講座
=================================================================== */
$(function() {
	// 目次作成
	$("#subTitle").text("プログラミング基礎講座");
	var ary1 = [
		{ file: "lesson1.html", menu: "第１章：変数の宣言とJSON表記" },
		{ file: "lesson2.html", menu: "第２章：関数の宣言" },
		{ file: "lesson3.html", menu: "第３章：条件分岐とループ処理" },
	]
	createSection("section1", "基礎編①", ary1);

	var ary2 = [
		{ file: "lesson8.html", menu: "第4章：CSSの基礎" },
	]
	createSection("section2", "基礎編②", ary2);

	var ary3 = [
		{ file: "lesson10.html", menu: "第5章：jQueryの基礎" },
	]
	createSection("section3", "応用編", ary3);

	// メニューリンク作成
	var ary = String(window.location).split("/");
	var selectFile = ary[ary.length - 1];
	var aryMenu = [
		{ file: "index.html", menu: "目次" },
		{ file: "lesson1.html", menu: "変数の宣言とJSON表記" },
		{ file: "lesson2.html", menu: "関数の宣言" },
		{ file: "lesson3.html", menu: "条件分岐とループ処理" },
		{ file: "lesson8.html", menu: "CSSの基礎" },
		{ file: "lesson10.html", menu: "jQueryの基礎" },
	]
	createMenu("menu", selectFile, aryMenu);

	// フッター
	$(".copyright").text("Copyright &copy; 2019 IT第1技術部　システム開発G All Rights Reserved.");

});

function createMenu(elmentId, file, ary) {
	$("#" + elmentId).append('<ul></ul>');
	var obj;
	var act
	for (var i in ary) {
		obj = ary[i];
		if (file == obj.file) {
			act = "active";
			$("#title").text(obj.menu);
		}
        var m = obj.menu;
        if (m.length > 10) {
            m = m.substr(0, 10) + '...';
        }
		$("#" + elmentId + " ul").append('<li><a href="' + obj.file + '" class="' + act + '"><font>' + m +'</font></a></li>');
		act = "";
	}
}

function createSection(elmentId, elmentText, ary) {
	$("#" + elmentId).text(elmentText);
	$("#" + elmentId).append('<ul></ul>');
	var obj;
	var act
	for (var i in ary) {
		obj = ary[i];
		if (obj.file == "") {
			$("#" + elmentId + " ul").append('<li>' + obj.menu + '</li>');
		} else {
			$("#" + elmentId + " ul").append('<li><a href="' + obj.file + '">' + obj.menu + '</a></li>');
		}
	}
}

/* ====練習問題実行======*/
function practice_build(elmId) {
	var str = $("#" + elmId).val();
	var resultSec = "#" + elmId + "_result";
	try {
		$(resultSec).text(eval(str));
		$(resultSec).css('background-color', '#52A2C5');
	} catch(e) {
		alert(e);
	}
}

function practice_html_build(elmId) {
	var str = $("#" + elmId).val();
	var resultSec = "#" + elmId + "_result";
	try {
		$(resultSec).html(eval(str));
	} catch(e) {
		alert(e);
	}
}

function practice_style_build(elmId) {
	var str = $("#" + elmId).val();
	try {
		var style = document.createElement('style');
		style.innerHTML = str;
		var entry = document.getElementsByTagName('script')[0];
		entry.parentNode.insertBefore(style,entry);
	} catch(e) {
		alert(e);
	}
}

function response_build(elmId) {
	var str = $("#" + elmId).val();
	try {
		eval(str);
	} catch(e) {
		alert(e);
	}
}

/* ====HTMLを文字列で表示======*/
function html_replace(str) {
	return str.replace(/</g,"&lt;").replace(/</g,"&gt;").replace(/\n/g,"<br>").replace(/\t/g,"&nbsp;").replace(/"/g,"&quot;");
}

function function_replace(fnc) {
	return String(fnc).replace("function () {", "").replace(/}$/, "");
}

/* ====テーブル作成======*/
function createTableHead(table, ary) {
	var row = table.insertRow();
	for(var i in ary) {
		var th = document.createElement('th');
		row.appendChild(th).innerHTML = ary[i];
	}
}
function createTableData(table, ary) {
	var row = table.insertRow();
	for(var i in ary) {
		row.insertCell().innerHTML = ary[i];
	}
}
