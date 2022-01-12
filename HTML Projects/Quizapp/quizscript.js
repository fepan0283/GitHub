let question1 = ["Wer war Otto von Bismarck?", "Ein General im ersten Weltkrieg ", "Der Reichskanzler unter Kaiser Wilhelm I. ", "Der Erfinder des Otto-Motors ", "Ein wichtiger Berater Adolf Hitlers", "Der Reichskanzler unter Kaiser Wilhelm I. "];
let question2 = ["Wofür steht der Begriff 'Deutscher Herbst'?", "Die letzten Wochen vor dem Fall der Berliner Mauer 1989", "Die Auswirkungen der Ölkrise von 1973 in der Bundesrepublik", "Die Endphase des Nationalsozialismus", "Das Vorgehen des Staates gegen den Terrorismus in der Bundesrepublik Ende der 1970er Jahre ", "Das Vorgehen des Staates gegen den Terrorismus in der Bundesrepublik Ende der 1970er Jahre "];
let question3 = ["asdf", "1900", "1907", "1914", "1933", "1933"];
let question4 = ["Was geschah am 8. Mai 1945?", "Der Kriegseintritt der USA", "Die deutsche Kriegserklärung an Russland 42", "Die bedingungslose Kapitulation Deutschlands", "Die Bombardierung Dresdens ", "Die bedingungslose Kapitulation Deutschlands"];
let question5 = ["Die DDR wird oft als 'Satellitenstaat' bezeichnet. Was ist ein 'Satellitenstaat'?", "Ein Staat, der auf moderne Technologien setzt.", "Ein Staat, der seine Bevölkerung mit Hilfe von Satelliten überwacht. ", "Ein Staat, der andere Staaten überwacht.", "Ein Staat, der von einem anderen Staat gesteuert wird. ", "Ein Staat, der von einem anderen Staat gesteuert wird. "]
let question6 = ["Die Wirtschaftsordnung im wiedervereinigten Deutschland ist ...", "eine Staatswirtschaft. ", "eine radikale Marktwirtschaft. ", "ein Raubtierkapitalismus. ", "eine soziale Marktwirtschaft. ", "eine soziale Marktwirtschaft. "]
let question7 = ["Wer war Karl der Große?", "Der erste nachrömische Kaiser Westeuropas ", "Der erste deutsche Papst", "Der letzte russische Zar", "Der erfolgreichste Feldherr im 30-jährigen Krieg", "Der erste nachrömische Kaiser Westeuropas "]
let question8 = ["Welche Koalition unter Kanzlerin Angela Merkel dauerte von 2005 bis 2009?", "Die Ampel-Koalition", "Die große Koalition", "Die Jamaika-Koalition", "Die schwarz-gelbe Koalition", "Die große Koalition"]
let question9 = ["Was waren die Schlagworte der 'Französischen Revolution'?", "Einheit, Gleichheit, Bürgerlichkeit ", "Freiheit, Gleichheit, Brüderlichkeit ", "Einigkeit, Mehrheit, Gerechtigkeit", "das Dritte Reich.", "Freiheit, Gleichheit, Brüderlichkeit "]
let question10 = ["Was geschah am 17. Juni 1953?", "Die internationale Anerkennung der DDR als Staat ", "Ein Volksaufstand in der DDR", "Der deutsch-sowjetische Vertragsschluss", "Eine Währungsreform in der DDR", "Ein Volksaufstand in der DDR"];
let questionlist = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];
let questioncount = 0;

function loadquestion() {
    document.getElementById('questiontitle').innerHTML = `${questionlist[questioncount][0]}`;
    document.getElementById('answer-container').innerHTML = '';
    for (i = 1; i < 5; i++) {
        document.getElementById('answer-container').innerHTML += `<p onclick="checkanswer(this.id)" id="answer${i}" class="answer">${questionlist[questioncount][i]}</p>`
    }

}
let gameTracking = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


function checkanswer(id) {
    let answer = document.getElementById(id).innerHTML;
    // alert(questioncount)
    // alert(gameTracking)
    if (answer === questionlist[questioncount][5]) {
        document.getElementById(id).classList.add("answer-correct", "answer-correct:hover");
        gameTracking[questioncount] = 1;
    } else {
        document.getElementById(id).classList.add("answer-false", "answer-false:hover");
        gameTracking[questioncount] = 2;
    }
    for (i = 1; i < 5; i++) {
        document.getElementById(`answer${i}`).removeAttribute("onclick");
    }
    questioncount += 1;
    updateGameTracking()

}

function updateGameTracking() {
    // alert(questioncount)
    // alert(gameTracking)
    for (i = 0; i < 11; i++) {
        if (gameTracking[questioncount - 1] === 1) {
            document.getElementById(`point${questioncount}`).classList.add('tracking-correct');
        } if (gameTracking[questioncount - 1] === 2) {
            document.getElementById(`point${questioncount}`).classList.add('tracking-false');
        }
    }
    endgame()
}

function endgame() {
    if (gameTracking[9] === 1 || gameTracking[9] === 2) {
        // alert("asdf")
        document.getElementById('finish-button').classList.remove("no-display");
        document.getElementById('next-button').classList.add("no-display");
    }
}

function finishButtonClick() {
    document.getElementById('finish-container').classList.remove('no-display');
    let finalScore = gameTracking.filter(x => x == 1).length;
    document.getElementById('finish-content').innerHTML += `<p>Glückwunsch<br>Du hast ${finalScore} / 10 Punkten erreicht!</p>`;
    document.getElementById('finish-button').classList.add('no-display');
}
