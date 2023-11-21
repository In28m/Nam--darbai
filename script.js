/*Pasirinkite 5 pasaulio šalis. Suraskite (Google, Wikipedia) jų valstybės plotą (km²) ir gyventojų skaičių.

Sukurkite naują masyvą su penkių pasaulio šalių objektais, kuriuose būtų nurodyta: šalies pavadinimas, valstybės plotas ir gyventojų skaičius.

Suskaičiuokite ir suapvalinkite su toFixed(2) koks plotas tenka vienam gyventojui (m²) kiekvienoje šalyje. P.s. reikės padauginti nurodytą skaičių km2 iš 1000000, kad gautumėte m2.

Atspausdinkite tokią informaciją apie šalis per console.log naudodamiesi for loop arba for/of loop pagal tokį šabloną:

Šalis: Portugalija, joje gyvena 10.26 mln. gyventojų.
Valstybės plotas: 92212 km², plotas tenkantis vienam gyventojui: 8987.52 m².

Papildomai

Sudėkite sukoduotą skaičiavimą ir spausdinimą į funkcijos ciklą ir jį paleiskite per for loop arba for/of loop nurodydami informaciją iš masyvo.*/


var countries = [
    { name: "Norvegija", area: 385207, population: 5488984},
    { name: "Švedija", area: 450295, population: 10402070},
    { name: "JAV", area: 9833520, population: 331449281},
    { name: "Kinija", area: 959696, population: 1412600000},
    { name: "Rusija", area: 1709824, population: 143054637}
];

function info(country){
    var areaMeters = country.area * 1000000;
    var areaPerson = areaMeters / country.population;
    var roundedAreaPerson = areaPerson.toFixed(2);

    console.log(`Šalis: ${country.name}`);
    console.log(`Valstybės plotas: ${country.area} km²`);
    console.log(`Gyventojų skaičius: ${country.population}`);
    console.log(`Plotas vienam gyventojui: ${roundedAreaPerson} m²`);
}

for (let i = 0; i < countries.length; i++) {
        info(countries[i]);
  }

