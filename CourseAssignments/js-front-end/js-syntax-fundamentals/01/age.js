function solve(age) {
  if (age < 0) {
    console.log('out of bounds');
  }

  if (age >= 0 && age <= 2) {
    console.log('baby');
  }
  if (age >= 3 && age <= 13) {
    console.log('child');
  }
  if (age >= 14 && age <= 19) {
    console.log('teenager');
  }
  if (age >= 20 && age <= 65) {
    console.log('adult');
  }
  if (age > 65 ) {
    console.log('elder');
  }
}



// ·	14-19 (age) – is a teenager;
// ·	20-65 (age) – is an adult;
// ·	>=66 (age) – is an elder;


solve(20);	//adult
solve(1);	//baby
solve(100);	//elder
solve(-1); //	out of bounds
