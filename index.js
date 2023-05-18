
    const pokemonName = document.createElement("h3");
    pokemonName.textContent = pokemon.name;
    pokemonName.classList.add("card-title");

    const cardTypes = document.createElement("div");
    cardTypes.classList.add("card-type");

    pokemon.types.forEach(type => {
      const img = document.createElement("img");
      img.src = typeImages[type];
      img.alt = type;
      img.classList.add("type-icon");

      const spanType = document.createElement("span");
      spanType.textContent = type;
      spanType.appendChild(img);
      cardTypes.appendChild(spanType);
      spanType.classList.add(type.toLowerCase());
    });

    cardInfo.appendChild(pokemonId);
    cardInfo.appendChild(pokemonName);
    cardInfo.appendChild(cardTypes);

    card.appendChild(cardImg);
    card.appendChild(cardInfo);

    // Todo el cambio de forma
    if (pokemon.forms && Array.isArray(pokemon.forms)) {
      let currentFormIndex = 0;
      const pokemonImage = cardImg.querySelector("img");
      const pokemonForms = document.createElement("div");
      pokemonForms.classList.add("pokemon-forms");
      const pokemonTypes = cardInfo.querySelector(".card-type");
      const pokemonName = card.querySelector(".card-title");

      const updatePokemonTypes = (types) => {
        while (pokemonTypes.firstChild) {
          pokemonTypes.removeChild(pokemonTypes.firstChild);
        }

        types.forEach((type) => {
          const img = document.createElement("img");
          img.src = typeImages[type];
          img.alt = type;
          img.classList.add("type-icon");

          const spanType = document.createElement("span");
          spanType.textContent = type;
          spanType.appendChild(img);
          cardTypes.appendChild(spanType);
          spanType.classList.add(type.toLowerCase());
        });
      };

      const prevFormButton = document.createElement("button");
      prevFormButton.classList.add("prev-form");
      prevFormButton.innerText = "<";

      const nextFormButton = document.createElement("button");
      nextFormButton.classList.add("next-form");
      nextFormButton.innerText = ">";

      prevFormButton.addEventListener("click", (event) => {
        event.stopPropagation();
        event.preventDefault();
        currentFormIndex = (currentFormIndex - 1 + pokemon.forms.length) % pokemon.forms.length;
        pokemonImage.src = pokemon.forms[currentFormIndex].image;
        pokemonName.innerText = pokemon.forms[currentFormIndex].name;
        updatePokemonTypes(pokemon.forms[currentFormIndex].types);
      });

      nextFormButton.addEventListener("click", (event) => {
        event.stopPropagation();
        event.preventDefault();
        currentFormIndex = (currentFormIndex + 1) % pokemon.forms.length;
        pokemonImage.src = pokemon.forms[currentFormIndex].image;
        pokemonName.innerText = pokemon.forms[currentFormIndex].name;
        updatePokemonTypes(pokemon.forms[currentFormIndex].types);
      });


      pokemonImage.src = pokemon.forms[currentFormIndex].image;
      updatePokemonTypes(pokemon.forms[currentFormIndex].types);

      pokemonForms.appendChild(prevFormButton);
      pokemonForms.appendChild(nextFormButton);

      card.appendChild(pokemonForms);
    }

    // Agregar la tarjeta al contenedor
    container.appendChild(card);
  });


  document.querySelector('.bi-search').addEventListener('click', function () {
    document.getElementById('search').focus();
  });
});
