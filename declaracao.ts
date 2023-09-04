/* var, let e const
ESTUDOS

class Cliente {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }

    apresentar(){
        return `Olá eu sou ${this.nome} e tenho ${this.idade} anos.`
    }
}
    let joao: Cliente = new Cliente('Joao', 25);
    let apresentacao: string = joao.apresentar();
    console.log(apresentacao);
*/

// Classe POKEMON
class Pokemon {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    weight: number;
    legendary: boolean;
    firstAppearance: string;
    abilities: string[];
    stats: {
      base_stat: number;
      stat: string;
    };
    
    constructor(data: any) {
      this.id = data.id;
      this.name = data.name;
      this.base_experience = data.base_experience;
      this.height = data.height;
      this.weight = data.weight;
      this.legendary = data.legendary;
      this.firstAppearance = data.firstAppearance;
      this.abilities = data.abilities;
      this.stats = data.stats;
    }
  }
  
  // CLASSE FILME
  class Movie {
    adult: boolean;
    backdrop_path: string;
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    
    constructor(data: any) {
      this.adult = data.adult;
      this.backdrop_path = data.backdrop_path;
      this.id = data.id;
      this.original_language = data.original_language;
      this.original_title = data.original_title;
      this.overview = data.overview;
      this.popularity = data.popularity;
      this.poster_path = data.poster_path;
      this.release_date = data.release_date;
      this.title = data.title;
      this.video = data.video;
      this.vote_average = data.vote_average;
      this.vote_count = data.vote_count;
    }
  }
  
  // CLASSE PAIS  
  class Country {
    name: {
      common: string;
      official: string;
    };
    independent: boolean;
    unMember: boolean;
    capital: string;
    region: string;
    subregion: string;
    languages: string[];
    latlng: number[];
    borders: string[];
    area: number;
    population: number;
    timezones: string[];
    flags: {
      png: string;
      svg: string;
    };
    
    constructor(data: any) {
      this.name = data.name;
      this.independent = data.independent;
      this.unMember = data.unMember;
      this.capital = data.capital;
      this.region = data.region;
      this.subregion = data.subregion;
      this.languages = data.languages;
      this.latlng = data.latlng;
      this.borders = data.borders;
      this.area = data.area;
      this.population = data.population;
      this.timezones = data.timezones;
      this.flags = data.flags;
    }
  }
  
  
  let pokemonDitto = new Pokemon({
    "id": 132,
    "name": "Ditto",
    "base_experience": 101,
    "height": 3,
    "weight": 40,
    "legendary": false,
    "firstAppearance": "1996-06-01",
    "abilities": ["limber", "imposter"],
    "stats": [
      {
        "base_stat": 48,
        "stat": "hp"
      },
      {
        "base_stat": 48,
        "stat": "attack"
      },
      {
        "base_stat": 48,
        "stat": "defense"
      }
    ]
  });

  let filmGuardianOfTheGalaxy3 = new Movie({
    "adult": false,
    "backdrop_path": "/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg",
    "id": 447365,
    "original_language": "en",
    "original_title": "Guardians of the Galaxy Vol. 3",
    "overview": "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
    "popularity": 4145.055,
    "poster_path": "/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
    "release_date": "2023-05-03",
    "title": "Guardians of the Galaxy Vol. 3",
    "video": false,
    "vote_average": 8.1,
    "vote_count": 3154
  })

  let countryBrazil = new Country({
    "name": {
      "common": "Brazil",
      "official": "Federative Republic of Brazil",
    },
    "independent": true,
    "unMember": true,
    "capital": "Brasília",
    "region": "Americas",
    "subregion": "South America",
    "languages": ["Portuguese"],
    "latlng": [-10, -55],
    "borders": [
      "ARG",
      "BOL",
      "COL",
      "GUF",
      "GUY",
      "PRY",
      "PER",
      "SUR",
      "URY",
      "VEN"
    ],
    "area": 8515767,
    "population": 212559409,
    "timezones": ["UTC-05:00", "UTC-04:00", "UTC-03:00", "UTC-02:00"],
    "flags": {
      "png": "https://flagcdn.com/w320/br.png",
      "svg": "https://flagcdn.com/br.svg",
    }
  });
  
  console.log(pokemonDitto);
  console.log(filmGuardianOfTheGalaxy3);
  console.log(countryBrazil);
  
  // Table Pokemon
  let tablePokemon = document.getElementById("table-pokemon") as HTMLTableElement;
  let rowPokemon = tablePokemon.insertRow();

  let idPokemon = rowPokemon.insertCell(0);
  let namePokemon = rowPokemon.insertCell(1);
  let baseExperiencePokemon = rowPokemon.insertCell(2);
  let heightPokemon = rowPokemon.insertCell(3);
  let weightPokemon = rowPokemon.insertCell(4);
  let legendaryPokemon = rowPokemon.insertCell(5);
  let appearancePokemon = rowPokemon.insertCell(6);
  let abilitiesPokemon = rowPokemon.insertCell(7);
  let statsPokemonHP = rowPokemon.insertCell(8);
  let statsPokemonATK = rowPokemon.insertCell(9);
  let statsPokemonDEF = rowPokemon.insertCell(10);

  idPokemon.innerHTML = `${pokemonDitto.id}`;
  namePokemon.innerHTML = `${pokemonDitto.name}`;
  baseExperiencePokemon.innerHTML = `${pokemonDitto.base_experience}`;
  heightPokemon.innerHTML = `${pokemonDitto.height}`;
  weightPokemon.innerHTML = `${pokemonDitto.weight}`;
  legendaryPokemon.innerHTML = `${pokemonDitto.legendary}`;
  appearancePokemon.innerHTML = `${pokemonDitto.firstAppearance}`;
  abilitiesPokemon.innerHTML = `${pokemonDitto.abilities}`;
  statsPokemonHP.innerHTML = `${pokemonDitto.stats[0].base_stat}`;
  statsPokemonATK.innerHTML = `${pokemonDitto.stats[1].base_stat}`;
  statsPokemonDEF.innerHTML = `${pokemonDitto.stats[2].base_stat}`;


   // Table Movie
  let tableMovie = document.getElementById("table-movie") as HTMLTableElement;
  let rowMovie = tableMovie.insertRow();
  
  let adultMovie = rowMovie.insertCell(0);
  let backdropPathMovie = rowMovie.insertCell(1);
  let idMovie = rowMovie.insertCell(2);
  let originalLanguageMovie = rowMovie.insertCell(3);
  let originalTitleMovie = rowMovie.insertCell(4);
  let overviewMovie = rowMovie.insertCell(5);
  let popularityMovie = rowMovie.insertCell(6);
  let posterPathMovie = rowMovie.insertCell(7);
  let releaseDateMovie = rowMovie.insertCell(8);
  let titleMovie = rowMovie.insertCell(9);
  let videoMovie = rowMovie.insertCell(10);
  let voteAverageMovie = rowMovie.insertCell(11);
  let voteCount = rowMovie.insertCell(12);
  
  adultMovie.innerHTML = `${filmGuardianOfTheGalaxy3.adult}`;
  backdropPathMovie.innerHTML = `${filmGuardianOfTheGalaxy3.backdrop_path}`;
  idMovie.innerHTML = `${filmGuardianOfTheGalaxy3.id}`;
  originalLanguageMovie.innerHTML = `${filmGuardianOfTheGalaxy3.original_language}`;
  originalTitleMovie.innerHTML = `${filmGuardianOfTheGalaxy3.original_title}`;
  overviewMovie.innerHTML = `${filmGuardianOfTheGalaxy3.overview}`;
  popularityMovie.innerHTML = `${filmGuardianOfTheGalaxy3.popularity}`;
  posterPathMovie.innerHTML = `${filmGuardianOfTheGalaxy3.poster_path}`;
  releaseDateMovie.innerHTML = `${filmGuardianOfTheGalaxy3.release_date}`;
  titleMovie.innerHTML = `${filmGuardianOfTheGalaxy3.title}`;
  videoMovie.innerHTML = `${filmGuardianOfTheGalaxy3.video}`;
  voteAverageMovie.innerHTML = `${filmGuardianOfTheGalaxy3.vote_average}`;
  voteCount.innerHTML = `${filmGuardianOfTheGalaxy3.vote_count}`;


   // Table Country
   let tableCountry = document.getElementById("table-country") as HTMLTableElement;
   let rowCountry = tableCountry.insertRow();

   let commonNameCountry = rowCountry.insertCell(0);
   let officialNameCountry = rowCountry.insertCell(1);
   let independentCountry = rowCountry.insertCell(2);
   let unMemberCountry = rowCountry.insertCell(3);
   let capitalCountry = rowCountry.insertCell(4);
   let regionCountry = rowCountry.insertCell(5);
   let subregionCountry = rowCountry.insertCell(6);
   let languagesCountry = rowCountry.insertCell(7);
   let latlngCountry = rowCountry.insertCell(8);
   let bordersCountry = rowCountry.insertCell(9);
   let areaCountry = rowCountry.insertCell(10);
   let populationCountry = rowCountry.insertCell(11);
   let timezonesCountry = rowCountry.insertCell(12);
   let flagsCountry = rowCountry.insertCell(13);


   commonNameCountry.innerHTML = `${countryBrazil.name.common}`;
   officialNameCountry.innerHTML = `${countryBrazil.name.official}`;
   independentCountry.innerHTML = `${countryBrazil.independent}`;
   unMemberCountry.innerHTML = `${countryBrazil.unMember}`;
   capitalCountry.innerHTML = `${countryBrazil.capital}`;
   regionCountry.innerHTML = `${countryBrazil.region}`;
   subregionCountry.innerHTML = `${countryBrazil.subregion}`;
   languagesCountry.innerHTML = `${countryBrazil.languages}`;
   latlngCountry.innerHTML = `${countryBrazil.latlng}`;
   bordersCountry.innerHTML = `${countryBrazil.borders}`;
   areaCountry.innerHTML = `${countryBrazil.area}`;
   populationCountry.innerHTML = `${countryBrazil.population}`;
   timezonesCountry.innerHTML = `${countryBrazil.timezones}`;
   flagsCountry.innerHTML = `<img src=${countryBrazil.flags.png}>`;