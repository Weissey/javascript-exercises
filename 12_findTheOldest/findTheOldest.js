// const findTheOldest = function(array) {
//     const age = array.map(person => (person.yearOfDeath - person.yearOfBirth));
//     console.log(age);
//     const sortedAge = age.sort((a, b) => a > b ? 1 : -1);
//     const sortedLength = sortedAge.length - 1;
//     const highestAge = sortedAge[sortedLength];
//     const foundPerson = array.find((item) => {
//         return item.yearOfDeath - item.yearOfBirth === highestAge;
//     });
//     console.log(foundPerson.name);
//     return foundPerson.name;
// };

const findTheOldest = function(array) {
    return array.reduce((oldest, currentPerson) => {
      const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
      const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
      return oldestAge < currentAge ? currentPerson : oldest;
    })
  };

//oldest 

  function getAge(birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
  };

// Do not edit below this line
module.exports = findTheOldest;

//1970 1942