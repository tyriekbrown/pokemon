$("#button").on("click", function(){

var pokeName = $("#search").val();
var apiURL = "https://api.pokemontcg.io/v1/cards?name=" + pokeName;

$.ajax({
  url: apiURL,
  // Work with the response
  success: function(response) {
    // console.log( response ); // server response
    $("img").eq(1).attr('src',response.cards[0].imageUrl)
    $('h3').html(response.cards[0].hp)
    $('h2').html(response.cards[0].name)
    $('p').eq(0).html(response.cards[0].types)
    // $('p').eq(1).html(response.cards[0].attacks)
    console.log(response)


  },
  error: function(r){
    console.log(r)
    alert("please enter the correct name of a pokemon"); //server response
  }
  });
});


//response.cards with an array [] put a zero in there
//youre gonna have to do a for loop coutning up whenever you press hte button
//index 0
//response.cards.charizard[0].hp
