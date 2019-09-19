const cities = [
    {name: 'Los Angeles', population: 3792621},
    {name: 'New York', population: 8175133},
    {name: 'Chicago', population: 2695598},
    {name: 'Houston', population: 2099451},
    {name: 'Philadelphia', population: 1526006}
];

  test('should fliter', () => {
      let filteredCities = cities.filter(city => city.name === 'Los Angeles' || city.name === 'Philadelphia');
      expect(filteredCities).toEqual(
            [ { name: 'Los Angeles', population: 3792621 },
            { name: 'Philadelphia', population: 1526006 } ]
      );
  });