#exercice4
def describe_city(city, country="Iceland"):
  print(f"{city} is in {country}")

describe_city("Reykjavik") 
describe_city("Tokyo", "Japan")  
describe_city(city="Paris", country="France")  

#exercice5
import random

def compare_numbers(user_num):
  rand_num = random.randint(1, 100)
  if user_num == rand_num:
    print(
        f"Success! Both numbers match: {user_num} (Random generated:"
        f" {rand_num})"
    )
  else:
    print(
        "Fail! The numbers do not match. Your number was"
        f" {user_num}, and the random number was {rand_num}."
    )

compare_numbers(45)

#exercice6
def make_shirt(size="large", message="I love Python"):
  print(
      f"The size of the shirt is '{size}' and the text printed on it is"
      f" '{message}'."
   )


make_shirt()
make_shirt(size="medium")
make_shirt(size="small", message="Debugging is fun!")
make_shirt(message="Python Developer", size="XL")

