// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(name, names) {
  return name.filter(
    (expectedName) => expectedName.toLowerCase() === names.toLowerCase()
  );
}
function fuzzyMatch(one, two) {
  return one.filter((driversName) => driversName.indexOf(two) === 0);
}
const driver = [
  {
    name: 'Bobby',
    hometown: 'Pittsburgh' },
  {
    name: 'Sammy',
    hometown: 'New York' } ,
  {
    name: 'Sally',
    hometown: 'Cleveland' },
  {
    name: 'Annette',
    hometown: 'Los Angeles' },
  {
    name: 'Bobby',
    hometown: 'Tampa Bay' }
];

function matchName(three, four) {
  return three.filter((yes) => yes.name === four);
}
