const arr = process.argv.slice(2);

const timer1 = () => {
  if (arr.length === 0) {
    return null;
  }
  for (let i in arr) {
    if (arr[i] > 0) {
      setTimeout(() => {
        console.log(`${arr[i]} seconds`);
        process.stdout.write('\x07');
      }, arr[i] * 1000);
    } else {
      setTimeout(() => {
        
      }, 0);
    }
  }
};