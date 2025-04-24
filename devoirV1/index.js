let container = document.getElementById("container");
let table = document.createElement("table");
table.classList.add("table", "table-bordered");
let tr = document.createElement("tr");
let headers = ["id", "codeMassar", "Nom", "Prenom", "Note", "Appreciation", "Action"];


for (let i = 0; i < headers.length; i++) {
    let th = document.createElement("th");
    th.textContent = headers[i];
    tr.appendChild(th);
}
table.appendChild(tr);
container.appendChild(table);

let nbEtudiantInput = document.getElementById("nbEtudiant");
let statsDiv = document.createElement("div");
statsDiv.classList.add("mt-3");
container.appendChild(statsDiv);

nbEtudiantInput.addEventListener("input", () => {
    let nbEtudiants = parseInt(nbEtudiantInput.value);
    while (table.rows.length > 1) table.deleteRow(1);
    
    if (!isNaN(nbEtudiants) && nbEtudiants > 0) {
        for (let i = 0; i < nbEtudiants; i++) {
            let tr = document.createElement("tr");
            let tdId = document.createElement("td");
            tdId.textContent = i + 1;
            tr.appendChild(tdId);
            
            let tdCodeMassar = document.createElement("td");
            let inputCodeMassar = document.createElement("input");
            inputCodeMassar.type = "text";
            inputCodeMassar.classList.add("form-control");
            inputCodeMassar.addEventListener("input", () => validateCodeMassar(inputCodeMassar));
            tdCodeMassar.appendChild(inputCodeMassar);
            tr.appendChild(tdCodeMassar);
            
            let tdNom = document.createElement("td");
            let inputNom = document.createElement("input");
            inputNom.type = "text";
            inputNom.classList.add("form-control");
            tdNom.appendChild(inputNom);
            tr.appendChild(tdNom);
            
            let tdPrenom = document.createElement("td");
            let inputPrenom = document.createElement("input");
            inputPrenom.type = "text";
            inputPrenom.classList.add("form-control");
            tdPrenom.appendChild(inputPrenom);
            tr.appendChild(tdPrenom);
            
            let tdNote = document.createElement("td");
            let inputNote = document.createElement("input");
            inputNote.type = "number";
            inputNote.classList.add("form-control");
            inputNote.addEventListener("input", calculer);
            tdNote.appendChild(inputNote);
            tr.appendChild(tdNote);
            
            let tdAppreciation = document.createElement("td");
            let selectAppreciation = document.createElement("select");
            selectAppreciation.classList.add("form-select");
            ["N.V", "Passable", "A.Bien", "Bien", "T.Bien"].forEach(optionText => {
                let option = document.createElement("option");
                option.value = optionText;
                option.textContent = optionText;
                selectAppreciation.appendChild(option);
            });
            tdAppreciation.appendChild(selectAppreciation);
            tr.appendChild(tdAppreciation);
            
            inputNote.addEventListener("input", () => {
                let note = parseFloat(inputNote.value);
                let appreciation;
        
                switch (true) {
                    case (note < 10):
                        appreciation = "N.V";
                        break;
                    case (note < 13):
                        appreciation = "Passable";
                        break;
                    case (note < 14):
                        appreciation = "A.Bien";
                        break;
                    case (note < 16):
                        appreciation = "Bien";
                        break;
                    default:
                        appreciation = "T.Bien";
                        break;
                }
            
                selectAppreciation.value = appreciation;
            });
            
            let tdAction = document.createElement("td");

            let deleteButton = document.createElement("button");
            deleteButton.classList.add("btn", "btn-danger");
            let icon = document.createElement("i");
            icon.classList.add("fas", "fa-trash-alt");  
            deleteButton.appendChild(icon);
        
            deleteButton.addEventListener("click", () => {
                tr.remove();
                calculer();
            });
          
           
            tdAction.appendChild(deleteButton);
            tr.appendChild(tdAction);
            
            table.appendChild(tr);
        }
    }
    calculer();
});

function validateCodeMassar(input) {
    let regex = /^[A-Z][0-9]{1,8}$/;
    input.style.borderColor = regex.test(input.value) ? "green" : "red";
}

function calculer() {
    let notes = [...document.querySelectorAll("input[type='number']")].map(input => parseFloat(input.value)).filter(n => !isNaN(n));
    let min = notes.length ? Math.min(...notes) : 0;
    let max = notes.length ? Math.max(...notes) : 0;
    let moyenne = notes.length ? (notes.reduce((a, b) => a + b, 0) / notes.length).toFixed(2) : 0;
    statsDiv.innerHTML = `<strong>Note Min:</strong> ${min}/20 | <strong>Note Max:</strong> ${max}/20 | <strong>Moyenne:</strong> ${moyenne}/20`;
}

function genererPDF() {
    let element = document.getElementById("formulaire");

    let options = {
        margin: 1,
        filename: 'Classe.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'cm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(options).from(element).save();
}
document.getElementById("generatePDF").addEventListener("click", genererPDF);
