#exercice7
import random
def get_random_temp(season):
  season = season.lower()
  if season == "winter":
    return round(random.uniform(-10.0, 16.0), 1)
  elif season in ["spring", "autumn", "fall"]:
    return round(random.uniform(5.0, 23.0), 1)
  elif season == "summer":
    return round(random.uniform(20.0, 40.0), 1)
  else:
    return round(random.uniform(-10.0, 40.0), 1)

def get_season_from_month(month):
  if month in [12, 1, 2]:
    return "winter"
  elif month in [3, 4, 5]:
    return "spring"
  elif month in [6, 7, 8]:
    return "summer"
  elif month in [9, 10, 11]:
    return "autumn"
  else:
    return "spring" 

def main():
  try:
    month_input = int(
        input("Enter the number of the month (1 = January, 12 = December): ")
    )
    season = get_season_from_month(month_input)
    print(f"Based on month {month_input}, the season is set to: {season}")
  except ValueError:
    season = "summer"
    print("Invalid input, defaulting season to summer.")

  temp = get_random_temp(season)
  print(f"The temperature right now is {temp} degrees Celsius.")

  if temp < 0:
    print("Brrr, that’s freezing! Wear some extra layers today.")
  elif 0 <= temp <= 16:
    print("Quite chilly! Don’t forget your coat.")
  elif 16 < temp <= 23:
    print("Mild weather, a light sweater should do.")
  elif 24 <= temp <= 32:
    print("Warm and pleasant, enjoy your day outside!")
  elif 32 < temp <= 40:
    print("It's quite hot out there, stay hydrated!")

