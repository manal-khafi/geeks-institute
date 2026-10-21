import math

class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius is not None:
            self.radius = radius
        elif diameter is not None:
            self.radius = diameter / 2
        else:
            self.radius = 0

    @property
    def diameter(self):
        return self.radius * 2

    @diameter.setter
    def diameter(self, value):
        self.radius = value / 2

    def area(self):
        return math.pi * (self.radius ** 2)

    def __str__(self):
        return f"Circle(radius={self.radius}, diameter={self.diameter})"

    def __repr__(self):
        return f"Circle(radius={self.radius})"

    def __add__(self, other):
        if isinstance(other, Circle):
            return Circle(radius=self.radius + other.radius)
        raise TypeError("Can only add two Circle objects")

    def __eq__(self, other):
        if isinstance(other, Circle):
            return self.radius == other.radius
        return False

    def __lt__(self, other):
        if isinstance(other, Circle):
            return self.radius < other.radius
        return NotImplemented

    def __gt__(self, other):
        if isinstance(other, Circle):
            return self.radius > other.radius
        return NotImplemented

# --- Execution Code ---
if __name__ == "__main__":
    c1 = Circle(radius=5)
    c2 = Circle(diameter=12)

    print("Circle 1:", c1)
    print("Circle 2:", c2)
    print("Area of Circle 1:", c1.area())
    
    # addition
    c3 = c1 + c2
    print("Combined Circle:", c3)

    # sorting
    circles = [Circle(radius=10), Circle(radius=2), Circle(radius=5)]
    print("Sorted circles:", sorted(circles))