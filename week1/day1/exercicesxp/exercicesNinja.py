#Exercice 1

# 3 <= 3 < 9     ->   true
# 3 == 3 == 3     ->   true
# bool(0)     ->   false
# bool(5 == "5")     ->   false
# bool(4 == 4) == bool("4" == "4")     ->   true
# bool(bool(None))     ->   false
# x is true
# y is false
# a: 5
# b: 10

#Exercice 2
longest_sentence = "" 

while True:
    sentence = input("Enter a sentence without the letter A (or 'quit' to stop): ")
    if sentence.lower() == "quit":
        break
    if "a" in sentence.lower():
        print("The sentence contains the letter A. Please try again.")
        continue
    if len(sentence) > len(longest_sentence):
        longest_sentence = sentence
        print("Congratulations! You've entered the longest sentence so far.")
        print("Length is: ", len(longest_sentence))
print(f"\nThe longest sentence entered is: {longest_sentence}, with a length of {len(longest_sentence)} characters.")

#Exercie 3
paragraph = "Python is a high-level, general-purpose programming language that emphasizes code readability, simplicity, and ease-of-writing with the use of significant indentation,[38] an extensive standard library, and garbage collection. Python supports multiple programming paradigms but with an emphasis on object-oriented programming and dynamic typing."

characters = len(paragraph)

sentences = paragraph.count(".") + paragraph.count("!") + paragraph.count("?")

words = paragraph.split()

unique_words = set(words)

average_word = len(words) / sentences 

non_unique_words = len(words) - len(unique_words)

print("Number of characters:", characters)
print("Number of sentences:", sentences)
print("Number of words:", len(words))
print("Number of unique words:", len(unique_words))
print("Average words per sentence:", round(average_word, 2))
print("Number of non-unique words:", non_unique_words)