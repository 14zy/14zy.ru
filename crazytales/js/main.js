$( "#StartTale" ).click(function() {
  $('#writer')[0].style.display="block";
  $('#StartTale')[0].className += " active";
  $("html, body").animate({ scrollTop: 150 }, "slow");
});

$( "#ContinueTale" ).click(function() {
  alert('Ашаля техтенбех расказама')
});


