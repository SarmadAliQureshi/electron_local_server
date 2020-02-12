# --- Abstract class ---

class Animal():
    def __init__(self,name):
        self.name=name




















#---  Polymorphism ---
# class Dog():
#
#     def __init__(self, name):
#         self.name=name
#
#     def speak(self):
#         return self.name+ ' says woof'
#
#
# class Cat():
#
#     def __init__(self, name):
#         self.name = name
#
#     def speak(self):
#         return self.name + ' says meeow'
#
# joy=Dog('joy')
# tom=Cat('Tom')
# # print(joy.speak())
# # print(tom.speak())
# # for pet in [joy,tom]:
# #     print(type(pet))
# #     print(pet.speak())
#
# def petspeak(pet):
#     print(pet.speak())
#
# petspeak(tom)
#








#------ Inheritence-----
# class Animal():
#
#     def __init__(self):
#         print('Animal created')
#     def eat(self):
#         print('I am eating')
#     def who_am_i(self):
#         print('I am an animal')
#
# # myanimal=Animal()
# # myanimal.eat()
#
# class Dog(Animal):
#     def __init__(self):
#         # automatically creates an instance of animal class when we create instance of dog class
#         Animal.__init__(self)
#         print('Dog created')
#     def who_am_i(self):
#         print('i am a dog')
#
#     def eat(self):
#         print('i am a dog eating')
#     def bark (self):
#         print(' Woof ')
#
#
#
#
# myDog=Dog()
# myDog.eat()
# myDog.who_am_i()
# myDog.bark()