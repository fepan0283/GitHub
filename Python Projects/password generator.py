import random

lower_case = ["a","b","c","d","e","f","g","h", "i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

upper_case = []
for i in lower_case:
    upper_case.append(i.upper())

numbers = ["1","2","3","4","5","6","7","8","9","0"]

def create_first_instance():
    first_instance = ""
    counter = 0
    while counter <= 14:
        if len(first_instance) / 5 == 1 or (len(first_instance) - 1)/ 5 == 2:
            first_instance += "-"
        random_number = random.randrange(1,4)
        if random_number == 1:
            first_instance += random.choice(lower_case)
            counter += 1
        elif random_number == 2:
            first_instance += random.choice(upper_case)
            counter += 1
        else:
            first_instance += random.choice(numbers)
            counter += 1
    print("")
    print("Here is your new password:")
    print("")
    print(first_instance)
    print("")
    
create_first_instance()
        
        
    

    
    