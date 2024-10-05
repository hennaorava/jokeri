let rowCount = 0; // Rivien laskuri

// Funktio, joka generoi 7 satunnaista lukua väliltä 0–9
function generateSevenRandomNumbers() {
    let numbers = [];
    for (let i = 0; i < 7; i++) {
        numbers.push(Math.floor(Math.random() * 10)); // Satunnaiset luvut 0–9
    }
    return numbers;
}

// Funktio, joka lisää uuden rivin taulukkoon. En tiedä miten oikeassa lotossa mutta laitoin tähän että max 15 riviä voi luoda
function addRow() {
    if (rowCount >= 15) { 
        alert('Enintään 15 riviä voi luoda!'); // Estää lisärivit ja näyttää ilmoituksen
        return; // Lopeta toiminto, jos rivejä on jo 15
    }

    const numbers = generateSevenRandomNumbers(); // Generoi 7 satunnaista lukua
    const table = document.querySelector('table'); // Hakee taulukko-elementin

    // Luo uuden rivin (tr)
    const newRow = document.createElement('tr');

    // Lisää jokainen satunnainen luku taulukon soluun (td)
    numbers.forEach(num => {
        const cell = document.createElement('td');
        cell.textContent = num; // Aseta luku soluun
        newRow.appendChild(cell); // Lisää solu riviin
    });

    table.appendChild(newRow); // Lisää rivi taulukkoon

    // Päivitä rivien laskuri
    rowCount++;
    updateRowCount(); // Päivitä kappale, joka näyttää valmiiden rivien määrän
}

// Funktio, joka päivittää rivien määrän näyttöön
function updateRowCount() {
    const countDisplay = document.querySelector('p'); // Hae kappale, jossa on rivien määrä
    countDisplay.textContent = `Valmiita rivejä: ${rowCount}`; // Päivitä tekstisisältö
}

// Lisää tapahtumakuuntelijan "Uusi rivi" -painikkeelle
document.getElementById('uusirivi').addEventListener('click', addRow);