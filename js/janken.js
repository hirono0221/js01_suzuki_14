
$("#r").on("click", function () {
    //alert(111);
    const random = Math.floor(Math.random()*3)
    console.log(random,"ランダムな数字");
  
    
// グーを出した時のコード  
  if (random === 0){
    $("h2").html("gu");
    $("h3").html("あいこ");
    $('#demo3').html('<img src="img/gu_r.png" " alt="グー" width="150px" height="150px">' );
   
    console.log("gu")

  }else if (random === 1){
    $("h2").html("tyoki");
    $("h3").html("かち");
    $('#demo3').html('<img src="img/choki_r.png" " alt="チョキ" width="150px" height="150px">' );
    // じぶん のスコアに加点
    $("#user-score").text(Number($("#user-score").text())  + 1);
  
    console.log("tyoki")

  }else if (random === 2){
    $("h2").html("pa");
    $("h3").html("まけ");
    $('#demo3').html('<img src="img/pa_r.png" " alt="パー" width="150px" height="150px">' );
    // あいて のスコアに加点
    $("#computer-score").text(Number($("#computer-score").text())  + 1);
  
    console.log("pa")
  }
    
  });
  
  // チョキを出した時のコード  
  $("#s").on("click", function () {
    const random = Math.floor(Math.random()*3)
    console.log(random,"ランダムな数字");
  
  if (random === 0){
    $("h2").html("gu");
    $("h3").html("まけ");
    $('#demo3').html('<img src="img/gu_r.png" " alt="グー" width="150px" height="150px">' );
    // あいて のスコアに加点
    $("#computer-score").text(Number($("#computer-score").text())  + 1);
  
      console.log("gu")

  }else if (random === 1){
    $("h2").html("tyoki");
    $("h3").html("あいこ");
    $('#demo3').html('<img src="img/choki_r.png" " alt="チョキ" width="150px" height="150px">' );
  
      console.log("tyoki")

  }else if (random === 2){
    $("h2").html("pa");
    $("h3").html("かち");
    $('#demo3').html('<img src="img/pa_r.png" " alt="グー" width="150px" height="150px">' );
    // じぶん のスコアに加点
    $("#user-score").text(Number($("#user-score").text())  + 1);
  
    console.log("pa")
  }
    
  });
  
  // パーを出した時のコード  
  $("#p").on("click", function () { 
    const random = Math.floor(Math.random()*3)
    console.log(random,"ランダムな数字");
  
  if (random === 0){
    $("h2").html("gu");
    $("h3").html("かち");
    $('#demo3').html('<img src="img/gu_r.png" " alt="グー" width="150px" height="150px">' );
    // じぶん のスコアに加点
    $("#user-score").text(Number($("#user-score").text())  + 1);
  
    console.log("gu")

  }else if (random === 1){
    $("h2").html("tyoki");
    $("h3").html("まけ");
    $('#demo3').html('<img src="img/choki_r.png" " alt="チョキ" width="150px" height="150px">' );
     // あいて のスコアに加点
    $("#computer-score").text(Number($("#computer-score").text())  + 1);
    
    console.log("tyoki")

  }else if (random === 2){
    $("h2").html("pa");
    $("h3").html("あいこ");
    $('#demo3').html('<img src="img/pa_r.png" " alt="パー" width="150px" height="150px">' );

    console.log("pa")
  }
    
  });