$( "#StartTale" ).click(function() {
  $('#writer')[0].style.display="block";
  $('#StartTale')[0].className += " active";
  $("html, body").animate({ scrollTop: 150 }, "slow");
});

$( "#ContinueTale" ).click(function() {
  window.location = "tale.html";
});

$( "#btnContinue" ).click(function() {
  $('#continueText')[0].style.display="block";
  $('#btnContinue')[0].className = "btn btn-info";
  $('#btnContinue')[0].innerHTML = "ОТПРАВИТЬ";
  $("html, body").animate({ scrollTop: $('#continueText').offset().top  }, "slow");
  $('#btnContinue').blur();

  $('#btnContinue').click(function() {
    alert('Ашаля техтенбех расказама');
  });
});

$(".tale-preview").click(function() {
  window.location = "tale.html";
})




