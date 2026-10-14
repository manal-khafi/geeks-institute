#exercice1
keys = ["Ten", "Twenty", "Thirty"]
values = [10, 20, 30]
result_dict = dict(zip(keys, values))
print(result_dict)

#exercice2
family = {"rick": 43, "beth": 13, "morty": 5, "summer": 8}

total_cost = 0

for name, age in family.items():
  if age < 3:
    price = 0
  elif 3 <= age <= 12:
    price = 10
  else:
    price = 15

  total_cost += price
  print(f"{name.capitalize()} (age {age}) has to pay: ${price}")

print(f"\nTotal family cost for the movies: ${total_cost}")

family_dynamic = {}
print("\n--- Bonus: Dynamic Family Input ---")
while True:
  name = input("Enter family member's name (or type 'done' to finish): ").strip()
  if name.lower() == "done":
    break
  try:
    age = int(input(f"Enter {name}'s age: "))
    family_dynamic[name] = age
  except ValueError:
    print("Please enter a valid integer for age.")

dynamic_total = 0
for name, age in family_dynamic.items():
  if age < 3:
    price = 0
  elif 3 <= age <= 12:
    price = 10
  else:
    price = 15
  dynamic_total += price
  print(f"{name.capitalize()}: ${price}")

print(f"Dynamic family total cost: ${dynamic_total}")

#exercice3
brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {"France": "blue", "Spain": "red", "US": ["pink", "green"]},
}

brand["number_stores"] = 2

print(
    f"Zara's clients include people shopping for {', '.join(brand['type_of_clothes'])} clothing."
)

brand["country_creation"] = "Spain"

if "international_competitors" in brand:
  brand["international_competitors"].append("Desigual")

del brand["creation_date"]

print("Last competitor:", brand["international_competitors"][-1])
print("Major colors in the US:", brand["major_color"]["US"])
print("Dictionary length:", len(brand))
print("Dictionary keys:", list(brand.keys()))

more_on_zara = {"creation_date": 1975, "number_stores": 10000}
brand.update(more_on_zara)

print("Number of stores:", brand["number_stores"])
