function showStory() {
  var name1 = document.getElementById("name").value;
  var character = document.getElementById("character").value;
  var adverb = document.getElementById("Adverb").value;
  var adjective = document.getElementById("Adjective").value;

  var sentence = `<h1><b> Wendy's Crazy Mad Libs Story</b></h1><h2>One day, my friend <span>${name1}</span> was visiting New York and ran into<span> ${character}</span>. <span>${name1}</span> ran<span> ${adverb}</span> to meet<span> ${character}</span>. But <span>${character}</span> turned out to be very  ${adjective} and ${name1} did not enjoy the meeting.</h2>`;
  document.getElementById("show").innerHTML = sentence;
}
