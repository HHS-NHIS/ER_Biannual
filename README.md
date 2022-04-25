# Early Release tables

This repository contains the code needed to create the interactive **Early Release (ER) tables**
The code is provided for researchers and developers interested in creating similar interactive tables, or in customizing the SHS summary tables for personal use.



To run the tables on your local computer, first [download and install RStudio](https://www.rstudio.com/products/rstudio/download/). Then, install and load the Shiny package using the following code:
```
install.packages("shiny")
library(shiny)
```

Next, open the R programs from the [apps](apps) folder in RStudio, highlight the code and click **Run** or **Run App** (if available).
 Only one Shiny program can be run at a time in RStudio. Note that local links in the navigation bar will not work as expected when using Shiny to run the tables (an external server is needed).



## Survey background
The National Health Interview Survey (NHIS) is the principal source of information on the health of the civilian noninstitutionalized population of the United States and is one of the major data collection programs of the National Center for Health Statistics (NCHS) which is part of the Centers for Disease Control and Prevention (CDC). The National Health Survey Act of 1956 provided for a continuing survey and special studies to secure accurate and current statistical information on the amount, distribution, and effects of illness and disability in the United States and the services rendered for or because of such conditions. The survey referred to in the Act, now called the National Health Interview Survey, was initiated in July 1957. Since 1960, the survey has been conducted by NCHS, which was formed when the National Health Survey and the National Vital Statistics Division were combined.
## Public Domain Disclaimer

The **NHIS Early Release Tables** application is a U.S. Government work developed by the National Center for Health Statistics (NCHS).
This application is in the public domain and may be used, reproduced, modified, built upon and distributed in the United States without further permission from NCHS.
Reproduction and distribution for a fee is prohibited.  This application was built based on the template provided by AHRQ's **MEPS summary tables** application (https://meps.ahrq.gov/mepstrends/home/index.html).  It is requested that in any subsequent use AHRQ and/or NCHS be given appropriate acknowledgment.
The use of the HHS or NCHS seal or logo without prior written authorization is expressly prohibited by law.  Although these data have been processed successfully on a computer system at NCHS,
 no warranty expressed or implied is made regarding the accuracy or utility of the data on any other system or for general or scientific purposes, nor shall the act of distribution constitute any such warranty.
NCHS has relinquished control of the information and no longer has responsibility to protect the integrity, confidentiality or availability of the information.  Any reference to specific commercial products, processes, or services by service mark, trademark, manufacturer, or otherwise, does not constitute or imply their endorsement, recommendation or favoring by NCHS.
NCHS reserves the right to assert copyright protection internationally.
