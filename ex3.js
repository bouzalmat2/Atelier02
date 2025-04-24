class Vecteur2D {
    constructor(x = 0, y = 0) {
      this.x = x;
      this.y = y;
    }
  
    afficher() {
      console.log(`Vecteur2D(x=${this.x}, y=${this.y})`);
    }
  
    addition(V) {
      return new Vecteur2D(this.x + V.x, this.y + V.y);
    }
  }
  
  let v1 = new Vecteur2D();
  let v2 = new Vecteur2D(3, 6);
  let v3 = new Vecteur2D(1, 2);
  
  v1.afficher();
  v2.afficher();
  
  let v4 = v3.addition(v2);
  console.log("Somme des vecteurs :");
  v4.afficher();
  
  
  class Rectangle {
    constructor(longueur = 2, largeur = 2) {
      this.longueur = longueur;
      this.largeur = largeur;
      this.nom = "rectangle";
    }
  
    afficher() {
      console.log(` Nom : ${this.nom}, Longueur: ${this.longueur}, Largeur: ${this.largeur}`);
    }
  
    surface() {
      return this.longueur * this.largeur;
    }
  }
  

  class Carre extends Rectangle {
    constructor(cote = 1) {
      super(cote, cote);
      this.nom = "carre";
    }
  }
  
  let rectangle1 = new Rectangle(5, 6);
  let rectangle2 = new Rectangle(3, 4);
  let carre = new Carre(3);
  
  rectangle1.afficher();
  rectangle2.afficher();

  console.log("Surface rectangle:", rectangle1.surface());
  console.log("Surface rectangle:", rectangle2.surface());
  
  carre.afficher();
  console.log("Surface carré:", carre.surface());
  
  class Point {
    constructor(x = 0.0, y = 0.0) {
      this.x = x;
      this.y = y;
    }
  }
  class Segment {
    constructor(xOrig = 0, yOrig = 0, xExtrem = 0, yExtrem = 0) {
      this.orig = new Point(xOrig, yOrig);
      this.extrem = new Point(xExtrem, yExtrem);
    }
  
    afficher() {
      console.log(`Segment de (${this.orig.x}, ${this.orig.y}) à (${this.extrem.x}, ${this.extrem.y})`);
    }
  }
  
  let seg = new Segment(1, 2, 3, 4);
  seg.afficher();
  