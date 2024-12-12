function myFunction() {
  let i = 0;
  while (i < 10) {
    console.log(i);
    if (i === 5) {
      break; // Exit the loop when i is 5
    }
    i++; // Increment i after the conditional check
  }
}