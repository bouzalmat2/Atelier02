function Voiture(model , marque, annee, type, carburant) {
    this.model = model;
    this.marque = marque;
    this.annee = annee;
    this.type = type;
    this.carburant = carburant;
  }
  
  function Hyundai(model , marque, annee, type, carburant, serie, hybride) {
    Voiture.call(this, model, marque, annee, type, carburant);
    this.serie = serie;
    this.hybride = hybride;
  }
  
  Hyundai.prototype = Object.create(Voiture.prototype);
  Hyundai.prototype.constructor = Hyundai;
  
  Hyundai.prototype.Alarmer = function() {
    console.log("Alarme de la voiture " + this.serie);
  };
  
  function Ford(model , marque, annee, type, carburant, options) {
    Voiture.call(this, model, marque, annee, type, carburant);
    this.options = options;
  }
  
  Ford.prototype = Object.create(Voiture.prototype);
  Ford.prototype.constructor = Ford;
  
  let voitures = [
    new Hyundai("i20", "Hyundai", 2018, "citadine", "essence", "Serie A", false),
    new Hyundai("Elantra", "Hyundai", 2020, "berline", "hybride", "Serie B", true),
    new Ford("Focus", "Ford", 2017, "berline", "diesel", ["GPS", "Climatisation"]),
    new Ford("Mustang", "Ford", 2019, "sport", "essence", ["Sieges cuir", "Bluetooth"])
  ];
  
  voitures.sort((a, b) => a.annee - b.annee);
  console.log("Voitures est tries par annee :");
  voitures.forEach(v => {
    console.log(` Marque : ${v.marque}, Model : ${v.model}, Annee: ${v.annee}`);
  });
 