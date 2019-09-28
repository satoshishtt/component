$(function(){
  /* ====解説2の処理======*/
  $("#on_ex1").on("click", function() {
    alert("onメソッドの例だよ！！");
  });
  /* ====解説3の処理======*/
  $("#on_ex2").on({
    "mouseenter":function(){$("#on_ex2").css("color", "red");},
    "mouseleave":function(){$("#on_ex2").css("color", "blue");}
  });

  /* ====実行結果をリセット======*/
  $('#reset_button').on('click', function(){
    $('#on_practice').css('color', 'black');
    $('#on_practice').off();
  });
});
