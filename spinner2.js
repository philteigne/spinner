const spinimation = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
let delay = 0;

for (let i of spinimation) {
  setTimeout(() => {
    process.stdout.write('\r' + i);
  }, delay * 200);
  delay ++;
}
