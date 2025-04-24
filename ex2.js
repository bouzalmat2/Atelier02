function Etudiant(nom, prenom, age, cne) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.cne = cne;
  }
  
  function Professeur(nom, age, cin) {
    this.nom = nom;
    this.age = age;
    this.cin = cin;
  }
  
  
  Etudiant.prototype.etudier = function() {
    console.log(this.prenom + " " + this.nom + " est  etudier");
  };
  
  Professeur.prototype.enseigner = function() {
    console.log(this.nom + " est enseigner.");
  };
  
  let etudiants = [
    new Etudiant("Bouzalmat", "Kawtar", 17, "KB1255"),
    new Etudiant("el etahiri", "farah", 27, "FT1002"),
    new Etudiant("affelad", "soufian", 26, "SA1001")
  ];
  
  etudiants.sort((a, b) => {
    if (a.nom.toLowerCase() < b.nom.toLowerCase()) return -1;
    if (a.nom.toLowerCase() > b.nom.toLowerCase()) return 1;
    if (a.prenom.toLowerCase() < b.prenom.toLowerCase()) return -1;
    if (a.prenom.toLowerCase() > b.prenom.toLowerCase()) return 1;
    return a.age - b.age;
  });
  

  console.log("etudiants est tries selon l ordre alphabetique :");
  etudiants.forEach(e => {
    console.log(`Nom : ${e.nom}, Prenom :${e.prenom}, Age: ${e.age}`);
  });
  