#Exercice 1 
month = int(input("Enter a month number (1-12): "))

if month in [3, 4, 5]:
    print("It's Spring!")
elif month in [6, 7, 8]:
    print("It's Summer!")
elif month in [9, 10, 11]:
    print("It's Autumn!")
elif month in [12, 1, 2]:
    print("It's Winter!")
else:
    print("Invalid month number. Please enter a number between 1 and 12.")

#Exercice 2
for i in range(1, 21):
    print(i)

for i in range(1, 21):
    if i % 2 == 0:
        print(i)   

#Exercice 3
name = ""

while name.lower() != "manal":
    name = input("Please enter your name: ")
print("Congratulations! You've entered the correct name.")

#Exercice 4
names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']

user_name = input("Enter a name to check if it's in the list: ")
if user_name in names:
    print("The index is:", names.index(user_name))
else:
    print(f"{user_name} is not in the list.")

#Exercice 5
number_1 = int(input("Enter the first number: "))
number_2 = int(input("Enter the second number: "))  
number_3 = int(input("Enter the third number: "))

greatest_number = max(number_1, number_2, number_3)
print(f"The greatest number is: {greatest_number}")

#Exercice 6
import random
wins = 0
losses = 0 

while True:
    usere_number = int(input("Enter a number from 1 to 9 (or 0 to quit): "))
    if usere_number == 0:
        break
    if usere_number < 1 or usere_number > 9:
        print("Invalid input. Please enter a number between 1 and 9.")
        continue    
    random_number = random.randint(1, 9)
    if usere_number == random_number:
        print("Congratulations! You guessed the correct number.")
        wins += 1
    else:
        print(f"Better luck next time.")
        losses += 1

print("\nGame Over!")
print(f"Wins: {wins}, Losses: {losses}")