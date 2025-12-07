const quizData = [
    {
        question: "Siapa bapak pandu dunia",
        options: ["Tarno", "Musahadi", "Boden Powell", "Jaenudin"],
        answer: "Boden Powell"
    },
    {
        question: "Berapa Jumlah Fakultas di Universitas Islam Negeri Walisongo Semarang?",
        options: ["5", "3 ribu rupiah", "9", "Karepe nt wis"],
        answer: "9"
    },
    {
        question: "Berapa jumlah provinsi di Indonesia?",
        options: ["30", "28", "40", "34"],
        answer: "34"
     },
    {
        question: "Apa fungsi IF pada pemrograman?",
        options: ["Mengambil keputusan", "Menggandakan", "Menampilkan output", "Menghapus data"],
        answer: "Mengambil keputusan"
     },
    {
        question: "Berapa kali Nabi Ibrahim bertemu Malaikat Jibril",
        options: ["2 kali", "3 kali", "7 kali", "5 kali"],
        answer: "3 kali"
     },
    {
        question: "Pada database, apa makna ACID dalam transaksi?",
        options: ["Accurate, Complete, Instant, Double", "Atomicity, Consistency, Isolation, Durability", "Access, Control, Integrity, Data", "Available, Condurance, Isolation, Distribution"],
        answer: "Atomicity, Consistency, Isolation, Durability"
    },
    {
        question: "Pada algoritma merge sort, kompleksitas waktu terburuknya adalah?",
        options: ["O(n)", "O(log n)", "O(n log n)", "O(n²)"],
        answer: "O(n log n)"
     },
    {
        question: "Apa yang dimaksud dengan variabel dalam pemrograman?",
        options: ["Tempat menyimpan file", "Tempat menyimpan nilai atau data", "Fungsi untuk mencetak text", "Bahasa pemrograman"],
        answer: "Tempat menyimpan nilai atau data"
     },
    {
        question: "<p> pada html digunakan untuk?",
        options: ["Mendefinisikan paragraf text", "Membuat hyperlink (tautan)", "Mendefinisikan item", "Membuat daftar berurutan"],
        answer: "Mendefinisikan paragraf text"
     },
    {
        question: "Tipe data manakah yang digunakan untuk menyimpan angka pecahan?",
        options: ["int", "float", "char", "bool"],
        answer: "float"
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');
const resultEl = document.getElementById('result');
const scoreEl = document.getElementById('score');

function loadQuestion() {
    const currentQuiz = quizData[currentQuestion];
    questionEl.innerText = currentQuiz.question;
    optionsEl.innerHTML = '';
    currentQuiz.options.forEach(option => {
        const li = document.createElement('li');
        li.innerHTML = `<button class="option-btn">${option}</button>`;
        optionsEl.appendChild(li);
    });

    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', () => selectAnswer(btn.innerText));
    });
}

function selectAnswer(selected) {
    const correct = quizData[currentQuestion].answer;
    if (selected === correct) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('quiz-container').classList.add('hide');
    resultEl.classList.remove('hide');
    scoreEl.innerText = `Skor Anda: ${score} / ${quizData.length}`;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    resultEl.classList.add('hide');
    document.getElementById('quiz-container').classList.remove('hide');
    loadQuestion();
}

loadQuestion();
