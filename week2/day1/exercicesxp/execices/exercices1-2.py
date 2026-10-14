#exercice1
class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())


class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'


class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'


class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'


class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'


all_cats = [Bengal("Simba", 2), Chartreux("Oliver", 3), Siamese("Luna", 1)]
sara_pets = Pets(all_cats)
sara_pets.walk()


#exercice2
class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barking"

    def run_speed(self):
        return (self.weight / self.age) * 10

    def fight(self, other_dog):
        self_score = self.run_speed() * self.weight
        other_score = other_dog.run_speed() * other_dog.weight
        if self_score > other_score:
            return f"{self.name} won the fight against {other_dog.name}!"
        elif other_score > self_score:
            return f"{other_dog.name} won the fight against {self.name}!"
        else:
            return "It's a tie!"


dog1 = Dog("Max", 3, 20)
dog2 = Dog("Rocky", 5, 30)
dog3 = Dog("Bella", 2, 10)

print(dog1.bark())
print(f"{dog1.name}'s speed: {dog1.run_speed()}")
print(dog1.fight(dog2))


