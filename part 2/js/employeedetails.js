$(document).ready(function () {
    "use strict";
    
    var manager = "something"; // name of employee's manager
    var reportsNum = "something"; // # of employee's direct reports
    
   // AJAX populates details of employee based on which list item was clicked
    
    $.getJSON("../data/data.json", function (data) {
        $(data).find("employees").children().each(function () { //specify which child based on click? Maybe instead of "employees", have a variable with the name from the li that was clicked? Also a substitute for "each"
            $("#container").append(
                "<img src='" + value.ImagePath + "'>" +
                    "<h2>" + value.Name + "</h2>" +
                    "<p>" + value.Title + "</p>" +
                    "<ul id='list' data-role='listview' data-inset='true' class='ui-listview'>" +
                    "<li><a href='#employeedetails' class='ui-btn ui-btn-icon-right ui-icon-carat-r'><h2>View Manager</h2><p>" + manager
                    + "</p></a></li>" +
                    "<li><a href='#employeedetails' class='ui-btn ui-btn-icon-right ui-icon-carat-r'><h2>View Direct Reports</h2><p>" + reportsNum
                    + "</p></a></li>" +
                    "<li><a href='#' class='ui-btn ui-btn-icon-right ui-icon-carat-r'><h2>Call Office</h2><p>" + value.OfficeNumber
                    + "</p></a></li>" +
                    "<li><a href='#' class='ui-btn ui-btn-icon-right ui-icon-carat-r'><h2>Call Cell</h2><p>" + value.CellNumber
                    + "</p></a></li>" +
                    "<li><a href='#' class='ui-btn ui-btn-icon-right ui-icon-carat-r'><h2>Call Cell</h2><p>" + value.Email
                    + "</p></a></li>" +
                    "</ul>"
            );
        });
    });

    
    // Back button takes user back one step
    
    // Call Office accesses user's phone's call feature and calls number
    
    // Call Cell accesses user's phone's call feature and calls number
    
    // "View Manager" onclick, screen is wiped and Manager's employee details show instead.
    
    // "View Direct Reports" onclick, ReportsTo page shown and AJAX populates with list of people reporting to that manager.

});