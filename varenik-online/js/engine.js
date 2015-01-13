$("#btnEat").click(function() {
  $("#divPrediction")[0].style.display="none";
  $("#imgEat")[0].src="pics/eat.gif";
  $("#imgPrediction")[0].src="";
  $("html, body").animate({ scrollTop: $("#imgEat").offset().top-200 }, "slow"); //360
  setTimeout(function() {
    $("#imgEat")[0].src="pics/eat-still.gif";
    $("#btnEat")[0].innerHTML="Съесть ещё";
    window.prediction = Math.floor((Math.random()*43)+1);
    $("#imgPrediction")[0].src="pics/predictions/" + window.prediction + ".jpg";
    $("#divPrediction")[0].style.display="block";
    $("html, body").animate({ scrollTop: $("#divPrediction").offset().top-150 }, "slow"); //360
  }, 2000)
});

function ShareFB() {
  url = "https://www.facebook.com/dialog/feed?app_id=220570058040487&display=popup&link=http://14zy.ru/varenik-online/?utm_source=fb-share&redirect_uri=http://www.14zy.ru/1.html&picture=http://14zy.ru/varenik-online/pics/predictions/" + window.prediction + ".jpg&source=http://14zy.ru/varenik-online/pics/predictions/" + window.prediction + ".jpg&name=Вареники Online&description=Гадание на варениках через интернет";
  window.open(url,'targetWindow','toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=604,height=401');
};

function ShareVK() {
  url = "http://vk.com/share.php?url=http://14zy.ru/varenik-online/?utm_source=vk-share&title=%23Вареники Online&description=Гадание на варениках через интернет&image=http://14zy.ru/varenik-online/pics/predictions/" + window.prediction + ".jpg&noparse=true";
  window.open(url,'targetWindow','toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=604,height=401');
};  

function ShareTW() {
  url = "http://twitter.com/share?text=Вареники Online http://14zy.ru/varenik-online/pics/predictions/" + window.prediction + ".jpg&url=http://14zy.ru/varenik-online/&hashtags=вареники";
  window.open(url,'targetWindow','toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=604,height=401');
};

