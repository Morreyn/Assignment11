$(document).ready(function () {
    "use strict";
    
   /* Populate and display the listview of employees */
    
    $("#search").on("click", function() {
        
        $("h2").hide();
        $("#welcomeMessage").hide();
        $("#container div").hide();
        
        $.getJSON("../data/data.json", function(data){
                $.each(data, function() {
                    $.each(this, function(key, value){
                        $("#list").append(
                            "<li class='ui-li-has-count ui-li-has-thumb'><a href='#employeedetails' class='ui-btn ui-btn-icon-right ui-icon-carat-r'><img src='" + value.ImagePath + "'>" + 
                            "<h2>" + value.Name + "</h2>" +
                            "<p>" + value.Title + "</p>" +
                            "<span class='ui-li-count ui-body-inherit'>" + value.ReportsTo + "</span>" +
                            "</a></l1>"
                        );
                    });
                });
        });
                
        $("#container").append('<ul id="list" data-role="listview" data-filter="true" class="ui-listview"></ul>');
        $("#list").listview();
        
        $("input[data-type='search']").focus();

    });
    
    // Function to iterate through each employee in JSON file and display how many other employee's ReportsTo point to that employee in the span counter.
    
})
    

