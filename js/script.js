$(document).ready(function () {
  const divSearchByName = $("#by-name");
  const divSearchById = $("#by-id");
  const divResultsContainer = $("#results-container");
  const buttonSearchByName = $("#button-find-pokemon-by-name");
  const buttonSearchById = $("#button-find-pokemon-by-id");
  const buttonResultsReturn = $("#button-results-return");
  const inputSearchById = $("#input-find-pokemon-by-id");
  const inputSearchByName = $("#input-find-pokemon-by-name");
  const urls = {
    baseUrlSearchPokemon: 'https://pokeapi.co/api/v2/pokemon/',
    baseUrlSearchType: 'https://pokeapi.co/api/v2/type/',
    baseUrlSearchAbility: 'https://pokeapi.co/api/v2/ability/'
  };
  
  /*
  $.ajax({
    type: "GET",
    url: "https://pokeapi.co/api/v2/pokemon/1",
    dataType: "json",
    success: function (response) {
      console.log(response);
    }
  });
  */

  /**
   * Action click on the button to search Pokemon by name
   */
  buttonSearchByName.click(function (e) { 
    console.info('Future feature');
    alert('Bientot disponible en France');
  });

  /**
   * Action click on the button to search Pokemon by id
   */
  buttonSearchById.click(function (e) {
    divSearchById.addClass('hide');
    divSearchByName.addClass('hide');
    divResultsContainer.removeClass('hide');
    let pokemonId = null;
    pokemonId = Number(inputSearchById.val());
    if (pokemonId === null || pokemonId === 0) {
      alert('Veuillez renseigner le numéro d\'identification d\'un Pokemon');
    } else {

    }
  });

  buttonResultsReturn.click(function (e) { 
    divSearchById.removeClass('hide');
    divSearchByName.removeClass('hide');
    divResultsContainer.addClass('hide');
  });

});