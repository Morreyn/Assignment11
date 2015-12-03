$(document).ready(function () {
    "use strict";
    
   /* Populate and display the listview of employees */
    
    $("#search").on("click", function () {
        
        $("h2").hide();
        $("#welcomeMessage").hide();
        $("#container div").hide();
        
        $.getJSON("../data/data.json", function (data) { /* Connects to .json file */
            $.each(data, function () { /* this = objects */
                var arrayIDs = [];
                var arrayReports = [];
                $.each(this, function (key, value) { /* Accesses values in each object */
                    arrayIDs.push(value.ID);
                    arrayReports.push(value.ReportsTo);
    /* Creates html list item for each employee object, using object values */
                    $("#list").append(
                        "<li class='ui-li-has-count ui-li-has-thumb'><a href='#employeedetails' class='ui-btn ui-btn-icon-right ui-icon-carat-r'><img src='" + value.ImagePath + "'>" +
                            "<h2>" + value.Name + "</h2>" +
                            "<p>" + value.Title + "</p>" +
                            "<span id='" + value.ID + "' class='ui-li-count ui-body-inherit'></span></a></l1>"
                    );
                });
                
                for (var i=0; i<arrayIDs.length; i++) {
                var counter = 0;
                for (var j=0; j<arrayReports.length; j++) {
                    if(arrayReports[j] === arrayIDs[i]) {
                        counter += 1;
                    }
                }
                counter = counter.toString();
                $("#" + arrayIDs[i]).append(counter);
                console.log(arrayIDs[i]);
                }
            });
        });
        
     /* Appends each list item to the unordered list, and then to the container */
        $("#container").append('<ul id="list" data-role="listview" data-filter="true" class="ui-listview"></ul>');
        $("#list").listview();
        
        $("input[data-type='search']").focus();

    });
    
    /* Function to iterate through each employee in JSON file and display how many other employee's ReportsTo point to that employee in the span counter.
    Step 1: outer loop - loops through each employee in json array.
    Step 2: Inner loop - searches ReportsTo of each employee. When it hits 1, it updates the counter. 
    Step 3: before outer loop increments, add counter to span of the manager employee */
    
/*    $.getJSON("../data/data.json", function (data) { 
        $.each(data, function () { 
            var arrayIDs = [];
            var arrayReports = [];
            $.each(this, function (key, value) {
                arrayIDs.push(value.ID);
                arrayReports.push(value.ReportsTo);
            });
            
            for (var i=0; i<arrayIDs.length; i++) {
                var counter = 0;
                for (var j=0; j<arrayReports.length; j++) {
                    if(arrayReports[j] === arrayIDs[i]) {
                        counter += 1;
                    }
                }
                counter = counter.toString();
                $("#" + arrayIDs[i]).append(counter);
                console.log(arrayIDs[i]);
                }

        });
    });*/
    
});
    

