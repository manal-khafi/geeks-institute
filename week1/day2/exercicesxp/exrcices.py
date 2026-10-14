#Exercice 1
print(("Hello, World!\n" * 4).strip())

#Exercice 2
result = (99**3) * 8
print(result)

#Exercice 3
my_name = "Manal"
user_name = input("Enter your name: ")

if user_name.lower() == my_name.lower():
    print(f"Wait, {user_name}! Did you just steal my name? You're a thief!")
else:
    print(f"Cool name, {user_name}! But mine is definitely better.")

#Exercice 4
height = float(input("Enter your height in centimeters: "))

if height > 145:
    print("You are tall enough to ride the roller coaster!")
else:
    print("Sorry, you need to be taller to ride the roller coaster.")

#Exercice 5
my_fav_numbers = {16, 6, 15, 8, 25}

my_fav_numbers.add(5)
my_fav_numbers.add(10)

my_fav_numbers.pop() 

friend_fav_numbers = {3, 7, 21, 18, 55}

our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print(our_fav_numbers)

#Exercice 6
#Tuples are immutable, meaning their elements cannot be changed after creation.

#Exercice 7
basket = ["Banana", "Apples", "Oranges", "Blueberries"];

basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0, "Apples")

apples_count = basket.count("Apples")
basket.clear()
print(basket)

#Exercice 8
sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")

finished_sandwiches = []

while sandwich_orders:
    current_sandwich = sandwich_orders.pop(0)
    finished_sandwiches.append(current_sandwich)
    print(f"I made your {current_sandwich.lower()}.")