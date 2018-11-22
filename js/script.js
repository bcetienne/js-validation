$(document).ready(function () {
  const div = {
    // searchByName: $("#by-name"),
    searchById: $("#by-id"),
    pokemonName: $("#pokemon-name"),
    pokemonId: $("#pokemon-id"),
    resultsContainer: $("#results-container"),
    lastSeenData: $("#last-seen-data"),
    lastSeenName: $("#last-seen-name"),
    lastSeenId: $("#last-seen-id")
  }
  const inputs = {
    searchById: $("#input-find-pokemon-by-id"),
    // searchByName: $("#input-find-pokemon-by-name")
  }
  const buttons = {
    searchById: $("#button-find-pokemon-by-id"),
    // searchByName: $("#button-find-pokemon-by-name"),
    resultsReturn: $("#button-results-return")
  }
  const urls = {
    baseUrlSearchPokemon: 'https://pokeapi.co/api/v2/pokemon/',
    baseUrlSearchType: 'https://pokeapi.co/api/v2/type/',
    baseUrlSearchAbility: 'https://pokeapi.co/api/v2/ability/'
  };
  
  /**
   * Action click on the button to search Pokemon by name
   */
  /*
  buttonSearchByName.click(function (e) {
    console.info('Future feature');
    alert('Bientot disponible en France');
  });
  */

  /**
   * Action click on the button to search Pokemon by id
   */
  buttons.searchById.click(function (e) {
    // Hide or show different divs
    div.searchById.addClass('hide');
    // div.searchByName.addClass('hide');
    div.lastSeenData.addClass('hide');
    div.resultsContainer.removeClass('hide');
    let pokemonId = Number(inputs.searchById.val())
    // Set the url to be more readable
    let urlPokemon = urls.baseUrlSearchPokemon + pokemonId;
    // Test if the input is empty
    if (pokemonId === null || pokemonId === 0 || pokemonId === '') {
      alert('Veuillez renseigner le numéro d\'identification d\'un Pokemon');
    } else {
      // Retrieve all data
      $.getJSON(urlPokemon,
        function (data, textStatus, jqXHR) {
          // Write data in the html
          div.pokemonName.html(data.name);
          div.pokemonId.html(data.id);
          // Remove old pokemon seen
          localStorage.removeItem('lastIdSeen');
          localStorage.removeItem('lastNameSeen');
          // Replace by the fresh one
          localStorage.setItem('lastIdSeen', data.id);
          localStorage.setItem('lastNameSeen', data.name);
        }
      );
    }
  });

  /**
   * Hide result and display home divs
   */
  buttons.resultsReturn.click(function (e) {
    // Set in vars the local storage data contents
    let lastIdSeenLocal = localStorage.getItem('lastIdSeen');
    let lastNameSeenLocal = localStorage.getItem('lastNameSeen');
    // Display the home view
    div.searchById.removeClass('hide');
    // div.searchByName.removeClass('hide');
    // Hide the result divs
    div.resultsContainer.addClass('hide');
    // Empty string
    div.pokemonName.html('');
    div.pokemonId.html('');
    // Test if the localstorage is not empty
    if (lastIdSeenLocal !== undefined && lastIdSeenLocal !== null && lastIdSeenLocal !== '' && lastNameSeenLocal !== undefined && lastNameSeenLocal !== null && lastNameSeenLocal !== '') {
      div.lastSeenData.removeClass('hide');
      div.lastSeenName.html(lastNameSeenLocal);
      div.lastSeenId.html(lastIdSeenLocal);
    }
  });
});