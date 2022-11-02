var appKey = 'hc_use';

var qtitle = {
    "Disability status": "Percentage of disability status for adults aged 18 and over (95% confidence intervals), United States, ",

    "Six or more workdays missed due to illness, injury, or disability": "Percentage of six or more workdays missed due to health in the past 12 months for adults aged 18 and over (95% confidence intervals), United States, ",

    "Asthma episode": "Percentage of asthma episode in the past 12 months for adults aged 18 and over (95% confidence intervals), United States, ",

    "Diagnosed hypertension": "Percentage of diagnosed hypertension in the past 12 months for adults aged 18 and over (95% confidence intervals), United States, ",

    "Regularly experienced chronic pain": "Percentage of regularly experienced chronic  pain for adults aged 18 and over (95% confidence intervals), United States, ",

    "Regularly had feelings of worry, nervousness, or anxiety": "Percentage of regularly had feelings of worry, nervousness, or anxiety for adults aged 18 and over (95% confidence intervals), United States, ",

    "Regularly had feelings of depression": "Percentage of regularly had feelings of depression for adults aged 18 and over (95% confidence intervals), United States, ",

    "Counseled by a mental health professional": "Percentage of mental health counseling in the past 12 months for adults aged 18 and over (95% confidence intervals), United States, ",

    "Dental exam or cleaning": "Percentage of dental exam or cleaning in the past 12 months for adults aged 18 and over (95% confidence intervals), United States, ",

    "Blood pressure check": "Percentage of blood pressure check in the past 12 months for adults aged 18 and over (95% confidence intervals), United States, ",

    "Receipt of influenza vaccination": "Percentage of receipt of influenza vaccination in the past 12 months for adults aged 18 and over (95% confidence intervals), United States , ",

    "Doctor visit": "Percentage of doctor visit in the past 12 months for adults aged 18 and over (95% confidence intervals), United States, ",

    "Hospital emergency department visit": "Percentage of hospital emergency department visit in the past 12 months for adults aged 18 and over (95% confidence intervals), United States, ",

    "Did not get needed medical care due to cost": "Percentage of adults aged 18 and over who did not get needed medical care due to cost in the past 12 months (95% confidence intervals), United States, ",

    "Did not get needed mental health care due to cost": "Percentage of adults aged 18 and over who did not get needed mental health care due to cost in the past 12 months (95% confidence intervals), United States, ",

    "Did not take medication as prescribed to save money": "Percentage of adults aged 18 and over who did not take medication as prescribed to reduce costs in the past 12 months (95% confidence intervals), United States, ",

    "Current cigarette smoking": "Percentage of current cigarette smoking for adults aged 18 and over (95% confidence intervals), United States, ",

    "Current electronic cigarette use": "Percentage of current electronic cigarette use for adults aged 18 and over (95% confidence intervals), United States, ",

    "Uninsured at time of interview: Adults aged 18-64": "Percentage of being uninsured at the time of interview for adults aged 18-64 (95% confidence intervals), United States, ",
    "Private health insurance coverage at time of interview: Adults aged 18-64": "Percentage of having private health insurance coverage at time of interview for adults aged 18-64 (95% confidence intervals), United States, ",
    "Public health plan coverage at time of interview: Adults aged 18-64": "Percentage of having public health plan coverage at time of interview for adults aged 18-64 (95% confidence intervals), United States, ",
    "Exchange-based health plan coverage at time of interview: Adults aged 18-64": "Percentage of having exchange-based health insurance coverage at time of interview for adults aged 18-64 (95% confidence intervals), United States, ",
};

var mepsNotes = {
    "totEVT": "\n<h4>Utilization<\/h4>\nEvents include all dental visits, prescribed medicine purchases, office-based and outpatient visits, emergency room visits, inpatient stays, and home health events. A <i>home health event<\/i> is defined as one month during which home health service was received. <i>Other medical equipment and services<\/i> are not included in utilization estimates because information for these events is collected per interview (e.g. eyeglasses) or per year (e.g. wheelchairs, hearing aids) for each person, rather than on a per-purchase basis.\n", "meanEVT": "\n<h4>Utilization<\/h4>\nEvents include all dental visits, prescribed medicine purchases, office-based and outpatient visits, emergency room visits, inpatient stays, and home health events. A <i>home health event<\/i> is defined as one month during which home health service was received. <i>Other medical equipment and services<\/i> are not included in utilization estimates because information for these events is collected per interview (e.g. eyeglasses) or per year (e.g. wheelchairs, hearing aids) for each person, rather than on a per-purchase basis.\n", "avgEVT": "\n<h4>Utilization<\/h4>\nEvents include all dental visits, prescribed medicine purchases, office-based and outpatient visits, emergency room visits, inpatient stays, and home health events. A <i>home health event<\/i> is defined as one month during which home health service was received. <i>Other medical equipment and services<\/i> are not included in utilization estimates because information for these events is collected per interview (e.g. eyeglasses) or per year (e.g. wheelchairs, hearing aids) for each person, rather than on a per-purchase basis.\n", "totEXP": "\n<h4>Expenditures<\/h4>\nExpenditures include payments for medical events reported during the calendar year. Expenditures in MEPS are defined as the sum of direct payments for care provided during the year, including out-of-pocket payments and payments by private insurance, Medicaid, Medicare, and other sources. Payments for over-the-counter drugs and phone contacts with medical providers are not included in MEPS total expenditure estimates. Indirect payments not related to specific medical events, such as Medicaid Disproportionate Share and Medicare Direct Medical Education subsidies, also are not included. Any charges associated with uncollected liability, bad debt, and charitable care (unless provided by a public clinic or hospital) are not counted as expenditures.\n", "meanEXP": "\n<h4>Expenditures<\/h4>\nExpenditures include payments for medical events reported during the calendar year. Expenditures in MEPS are defined as the sum of direct payments for care provided during the year, including out-of-pocket payments and payments by private insurance, Medicaid, Medicare, and other sources. Payments for over-the-counter drugs and phone contacts with medical providers are not included in MEPS total expenditure estimates. Indirect payments not related to specific medical events, such as Medicaid Disproportionate Share and Medicare Direct Medical Education subsidies, also are not included. Any charges associated with uncollected liability, bad debt, and charitable care (unless provided by a public clinic or hospital) are not counted as expenditures.\n", "meanEXP0": "\n<h4>Expenditures<\/h4>\nExpenditures include payments for medical events reported during the calendar year. Expenditures in MEPS are defined as the sum of direct payments for care provided during the year, including out-of-pocket payments and payments by private insurance, Medicaid, Medicare, and other sources. Payments for over-the-counter drugs and phone contacts with medical providers are not included in MEPS total expenditure estimates. Indirect payments not related to specific medical events, such as Medicaid Disproportionate Share and Medicare Direct Medical Education subsidies, also are not included. Any charges associated with uncollected liability, bad debt, and charitable care (unless provided by a public clinic or hospital) are not counted as expenditures.\n", "medEXP": "\n<h4>Expenditures<\/h4>\nExpenditures include payments for medical events reported during the calendar year. Expenditures in MEPS are defined as the sum of direct payments for care provided during the year, including out-of-pocket payments and payments by private insurance, Medicaid, Medicare, and other sources. Payments for over-the-counter drugs and phone contacts with medical providers are not included in MEPS total expenditure estimates. Indirect payments not related to specific medical events, such as Medicaid Disproportionate Share and Medicare Direct Medical Education subsidies, also are not included. Any charges associated with uncollected liability, bad debt, and charitable care (unless provided by a public clinic or hospital) are not counted as expenditures.\n <p>\nThe median and standard error estimates in this table were produced by the R Programming Language (version 3.3.3). Median and corresponding standard errors produced by different programming languages may differ slightly, due to varying methods for calculating medians and standard errors for survey data.\n<\/p>", "event": "\n<h4>Event type<\/h4>\n<ul>\n<li>\n  <i>Physician office visits<\/i> and <i>Non-physician office visits<\/i> are sub-categories of <i>Office-based events<\/i>.\n<\/li>\n<li>  \n  <i>Physician hosp. visits<\/i> and <i>Non-physician hosp. visits<\/i> are sub-categories of <i>Outpatient events<\/i>.\n<\/li>\n<li>A <i>home health event<\/i> is defined as one month during which home health service was received.<\/li>\n<li>For <i>prescription medicines<\/i>, an event is defined as a purchase or refill.<\/li>\n<li>\n  <i>Other medical equipment and services<\/i> are expenses for medical equipment such as eyeglasses, hearing aids, or wheelchairs.\n<\/li>\n<\/ul>\n",
    "msa": "\n<h4>Place of residence<\/h4>\nMSA is metropolitan statistical area. Large MSAs have a population size of 1 million or more; small MSAs have a population size of less than 1 million. \"Not in MSA\" consists of persons not living in a metropolitan statistical area.\n",
    "agegrps": "\n<h4>Age groups<\/h4>\nMore information on the questions and variables used for this measure can be found in the\n<a\n href=\"notes\\stub\\AGEP_A.pdf\" target=\"_blank_\">adult codebook. <\/a><\/p>\n",
    "sex": "\n<h4>Sex<\/h4>\n<p>More information on the questions and variables used for this measure can be found in the\n<a\n href=\"notes\\stub\\SEX_A.pdf\" target=\"_blank_\">adult codebook. <\/a><\/p>\n",
    "region": "\n<h4>Region<\/h4>\nIn the geographic classification of the U.S. population, states are grouped into four regions used by the U.S. Census Bureau.\n<ul>\n  <li><i>Northeast:<\/i> Maine, New Hampshire, Vermont, Massachusetts, Rhode Island, Connecticut, New York, New Jersey, and Pennsylvania.<\/li>\n\n  <li><i>Midwest:<\/i> Ohio, Indiana, Illinois, Michigan, Wisconsin, Minnesota, Iowa, Missouri, North Dakota, South Dakota, Nebraska, and Kansas.<\/li>\n\n  <li><i>South:<\/i><\/i> Delaware, Maryland, District of Columbia, Virginia, West Virginia, North Carolina, South Carolina, Georgia, Florida, Kentucky, Tennessee, Alabama, Mississippi, Arkansas, Louisiana, Oklahoma, and Texas.<\/li>\n\n  <li><i>West:<\/i> Montana, Idaho, Wyoming, Colorado, New Mexico, Arizona, Utah, Nevada, Washington, Oregon, California, Alaska, and Hawaii.<\/li>\n<\/ul> More information on the questions and variables used for this measure can be found in the\n<a\n href=\"notes\\stub\\REGION.pdf\" target=\"_blank_\">adult codebook. <\/a>\n",
    "education": "\n<h4>Education<\/h4>\nShown only for adults aged 25 and over. More information on the questions and variables used for this measure can be found in the\n<a\n href=\"notes\\stub\\EDUC_A.pdf\" target=\"_blank_\">adult codebook. <\/a>\n",

    "employed": "\n<h4>Employment status<\/h4>\n\"Full-time\" employment is 35 or more hours per week. \"Part-time\" employment is 34 or fewer hours per week.\n", "insurance_65over": "\n<h4>Health insurance coverage: 65 and over<\/h4>\nBased on a hierarchy of mutually exclusive categories. Adults with more than one type of health insurance were assigned to the first appropriate category in the hierarchy. \"Uninsured\" includes adults who had no coverage as well as those who had only Indian Health Service coverage or had only a private plan that paid for one type of service such as accidents or dental care.\n", "insurance_Under65": "\n<h4>Health insurance coverage: Under 65<\/h4>\n<ul>\n<li><i>Uninsured:<\/i>\nBased on a hierarchy of mutually exclusive categories. Adults with more than one type of health insurance were assigned to the first appropriate category in the hierarchy. \"Uninsured\" includes adults who had no coverage as well as those who had only Indian Health Service coverage or had only a private plan that paid for one type of service such as accidents or dental care.\n<\/li>\n\n<li><i>Any private:<\/i>\nIndividuals classified as having any private health insurance coverage had private insurance that provided coverage for hospital and physician care (including Medigap coverage and TRICARE) at some point during the year.<\/li>\n\n<li><i>Public only:<\/i>\nIndividuals are considered to have public only health insurance coverage if they were not covered by private insurance or TRICARE and they were covered by Medicare, Medicaid, or other public hospital and physician coverage at some point during the year.<\/li>\n\n<li><i>65+, No Medicare:<\/i>\nIndividuals classified as <i>65+, No Medicare<\/i> either had private coverage at some point during the year that is not identified as Medigap coverage or were uninsured throughout the year.<\/li>\n<\/ul>\n", "insurance": "\n<h4>Health insurance coverage<\/h4>\nBased on a hierarchy of mutually exclusive categories. Children with more than one type of health insurance were assigned to the first appropriate category in the hierarchy. \"Uninsured\" includes children who had no coverage as well as those who had only Indian Health Service coverage or had only a private plan that paid for one type of service such as accidents or dental care.\n", "poverty": "\n<h4>Poverty status<\/h4>\nPoor children live in families defined as below the poverty threshold. \"Near poor\" children live in families with incomes of 100% to less than 200% of the poverty threshold. \"Not poor\" children live in families with incomes that are 200% of the poverty threshold or greater.\n",
    "hisprace": "\n<h4>Hispanic or Latino origin and race<\/h4>\n<p>Refers to adults who are of Hispanic or Latino origin and may be of any race or combination of races. \"Not Hispanic or Latino\" refers to adults who are not of Hispanic or Latino origin, regardless of race. More information on the questions and variables used for this measure can be found in the\n<a\n href=\"notes\\stub\\RACEETH.pdf\" target=\"_blank_\">adult codebook. <\/a><\/p>\n",
    "family": "\n<h4>Family structure<\/h4>\n<p>Refers to parents living in the household. \"Mother and father\" can include biological, adoptive, step, in-law, or foster relationships. Legal guardians are classified in \"Neither mother nor father.\"<\/p>\n", "income": "\n<h4>Family income<\/h4>\n<p>Includes children in families that reported either dollar amounts or would not provide a dollar amount but provided an income interval.<\/p>\n", "race": "\n<h4>Race<\/h4>\n<p>\"Single race\"  indicates only a single race group, including children of Hispanic or Latino origin. Children who are more than one race group may also include those of Hispanic or Latino origin. Only two combinations of multiple race groups are shown due to small sample sizes for other combinations.<\/p>\n"
};

var qmepsNotes = {
    "Disability status": "\n<h4>Disability status<\/h4>\n<p>Disability is defined by the reported level of difficulty (no difficulty, some difficulty, a lot of difficulty, or cannot do at all) in six functioning domains: seeing (even if wearing glasses), hearing (even if wearing hearing aids), mobility (walking or climbing stairs), communication (understanding or being understood by others), cognition (remembering or concentrating), and self-care (such as washing all over or dressing). Adults who responded \"a lot of difficulty\" or \"cannot do at all\" to at least one question were considered to have a disability. More information on the questions and variables used for this measure can be found in the\n<a\n href=\"notes\\DISABLED2.pdf\" target=\"_blank_\">adult codebook. <\/a>\<\/p>\n",

    "Six or more workdays missed due to illness, injury, or disability": "\n<h4>Six or more workdays missed due to illness, injury, or disability<\/h4>\n<p>Six or more workdays missed due to illness, injury, or disability in the past 12 months is defined as a report of six or more workdays missed due to illness, injury, or disability by adults who a) worked for pay in the week prior to the interview, b) had a job or business in the week prior to the interview, but were temporarily absent, c) had seasonal or contract work, d) worked at a job or business but not for pay, or e) were not currently working but had some period of employment in the past 12 months. (Note that from 2021, this definition only includes seasonal or contract workers who indicated they worked in the past 12 months rather than all seasonal or contract workers). More information on the questions and variables used for this measure can be found in the\n<a\n href=\"notes\\EMPMSS6DYS.pdf\" target=\"_blank_\">adult codebook. <\/a>\<\/p>\n",

    "Asthma episode": "\n<h4>Asthma episode <\/h4>\n<p>Adults were asked if they had ever been told by a doctor or other health professional that they had asthma. Adults who had been told they had asthma were asked if they had an episode of asthma or an asthma attack during the past 12 months. More information on the questions and variables used for this measure can be found in the\n<a\n href=\"notes\\ASAT12M_R_A.pdf\" target=\"_blank_\">adult codebook. <\/a>\<\/p>\n",

    "Diagnosed hypertension": "\n<h4>Diagnosed hypertension <\/h4>\n<p>Diagnosed hypertension is defined as report of hypertension or high blood pressure in the past 12 months or any medication use prescribed by a doctor for high blood pressure among adults. More information on the questions and variables used for this measure can be found in the\n<a\n href=\"notes\\HYP_R_A.pdf\" target=\"_blank_\">adult codebook. <\/a>\<\/p>\n",

    "Regularly experienced chronic pain": "\n<h4>Regularly experienced chronic pain<\/h4>\n<p>Regularly experienced chronic pain is defined as report of having pain on most days or every day during the past 3 months. More information on the questions and variables used for this measure can be found in the\n<a\n href=\"notes\\PAFRQ3M_R_A.pdf\" target=\"_blank_\">adult codebook. <\/a>\<\/p>\n",

    "Regularly had feelings of worry, nervousness, or anxiety": "\n<h4>Regularly had feelings of worry, nervousness, or anxiety <\/h4>\n<p>Regularly had feelings of worry, nervousness, or anxiety is defined as report of a) feeling worried, nervous, or anxious daily and describing the level of those feelings as \"somewhere in between a little and a lot\" or \"a lot\" or b) feeling worried, nervous, or anxious weekly and describing the level of those feelings as \"a lot.\" More information on the questions and variables used for this measure can be found in the\n<a\n href=\"notes\\ANX_R_A.pdf\" target=\"_blank_\">adult codebook. <\/a>\<\/p>\n",

    "Regularly had feelings of depression": "\n<h4>Regularly had feelings of depression<\/h4>\n<p>Regularly had feelings of depression is defined as report of a) feeling depressed daily and describing the level of depression as \"somewhere in between a little and a lot\" or \"a lot\" or b) feeling depressed weekly and describing the level of depression as \"a lot.\" More information on the questions and variables used for this measure can be found in the\n<a\n href=\"notes\\DEP_R_A.pdf\" target=\"_blank_\">adult codebook. <\/a>\<\/p>\n",


    "Counseled by a mental health professional": "\n<h4>Counseled by a mental health professional<\/h4>\n<p>Adults were asked if they received counseling or therapy from a mental health professional such as a psychiatrist, psychologist, psychiatric nurse, or clinical social worker in the past 12 months. More information on the questions and variables used for this measure can be found in the\n<a\n href=\"notes\\MHTHRPY_R_A.pdf\" target=\"_blank_\">adult codebook. <\/a>\<\/p>\n",

    "Dental exam or cleaning": "\n<h4>Dental exam or cleaning<\/h4>\n<p>Adults were asked about how long it had been since they last had a dental examination or cleaning. More information on the questions and variables used for this measure can be found in the\n<a\n href=\"notes\\DENPREV_R_A.pdf\" target=\"_blank_\">adult codebook. <\/a>\<\/p>\n",

    "Blood pressure check": "\n<h4>Blood pressure check <\/h4>\n<p>Adults were asked when was the last time they had their blood pressure checked by a doctor, nurse, or other health professional. More information on the questions and variables used for this measure can be found in the\n<a\n href=\"notes\\BPLAST_R_A.pdf\" target=\"_blank_\">adult codebook. <\/a>\<\/p>\n",

    "Receipt of influenza vaccination": "\n<h4>Receipt of influenza vaccination<\/h4>\n<p>Receipt of a flu vaccination is defined by report of having received a vaccination in the past 12 months as opposed to during a flu season. Prevalence of influenza vaccination during the past 12 months is different from season-specific coverage. More information on the questions and variables used for this measure can be found in the\n<a\n href=\"notes\\SHFL12M_R_A.pdf\" target=\"_blank_\">adult codebook. <\/a>\<\/p>\n",

    "Doctor visit": "\n<h4>Doctor visit <\/h4>\n<p>Adults were asked about how long it had been since they last saw a doctor or other health professional about their health. More information on the questions and variables used for this measure can be found in the\n<a\n href=\"notes\\LASTDR_R_A.pdf\" target=\"_blank_\">adult codebook. <\/a>\<\/p>\n",

    "Hospital emergency department visit": "\n<h4>Hospital emergency department visit<\/h4>\n<p>Adults were asked how many times they had gone to a hospital emergency room about their health in the past 12 months. More information on the questions and variables used for this measure can be found in the\n<a\n href=\"notes\\EMER12M_R_A.pdf\" target=\"_blank_\">adult codebook. <\/a>\<\/p>\n",


    "Did not get needed medical care due to cost": "\n<h4>Did not get needed medical care due to cost<\/h4>\n<p>Adults were asked if there was any time when they did not get needed medical care because of the cost during the past 12 months. More information on the questions and variables used for this measure can be found in the\n<a\n href=\"notes\\MDNG12M_R_A.pdf\" target=\"_blank_\">adult codebook. <\/a>\<\/p>\n",

    "Did not get needed mental health care due to cost": "\n<h4>Did not get needed mental health care due to cost<\/h4>\n<p>Adults were asked if there was any time when they did not get needed counseling or therapy from a mental health professional because of the cost during the past 12 months. More information on the questions and variables used for this measure can be found in the\n<a\n href=\"notes\\MHTHND_R_A.pdf\" target=\"_blank_\">adult codebook. <\/a>\<\/p>\n",

    "Did not take medication as prescribed to save money": "\n<h4>Did not take medication as prescribed to save money<\/h4>\n<p>Did not take medication as prescribed to save money in the past 12 months is defined as report of skipped medication doses to save money, taking less medication to save money, or delayed filling of a prescription to save money. More information on the questions and variables used for this measure can be found in the\n<a\n href=\"notes\\RXNA12M_R_A.pdf\" target=\"_blank_\">adult codebook. <\/a>\<\/p>\n",



    "Current cigarette smoking": "\n<h4>Current cigarette smoking<\/h4>\n<p>Current cigarette smoking is defined as report of smoking at least 100 cigarettes in a lifetime and now smoking every day or some days. More information on the questions and variables used for this measure can be found in the\n<a\n href=\"notes\\SMKCUR_R_A.pdf\" target=\"_blank_\">adult codebook. <\/a>\<\/p>\n",

    "Current electronic cigarette use": "\n<h4>Current electronic cigarette use<\/h4>\n<p>Current electronic cigarette use is defined as report of use of an electronic cigarette or other electronic vaping product (even just once in a lifetime) and current use every day or some days. More information on the questions and variables used for this measure can be found in the\n<a\n href=\"notes\\ECIGCUR_R_A.pdf\" target=\"_blank_\">adult codebook. <\/a>\<\/p>\n",

    "Uninsured at time of interview: Adults aged 18-64": "\n<h4>Uninsured at time of interview: Adults aged 18-64<\/h4>\n<p>A person was defined as uninsured if they did not have any private health insurance, Medicare, Medicaid, Children's Health Insurance Program (CHIP), state-sponsored or other government-sponsored health plan, or military plan. A person was also defined as uninsured if they had only Indian Health Service coverage or had only a private plan that paid for one type of service, such as dental or vision care. This measure is limited to adults aged 18-64 as almost all adults aged 65 and over are eligible for Medicare. More information on the questions and variables used for this measure can be found in the\n<a\n href=\"notes\\UNINSURED.pdf\" target=\"_blank_\">adult codebook. <\/a>\<\/p>\n",
    "Private health insurance coverage at time of interview: Adults aged 18-64": "\n<h4>Private health insurance coverage at time of interview: Adults aged 18-64<\/h4>\n<p>Private health insurance coverage includes any comprehensive private insurance plan (including health maintenance and preferred provider organizations). These plans include those obtained through an employer, purchased directly, purchased through local or community programs, or purchased through the Health Insurance Marketplace or a state-based exchange. Private coverage excludes plans that pay for only one type of service, such as dental or vision care. A small number of persons (2-3%) were covered by both public and private plans and were included in both categories. This measure is limited to adults aged 18-64 as almost all adults aged 65 and over are eligible for Medicare. More information on the questions and variables used for this measure can be found in the\n<a\n href=\"notes\\PRICOV.pdf\" target=\"_blank_\">adult codebook. <\/a>\<\/p>\n",
    "Public health plan coverage at time of interview: Adults aged 18-64": "\n<h4>Public health plan coverage at time of interview: Adults aged 18-64<\/h4>\n<p>Public health plan coverage includes Medicaid, Children's Health Insurance Program (CHIP), state-sponsored or other government-sponsored health plan, Medicare, and military plans. A small number of persons (2-3%) were covered by both public and private plans and were included in both categories. This measure is limited to adults aged 18-64 as almost all adults aged 65 and over are eligible for Medicare. More information on the questions and variables used for this measure can be found in the\n<a\n href=\"notes\\PUBCOV.pdf\" target=\"_blank_\">adult codebook. <\/a>\<\/p>\n",
    "Uninsured for more than one year: Adults aged 18-64": "\n<h4>Uninsured for more than one year: Adults aged 18-64<\/h4>\n<p>A person was defined as uninsured if they did not have any private health insurance, Medicare, Medicaid, Children's Health Insurance Program (CHIP), state-sponsored or other government-sponsored health plan, or military plan. A person was also defined as uninsured if they had only Indian Health Service coverage or had only a private plan that paid for one type of service, such as dental or vision care. \"Year\" is defined as the 12 months prior to interview. This measure is limited to adults aged 18-64 as almost all adults aged 65 and over are eligible for Medicare. More information on the questions and variables used for this measure can be found in the\n<a\n href=\"notes\\UNSMORY.pdf\" target=\"_blank_\">adult codebook. <\/a>\<\/p>\n",
    "Uninsured for at least part of the past year: Adults aged 18-64": "\n<h4>Uninsured for at least part of the past year: Adults aged 18-64<\/h4>\n<p>A person was defined as uninsured if they did not have any private health insurance, Medicare, Medicaid, Children's Health Insurance Program (CHIP), state-sponsored or other government-sponsored health plan, or military plan. A person was also defined as uninsured if they had only Indian Health Service coverage or had only a private plan that paid for one type of service, such as dental or vision care. \"Year\" is defined as the 12 months prior to interview. This measure is limited to adults aged 18-64 as almost all adults aged 65 and over are eligible for Medicare. This measure is limited to adults aged 18-64 as almost all adults aged 65 and over are eligible for Medicare. More information on the questions and variables used for this measure can be found in the\n<a\n href=\"notes\\ANYPER.pdf\" target=\"_blank_\">adult codebook. <\/a>\<\/p>\n",
    "Exchange-based health plan coverage at time of interview: Adults aged 18-64": "\n<h4>Exchange-based health plan coverage at time of interview: Adults aged 18-64<\/h4>\n<p>Exchange-based coverage is a private health insurance plan purchased through the Health Insurance Marketplace or state-based exchanges that were established as part of the Affordable Care Act of 2010 (P.L. 111-148, P.L. 111-152). More information on the questions and variables used for this measure can be found in the\n<a\n href=\"notes\\EXCHANGE_A.pdf\" target=\"_blank_\">adult codebook. <\/a>\<\/p>\n",
};