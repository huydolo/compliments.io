const compliments = [
            "You have a great sense of humor!",
            "You're an awesome friend.",
            "You light up the room.",
            "You're a smart cookie!",
            "You are amazing just the way you are.",
            "You bring out the best in others.",
            "You're a great listener.",
            "You have impeccable manners.",
            "You're so thoughtful.",
            "You're making a difference."
        ];

        document.getElementById('complimentButton').addEventListener('click', function() {
            const randomIndex = Math.floor(Math.random() * compliments.length);
            document.getElementById('complimentText').innerText = compliments[randomIndex];
        });
