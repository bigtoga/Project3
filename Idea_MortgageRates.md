# Possible project idea: Predicting future mortgage rates

Why this is interesting 
* In late April, [Seeking Alpha publishes a fantastic article](https://seekingalpha.com/article/4340921-why-you-should-wait-to-refinance) showing 
the relationship between 10-year Treasury bonds and Mortgage rates. 
This report highlights a large gap between
current mortgage rates and Treasury rates. This gap appears to
represent a potential future buying opportunity for homeowners
* Days later, on May 1, mortgage rates hit an all-time low, dropping 10 
basis points [another article from Seeking Alpha](https://seekingalpha.com/news/3567005-mortgage-rates-sink-to-all-time-low)

## What the presentation look like?
1. Slide 1: Historical relationship between Treasury Bonds rate
and mortgage rates  
2. Slide 2: Machine learning predictions for next several weeks/months/etc
3. Slide 3: App architecture overview of our "When should you refinance your home?" app
4. Demo of app
5. Slide 4: Final analysis and recommendations for group (e.g. "Use this app and it can tell you what week is likely to be the best week to lock in your refi rate"

# Web app architecture possibilities 
* Data sources: 
* * Quandl for Treasury bond history
* * Current mortgage rates - either "Bankrate.com U.S. Home Mortgage 30-Year Fixed National Average Index" or Freddie Mac data
* * Credit score => Mortgage rate offered mapping - TBD (for matching "user's current credit score" to what rate they likely be offered if refinancing)
* React-based app hat asks questions, stores data in json for duration of user session (I.e. their answers to the survey questions)
* SQLite for data persistence 
* Python for API calls, possible OCR read or web scrape (Freddie Mac data?)

React-based web application that asks questions related to
current home financing ("How much do you owe? What interest rate? How many more years? I hat is your credit score?")
