# Possible project idea: Predicting future mortgage rates

I bought https://refinance.win this past week - could use logo/color scheme like this maybe [color palette](https://www.colourlovers.com/palette/4630980/Agir)

![ing](https://i.imgur.com/UC8xF3b_d.jpg?maxwidth=640&shape=thumb)

Why this is interesting 
* In late April, [Seeking Alpha publishes a fantastic article](https://seekingalpha.com/article/4340921-why-you-should-wait-to-refinance) showing 
the relationship between 10-year Treasury yields and Mortgage rates. 
This report highlights a large gap between current mortgage rates and Treasury yields. This gap appears to
represent a potential future buying opportunity for homeowners
* Days later, on May 1, mortgage rates hit an all-time low, dropping 10 
basis points [another article from Seeking Alpha](https://seekingalpha.com/news/3567005-mortgage-rates-sink-to-all-time-low)

![Clear relationship](https://static.seekingalpha.com/uploads/2020/4/28/1112099-15881191373848379.png)

## What the presentation might look like
1. Slide 1: Historical relationship between Treasury Bonds rate
and mortgage rates  
2. Slide 2: Machine learning predictions for next several weeks/months/etc
3. Slide 3: App architecture overview of our "When should you refinance your home?" app. 
* * The app asks a series of questions related to
current home financing ("How much do you owe? What interest rate? 
How many more years? What is your credit score?")
* * After the user enters their questions, the app uses APIs
to get updated weekly future projections for what mortgage 
rates they will likely be offered over the next 10 weeks. 
* * App then provides a 10- week projected mortgage rates chart
to the user that is interactive and includes visual
cues that show a clear action-based plan of what week(s)
represent the best and worst refinancing opportunities 
(i.e. wait three more weeks and then lock it in")
* * When the user drills into a given week, the app charts 
future potential savings if they are able to lock on that 
rate at that time 
4. Demo of app (**note - I just bought https://refinance.win domain and we could use it for this**)
5. Slide 4: Final analysis and recommendations for group (e.g. "Use this app and it can tell you what week is likely to be the best week to lock in your refi rate"

# Web app architecture possibilities 
* Data sources: 
* * Quandl for Treasury yield history (TMUBMUSD10Y)
* * Current mortgage rates - either "Bankrate.com U.S. Home Mortgage 30-Year Fixed National Average Index" or Freddie Mac data via https://www.quandl.com/data/FMAC-Freddie-Mac
* * Credit score => Mortgage rate offered mapping - https://www.myfico.com/loan-center/home-mortgage-rate-comparison/default.aspx (for matching "user's current credit score" to what rate they likely be offered if refinancing)
* Frontend - React
* Data persistence - SQLite 
* Data pulls - Python for API calls, possible OCR read or web scrape (Freddie Mac data?)
* Endpoints - Flask
* Interactive visualizations - d3? ZingChart?
* Hosting - Heroku because we can deploy "live" Python/Flask apps to it
* Machine learning - simple linear regression is likely all we need so Python 
with sklearn is likely all that is needed

# Data source possibilities
1. [Home Mortgage Disclosure Act's "Modified Loan/Application Register (LAR)" data via API](https://cfpb.github.io/hmda-platform/#hmda-filing-api-authorization)
* * Key columns: "Interest Rate", "Credit Score", "Income", "State", "County", "Action Taken", "Loan Type", "Loan Purpose", "Type of Purchaser", "Rate Spread", "Applicant or Borrower - Name and Version of Credit Scoring Model", "Debt-to-Income Ratio", "Combined Loan-to-Value Ratio", "Loan Term", "Introductory Rate Period", "Property Value", 
* * [Schema](https://files.consumerfinance.gov/f/documents/cfpb_reportable-hmda-data_regulatory-and-reporting-overview-reference-chart-2019.pdf) - page 20 has "credit score" column
* * [Headers only](https://ffiec.cfpb.gov/documentation/2019/modified-lar-header/)
* * 

# Example using a "Should you refinance now?" calculator
https://www.nerdwallet.com/mortgages/refinance-calculator

We could use this as our mock and just update it to
use our machine learning projected mortgage 
rates

# Example inspiration for visualizations
![img](https://i.imgur.com/CppHhYr_d.jpg?maxwidth=640&shape=thumb&fidelity=medium)

Source: https://www.thebalance.com/mortgage-rates-by-credit-score-4171904

Tableau Public gallery search results:
* ["mortgage"](https://public.tableau.com/en-us/search/all/mortgage)
* ["mortgage rates"](https://public.tableau.com/en-us/search/all/mortgage rates)
* [""](https://public.tableau.com/en-us/search/all/)
* [""](https://public.tableau.com/en-us/search/all/)
* [""](https://public.tableau.com/en-us/search/all/)
* [""](https://public.tableau.com/en-us/search/all/)

## Interesting Tableau Public dashboards
### Mortgage rates
1. [Show cost of a home by year if you bought at that year's avg interest rate](https://public.tableau.com/profile/serge.lamoureux#!/vizhome/HistoricalMortgageRates/HistoricalMortgageRates_1)
1. [Plot various types of loans with interactive chart](https://public.tableau.com/profile/leonard.kiefer#!/vizhome/RatesandMortgagePayments/RatesandPayments)
1. [Nice interactive walkthrough of rates by year](https://public.tableau.com/profile/recoverydecisionscience#!/vizhome/30YearFixedMortgageRates/MortgageRatesbyMonth)
1. [Calculator example](https://public.tableau.com/profile/insight5128#!/vizhome/Mortgage/MortgagePaymentsCalculator)
1. [Forecast through 2023](https://public.tableau.com/profile/allen.wong.cfa#!/vizhome/MortgageRates30Y/MortgageRates30Y)
1. []()
1. []()
1. []()
1. []()
1. https://public.tableau.com/profile/daniel.o.neill5399#!/vizhome/MortgageDelinquency/Dashboard1
1. https://public.tableau.com/profile/nicholas.hansen#!/vizhome/Mortgagerates/Obligationsrenten
1. [Plot 15yr FRM vs. 5/1 ARM vs. 30yr FRM](https://public.tableau.com/profile/ih138#!/vizhome/MortgageRates_15662696282070/Sheet1)

### Credit / FICO scores
1. [Boxplot of FICO score vs. default status](https://public.tableau.com/profile/liwen6329#!/vizhome/FicoScoresvsDefaultStatus/Sheet1)
1. [Histogram of FICO score distribution](https://public.tableau.com/profile/jackie.bacon#!/vizhome/MotoRefiChallenge-FicoHistogram/FicoHistogram)
1. [FICO vs. interest rate offered](https://public.tableau.com/profile/zujian.ding#!/vizhome/FICOvsInt/Sheet1)
1. []()

### Dashboard designs
1. [Nice with multiple interactives](https://public.tableau.com/profile/onenumber#!/vizhome/CreditUnionHousingAffordabilityReport/Howishousingaffordabilityinourcommunities)

### Misc interesting
1. [Mockup of an app using Tableau](https://public.tableau.com/profile/onenumber#!/vizhome/FICOConcept/FICOScoreDashboard)
