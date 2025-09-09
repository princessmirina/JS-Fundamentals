let number;
function findArg(x) {
  if (x != number) {
    console.log("No argument");
  } else if (x == number) {
    console.log("Argument found");
  } else {
    console.log("Arguments found");
  }
}

findArg();
