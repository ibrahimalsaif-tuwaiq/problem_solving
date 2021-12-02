function findSenior(list) {
  let oldest = [];

  list.forEach((person) => {
    if (oldest.length > 0) {
      if (oldest[0].age <= person.age) {
        if (oldest[0].age < person.age) {
          oldest = [];
          oldest.push(person);
        } else {
          oldest.push(person);
        }
      }
    } else {
      oldest.push(person);
    }
  });

  return oldest;
}

const list = [
  {
    firstName: "Gabriel",
    lastName: "X.",
    country: "Monaco",
    continent: "Europe",
    age: 40,
    language: "PHP",
  },
  {
    firstName: "Odval",
    lastName: "F.",
    country: "Mongolia",
    continent: "Asia",
    age: 49,
    language: "Python",
  },
  {
    firstName: "Emilija",
    lastName: "S.",
    country: "Lithuania",
    continent: "Europe",
    age: 19,
    language: "Python",
  },
  {
    firstName: "Sou",
    lastName: "B.",
    country: "Japan",
    continent: "Asia",
    age: 49,
    language: "PHP",
  },
];

console.log(findSenior(list)); 
/* 
[
  {
    firstName: 'Odval',
    lastName: 'F.',
    country: 'Mongolia',
    continent: 'Asia',
    age: 49,
    language: 'Python'
  },
  {
    firstName: 'Sou',
    lastName: 'B.',
    country: 'Japan',
    continent: 'Asia',
    age: 49,
    language: 'PHP'
  }
]
*/
