#exercice1 & 2
birthdays = {
    "Person 1": "1995/05/12",
    "Person 2": "1988/11/23",
    "Person 3": "2000/01/15",
    "Person 4": "1992/07/04",
    "Person 5": "1997/09/30",
}

print("Welcome! You can look up the birthdays of the people in the list.")
print("Here are the people you can look up:")
for name in birthdays.keys():
  print(f"- {name}")

user_name = input("\nEnter a person's name to find their birthday: ").strip()

if user_name in birthdays:
  print(f"The birthday of {user_name} is {birthdays[user_name]}.")
else:
  print(f"Sorry, we don’t have the birthday information for {user_name}.")

#exercice3
def calculate_sum(x):
  str_x = str(x)
  term1 = int(str_x)
  term2 = int(str_x * 2)
  term3 = int(str_x * 3)
  term4 = int(str_x * 4)
  return term1 + term2 + term3 + term4

print(calculate_sum(3))

#exercice4
import random


def throw_dice():
  return random.randint(1, 6)


def throw_until_doubles():
  throws_count = 0
  while True:
    dice1 = throw_dice()
    dice2 = throw_dice()
    throws_count += 1
    if dice1 == dice2:
      return throws_count


def main():
  results = []
  total_games = 100

  for _ in range(total_games):
    results.append(throw_until_doubles())

  total_throws = sum(results)
  average_throws = total_throws / total_games

  print(f"\nTotal throws: {total_throws}")
  print(f"Average throws to reach doubles: {round(average_throws, 2)}")

