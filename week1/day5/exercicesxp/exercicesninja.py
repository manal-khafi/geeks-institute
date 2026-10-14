#exercice1
class Phone:

  def __init__(self, phone_number):
    self.phone_number = phone_number
    self.call_history = []
    self.messages = []

  def call(self, other_phone):
    call_str = f"{self.phone_number} called {other_phone.phone_number}"
    print(call_str)
    self.call_history.append(call_str)

  def show_call_history(self):
    print(f"Call History for {self.phone_number}:")
    for record in self.call_history:
      print(f"- {record}")

  def send_message(self, other_phone, content):
    message_data = {
        "to": other_phone.phone_number,
        "from": self.phone_number,
        "content": content,
    }
    self.messages.append(message_data)
    other_phone.messages.append(message_data)
    print(f"Message sent from {self.phone_number} to {other_phone.phone_number}")

  def show_outgoing_messages(self):
    print(f"Outgoing messages from {self.phone_number}:")
    for msg in self.messages:
      if msg["from"] == self.phone_number:
        print(f"To {msg['to']}: {msg['content']}")

  def show_incoming_messages(self):
    print(f"Incoming messages for {self.phone_number}:")
    for msg in self.messages:
      if msg["to"] == self.phone_number:
        print(f"From {msg['from']}: {msg['content']}")

  def show_messages_from(self, other_phone_number):
    print(f"Messages between {self.phone_number} and {other_phone_number}:")
    for msg in self.messages:
      if (
          msg["from"] == other_phone_number
          and msg["to"] == self.phone_number
      ) or (
          msg["from"] == self.phone_number
          and msg["to"] == other_phone_number
      ):
        print(f"From {msg['from']} to {msg['to']}: {msg['content']}")


phone1 = Phone("555-0101")
phone2 = Phone("555-0202")

phone1.call(phone2)
phone1.show_call_history()

phone1.send_message(phone2, "Hello there!")
phone2.send_message(phone1, "Hi back!")

phone1.show_outgoing_messages()
phone1.show_incoming_messages()
phone1.show_messages_from("555-0202")