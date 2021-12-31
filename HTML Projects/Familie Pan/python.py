global contact_dictionary
contact_dictionary = { "Pan, Felix":
    {
        "first": "Felix",
        "last": "Pan",
        "age": 23,
        "occupation": "student"
    }

}

def add_contact(first, last, age, occupation):
    global sorted_contact_dict
    new_entry = {}
    new_entry["first"] = first
    new_entry["last"] = last
    new_entry["age"] = age
    new_entry["occupation"] = occupation
    contact_dictionary[last + ", " + first] = new_entry
    sorted_contact_dict = sorted(contact_dictionary.items())
    dict(sorted_contact_dict)


add_contact("Julius", "Pan", 21, "student")
add_contact("Anne", "Amke", 7, "student")
add_contact("Beate", "Backer", 15, "student")

print(sorted_contact_dict["Pan, Felix"])
