import fizzbuzz
import pytest

def test_fizzIsTrue():
    assert fizzbuzz.isFizz(3) == True

def test_fizzIsFalse():
    assert fizzbuzz.isFizz(4) == False

def test_buzzIsTrue():
    assert fizzbuzz.isBuzz(5) == True

def test_buzzIsFalse():
    assert fizzbuzz.isBuzz(7) == False

def test_fizzbuzz_Fizz():
    assert fizzbuzz.fizzbuzz(3) == "Fizz"

def test_fizzbuzz_Buzz():
    assert fizzbuzz.fizzbuzz(5) == "Buzz"

def test_fizzbuzz_FizzBuzz():
    assert fizzbuzz.fizzbuzz(15) == "FizzBuzz"
