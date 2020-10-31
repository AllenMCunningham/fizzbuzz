package naiveFizzBuzz

import (
	"fmt"
	"errors"
	"strconv"
)

func main() {
	for i := 1; i <= 100; i++ {
		response, err := FizzBuzz(i)
		if err != nil {
			fmt.Println(err)
		} else {
		fmt.Println(response)
		}
	}
}

func mod(numerator  int, denominator int) (bool, error) {
	if denominator == 0  {
        return false , errors.New("Deviting by zero breaks the matrix")
	}
	return numerator % denominator == 0 , nil
}

func FizzBuzz(num int) (string, error){
	fizz, err := mod(num, 3)
	if err != nil {
		return "", err
	}
	buzz, err := mod(num, 5)
	if err != nil {
		return "", err
	}
	if fizz && buzz {
		return "FizzBuzz", nil
	}
	if fizz {
		return "Fizz", nil
	}
	if buzz {
		return "Buzz", nil
	}
	return strconv.Itoa(num), nil
}