var isPivot = false; var initCols = [
                        { title: "Year", className: "sub", "visible": false},
                        { title: "row_var", className: "sub", "visible": false},
                        { title: "rowLevels" , className: "main"},
                        { title: "rowLevNum" , className: "sub", "visible": false},
                        { title: "selected",   className: "sub", "visible" : false},
                        
                    {title: "", className: "coef", searchable: false, render: coefDisplay},

                  {title: "", className: "se", searchable: false, render: seDisplay},

                    {title: "", className: "coef", searchable: false, render: coefDisplay},

                  {title: "", className: "se", searchable: false, render: seDisplay},

                    {title: "", className: "coef", searchable: false, render: coefDisplay},

                  {title: "", className: "se", searchable: false, render: seDisplay},

                    {title: "", className: "coef", searchable: false, render: coefDisplay},

                  {title: "", className: "se", searchable: false, render: seDisplay},

                    {title: "", className: "coef", searchable: false, render: coefDisplay},

                  {title: "", className: "se", searchable: false, render: seDisplay},

                    {title: "", className: "coef", searchable: false, render: coefDisplay},

                  {title: "", className: "se", searchable: false, render: seDisplay},

                    {title: "", className: "coef", searchable: false, render: coefDisplay},

                  {title: "", className: "se", searchable: false, render: seDisplay},

                    {title: "", className: "coef", searchable: false, render: coefDisplay},

                  {title: "", className: "se", searchable: false, render: seDisplay},

                    {title: "", className: "coef", searchable: false, render: coefDisplay},

                  {title: "", className: "se", searchable: false, render: seDisplay},

                    {title: "", className: "coef", searchable: false, render: coefDisplay},

                  {title: "", className: "se", searchable: false, render: seDisplay},

                    {title: "", className: "coef", searchable: false, render: coefDisplay},

                  {title: "", className: "se", searchable: false, render: seDisplay},

                    {title: "", className: "coef", searchable: false, render: coefDisplay},

                  {title: "", className: "se", searchable: false, render: seDisplay},

                    {title: "", className: "coef", searchable: false, render: coefDisplay},

                  {title: "", className: "se", searchable: false, render: seDisplay},

                    {title: "", className: "coef", searchable: false, render: coefDisplay},

                  {title: "", className: "se", searchable: false, render: seDisplay},

                    {title: "", className: "coef", searchable: false, render: coefDisplay},

                  {title: "", className: "se", searchable: false, render: seDisplay},

                    {title: "", className: "coef", searchable: false, render: coefDisplay},

                  {title: "", className: "se", searchable: false, render: seDisplay},

                    {title: "", className: "coef", searchable: false, render: coefDisplay},

                  {title: "", className: "se", searchable: false, render: seDisplay},

                    {title: "", className: "coef", searchable: false, render: coefDisplay},

                  {title: "", className: "se", searchable: false, render: seDisplay},

                    {title: "", className: "coef", searchable: false, render: coefDisplay},

                  {title: "", className: "se", searchable: false, render: seDisplay},

                    {title: "", className: "coef", searchable: false, render: coefDisplay},

                  {title: "", className: "se", searchable: false, render: seDisplay},

                    {title: "", className: "coef", searchable: false, render: coefDisplay},

                  {title: "", className: "se", searchable: false, render: seDisplay},

                    {title: "", className: "coef", searchable: false, render: coefDisplay},

                  {title: "", className: "se", searchable: false, render: seDisplay},

                    {title: "", className: "coef", searchable: false, render: coefDisplay},

                  {title: "", className: "se", searchable: false, render: seDisplay},

                    {title: "", className: "coef", searchable: false, render: coefDisplay},

                  {title: "", className: "se", searchable: false, render: seDisplay},

                    {title: "", className: "coef", searchable: false, render: coefDisplay},

                  {title: "", className: "se", searchable: false, render: seDisplay},

                    {title: "", className: "coef", searchable: false, render: coefDisplay},

                  {title: "", className: "se", searchable: false, render: seDisplay},

                    {title: "", className: "coef", searchable: false, render: coefDisplay},

                  {title: "", className: "se", searchable: false, render: seDisplay},

                    {title: "", className: "coef", searchable: false, render: coefDisplay},

                  {title: "", className: "se", searchable: false, render: seDisplay},

                    {title: "", className: "coef", searchable: false, render: coefDisplay},

                  {title: "", className: "se", searchable: false, render: seDisplay},

                    {title: "", className: "coef", searchable: false, render: coefDisplay},

                  {title: "", className: "se", searchable: false, render: seDisplay},

                    {title: "", className: "coef", searchable: false, render: coefDisplay},

                  {title: "", className: "se", searchable: false, render: seDisplay},

                    {title: "", className: "coef", searchable: false, render: coefDisplay},

                  {title: "", className: "se", searchable: false, render: seDisplay},

                    {title: "", className: "coef", searchable: false, render: coefDisplay},

                  {title: "", className: "se", searchable: false, render: seDisplay},

                    {title: "", className: "coef", searchable: false, render: coefDisplay},

                  {title: "", className: "se", searchable: false, render: seDisplay},

                    {title: "", className: "coef", searchable: false, render: coefDisplay},

                  {title: "", className: "se", searchable: false, render: seDisplay},

                    {title: "", className: "coef", searchable: false, render: coefDisplay},

                  {title: "", className: "se", searchable: false, render: seDisplay},

                    {title: "", className: "coef", searchable: false, render: coefDisplay},

                  {title: "", className: "se", searchable: false, render: seDisplay}]; var initLevels = {"agegrps":{"agegrpsA":"0-4 years","agegrpsB":"5-11 years","agegrpsC":"12-17 years","agegrpsD":"3-4 years","agegrpsE":"2-4 years"},"education":{"educationA":"Less than high school diploma","educationB":"High school diploma or GED","educationC":"More than high school","educationD":"High school diploma or GED7"},"family":{"familyA":"Mother and father","familyB":"Mother, no father","familyC":"Father, no mother","familyD":"Neither mother nor father"},"hisprace":{"hispraceA":"Hispanic or Latino","hispraceB":"Mexican or Mexican American","hispraceC":"Not Hispanic or Latino","hispraceD":"White, single race","hispraceE":"Black or African American only, single race"},"income":{"incomeA":"Less than $35,000","incomeB":"$35,000 or more","incomeC":"$35,000-$49,999","incomeD":"$50,000-$74,999","incomeE":"$75,000-$99,999","incomeF":"$100,000 or more"},"insurance":{"insuranceA":"Private","insuranceB":"Medicaid or other public","insuranceC":"Other","insuranceD":"Uninsured"},"msa":{"msaA":"Large MSA","msaB":"Small MSA","msaC":"Not in MSA"},"poverty":{"povertyA":"Poor","povertyB":"Near poor","povertyC":"Not poor"},"race":{"raceA":"One race","raceB":"White","raceC":"Black or African American","raceD":"American Indian or Alaska Native","raceE":"Asian","raceF":"Native Hawaiian or Other Pacific Islander","raceG":"Two or more races","raceH":"Black or African American and white","raceI":"American Indian or Alaska Native and white"},"region":{"regionA":"Northeast","regionB":"Midwest","regionC":"South","regionD":"West"},"sex":{"sexA":"Male","sexB":"Female"}}; var subLevels = ["Physician office visits","Non-physician office visits","Physician hosp. visits","Non-physician hosp. visits"];
