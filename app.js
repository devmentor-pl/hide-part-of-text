document.addEventListener('DOMContentLoaded', function () {
    // wyszukuję element z tekstem
    const textEl = document.querySelector('.examples__text--characters');

    // ograniczam liczbę znaków do 400 i dodaję wielokropek
    const cutText = textEl.innerText.substr(0, 400) + '\u2026';

    // wprowadzam skrócony tekst do elementu
    textEl.innerText = cutText;
});
