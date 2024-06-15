function calculateRectangleArea (w, h) {
    if (isFinite(w) && isFinite(h)) {
        return w * h;
    }
    throw Error('calculateRectangleArea only accept parameters with number type');
}
