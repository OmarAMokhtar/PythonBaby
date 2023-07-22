function validateOutput(t, x) {
    var expected;
    if (t < 3.0) {
        expected = t * 20;
    } else {
        expected = (3.0 * 20) + (t - 3.0) * 50;
    }
    return Math.abs(x - expected) < 1.0;
}
