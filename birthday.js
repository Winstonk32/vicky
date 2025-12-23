function startCelebration() {
    // 1. Hide the overlay
    document.getElementById('overlay').style.display = 'none';

    // 2. Play the music
    const song = document.getElementById('birthday-song');
    song.play();

    // 3. Trigger Confetti Cannon
    var end = Date.now() + (2 * 1000); // 2 seconds of confetti

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#b08d57', '#ffffff', '#ff69b4'] // Rose gold, white, pink
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#b08d57', '#ffffff', '#ff69b4']
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}