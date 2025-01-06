const answers = {
    1: 'A',
    2: 'A',
    3: 'B'
};

let correctCount = 0; // Doğru cevap sayısı
const questionCount = Object.keys(answers).length; // Toplam soru sayısı

function getExplanation(questionNumber) {
    switch (questionNumber) {
        case 1:
            return "De juiste drie factoren voor verbranding zijn brandbare stof, zuurstof en ontbrandingstemperatuur.";
        case 2:
            return "De primaire verantwoordelijkheid van beveiligers is het direct evacueren van het personeel om hun veiligheid te waarborgen.";
        case 3:
            return "Nauwe communicatielijnen zijn essentieel voor een adequaat antwoord.";
        default:
            return "Geen verklaring beschikbaar.";
    }
}

// Cevabı kontrol et
function checkAnswer(questionNumber, selectedAnswer, clickedButton) {
    const resultDiv = document.getElementById(`result${questionNumber}`);

    // Butonları devre dışı bırak
    const buttons = clickedButton.parentElement.querySelectorAll('.button');
    buttons.forEach(button => {
        button.disabled = true; // Butonları devre dışı bırak
        button.classList.remove('selected'); // Seçim kaldır
    });

    // Seçilen butona 'selected' sınıfını ekle
    clickedButton.classList.add('selected');

    // Cevabı kontrol et
    const correctAnswer = answers[questionNumber];

    if (selectedAnswer === correctAnswer) {
        resultDiv.innerHTML = `<div class="true-result">Correct! ${getExplanation(questionNumber)}</div>`;
        correctCount++;
    } else {
        resultDiv.innerHTML = `<div class="false-result">Fout! Het juiste antwoord is ${correctAnswer}. <br> Verklaring: ${getExplanation(questionNumber)}</div>`;
    }

    // Skoru göster
    displayScore();
}

// Skoru hesapla ve göster
function displayScore() {
    const scoreDiv = document.getElementById('score');
    scoreDiv.innerHTML = `Je score is ${correctCount} van de ${questionCount} vragen.`;
}

// Koyu mod açma/kapama butonu
document.getElementById('toggleButton').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
