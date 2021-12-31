def handle_dicts(dict_1, dict_2):
    new_dict = {}
    for i,v in dict_2.items():
        new_dict[i] = v
    for i,v in dict_1.items():
        new_dict[i] = v

    print(new_dict)

handle_dicts({1:2,2:3,3:4},{3:10,4:5,5:6})
    