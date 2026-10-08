from datetime import datetime

birthdate = input("Enter your birthdate (DD-MM-YYYY): ")
date = datetime.strptime(birthdate, "%d-%m-%Y")
today = datetime.now()
age = today.year - date.year

if (today.month, today.day) < (date.month, date.day):
    age -= 1
print(f"You are {age} years old.")

candles = age % 10

print("       ___" + "i" * candles + "___")
print("      |:H:a:p:p:y:|")
print("    __|___________|__")
print("   |^^^^^^^^^^^^^^^^^|")
print("   |:B:i:r:t:h:d:a:y:|")
print("   |                 |")
print("   ~~~~~~~~~~~~~~~~~~~")

if date.year % 400 == 0 or (date.year % 4 == 0 and date.year % 100 != 0):
    print("It's a leap year! 🎂🎂")
    print("\nSecond cake:")
    print("       ___" + "i" * candles + "___")
    print("      |:H:a:p:p:y:|")
    print("    __|___________|__")
    print("   |^^^^^^^^^^^^^^^^^|")
    print("   |:B:i:r:t:h:d:a:y:|")
    print("   |                 |")
    print("   ~~~~~~~~~~~~~~~~~~~")