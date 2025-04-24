let books = ["Livre1", "Livre2", "Livre3"];
console.log("Livres :", books);

books.push("Livre4");
console.log( books);

books.unshift("Livre5");
console.log(books);

books.pop();
console.log( books);

books.shift();
console.log( books);


let categories = new Set(["Fiction", "Science", "Histoire"]);
console.log( Array.from(categories));

categories.add("Philosophie");
console.log(Array.from(categories));

categories.add("Science"); 
console.log(Array.from(categories));

categories.delete("Histoire");
console.log(Array.from(categories));

let emprunte = new Map();

emprunte.set("Livre1", "karima");
emprunte.set("Livre2", "kawtar");
emprunte.set("Livre3", "said");
console.log("Emprunts :");
emprunte.forEach((valeur, cle) => console.log(`${cle} emprunte par ${valeur}`));

emprunte.delete("Livre2");
console.log("Apres suppression Livre2:");
emprunte.forEach((valeur, cle) => console.log(`${cle} emprunte par ${valeur}`));


