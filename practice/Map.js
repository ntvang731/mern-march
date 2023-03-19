// ! map and filter are ONLY available on arrays
// ! map and filter BOTH return NEW arrays 
// Upload component snippet video to bonus playlist
const nums = [23,56,19,20,9,20,78,55,32,42,8,12,80]

// const newArr = nums.map( (item, idx, wholeArray) => {
//     return item *2
// })
// console.log(newArr);


const evenNums = nums.filter( (item, idx, wholeArray) => item % 2 === 0)
console.log(evenNums);

// ! filter through the nums array and return a new array that contains only the numbers that are less than 50
const lessNums = nums.filter((item) => item < 50)
console.log(lessNums)




const nbaAthletes = [
    {name:'Kevin Durant', league:'NBA', position: 'Small Forward', active:true},
    {name:'Charles Barkley', league:'NBA',position: 'Power Forward', active:false},
    {name:'Stephen Curry', league:'NBA',  position: 'Point Guard', active:true },
    {name:'Shaq', league:'NBA',  position: 'Center', active:false },
    {name:'Damian Lillard', league:'NBA',  position: 'Point Guard', active:true },
    {name:'Mike James', league:'Euro',  position: 'Shooting Guard', active:true },
]
// ! map through nbaAthletes and console log every athletes name, position and league they play in
// const athletes = nbaAthletes.map((athlete) => console.log(athlete.name, athlete.position, athlete.league))
const athletes = nbaAthletes.map(function(athlete) {
    console.log(athlete.name, athlete.position, athlete.league);
    // console.log(`${athlete.name}`)
    })

// here I am filtering out all the players that play in the NBA 
// const NBAPlayers = nbaAthletes.filter((athlete) => athlete.league === 'NBA')
// console.log(NBAPlayers);

// ! filter through the nbaAthletes array and return a new array that contains only the players that are active (active status is true)
// const activePlayers = nbaAthletes.filter((athlete) => athlete.active === true)
// console.log(activePlayers);

// ! filter through the nbaAthletes array and return a new array that contains only the players that are point guards (position: 'Point Guard')
const pgPlayers = nbaAthletes.filter((athlete) => athlete.position === "Point Guard")
console.log(pgPlayers);