#exercice1
cars_str = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"

cars_list = [car.strip() for car in cars_str.split(",")]

print(f"Total manufacturers: {len(cars_list)}")

print("Descending order (Z-A):", sorted(cars_list, reverse=True))

o_count = sum(1 for car in cars_list if "o" in car.lower())
print(f"Manufacturers with the letter 'o': {o_count}")

no_i_count = sum(1 for car in cars_list if "i" not in car.lower())
print(f"Manufacturers without the letter 'i': {no_i_count}")

duplicates_list = [
    "Honda",
    "Volkswagen",
    "Toyota",
    "Ford Motor",
    "Honda",
    "Chevrolet",
    "Toyota",
]
unique_cars = list(set(duplicates_list))

print("Unique companies:", ", ".join(unique_cars))
print(f"Total companies without duplicates: {len(unique_cars)}")

reversed_sorted_cars = [car[::-1] for car in sorted(unique_cars)]
print("Ascending order with reversed letters:", reversed_sorted_cars)


#exercice2
def get_full_name(first_name, last_name, middle_name=None):
  if middle_name:
    return (
        f"{first_name.strip().title()} {middle_name.strip().title()}"
        f" {last_name.strip().title()}"
    )
  else:
    return f"{first_name.strip().title()} {last_name.strip().title()}"

print(get_full_name(first_name="john", middle_name="hooker", last_name="lee"))
print(get_full_name(first_name="bruce", last_name="lee"))


#exercice3
MORSE_CODE_DICT = {
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "V": "...-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--..",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "0": "-----",
    " ": "/",
}

REVERSE_MORSE_DICT = {v: k for k, v in MORSE_CODE_DICT.items()}


def english_to_morse(text):
  morse_result = []
  for char in text.upper():
    if char in MORSE_CODE_DICT:
      morse_result.append(MORSE_CODE_DICT[char])
  return " ".join(morse_result)


def morse_to_english(morse_code):
  words = morse_code.split(" / ")
  english_words = []
  for word in words:
    letters = word.split(" ")
    english_word = "".join(
        [REVERSE_MORSE_DICT.get(letter, "") for letter in letters]
    )
    english_words.append(english_word)
  return " ".join(english_words)


sample_text = "PYTHON CODE"
encoded = english_to_morse(sample_text)
decoded = morse_to_english(encoded)

print("Morse Code:", encoded)
print("Decoded English:", decoded)