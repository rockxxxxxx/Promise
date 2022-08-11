const promise1 = Promise.resolve("This is first promise");
const promise2 = Promise.resolve("This is second promise");
const promise3 = Promise.resolve("This is third promise");
const promise4 = Promise.resolve("This is fourth promise");

Promise.all([promise1, promise2, promise3, promise4]).then((value) => {
  console.log(value);
});
