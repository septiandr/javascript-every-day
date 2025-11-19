//Implementasikan fungsi myPromiseAll() yang berperilaku seperti Promise.all().

const p1 = Promise.resolve(10);
const p2 = Promise.resolve(20);
const p3 = Promise.resolve(30);

function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let complete = 0;

    const processed = promises.map((p) => Promise.resolve(p));

    processed.forEach((promise, index) => {
      promise
        .then((value) => {
          results[index] = value;
          complete++;

          if (complete === processed.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
}

myPromiseAll([p1, p2, p3]).then((results) => {
  console.log(results); // Output: [10, 20, 30]
});

//expected output : [10, 20, 30]
