from game import Game

def get_user_menu_choice():
    print("Menu:")
    print("(g) Play a new game")
    print("(x) Show scores and exit")
    choice = input(": ").strip().lower()
    return choice

def print_results(results):
    print("\nGame Results:")
    print(f"    You won {results.get('win', 0)} times")
    print(f"    You lost {results.get('loss', 0)} times")
    print(f"    You drew {results.get('draw', 0)} times")
    print("\nThank you for playing!")

def main():
    results = {
        "win": 0,
        "loss": 0,
        "draw": 0
    }
    
    while True:
        choice = get_user_menu_choice()
        
        if choice == 'g':
            game_instance = Game()
            game_result = game_instance.play()
            if game_result in results:
                results[game_result] += 1
                
        elif choice == 'x':
            print_results(results)
            break
            
        else:
            print("Invalid option. Please choose 'g' or 'x'.\n")

if __name__ == "__main__":
    main()