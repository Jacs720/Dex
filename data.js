const pokemons = [
  {
    id: 1,
    name: "Bulbasaur",
    types: ["Grass", "Poison"]
  }, {
    id: 2,
    name: "Ivysaur",
    types: ["Grass", "Poison"]
  }, {
    id: 3,
    name: "Venusaur",
    types: ["Grass", "Poison"],
    forms: [
      {
        name: "Venusaur",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png",
        types: ["Grass", "Poison"]
      },
      {
        name: "Mega Venusaur",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003_f2.png",
        types: ["Grass", "Poison"],
      },
      {
        name: "Gigantamax Venusaur",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003_f3.png",
        types: ["Grass", "Poison"],
      }
    ],
  }, {
    id: 4,
    name: "Charmander",
    types: ["Fire"],
  }, {
    id: 5,
    name: "Charmeleon",
    types: ["Fire"],
  }, {
    id: 6,
    name: "Charizard",
    types: ["Fire", "Flying"],
    forms: [
      {
        name: "Charizard",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png",
        types: ["Fire", "Flying"],
      },
      {
        name: "Mega Charizard X",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006_f2.png",
        types: ["Fire", "Dragon"],
      },
      {
        name: "Mega Charizard Y",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006_f3.png",
        types: ["Fire", "Flying"],
      },
      {
        name: "Gigantamax Charizard",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006_f4.png",
        types: ["Fire", "Flying"],
      },
    ],
  }, {
    id: 7,
    name: "Squirtle",
    types: ["Water"]
  }, {
    id: 8,
    name: "Wartortle",
    types: ["Water"]
  }, {
    id: 9,
    name: "Blastoise",
    types: ["Water"],
    forms: [
      {
        name: "Blastoise",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png",
        types: ["Water"],
      },
      {
        name: "Mega Blastoise",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009_f2.png",
        types: ["Water"],
      },
      {
        name: "Gigantamax Blastoise",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009_f3.png",
        types: ["Water"],
      },
    ],
  }, {
    id: 10,
    name: "Caterpie",
    types: ["Bug"]
  }, {
    id: 11,
    name: "Metapod",
    types: ["Bug"]
  }, {
    id: 12,
    name: "Butterfree",
    types: ["Bug", "Flying"],
    forms: [
      {
        name: "Butterfree",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/012.png",
        types: ["Bug", "Flying"],
      },
      {
        name: "Gigantamax Butterfree",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/012_f2.png",
        types: ["Bug", "Flying"],
      },
    ],
  }, {
    id: 13,
    name: "Weedle",
    types: ["Bug", "Poison"]
  }, {
    id: 14,
    name: "Kakuna",
    types: ["Bug", "Poison"]
  }, {
    id: 15,
    name: "Beedrill",
    types: ["Bug", "Poison"],
    forms: [
      {
        name: "Beedrill",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/015.png",
        types: ["Bug", "Poison"],
      },
      {
        name: "Mega Beedrill",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/015_f2.png",
        types: ["Bug", "Poison"],
      },
    ],
  }, {
    id: 16,
    name: "Pidgey",
    types: ["Normal", "Flying"]
  }, {
    id: 17,
    name: "Pidgeotto",
    types: ["Normal", "Flying"]
  }, {
    id: 18,
    name: "Pidgeot",
    types: ["Normal", "Flying"],
    forms: [
      {
        name: "Pidgeot",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/018.png",
        types: ["Normal", "Flying"],
      },
      {
        name: "Mega Pidgeot",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/018_f2.png",
        types: ["Normal", "Flying"],
      },
    ],
  }, {
    id: 19,
    name: "Rattata",
    types: ["Normal"],
    forms: [
      {
        name: "Rattata",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/019.png",
        types: ["Normal"],
      },
      {
        name: "Alolan Rattata",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/019_f2.png",
        types: ["Normal", "Dark"],
      },
    ],
  }, {
    id: 20,
    name: "Raticate",
    types: ["Normal"],
    forms: [
      {
        name: "Raticate",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/020.png",
        types: ["Normal"],
      },
      {
        name: "Alolan Raticate",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/020_f2.png",
        types: ["Normal", "Dark"],
      },
    ],
  }, {
    id: 21,
    name: "Spearow",
    types: ["Normal", "Flying"]
  }, {
    id: 22,
    name: "Fearow",
    types: ["Normal", "Flying"]
  }, {
    id: 23,
    name: "Ekans",
    types: ["Poison"]
  }, {
    id: 24,
    name: "Arbok",
    types: ["Poison"]
  }, {
    id: 25,
    name: "Pikachu",
    types: ["Electric"],
    forms: [
      {
        name: "Pikachu",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png",
        types: ["Electric"],
      },
      {
        name: "Gigantamax Pikachu",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025_f2.png",
        types: ["Electric"],
      },
    ],
  }, {
    id: 26,
    name: "Raichu",
    types: ["Electric"],
    forms: [
      {
        name: "Raichu",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/026.png",
        types: ["Electric"],
      },
      {
        name: "Alolan Raichu",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/026_f2.png",
        types: ["Electric", "Psychic"],
      },
    ],
  }, {
    id: 27,
    name: "Sandshrew",
    types: ["Ground"],
    forms: [
      {
        name: "Sandshrew",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/027.png",
        types: ["Ground"],
      },
      {
        name: "Alolan Sandshrew",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/027_f2.png",
        types: ["Ice", "Steel"],
      },
    ],
  }, {
    id: 28,
    name: "Sandslash",
    types: ["Ground"],
    forms: [
      {
        name: "Sandslash",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/028.png",
        types: ["Ground"],
      },
      {
        name: "Alolan Sandslash",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/028_f2.png",
        types: ["Ice", "Steel"],
      },
    ],
  }, {
    id: 29,
    name: "Nidoran♀",
    types: ["Poison"]
  }, {
    id: 30,
    name: "Nidorina",
    types: ["Poison"]
  }, {
    id: 31,
    name: "Nidoqueen",
    types: ["Poison", "Ground"]
  }, {
    id: 32,
    name: "Nidoran♂",
    types: ["Poison"]
  }, {
    id: 33,
    name: "Nidorino",
    types: ["Poison"]
  }, {
    id: 34,
    name: "Nidoking",
    types: ["Poison", "Ground"]
  }, {
    id: 35,
    name: "Clefairy",
    types: ["Fairy"]
  }, {
    id: 36,
    name: "Clefable",
    types: ["Fairy"]
  }, {
    id: 37,
    name: "Vulpix",
    types: ["Fire"],
    forms: [
      {
        name: "Vulpix",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/037.png",
        types: ["Fire"],
      },
      {
        name: "Alolan Vulpix",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/037_f2.png",
        types: ["Ice"],
      },
    ],
  }, {
    id: 38,
    name: "Ninetales",
    types: ["Fire"],
    forms: [
      {
        name: "Ninetails",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/038.png",
        types: ["Fire"],
      },
      {
        name: "Alolan Ninetails",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/038_f2.png",
        types: ["Ice", "Fairy"],
      },
    ],
  }, {
    id: 39,
    name: "Jigglypuff",
    types: ["Normal", "Fairy"]
  }, {
    id: 40,
    name: "Wigglytuff",
    types: ["Normal", "Fairy"]
  }, {
    id: 41,
    name: "Zubat",
    types: ["Poison", "Flying"]
  }, {
    id: 42,
    name: "Golbat",
    types: ["Poison", "Flying"]
  }, {
    id: 43,
    name: "Oddish",
    types: ["Grass", "Poison"]
  }, {
    id: 44,
    name: "Gloom",
    types: ["Grass", "Poison"]
  }, {
    id: 45,
    name: "Vileplume",
    types: ["Grass", "Poison"]
  }, {
    id: 46,
    name: "Paras",
    types: ["Bug", "Grass"]
  }, {
    id: 47,
    name: "Parasect",
    types: ["Bug", "Grass"]
  }, {
    id: 48,
    name: "Venonat",
    types: ["Bug", "Poison"]
  }, {
    id: 49,
    name: "Venomoth",
    types: ["Bug", "Poison"]
  }, {
    id: 50,
    name: "Diglett",
    types: ["Ground"],
    forms: [
      {
        name: "Diglett",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/050.png",
        types: ["Ground"],
      },
      {
        name: "Alolan Diglett",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/050_f2.png",
        types: ["Ground", "Steel"],
      },
    ],
  }, {
    id: 51,
    name: "Dugtrio",
    types: ["Ground"],
    forms: [
      {
        name: "Sandslash",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/051.png",
        types: ["Ground"],
      },
      {
        name: "Alolan Dugtrio",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/051_f2.png",
        types: ["Ground", "Steel"],
      },
    ],
  }, {
    id: 52,
    name: "Meowth",
    types: ["Normal"],
    forms: [
      {
        name: "Meowth",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/052.png",
        types: ["Normal"],
      },
      {
        name: "Alolan Meowth",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/052_f2.png",
        types: ["Dark"],
      },
      {
        name: "Galarian Meowth",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/052_f3.png",
        types: ["Steel"],
      },
      {
        name: "Gigantamax Meowth",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/052_f4.png",
        types: ["Normal"],
      },
    ],
  }, {
    id: 53,
    name: "Persian",
    types: ["Normal"],
    forms: [
      {
        name: "Persian",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/053.png",
        types: ["Normal"],
      },
      {
        name: "Alolan Persian",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/053_f2.png",
        types: ["Dark"],
      },
    ],
  }, {
    id: 54,
    name: "Psyduck",
    types: ["Water"]
  }, {
    id: 55,
    name: "Golduck",
    types: ["Water"]
  }, {
    id: 56,
    name: "Mankey",
    types: ["Fighting"]
  }, {
    id: 57,
    name: "Primeape",
    types: ["Fighting"]
  }, {
    id: 58,
    name: "Growlithe",
    types: ["Fire"],
    forms: [
      {
        name: "Growlithe",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/058.png",
        types: ["Fire"],
      },
      {
        name: "Hisuian Growlithe",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/058_f2.png",
        types: ["Fire", "Rock"],
      },
    ],
  }, {
    id: 59,
    name: "Arcanine",
    types: ["Fire"],
    forms: [
      {
        name: "Arcanine",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/059.png",
        types: ["Fire"],
      },
      {
        name: "Hisuian Arcanine",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/059_f2.png",
        types: ["Fire", "Rock"],
      },
    ],
  }, {
    id: 60,
    name: "Poliwag",
    types: ["Water"]
  }, {
    id: 61,
    name: "Poliwhirl",
    types: ["Water"]
  }, {
    id: 62,
    name: "Poliwrath",
    types: ["Water", "Fighting"]
  }, {
    id: 63,
    name: "Abra",
    types: ["Psychic"]
  }, {
    id: 64,
    name: "Kadabra",
    types: ["Psychic"]
  }, {
    id: 65,
    name: "Alakazam",
    types: ["Psychic"],
    forms: [
      {
        name: "Alakazam",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/065.png",
        types: ["Psychic"],
      },
      {
        name: "Mega Alakazam",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/065.png",
        types: ["Psychic"],
      },
    ],
  }, {
    id: 66,
    name: "Machop",
    types: ["Fighting"]
  }, {
    id: 67,
    name: "Machoke",
    types: ["Fighting"]
  }, {
    id: 68,
    name: "Machamp",
    types: ["Fighting"],
    forms: [
      {
        name: "Machamp",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/068.png",
        types: ["Fighting"],
      },
      {
        name: "Gigantamax Machamp",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/068_f2.png",
        types: ["Fighting"],
      },
    ],
  }, {
    id: 69,
    name: "Bellsprout",
    types: ["Grass", "Poison"]
  }, {
    id: 70,
    name: "Weepinbell",
    types: ["Grass", "Poison"]
  }, {
    id: 71,
    name: "Victreebel",
    types: ["Grass", "Poison"]
  }, {
    id: 72,
    name: "Tentacool",
    types: ["Water", "Poison"]
  }, {
    id: 73,
    name: "Tentacruel",
    types: ["Water", "Poison"]
  }, {
    id: 74,
    name: "Geodude",
    types: ["Rock", "Ground"],
    forms: [
      {
        name: "Geodude",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/074.png",
        types: ["Rock", "Ground"],
      },
      {
        name: "Alolan Geodude",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/074_f2.png",
        types: ["Rock", "Electric"],
      },
    ],
  }, {
    id: 75,
    name: "Graveler",
    types: ["Rock", "Ground"],
    forms: [
      {
        name: "Graveler",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/075.png",
        types: ["Rock", "Ground"],
      },
      {
        name: "Alolan Graveler",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/075_f2.png",
        types: ["Rock", "Electric"],
      },
    ],
  }, {
    id: 76,
    name: "Golem",
    types: ["Rock", "Ground"],
    forms: [
      {
        name: "Golem",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/076.png",
        types: ["Rock", "Ground"],
      },
      {
        name: "Alolan Golem",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/076_f2.png",
        types: ["Rock", "Electric"],
      },
    ],
  }, {
    id: 77,
    name: "Ponyta",
    types: ["Fire"],
    forms: [
      {
        name: "Ponyta",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/077.png",
        types: ["Fire"],
      },
      {
        name: "Galarian Ponyta",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/077_f2.png",
        types: ["Psychic"],
      },
    ],
  }, {
    id: 78,
    name: "Rapidash",
    types: ["Fire"],
    forms: [
      {
        name: "Rapidash",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/078.png",
        types: ["Fire"],
      },
      {
        name: "Galarian Rapidash",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/078_f2.png",
        types: ["Psychic", "Fairy"],
      },
    ],
  }, {
    id: 79,
    name: "Slowpoke",
    types: ["Water", "Psychic"],
    forms: [
      {
        name: "Slowpoke",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/079.png",
        types: ["Water", "Psychic"],
      },
      {
        name: "Galarian Slowpoke",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/079_f2.png",
        types: ["Psychic"],
      },
    ],
  }, {
    id: 80,
    name: "Slowbro",
    types: ["Water", "Psychic"],
    forms: [
      {
        name: "Slowbro",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/080.png",
        types: ["Water", "Psychic"],
      },
      {
        name: "Mega Slowbro",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/080_f2.png",
        types: ["Water", "Psychic"],
      },
      {
        name: "Galarian Slowbro",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/080_f3.png",
        types: ["Poison", "Psychic"],
      },
    ],
  }, {
    id: 81,
    name: "Magnemite",
    types: ["Electric", "Steel"]
  }, {
    id: 82,
    name: "Magneton",
    types: ["Electric", "Steel"]
  }, {
    id: 83,
    name: "Farfetch'd",
    types: ["Normal", "Flying"],
    forms: [
      {
        name: "Farfetch'd",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/083.png",
        types: ["Normal", "Flying"],
      },
      {
        name: "Galarian Farfetch'd",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/083_f2.png",
        types: ["Fighting"],
      },
    ],
  }, {
    id: 84,
    name: "Doduo",
    types: ["Normal", "Flying"]
  }, {
    id: 85,
    name: "Dodrio",
    types: ["Normal", "Flying"]
  }, {
    id: 86,
    name: "Seel",
    types: ["Water"]
  }, {
    id: 87,
    name: "Dewgong",
    types: ["Water", "Ice"]
  }, {
    id: 88,
    name: "Grimer",
    types: ["Poison"],
    forms: [
      {
        name: "Grimer",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/088.png",
        types: ["Poison"],
      },
      {
        name: "Alolan Grimer",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/088_f2.png",
        types: ["Poison", "Dark"],
      },
    ],
  }, {
    id: 89,
    name: "Muk",
    types: ["Poison"],
    forms: [
      {
        name: "Muk",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/089.png",
        types: ["Poison"],
      },
      {
        name: "Alolan Muk",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/089_f2.png",
        types: ["Poison", "Dark"],
      },
    ],
  }, {
    id: 90,
    name: "Shellder",
    types: ["Water"]
  }, {
    id: 91,
    name: "Cloyster",
    types: ["Water", "Ice"]
  }, {
    id: 92,
    name: "Gastly",
    types: ["Ghost", "Poison"]
  }, {
    id: 93,
    name: "Haunter",
    types: ["Ghost", "Poison"]
  }, {
    id: 94,
    name: "Gengar",
    types: ["Ghost", "Poison"],
    forms: [
      {
        name: "Gengar",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/094.png",
        types: ["Ghost", "Poison"],
      },
      {
        name: "Mega Gengar",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/094_f2.png",
        types: ["Ghost", "Poison"],
      },
      {
        name: "Gigantamax Gengar",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/094_f3.png",
        types: ["Ghost", "Poison"],
      },
    ],
  }, {
    id: 95,
    name: "Onix",
    types: ["Rock", "Ground"]
  }, {
    id: 96,
    name: "Drowzee",
    types: ["Psychic"]
  }, {
    id: 97,
    name: "Hypno",
    types: ["Psychic"]
  }, {
    id: 98,
    name: "Krabby",
    types: ["Water"]
  }, {
    id: 99,
    name: "Kingler",
    types: ["Water"],
    forms: [
      {
        name: "Kingler",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/099.png",
        types: ["Water"],
      },
      {
        name: "Gigantamax Kingler",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/099_f2.png",
        types: ["Water"],
      },
    ],
  }, {
    id: 100,
    name: "Voltorb",
    types: ["Electric"],
    forms: [
      {
        name: "Voltorb",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/100.png",
        types: ["Electric"],
      },
      {
        name: "Hisuian Voltorb",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/100_f2.png",
        types: ["Electric", "Grass"],
      },
    ],
  }, {
    id: 101,
    name: "Electrode",
    types: ["Electric"],
    forms: [
      {
        name: "Voltorb",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/101.png",
        types: ["Electric"],
      },
      {
        name: "Hisuian Electrode",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/101_f2.png",
        types: ["Electric", "Grass"],
      },
    ],
  }, {
    id: 102,
    name: "Exeggcute",
    types: ["Grass", "Psychic"]
  }, {
    id: 103,
    name: "Exeggutor",
    types: ["Grass", "Psychic"],
    forms: [
      {
        name: "Exeguttor",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/103.png",
        types: ["Grass", "Psychic"],
      },
      {
        name: "Alolan Exeggutor",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/103_f2.png",
        types: ["Grass", "Dragon"],
      },
    ],
  }, {
    id: 104,
    name: "Cubone",
    types: ["Ground"]
  }, {
    id: 105,
    name: "Marowak",
    types: ["Ground"],
    forms: [
      {
        name: "Marowak",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/105.png",
        types: ["Ground"],
      },
      {
        name: "Alolan Marowak",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/105_f2.png",
        types: ["Fire", "Ghost"],
      },
    ],
  }, {
    id: 106,
    name: "Hitmonlee",
    types: ["Fighting"]
  }, {
    id: 107,
    name: "Hitmonchan",
    types: ["Fighting"]
  }, {
    id: 108,
    name: "Lickitung",
    types: ["Normal"]
  }, {
    id: 109,
    name: "Koffing",
    types: ["Poison"]
  }, {
    id: 110,
    name: "Weezing",
    types: ["Poison"],
    forms: [
      {
        name: "Weezing",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/110.png",
        types: ["Poison"],
      },
      {
        name: "Galarian Weezing",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/110_f2.png",
        types: ["Poison", "Fairy"],
      },
    ],
  }, {
    id: 111,
    name: "Rhyhorn",
    types: ["Ground", "Rock"]
  }, {
    id: 112,
    name: "Rhydon",
    types: ["Ground", "Rock"]
  }, {
    id: 113,
    name: "Chansey",
    types: ["Normal"]
  }, {
    id: 114,
    name: "Tangela",
    types: ["Grass"]
  }, {
    id: 115,
    name: "Kangaskhan",
    types: ["Normal"],
    forms: [
      {
        name: "Kangaskhan",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/115.png",
        types: ["Normal"],
      },
      {
        name: "Mega Kangaskhan",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/115_f2.png",
        types: ["Normal"],
      },
    ],
  }, {
    id: 116,
    name: "Horsea",
    types: ["Water"]
  }, {
    id: 117,
    name: "Seadra",
    types: ["Water"]
  }, {
    id: 118,
    name: "Goldeen",
    types: ["Water"]
  }, {
    id: 119,
    name: "Seaking",
    types: ["Water"]
  }, {
    id: 120,
    name: "Staryu",
    types: ["Water"]
  }, {
    id: 121,
    name: "Starmie",
    types: ["Water", "Psychic"]
  }, {
    id: 122,
    name: "Mr. Mime",
    types: ["Psychic", "Fairy"],
    forms: [
      {
        name: "Mr. Mime",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/122.png",
        types: ["Psychic", "Fairy"],
      },
      {
        name: "Galarian Mr. Mime",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/122_f2.png",
        types: ["Ice", "Psychic"],
      },
    ],
  }, {
    id: 123,
    name: "Scyther",
    types: ["Bug", "Flying"]
  }, {
    id: 124,
    name: "Jynx",
    types: ["Ice", "Psychic"]
  }, {
    id: 125,
    name: "Electabuzz",
    types: ["Electric"]
  }, {
    id: 126,
    name: "Magmar",
    types: ["Fire"]
  }, {
    id: 127,
    name: "Pinsir",
    types: ["Bug"],
    forms: [
      {
        name: "Pinsir",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/127.png",
        types: ["Bug"],
      },
      {
        name: "Mega Pinsir",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/127_f2.png",
        types: ["Bug", "Flying"],
      },
    ],
  }, {
    id: 128,
    name: "Tauros",
    types: ["Normal"],
    forms: [
      {
        name: "Tauros",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/128.png",
        types: ["Normal"],
      },
      {
        name: "Paldean Tauros (Combat Breed)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/128_f2.png",
        types: ["Fighting"],
      },
      {
        name: "Paldean Tauros (Blaze Breed)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/128_f3.png",
        types: ["Fighting", "Fire"],
      },
      {
        name: "Paldean Tauros (Aqua Breed)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/128_f4.png",
        types: ["Fighting", "Water"],
      },
    ],
  }, {
    id: 129,
    name: "Magikarp",
    types: ["Water"]
  }, {
    id: 130,
    name: "Gyarados",
    types: ["Water", "Flying"],
    forms: [
      {
        name: "Gyarados",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/130.png",
        types: ["Water", "Flying"],
      },
      {
        name: "Mega Gyarados",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/130_f2.png",
        types: ["Water", "Dark"],
      },
    ],
  }, {
    id: 131,
    name: "Lapras",
    types: ["Water", "Ice"]
  }, {
    id: 132,
    name: "Ditto",
    types: ["Normal"]
  }, {
    id: 133,
    name: "Eevee",
    types: ["Normal"],
    forms: [
      {
        name: "Eevee",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/133.png",
        types: ["Normal"],
      },
      {
        name: "Gigantamax Eevee",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/133_f2.png",
        types: ["Normal"],
      },
    ],
  }, {
    id: 134,
    name: "Vaporeon",
    types: ["Water"]
  }, {
    id: 135,
    name: "Jolteon",
    types: ["Electric"]
  }, {
    id: 136,
    name: "Flareon",
    types: ["Fire"]
  }, {
    id: 137,
    name: "Porygon",
    types: ["Normal"]
  }, {
    id: 138,
    name: "Omanyte",
    types: ["Rock", "Water"]
  }, {
    id: 139,
    name: "Omastar",
    types: ["Rock", "Water"]
  }, {
    id: 140,
    name: "Kabuto",
    types: ["Rock", "Water"]
  }, {
    id: 141,
    name: "Kabutops",
    types: ["Rock", "Water"]
  }, {
    id: 142,
    name: "Aerodactyl",
    types: ["Rock", "Flying"],
    forms: [
      {
        name: "Aerodactyl",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/142.png",
        types: ["Rock", "Flying"],
      },
      {
        name: "Mega Aerodactyl",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/142_f2.png",
        types: ["Rock", "Flying"],
      },
    ],
  }, {
    id: 143,
    name: "Snorlax",
    types: ["Normal"],
    forms: [
      {
        name: "Snorlax",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/143.png",
        types: ["Normal"],
      },
      {
        name: "Gigantamax Snorlax",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/143_f2.png",
        types: ["Normal"],
      },
    ],
  }, {
    id: 144,
    name: "Articuno",
    types: ["Ice", "Flying"],
    forms: [
      {
        name: "Articuno",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/144.png",
        types: ["Ice", "Flying"],
      },
      {
        name: "Galarian Articuno",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/144_f2.png",
        types: ["Psychic", "Flying"],
      },
    ],
  }, {
    id: 145,
    name: "Zapdos",
    types: ["Electric", "Flying"],
    forms: [
      {
        name: "Zapdos",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/145.png",
        types: ["Electric", "Flying"],
      },
      {
        name: "Galarian Zapdos",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/145_f2.png",
        types: ["Fighting", "Flying"],
      },
    ],
  }, {
    id: 146,
    name: "Moltres",
    types: ["Fire", "Flying"],
    forms: [
      {
        name: "Moltres",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/146.png",
        types: ["Fire", "Flying"],
      },
      {
        name: "Galarian Moltres",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/146_f2.png",
        types: ["Dark", "Flying"],
      },
    ],
  }, {
    id: 147,
    name: "Dratini",
    types: ["Dragon"]
  }, {
    id: 148,
    name: "Dragonair",
    types: ["Dragon"]
  }, {
    id: 149,
    name: "Dragonite",
    types: ["Dragon", "Flying"]
  }, {
    id: 150,
    name: "Mewtwo",
    types: ["Psychic"],
    forms: [
      {
        name: "Mewtwo",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/150.png",
        types: ["Psychic"],
      },
      {
        name: "Mega Mewtwo X",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/150_f2.png",
        types: ["Psychic", "Fighting"],
      },
      {
        name: "Mega Mewtwo Y",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/150_f3.png",
        types: ["Psychic"],
      },
    ],
  }, {
    id: 151,
    name: "Mew",
    types: ["Psychic"]
  }, {
    id: 152,
    name: "Chikorita",
    types: ["Grass"]
  }, {
    id: 153,
    name: "Bayleef",
    types: ["Grass"]
  }, {
    id: 154,
    name: "Meganium",
    types: ["Grass"]
  }, {
    id: 155,
    name: "Cyndaquil",
    types: ["Fire"]
  }, {
    id: 156,
    name: "Quilava",
    types: ["Fire"]
  }, {
    id: 157,
    name: "Typhlosion",
    types: ["Fire"],
    forms: [
      {
        name: "Typhlosion",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/157.png",
        types: ["Fire"],
      },
      {
        name: "Hisuian Typhlosion",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/157_f2.png",
        types: ["Fire", "Ghost"],
      },
    ],
  }, {
    id: 158,
    name: "Totodile",
    types: ["Water"]
  }, {
    id: 159,
    name: "Croconaw",
    types: ["Water"]
  }, {
    id: 160,
    name: "Feraligatr",
    types: ["Water"]
  }, {
    id: 161,
    name: "Sentret",
    types: ["Normal"]
  }, {
    id: 162,
    name: "Furret",
    types: ["Normal"]
  }, {
    id: 163,
    name: "Hoothoot",
    types: ["Normal", "Flying"]
  }, {
    id: 164,
    name: "Noctowl",
    types: ["Normal", "Flying"]
  }, {
    id: 165,
    name: "Ledyba",
    types: ["Bug", "Flying"]
  }, {
    id: 166,
    name: "Ledian",
    types: ["Bug", "Flying"]
  }, {
    id: 167,
    name: "Spinarak",
    types: ["Bug", "Poison"]
  }, {
    id: 168,
    name: "Ariados",
    types: ["Bug", "Poison"]
  }, {
    id: 169,
    name: "Crobat",
    types: ["Poison", "Flying"]
  }, {
    id: 170,
    name: "Chinchou",
    types: ["Water", "Electric"]
  }, {
    id: 171,
    name: "Lanturn",
    types: ["Water", "Electric"]
  }, {
    id: 172,
    name: "Pichu",
    types: ["Electric"]
  }, {
    id: 173,
    name: "Cleffa",
    types: ["Fairy"]
  }, {
    id: 174,
    name: "Igglybuff",
    types: ["Normal", "Fairy"]
  }, {
    id: 175,
    name: "Togepi",
    types: ["Fairy"]
  }, {
    id: 176,
    name: "Togetic",
    types: ["Fairy", "Flying"]
  }, {
    id: 177,
    name: "Natu",
    types: ["Psychic", "Flying"]
  }, {
    id: 178,
    name: "Xatu",
    types: ["Psychic", "Flying"]
  }, {
    id: 179,
    name: "Mareep",
    types: ["Electric"]
  }, {
    id: 180,
    name: "Flaaffy",
    types: ["Electric"]
  }, {
    id: 181,
    name: "Ampharos",
    types: ["Electric"],
    forms: [
      {
        name: "Ampharos",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/181.png",
        types: ["Electric"],
      },
      {
        name: "Mega Ampharos",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/181_f2.png",
        types: ["Electric", "Dragon"],
      },
    ],
  }, {
    id: 182,
    name: "Bellossom",
    types: ["Grass"]
  }, {
    id: 183,
    name: "Marill",
    types: ["Water", "Fairy"]
  }, {
    id: 184,
    name: "Azumarill",
    types: ["Water", "Fairy"]
  }, {
    id: 185,
    name: "Sudowoodo",
    types: ["Rock"]
  }, {
    id: 186,
    name: "Politoed",
    types: ["Water"]
  }, {
    id: 187,
    name: "Hoppip",
    types: ["Grass", "Flying"]
  }, {
    id: 188,
    name: "Skiploom",
    types: ["Grass", "Flying"]
  }, {
    id: 189,
    name: "Jumpluff",
    types: ["Grass", "Flying"]
  }, {
    id: 190,
    name: "Aipom",
    types: ["Normal"]
  }, {
    id: 191,
    name: "Sunkern",
    types: ["Grass"]
  }, {
    id: 192,
    name: "Sunflora",
    types: ["Grass"]
  }, {
    id: 193,
    name: "Yanma",
    types: ["Bug", "Flying"]
  }, {
    id: 194,
    name: "Wooper",
    types: ["Water", "Ground"],
    forms: [
      {
        name: "Wooper",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/194.png",
        types: ["Water", "Ground"],
      },
      {
        name: "Paldean Wooper",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/194_f2.png",
        types: ["Poison", "Ground"],
      },
    ],
  }, {
    id: 195,
    name: "Quagsire",
    types: ["Water", "Ground"]
  }, {
    id: 196,
    name: "Espeon",
    types: ["Psychic"]
  }, {
    id: 197,
    name: "Umbreon",
    types: ["Dark"]
  }, {
    id: 198,
    name: "Murkrow",
    types: ["Dark", "Flying"]
  }, {
    id: 199,
    name: "Slowking",
    types: ["Water", "Psychic"],
    forms: [
      {
        name: "Slowking",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/199.png",
        types: ["Water", "Psychic"],
      },
      {
        name: "Galarian Slowking",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/194_f2.png",
        types: ["Poison", "Psychic"],
      },
    ],
  }, {
    id: 200,
    name: "Misdreavus",
    types: ["Ghost"]
  }, {
    id: 201,
    name: "Unown",
    types: ["Psychic"]
  }, {
    id: 202,
    name: "Wobbuffet",
    types: ["Psychic"]
  }, {
    id: 203,
    name: "Girafarig",
    types: ["Normal", "Psychic"]
  }, {
    id: 204,
    name: "Pineco",
    types: ["Bug"]
  }, {
    id: 205,
    name: "Forretress",
    types: ["Bug", "Steel"]
  }, {
    id: 206,
    name: "Dunsparce",
    types: ["Normal"]
  }, {
    id: 207,
    name: "Gligar",
    types: ["Ground", "Flying"]
  }, {
    id: 208,
    name: "Steelix",
    types: ["Steel", "Ground"],
    forms: [
      {
        name: "Steelix",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/208.png",
        types: ["Steel", "Ground"],
      },
      {
        name: "Mega Steelix",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/208_f2.png",
        types: ["Steel", "Ground"],
      },
    ],
  },
  {
    id: 209,
    name: "Snubbull",
    types: ["Fairy"]
  }, {
    id: 210,
    name: "Granbull",
    types: ["Fairy"]
  }, {
    id: 211,
    name: "Qwilfish",
    types: ["Water", "Poison"],
    forms: [
      {
        name: "Qwilfish",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/211.png",
        types: ["Water", "Poison"],
      },
      {
        name: "Hisuian Qwilfish",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/211_f2.png",
        types: ["Dark", "Poison"],
      },
    ],
  },
  {
    id: 212,
    name: "Scizor",
    types: ["Bug", "Steel"],
    forms: [
      {
        name: "Scizor",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/212.png",
        types: ["Bug", "Steel"],
      },
      {
        name: "Mega Scizor",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/212_f2.png",
        types: ["Bug", "Steel"],
      },
    ],
  }, {
    id: 213,
    name: "Shuckle",
    types: ["Bug", "Rock"]
  }, {
    id: 214,
    name: "Heracross",
    types: ["Bug", "Fighting"],
    forms: [
      {
        name: "Heracross",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/214.png",
        types: ["Bug", "Fighting"],
      },
      {
        name: "Mega Heracross",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/214_f2.png",
        types: ["Bug", "Fighting"],
      },
    ],
  }, {
    id: 215,
    name: "Sneasel",
    types: ["Dark", "Ice"],
    forms: [
      {
        name: "Sneasel",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/215.png",
        types: ["Dark", "Ice"],
      },
      {
        name: "Hisuian Sneasel",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/212_f2.png",
        types: ["Poison", "Fighting"],
      },
    ],
  }, {
    id: 216,
    name: "Teddiursa",
    types: ["Normal"]
  }, {
    id: 217,
    name: "Ursaring",
    types: ["Normal"]
  }, {
    id: 218,
    name: "Slugma",
    types: ["Fire"]
  }, {
    id: 219,
    name: "Magcargo",
    types: ["Fire", "Rock"]
  }, {
    id: 220,
    name: "Swinub",
    types: ["Ice", "Ground"]
  }, {
    id: 221,
    name: "Piloswine",
    types: ["Ice", "Ground"]
  }, {
    id: 222,
    name: "Corsola",
    types: ["Water", "Rock"],
    forms: [
      {
        name: "Corsola",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/222.png",
        types: ["Water", "Rock"],
      },
      {
        name: "Galarian Corsola",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/222_f2.png",
        types: ["Ghost"],
      },
    ],
  }, {
    id: 223,
    name: "Remoraid",
    types: ["Water"]
  }, {
    id: 224,
    name: "Octillery",
    types: ["Water"]
  }, {
    id: 225,
    name: "Delibird",
    types: ["Ice", "Flying"]
  }, {
    id: 226,
    name: "Mantine",
    types: ["Water", "Flying"]
  }, {
    id: 227,
    name: "Skarmory",
    types: ["Steel", "Flying"]
  }, {
    id: 228,
    name: "Houndour",
    types: ["Dark", "Fire"]
  }, {
    id: 229,
    name: "Houndoom",
    types: ["Dark", "Fire"],
    forms: [
      {
        name: "Houndoom",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/229.png",
        types: ["Dark", "Fire"],
      },
      {
        name: "Mega Houndoom",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/229_f2.png",
        types: ["Dark", "Fire"],
      },
    ],
  }, {
    id: 230,
    name: "Kingdra",
    types: ["Water", "Dragon"]
  }, {
    id: 231,
    name: "Phanpy",
    types: ["Ground"]
  }, {
    id: 232,
    name: "Donphan",
    types: ["Ground"]
  }, {
    id: 233,
    name: "Porygon2",
    types: ["Normal"]
  }, {
    id: 234,
    name: "Stantler",
    types: ["Normal"]
  }, {
    id: 235,
    name: "Smeargle",
    types: ["Normal"]
  }, {
    id: 236,
    name: "Tyrogue",
    types: ["Fighting"]
  }, {
    id: 237,
    name: "Hitmontop",
    types: ["Fighting"]
  }, {
    id: 238,
    name: "Smoochum",
    types: ["Ice", "Psychic"]
  }, {
    id: 239,
    name: "Elekid",
    types: ["Electric"]
  }, {
    id: 240,
    name: "Magby",
    types: ["Fire"]
  }, {
    id: 241,
    name: "Miltank",
    types: ["Normal"]
  }, {
    id: 242,
    name: "Blissey",
    types: ["Normal"]
  }, {
    id: 243,
    name: "Raikou",
    types: ["Electric"]
  }, {
    id: 244,
    name: "Entei",
    types: ["Fire"]
  }, {
    id: 245,
    name: "Suicune",
    types: ["Water"]
  }, {
    id: 246,
    name: "Larvitar",
    types: ["Rock", "Ground"]
  }, {
    id: 247,
    name: "Pupitar",
    types: ["Rock", "Ground"]
  }, {
    id: 248,
    name: "Tyranitar",
    types: ["Rock", "Dark"],
    forms: [
      {
        name: "Tyranitar",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/248.png",
        types: ["Rock", "Dark"],
      },
      {
        name: "Mega Tyranitar",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/248_f2.png",
        types: ["Rock", "Dark"],
      },
    ],
  }, {
    id: 249,
    name: "Lugia",
    types: ["Psychic", "Flying"]
  }, {
    id: 250,
    name: "Ho-Oh",
    types: ["Fire", "Flying"]
  }, {
    id: 251,
    name: "Celebi",
    types: ["Psychic", "Grass"]
  }, {
    id: 252,
    name: "Treecko",
    types: ["Grass"]
  }, {
    id: 253,
    name: "Grovyle",
    types: ["Grass"]
  }, {
    id: 254,
    name: "Sceptile",
    types: ["Grass"],
    forms: [
      {
        name: "Sceptile",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/254.png",
        types: ["Grass"],
      },
      {
        name: "Mega Sceptile",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/254_f2.png",
        types: ["Grass", "Dragon"],
      },
    ],
  }, {
    id: 255,
    name: "Torchic",
    types: ["Fire"]
  }, {
    id: 256,
    name: "Combusken",
    types: ["Fighting"]
  }, {
    id: 257,
    name: "Blaziken",
    types: ["Fire", "Fighting"],
    forms: [
      {
        name: "Blaziken",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/257.png",
        types: ["Fire", "Fighting"],
      },
      {
        name: "Mega Blaziken",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/257_f2.png",
        types: ["Fire", "Fighting"],
      },
    ],
  }, {
    id: 258,
    name: "Mudkip",
    types: ["Water"]
  }, {
    id: 259,
    name: "Marshtomp",
    types: ["Water", "Ground"]
  }, {
    id: 260,
    name: "Swampert",
    types: ["Water", "Ground"],
    forms: [
      {
        name: "Swampert",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/260.png",
        types: ["Water", "Ground"],
      },
      {
        name: "Mega Swampert",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/260_f2.png",
        types: ["Water", "Ground"],
      },
    ],
  }, {
    id: 261,
    name: "Poochyena",
    types: ["Dark"]
  }, {
    id: 262,
    name: "Mightyena",
    types: ["Dark"]
  }, {
    id: 263,
    name: "Zigzagoon",
    types: ["Normal"],
    forms: [
      {
        name: "Zigzagoon",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/263.png",
        types: ["Normal"],
      },
      {
        name: "Galarian Zigzagoon",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/263_f2.png",
        types: ["Dark", "Normal"],
      },
    ],
  }, {
    id: 264,
    name: "Linoone",
    types: ["Normal"],
    forms: [
      {
        name: "Linoone",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/264.png",
        types: ["Normal"],
      },
      {
        name: "Galarian Linoone",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/264_f2.png",
        types: ["Dark", "Normal"],
      },
    ],
  }, {
    id: 265,
    name: "Wurmple",
    types: ["Bug"]
  }, {
    id: 266,
    name: "Silcoon",
    types: ["Bug"]
  }, {
    id: 267,
    name: "Beautifly",
    types: ["Bug", "Flying"]
  }, {
    id: 268,
    name: "Cascoon",
    types: ["Bug"]
  }, {
    id: 269,
    name: "Dustox",
    types: ["Bug", "Poison"]
  }, {
    id: 270,
    name: "Lotad",
    types: ["Water", "Grass"]
  }, {
    id: 271,
    name: "Lombre",
    types: ["Water", "Grass"]
  }, {
    id: 272,
    name: "Ludicolo",
    types: ["Water", "Grass"]
  }, {
    id: 273,
    name: "Seedot",
    types: ["Grass"]
  }, {
    id: 274,
    name: "Nuzleaf",
    types: ["Grass", "Dark"]
  }, {
    id: 275,
    name: "Shiftry",
    types: ["Grass", "Dark"]
  }, {
    id: 276,
    name: "Taillow",
    types: ["Normal", "Flying"]
  }, {
    id: 277,
    name: "Swellow",
    types: ["Normal", "Flying"]
  }, {
    id: 278,
    name: "Wingull",
    types: ["Water", "Flying"]
  }, {
    id: 279,
    name: "Pelipper",
    types: ["Water", "Flying"]
  }, {
    id: 280,
    name: "Ralts",
    types: ["Psychic", "Fairy"]
  }, {
    id: 281,
    name: "Kirlia",
    types: ["Psychic", "Fairy"]
  }, {
    id: 282,
    name: "Gardevoir",
    types: ["Psychic", "Fairy"],
    forms: [
      {
        name: "Gardevoir",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/282.png",
        types: ["Psychic", "Fairy"],
      },
      {
        name: "Mega Gardevoir",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/282_f2.png",
        types: ["Psychic", "Fairy"],
      },
    ],
  }, {
    id: 283,
    name: "Surskit",
    types: ["Bug", "Water"]
  }, {
    id: 284,
    name: "Masquerain",
    types: ["Bug", "Flying"]
  }, {
    id: 285,
    name: "Shroomish",
    types: ["Grass"]
  }, {
    id: 286,
    name: "Breloom",
    types: ["Grass", "Fighting"]
  }, {
    id: 287,
    name: "Slakoth",
    types: ["Normal"]
  }, {
    id: 288,
    name: "Vigoroth",
    types: ["Normal"]
  }, {
    id: 289,
    name: "Slaking",
    types: ["Normal"]
  }, {
    id: 290,
    name: "Nincada",
    types: ["Bug", "Ground"]
  }, {
    id: 291,
    name: "Ninjask",
    types: ["Bug", "Flying"]
  }, {
    id: 292,
    name: "Shedinja",
    types: ["Bug", "Ghost"]
  }, {
    id: 293,
    name: "Whismur",
    types: ["Normal"]
  }, {
    id: 294,
    name: "Loudred",
    types: ["Normal"]
  }, {
    id: 295,
    name: "Exploud",
    types: ["Normal"]
  }, {
    id: 296,
    name: "Makuhita",
    types: ["Fighting"]
  }, {
    id: 297,
    name: "Hariyama",
    types: ["Fighting"]
  }, {
    id: 298,
    name: "Azurill",
    types: ["Normal", "Fairy"]
  }, {
    id: 299,
    name: "Nosepass",
    types: ["Rock"]
  }, {
    id: 300,
    name: "Skitty",
    types: ["Normal"]
  }, {
    id: 301,
    name: "Delcatty",
    types: ["Normal"]
  }, {
    id: 302,
    name: "Sableye",
    types: ["Dark", "Ghost"],
    forms: [
      {
        name: "Sableye",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/302.png",
        types: ["Dark", "Ghost"],
      },
      {
        name: "Mega Sableye",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/302_f2.png",
        types: ["Dark", "Ghost"],
      },
    ],
  }, {
    id: 303,
    name: "Mawile",
    types: ["Steel", "Fairy"],
    forms: [
      {
        name: "Mawile",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/303.png",
        types: ["Steel", "Fairy"],
      },
      {
        name: "Mega Mawile",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/303_f2.png",
        types: ["Steel", "Fairy"],
      },
    ],
  }, {
    id: 304,
    name: "Aron",
    types: ["Steel", "Rock"]
  }, {
    id: 305,
    name: "Lairon",
    types: ["Steel", "Rock"]
  }, {
    id: 306,
    name: "Aggron",
    types: ["Steel", "Rock"],
    forms: [
      {
        name: "Aggron",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/306.png",
        types: ["Steel", "Rock"],
      },
      {
        name: "Mega Aggron",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/306_f2.png",
        types: ["Steel"],
      },
    ],
  }, {
    id: 307,
    name: "Meditite",
    types: ["Fighting", "Psychic"]
  }, {
    id: 308,
    name: "Medicham",
    types: ["Fighting", "Psychic"],
    forms: [
      {
        name: "Medicham",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/308.png",
        types: ["Fighting", "Psychic"],
      },
      {
        name: "Mega Medicham",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/308_f2.png",
        types: ["Fighting", "Psychic"],
      },
    ],
  }, {
    id: 309,
    name: "Electrike",
    types: ["Electric"]
  }, {
    id: 310,
    name: "Manectric",
    types: ["Electric"],
    forms: [
      {
        name: "Manectric",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/310.png",
        types: ["Electric"],
      },
      {
        name: "Mega Manectric",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/310_f2.png",
        types: ["Electric"],
      },
    ],
  }, {
    id: 311,
    name: "Plusle",
    types: ["Electric"],
  },
  {
    id: 312,
    name: "Minun",
    types: ["Electric"]
  }, {
    id: 313,
    name: "Volbeat",
    types: ["Bug"]
  }, {
    id: 314,
    name: "Illumise",
    types: ["Bug"]
  }, {
    id: 315,
    name: "Roselia",
    types: ["Grass", "Poison"]
  }, {
    id: 316,
    name: "Gulpin",
    types: ["Poison"]
  }, {
    id: 317,
    name: "Swalot",
    types: ["Poison"]
  }, {
    id: 318,
    name: "Carvanha",
    types: ["Water", "Dark"]
  }, {
    id: 319,
    name: "Sharpedo",
    types: ["Water", "Dark"],
    forms: [
      {
        name: "Sharpedo",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/319.png",
        types: ["Water", "Dark"],
      },
      {
        name: "Mega Sharpedo",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/319_f2.png",
        types: ["Water", "Dark"],
      },
    ],
  }, {
    id: 320,
    name: "Wailmer",
    types: ["Water"]
  }, {
    id: 321,
    name: "Wailord",
    types: ["Water"]
  }, {
    id: 322,
    name: "Numel",
    types: ["Fire", "Ground"]
  }, {
    id: 323,
    name: "Camerupt",
    types: ["Fire", "Ground"],
    forms: [
      {
        name: "Camerupt",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/323.png",
        types: ["Fire", "Ground"],
      },
      {
        name: "Mega Camerupt",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/323_f2.png",
        types: ["Fire", "Ground"],
      },
    ],
  }, {
    id: 324,
    name: "Torkoal",
    types: ["Fire"]
  }, {
    id: 325,
    name: "Spoink",
    types: ["Psychic"]
  }, {
    id: 326,
    name: "Grumpig",
    types: ["Psychic"]
  }, {
    id: 327,
    name: "Spinda",
    types: ["Normal"]
  }, {
    id: 328,
    name: "Trapinch",
    types: ["Ground"]
  }, {
    id: 329,
    name: "Vibrava",
    types: ["Ground", "Dragon"]
  }, {
    id: 330,
    name: "Flygon",
    types: ["Ground", "Dragon"]
  }, {
    id: 331,
    name: "Cacnea",
    types: ["Grass"]
  }, {
    id: 332,
    name: "Cacturne",
    types: ["Grass", "Dark"]
  }, {
    id: 333,
    name: "Swablu",
    types: ["Normal", "Flying"]
  }, {
    id: 334,
    name: "Altaria",
    types: ["Dragon", "Flying"],
    forms: [
      {
        name: "Altaria",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/334.png",
        types: ["Dragon", "Flying"],
      },
      {
        name: "Mega Altaria",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/334_f2.png",
        types: ["Dragon", "Fairy"],
      },
    ],
  }, {
    id: 335,
    name: "Zangoose",
    types: ["Normal"]
  }, {
    id: 336,
    name: "Seviper",
    types: ["Poison"]
  }, {
    id: 337,
    name: "Lunatone",
    types: ["Rock", "Psychic"]
  }, {
    id: 338,
    name: "Solrock",
    types: ["Rock", "Psychic"]
  }, {
    id: 339,
    name: "Barboach",
    types: ["Water", "Ground"]
  }, {
    id: 340,
    name: "Whiscash",
    types: ["Water", "Ground"]
  }, {
    id: 341,
    name: "Corphish",
    types: ["Water"]
  }, {
    id: 342,
    name: "Crawdaunt",
    types: ["Water", "Dark"]
  }, {
    id: 343,
    name: "Baltoy",
    types: ["Ground", "Psychic"]
  }, {
    id: 344,
    name: "Claydol",
    types: ["Ground", "Psychic"]
  }, {
    id: 345,
    name: "Lileep",
    types: ["Rock", "Grass"]
  }, {
    id: 346,
    name: "Cradily",
    types: ["Rock", "Grass"]
  }, {
    id: 347,
    name: "Anorith",
    types: ["Rock", "Bug"]
  }, {
    id: 348,
    name: "Armaldo",
    types: ["Rock", "Bug"]
  }, {
    id: 349,
    name: "Feebas",
    types: ["Water"]
  }, {
    id: 350,
    name: "Milotic",
    types: ["Water"]
  }, {
    id: 351,
    name: "Castform",
    types: ["Normal"]
  }, {
    id: 352,
    name: "Kecleon",
    types: ["Normal"]
  }, {
    id: 353,
    name: "Shuppet",
    types: ["Ghost"]
  }, {
    id: 354,
    name: "Banette",
    types: ["Ghost"],
    forms: [
      {
        name: "Banette",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/354.png",
        types: ["Ghost"],
      },
      {
        name: "Mega Banette",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/354_f2.png",
        types: ["Ghost"],
      },
    ],
  }, {
    id: 355,
    name: "Duskull",
    types: ["Ghost"]
  }, {
    id: 356,
    name: "Dusclops",
    types: ["Ghost"]
  }, {
    id: 357,
    name: "Tropius",
    types: ["Grass", "Flying"]
  }, {
    id: 358,
    name: "Chimecho",
    types: ["Psychic"]
  }, {
    id: 359,
    name: "Absol",
    types: ["Dark"],
    forms: [
      {
        name: "Absol",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/359.png",
        types: ["Dark"],
      },
      {
        name: "Mega Absol",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/359_f2.png",
        types: ["Dark"],
      },
    ],
  }, {
    id: 360,
    name: "Wynaut",
    types: ["Psychic"]
  }, {
    id: 361,
    name: "Snorunt",
    types: ["Ice"]
  }, {
    id: 362,
    name: "Glalie",
    types: ["Ice"],
    forms: [
      {
        name: "Glalie",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/362.png",
        types: ["Ice"],
      },
      {
        name: "Mega Glalie",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/362_f2.png",
        types: ["Ice"],
      },
    ],
  }, {
    id: 363,
    name: "Spheal",
    types: ["Ice", "Water"]
  }, {
    id: 364,
    name: "Sealeo",
    types: ["Ice", "Water"]
  }, {
    id: 365,
    name: "Walrein",
    types: ["Ice", "Water"]
  }, {
    id: 366,
    name: "Clamperl",
    types: ["Water"]
  }, {
    id: 367,
    name: "Huntail",
    types: ["Water"]
  }, {
    id: 368,
    name: "Gorebyss",
    types: ["Water"]
  }, {
    id: 369,
    name: "Relicanth",
    types: ["Water", "Rock"]
  }, {
    id: 370,
    name: "Luvdisc",
    types: ["Water"]
  }, {
    id: 371,
    name: "Bagon",
    types: ["Dragon"]
  }, {
    id: 372,
    name: "Shelgon",
    types: ["Dragon"]
  }, {
    id: 373,
    name: "Salamence",
    types: ["Dragon", "Flying"],
    forms: [
      {
        name: "Salamence",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/373.png",
        types: ["Dragon", "Flying"],
      },
      {
        name: "Mega Salamence",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/373_f2.png",
        types: ["Dragon", "Flying"],
      },
    ],
  }, {
    id: 374,
    name: "Beldum",
    types: ["Steel", "Psychic"]
  }, {
    id: 375,
    name: "Metang",
    types: ["Steel", "Psychic"]
  }, {
    id: 376,
    name: "Metagross",
    types: ["Steel", "Psychic"],
    forms: [
      {
        name: "Metagross",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/376.png",
        types: ["Steel", "Psychic"],
      },
      {
        name: "Mega Metagross",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/376_f2.png",
        types: ["Steel", "Psychic"],
      },
    ],
  }, {
    id: 377,
    name: "Regirock",
    types: ["Rock"]
  }, {
    id: 378,
    name: "Regice",
    types: ["Ice"]
  }, {
    id: 379,
    name: "Registeel",
    types: ["Steel"]
  }, {
    id: 380,
    name: "Latias",
    types: ["Dragon", "Psychic"],
    forms: [
      {
        name: "Latias",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/380.png",
        types: ["Dragon", "Psychic"],
      },
      {
        name: "Mega Latias",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/380_f2.png",
        types: ["Dragon", "Psychic"],
      },
    ],
  }, {
    id: 381,
    name: "Latios",
    types: ["Dragon", "Psychic"],
    forms: [
      {
        name: "Latios",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/381.png",
        types: ["Dragon", "Psychic"],
      },
      {
        name: "Mega Latios",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/381_f2.png",
        types: ["Dragon", "Psychic"],
      },
    ],
  }, {
    id: 382,
    name: "Kyogre",
    types: ["Water"],
    forms: [
      {
        name: "Kyogre",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/382.png",
        types: ["Water"],
      },
      {
        name: "Primal Kyogre",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/382_f2.png",
        types: ["Water"],
      },
    ],
  }, {
    id: 383,
    name: "Groudon",
    types: ["Ground"],
    forms: [
      {
        name: "Groudon",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/382.png",
        types: ["Ground"],
      },
      {
        name: "Primal Groudon",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/383_f2.png",
        types: ["Ground", "Fire"],
      },
    ],
  }, {
    id: 384,
    name: "Rayquaza",
    types: ["Dragon", "Flying"],
    forms: [
      {
        name: "Rayquaza",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/384.png",
        types: ["Dragon", "Flying"],
      },
      {
        name: "Mega Rayquaza",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/384_f2.png",
        types: ["Dragon", "Flying"],
      },
    ],
  }, {
    id: 385,
    name: "Jirachi",
    types: ["Steel", "Psychic"]
  }, {
    id: 386,
    name: "Deoxys",
    types: ["Psychic"],
    forms: [
      {
        name: "Deoxys (Normal Forme)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/386.png",
        types: ["Psychic"],
      },
      {
        name: "Deoxys (Attack Forme)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/386_f2.png",
        types: ["Psychic"],
      },
      {
        name: "Deoxys (Defense Forme)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/386_f3.png",
        types: ["Psychic"],
      },
      {
        name: "Deoxys (Speed Forme)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/386_f4.png",
        types: ["Psychic"],
      },
    ],
  }, {
    id: 387,
    name: "Turtwig",
    types: ["Grass"]
  }, {
    id: 388,
    name: "Grotle",
    types: ["Grass"]
  }, {
    id: 389,
    name: "Torterra",
    types: ["Grass", "Ground"]
  }, {
    id: 390,
    name: "Chimchar",
    types: ["Fire"]
  }, {
    id: 391,
    name: "Monferno",
    types: ["Fire", "Fighting"]
  }, {
    id: 392,
    name: "Infernape",
    types: ["Fire", "Fighting"]
  }, {
    id: 393,
    name: "Piplup",
    types: ["Water"]
  }, {
    id: 394,
    name: "Prinplup",
    types: ["Water"]
  }, {
    id: 395,
    name: "Empoleon",
    types: ["Water", "Steel"]
  }, {
    id: 396,
    name: "Starly",
    types: ["Normal", "Flying"]
  }, {
    id: 397,
    name: "Staravia",
    types: ["Normal", "Flying"]
  }, {
    id: 398,
    name: "Staraptor",
    types: ["Normal", "Flying"]
  }, {
    id: 399,
    name: "Bidoof",
    types: ["Normal"]
  }, {
    id: 400,
    name: "Bibarel",
    types: ["Normal", "Water"]
  }, {
    id: 401,
    name: "Kricketot",
    types: ["Bug"]
  }, {
    id: 402,
    name: "Kricketune",
    types: ["Bug"]
  }, {
    id: 403,
    name: "Shinx",
    types: ["Electric"]
  }, {
    id: 404,
    name: "Luxio",
    types: ["Electric"]
  }, {
    id: 405,
    name: "Luxray",
    types: ["Electric"]
  }, {
    id: 406,
    name: "Budew",
    types: ["Grass", "Poison"]
  }, {
    id: 407,
    name: "Roserade",
    types: ["Grass", "Poison"]
  }, {
    id: 408,
    name: "Cranidos",
    types: ["Rock"]
  }, {
    id: 409,
    name: "Rampardos",
    types: ["Rock"]
  }, {
    id: 410,
    name: "Shieldon",
    types: ["Rock", "Steel"]
  }, {
    id: 411,
    name: "Bastiodon",
    types: ["Rock", "Steel"]
  }, {
    id: 412,
    name: "Burmy",
    types: ["Bug"]
  }, {
    id: 413,
    name: "Wormadam",
    types: ["Bug", "Grass"],
    forms: [
      {
        name: "Wormadam (Plant Cloak)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/413.png",
        types: ["Bug", "Grass"],
      },
      {
        name: "Wormadam (Sandy Cloak)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/413_f2.png",
        types: ["Bug", "Ground"],
      },
      {
        name: "Wormadam (Thrash Cloak)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/413_f3.png",
        types: ["Bug", "Steel"],
      },
    ],
  }, {
    id: 414,
    name: "Mothim",
    types: ["Bug", "Flying"]
  }, {
    id: 415,
    name: "Combee",
    types: ["Bug", "Flying"]
  }, {
    id: 416,
    name: "Vespiquen",
    types: ["Bug", "Flying"]
  }, {
    id: 417,
    name: "Pachirisu",
    types: ["Electric"]
  }, {
    id: 418,
    name: "Buizel",
    types: ["Water"]
  }, {
    id: 419,
    name: "Floatzel",
    types: ["Water"]
  }, {
    id: 420,
    name: "Cherubi",
    types: ["Grass"]
  }, {
    id: 421,
    name: "Cherrim",
    types: ["Grass"],
    forms: [
      {
        name: "Cherrim (Overcast Form)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/421.png",
        types: ["Grass"],
      },
      {
        name: "Cherrim (Sunshine Form)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/421_f2.png",
        types: ["Grass"],
      },
    ],
  }, {
    id: 422,
    name: "Shellos",
    types: ["Water"],
    forms: [
      {
        name: "Shellos (West Sea)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/422.png",
        types: ["Water"],
      },
      {
        name: "Shellos (East Sea)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/422_f2.png",
        types: ["Water"],
      },
    ],
  }, {
    id: 423,
    name: "Gastrodon",
    types: ["Water", "Ground"],
    forms: [
      {
        name: "Gastrodon (West Sea)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/423.png",
        types: ["Water", "Ground"],
      },
      {
        name: "Gastrodon (East Sea)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/423_f2.png",
        types: ["Water", "Ground"],
      },
    ],
  }, {
    id: 424,
    name: "Ambipom",
    types: ["Normal"]
  }, {
    id: 425,
    name: "Drifloon",
    types: ["Ghost", "Flying"]
  }, {
    id: 426,
    name: "Drifblim",
    types: ["Ghost", "Flying"]
  }, {
    id: 427,
    name: "Buneary",
    types: ["Normal"]
  }, {
    id: 428,
    name: "Lopunny",
    types: ["Normal"],
    forms: [
      {
        name: "Lopunny",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/428.png",
        types: ["Normal"],
      },
      {
        name: "Mega Lopunny",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/428_f2.png",
        types: ["Normal", "Fighting"],
      },
    ],
  }, {
    id: 429,
    name: "Mismagius",
    types: ["Ghost"]
  }, {
    id: 430,
    name: "Honchkrow",
    types: ["Dark", "Flying"]
  }, {
    id: 431,
    name: "Glameow",
    types: ["Normal"]
  }, {
    id: 432,
    name: "Purugly",
    types: ["Normal"]
  }, {
    id: 433,
    name: "Chingling",
    types: ["Psychic"]
  }, {
    id: 434,
    name: "Stunky",
    types: ["Poison", "Dark"]
  }, {
    id: 435,
    name: "Skuntank",
    types: ["Poison", "Dark"]
  }, {
    id: 436,
    name: "Bronzor",
    types: ["Steel", "Psychic"]
  }, {
    id: 437,
    name: "Bronzong",
    types: ["Steel", "Psychic"]
  }, {
    id: 438,
    name: "Bonsly",
    types: ["Rock"]
  }, {
    id: 439,
    name: "Mime Jr.",
    types: ["Psychic", "Fairy"]
  }, {
    id: 440,
    name: "Happiny",
    types: ["Normal"]
  }, {
    id: 441,
    name: "Chatot",
    types: ["Normal", "Flying"]
  }, {
    id: 442,
    name: "Spiritomb",
    types: ["Ghost", "Dark"]
  }, {
    id: 443,
    name: "Gible",
    types: ["Dragon", "Ground"]
  }, {
    id: 444,
    name: "Gabite",
    types: ["Dragon", "Ground"]
  }, {
    id: 445,
    name: "Garchomp",
    types: ["Dragon", "Ground"],
    forms: [
      {
        name: "Garchomp",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/445.png",
        types: ["Dragon", "Ground"],
      },
      {
        name: "Mega Garchomp",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/445_f2.png",
        types: ["Dragon", "Ground"],
      },
    ],
  }, {
    id: 446,
    name: "Munchlax",
    types: ["Normal"]
  }, {
    id: 447,
    name: "Riolu",
    types: ["Fighting"]
  }, {
    id: 448,
    name: "Lucario",
    types: ["Fighting", "Steel"],
    forms: [
      {
        name: "Lucario",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/448.png",
        types: ["Fighting", "Steel"],
      },
      {
        name: "Mega Lucario",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/448_f2.png",
        types: ["Fighting", "Steel"],
      },
    ],
  }, {
    id: 449,
    name: "Hippopotas",
    types: ["Ground"]
  }, {
    id: 450,
    name: "Hippowdon",
    types: ["Ground"]
  }, {
    id: 451,
    name: "Skorupi",
    types: ["Poison", "Bug"]
  }, {
    id: 452,
    name: "Drapion",
    types: ["Poison", "Dark"]
  }, {
    id: 453,
    name: "Croagunk",
    types: ["Poison", "Fighting"]
  }, {
    id: 454,
    name: "Toxicroak",
    types: ["Poison", "Fighting"]
  }, {
    id: 455,
    name: "Carnivine",
    types: ["Grass"]
  }, {
    id: 456,
    name: "Finneon",
    types: ["Water"]
  }, {
    id: 457,
    name: "Lumineon",
    types: ["Water"]
  }, {
    id: 458,
    name: "Mantyke",
    types: ["Water", "Flying"]
  }, {
    id: 459,
    name: "Snover",
    types: ["Grass", "Ice"]
  }, {
    id: 460,
    name: "Abomasnow",
    types: ["Grass", "Ice"],
    forms: [
      {
        name: "Abomasnow",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/460.png",
        types: ["Grass", "Ice"],
      },
      {
        name: "Mega Abomasnow",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/460_f2.png",
        types: ["Grass", "Ice"],
      },
    ],
  }, {
    id: 461,
    name: "Weavile",
    types: ["Dark", "Ice"]
  }, {
    id: 462,
    name: "Magnezone",
    types: ["Electric", "Steel"]
  }, {
    id: 463,
    name: "Lickilicky",
    types: ["Normal"]
  }, {
    id: 464,
    name: "Rhyperior",
    types: ["Ground", "Rock"]
  }, {
    id: 465,
    name: "Tangrowth",
    types: ["Grass"]
  }, {
    id: 466,
    name: "Electivire",
    types: ["Electric"]
  }, {
    id: 467,
    name: "Magmortar",
    types: ["Fire"]
  }, {
    id: 468,
    name: "Togekiss",
    types: ["Fairy", "Flying"]
  }, {
    id: 469,
    name: "Yanmega",
    types: ["Bug", "Flying"]
  }, {
    id: 470,
    name: "Leafeon",
    types: ["Grass"]
  }, {
    id: 471,
    name: "Glaceon",
    types: ["Ice"]
  }, {
    id: 472,
    name: "Gliscor",
    types: ["Ground", "Flying"]
  }, {
    id: 473,
    name: "Mamoswine",
    types: ["Ice", "Ground"]
  }, {
    id: 474,
    name: "Porygon-Z",
    types: ["Normal"]
  }, {
    id: 475,
    name: "Gallade",
    types: ["Psychic", "Fighting"],
    forms: [
      {
        name: "Gallade",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/475.png",
        types: ["Psychic", "Fighting"],
      },
      {
        name: "Mega Gallade",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/475_f2.png",
        types: ["Psychic", "Fighting"],
      },
    ],
  }, {
    id: 476,
    name: "Probopass",
    types: ["Rock", "Steel"]
  }, {
    id: 477,
    name: "Dusknoir",
    types: ["Ghost"]
  }, {
    id: 478,
    name: "Froslass",
    types: ["ICe", "Ghost"]
  }, {
    id: 479,
    name: "Rotom",
    types: ["Electric", "Ghost"],
    forms: [
      {
        name: "Rotom",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/479.png",
        types: ["Electric", "Ghost"],
      },
      {
        name: "Heat Rotom",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/479_f2.png",
        types: ["Electric", "Fire"],
      },
      {
        name: "Wash Rotom",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/479_f3.png",
        types: ["Electric", "Water"],
      },
      {
        name: "Frost Rotom",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/479_f4.png",
        types: ["Electric", "Ice"],
      },
      {
        name: "Fan Rotom",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/479_f5.png",
        types: ["Electric", "Flying"],
      },
      {
        name: "Mow Rotom",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/479_f6.png",
        types: ["Electric", "Grass"],
      },
    ],
  }, {
    id: 480,
    name: "Uxie",
    types: ["Psychic"]
  }, {
    id: 481,
    name: "Mesprit",
    types: ["Psychic"]
  }, {
    id: 482,
    name: "Azelf",
    types: ["Psychic"]
  }, {
    id: 483,
    name: "Dialga",
    types: ["Steel", "Dragon"],
    forms: [
      {
        name: "Dialga",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/483.png",
        types: ["Steel", "Dragon"],
      },
      {
        name: "Dialga (Origin Forme)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/483_f2.png",
        types: ["Steel", "Dragon"],
      },
    ],
  }, {
    id: 484,
    name: "Palkia",
    types: ["Water", "Dragon"],
    forms: [
      {
        name: "Dialga",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/484.png",
        types: ["Water", "Dragon"],
      },
      {
        name: "Palkia (Origin Forme)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/484_f2.png",
        types: ["Water", "Dragon"],
      },
    ],
  }, {
    id: 485,
    name: "Heatran",
    types: ["Fire", "Steel"]
  }, {
    id: 486,
    name: "Regigigas",
    types: ["Normal"]
  }, {
    id: 487,
    name: "Giratina",
    types: ["Ghost", "Dragon"],
    forms: [
      {
        name: "Giratina (Altered Forme)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/487.png",
        types: ["Ghost", "Dragon"],
      },
      {
        name: "Giratina (Origin Forme)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/487_f2.png",
        types: ["Ghost", "Dragon"],
      },
    ],
  }, {
    id: 488,
    name: "Cresselia",
    types: ["Psychic"]
  }, {
    id: 489,
    name: "Phione",
    types: ["Water"]
  }, {
    id: 490,
    name: "Manaphy",
    types: ["Water"]
  }, {
    id: 491,
    name: "Darkrai",
    types: ["Dark"]
  }, {
    id: 492,
    name: "Shaymin",
    types: ["Grass"],
    forms: [
      {
        name: "Shaymin (Land Forme)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/492.png",
        types: ["Grass"],
      },
      {
        name: "Shaymin (Sky Forme)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/492_f2.png",
        types: ["Grass", "Flying"],
      },
    ],
  }, {
    id: 493,
    name: "Arceus",
    types: ["Normal"]
  }, {
    id: 494,
    name: "Victini",
    types: ["Psychic", "Fire"]
  }, {
    id: 495,
    name: "Snivy",
    types: ["Grass"]
  }, {
    id: 496,
    name: "Servine",
    types: ["Grass"]
  }, {
    id: 497,
    name: "Serperior",
    types: ["Grass"]
  }, {
    id: 498,
    name: "Tepig",
    types: ["Fire"]
  }, {
    id: 499,
    name: "Pignite",
    types: ["Fire", "Fighting"]
  }, {
    id: 500,
    name: "Emboar",
    types: ["Fire", "Fighting"]
  }, {
    id: 501,
    name: "Oshawott",
    types: ["Water"]
  }, {
    id: 502,
    name: "Dewott",
    types: ["Water"]
  }, {
    id: 503,
    name: "Samurott",
    types: ["Water"],
    forms: [
      {
        name: "Samurott",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/503.png",
        types: ["Water"],
      },
      {
        name: "Hisuian Samurott",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/503_f2.png",
        types: ["Water", "Dark"],
      },
    ],
  }, {
    id: 504,
    name: "Patrat",
    types: ["Normal"]
  }, {
    id: 505,
    name: "Watchog",
    types: ["Normal"]
  }, {
    id: 506,
    name: "Lillipup",
    types: ["Normal"]
  }, {
    id: 507,
    name: "Herdier",
    types: ["Normal"]
  }, {
    id: 508,
    name: "Stoutland",
    types: ["Normal"]
  }, {
    id: 509,
    name: "Purrloin",
    types: ["Dark"]
  }, {
    id: 510,
    name: "Liepard",
    types: ["Dark"]
  }, {
    id: 511,
    name: "Pansage",
    types: ["Grass"]
  }, {
    id: 512,
    name: "Simisage",
    types: ["Grass"]
  }, {
    id: 513,
    name: "Pansear",
    types: ["Fire"]
  }, {
    id: 514,
    name: "Simisear",
    types: ["Fire"]
  }, {
    id: 515,
    name: "Panpour",
    types: ["Water"]
  }, {
    id: 516,
    name: "Simipour",
    types: ["Water"]
  }, {
    id: 517,
    name: "Munna",
    types: ["Psychic"]
  }, {
    id: 518,
    name: "Musharna",
    types: ["Psychic"]
  }, {
    id: 519,
    name: "Pidove",
    types: ["Normal", "Flying"]
  }, {
    id: 520,
    name: "Tranquill",
    types: ["Normal", "Flying"]
  }, {
    id: 521,
    name: "Unfezant",
    types: ["Normal", "Flying"]
  }, {
    id: 522,
    name: "Blitzle",
    types: ["Electric"]
  }, {
    id: 523,
    name: "Zebstrika",
    types: ["Electric"]
  }, {
    id: 524,
    name: "Roggenrola",
    types: ["Rock"]
  }, {
    id: 525,
    name: "Boldore",
    types: ["Rock"]
  }, {
    id: 526,
    name: "Gigalith",
    types: ["Rock"]
  }, {
    id: 527,
    name: "Woobat",
    types: ["¨Psychic", "Flying"]
  }, {
    id: 528,
    name: "Swoobat",
    types: ["Psychic", "Flying"]
  }, {
    id: 529,
    name: "Drilbur",
    types: ["Ground"]
  }, {
    id: 530,
    name: "Excadrill",
    types: ["Ground", "Steel"]
  }, {
    id: 531,
    name: "Audino",
    types: ["Normal"],
    forms: [
      {
        name: "Audino",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/531.png",
        types: ["Normal"],
      },
      {
        name: "Mega Audino",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/531_f2.png",
        types: ["Normal", "Fairy"],
      },
    ],
  }, {
    id: 532,
    name: "Timburr",
    types: ["Fighting"]
  }, {
    id: 533,
    name: "Gurdurr",
    types: ["Fighting"]
  }, {
    id: 534,
    name: "Conkeldurr",
    types: ["Fighting"]
  }, {
    id: 535,
    name: "Tympole",
    types: ["Water"]
  }, {
    id: 536,
    name: "Palpitoad",
    types: ["Water", "Ground"]
  }, {
    id: 537,
    name: "Seismitoad",
    types: ["Water", "Ground"]
  }, {
    id: 538,
    name: "Throh",
    types: ["Fighting"]
  }, {
    id: 539,
    name: "Sawk",
    types: ["Fighting"]
  }, {
    id: 540,
    name: "Sewaddle",
    types: ["Bug", "Grass"]
  }, {
    id: 541,
    name: "Swadloon",
    types: ["Bug", "Grass"]
  }, {
    id: 542,
    name: "Leavanny",
    types: ["Bug", "Grass"]
  }, {
    id: 543,
    name: "Venipede",
    types: ["Bug", "Poison"]
  }, {
    id: 544,
    name: "Whirlipede",
    types: ["Bug", "Poison"]
  }, {
    id: 545,
    name: "Scolipede",
    types: ["Bug", "Poison"]
  }, {
    id: 546,
    name: "Cottonee",
    types: ["Grass", "Fairy"]
  }, {
    id: 547,
    name: "Whimsicott",
    types: ["Grass", "Fairy"]
  }, {
    id: 548,
    name: "Petilil",
    types: ["Grass"]
  }, {
    id: 549,
    name: "Lilligant",
    types: ["Grass"],
    forms: [
      {
        name: "Lilligant",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/549.png",
        types: ["Grass"],
      },
      {
        name: "Hisuian Lilligant",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/549_f2.png",
        types: ["Grass", "Fighting"],
      },
    ],
  }, {
    id: 550,
    name: "Basculin",
    types: ["Water"],
    forms: [
      {
        name: "Basculin (Red-Striped)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/550.png",
        types: ["Water"],
      },
      {
        name: "Basculin (Blue-Striped)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/550_f2.png",
        types: ["Water"],
      },
      {
        name: "Basculin (White-Striped)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/550_f3.png",
        types: ["Water"],
      },
    ],
  }, {
    id: 551,
    name: "Sandile",
    types: ["Ground", "Dark"]
  }, {
    id: 552,
    name: "Krokorok",
    types: ["Ground", "Dark"]
  }, {
    id: 553,
    name: "Krookodile",
    types: ["Ground", "Dark"]
  }, {
    id: 554,
    name: "Darumaka",
    types: ["Fire"]
  }, {
    id: 555,
    name: "Darmanitan",
    types: ["Fire"]
  }, {
    id: 556,
    name: "Maractus",
    types: ["Grass"]
  }, {
    id: 557,
    name: "Dwebble",
    types: ["Bug", "Rock"]
  }, {
    id: 558,
    name: "Crustle",
    types: ["Bug", "Rock"]
  }, {
    id: 559,
    name: "Scraggy",
    types: ["Dark", "Fighting"]
  }, {
    id: 560,
    name: "Scrafty",
    types: ["Dark", "Fighting"]
  }, {
    id: 561,
    name: "Sigilyph",
    types: ["Psychic", "Flying"]
  }, {
    id: 562,
    name: "Yamask",
    types: ["Ghost"],
    forms: [
      {
        name: "Yamask",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/562.png",
        types: ["Ghost"],
      },
      {
        name: "Galarian Yamask",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/562_f2.png",
        types: ["Ground", "Ghost"],
      },
    ],
  }, {
    id: 563,
    name: "Cofagrigus",
    types: ["Ghost"]
  }, {
    id: 564,
    name: "Tirtouga",
    types: ["Water", "Rock"]
  }, {
    id: 565,
    name: "Carracosta",
    types: ["Water", "Rock"]
  }, {
    id: 566,
    name: "Archen",
    types: ["Rock", "Flying"]
  }, {
    id: 567,
    name: "Archeops",
    types: ["Rock", "Flying"]
  }, {
    id: 568,
    name: "Trubbish",
    types: ["Poison"]
  }, {
    id: 569,
    name: "Garbodor",
    types: ["Poison"],
    forms: [
      {
        name: "Garbordor",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/569.png",
        types: ["Poison"],
      },
      {
        name: "Gigantamax Garbordor",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/569_f2.png",
        types: ["Poison"],
      },
    ],
  }, {
    id: 570,
    name: "Zorua",
    types: ["Dark"],
    forms: [
      {
        name: "Zorua",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/570.png",
        types: ["Dark"],
      },
      {
        name: "Hisuian Zorua",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/570_f2.png",
        types: ["Normal", "Ghost"],
      },
    ],
  }, {
    id: 571,
    name: "Zoroark",
    types: ["Dark"],
    forms: [
      {
        name: "Zoroark",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/571.png",
        types: ["Dark"],
      },
      {
        name: "Hisuian Zoroark",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/571_f2.png",
        types: ["Normal", "Ghost"],
      },
    ],
  }, {
    id: 572,
    name: "Minccino",
    types: ["Normal"]
  }, {
    id: 573,
    name: "Cinccino",
    types: ["Normal"]
  }, {
    id: 574,
    name: "Gothita",
    types: ["Psychic"]
  }, {
    id: 575,
    name: "Gothorita",
    types: ["Psychic"]
  }, {
    id: 576,
    name: "Gothitelle",
    types: ["Psychic"]
  }, {
    id: 577,
    name: "Solosis",
    types: ["Psychic"]
  }, {
    id: 578,
    name: "Duosion",
    types: ["Psychic"]
  }, {
    id: 579,
    name: "Reuniclus",
    types: ["Psychic"]
  }, {
    id: 580,
    name: "Ducklett",
    types: ["Water", "Flying"]
  }, {
    id: 581,
    name: "Swanna",
    types: ["Water", "Flying"]
  }, {
    id: 582,
    name: "Vanillite",
    types: ["Ice"]
  }, {
    id: 583,
    name: "Vanillish",
    types: ["Ice"]
  }, {
    id: 584,
    name: "Vanilluxe",
    types: ["Ice"]
  }, {
    id: 585,
    name: "Deerling",
    types: ["Normal", "Grass"],
    forms: [
      {
        name: "Deerling (Spring Form)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/585.png",
        types: ["Normal", "Grass"],
      },
      {
        name: "Deerling (Summer Form)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/585_f2.png",
        types: ["Normal", "Grass"],
      },
      {
        name: "Deerling (Autumn Form)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/585_f3.png",
        types: ["Normal", "Grass"],
      },
      {
        name: "Deerling (Winter Form)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/585_f4.png",
        types: ["Normal", "Grass"],
      },
    ],
  }, {
    id: 586,
    name: "Sawsbuck",
    types: ["Normal", "Grass"],
    forms: [
      {
        name: "Sawsbuck (Spring Form)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/586.png",
        types: ["Normal", "Grass"],
      },
      {
        name: "Sawsbuck (Summer Form)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/586_f2.png",
        types: ["Normal", "Grass"],
      },
      {
        name: "Sawsbuck (Autumn Form)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/586_f3.png",
        types: ["Normal", "Grass"],
      },
      {
        name: "Sawsbuck (Winter Form)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/586_f4.png",
        types: ["Normal", "Grass"],
      },
    ],
  }, {
    id: 587,
    name: "Emolga",
    types: ["Electric", "Flying"]
  }, {
    id: 588,
    name: "Karrablast",
    types: ["Bug"]
  }, {
    id: 589,
    name: "Escavalier",
    types: ["Bug", "Steel"]
  }, {
    id: 590,
    name: "Foongus",
    types: ["Grass", "Poison"]
  }, {
    id: 591,
    name: "Amoonguss",
    types: ["Grass", "Poison"]
  }, {
    id: 592,
    name: "Frillish",
    types: ["Water", "Ghost"],
    forms: [
      {
        name: "Frilish (Male)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/592.png",
        types: ["Water", "Ghost"],
      },
      {
        name: "Frillish (Female)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/592_f2.png",
        types: ["Water", "Ghost"],
      },
    ],
  }, {
    id: 593,
    name: "Jellicent",
    types: ["Water", "Ghost"],
    forms: [
      {
        name: "Jellicent (Male)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/592.png",
        types: ["Water", "Ghost"],
      },
      {
        name: "Jellicent (Female)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/592_f2.png",
        types: ["Water", "Ghost"],
      },
    ],
  }, {
    id: 594,
    name: "Alomomola",
    types: ["Water"]
  }, {
    id: 595,
    name: "Joltik",
    types: ["Bug", "Electric"]
  }, {
    id: 596,
    name: "Galvantula",
    types: ["Bug", "Electric"]
  }, {
    id: 597,
    name: "Ferroseed",
    types: ["Grass", "Steel"]
  }, {
    id: 598,
    name: "Ferrothorn",
    types: ["Grass", "Steel"]
  }, {
    id: 599,
    name: "Klink",
    types: ["Steel"]
  }, {
    id: 600,
    name: "Klang",
    types: ["Steel"]
  }, {
    id: 601,
    name: "Klinklang",
    types: ["Steel"]
  }, {
    id: 602,
    name: "Tynamo",
    types: ["Electric"]
  }, {
    id: 603,
    name: "Eelektrik",
    types: ["Electric"]
  }, {
    id: 604,
    name: "Eelektross",
    types: ["Electric"]
  }, {
    id: 605,
    name: "Elgyem",
    types: ["Psychic"]
  }, {
    id: 606,
    name: "Beheeyem",
    types: ["Psychic"]
  }, {
    id: 607,
    name: "Litwick",
    types: ["Ghost", "Fire"]
  }, {
    id: 608,
    name: "Lampent",
    types: ["Ghost", "Fire"]
  }, {
    id: 609,
    name: "Chandelure",
    types: ["Ghost", "Fire"]
  }, {
    id: 610,
    name: "Axew",
    types: ["Dragon"]
  }, {
    id: 611,
    name: "Fraxure",
    types: ["Dragon"]
  }, {
    id: 612,
    name: "Haxorus",
    types: ["Dragon"]
  }, {
    id: 613,
    name: "Cubchoo",
    types: ["Ice"]
  }, {
    id: 614,
    name: "Beartic",
    types: ["Ice"]
  }, {
    id: 615,
    name: "Cryogonal",
    types: ["Ice"]
  }, {
    id: 616,
    name: "Shelmet",
    types: ["Bug"]
  }, {
    id: 617,
    name: "Accelgor",
    types: ["Bug"]
  }, {
    id: 618,
    name: "Stunfisk",
    types: ["Ground", "Electric"],
    forms: [
      {
        name: "Stunfisk",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/618.png",
        types: ["Ground", "Electric"],
      },
      {
        name: "Galarian Stunfisk",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/618_f2.png",
        types: ["Ground", "Steel"],
      },
    ],
  }, {
    id: 619,
    name: "Mienfoo",
    types: ["Fighting"]
  }, {
    id: 620,
    name: "Mienshao",
    types: ["Fighting"]
  }, {
    id: 621,
    name: "Druddigon",
    types: ["Dragon"]
  }, {
    id: 622,
    name: "Golett",
    types: ["Ground", "Ghost"]
  }, {
    id: 623,
    name: "Golurk",
    types: ["Ground", "Ghost"]
  }, {
    id: 624,
    name: "Pawniard",
    types: ["Dark", "Steel"]
  }, {
    id: 625,
    name: "Bisharp",
    types: ["Dark", "Steel"]
  }, {
    id: 626,
    name: "Bouffalant",
    types: ["Normal"]
  }, {
    id: 627,
    name: "Rufflet",
    types: ["Normal", "Flying"]
  }, {
    id: 628,
    name: "Braviary",
    types: ["Normal", "Flying"],
    forms: [
      {
        name: "Braviary",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/628.png",
        types: ["Normal", "Flying"],
      },
      {
        name: "Hisuian Braviary",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/628_f2.png",
        types: ["Psychic", "Flying"],
      },
    ],
  }, {
    id: 629,
    name: "Vullaby",
    types: ["Dark", "Flying"]
  }, {
    id: 630,
    name: "Mandibuzz",
    types: ["Dark", "Flying"]
  }, {
    id: 631,
    name: "Heatmor",
    types: ["Fire"]
  }, {
    id: 632,
    name: "Durant",
    types: ["Bug", "Steel"]
  }, {
    id: 633,
    name: "Deino",
    types: ["Dark", "Dragon"]
  }, {
    id: 634,
    name: "Zweilous",
    types: ["Dark", "Dragon"]
  }, {
    id: 635,
    name: "Hydreigon",
    types: ["Dark", "Dragon"]
  }, {
    id: 636,
    name: "Larvesta",
    types: ["Bug", "Fire"]
  }, {
    id: 637,
    name: "Volcarona",
    types: ["Bug", "Fire"]
  }, {
    id: 638,
    name: "Cobalion",
    types: ["Steel", "Fighting"]
  }, {
    id: 639,
    name: "Terrakion",
    types: ["Rock", "Fighting"]
  }, {
    id: 640,
    name: "Virizion",
    types: ["Grass", "Fighting"]
  }, {
    id: 641,
    name: "Tornadus",
    types: ["Flying"],
    forms: [
      {
        name: "Tornadus (Incarnate Forme)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/641.png",
        types: ["Flying"],
      },
      {
        name: "Tornadus (Therian Forme)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/641_f2.png",
        types: ["Flying"],
      },
    ],
  }, {
    id: 642,
    name: "Thundurus",
    types: ["Electric", "Flying"],
    forms: [
      {
        name: "Thundurus (Incarnate Forme)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/642.png",
        types: ["Electric", "Flying"],
      },
      {
        name: "Thundurus (Therian Forme)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/642_f2.png",
        types: ["Electric", "Flying"],
      },
    ],
  }, {
    id: 643,
    name: "Reshiram",
    types: ["Dragon", "Fire"]
  }, {
    id: 644,
    name: "Zekrom",
    types: ["Dragon", "Electric"]
  }, {
    id: 645,
    name: "Landorus",
    types: ["Ground", "Flying"],
    forms: [
      {
        name: "Landorus (Incarnate Forme)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/645.png",
        types: ["Ground", "Flying"],
      },
      {
        name: "Landorus (Therian Forme)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/645_f2.png",
        types: ["Ground", "Flying"],
      },
    ],
  }, {
    id: 646,
    name: "Kyurem",
    types: ["Dragon", "Ice"]
  }, {
    id: 647,
    name: "Keldeo",
    types: ["Water", "Fighting"],
    forms: [
      {
        name: "Keldeon (Ordinary Form)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/647.png",
        types: ["Water", "Fighting"],
      },
      {
        name: "Keldeo (Resolute Forme)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/647_f2.png",
        types: ["Water", "Fighting"],
      },
    ],
  }, {
    id: 648,
    name: "Meloetta",
    types: ["Normal", "Psychic"],
    forms: [
      {
        name: "Meloetta (Aria Forme)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/648.png",
        types: ["Normal", "Psychic"],
      },
      {
        name: "Meloetta (Pirouette Forme)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/648_f2.png",
        types: ["Normal", "Fighting"],
      },
    ],
  }, {
    id: 649,
    name: "Genesect",
    types: ["Bug", "Steel"]
  }, {
    id: 650,
    name: "Chespin",
    types: ["Grass"]
  }, {
    id: 651,
    name: "Quilladin",
    types: ["Grass"]
  }, {
    id: 652,
    name: "Chesnaught",
    types: ["Grass", "Fighting"]
  }, {
    id: 653,
    name: "Fennekin",
    types: ["Fire"]
  }, {
    id: 654,
    name: "Braixen",
    types: ["Fire"]
  }, {
    id: 655,
    name: "Delphox",
    types: ["Fire", "Psychic"]
  }, {
    id: 656,
    name: "Froakie",
    types: ["Water"]
  }, {
    id: 657,
    name: "Frogadier",
    types: ["Water"]
  }, {
    id: 658,
    name: "Greninja",
    types: ["Water", "Dark"],
    forms: [
      {
        name: "Greninja",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/658.png",
        types: ["Water", "Dark"],
      },
      {
        name: "Ash-Greninja",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/658_f2.png",
        types: ["Water", "Dark"],
      },
    ],
  }, {
    id: 659,
    name: "Bunnelby",
    types: ["Normal"]
  }, {
    id: 660,
    name: "Diggersby",
    types: ["Normal", "Ground"]
  }, {
    id: 661,
    name: "Fletchling",
    types: ["Normal", "Flying"]
  }, {
    id: 662,
    name: "Fletchinder",
    types: ["Fire", "Flying"]
  }, {
    id: 663,
    name: "Talonflame",
    types: ["Fire", "Flying"]
  }, {
    id: 664,
    name: "Scatterbug",
    types: ["Bug"]
  }, {
    id: 665,
    name: "Spewpa",
    types: ["Bug"]
  }, {
    id: 666,
    name: "Vivillon",
    types: ["Bug", "Flying"]
  }, {
    id: 667,
    name: "Litleo",
    types: ["Fire", "Normal"]
  }, {
    id: 668,
    name: "Pyroar",
    types: ["Fire", "Normal"],
    forms: [
      {
        name: "Pyroar (Male)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/668.png",
        types: ["Fire", "Normal"],
      },
      {
        name: "Pyroar (Female)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/668_f2.png",
        types: ["Fire", "Normal"],
      },
    ],
  }, {
    id: 669,
    name: "Flabébé",
    types: ["Fairy"]
  }, {
    id: 670,
    name: "Floette",
    types: ["Fairy"]
  }, {
    id: 671,
    name: "Florges",
    types: ["Fairy"]
  }, {
    id: 672,
    name: "Skiddo",
    types: ["Grass"]
  }, {
    id: 673,
    name: "Gogoat",
    types: ["Grass"]
  }, {
    id: 674,
    name: "Pancham",
    types: ["Fighting"]
  }, {
    id: 675,
    name: "Pangoro",
    types: ["Fighting", "Dark"]
  }, {
    id: 676,
    name: "Furfrou",
    types: ["Normal"]
  }, {
    id: 677,
    name: "Espurr",
    types: ["Psychic"]
  }, {
    id: 678,
    name: "Meowstic",
    types: ["Psychic"],
    forms: [
      {
        name: "Meowstic (Male)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/678.png",
        types: ["Psychic"],
      },
      {
        name: "Meowstic (Female)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/678_f2.png",
        types: ["Psychic"],
      },
    ],
  }, {
    id: 679,
    name: "Honedge",
    types: ["Steel", "Ghost"]
  }, {
    id: 680,
    name: "Doublade",
    types: ["Steel", "Ghost"]
  }, {
    id: 681,
    name: "Aegislash",
    types: ["Steel", "Ghost"],
    forms: [
      {
        name: "Aegislash (Shield Forme)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/681.png",
        types: ["Steel", "Ghost"],
      },
      {
        name: "Aegislash (Sword Forme)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/681_f2.png",
        types: ["Steel", "Ghost"],
      },
    ],
  }, {
    id: 682,
    name: "Spritzee",
    types: ["Fairy"]
  }, {
    id: 683,
    name: "Aromatisse",
    types: ["Fairy"]
  }, {
    id: 684,
    name: "Swirlix",
    types: ["Fairy"]
  }, {
    id: 685,
    name: "Slurpuff",
    types: ["Fairy"]
  }, {
    id: 686,
    name: "Inkay",
    types: ["Dark", "Psychic"]
  }, {
    id: 687,
    name: "Malamar",
    types: ["Dark", "Psychic"]
  }, {
    id: 688,
    name: "Binacle",
    types: ["Rock", "Water"]
  }, {
    id: 689,
    name: "Barbaracle",
    types: ["Rock", "Water"]
  }, {
    id: 690,
    name: "Skrelp",
    types: ["Poison", "Water"]
  }, {
    id: 691,
    name: "Dragalge",
    types: ["Poison", "Dragon"]
  }, {
    id: 692,
    name: "Clauncher",
    types: ["Water"]
  }, {
    id: 693,
    name: "Clawitzer",
    types: ["Water"]
  }, {
    id: 694,
    name: "Helioptile",
    types: ["Electric", "Normal"]
  }, {
    id: 695,
    name: "Heliolisk",
    types: ["Electric", "Normal"]
  }, {
    id: 696,
    name: "Tyrunt",
    types: ["Rock", "Dragon"]
  }, {
    id: 697,
    name: "Tyrantrum",
    types: ["Rock", "Dragon"]
  }, {
    id: 698,
    name: "Amaura",
    types: ["Rock", "Ice"]
  }, {
    id: 699,
    name: "Aurorus",
    types: ["Rock", "Ice"]
  }, {
    id: 700,
    name: "Sylveon",
    types: ["Fairy"]
  }, {
    id: 701,
    name: "Hawlucha",
    types: ["Fighting", "Flying"]
  }, {
    id: 702,
    name: "Dedenne",
    types: ["Electric", "Fairy"]
  }, {
    id: 703,
    name: "Carbink",
    types: ["Rock", "Fairy"]
  }, {
    id: 704,
    name: "Goomy",
    types: ["Dragon"]
  }, {
    id: 705,
    name: "Sliggoo",
    types: ["Dragon"]
  }, {
    id: 706,
    name: "Goodra",
    types: ["Dragon"]
  }, {
    id: 707,
    name: "Klefki",
    types: ["Steel", "Fairy"]
  }, {
    id: 708,
    name: "Phantump",
    types: ["Ghost", "Grass"]
  }, {
    id: 709,
    name: "Trevenant",
    types: ["Ghost", "Grass"]
  }, {
    id: 710,
    name: "Pumpkaboo",
    types: ["Ghost", "Grass"]
  }, {
    id: 711,
    name: "Gourgeist",
    types: ["Ghost", "Grass"]
  }, {
    id: 712,
    name: "Bergmite",
    types: ["Ice"]
  }, {
    id: 713,
    name: "Avalugg",
    types: ["Ice"],
    forms: [
      {
        name: "Avalugg",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/713.png",
        types: ["Ice"],
      },
      {
        name: "Hisuian Avalugg",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/713_f2.png",
        types: ["Ice", "Rock"],
      },
    ],
  }, {
    id: 714,
    name: "Noibat",
    types: ["Flying", "Dragon"]
  }, {
    id: 715,
    name: "Noivern",
    types: ["Flying", "Dragon"]
  }, {
    id: 716,
    name: "Xerneas",
    types: ["Fairy"]
  }, {
    id: 717,
    name: "Yveltal",
    types: ["Dark", "Flying"]
  }, {
    id: 718,
    name: "Zygarde",
    types: ["Dragon", "Ground"],
    forms: [
      {
        name: "Zygarde (50% Forme)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/718.png",
        types: ["Dragon", "Ground"],
      },
      {
        name: "Zygarde (10% Forme)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/718_f2.png",
        types: ["Dragon", "Ground"],
      },
      {
        name: "Zygarde (Complete Forme)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/718_f3.png",
        types: ["Dragon", "Ground"],
      },
    ],
  }, {
    id: 719,
    name: "Diancie",
    types: ["Rock", "Fairy"],
    forms: [
      {
        name: "Diancie",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/719.png",
        types: ["Rock", "Fairy"],
      },
      {
        name: "Mega Diancie",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/719_f2.png",
        types: ["Rock", "Fairy"],
      },
    ],
  }, {
    id: 720,
    name: "Hoopa",
    types: ["Psychic", "Ghost"],
    forms: [
      {
        name: "Hoopa (Confined)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/720.png",
        types: ["Psychic", "Ghost"],
      },
      {
        name: "Hoopa (Unbound)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/720_f2.png",
        types: ["Psychic", "Ghot"],
      },
    ],
  }, {
    id: 721,
    name: "Volcanion",
    types: ["Fire", "Water"]
  }, {
    id: 722,
    name: "Rowlet",
    types: ["Grass", "Flying"]
  }, {
    id: 723,
    name: "Dartrix",
    types: ["Grass", "Flying"]
  }, {
    id: 724,
    name: "Decidueye",
    types: ["Grass", "Ghost"],
    forms: [
      {
        name: "Decidueye",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/724.png",
        types: ["Grass", "Ghost"],
      },
      {
        name: "Hisuian Decidueye",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/724_f2.png",
        types: ["Grass", "Fighting"],
      },
    ],
  }, {
    id: 725,
    name: "Litten",
    types: ["Fire"]
  }, {
    id: 726,
    name: "Torracat",
    types: ["Fire"]
  }, {
    id: 727,
    name: "Incineroar",
    types: ["Fire", "Dark"]
  }, {
    id: 728,
    name: "Popplio",
    types: ["Water"]
  }, {
    id: 729,
    name: "Brionne",
    types: ["Water"]
  }, {
    id: 730,
    name: "Primarina",
    types: ["Water", "Fairy"]
  }, {
    id: 731,
    name: "Pikipek",
    types: ["Normal", "Flying"]
  }, {
    id: 732,
    name: "Trumbeak",
    types: ["Normal", "Flying"]
  }, {
    id: 733,
    name: "Toucannon",
    types: ["Normal", "Flying"]
  }, {
    id: 734,
    name: "Yungoos",
    types: ["Normal"]
  }, {
    id: 735,
    name: "Gumshoos",
    types: ["Normal"]
  }, {
    id: 736,
    name: "Grubbin",
    types: ["Bug"]
  }, {
    id: 737,
    name: "Charjabug",
    types: ["Bug", "Electric"]
  }, {
    id: 738,
    name: "Vikavolt",
    types: ["Bug", "Electric"]
  }, {
    id: 739,
    name: "Crabrawler",
    types: ["Fighting"]
  }, {
    id: 740,
    name: "Crabominable",
    types: ["Fighting", "Ice"]
  }, {
    id: 741,
    name: "Oricorio",
    types: ["Fire", "Flying"],
    forms: [
      {
        name: "Oricorio (Baile Style)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/741.png",
        types: ["Fire", "Flying"],
      },
      {
        name: "Oricorio (Pom-Pom Style)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/741_f2.png",
        types: ["Electric", "Flying"],
      },
      {
        name: "Oricorio (Pa´u Style)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/741_f3.png",
        types: ["Psychic", "Flying"],
      },
      {
        name: "Oricorio (Sensu Style)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/741_f4.png",
        types: ["Ghost", "Flying"],
      },
    ],
  }, {
    id: 742,
    name: "Cutiefly",
    types: ["Bug", "Fairy"]
  }, {
    id: 743,
    name: "Ribombee",
    types: ["Bug", "Fairy"]
  }, {
    id: 744,
    name: "Rockruff",
    types: ["Rock"]
  }, {
    id: 745,
    name: "Lycanroc",
    types: ["Rock"],
    forms: [
      {
        name: "Lycanroc (Midday Form)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/745.png",
        types: ["Rock"],
      },
      {
        name: "Lycanroc (Midnight Form)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/745_f2.png",
        types: ["Rock"],
      },
      {
        name: "Lycanroc (Dusk Form)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/745_f3.png",
        types: ["Rock"],
      },
    ],
  }, {
    id: 746,
    name: "Wishiwashi",
    types: ["Water"],
    forms: [
      {
        name: "Wishiwashi (Solo Form)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/746.png",
        types: ["Water"],
      },
      {
        name: "Wishiwashi (School Form)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/746_f2.png",
        types: ["Water"],
      },
    ],
  }, {
    id: 747,
    name: "Mareanie",
    types: ["Poison", "Water"]
  }, {
    id: 748,
    name: "Toxapex",
    types: ["Poison", "Water"]
  }, {
    id: 749,
    name: "Mudbray",
    types: ["Ground"]
  }, {
    id: 750,
    name: "Mudsdale",
    types: ["Ground"]
  }, {
    id: 751,
    name: "Dewpider",
    types: ["Water", "Bug"]
  }, {
    id: 752,
    name: "Araquanid",
    types: ["Water", "Bug"]
  }, {
    id: 753,
    name: "Fomantis",
    types: ["Grass"]
  }, {
    id: 754,
    name: "Lurantis",
    types: ["Grass"]
  }, {
    id: 755,
    name: "Morelull",
    types: ["Grass", "Fairy"]
  }, {
    id: 756,
    name: "Shiinotic",
    types: ["Grass", "Fairy"]
  }, {
    id: 757,
    name: "Salandit",
    types: ["Fire"]
  }, {
    id: 758,
    name: "Salazzle",
    types: ["Poison", "Fire"]
  }, {
    id: 759,
    name: "Stufful",
    types: ["Normal", "Fighting"]
  }, {
    id: 760,
    name: "Bewear",
    types: ["Normal", "Fighting"]
  }, {
    id: 761,
    name: "Bounsweet",
    types: ["Grass"]
  }, {
    id: 762,
    name: "Steenee",
    types: ["Grass"]
  }, {
    id: 763,
    name: "Tsareena",
    types: ["Grass"]
  }, {
    id: 764,
    name: "Comfey",
    types: ["Fairy"]
  }, {
    id: 765,
    name: "Oranguru",
    types: ["Normal", "Psychic"]
  }, {
    id: 766,
    name: "Passimian",
    types: ["Fighting"]
  }, {
    id: 767,
    name: "Wimpod",
    types: ["Bug", "Water"]
  }, {
    id: 768,
    name: "Golisopod",
    types: ["Bug", "Water"]
  }, {
    id: 769,
    name: "Sandygast",
    types: ["Ghost", "Ground"]
  }, {
    id: 770,
    name: "Palossand",
    types: ["Ghost", "Ground"]
  }, {
    id: 771,
    name: "Pyukumuku",
    types: ["Water"]
  }, {
    id: 772,
    name: "Type: Null",
    types: ["Normal"]
  }, {
    id: 773,
    name: "Silvally",
    types: ["Normal"]
  }, {
    id: 774,
    name: "Minior",
    types: ["Rock", "Flying"],
    forms: [
      {
        name: "Minior (Meteor Form)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/774.png",
        types: ["Rock", "Flying"],
      },
      {
        name: "Minior (Red Core)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/774_f2.png",
        types: ["Rock", "Flying"],
      },
    ],
  }, {
    id: 775,
    name: "Komala",
    types: ["Normal"]
  }, {
    id: 776,
    name: "Turtonator",
    types: ["Fire", "Dragon"]
  }, {
    id: 777,
    name: "Togedemaru",
    types: ["Electric", "Steel"]
  }, {
    id: 778,
    name: "Mimikyu",
    types: ["Ghost", "Fairy"]
  }, {
    id: 779,
    name: "Bruxish",
    types: ["Water", "Psychic"]
  }, {
    id: 780,
    name: "Drampa",
    types: ["Normal", "Dragon"]
  }, {
    id: 781,
    name: "Dhelmise",
    types: ["Ghost", "Grass"]
  }, {
    id: 782,
    name: "Jangmo-o",
    types: ["Dragon"]
  }, {
    id: 783,
    name: "Hakamo-o",
    types: ["Dragon", "Fighting"]
  }, {
    id: 784,
    name: "Kommo-o",
    types: ["Dragon", "Fighting"]
  }, {
    id: 785,
    name: "Tapu Koko",
    types: ["Electric", "Fairy"]
  }, {
    id: 786,
    name: "Tapu Lele",
    types: ["Psychic", "Fairy"]
  }, {
    id: 787,
    name: "Tapu Bulu",
    types: ["Grass", "Fairy"]
  }, {
    id: 788,
    name: "Tapu Fini",
    types: ["Water", "Fairy"]
  }, {
    id: 789,
    name: "Cosmog",
    types: ["Psychic"]
  }, {
    id: 790,
    name: "Cosmoem",
    types: ["Psychic"]
  }, {
    id: 791,
    name: "Solgaleo",
    types: ["Psychic", "Steel"]
  }, {
    id: 792,
    name: "Lunala",
    types: ["Psychic", "Ghost"]
  }, {
    id: 793,
    name: "Nihilego",
    types: ["Rock", "Poison"]
  }, {
    id: 794,
    name: "Buzzwole",
    types: ["Bug", "Fighting"]
  }, {
    id: 795,
    name: "Pheromosa",
    types: ["Bug", "Fighting"]
  }, {
    id: 796,
    name: "Xurkitree",
    types: ["Electric"]
  }, {
    id: 797,
    name: "Celesteela",
    types: ["Steel", "Flying"]
  }, {
    id: 798,
    name: "Kartana",
    types: ["Grass", "Steel"]
  }, {
    id: 799,
    name: "Guzzlord",
    types: ["Dark", "Dragon"]
  }, {
    id: 800,
    name: "Necrozma",
    types: ["Psychic"],
    forms: [
      {
        name: "Necrozma",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/800.png",
        types: ["Psychic"],
      },
      {
        name: "Necrozma (Dusk Mane)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/800_f2.png",
        types: ["Psychic", "Steel"],
      },
      {
        name: "Necrozma (Dawn Wings)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/800_f3.png",
        types: ["Psychic", "Ghost"],
      },
      {
        name: "Ultra Necrozma",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/800_f4.png",
        types: ["Psychic", "Dragon"],
      },
    ],
  }, {
    id: 801,
    name: "Magearna",
    types: ["Steel", "Fairy"]
  }, {
    id: 802,
    name: "Marshadow",
    types: ["Fightng", "Ghost"]
  }, {
    id: 803,
    name: "Poipole",
    types: ["Poison"]
  }, {
    id: 804,
    name: "Naganadel",
    types: ["Poison", "Dragon"]
  }, {
    id: 805,
    name: "Stakataka",
    types: ["Rock", "Steel"]
  }, {
    id: 806,
    name: "Blacephalon",
    types: ["Fire", "Ghost"]
  }, {
    id: 807,
    name: "Zeraora",
    types: ["Electric"]
  }, {
    id: 808,
    name: "Meltan",
    types: ["Steel"]
  }, {
    id: 809,
    name: "Melmetal",
    types: ["Steel"],
    forms: [
      {
        name: "Melmetal",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/809.png",
        types: ["Steel"],
      },
      {
        name: "Gigantamax Melmetal",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/809_f2.png",
        types: ["Steel"],
      },
    ],
  }, {
    id: 810,
    name: "Grookey",
    types: ["Grass"]
  }, {
    id: 811,
    name: "Thwackey",
    types: ["Grass"]
  }, {
    id: 812,
    name: "Rillaboom",
    types: ["Grass"],
    forms: [
      {
        name: "Rillaboom",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/812.png",
        types: ["Grass"],
      },
      {
        name: "Gigantamax Rilaboom",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/812_f2.png",
        types: ["Grass"],
      },
    ],
  }, {
    id: 813,
    name: "Scorbunny",
    types: ["Fire"]
  }, {
    id: 814,
    name: "Raboot",
    types: ["Fire"]
  }, {
    id: 815,
    name: "Cinderace",
    types: ["Fire"],
    forms: [
      {
        name: "Cinderace",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/815.png",
        types: ["Fire"],
      },
      {
        name: "Gigantamax Cinderace",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/815_f2.png",
        types: ["Fire"],
      },
    ],
  }, {
    id: 816,
    name: "Sobble",
    types: ["Water"]
  }, {
    id: 817,
    name: "Drizzile",
    types: ["Water"]
  }, {
    id: 818,
    name: "Inteleon",
    types: ["Water"],
    forms: [
      {
        name: "Inteleon",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/818.png",
        types: ["Water"],
      },
      {
        name: "Gigantamax Inteleon",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/818_f2.png",
        types: ["Water"],
      },
    ],
  }, {
    id: 819,
    name: "Skwovet",
    types: ["Normal"]
  }, {
    id: 820,
    name: "Greedent",
    types: ["Normal"]
  }, {
    id: 821,
    name: "Rookidee",
    types: ["Flying"]
  }, {
    id: 822,
    name: "Corvisquire",
    types: ["Flying"]
  }, {
    id: 823,
    name: "Corviknight",
    types: ["Flying", "Steel"],
    forms: [
      {
        name: "Corviknight",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/823.png",
        types: ["Flying", "Steel"],
      },
      {
        name: "Gigantamax Corviknight",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/823_f2.png",
        types: ["Flying", "Steel"],
      },
    ],
  }, {
    id: 824,
    name: "Blipbug",
    types: ["Bug"]
  }, {
    id: 825,
    name: "Dottler",
    types: ["Bug", "Psychic"]
  }, {
    id: 826,
    name: "Orbeetle",
    types: ["Bug", "Psychic"],
    forms: [
      {
        name: "Orbeetle",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/826.png",
        types: ["Bug", "Psychic"],
      },
      {
        name: "Gigantamax Orbeetle",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/826_f2.png",
        types: ["Bug", "Psychic"],
      },
    ],
  }, {
    id: 827,
    name: "Nickit",
    types: ["Dark"]
  }, {
    id: 828,
    name: "Thievul",
    types: ["Dark"]
  }, {
    id: 829,
    name: "Gossifleur",
    types: ["Grass"]
  }, {
    id: 830,
    name: "Eldegoss",
    types: ["Grass"]
  }, {
    id: 831,
    name: "Wooloo",
    types: ["Normal"]
  }, {
    id: 832,
    name: "Dubwool",
    types: ["Normal"]
  }, {
    id: 833,
    name: "Chewtle",
    types: ["Water"]
  }, {
    id: 834,
    name: "Drednaw",
    types: ["Water", "Rock"],
    forms: [
      {
        name: "Drednaw",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/834.png",
        types: ["Water", "Rock"],
      },
      {
        name: "Gigantamax Drednaw",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/834_f2.png",
        types: ["Water", "Rock"],
      },
    ],
  }, {
    id: 835,
    name: "Yamper",
    types: ["Electric"]
  }, {
    id: 836,
    name: "Boltund",
    types: ["Electric"]
  }, {
    id: 837,
    name: "Rolycoly",
    types: ["Rock"]
  }, {
    id: 838,
    name: "Carkol",
    types: ["Rock", "Fire"]
  }, {
    id: 839,
    name: "Coalossal",
    types: ["Rock", "Fire"],
    forms: [
      {
        name: "Coalossal",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/839.png",
        types: ["Rock", "Fire"],
      },
      {
        name: "Gigantamax Coalossal",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/839_f2.png",
        types: ["Rock", "Fire"],
      },
    ],
  }, {
    id: 840,
    name: "Applin",
    types: ["Grass", "Dragon"]
  }, {
    id: 841,
    name: "Flapple",
    types: ["Grass", "Dragon"],
    forms: [
      {
        name: "Flapple",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/841.png",
        types: ["Grass", "Dragon"],
      },
      {
        name: "Gigantamax Flapple",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/841_f2.png",
        types: ["Grass", "Dragon"],
      },
    ],
  }, {
    id: 842,
    name: "Appletun",
    types: ["Grass", "Dragon"],
    forms: [
      {
        name: "Appletun",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/842.png",
        types: ["Grass", "Dragon"],
      },
      {
        name: "Gigantamax Appletun",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/842_f2.png",
        types: ["Grass", "Dragon"],
      },
    ],
  }, {
    id: 843,
    name: "Silicobra",
    types: ["Ground"]
  }, {
    id: 844,
    name: "Sandaconda",
    types: ["Ground"],
    forms: [
      {
        name: "Sandacobra",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/844.png",
        types: ["Ground"],
      },
      {
        name: "Gigantamax Sandacobra",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/844_f2.png",
        types: ["Ground"],
      },
    ],
  }, {
    id: 845,
    name: "Cramorant",
    types: ["Flying", "Water"]
  }, {
    id: 846,
    name: "Arrokuda",
    types: ["Water"]
  }, {
    id: 847,
    name: "Barraskewda",
    types: ["Water"]
  }, {
    id: 848,
    name: "Toxel",
    types: ["Electric", "Poison"]
  }, {
    id: 849,
    name: "Toxtricity",
    types: ["Electric", "Poison"],
    forms: [
      {
        name: "Toxtricity (Low Key Form)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/849.png",
        types: ["Electric", "Poison"],
      },
      {
        name: "Toxtricity (Amped Form)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/849_f2.png",
        types: ["Electric", "Poison"],
      },
      {
        name: "Gigantamax Toxtricity",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/849_f3.png",
        types: ["Electric", "Poison"],
      },
    ],
  }, {
    id: 850,
    name: "Sizzlipede",
    types: ["Fire", "Bug"]
  }, {
    id: 851,
    name: "Centiskorch",
    types: ["Fire", "Bug"],
    forms: [
      {
        name: "Sandacobra",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/851.png",
        types: ["Fire", "Bug"],
      },
      {
        name: "Gigantamax Centiskorch",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/851_f2.png",
        types: ["Fire", "Bug"],
      },
    ],
  }, {
    id: 852,
    name: "Clobbopus",
    types: ["Fighting"]
  }, {
    id: 853,
    name: "Grapploct",
    types: ["Fighting"]
  }, {
    id: 854,
    name: "Sinistea",
    types: ["Ghost"]
  }, {
    id: 855,
    name: "Polteageist",
    types: ["Ghost"]
  }, {
    id: 856,
    name: "Hatenna",
    types: ["Psychic"]
  }, {
    id: 857,
    name: "Hattrem",
    types: ["Psychic"]
  }, {
    id: 858,
    name: "Hatterene",
    types: ["Psychic", "Fairy"],
    forms: [
      {
        name: "Hatterene",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/858.png",
        types: ["Psychic", "Fairy"],
      },
      {
        name: "Gigantamax Hatterene",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/858_f2.png",
        types: ["Psychic", "Fairy"],
      },
    ],
  }, {
    id: 859,
    name: "Impidimp",
    types: ["Dark", "Fairy"]
  }, {
    id: 860,
    name: "Morgrem",
    types: ["Dark", "Fairy"]
  }, {
    id: 861,
    name: "Grimmsnarl",
    types: ["Dark", "Fairy"],
    forms: [
      {
        name: "Grimmsnarl",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/861.png",
        types: ["Dark", "Fairy"],
      },
      {
        name: "Gigantamax Grimmsnarl",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/861_f2.png",
        types: ["Dark", "Fairy"],
      },
    ],
  }, {
    id: 862,
    name: "Obstagoon",
    types: ["Dark", "Normal"]
  }, {
    id: 863,
    name: "Perrserker",
    types: ["Steel"]
  }, {
    id: 864,
    name: "Cursola",
    types: ["Ghost"]
  }, {
    id: 865,
    name: "Sirfetch'd",
    types: ["Fighting"]
  }, {
    id: 866,
    name: "Mr. Rime",
    types: ["Ice", "Psychic"]
  }, {
    id: 867,
    name: "Runerigus",
    types: ["Ground", "Ghost"]
  }, {
    id: 868,
    name: "Milcery",
    types: ["Fairy"]
  }, {
    id: 869,
    name: "Alcremie",
    types: ["Fairy"],
    forms: [
      {
        name: "Alcremie (Vanilla Cream)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/869.png",
        types: ["Fairy"],
      },
      {
        name: "Gigantamax Alcremie",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/869_f2.png",
        types: ["Fairy"],
      },
    ],
  }, {
    id: 870,
    name: "Falinks",
    types: ["Fighting"]
  }, {
    id: 871,
    name: "Pincurchin",
    types: ["Electric"]
  }, {
    id: 872,
    name: "Snom",
    types: ["Ice", "Bug"]
  }, {
    id: 873,
    name: "Frosmoth",
    types: ["Ice", "Bug"]
  }, {
    id: 874,
    name: "Stonjourner",
    types: ["Rock"]
  }, {
    id: 875,
    name: "Eiscue",
    types: ["Ice"]
  }, {
    id: 876,
    name: "Indeedee",
    types: ["Psychic", "Normal"],
    forms: [
      {
        name: "Hatterene",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/858.png",
        types: ["Psychic", "Fairy"],
      },
      {
        name: "Gigantamax Hatterene",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/858_f2.png",
        types: ["Psychic", "Fairy"],
      },
    ],
  }, {
    id: 877,
    name: "Morpeko",
    types: ["Electric", "Dark"]
  }, {
    id: 878,
    name: "Cufant",
    types: ["Steel"]
  }, {
    id: 879,
    name: "Copperajah",
    types: ["Steel"],
    forms: [
      {
        name: "Copperajah",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/879.png",
        types: ["Steel"],
      },
      {
        name: "Gigantamax Copperajah",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/879_f2.png",
        types: ["Steel"],
      },
    ],
  }, {
    id: 880,
    name: "Dracozolt",
    types: ["Electric", "Dragon"]
  }, {
    id: 881,
    name: "Arctozolt",
    types: ["Electric", "Ice"]
  }, {
    id: 882,
    name: "Dracovish",
    types: ["Water", "Dragon"]
  }, {
    id: 883,
    name: "Arctovish",
    types: ["Water", "Ice"]
  }, {
    id: 884,
    name: "Duraludon",
    types: ["Steel", "Dragon"],
    forms: [
      {
        name: "Duraludon",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/884.png",
        types: ["Steel", "Dragon"],
      },
      {
        name: "Gigantamax Duraludon",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/884_f2.png",
        types: ["Steel", "Dragon"],
      },
    ],
  }, {
    id: 885,
    name: "Dreepy",
    types: ["Dragon", "Ghost"]
  }, {
    id: 886,
    name: "Drakloak",
    types: ["Dragon", "Ghost"]
  }, {
    id: 887,
    name: "Dragapult",
    types: ["Dragon", "Ghost"]
  }, {
    id: 888,
    name: "Zacian",
    types: ["Fairy"],
    forms: [
      {
        name: "Zacian (Hero of Many Battles)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/888.png",
        types: ["Fairy"],
      },
      {
        name: "Zacian (Crowned Sword)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/888_f2.png",
        types: ["Fairy", "Steel"],
      },
    ],
  }, {
    id: 889,
    name: "Zamazenta",
    types: ["Fighting"],
    forms: [
      {
        name: "Zamazenta (Hero of Many Battles)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/889.png",
        types: ["Fighting"],
      },
      {
        name: "Zamazenta (Crowned Sword)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/889_f2.png",
        types: ["Fighting", "Steel"],
      },
    ],
  }, {
    id: 890,
    name: "Eternatus",
    types: ["Poison", "Dragon"],
    forms: [
      {
        name: "Eternatus",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/890.png",
        types: ["Poison", "Dragon"],
      },
      {
        name: "Eternamax Eternatus",
        image: "https://archives.bulbagarden.net/media/upload/3/38/HOME0890E.png",
        types: ["Poison", "Dragon"],
      },
    ],
  }, {
    id: 891,
    name: "Kubfu",
    types: ["Fighting"]
  }, {
    id: 892,
    name: "Urshifu",
    types: ["Fighting", "Dark"],
    forms: [
      {
        name: "Urshifu (Single Strike Style)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/892.png",
        types: ["Fighting", "Dark"],
      },
      {
        name: "Urshifu (Single Strike Style)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/892_f2.png",
        types: ["Fighting", "Water"],
      },
      {
        name: "Gigantamax Urshifu (Single Strike Style)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/892_f3.png",
        types: ["Fighting", "Dark"],
      },
      {
        name: "Gigantamax Urshifu (Single Strike Style)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/892_f4.png",
        types: ["Fighting", "Water"],
      },
    ],
  }, {
    id: 893,
    name: "Zarude",
    types: ["Dark", "Grass"]
  }, {
    id: 894,
    name: "Regieleki",
    types: ["Electric"]
  }, {
    id: 895,
    name: "Regidrago",
    types: ["Dragon"]
  }, {
    id: 896,
    name: "Glastrier",
    types: ["Ice"]
  }, {
    id: 897,
    name: "Spectrier",
    types: ["Ghost"]
  }, {
    id: 898,
    name: "Calyrex",
    types: ["Psychic", "Grass"],
    forms: [
      {
        name: "Calyrex",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/898.png",
        types: ["Psychic", "Grass"],
      },
      {
        name: "Calyrex (Ice Rider)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/898_f2.png",
        types: ["Psychic", "Ice"],
      },
      {
        name: "Calyrex (Shadow Rider)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/898_f3.png",
        types: ["Psychic", "Ghost"],
      },
    ],
  }, {
    id: 899,
    name: "Wyrdeer",
    types: ["Normal", "Psychic"]
  }, {
    id: 900,
    name: "Kleavor",
    types: ["Bug", "Rock"]
  }, {
    id: 901,
    name: "Ursaluna",
    types: ["Normal", "Ground"]
  }, {
    id: 902,
    name: "Basculegion",
    types: ["Water", "Ghost"],
    forms: [
      {
        name: "Basculegion (Male)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/892.png",
        types: ["Water", "Ghost"],
      },
      {
        name: "Basculegion (Female)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/892_f2.png",
        types: ["Water", "Ghost"],
      },
    ],
  }, {
    id: 903,
    name: "Sneasler",
    types: ["Poison", "Fighting"]
  }, {
    id: 904,
    name: "Overqwil",
    types: ["Dark", "Poison"]
  }, {
    id: 905,
    name: "Enamorus",
    types: ["Fairy", "Flying"]
  }, {
    id: 906,
    name: "Sprigatito",
    types: ["Grass"]
  }, {
    id: 907,
    name: "Floragato",
    types: ["Grass"]
  }, {
    id: 908,
    name: "Meowscarada",
    types: ["Grass", "Dark"]
  }, {
    id: 909,
    name: "Fuecoco",
    types: ["Fire"]
  }, {
    id: 910,
    name: "Crocalor",
    types: ["Fire"]
  }, {
    id: 911,
    name: "Skeledirge",
    types: ["Fire", "Ghost"]
  }, {
    id: 912,
    name: "Quaxly",
    types: ["Water"]
  }, {
    id: 913,
    name: "Quaxwell",
    types: ["Water"]
  }, {
    id: 914,
    name: "Quaquaval",
    types: ["Water", "Fighting"]
  }, {
    id: 915,
    name: "Lechonk",
    types: ["Normal"]
  }, {
    id: 916,
    name: "Oinkologne",
    types: ["Normal"],
    forms: [
      {
        name: "Oinkologne (Male)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/916.png",
        types: ["Normal"],
      },
      {
        name: "Oinkologne (Female)",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/916_f2.png",
        types: ["Normal"],
      },
    ],
  }, {
    id: 917,
    name: "Tarountula",
    types: ["Bug"]
  }, {
    id: 918,
    name: "Spidops",
    types: ["Bug"]
  }, {
    id: 919,
    name: "Nymble",
    types: ["Bug"]
  }, {
    id: 920,
    name: "Lokix",
    types: ["Bug", "Dark"]
  }, {
    id: 921,
    name: "Pawmi",
    types: ["Electric"]
  }, {
    id: 922,
    name: "Pawmo",
    types: ["Electric", "Fighting"]
  }, {
    id: 923,
    name: "Pawmot",
    types: ["Electric", "Fighting"]
  }, {
    id: 924,
    name: "Tandemaus",
    types: ["Normal"]
  }, {
    id: 925,
    name: "Maushold",
    types: ["Normal"]
  }, {
    id: 926,
    name: "Fidough",
    types: ["Fairy"]
  }, {
    id: 927,
    name: "Dachsbun",
    types: ["Fairy"]
  }, {
    id: 928,
    name: "Smoliv",
    types: ["Grass", "Normal"]
  }, {
    id: 929,
    name: "Dolliv",
    types: ["Grass", "Normal"]
  }, {
    id: 930,
    name: "Arboliva",
    types: ["Grass", "Normal"]
  }, {
    id: 931,
    name: "Squawkabilly",
    types: ["Normal", "Flying"]
  }, {
    id: 932,
    name: "Nacli",
    types: ["Rock"]
  }, {
    id: 933,
    name: "Naclstack",
    types: ["Rock"]
  }, {
    id: 934,
    name: "Garganacl",
    types: ["Rock"]
  }, {
    id: 935,
    name: "Charcadet",
    types: ["Fire"]
  }, {
    id: 936,
    name: "Armarouge",
    types: ["Fire", "Psychic"]
  }, {
    id: 937,
    name: "Ceruledge",
    types: ["Fire", "Ghost"]
  }, {
    id: 938,
    name: "Tadbulb",
    types: ["Electric"]
  }, {
    id: 939,
    name: "Bellibolt",
    types: ["Electric"]
  }, {
    id: 940,
    name: "Wattrel",
    types: ["Electric", "Flying"]
  }, {
    id: 941,
    name: "Kilowattrel",
    types: ["Electric", "Flying"]
  }, {
    id: 942,
    name: "Maschiff",
    types: ["Dark"]
  }, {
    id: 943,
    name: "Mabosstiff",
    types: ["Dark"]
  }, {
    id: 944,
    name: "Shroodle",
    types: ["Poison", "Normal"]
  }, {
    id: 945,
    name: "Grafaiai",
    types: ["Poison", "Normal"]
  }, {
    id: 946,
    name: "Bramblin",
    types: ["Grass", "Ghost"]
  }, {
    id: 947,
    name: "Brambleghast",
    types: ["Grass", "Ghost"]
  }, {
    id: 948,
    name: "Toedscool",
    types: ["Ground", "Grass"]
  }, {
    id: 949,
    name: "Toedscruel",
    types: ["Ground", "Grass"]
  }, {
    id: 950,
    name: "Klawf",
    types: ["Rock"]
  }, {
    id: 951,
    name: "Capsakid",
    types: ["Grass"]
  }, {
    id: 952,
    name: "Scovillain",
    types: ["Grass", "Fire"]
  }, {
    id: 953,
    name: "Rellor",
    types: ["Bug"]
  }, {
    id: 954,
    name: "Rabsca",
    types: ["Bug", "Psychic"]
  }, {
    id: 955,
    name: "Flittle",
    types: ["Psychic"]
  }, {
    id: 956,
    name: "Espathra",
    types: ["Psychic"]
  }, {
    id: 957,
    name: "Tinkatink",
    types: ["Fairy", "Steel"]
  }, {
    id: 958,
    name: "Tinkatuff",
    types: ["Fairy", "Steel"]
  }, {
    id: 959,
    name: "Tinkaton",
    types: ["Fairy", "Steel"]
  }, {
    id: 960,
    name: "Wiglett",
    types: ["Water"]
  }, {
    id: 961,
    name: "Wugtrio",
    types: ["Water"]
  }, {
    id: 962,
    name: "Bombirdier",
    types: ["Flying", "Dark"]
  }, {
    id: 963,
    name: "Finizen",
    types: ["Water"]
  }, {
    id: 964,
    name: "Palafin",
    types: ["Water"]
  }, {
    id: 965,
    name: "Varoom",
    types: ["Steel", "Poison"]
  }, {
    id: 966,
    name: "Revavroom",
    types: ["Steel", "Poison"]
  }, {
    id: 967,
    name: "Cyclizar",
    types: ["Dragon", "Normal"]
  }, {
    id: 968,
    name: "Orthworm",
    types: ["Steel"]
  }, {
    id: 969,
    name: "Glimmet",
    types: ["Rock", "Poison"]
  }, {
    id: 970,
    name: "Glimmora",
    types: ["Rock", "Poison"]
  }, {
    id: 971,
    name: "Greavard",
    types: ["Ghost"]
  }, {
    id: 972,
    name: "Houndstone",
    types: ["Ghost"]
  }, {
    id: 973,
    name: "Flamigo",
    types: ["Flying", "Fighting"]
  }, {
    id: 974,
    name: "Cetoddle",
    types: ["Ice"]
  }, {
    id: 975,
    name: "Cetitan",
    types: ["Ice"]
  }, {
    id: 976,
    name: "Veluza",
    types: ["Water", "Psychic"]
  }, {
    id: 977,
    name: "Dondozo",
    types: ["Water"]
  }, {
    id: 978,
    name: "Tatsugiri",
    types: ["Dragon", "Water"]
  }, {
    id: 979,
    name: "Annihilape",
    types: ["Fighting", "Ghost"]
  }, {
    id: 980,
    name: "Clodsire",
    types: ["Poison", "Ground"]
  }, {
    id: 981,
    name: "Farigiraf",
    types: ["Normal", "Psychic"]
  }, {
    id: 982,
    name: "Dudunsparce",
    types: ["Normal"]
  }, {
    id: 983,
    name: "Kingambit",
    types: ["Dark", "Steel"]
  }, {
    id: 984,
    name: "Great Tusk",
    types: ["Ground", "Fighting"]
  }, {
    id: 985,
    name: "Scream Tail",
    types: ["Fairy", "Psychic"]
  }, {
    id: 986,
    name: "Brute Bonnet",
    types: ["Grass", "Dark"]
  }, {
    id: 987,
    name: "Flutter Mane",
    types: ["Ghost", "Fairy"]
  }, {
    id: 988,
    name: "Slither Wing",
    types: ["Bug", "Fighting"]
  }, {
    id: 989,
    name: "Sandy Shocks",
    types: ["Electric", "Ground"]
  }, {
    id: 990,
    name: "Iron Treads",
    types: ["Ground", "Steel"]
  }, {
    id: 991,
    name: "Iron Bundle",
    types: ["Ice", "Water"]
  }, {
    id: 992,
    name: "Iron Hands",
    types: ["Fighting", "Electric"]
  }, {
    id: 993,
    name: "Iron Jugulis",
    types: ["Dark", "Flying"]
  }, {
    id: 994,
    name: "Iron Moth",
    types: ["Fire", "Poison"]
  }, {
    id: 995,
    name: "Iron Thorns",
    types: ["Rock", "Electric"]
  }, {
    id: 996,
    name: "Frigibax",
    types: ["Dragon", "Ice"]
  }, {
    id: 997,
    name: "Arctibax",
    types: ["Dragon", "Ice"]
  }, {
    id: 998,
    name: "Baxcalibur",
    types: ["Dragon", "Ice"]
  }, {
    id: 999,
    name: "Gimmighoul",
    types: ["Ghost"]
  }, {
    id: 1000,
    name: "Gholdengo",
    types: ["Steel", "Ghost"]
  }, {
    id: 1001,
    name: "Wo-Chien",
    types: ["Dark", "Grass"]
  }, {
    id: 1002,
    name: "Chien-Pao",
    types: ["Dark", "Ice"]
  }, {
    id: 1003,
    name: "Ting-Lu",
    types: ["Dark", "Ground"]
  }, {
    id: 1004,
    name: "Chi-Yu",
    types: ["Dark", "Fire"]
  }, {
    id: 1005,
    name: "Roaring Moon",
    types: ["Dragon", "Dark"]
  }, {
    id: 1006,
    name: "Iron Valiant",
    types: ["Fairy", "Fighting"]
  }, {
    id: 1007,
    name: "Koraidon",
    types: ["Fighting", "Dragon"]
  }, {
    id: 1008,
    name: "Miraidon",
    types: ["Electric", "Dragon"]
  }, {
    id: 1009,
    name: "Walking Wake",
    types: ["Water", "Dragon"]
  }, {
    id: 1010,
    name: "Iron Leaves",
    types: ["Grass", "Psychic"]
  },
  // Aquí sigue la secuencia.
];

const typeImages = {
  Normal: "https://archives.bulbagarden.net/media/upload/8/89/Normal_icon_SV.png",
  Fire: "https://archives.bulbagarden.net/media/upload/8/8f/Fire_icon_SV.png",
  Water: "https://archives.bulbagarden.net/media/upload/3/34/Water_icon_SV.png",
  Electric: "https://archives.bulbagarden.net/media/upload/8/8e/Electric_icon_SV.png",
  Grass: "https://archives.bulbagarden.net/media/upload/e/ee/Grass_icon_SV.png",
  Ice: "https://archives.bulbagarden.net/media/upload/3/39/Ice_icon_SV.png",
  Fighting: "https://archives.bulbagarden.net/media/upload/e/e5/Fighting_icon_SV.png",
  Poison: "https://archives.bulbagarden.net/media/upload/a/a7/Poison_icon_SV.png",
  Ground: "https://archives.bulbagarden.net/media/upload/4/45/Ground_icon_SV.png",
  Flying: "https://archives.bulbagarden.net/media/upload/a/ab/Flying_icon_SV.png",
  Psychic: "https://archives.bulbagarden.net/media/upload/e/ee/Psychic_icon_SV.png",
  Bug: "https://archives.bulbagarden.net/media/upload/9/9a/Bug_icon_SV.png",
  Rock: "https://archives.bulbagarden.net/media/upload/b/b2/Rock_icon_SV.png",
  Ghost: "https://archives.bulbagarden.net/media/upload/c/c4/Ghost_icon_SV.png",
  Dragon: "https://archives.bulbagarden.net/media/upload/4/41/Dragon_icon_SV.png",
  Dark: "https://archives.bulbagarden.net/media/upload/3/3b/Dark_icon_SV.png",
  Steel: "https://archives.bulbagarden.net/media/upload/e/e9/Steel_icon_SV.png",
  Fairy: "https://archives.bulbagarden.net/media/upload/a/a9/Fairy_icon_SV.png",
};

export { pokemons };
export { typeImages };

