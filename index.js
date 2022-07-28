const heroes = require('./super-heroes.json');

const getDCHeroes = (heroes) => {
  const arr = []
  for (const hero of heroes) {
    if (hero.publisher === "DC Comics") {
      arr.push(hero)
    }
  }
  return arr

}

// console.log(getDCHeroes(heroes))

const convertCharactersToArray = (heroes) => {
  const arr = []
  for (let hero of heroes) {
    hero = {
      ...hero,
      characters: (hero.characters.split(','))
    }
    arr.push(hero)
  }
  return arr
}

// console.log(convertCharactersToArray(heroes))

// * Coverts super hero data so it is grouped the publisher property
// * @returns {
// *   "publisher 1": [
// *     { ...hero }
// *     ...
// *   ],
// *   "publisher 2" :[
// *     {... hero}
// *     ...
// *   ]
// * }
// */

const groupByPublisher = (heroes) => {

  const map = {}

  for (const hero of heroes) {

    if (!map[hero.publisher]) {
      map[hero.publisher] = [{ ...hero }]
      console.log("making it")
    } else {
      let prevHeroes = map[hero.publisher]
      map[hero.publisher] = [...prevHeroes, { ...hero }]

    }
  }
  return map
}

console.log(groupByPublisher(heroes))


/**
 * Returns and array of DC Comic heroes that have more than 1 character
 * @returns [
 *  {
 *    ...hero,
 *    character: [
 *      string,
 *      string,
 *      string,
 *    ]
 *  }
 * ]
 */
const getDCHeroesWithMoreThanOneCharacter = (heroes) => {
  let newHeros = convertCharactersToArray(heroes)
  return newHeros.filter(item => item.characters.length > 1)

}

// console.log(getDCHeroesWithMoreThanOneCharacter(heroes))

module.exports = {
  convertCharactersToArray,
  getDCHeroes,
  getDCHeroesWithMoreThanOneCharacter,
  groupByPublisher,
}
