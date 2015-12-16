$(document).ready(function () {
    "use strict";
    
     /*Click "View Direct Reports", ReportsTo page shown and AJAX populates with list of people reporting to that manager.*/
    
    $('body').on("click", "#eDetails #directreportslink", function (e) {
        
        var name = $("#employeecontent div h2").html();
        var reportsName;
        var ID;
        var reportsID;
        var reportsNum = 0;
        
        $("#reportscontent").empty();
        
        $.getJSON("data/data.json", function (data) {
            $.each(data, function () {
                $.each(this, function (key, value) {
                    if (value.Name === name) {
                        ID = value.ID;
                    }
                    
                    if (value.ReportsTo === ID) {
                        
                        reportsID = value.ID;
                        for (var i=0; i<data.employees.length; i++) {
                             if (data.employees[i].ReportsTo === reportsID) {
                                reportsNum += 1;
                            }
                        }
                        
                        $("#directList").append(
                            "<li class='ui-li-has-count ui-li-has-thumb'><a href='#employeedetails' class='ui-btn ui-btn-icon-right ui-icon-carat-r'><img src='" + value.ImagePath + "'>" +
                                "<h2>" + value.Name + "</h2>" +
                                "<p>" + value.Title + "</p>" +
                                "<span class='ui-li-count ui-body-inherit'>" + reportsNum + "</span></a></l1>"
                        );
                    } 
                    
                    reportsNum = 0;
                });
            });
        });
        $("#reportscontent").append('<ul id="directList" data-role="listview" class="ui-listview"></ul>');
        $("#directList").listview();
    });
    
     // User clicks on subordinate, moves to "Employee Details" page and AJAX populates with specific employee info
    
    $('body').on("click", "#directList a", function (e) {
        
        var employeeName = $(this).children("h2").html();
        var idOfManager;
        var ID;
        var managerName;
        var reportsNum = 0;
        
        
        $("#employeecontent").empty();
        
        $.getJSON("data/data.json", function (data) {
            $.each(data, function () {
                
                for (var i=0; i<data.employees.length; i++) {
                    if (data.employees[i].Name === employeeName) {
                        idOfManager = data.employees[i].ReportsTo;
                        ID = data.employees[i].ID;
                    }
                }
                
                for (var i=0; i<data.employees.length; i++) {
                    if (data.employees[i].ID === idOfManager) {
                        managerName = data.employees[i].Name;
                    }
                }
                
                for (var i=0; i<data.employees.length; i++) {
                    if (data.employees[i].ReportsTo === ID) {
                            reportsNum += 1;
                    }
                }

                
                $.each(this, function (key, value) {
                    if (employeeName === value.Name) {
                        $("#employeecontent").append(
                            "<img src='" + value.ImagePath + "'>"
                                + "<div>"
                                + "<h2>" + value.Name + "</h2>"
                                + "<p>" + value.Title + "</p>"
                                + "</div>"
                                + "<ul id='eDetails' data-role='listview' data-inset='true' class='ui-listview'>"
                                + "<li><a id='managerlink' href='#employeedetails' class='ui-btn ui-btn-icon-right ui-icon-carat-r'><h2>View Manager</h2><p>"
                                + managerName
                                + "</p></a></li>"
                                + "<li><a id='directreportslink' href='#directreports' class='ui-btn ui-btn-icon-right ui-icon-carat-r'><h2>View Direct Reports</h2><p>"
                                + reportsNum
                                + "</p></a></li>"
                                + "<li><a href='tel:" + value.OfficeNumber + "' data-role='button' rel='external' class='ui-btn ui-btn-icon-right ui-icon-carat-r'><h2>Call Office</h2><p>" + value.OfficeNumber
                                + "</p></a></li>"
                                + "<li><a href='tel:" + value.CellNumber + "' data-role='button' rel='external' class='ui-btn ui-btn-icon-right ui-icon-carat-r'><h2>Call Cell</h2><p>" + value.CellNumber
                                + "</p></a></li>"
                                + "<li><a href='#' class='ui-btn ui-btn-icon-right ui-icon-carat-r'><h2>Call Cell</h2><p>" + value.Email
                                + "</p></a></li>"
                                + "</ul>"
                        );
                    }
                });
            });
        });
    });
    
});