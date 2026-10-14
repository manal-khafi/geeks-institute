#exercice3
class Family:
    def __init__(self, last_name, members):
        self.last_name = last_name
        self.members = members

    def born(self, **kwargs):
        self.members.append(kwargs)
        print(f"Congratulations to the {self.last_name} family on the new addition!")

    def is_18(self, name):
        for member in self.members:
            if member['name'].lower() == name.lower():
                return member['age'] > 18
        return False

    def family_presentation(self):
        print(f"Family Last Name: {self.last_name}")
        print("Members details:")
        for member in self.members:
            print(member)


initial_members = [
    {'name':'Michael','age':35,'gender':'Male','is_child':False},
    {'name':'Sarah','age':32,'gender':'Female','is_child':False}
]

my_family = Family("Smith", initial_members)
my_family.family_presentation()
print("Is Michael over 18?", my_family.is_18("Michael"))
my_family.born(name="Baby", age=0, gender="Male", is_child=True)
my_family.family_presentation()


#exercice4
class TheIncredibles(Family):
    def use_power(self, name):
        for member in self.members:
            if member['name'].lower() == name.lower():
                if member['age'] > 18:
                    print(f"{member['name']}'s power is: {member['power']}")
                else:
                    print(f"{member['name']} is not old enough to use their power!")
                return
        print("Member not found.")

    def incredible_presentation(self):
        print("Here is our powerful family")
        super().family_presentation()


incredible_members = [
    {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
    {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
]

incredibles_family = TheIncredibles("Incredibles", incredible_members)
incredibles_family.incredible_presentation()
incredibles_family.born(name="Baby Jack", age=1, gender="Male", is_child=True, power="Unknown Power", incredible_name="JackJack")
incredibles_family.incredible_presentation()