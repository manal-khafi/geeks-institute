#exercice1
class Cat:

  def __init__(self, cat_name, cat_age):
    self.name = cat_name
    self.age = cat_age


cat1 = Cat("Whiskers", 3)
cat2 = Cat("Mittens", 7)
cat3 = Cat("Shadow", 5)


def find_oldest_cat(cats):
  oldest = cats[0]
  for cat in cats:
    if cat.age > oldest.age:
      oldest = cat
  return oldest


oldest_cat = find_oldest_cat([cat1, cat2, cat3])
print(
    f"The oldest cat is {oldest_cat.name}, and is {oldest_cat.age} years old."
)


#exercice2
class Dog:

  def __init__(self, name, height):
    self.name = name
    self.height = height

  def bark(self):
    print(f"{self.name} goes woof!")

  def jump(self):
    x = self.height * 2
    print(f"{self.name} jumps {x} cm high!")


davids_dog = Dog("Rex", 50)
print(f"David's dog name: {davids_dog.name}, Height: {davids_dog.height}cm")
davids_dog.bark()
davids_dog.jump()

sarahs_dog = Dog("Teacup", 20)
print(f"Sarah's dog name: {sarahs_dog.name}, Height: {sarahs_dog.height}cm")
sarahs_dog.bark()
sarahs_dog.jump()

if davids_dog.height > sarahs_dog.height:
  print(f"The bigger dog is {davids_dog.name}.")
elif sarahs_dog.height > davids_dog.height:
  print(f"The bigger dog is {sarahs_dog.name}.")
else:
  print("Both dogs are the same size.")


#exercice3
class Song:

  def __init__(self, lyrics):
    self.lyrics = lyrics

  def sing_me_a_song(self):
    for line in self.lyrics:
      print(line)


stairway = Song([
    "There’s a lady who's sure",
    "all that glitters is gold",
    "and she’s buying a stairway to heaven",
])
stairway.sing_me_a_song()


#exercice4
class Zoo:

  def __init__(self, zoo_name):
    self.name = zoo_name
    self.animals = []

  def add_animal(self, new_animal):
    if new_animal not in self.animals:
      self.animals.append(new_animal)

  def get_animals(self):
    print("Animals in the zoo:", self.animals)

  def sell_animal(self, animal_sold):
    if animal_sold in self.animals:
      self.animals.remove(animal_sold)

  def sort_animals(self):
    sorted_animals = sorted(self.animals)
    grouped = {}
    for animal in sorted_animals:
      first_letter = animal[0].upper()
      if first_letter not in grouped:
        grouped[first_letter] = []
      grouped[first_letter].append(animal)

    letter_groups = {}
    for letter, group in sorted(grouped.items()):
      if len(group) == 1:
        letter_groups[letter] = group[0]
      else:
        letter_groups[letter] = group
    return letter_groups

  def get_groups(self):
    groups = self.sort_animals()
    for letter, group in groups.items():
      print(f"{letter}: {group}")


new_york_zoo = Zoo("New York Zoo")
new_york_zoo.add_animal("Giraffe")
new_york_zoo.add_animal("Baboon")
new_york_zoo.add_animal("Bear")
new_york_zoo.add_animal("Ape")
new_york_zoo.add_animal("Cat")
new_york_zoo.add_animal("Cougar")
new_york_zoo.add_animal("Eel")
new_york_zoo.add_animal("Emu")

new_york_zoo.get_animals()
new_york_zoo.sell_animal("Baboon")
new_york_zoo.get_animals()
new_york_zoo.get_groups()