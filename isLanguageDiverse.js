function isLanguageDiverse(list) {
  let langs = [0, 0, 0];

  list.forEach((person) => {
    if (person.language == "Python") ++langs[0];
    if (person.language == "Ruby") ++langs[1];
    if (person.language == "JavaScript") ++langs[2];
  });

  const max = Math.max(...langs);

  return langs.every((lang) => max / lang <= 2);
}

const list = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
  { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
];

console.log(isLanguageDiverse(list)); // false