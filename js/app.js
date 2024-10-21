const notes = [
  {
    title: "Moje sledece putovanje",
    body: "Zeleo bih posetiti Portugal",
  },
  {
    title: "Radne navike",
    body: "Vezbaj.Jedi kvalitetnije",
  },
  {
    title: "Modernizovanje radne kancelarije",
    body: "Kupi nove stolice",
  },
];
const filters = {
  traziText: "",
};
// const korisnik = {
//   ime: "Goran",
//   godine: 50,
// };
// const korisnikJSON = JSON.stringify(korisnik);
// // console.log(korisnikJSON);
// localStorage.setItem("nasKorisnik", korisnikJSON);
// const korisnikJSON = localStorage.getItem("nasKorisnik");
// const korisnik = JSON.parse(korisnikJSON);
// console.log(korisnik);

const renderNotes = function (notes, filters) {
  const filteredNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.traziText.toLowerCase());
  });

  document.querySelector("#zapisi").innerHTML = "";
  filteredNotes.forEach(function (note) {
    const noteEl = document.createElement("p");
    noteEl.textContent = note.title;
    document.querySelector("#zapisi").appendChild(noteEl);
  });
};
renderNotes(notes, filters);
document.querySelector("button").addEventListener("click", function (e) {
  e.target.textContent = "Dugme je kliknuto !";
});

document
  .querySelector("#kreiraj-zapis")
  .addEventListener("click", function (e) {
    notes.push({
      title: "",
      body: "",
    });
    localStorage.setItem("notes", JSON.stringify(notes));
    renderNotes(notes, filters);
  });
// document.querySelector("#trazi-text").addEventListener("input", function (e) {
//   console.log(e.target.value);
// });
// document.querySelector("#ime-forma").addEventListener("submit", function (e) {
//   e.preventDefault();
//   console.log(e.target.elements.Ime.value);
//   e.target.elements.Ime.value = "";
// });
// document
//   .querySelector("#filtriraj-po")
//   .addEventListener("change", function (e) {
//     console.log(e.target.value);
//   });
