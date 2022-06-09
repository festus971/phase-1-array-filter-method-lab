// Code your solution here
function findMatching(name, names) {
  return name.filter(
    (expectedName) => expectedName.toLowerCase() === names.toLowerCase()
  );
}
function fuzzyMatch(one, two) {
  return one.filter((driversName) => driversName.indexOf(two) === 0);
}
function matchName(three, four) {
  return three.filter((yes) => yes.name === four);
}
