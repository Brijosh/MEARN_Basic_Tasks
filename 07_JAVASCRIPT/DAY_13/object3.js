const countries = [
    { name: 'United States', population: 331002651, continent: 'North America', capital: 'Washington, D.C.' },
    { name: 'China', population: 1439323776, continent: 'Asia', capital: 'Beijing' },
    { name: 'Brazil', population: 212559417, continent: 'South America', capital: 'Brasília' },
    { name: 'United Kingdom', population: 67886011, continent: 'Europe', capital: 'London' },
    { name: 'South Africa', population: 59308690, continent: 'Africa', capital: 'Pretoria, Cape Town, Bloemfontein' },
  ];
  
  // 1. Print the names of all countries.
  // console.log(countries.map(country=> country.name));


  // 2. Find the country with the largest population.
  // console.log(countries.reduce((a,b)=> a.population>b.population?a:b));


  // 3. Find the total population of all countries.
  // console.log(countries.reduce((a,b)=> a+b.population,0));


  // 4. Find all countries in a specific continent (e.g., Asia).
// console.log(countries.filter(country => country.continent == "Asia"));

  // 5. Print the names of capitals with more than one city.
  // countries.filter(count=>count.capital.split(",").length>1?console.log(count.name):null)


  
  // 6. Sort countries based on population (descending order).
  // console.log(countries.sort((a,b)=> b.population-a.population));


  // 7. Find the country with the smallest population.
  // console.log(countries.reduce((a,b)=> a.population<b.population?a:b));



  // 8. Find the country with the longest name.
  // console.log(countries.reduce((a,b)=> a.name.length>b.name.length?a:b));

  // 9. Find the country with the shortest name.
  // console.log(countries.reduce((a,b)=> a.name.length<b.name.length?a:b));


  // 10. Find the average population of all countries.
  console.log(countries.reduce((a,b)=> a+b.population,0)/countries.length-1);
