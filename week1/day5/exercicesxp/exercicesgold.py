#exercice1
import math


class Circle:

  def __init__(self, radius=1.0):
    self.radius = radius

  def perimeter(self):
    return 2 * math.pi * self.radius

  def area(self):
    return math.pi * (self.radius**2)

  def definition(self):
    print(
        "A circle is a shape consisting of all points in a plane that are at a"
        " given distance from a given point called the centre."
    )


#exercice2
import random


class MyList:

  def __init__(self, letters):
    self.letters = letters

  def get_reversed(self):
    return self.letters[::-1]

  def get_sorted(self):
    return sorted(self.letters)

  def generate_random_numbers(self):
    return [random.randint(1, 100) for _ in range(len(self.letters))]


#exercice3
class MenuManager:

  def __init__(self):
    self.menu = [
        {
            "name": "Soup",
            "price": 10,
            "spice level": "B",
            "gluten index": False,
        },
        {
            "name": "Hamburger",
            "price": 15,
            "spice level": "A",
            "gluten index": True,
        },
        {"name": "Salad", "price": 18, "spice level": "A", "gluten index": False},
        {
            "name": "French Fries",
            "price": 5,
            "spice level": "C",
            "gluten index": False,
        },
        {
            "name": "Beef bourguignon",
            "price": 25,
            "spice level": "B",
            "gluten index": True,
        },
    ]

  def add_item(self, name, price, spice, gluten):
    new_dish = {
        "name": name,
        "price": price,
        "spice level": spice,
        "gluten index": gluten,
    }
    self.menu.append(new_dish)

  def update_item(self, name, price, spice, gluten):
    found = False
    for dish in self.menu:
      if dish["name"].lower() == name.lower():
        dish["price"] = price
        dish["spice level"] = spice
        dish["gluten index"] = gluten
        found = True
        print(f"Dish '{name}' updated successfully.")
        break
    if not found:
      print(
          f"Sorry, the dish '{name}' is not in the menu and cannot be updated."
      )

  def remove_item(self, name):
    found = False
    for dish in self.menu:
      if dish["name"].lower() == name.lower():
        self.menu.remove(dish)
        found = True
        print(f"Dish '{name}' removed. Updated menu:")
        print(self.menu)
        break
    if not found:
      print(
          f"Sorry, the dish '{name}' is not in the menu and cannot be removed."
      )