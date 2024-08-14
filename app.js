// Array of compliments
const compliments = [
    "You're an awesome person!",
    "You have a great sense of humor!",
    "Your creativity is amazing!",
    "You're a fantastic problem solver!",
    "You make the world a better place!",
    "You have a heart of gold!",
    "Your positivity is infectious!",
    "You're a true friend!",
    "You are incredibly talented!",
    "You light up the room!",
    "You are my sunshine",
    "You make me happy!",
    "You are the G.O.A.T",

];

// Function to get a random compliment
function getRandomCompliment() {
    const randomIndex = Math.floor(Math.random() * compliments.length);
    return compliments[randomIndex];
}

// Event listener for the button
document.getElementById('compliment-button').addEventListener('click', function() {
    const compliment = getRandomCompliment();
    document.getElementById('compliment').textContent = compliment;
});
