#Challenge 1
number = int(input("Enter a number: "))
length = int(input("Enter the length of the multiplication table: "))

multiples = []

for i in range(1, length + 1):
    multiples.append(number*i)
print(f"The multiplication table of {number} up to {length} is: {multiples}")


#Challenge 2
word = input("Enter a word: ")

result = ""
for char in word:
    if len(result) == 0 or char.lower() != result[-1].lower():
        result += char
print(f"The word after removing consecutive duplicate letters is: {result}")1