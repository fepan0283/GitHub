import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import statsmodels.api as sm
import seaborn as sns
sns.set()
data = pd.read_csv('1.01. Simple linear regression.csv')
# data.describe()
# y = data['GPA']
# x1 = data['SAT']

# plt.scatter(x1,y)
# plt.xlabel('SAT', fontsize=20)
# plt.ylabel('GPA', fontsize=20)
# plt.show()

# x = sm.add_constant(x1)
# results = sm.OLS(y,x).fit()
# results.summary()

print(data)