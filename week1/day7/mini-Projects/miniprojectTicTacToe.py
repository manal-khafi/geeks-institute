class TicTacToe:
    def __init__(self):
        self.board = [[" " for _ in range(3)] for _ in range(3)]
        self.current_player = "X"

    def display_board(self):
        print("TIC TAC TOE")
        print("********************")
        print(f"*   {self.board[0][0]}   |   {self.board[0][1]}   |   {self.board[0][2]}   *")
        print("* ---|---|--- *")
        print(f"*   {self.board[1][0]}   |   {self.board[1][1]}   |   {self.board[1][2]}   *")
        print("* ---|---|--- *")
        print(f"*   {self.board[2][0]}   |   {self.board[2][1]}   |   {self.board[2][2]}   *")
        print("********************")

    def player_input(self):
        print(f"Player {self.current_player}'s turn...")
        while True:
            try:
                row = int(input("Enter row: ")) - 1
                col = int(input("Enter column: ")) - 1
                if 0 <= row <= 2 and 0 <= col <= 2:
                    if self.board[row][col] == " ":
                        self.board[row][col] = self.current_player
                        break
                    else:
                        print("That spot is already taken! Choose another.")
                else:
                    print("Invalid input. Enter row and column numbers between 1 and 3.")
            except ValueError:
                print("Invalid input. Please enter a valid number.")

    def check_win(self):
        for row in self.board:
            if row[0] == row[1] == row[2] != " ":
                return True
        for col in range(3):
            if self.board[0][col] == self.board[1][col] == self.board[2][col] != " ":
                return True
        if self.board[0][0] == self.board[1][1] == self.board[2][2] != " ":
            return True
        if self.board[0][2] == self.board[1][1] == self.board[2][0] != " ":
            return True
        return False

    def check_tie(self):
        for row in self.board:
            if " " in row:
                return False
        return True

    def play(self):
        print("Welcome to TIC TAC TOE!")
        while True:
            self.display_board()
            self.player_input()
            
            if self.check_win():
                self.display_board()
                print(f"Player {self.current_player} wins!")
                break
            
            if self.check_tie():
                self.display_board()
                print("The game ends in a tie!")
                break
            
            self.current_player = "O" if self.current_player == "X" else "X"

if __name__ == "__main__":
    game = TicTacToe()
    game.play()