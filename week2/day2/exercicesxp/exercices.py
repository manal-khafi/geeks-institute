# exercice 1
class PrintList():

    def __init__(self, my_list):
        self.my_list = my_list

    def __repr__(self):
        return str(self.my_list)


print_list_instance = PrintList(["a", "b", "c"])
print(print_list_instance.__repr__())

# exercice 2
def sum_list_numbers(my_list):
    total = 0
    for item in my_list:
        try:
            total += item
        except TypeError:
            pass
    return total

my_list = [2, 3, 1, 2, "four", 42, 1, 5, 3, "imanumber"]
print(sum_list_numbers(my_list))

# exercice 4
import random

class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def bark(self):
        return f"{self.name} is barking"

class PetDog(Dog):
    def __init__(self, name, age):
        super().__init__(name, age)
        self.trained = False

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *args):
        dog_names = ", ".join(args)
        print(f"{dog_names} all play together")

    def do_a_trick(self):
        if self.trained:
            tricks = [
                f"{self.name} does a barrel roll",
                f"{self.name} stands on his back legs",
                f"{self.name} shakes your hand",
                f"{self.name} plays dead"
            ]
            print(random.choice(tricks))