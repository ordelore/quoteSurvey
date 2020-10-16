function twoRand(max) {
  const ret = [0, 0];
  ret[0] = Math.floor(max * Math.random());
  ret[1] = Math.floor(max * Math.random());
  while (ret[1] == ret[0]) {
    ret[1] = Math.floor(max * Math.random());
  }
  return ret;
}
window.onload = () => {
  const files = Promise.all([
    fetch("quotes.txt").then((d) => d.text()).then(d => d.split("\n")),
    fetch("people.txt").then((d) => d.text()).then(d => d.split("\n")),
  ]).then(files => updateDOM(files[0], files[1]));

};
function updateDOM(quotes, people) {
  // if match == 0, offer 2 quotes to match to a person
  // if match == 1, offer 2 people to match to a quote
  const match = Math.floor(2 * Math.random());
  let radA = "";
  let radB = "";
  let prompt = "";
  if (match == 0) {
    const both = twoRand(quotes.length);
    console.log(both);
    prompt = people[Math.floor(Math.random() * people.length)];
    radA = quotes[both[0]];
    radB = quotes[both[1]];
  } else {
    const both = twoRand(people.length);
    console.log(both);
    prompt = quotes[Math.floor(Math.random() * quotes.length)];
    radA = people[both[0]];
    radB = people[both[1]];
  }
  console.log(prompt);
  console.log(radA);
  console.log(radB);

  document.getElementById("prompt").innerHTML = prompt;
  document.getElementById("promptText").value = prompt;

  document.getElementById("OpALabel").innerHTML = radA;
  document.getElementById("OpAText").innerHTML = radA;

  document.getElementById("OpBLabel").innerHTML = radB;
  document.getElementById("OpBText").innerHTML = radB;

  console.log("done!");
}
