def find_repeated_numbers(lst):
    seen = set()
    repeated = set()
    
    for num in lst:
        if num in seen:
            repeated.add(num)
        else:
            seen.add(num)
    
    print("Repeated numbers:", list(repeated))

numbers = [44,33,3,47,77,999,44,999,3]
find_repeated_numbers(numbers)