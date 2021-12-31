from random import randrange

def create_random_number():
    global random_number
    random_number = randrange(1,51)
    # print(random_number)
    
def user_guess():
    global user_number
    user_number = int(input("Enter your guess "))

def result_return():
    endgame_status = False
    while endgame_status == False:
        user_guess()
        if random_number == user_number:
            print("You won!")
        elif random_number > user_number:
            print("Higher")
        elif random_number < user_number:
            print("Lower")
            endgame_status = True
    


create_random_number()
result_return()
