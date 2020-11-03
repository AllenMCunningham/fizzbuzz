

def isFizz(num):
    return num % 3 ==  0

def isBuzz(num):
    return num % 5 == 0

def fizzbuzz(num):
    fizz = isFizz(num)
    buzz = isBuzz(num)
    if fizz & buzz:
        return 'FizzBuzz'
    elif fizz:
        return 'Fizz'
    elif buzz:
        return 'Buzz'
    else:
        return num

if __name__ == '__main__':
    for x in range(100):
        print(fizzbuzz(x))