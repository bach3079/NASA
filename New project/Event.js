const quizData = [{ "question": "How many colors are there in the spectrum when white light is separated?", "options": ["6", "8", "9", "7"], "answer": "7" }, { "question": "A Newton is equal to which of the following?", "options": ["kilogram-meter per second squared", "kilogram per meter-second", "kilogram-meter per second", "meter per second squared"], "answer": "kilogram-meter per second squared" }, { "question": "The work done by a friction force is:", "options": ["always negative", "either positive or negative depending upon the situation", "always zero", "always positive"], "answer": "always negative" }, { "question": "It is more difficult to walk on a sandy road than on a concrete road because ____________.", "options": ["The friction between sand and feet is less than that between concrete and feet", "The friction between sand and feet is more than that between concrete and feet", "The sand is grainy but concrete is smooth", "Sand is soft and concreter is hard"], "answer": "The friction between sand and feet is less than that between concrete and feet" }, { "question": "Which among the following is an accurate depiction for the deceleration when a car is travelling in a north direction and produces a deceleration of 80 m/s2 to stop?", "options": ["Eastwards, 80 m/s2", "Northwards, 80 m/s2", "Southwards, 80 m/s2", "Westwards, 80 m/s2"], "answer": "Southwards, 80 m/s2" }, { "question": "Which among the following activities is not an example of the third law of motion?", "options": ["Walking on a boat", "Cycling", "Skiing", "Running"], "answer": "Skiing" }, { "question": "Which among the following is a vector quantity?", "options": ["Mass", "Temperature", "Displacement", "Density"], "answer": "Displacement" }, { "question": "A body is said to have the power of 1 Watt if it does work at the rate of ______.", "options": ["1 joule", "1 joule in 1 second", "1 radian / second", "1 second"], "answer": "1 joule in 1 second" }, { "question": "Why can lights travel in a vacuum but not sound?", "options": ["Due to the electromagnetic nature of light waves.", "Light waves are dual in nature", "Due to the electromagnetic nature of sound waves.", "Speed of sound is very slow than light"], "answer": "Due to the electromagnetic nature of light waves." }, { "question": "A candela is an SI unit for what?", "options": ["Radioactivity", "Luminous intensity", "Amount of substance", "Inductance"], "answer": "Luminous intensity" }, { "question": "What is the net force of an object when you combine a force of 10 N north with a force of 5 N south?", "options": ["5 N north", "5 Newton North", "5 newton north", "5 Newton north"], "answer": "5 N north" }, { "question": "Which type of electromagnetic radiation has the shortest wavelength?", "options": ["Radio wave", "Gamma ray", "Microwave", "X-ray"], "answer": "Gamma ray" }, { "question": "What is the rate of acceleration of gravity at the Earth's surface?", "options": ["6.7 m/s2", "7.8 m/s2", "9.8 m/s2", "11.2 m/s2"], "answer": "9.8 m/s2" }, { "question": "Ohm's law describes the relationship between what?", "options": ["Frequency, wavelength, and velocity", "Current, voltage, and resistance", "Kinetic energy and momentum", "Current and velocity"], "answer": "Current, voltage, and resistance" }, { "question": "The first law of thermodynamics is also known as ________________.", "options": ["Conservation of energy", "conservation of energy"], "answer": "Conservation of energy" }, { "question": "Who discovered that a moving magnet generates electric current known as electromagnetic induction?", "options": ["Nikola Tesla", "Benjamin Franklin", "Michael Faraday", "Wilhelm Rontgen"], "answer": "Michael Faraday" }, { "question": "Who's third law states that every action has an equal and opposite reaction?", "options": ["Newton's law of motion", "Newton's Law of Motion", "Newton's laws of motion", "Newton's Laws of Motion", "Newton's third law of motion", "Newton's Third Law of Motion"], "answer": "Newton's third law of motion" }, { "question": "Which has the lower temperature: 0 degrees Celsius or 32 degrees Fahrenheit?", "options": ["The same", "equal", "both are equal", "they are just the same"], "answer": "The same" }, { "question": "How many significant figures are in the number 0.00150?", "options": ["3", "2", "6", "5"], "answer": "3" }, { "question": "How can we calculate the velocity of a vehicle?", "options": ["Multiply the taken time by the travelled distance", "Divide the taken time by the travelled distance", "Multiply the travelled distance with the taken time", "Divide the travelled distance by the taken time"], "answer": "Divide the travelled distance by the taken time" }, { "question": "As we increase thickness of a wire, what happens to resistance?", "options": ["Increases", "It exploooodes", "Not affected", "Decreases"], "answer": "Decreases" }, { "question": "Which of the following an insulator?", "options": ["salt water", "silver", "copper", "wood"], "answer": "wood" }, { "question": "How do two negative charges interact when they are brought close together?", "options": ["repel", "ground", "no interaction", "attract"], "answer": "repel" }, { "question": "An object becomes postiively charged when which of the following occurs?", "options": ["gains electrons", "loses protons", "gains neutrons", "loses electrons"], "answer": "loses electrons" }, { "question": "Lightning is _____.", "options": ["a high-voltage electric current", "a buildup of neutrons", "a large discharge of static electricity", "harmless"], "answer": "a large discharge of static electricity" }, { "question": "What does the Greek letter Ω,  (i.e. Omega) represent?", "options": ["ohms", "volts", "watts", "amps"], "answer": "ohms" }, { question: "What is the speed of light?", options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "500,000 km/s"], correctAnswer: "300,000 km/s" }, { question: "What is the unit of electric current?", options: ["Ampere", "Volt", "Ohm", "Watt"], correctAnswer: "Ampere" }, { question: "Which particle has a negative charge?", options: ["Proton", "Neutron", "Electron", "Positron"], correctAnswer: "Electron" }, { question: "What is the formula for work done?", options: ["W = F * d", "W = F / d", "W = m * a", "W = P * V"], correctAnswer: "W = F * d" }, { question: "What instrument is used to measure temperature?", options: ["Thermometer", "Barometer", "Hygrometer", "Calorimeter"], correctAnswer: "Thermometer" }, { question: "What is the force of gravity on Earth?", options: ["9.8 m/s²", "10 m/s²", "9.5 m/s²", "8.5 m/s²"], correctAnswer: "9.8 m/s²" }, { question: "Who discovered the law of gravity?", options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"], correctAnswer: "Isaac Newton" }, { question: "What is the atomic number of Carbon?", options: ["6", "12", "8", "2"], correctAnswer: "6" }, { question: "What is the boiling point of water?", options: ["100°C", "90°C", "110°C", "120°C"], correctAnswer: "100°C" }, { question: "What is the primary gas found in Earth's atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], correctAnswer: "Nitrogen" }, { question: "What is the formula for calculating force?", options: ["F = m * a", "F = m / a", "F = a / m", "F = m + a"], correctAnswer: "F = m * a" }, { question: "What does E = mc² represent?", options: ["Energy equals mass times the speed of light squared", "Energy equals mass times acceleration squared", "Energy equals momentum times speed", "Energy equals mass times velocity squared"], correctAnswer: "Energy equals mass times the speed of light squared" }, { question: "What is the unit of force?", options: ["Newton", "Joule", "Watt", "Ampere"], correctAnswer: "Newton" }, { question: "Which planet is known as the Red Planet?", options: ["Mars", "Venus", "Earth", "Jupiter"], correctAnswer: "Mars" }, { question: "What is the speed of sound in air?", options: ["343 m/s", "300 m/s", "500 m/s", "400 m/s"], correctAnswer: "343 m/s" }, { question: "What is the unit of energy?", options: ["Joule", "Newton", "Watt", "Ampere"], correctAnswer: "Joule" }, { question: "What is the primary source of energy for the Sun?", options: ["Nuclear Fusion", "Solar Energy", "Chemical Reactions", "Electrical Energy"], correctAnswer: "Nuclear Fusion" }, { question: "What is the name of the first man-made satellite?", options: ["Sputnik 1", "Apollo 11", "Explorer 1", "Hubble Space Telescope"], correctAnswer: "Sputnik 1" }, { question: "What is the mass of the Earth?", options: ["5.97 × 10²⁴ kg", "6.5 × 10²³ kg", "4.2 × 10²³ kg", "7.8 × 10²⁶ kg"], correctAnswer: "5.97 × 10²⁴ kg" }, { question: "What is the first law of thermodynamics?", options: ["Energy cannot be created or destroyed", "Energy always increases", "Energy is lost in all transformations", "Energy is always conserved"], correctAnswer: "Energy cannot be created or destroyed" }, { question: "What is the principle of buoyancy?", options: ["An object submerged in a fluid experiences an upward force equal to the weight of the fluid displaced", "An object submerged in a fluid experiences a downward force equal to its own weight", "An object floats in the air due to its mass", "An object does not displace any fluid"], correctAnswer: "An object submerged in a fluid experiences an upward force equal to the weight of the fluid displaced" }, { question: "What is the unit of temperature?", options: ["Celsius", "Kelvin", "Fahrenheit", "All of the above"], correctAnswer: "All of the above" }, { question: "What is the most abundant element in the universe?", options: ["Hydrogen", "Oxygen", "Carbon", "Helium"], correctAnswer: "Hydrogen" }, { question: "What does the law of conservation of mass state?", options: ["Mass cannot be created or destroyed", "Mass is always conserved", "Mass is only created", "None of the above"], correctAnswer: "Mass cannot be created or destroyed" },];

    let selectedQuestions = [];
    let currentIndex = 0, score = 0, timer = 0;
    let interval;
    let player = { name: "", avatar: "", score: 0, time: 0 };

    function startGame() {
      const name = document.getElementById('username').value || "Giấu tên";
      const avatar = document.getElementById('avatar').value || "https://i.imgur.com/9XnY9LW.png";

      player.name = name;
      player.avatar = avatar;

      selectedQuestions = quizData.sort(() => 0.5 - Math.random()).slice(0, 20);
      currentIndex = score = timer = 0;

      document.getElementById("intro").classList.add("hide");
      document.getElementById("quiz").classList.remove("hide");

      interval = setInterval(() => {
        timer++;
        document.getElementById("timer").textContent = timer;
      }, 1000);

      loadQuestion();
    }

    function loadQuestion() {
      const q = selectedQuestions[currentIndex];
      document.getElementById("questionText").textContent = q.question;
      document.getElementById("currentQuestion").textContent = currentIndex + 1;

      const opts = q.options.map(opt =>
        `<button class="btn btn-outline-primary m-2" onclick="checkAnswer(this, '${opt.replace(/'/g, "\\'")}')">${opt}</button>`
      ).join('');

      document.getElementById("options").innerHTML = opts;
    }

    function checkAnswer(btn, selected) {
      const correct = selectedQuestions[currentIndex].answer;
      const correctSound = document.getElementById("correctSound");
      const wrongSound = document.getElementById("wrongSound");

      if (selected === correct) {
        score++;
        correctSound.play();
        showToast("🎉 Chính xác!", "success");
      } else {
        wrongSound.play();
        showToast("❌ Sai rồi!", "danger");
      }

      setTimeout(() => {
        currentIndex++;
        if (currentIndex < selectedQuestions.length) {
          loadQuestion();
        } else {
          endGame();
        }
      }, 1000);
    }

    function endGame() {
      clearInterval(interval);
      player.score = score;
      player.time = timer;

      saveToLeaderboard(player);

      document.getElementById("quiz").classList.add("hide");
      document.getElementById("result").classList.remove("hide");
      document.getElementById("finalScore").textContent = score;
      document.getElementById("finalTime").textContent = timer;

      updateLeaderboardTable("leaderboardTable2");
    }

    function saveToLeaderboard(p) {
      let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
      leaderboard.push(p);
      leaderboard.sort((a, b) => b.score - a.score || a.time - b.time);
      leaderboard = leaderboard.slice(0, 10);
      localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
    }

    function updateLeaderboardTable(tableId) {
      const data = JSON.parse(localStorage.getItem("leaderboard")) || [];
      const table = document.getElementById(tableId);
      table.innerHTML = data.map(p => `
    <tr>
      <td><img src="${p.avatar}" /></td>
      <td>${p.name}</td>
      <td>${p.score}</td>
      <td>${p.time}</td>
    </tr>
  `).join('');
    }

    function showToast(msg, type) {
      const toast = document.createElement("div");
      toast.className = `alert alert-${type} position-fixed top-0 end-0 m-3`;
      toast.style.zIndex = 9999;
      toast.innerHTML = msg;
      document.body.appendChild(toast);
      setTimeout(() => toast.remove(), 2000);
    }

    window.onload = () => updateLeaderboardTable("leaderboardTable");
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