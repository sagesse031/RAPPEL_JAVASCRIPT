// creer un nouveau tableau contenant uniquement des objets simplifies : prenom, nom, role (map et destructuration)
let student = [
  { prenom: "Marcus", nom: "Stamford", role: "admin", age: 25 },
  { prenom: "Sagesse", nom: "N.E", role: "user", age: 29 },
  { prenom: "Antoine", nom: "Potter", role: "user", age: 25 },
];

const objSimpl = student.map(({ prenom, nom, age }) => ({
  prenom,
  nom,
  age,
}));

console.log(objSimpl);

// transformer le tableau pour obtenir un seul objet dont les cles correspondent au role et les valeurs sont des tableaux contenant des utilisateurs associes
const groupByRole = student.reduce((acc, utilisateur) => {
  const role = utilisateur.role;

  if (!acc[role]) {
    acc[role] = [];
  }
  acc[role].push(utilisateur);
  return acc;
}, {});

console.log(groupByRole);

// creer une fonction qui affiche le premier utilisateur age de 25 ans en utilisant find
function trouverAge(tableau) {
  const userfind = tableau.find((user) => user.age === 25);

  if (userfind) {
    console.log("Le premier utilisateur de 25 ans est : ", userfind.prenom);
  } else {
    console.log("Aucun utilisateur de 25 ans trouvé.");
  }
}

trouverAge(student);

// Ajouter un nouvel utilisateur dans un nouveau tableau appele EQUIPE qui contient tous les utilisateurs du premier tableau (Utiliser le script operator)
const equipe = [
  ...student,
  { prenom: "Cheick", nom: "Anta", role: "admin", age: 80 },
];

console.log(equipe);
