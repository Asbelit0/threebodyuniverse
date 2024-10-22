gsap.to("#sun1", {
    duration: 10,
    repeat: -1,
    yoyo: true,
    motionPath: {
        path: [
            {x: 100, y: -100},
            {x: -100, y: 100},
            {x: 0, y: -200},
            {x: 100, y: 0},
        ],
        autoRotate: true
    }
});

gsap.to("#sun2", {
    duration: 12,
    repeat: -1,
    yoyo: true,
    motionPath: {
        path: [
            {x: -100, y: -100},
            {x: 100, y: 100},
            {x: -200, y: 0},
            {x: 0, y: 100},
        ],
        autoRotate: true
    }
});

gsap.to("#sun3", {
    duration: 15,
    repeat: -1,
    yoyo: true,
    motionPath: {
        path: [
            {x: 100, y: 100},
            {x: -100, y: -100},
            {x: 200, y: 0},
            {x: 0, y: -100},
        ],
        autoRotate: true
    }
});
