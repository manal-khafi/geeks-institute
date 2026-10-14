#exercice8
data = [
    {"question": "What is Baby Yoda's real name?", "answer": "Grogu"},
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine",
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977",
    },
    {"question": "Who built C-3PO?", "answer": "Anakin Skywalker"},
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader",
    },
    {"question": "What species is Chewbacca?", "answer": "Wookiee"},
]


def run_quiz():
  playing = True
  while playing:
    correct_count = 0
    incorrect_count = 0
    wrong_answers = []

    for item in data:
      user_answer = input(item["question"] + " ").strip()
      if user_answer.lower() == item["answer"].lower():
        correct_count += 1
      else:
        incorrect_count += 1
        wrong_answers.append({
            "question": item["question"],
            "user_answer": user_answer,
            "correct_answer": item["answer"],
        })

    print("\n--- Quiz Results ---")
    print(f"Correct answers: {correct_count}")
    print(f"Incorrect answers: {incorrect_count}")

    if wrong_answers:
      print("\nHere are the questions you missed:")
      for wa in wrong_answers:
        print(f"- Question: {wa['question']}")
        print(
            f"  Your answer: {wa['user_answer']} | Correct answer:"
            f" {wa['correct_answer']}"
        )

    if incorrect_count > 3:
      choice = (
          input(
              "\nYou had more than 3 wrong answers. Would you like to play"
              " again? (yes/no): "
          )
          .strip()
          .lower()
      )
      if choice != "yes":
        playing = False
        print("Thanks for playing!")
    else:
      print(
          "\nGreat job! You passed with flying colors. Thanks for playing!"
      )
      break