# DALI Data Science Team Application
## Brendan Berkman

# Data Visualizations

Created using Tableu and React.js

All visualizations are hosted [here](https://6282040a21663a6257adb5f9--famous-faloodeh-881eb5.netlify.app/)

I completed analysis on the data prior to creating the visualization, found in the [PreViz-Analysis.ipynb](./PreViz-Analysis.ipynb) file.

## Visualization 1
In my first chart, I map total sales to their corresponding states. To represent the difference in sales between states, I use a gradient from light blue to dark blue, with darker colors representing the highest total sales. Using the filters I offer, you can toggle between years, regions, and client segments, to see how each of those variables affect the chart as a whole. As would be expected, states with larger populations, such as California, New York, and Texas, display the highest sales across year and segment. 

To view directly on Tableu, click here: https://public.tableau.com/app/profile/brendan.berkman/viz/StateViz_Superstore/Map1.


## Visualization 2
In my second chart, I map total sales and revenue by month in order to see how seasonal changes affect the company's performance. Again, I offer toggles to switch between year and segment to see how those variables affect the data. The largest trend I noticed was that the sales tend to peak around the February/March area, then again around September, and once more around November, with a steady increase throughout the year. 

To view directly on Tableu, click here: https://public.tableau.com/app/profile/brendan.berkman/viz/SeasonalViz_Superstore/Seasonal.


## Visualization 3
In my final chart, I display profit, sales, and profit margin across different categories and sub-categories on a bar chart (I offer a toggle to switch between each value type, as well as one to switch between years). It was interesting to note that certain products, such as tables, displayed high sales but exceptionally low profits. This trend seemed to carry across the furniture category as a whole. 

To view directly on Tableu, click here: https://public.tableau.com/app/profile/brendan.berkman/viz/CategoryViz_Superstore/Categories1.


# Machine Learning

All machine learning work can be found in the [Superstore_ML.ipynb](./Superstore_ML.ipynb) file. 

Prior to running the data through any models, I analyzed different sections of the dataset to consider which data would serve me best, and what changes I'd have to make to the dataset itself. While I discuss my thought process throughout the ipynb file, I'll also include a brief description here. I first looked at general info about the data (such as total null and unique values per column), then used PandasProfiling to gain more insights about the dataset as a whole (means, correlations, ranges, etc). I then checked for differences within non-numeric categories such as segment, category, and region. Following that, I looked for outliers, and found that the "Sales" column was significantly skewed to the right. As a result, I replaced outliers with the median before modeling the data. 

To predict future sales, I used three models: linear regression, ridge, and random forrest regression. Before doing any of this, I had to create dummy variables for each non-numeric column (including dates). I found that the random forrest reggrion performed best, with a Mean Absolute Error of 18.98, a Mean Squared Error of 8899.55, and an accuracy score of 87.76 percent found through cross validation. 
