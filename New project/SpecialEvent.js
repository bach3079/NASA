const questions = [
    {
        question: "What is the unit of force?",
        options: ["Joule", "Newton", "Watt", "Pascal"],
        answer: "Newton"
    },
    {
        question: "Which law states that for every action there is an equal and opposite reaction?",
        options: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Law of Inertia"],
        answer: "Newton's Third Law"
    },
    {
        question: "What is the speed of light in vacuum?",
        options: ["3x10^6 m/s", "3x10^8 m/s", "3x10^5 m/s", "3x10^3 m/s"],
        answer: "3x10^8 m/s"
    },
    {
        question: "Which particle has no charge?",
        options: ["Electron", "Proton", "Neutron", "Positron"],
        answer: "Neutron"
    },
    {
        question: "Which of these is a scalar quantity?",
        options: ["Velocity", "Force", "Acceleration", "Temperature"],
        answer: "Temperature"
    },
    {
        question: "Ohm's law relates voltage with?",
        options: ["Resistance", "Current", "Power", "Both Resistance and Current"],
        answer: "Both Resistance and Current"
    }
];

function isSaturday() {
    const today = new Date();
    return today.getDay() === 6;
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function createBoxes() {
    const container = document.getElementById('box-container');
    for (let i = 0; i < 6; i++) {
        const box = document.createElement('div');
        box.className = 'col-4 col-md-4 m-3 box';
        box.innerText = `Box ${i + 1}`;
        box.dataset.index = i;
        box.onclick = () => openBox(i, box);
        container.appendChild(box);
    }
}

let currentBox = null;

function openBox(index, boxElement) {
    currentBox = boxElement;
    const q = questions[index];
    const qBox = document.getElementById('question-box');
    const qText = document.getElementById('question-text');
    const choicesDiv = document.getElementById('choices');

    qText.innerText = q.question;
    choicesDiv.innerHTML = '';

    q.options.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'btn btn-outline-dark option-btn';
        btn.innerText = option;
        btn.onclick = () => checkAnswer(option, q.answer);
        choicesDiv.appendChild(btn);
    });

    qBox.style.display = 'block';
}

function checkAnswer(selected, correct) {
    if (selected === correct) {
        document.getElementById('correct-sound').play();
        alert('Correct!');
    } else {
        document.getElementById('wrong-sound').play();
        alert('Wrong answer!');
    }
    currentBox.style.visibility = 'hidden';
    document.getElementById('question-box').style.display = 'none';
}

window.onload = () => {
    if (!isSaturday()) {
        document.getElementById('warning').innerText = "This game is only available on Saturdays! Come back later.";
        document.getElementById('box-container').style.display = 'none';
    } else {
        shuffle(questions);
        createBoxes();
    }
}
document.addEventListener("DOMContentLoaded", function () {
    let images = document.querySelectorAll(".redtangle img");
    let currentIndex = 0;
    if (images.length > 0) {
        images[currentIndex].classList.add("active");
        setInterval(() => {
            images[currentIndex].classList.remove("active");
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add("active");
        }, 5000);
    }
});