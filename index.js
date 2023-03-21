class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2;
    }

    get circumference() {
        return this.diameter * Math.PI;
    }

    get area() {
        return this.radius ** 2 * Math.PI;
    }

    set diameter(diameter) {
        this.radius = diameter / 2;
    }

    set circumference(circumference) {
        this.diameter = circumference / Math.PI;
    }

    set area(area) {
        this.radius = Math.sqrt(area / Math.PI);
    }
}