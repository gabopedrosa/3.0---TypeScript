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
var Pokemon = /** @class */ (function () {
    function Pokemon(data) {
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
    return Pokemon;
}());
// CLASSE FILME
var Movie = /** @class */ (function () {
    function Movie(data) {
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
    return Movie;
}());
// CLASSE PAIS  
var Country = /** @class */ (function () {
    function Country(data) {
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
    return Country;
}());
var pokemonDitto = new Pokemon({
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
var filmGuardianOfTheGalaxy3 = new Movie({
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
});
var countryBrazil = new Country({
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
var tablePokemon = document.getElementById("table-pokemon");
var rowPokemon = tablePokemon.insertRow();
var idPokemon = rowPokemon.insertCell(0);
var namePokemon = rowPokemon.insertCell(1);
var baseExperiencePokemon = rowPokemon.insertCell(2);
var heightPokemon = rowPokemon.insertCell(3);
var weightPokemon = rowPokemon.insertCell(4);
var legendaryPokemon = rowPokemon.insertCell(5);
var appearancePokemon = rowPokemon.insertCell(6);
var abilitiesPokemon = rowPokemon.insertCell(7);
var statsPokemonHP = rowPokemon.insertCell(8);
var statsPokemonATK = rowPokemon.insertCell(9);
var statsPokemonDEF = rowPokemon.insertCell(10);
idPokemon.innerHTML = "".concat(pokemonDitto.id);
namePokemon.innerHTML = "".concat(pokemonDitto.name);
baseExperiencePokemon.innerHTML = "".concat(pokemonDitto.base_experience);
heightPokemon.innerHTML = "".concat(pokemonDitto.height);
weightPokemon.innerHTML = "".concat(pokemonDitto.weight);
legendaryPokemon.innerHTML = "".concat(pokemonDitto.legendary);
appearancePokemon.innerHTML = "".concat(pokemonDitto.firstAppearance);
abilitiesPokemon.innerHTML = "".concat(pokemonDitto.abilities);
statsPokemonHP.innerHTML = "".concat(pokemonDitto.stats[0].base_stat);
statsPokemonATK.innerHTML = "".concat(pokemonDitto.stats[1].base_stat);
statsPokemonDEF.innerHTML = "".concat(pokemonDitto.stats[2].base_stat);
// Table Movie
var tableMovie = document.getElementById("table-movie");
var rowMovie = tableMovie.insertRow();
var adultMovie = rowMovie.insertCell(0);
var backdropPathMovie = rowMovie.insertCell(1);
var idMovie = rowMovie.insertCell(2);
var originalLanguageMovie = rowMovie.insertCell(3);
var originalTitleMovie = rowMovie.insertCell(4);
var overviewMovie = rowMovie.insertCell(5);
var popularityMovie = rowMovie.insertCell(6);
var posterPathMovie = rowMovie.insertCell(7);
var releaseDateMovie = rowMovie.insertCell(8);
var titleMovie = rowMovie.insertCell(9);
var videoMovie = rowMovie.insertCell(10);
var voteAverageMovie = rowMovie.insertCell(11);
var voteCount = rowMovie.insertCell(12);
adultMovie.innerHTML = "".concat(filmGuardianOfTheGalaxy3.adult);
backdropPathMovie.innerHTML = "".concat(filmGuardianOfTheGalaxy3.backdrop_path);
idMovie.innerHTML = "".concat(filmGuardianOfTheGalaxy3.id);
originalLanguageMovie.innerHTML = "".concat(filmGuardianOfTheGalaxy3.original_language);
originalTitleMovie.innerHTML = "".concat(filmGuardianOfTheGalaxy3.original_title);
overviewMovie.innerHTML = "".concat(filmGuardianOfTheGalaxy3.overview);
popularityMovie.innerHTML = "".concat(filmGuardianOfTheGalaxy3.popularity);
posterPathMovie.innerHTML = "".concat(filmGuardianOfTheGalaxy3.poster_path);
releaseDateMovie.innerHTML = "".concat(filmGuardianOfTheGalaxy3.release_date);
titleMovie.innerHTML = "".concat(filmGuardianOfTheGalaxy3.title);
videoMovie.innerHTML = "".concat(filmGuardianOfTheGalaxy3.video);
voteAverageMovie.innerHTML = "".concat(filmGuardianOfTheGalaxy3.vote_average);
voteCount.innerHTML = "".concat(filmGuardianOfTheGalaxy3.vote_count);
// Table Country
var tableCountry = document.getElementById("table-country");
var rowCountry = tableCountry.insertRow();
var commonNameCountry = rowCountry.insertCell(0);
var officialNameCountry = rowCountry.insertCell(1);
var independentCountry = rowCountry.insertCell(2);
var unMemberCountry = rowCountry.insertCell(3);
var capitalCountry = rowCountry.insertCell(4);
var regionCountry = rowCountry.insertCell(5);
var subregionCountry = rowCountry.insertCell(6);
var languagesCountry = rowCountry.insertCell(7);
var latlngCountry = rowCountry.insertCell(8);
var bordersCountry = rowCountry.insertCell(9);
var areaCountry = rowCountry.insertCell(10);
var populationCountry = rowCountry.insertCell(11);
var timezonesCountry = rowCountry.insertCell(12);
var flagsCountry = rowCountry.insertCell(13);
commonNameCountry.innerHTML = "".concat(countryBrazil.name.common);
officialNameCountry.innerHTML = "".concat(countryBrazil.name.official);
independentCountry.innerHTML = "".concat(countryBrazil.independent);
unMemberCountry.innerHTML = "".concat(countryBrazil.unMember);
capitalCountry.innerHTML = "".concat(countryBrazil.capital);
regionCountry.innerHTML = "".concat(countryBrazil.region);
subregionCountry.innerHTML = "".concat(countryBrazil.subregion);
languagesCountry.innerHTML = "".concat(countryBrazil.languages);
latlngCountry.innerHTML = "".concat(countryBrazil.latlng);
bordersCountry.innerHTML = "".concat(countryBrazil.borders);
areaCountry.innerHTML = "".concat(countryBrazil.area);
populationCountry.innerHTML = "".concat(countryBrazil.population);
timezonesCountry.innerHTML = "".concat(countryBrazil.timezones);
flagsCountry.innerHTML = "<img src=".concat(countryBrazil.flags.png, ">");
