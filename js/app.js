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

document.querySelector("#trazi-text").addEventListener("input", function (e) {
  console.log(e.target.value);
});
