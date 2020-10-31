package naiveFizzBuzz

import (
    "testing"
)


func TestFizz(t *testing.T) {
    want := "Fizz"
    msg, err := FizzBuzz(3)
    if want != msg || err != nil {
        t.Fatalf("failed to fizz with %v %v", msg, err)
    }
}

func TestBuzz(t *testing.T) {
    want := "Buzz"
    msg, err := FizzBuzz(5)
    if want != msg || err != nil {
        t.Fatalf("failed to Buzz with %v %v", msg, err)
    }
}

func TestFizzBuzz(t *testing.T) {
    want := "FizzBuzz"
    msg, err := FizzBuzz(15)
    if want != msg || err != nil {
        t.Fatalf("failed to FizzBuzz with %v %v", msg, err)
    }
}