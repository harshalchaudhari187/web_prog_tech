//create an array having sites names
const arrWebsites = [
  "www.google.com",
  "www.msn.com",
  "www.amazon.co.in",
  "in.answer.yahoo.com",
  "en.m.wikipedia.com",
  "codehs.gitbooks.io",
  "www.coderanch.com",
];

//display number of website which starts from www
var count = 0;
arrWebsites.forEach((site) => {
  if (site.startsWith("www", 0)) {
    count++;
  }
});
console.log(count);
