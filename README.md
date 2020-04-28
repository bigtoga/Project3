# Project3 Working idea - analysis on current crude oil crash

## Background 
<details>
<summary>Timeline of current crisis</summary>

### Multiple timelines
1. Normal Winter oil consumption in the US
2. Coronavirus begins and how oil prices slumped 
3. Russia walking out of OPEC meetings which caused Saudia Arabia to lower prices but increase production 

https://en.wikipedia.org/wiki/2020_Russia%E2%80%93Saudi_Arabia_oil_price_war

![Oil timelines](https://en.m.wikipedia.org/wiki/File:WTI_price_2019-2020.png)


</details>

<details>
<summary>Oil trading basics</summary>
<p>

#### General "How it works" articles: 

- Investopedia "How to invest in oil" - https://www.investopedia.com/ask/answers/08/oil-as-investment.asp
- The Balance "Investing in Oil ETFs" - https://www.thebalance.com/how-to-invest-in-oil-without-getting-your-hands-dirty-1214929
- The Balance "Basics of commodities trading" - https://www.thebalance.com/trading-crude-oil-futures-809351

</p>
</details>

<details>
<summary>Crude oil classifications</summary>

https://en.wikipedia.org/wiki/Benchmark_(crude_oil)

### Notes FTA [Crude oil classifications](https://www.thebalance.com/the-basics-of-crude-oil-classification-1182570):
- Many types of crude oil
- Naming is mix of location ("West Texas...") and/or characteristics  (sweet, sour, light, heavy)

Sweet and Sour
- Crude oil with low sulfur content is classified as “sweet.” 
- Crude oil with a higher sulfur content is classified as “sour.” 
- Sulfur content is considered an undesirable characteristic for both processing and end-product quality. 
Therefore, **sweet crude is typically more desirable and valuable than sour crude**. 
West Texas Intermediate (WTI) crude oil is a good example of sweet crude oil, while oil from Canada and the U.S. Gulf Coast tends to be sour.

Light and Heavy
- oil’s relative density, based on the American Petroleum Institute (API) gravity
- Light is inexpensive to produce 
- Heavy crude can’t be produced, transported, and refined by conventional methods

Crude oil futures have a few classifications:
**Light Sweet Crude Oil** is the most popular grade of crude oil being traded because it 
is the easiest to distill into other products and it is traded 
on the New York Mercantile Exchange (NYMEX). 

**Brent Blend Crude** is a grade of oil that is primarily traded in 
London and seeing increased interest. Russia, Saudi Arabia, and the United 
States are the world's three largest oil producers as of 2018.
**Brent is the most widely used benchmark for determining gasoline prices.**

</details>

# Questions we could answer
## Historical analysis
* Has there been an impact on [Big Oil](https://en.wikipedia.org/wiki/Big_Oil) valuations as crude oil dropped?
* Which companies are the most/least impacted by crude oil drop?
* How have Americans' 401k plans been impacted - by crude oil drop? By Big Oil value loss?
* What happened in the markets in 1957 before and after the last time oil went negative?
* What were the leading indicators? How could a savvy investor have predicted this?
* What does global politics have to do with this price (Russia vs. Saudi's Arabia)?
* * https://en.wikipedia.org/wiki/2020_Russia%E2%80%93Saudi_Arabia_oil_price_war
* What impact has oil collapse had on the strength of the US dollar?

## COVID-19 Related
1. What impact did COVID-19 have on already distressed prices?

## Predicting the future (AI/ML)
1. Do we expect a return to normalcy in Winter as more Americans will likely be at home and require heating 
from oil than likely ever before in history?
2. Do we expect the price of oil to be impacted by re-opening the country?
3. What impact would a second wave of covid-19 have on future oil after a rebound?
4. Are certain parts of the country more important to an oil rebound than others?
5. If COVID-19 never happened, would oil still have gone negative?

# What we can trade (aka track and predict)
1. **Oil futures**
* 1. Traded on New York Mercantile Exchange NYMEX
* 2. [Yahoo Financial tracker](https://finance.yahoo.com/quote/CL%3DF/)
2. **ETF oil funds**
* 1. USO Oil Fund is most popular ([details](http://www.uscfinvestments.com/uso)). 
"The fund's investment objective is to provide daily investment results corresponding to the daily percentage changes of the spot price of West Texas Intermediate (WTI) crude oil to be delivered to Cushing, Oklahoma."
3. **ETF index funds** that are based on oil and energy-based commodities 
* 1. iShares Global Energy Sector Index Fund (IXC)
4. **ETF mutual funds** based on oil and energy 
* 1. T. Rowe Price New Era Fund (PRNEX), an energy-based mutual fund. 
5. **ETF indexes** that track the oil & gas sector
* 1. SPDR S&P Oil & Gas Exploration & Production ETF (XOP)
* 2. iShares Dow Jones U.S. Oil & Gas Exploration & Production Index Fund (IEO)
* 3. Invesco Dynamic Energy Exploration & Production Portfolio (PXE)
* 4. NASDAQ OSX (Philx) - https://www.nasdaq.com/market-activity/index/osx
* 5. https://www.vaneck.com/etf/equity/oih/overview/
6. Big Oil stocks directly

# Tech Stacks
## API / Data Sources 
### Quandl API
Pros: easy as it has its own [native Python module](https://www.quandl.com/tools/python), has good licensing and docs, plenty of example apps w Flask

#### Example apps
* [Docker image w Flask, quandl](http://blog.statisticalfx.com/2019/04/30/48/)
* [Example Heroku deployed Flask app](https://github.com/samuelgthorpe/hello-flask) (4 yrs old though)

## Python libraries to consider
[Nice list of ten python finance analysis libraries](https://www.activestate.com/blog/top-10-python-packages-for-finance-and-financial-modeling/)

[List of a bunch of market-related libraries](https://awesomeopensource.com/project/wilsonfreitas/awesome-quant)

**TA-Lib** - 200+ market analysis methods in one handy `pip install TA-lib` module
[github repo](https://towardsdatascience.com/python-for-finance-dash-by-plotly-ccf84045b8be)

**PyFolio** - both as an EDA tool but also to generate charts dynamically [github repo](https://github.com/quantopian/pyfolio/tree/master/pyfolio)

**ppsmatrix** as an alternative to correlation matrix
* [Examples and how to](https://towardsdatascience.com/rip-correlation-introducing-the-predictive-power-score-3d90808b9598)

## Interactive Data Visualization (JavaScript)
**d3** is incredibly powerful. d3 Stock market charting examples:
Walkthroughs of various types of charts and syntax in d3:
[example 1](https://blog.scottlogic.com/2018/09/21/d3-financial-chart.html) - 
[example 2](https://www.freecodecamp.org/news/how-to-build-historical-price-charts-with-d3-js-72214aaf6ba3/)

**TechanJS** - not as known/powerful as d3 but new-to-us so maybe bonus worthy 
* [home page](http://techanjs.org/)
* [samples page](https://github.com/andredumas/techan.js/wiki/Gallery)

**plotlyjs ** is built on top of d3
* [home page](https://plotly.com/javascript/)
* [samples page](https://plotly.com/javascript/financial-charts/)

**ZingChart** is a powerful JavaScript library. We used it in our last team project
Tons of features and can create interactive dashboards 
* [home page](https://www.zingchart.com/)
* [samples page](https://www.zingchart.com/gallery)

## Database
Tricky as we have to get hosting somewhere. Could have Flask create Pandas Dataframe, save that to SQLite locally, then retrieve data from that 

## Hosting - Viz
Several sites will host and serve your JavaScript layer
 
** observable platform

**plotly dash platform**
* https://plotly.com/dash/

**Flourish**
* https://flourish.studio

## Hosting - data

**Kaggle**

**data.world** 


## Hosting - App
Python app on Heroku? Maybe Azure free?

### Misc other resources 
**Yahoo Finance API** is an Open source Python module [yahoofinancials](https://github.com/JECSand/yahoofinancials)
* [Example app 1](https://pypi.org/project/yahoofinancials/)
* [Beginner article/example](https://github.com/KDIncognito/YahooFinance)

**Apple Maps mobility dataset** - https://www.apple.com/covid19/mobility

**JP Morgan's Big Data and AI Strategy (2018](https://faculty.sites.uci.edu/pjorion/files/2018/05/JPM-2017-MachineLearningInvestments.pdf)
