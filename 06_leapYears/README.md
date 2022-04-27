# Exercise 06 - leapYears

Create a function that determines whether or not a given year is a leap year. Leap years are determined by the following rules:

> Leap years are years divisible by four (like 1984 and 2004). However, years divisible by 100 are not leap years (such as 1800 and 1900) unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years). (Yes, it's all pretty confusing)
>
> -- <cite>[Learn to Program](https://pine.fm/LearnToProgram/chap_06.html) by Chris Pine</cite>

```javascript
leapYears(2000) // is a leap year: returns true
leapYears(1985) // is not a leap year: returns false
```


## Hints
- use an `if` statement and `&&` to make sure all the conditions are met properly

Leap years
- Divisible by 4 (e.g. 1984 and 2004)
- Years divisible by 100 are not leap years (e.g. 1800 and 1900)
    - Unless they're ALSO divisible by 400 (e.g. 1600 and 2000)

Had to add a test in the second else if statement due to 4 being a factor of 100 and hence them both returning true if 100 is true
- Forced second else if to check that the year returned FALSE when it was testing if the year was NOT divisible (1900 and 700 IS divisible, so they would return false, and although they would pass the 100 test and fail the program (due to them not being leap years but still divisible by 100, which 4 is a perfect factor of), they now pass off as false and goes to the last else statement)