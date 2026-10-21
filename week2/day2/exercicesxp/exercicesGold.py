class BankAccount:
    def __init__(self, username, password, balance=0):
        self.username = username
        self.password = password
        self.balance = balance
        self.authenticated = False

    def authenticate(self, username, password):
        if self.username == username and self.password == password:
            self.authenticated = True
            return True
        return False

    def deposit(self, amount):
        if not self.authenticated:
            raise Exception("Not authenticated")
        if not isinstance(amount, int) or amount <= 0:
            raise Exception("Deposit amount must be a positive integer")
        self.balance += amount

    def withdraw(self, amount):
        if not self.authenticated:
            raise Exception("Not authenticated")
        if not isinstance(amount, int) or amount <= 0:
            raise Exception("Withdrawal amount must be a positive integer")
        if amount > self.balance:
            raise Exception("Insufficient funds")
        self.balance -= amount


class MinimumBalanceAccount(BankAccount):
    def __init__(self, username, password, balance=0, minimum_balance=0):
        super().__init__(username, password, balance)
        self.minimum_balance = minimum_balance

    def withdraw(self, amount):
        if not self.authenticated:
            raise Exception("Not authenticated")
        if not isinstance(amount, int) or amount <= 0:
            raise Exception("Withdrawal amount must be a positive integer")
        if self.balance - amount < self.minimum_balance:
            raise Exception("Withdrawal violates minimum balance requirement")
        self.balance -= amount


class ATM:
    def __init__(self, account_list, try_limit):
        if not isinstance(account_list, list) or not all(isinstance(acc, BankAccount) for acc in account_list):
            raise Exception("Invalid account list")
        self.account_list = account_list

        try:
            if not isinstance(try_limit, (int, float)) or try_limit <= 0:
                raise Exception("Invalid try limit")
            self.try_limit = try_limit
        except Exception:
            self.try_limit = 2

        self.current_tries = 0
        self.show_main_menu()

    def show_main_menu(self):
        while True:
            print("1. Log in")
            print("2. Exit")
            choice = input("Select an option: ").strip()
            if choice == "1":
                username = input("Enter username: ")
                password = input("Enter password: ")
                self.log_in(username, password)
            elif choice == "2":
                break
            else:
                print("Invalid option")

    def log_in(self, username, password):
        while self.current_tries < self.try_limit:
            matched = False
            for account in self.account_list:
                if account.authenticate(username, password):
                    self.current_tries = 0
                    self.show_account_menu(account)
                    matched = True
                    return
            if not matched:
                self.current_tries += 1
                if self.current_tries >= self.try_limit:
                    print("Reached max tries. Shutting down the program.")
                    exit()
                print("Invalid credentials. Try again.")
                username = input("Enter username: ")
                password = input("Enter password: ")

    def show_account_menu(self, account):
        while True:
            print("1. Deposit")
            print("2. Withdraw")
            print("3. Exit")
            choice = input("Select an option: ").strip()
            if choice == "1":
                try:
                    amount = int(input("Enter amount to deposit: "))
                    account.deposit(amount)
                    print(f"New balance: {account.balance}")
                except Exception as e:
                    print(f"Error: {e}")
            elif choice == "2":
                try:
                    amount = int(input("Enter amount to withdraw: "))
                    account.withdraw(amount)
                    print(f"New balance: {account.balance}")
                except Exception as e:
                    print(f"Error: {e}")
            elif choice == "3":
                account.authenticated = False
                break
            else:
                print("Invalid option")