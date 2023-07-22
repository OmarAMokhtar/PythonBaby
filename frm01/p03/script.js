function validateOutput(t, x) {
    return Math.abs(x - (t * 10 + t * t * 20)) < 1.0;
}
