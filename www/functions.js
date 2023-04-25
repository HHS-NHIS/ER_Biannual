// Table of Contents:
   //
   // Basic math -----------------------------------------------------------------
   // Quarterly date converters --------------------------------------------------
   // Index selectors ------------------------------------------------------------
   // Data manipulation ----------------------------------------------------------
   // DOM interaction ------------------------------------------------------------
   // Formatting -----------------------------------------------------------------
   //   Table formatting
 //   Plot formatting
 //   Code formatting
 // Download files--------------------------------------------------------------
   // Plotly ---------------------------------------------------------------------
   // Polyfill -------------------------------------------------------------------
   
   
   // Basic math -----------------------------------------------------------------
   
   function sum(array) {
     var total = 0;
     for (var i=0; i<array.length; i++) {
       total += array[i];
     }
     return total;
   }




function mean(array) {
   var arraySum = sum(array);
   return arraySum / array.length;
 }




// Quarterly date convertors -------------------------------------------------  
   // Function to convert quarterly strings to numbers 
 function qtr_to_num(str) {  
   str2 = str.replace(", Jan-Jun",".0")  
   .replace(", Jul-Dec",".5");  
  // .replace(" Q3, Jul-Sep",".5")  
  // .replace(" Q4, Oct-Dec",".75");  
   str3 = toNumber(str2);  
   return(str3);  
 }  





 //function se_comma(SE_test2b) {  
 //  se_test=SE_test2b;
 //  comma2 = se_test.replace(",","+");  
  // .replace(" Q3, Jul-Sep",".5")  
  // .replace(" Q4, Oct-Dec",".75");  
   //str3 = toNumber(str2);  
 //  return(comma2);  
 //}  
  //   str2 = str.replace("Q1, Jan-Mar",".0")  
   //.replace("Q2,Apr-Jun",".1")  
  // .replace("Q3,Jul-Sep",".2")  
  // .replace("Q4,Oct-Dec",".3")
   // .replace("9 M1-6, Jan-Jun",".4") 
   // .replace("9 M7-12, Jul-Dec",".5") 
   //.replace("8Q3",".6")  
   //.replace("8Q4",".7")





 function num_to_qtr(num) {  
   str = num.toString();  
    
  
   
   if(Number.isInteger(num)){  
       //str = str;  
       str = str + ".0";  
   }   
   
  str2 = str.replace(".0",", Jan-Jun")  
   .replace(".5",", Jul-Dec") ; 
    // .replace(".25"," Q2, Apr-Jun")  
  // .replace(".5"," Q3, Jul-Sep")  
  // .replace(".75"," Q4, Oct-Dec");  
   
   
   return(str2);  
 }
   //  str2 = str.replace(".0","Q1,Jan-Mar")  
  // .replace(".1","Q2,Apr-Jun")  
  // .replace(".2","Q3,Jul-Sep")  
  // .replace(".3","Q4,Oct-Dec")
   // .replace(".4","9 M1-6, Jan-Jun")
   // .replace(".5","9 M7-12, Jul-Dec")
  // .replace(".6","8Q3")
  // .replace(".7","8Q4")
  




// Use the regular Map constructor to transform a 2D key-value Array into a map










if (typeof Object.assign != 'function') {
   Object.assign = function(target) {
     'use strict';
     if (target === null) {
       throw new TypeError('Cannot convert undefined or null to object');
     }




    target = Object(target);
     for (var index = 1; index < arguments.length; index++) {
       var source = arguments[index];
       if (source !== null) {
         for (var key in source) {
           if (Object.prototype.hasOwnProperty.call(source, key)) {
             target[key] = source[key];
           }
         }
       }
     }
     return target;
   };
 }
 var recipeMap = ([
   ['2019 Q1, Jan-Mar', 1],
   ['2019 Q2, Apr-Jun', 2],
   ['2019 Q3, Jul-Sep', 3],
   ['2019 Q4, Oct-Dec', 4],
  //   ['2019Q1,Jan-Mar', 1],
 //  ['2019Q2,Apr-Jun', 2],
  // ['2019Q3,Jul-Sep', 3],
  // ['2019Q4,Oct-Dec', 4],
   // ['2019 M1-6, Jan-Jun', 5],
    //['2019 M7-12, Jul-Dec', 6],
  // ['2018Q3', 7],
   //['2018Q4', 8]
 ]);




var myMap = new Map(recipeMap);
 //var myMap2 =(Array.from(myMap.keys())); 
 //var myMap3 =(Array.from(myMap.values())); 
 //var  yearsRegex22 = (Array.from(myMap.keys())).join("|"); 




//var recipeMap = new Map([
 //  ['cucumber', 500],
 //  ['tomatoes', 350],
 //  ['onion',    50]
 //]);
 // iterate over keys (vegetables)
 //for (let vegetable of recipeMap.keys()) {
 //  alert(vegetable); // cucumber, tomatoes, onion
 //}





   // Function to convert quarterly strings to numbers  
 // function qtr_to_num(str) {  
 //   str2 = str.replace("Q1",".0")  
 //   .replace("Q2",".25")  
 //   .replace("Q3",".5")  
 //   .replace("Q4",".75");  
 //   str3 = toNumber(str2);  
 //   return(str3);  
 // }  
   
 //  str2 = str.replace(".0","Q1")  
 //  .replace(".25","Q2")  
 //  .replace(".5","Q3")  
 //  .replace(".75","Q4");  
   
   
 //  return(str2);  
 //}  




// Index selectors ------------------------------------------------------------
   
   function unique(value, index, self) {
     return self.indexOf(value) === index;
   }




function get(Obj, keys) {
   var value = Obj;
   for(var i = 0; i < keys.length; i++) {
     var test = value[keys[[i]]];
     if(test !== undefined){ value = test; }
   }
   var out = typeof value == 'string' ? value : '';
   return out;
 }




function getKeys(Obj, keys) {
   if(keys === undefined) {
     keys = [];
   }
   for (var key in Obj){
     keys.push(key);
     var sub = Obj[key];
     if(typeof(sub) == "object") {
       getKeys(sub, keys=keys);
     }
   }
   return(keys);
 }




function includesAny(string, array) {
   var sum = 0;
   array.forEach(function(x) {
     sum += (string.match(x) !== null);
   });
   return sum > 0 ? true: false;
 }




function grepIndexes(array, args, force) {
   var colIndexes = force || [];
   $.map(array, function(x, indexOf) {
     if(includesAny(x, args)) { colIndexes.push(indexOf); }
   });
   return colIndexes;
 }




function selectIndexes(array, indexes) {
   var newArray = [];
   for (var i = 0; i < indexes.length; i++) {
     var index = indexes[i];
     newArray[i] = array[index];
   }
   return newArray;
 }




//var ses_il = selectIndexes(y_ses, keep_i).replaceAll(",","+");;




function selectRows(array, indexes) {
   return selectIndexes(array, indexes);
 }




function selectCols(array, indexes) {
   var newArrays = [];
   for(var i = 0; i < array.length; i++) {
     var thisItem = array[i];
     newArrays[i] = selectIndexes(thisItem, indexes);
   }
   return newArrays;
 }




// Data manipulation ----------------------------------------------------------
   
   function isNull(el) {
     return el === null;
   }




function intersectArrays(Arr1, Arr2) {
   var newArr = $.grep(Arr1, function(el) {
     return Arr2.includes(el);
   });
   return newArr;
 }




function intersectObjects(Obj1, Obj2) {
   var newObj = {};
   for(var key in Obj1) {
     if(Object.keys(Obj2).includes(key)) {
       newObj[key] = Obj2[key];
     }
   }
   return newObj;
 }




function intersection(Item1, Item2) {
   if(Array.isArray(Item1) && Array.isArray(Item2)) {
     return intersectArrays(Item1, Item2);
   } else {
     return(intersectObjects(Item1, Item2));
   }
 }





 function notIn(array, compare) {
   var hidden = {};
   for(var key in array) {
     if(Object.keys(compare).indexOf(key) < 0) {
       hidden[key] = array[key];
     }
   }
   return hidden;
 }




//function range(start, end) {
   //function range(start, end, by = 1) { 
     function range(start, end, by) {
       by = by || 1;
       var Start = Math.min(start, end);
       var End   = Math.max(start, end);
       var numbers = [];
       add_num = Start; 
       for(var i = 1; add_num <= End; i++) { 
         numbers.push(add_num); 
         add_num = Start + i*by; 
         //  for (var i = Start; i <= End; i++) {
           //      numbers.push(i);
         }
         return numbers;
       }
       
       
       function remove(array, element) {
         var filtered = array.filter(function(el) {
           return !element.includes(el);
         });
         return filtered;
       }
       
       
       function transpose(a) {
         return a[0].map(function (_, c) {
           return a.map(function (r) {
             return r[c];
           });
         });
       }
       
       function splitArray(array, indexes) {
         var newArray = [];
         var splitAt = [-1].concat(indexes);
         for(var i = 0; i < splitAt.length; i++) {
           var start = splitAt[i]+1;
           var stop  = splitAt[i+1];
           var chunk = array.slice(start, stop);
           if(chunk.length > 0) {
             newArray.push(chunk);
           }
         }
         return newArray;
       }
       
       // DOM interaction ------------------------------------------------------------
         
         function createCheckboxGroup(rc, choices, selected) {
           var newHTML = '';
           for (var key in choices) {
             var rowId = key;
             var rowNm = choices[key];
             
             var check = selected === undefined ? 'checked' :
               Object.keys(selected).includes(rowId) ? 'checked' : '';
             
             var thisHTML =
               '<li> <input id = _id_ type = "checkbox" name = "rowLevels" value = _id_ _check_>  ' +
               '<label for = _id_ > _name_ </label> </li>';
             
             newHTML = newHTML + '\n' +
               thisHTML
             .replaceAll("_id_", rowId)
             .replaceAll("_name_", rowNm)
             .replaceAll("_check_", check);
           }
           
           $('#'+rc+'Levels ul').html(newHTML);
           $('#'+rc+'Levels ul li label').each(function() {
             var thisGrp = $(this).text().trim();
             if(subLevels.includes(thisGrp)) {
               $(this).css('font-style', 'italic');
             }
           });
         }
       
       function checkList(id) {
         var sel = {};
         $(id + ' input:checked').each(function() {
           var thisId = $(this).attr('id');
           var thisNm = $(this).next('label').text().trim();
           sel[thisId] = thisNm;
         });
         return sel;
       }
       
       function selectRowLevels(table, rowLevels, selectedLevels, rowSelect) {
         var rowRegex;
         var selLev = selectedLevels[rowSelect];
         if(selLev !== undefined) {
           var rowLev = intersection(rowLevels, selLev);
           rowRegex = Object.keys(rowLev).join("|");
         } else {
           rowRegex = "";
         }
         return table.columns(3).search(rowRegex, true, false);
       }
       
       function selectColLevels(table, colLevels, selectedLevels, colSelect, colNames) {
         var selLev = selectedLevels[colSelect];
         if(selLev !== undefined) {
           var colLev = intersection(colLevels, selLev);
           var colArray = getValues(colLev);
           
           var cc = table.columns().header().toJQuery();
           cc.each( function(index) {
             if(colNames[index] == null) { // Hide extra cols
               $(this).removeClass("showDT");
             } else {
               var colNm = $(this).text();
               if(colArray.includes(colNm)) {
                 $(this).addClass('showDT ') ;
               } else {
                 $(this).removeClass('showDT');
               }
             }
           });
         }
       }
       
       // Formatting -----------------------------------------------------------------
         
         // Camelcase
       function camelCase(txt) {
         return txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase();
       }
       
       // Extend array to specified length
       function fill(array, length) {
         for(var i = array.length; i < length; i++) { array.push(null); }
         return(array);
       }
       
       // Today's date
       function shortDate() {
       var today = new Date();
       var dd = today.getDate();
       var mm = today.getMonth() + 1;
       var yy = today.getFullYear();
       return [yy,mm,dd].join("-");
       }
       
       // Table formatting ------------------------------------
      
       // Number format
       function formatNum(num) {
       if(num === null) return "--";
       return num;
       }
       
   function toNumber(str) {
     if(str === null) return str;
     if(!isNaN(str)) return str*1;
     var newstr = str.replaceAll(",","");
         var newstr22 = str.replaceAll(",","+");
              var lcl_ses = newstr22.split("+").slice(0,1);
              var ucl_ses = newstr22.split("+").slice(-1);
 //        var newstr = str.replaceAll(",","").replace("*","");
     return newstr*1;
     //return ucl_ses*1;
   }
     
    function toNumber2(str) {
      if(str === null) return str;
      if(!isNaN(str)) return str*1;
   
          var newstr2 = str.replaceAll(",","+");
               var lcl_ses2 = newstr2.split("+").slice(0,1);
               var ucl_ses2 = newstr2.split("+").slice(-1);
             return ucl_ses2*1;
    }    
       
       // Format for coef display
       function coefDisplay(data, type, row, meta) {
       if(type == "display") {
       return formatNum(data);
       } else {
       return toNumber(data);
       }
       }
       
       // Format for se display
       function seDisplay(data, type, row, meta) {
       if(type === "display") {
       return formatNum(row[meta.col-1]) + " (" + formatNum(data) +")";
       } else {
        // var ses_string= data.replaceAll(",","+");
       return toNumber(row[meta.col-1]);
         }
       }
      
      
            // Format for se display
       function seDisplay2(data, type, row, meta) {
      //if(type === "display") {
         return formatNum(data).replaceAll(",","+");
      // return formatNum(row[meta.col-1]) + " (" + formatNum(data) +")";
      // } else {
      //formatNum(data).replaceAll(",","+");
      
      // return formatNum(data).replaceAll(",","+");
      //   }
       } 
       
     function toplus(ses_S) {
     if(ses_S === null) return ses_S;
     if(!isNaN(ses_S)) return ses_S*1;
     var new_ses_S = ses_S.replaceAll(",","+");
 //        var newstr = str.replaceAll(",","").replace("*","");
     return new_ses_S;
   }    
       
       // Plot formatting -------------------------------------
       
       // Line break in 'Inapplicable' level
       function editLabel(label) {
       if(!isNaN(label)) {
       return label;
       } else {
       var newlabel = label
       .replaceAll("Inapplicable \\(", "Inapplicable<br>(")
       .replaceAll("hysician", "hys.")
       .replaceAll("Emergency room", "ER");
       return newlabel;
       }
       }
       
       function wrap(str, width) {
       if(!isNaN(str)) {
       return str + "";
       } else {
       var spaceReplacer = '<br>';
       var brkpoints = ["/"," ","-"];
       if (str.indexOf(spaceReplacer) > 0) { return str; }
       if (str.length > width) {
       var p = width;
       for (; p>0 && (brkpoints.indexOf(str[p]) < 0); p--) {
       // count backwards from desired width to find breakpoint
       }
       if (p > 0) {
       var left = str.substring(0, p+1);
       var right = str.substring(p+1);
       return left + spaceReplacer + wrap(right, width);
       }
       }
       return str;
       }
       }
       
       function wrap15(str) {
       return wrap(str, width = 20);
       }
       
       function wrap70(str) {
       return wrap(str, width = 70);
       }
       
       function countBreaks(arr) {
       var n_rows = 0;
       for(var i = 0; i < arr.length; i++) {
       var wrapped = wrap15(arr[i]);
       var n_breaks = (wrapped.match(/<br>/g) || []).length;
       n_rows = n_rows + n_breaks + 1;
       }
       return n_rows;
       }
       
       // Code formatting ----------------------------------------
       
       // Rsub
       function rsub(string, dict, lang) {
       var beg = lang == "R" ? "\\." : "\\&";
       for(var key in dict) {
       string = string.replaceAll(beg + key + "\\.", dict[key]);
       }
       return string;
       }
       
       // FORMAT string for SAS code
       function makeFMT(name) {
       return name + " " + name + ".";
       }
       
        // Array of Index SE selection -----------------------------------------------------------




function array_column_conditional(list, column, indice){
     var result;
     var key;




    if(typeof indice != "undefined"){
         result = {};




        for(key in list)
             if(typeof list[key][column] !== 'undefined' && typeof list[key][indice] !== 'undefined')
                 result[list[key][indice]] = list[key][column];
     }else{
         result = [];




        for(key in list)
             if(typeof list[key][column] !== 'undefined')
                 result.push( list[key][column] );
     }




    return result;
 }




Array.prototype.remove = function(from, to) {
   var rest = this.slice((to || from) + 1 || this.length);
   this.length = from < 0 ? this.length + from : from;
   return this.push.apply(this, rest);
 }




String.prototype.replaceAll = function (find, replace) {
     var se_str = this;
     return se_str.replace(new RegExp(find.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g'), replace);
 };



function myFunction2() {
    //var time = new Date().getHours();
        qnewtitle3 = qnewtitle3.replace("aged 18", "aged 25")
}
function myFunction3() {
    //var time = new Date().getHours();
    qnewtitle3 = qnewtitle3.replace("aged 18 and over", "aged 18-64")
}
function myFunction4() {
    //var time = new Date().getHours();
    qnewtitle3 = qnewtitle3.replace("aged 18 and over", "aged 65 and over")
   // qnewtitle3 = qnewtitle3.replace("aged 18-64", "aged 65 and over")
}

      // Download files--------------------------------------------------------------
       function convertArrayOfObjectsToCSV(args) {
       var result, ctr, keys, cnames, columnDelimiter, lineDelimiter, data;
       
       data = args.data || null;
       if (data === null || !data.length) { return null;}
       
       columnDelimiter = ',';
       lineDelimiter = '\n';
       
       cnames = args.colnames;
       keys = Object.keys(data[0]);
       
       result = '';
       result += '"'+cnames.join('"'+columnDelimiter+'"')+'"';
       result += lineDelimiter;
       
       data.forEach(function(item) {
       ctr = 0;
       keys.forEach(function(key) {
       if (ctr > 0) result += columnDelimiter;
       //result += item[key];
       result += "\" " + item[key] + "\"";
       ctr++;
       });
       result += lineDelimiter;
       });
       return result;
       }
       
       function downloadFile(args) {
       var link;
       var file = args.file;
       var filename = args.filename;
       if (file === null) return;
       
       var blob = new Blob([file], {type: "text/csv;charset=utf-8;"});
       if(navigator.msSaveBlob) {
       navigator.msSaveOrOpenBlob(blob,filename);
       } else {
       link = document.createElement("a");
       if(link.download !== undefined) {
       var url = URL.createObjectURL(blob);
       link.setAttribute("href",url);
       link.setAttribute("download",filename);
       link.style = "visibility:hidden";
       document.body.appendChild(link);
       link.click();
       document.body.removeChild(link);
       }
       }
       }
       
       
       function downloadPlot(args) {
       var filename = args.filename;
       var footnotes = args.footnotes;
       var height = args.height;
       
       var dlPlot = document.getElementById('meps-plot');
       
       // Use canvg if IE11
       if(navigator.msSaveBlob) {
       // Get svg elements from plotly
       var svg0 = dlPlot.getElementsByClassName('main-svg')[0]; // graph
       var svg1 = dlPlot.getElementsByClassName('main-svg')[1]; // legend and title
       var data0 = svg0.outerHTML;
       var data1 = svg1.outerHTML;
       
       var canvas = document.createElement('canvas'); // Create a Canvas element.
       canvas.setAttribute('width', '700px');
       canvas.setAttribute('height', '700px');
     //  canvas.setAttribute('height', height+'px');
       
       var ctx = canvas.getContext('2d'); // For Canvas returns 2D graphic.
       
       // Set background rectangle
       canvg(canvas, '<svg> <rect width = "100%" height = "100%" style="fill: rgb(255,255,255)"/> </svg>');
       
       // Add svg layers
       ctx.drawSvg(data1);
       ctx.drawSvg(data0);
       
       ctx.font = '14px sans-serif';
       var multi_foots = footnotes.split("<br>");
       var line = height-5;
    //   var line = height-50;
       for (var i = 0; i < multi_foots.length; i++) {
       ctx.fillText(multi_foots[i], 20, line);
       line = line + 20;
       }
       
       var blob = canvas.msToBlob();
       window.navigator.msSaveOrOpenBlob(blob, filename + '.png');
       
       } else {
       
       Plotly.downloadImage(dlPlot, {
       format: 'png',
       width: 700,
       height: 650,
    //   height: height,
       filename: filename
       });
       }
       }
       





       // Plotly ---------------------------------------------------------------------
       
       // Initialize colors
       var all_colors = [
       '31,120,180',  '51,160,44',   '227,26,28',  '255,127,0',
       '106,61,154',  '177,89,40', '166,206,227','178,223,138',
       '251,154,153','253,191,111', '202,178,214','255,255,153'];
       
       var acolors = [], colors = [];
       for(var k = 0; k < all_colors.length; k++) {
       colors[k]  = "rgb("   + all_colors[k],")";
       acolors[k] = "rgba(" + all_colors[k] + ", 0.4)";
       }
       
       function nullIndexes(array) {
       var nulls = [];
       for(var i = 0; i < array.length; i++) {
       if(array[i] === null) {nulls.push(i);}
       }
       return nulls;
       }
       
       function nonEmptyRowIndexes(rows) {
       var indexes = [];
       for(var i = 0; i < rows.length; i++) {
       if(!rows[i].every(isNull)) { indexes.push(i); }
       }
       return indexes;
       }
       
       function barPlotData(x_values, y_values, y_ses, y_labels, showSEs, hideYaxis, ses_j2) {
       //function barPlotData(x_values, y_values, y_ses, y_labels, showSEs, hideYaxis, hovertemplate) {
       
       var plotdata = [];
       
       // Remove empty rows
       var keep_i = nonEmptyRowIndexes(y_values);
       var y_i   = selectIndexes(y_values, keep_i);
       var ses_i = selectIndexes(y_ses, keep_i);
       var y_lab = selectIndexes(y_labels, keep_i);
       if(y_i.length == 0) { return null; }
       
       // Remove empty cols
       var keep_j = nonEmptyRowIndexes(transpose(y_i));
       var y_j   = selectIndexes(transpose(y_i), keep_j);
       var ses_j = selectIndexes(transpose(ses_i), keep_j);
       var x_lab = selectIndexes(x_values, keep_j).map(wrap15);


           var ses_i2 = ["8.6 ,10.3", "14.9,20.4", "", "4.7 ,10.0", "", "9.2 ,20.7", ""];

           function contains(arr, val) {
               var test = [];
               //for (var i = 0; i < arr.length; i++) {
               if (arr && arr.length > 0) {
                   for (var i = 0; i < arr.length; i++) {
                       if (arr[i] === "") test[i] = val;

                       else test[i] = arr[i];
                   }
                   return test;
               }
               return arr;
           }
           arr = ses_i2;
           console.log(contains(arr, "*,*"));


           var ses_j2 = contains(ses_i2, " *,* ");

           //var ses_j2 = contains(ses_i, " *,* ");

 //         function replaceEmptyWith(arr, val) {
//             var _arr = [];
//              if (arr && arr.length > 0) {
//                  for (var i = 0; i < arr.length; i++) {
//                       if (arr[i] === "") _arr[i] = val;
//                      else _arr[i] = arr[i];
//                   }
//                   return _arr;
//              }
//               return arr;
//           }

//        var ses_j2 = replaceEmptyWith(ses_i, " , ");

//function tina(ses_j) {
  //   if(ses_j === null) return ses_j;
   //  if(!isNaN(ses_j)) return ses_j*1;
  //   var ses_j2 = ses_j.map(function(x){ return x.replace(/""/g,"'',''") });
 //        var newstr = str.replaceAll(",","").replace("*","");
 //    return ses_j2;
  // }   


       
       // Transpose back to original orientation
       var y  = transpose(y_j);
       var ses = transpose(ses_j);
    // var ses_j2 = ses.map(function(x){ return x.replace(/""/g,"'',''") });
       //var ses_j2 = ses.replaceAll(" "," , ");
       var ci_test =  ses.toString().split(',');
       var lcl_char = ci_test[0];
       var ucl_char = ci_test[ci_test.length - 1];
       var lcl_bar = ses.slice(0,1).toString().split(',');
       var ucl_bar = ses.slice(-1).toString().split(',');
       var y_test =  y.toString().split(',');
       var y_num = y_test.map(Number); 
       var ci_num =  ci_test.map(Number); 
       
       
       var lcl_num_bar= lcl_bar.map(Number);
       var ucl_num_bar= ucl_bar.map(Number);
       
       lcl_num_line2 = ci_num.filter(function(value, index, Arr) {
       return index % 2 == 0;      });
       
       ucl_num_line2 = ci_num.filter(function(value, index, Arr) {
       return index % 2 == 1;      });
             
       var LCL_bar3 = y_num.map(function(num, idx) {return num - lcl_num_line2[idx];});
       var UCL_bar3 = ucl_num_line2.map(function(num, idx) {return num - y_num[idx];});
       
       
       //var hovertemplate ="hovertemplate";
       if(y.length == 0) {return null; }
       
       for(var j = 0; j < y.length; j++) {
       var newtrace = {
       
       x: y[j],
       //x: y[j].map(toNumber),
       y: x_lab,
       text: ses[j],
       name: wrap15(y_lab[j]),
       legendgroup: wrap15(y_lab[j]),
       orientation: 'h',
       type: 'bar',
       hovertemplate: "%{x:1} " + "("+ "%{text}"+")"+
       "<extra></extra>",
       // hovertemplate: "% y[j]" +  "<extra></extra>",
       // hovertemplate: "hovertemplate",
       // text: '%x',
       marker: {
       color: colors[j], width: 1,
       line: {color: 'white', width: 2},
       
       },
       error_x: {
       type: 'data', visible: showSEs,
       symmetric: false,
       array: UCL_bar3.map(function(x) {return x;}),
       arrayminus: LCL_bar3.map(function(x) {return x;}),
       color: 'black',
       
       // hovertemplate: "hovertemplate",
       
       //  array: ses[j].map(toNumber).map(function(x) {return x*1.96;})
       
       },
       //  hoverinfo: "text",
       
       
       //hoverinfo: "text"
       };
       
       
       plotdata[j] = newtrace;
       
       }
       
       // Set y-labels as annotations for correct vertical alignment
       var annotations = [];
       for(var k = 0; k < x_lab.length; k++) {
       var new_ylabel = {
       xref: 'paper', yref: 'y',
       x : 0,
       y: x_lab[k],
       text: x_lab[k],
       //hovertemplate: "hovertemplate",
       showarrow: false,
       xanchor: 'right',
       align: 'right'
       };
       annotations.push(new_ylabel);
       }
       
       return {data: plotdata, ylabels: annotations};
       }
       
       
  
       
       
       function linePlotData(x_values, y_values, y_ses, y_labels, showSEs) {
       var newdata = [], newSE = [];
       var x = x_values.map(toNumber);
       
       // Remove empty rows
       var keep_i = nonEmptyRowIndexes(y_values);
       var y_i   = selectIndexes(y_values, keep_i);
       var ses_i = selectIndexes(y_ses, keep_i);
       var y_lab = selectIndexes(y_labels, keep_i);
       
       var ci_test_line =  ses_i.toString().split(',');
       var lcl_char_line = ci_test_line[0];
       var ucl_char_line = ci_test_line[ci_test_line.length - 1];
       var lcl_num_line = ses_i.slice(0,1).toString().split(',').map(Number);
       var ucl_num_line = ses_i.slice(-1).toString().split(',').map(Number);
       
       lcl_num_line2 = lcl_num_line.filter(function(value, index, Arr) {
       return index % 2 == 0;      });
       
       ucl_num_line2 = ucl_num_line.filter(function(value, index, Arr) {
       return index % 2 == 1;      });
       
       for(var j = 0; j < y_i.length; j++) {




      var y  = y_i[j].map(toNumber);
       var se = ses_i[j].map(toNumber);
           var y  = y_i[j].map(toNumber);
     var test =  y_ses;
     var LCL_array = []; var UCL_array = [];
     var SE_split = test[j].toString().split(",").map(Number);  // just split once
     //var SE_split2 = SE_split[j].map(toNumber);

     // var y_se2 = y_se.filter(val => !isNaN(val))
      //var sum = y_se2.reduce((a, b) => a + b, 0);
      //var avg = (sum / y_se2.length) || 0;

           var y_se2 = SE_split.filter(val => !isNaN(val))
           var sum = y_se2.reduce((a, b) => a + b, 0);
           var avg = (sum / y_se2.length) || 0;
           var SE_split2 = SE_split.map(SE_split => { return isNaN(SE_split) ? avg : SE_split });





     
     var LCL_new =  SE_split2, UCL_new = [];
    // var LCL_new =  SE_split, UCL_new = [];
     for(var z = LCL_new.length-1; z >= 0; z--) {
       if(z % 2 === 1) {
         UCL_new.unshift(LCL_new.splice(z, 1)[0])
       }
     }
     
       
     var LCLdiff = [];
     for(let i = 0; i < y.length; i++) {
       LCLdiff.push(Math.abs(y[i] - LCL_new[i]));
     }
     var UCLdiff = [];
     for(let i = 0; i < y.length; i++) {
       UCLdiff.push(Math.abs(y[i] - UCL_new[i]));
     }
     // var LCLdiff=y-LCL_new;
     //  var UCLdiff=y-UCL_new;
     
     //     var LCLdiff = y.map(function(num, idx) {return y - LCL_new[idx];});
     //    var UCLdiff = y.map(function(num, idx) {return y - UCL_new[idx];});
     
     var LCLUCL_new= [[LCL_new],[UCL_new]];
     const LCLUCL_SEerror = UCL_new.concat(LCL_new.reverse());
     const LCLUCL_SEdiff = UCLdiff.concat(LCLdiff);
     





     
       // SE ribbon: split into non-null pieces
       var null_i  = nullIndexes(y);
       var y_split = splitArray(y, null_i);
       var x_split = splitArray(x, null_i);
       var se_split = splitArray(se, null_i);
       
       for (var k = 0; k < y_split.length; k++) {
       var y_segment = y_split[k];
       var x_segment = x_split[k];
       var se_segment = se_split[k];
  
  
       var LCL_line = y_segment.map(function(num, idx) {return num - lcl_num_line2[idx];});
       var UCL_line = y_segment.map(function(num, idx) {return num - ucl_num_line2[idx];});
       
       //var LCL_line = lcl_num_line.map(function(x) {return x;});
       //var UCL_line = ucl_num_line.map(function(x) {return x;});
       
       //var LCL = y_segment.map(function(num, idx) {return num - 1.96*se_segment[idx];});
       //var UCL = y_segment.map(function(num, idx) {return num + 1.96*se_segment[idx];});
       
       var x_se = x_segment.concat(x_segment.slice().reverse());
       var y_se = LCL_line.concat(UCL_line.reverse());
       
       //var y_se = LCL.concat(UCL.reverse());
       
       var CI_color = y_segment.length > 1 ? "transparent" : colors[j];
       
       var newtrace = {
       x: x_segment, y: y_segment,
       type: 'scatter',
       name: wrap15(y_lab[j]),
       legendgroup: wrap15(y_lab[j]),
       showlegend: (k == 0), // prevent duplicate legend entries
       line: {width: 4, color: colors[j]},
       mode: 'lines+markers',
       marker: {size: 10, symbol: j},
       color: colors[j],
       
       // error_y: {type: 'data', visible: showSEs, color: CI_color,
       //  array: se_segment.map(function(x) {return x*1.96;})
       //  },
       
       errnewSEor_y: {type: 'data', visible: showSEs, color: CI_color,symmetric: false,
            array: UCLdiff,
           arrayminus: LCLdiff,
       },
       text: ses_i[j],
       hovertemplate: "%{y:1} " + "("+ "%{text}"+")"+  "<extra></extra>",
       //hoverinfo: "y"
       };
       newdata.push(newtrace);
       
       
       var seRibbon = {
       x: x_se, y: LCLUCL_SEerror,
       fill: "toself",
       fillcolor: acolors[j],
       line: {color: "transparent"},
       name: wrap15(y_lab[j]),
       legendgroup: wrap15(y_lab[j]),
       showlegend: false,
       type: "scatter",
       hoverinfo: "none"
       };
       newSE.push(seRibbon);
       }
       }
    
       if(newdata.length == 0) {
       return null;
       }
       
       // Hidden point to force ylab to zero (default plotly options not so good)
       var hiddenX = x_values.length > 1 ? mean(x) : x[0];
       var hiddenTrace = { x: [hiddenX], y: [0],
       showlegend: false, marker: {color: "transparent"}, hoverinfo: 'none'
       };
       
       newdata = newdata.concat(hiddenTrace);
       var plotdata = showSEs ? $.merge(newSE,newdata) : newdata;
       
       return {data: plotdata, ylabels: null};
       }
       
       
       
       
       // Polyfill -------------------------------------------------------------------
       
       Number.isInteger = Number.isInteger || function(value) {  
       return typeof value === "number" &&   
       isFinite(value) &&   
       Math.floor(value) === value;  
       };  
       
       
       
       function getValues(obj) {
       var values = Object.keys(obj).map(function(e) {
       return obj[e];
       });
       return(values);
       }
       
       String.prototype.replaceAll = function(search, replacement) {
       var target = this;
       return target.replace(new RegExp(search, 'g'), replacement);
       };
       
       Object.defineProperty(SVGElement.prototype, 'outerHTML', {
       get: function () {
       var $node, $temp;
       $temp = document.createElement('div');
       $node = this.cloneNode(true);
       $temp.appendChild($node);
       return $temp.innerHTML;
       },
       enumerable: false,
       configurable: true
       });
       
       if (!Object.keys) {
       Object.keys = (function() {
       'use strict';
       var hasOwnProperty = Object.prototype.hasOwnProperty,
       hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
       dontEnums = [
       'toString',
       'toLocaleString',
       'valueOf',
       'hasOwnProperty',
       'isPrototypeOf',
       'propertyIsEnumerable',
       'constructor'
       ],
       dontEnumsLength = dontEnums.length;
       
       return function(obj) {
       if (typeof obj !== 'function' && (typeof obj !== 'object' || obj === null)) {
       throw new TypeError('Object.keys called on non-object');
       }
       
       var result = [], prop, i;
       
       for (prop in obj) {
       if (hasOwnProperty.call(obj, prop)) {
       result.push(prop);
       }
       }
       
       if (hasDontEnumBug) {
       for (var i = 0; i < dontEnumsLength; i++) {
       if (hasOwnProperty.call(obj, dontEnums[i])) {
       result.push(dontEnums[i]);
       }
       }
       }
       return result;
       };
       }());
       }
       
       if (typeof Object.assign != 'function') {
       Object.assign = function(target) {
       'use strict';
       if (target == null) {
       throw new TypeError('Cannot convert undefined or null to object');
       }
       
       target = Object(target);
       for (var index = 1; index < arguments.length; index++) {
       var source = arguments[index];
       if (source != null) {
       for (var key in source) {
       if (Object.prototype.hasOwnProperty.call(source, key)) {
       target[key] = source[key];
       }
       }
       }
       }
       return target;
       };
       }
       
       
       if (!String.prototype.includes) {
       String.prototype.includes = function(search, start) {
       'use strict';
       if (typeof start !== 'number') {
       start = 0;
       }
       
       if (start + search.length > this.length) {
       return false;
       } else {
       return this.indexOf(search, start) !== -1;
       }
       };
       }
       
       
       if (!Array.prototype.includes) {
       Object.defineProperty(Array.prototype, 'includes', {
       value: function(searchElement, fromIndex) {
       
       if (this == null) {
       throw new TypeError('"this" is null or not defined');
       }
       
       // 1. Let O be ? ToObject(this value).
       var o = Object(this);
       
       // 2. Let len be ? ToLength(? Get(O, "length")).
       var len = o.length >>> 0;
       
       // 3. If len is 0, return false.
       if (len === 0) {
       return false;
       }
       
       // 4. Let n be ? ToInteger(fromIndex).
       //    (If fromIndex is undefined, this step produces the value 0.)
       var n = fromIndex | 0;
       
       // 5. If n ??? 0, then
       //  a. Let k be n.
       // 6. Else n < 0,
       //  a. Let k be len + n.
       //  b. If k < 0, let k be 0.
       var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
       
       function sameValueZero(x, y) {
       return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y));
       }
       
       // 7. Repeat, while k < len
       while (k < len) {
       // a. Let elementK be the result of ? Get(O, ! ToString(k)).
       // b. If SameValueZero(searchElement, elementK) is true, return true.
       if (sameValueZero(o[k], searchElement)) {
       return true;
       }
       // c. Increase k by 1.
       k++;
       }
       
       // 8. Return false
       return false;
       }
       });
       }
