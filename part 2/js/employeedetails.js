$(document).ready(function () {
    "use strict";
    
   // AJAX populates details of employee based on which list item was clicked        
        
    $('body').on("click", "#list a", function (e) {
        
        var idOfEmployee = this.lastChild.id;
        var reportsNum = this.lastChild.textContent;

        $("#employeecontent").empty();
        
        $.getJSON("../data/data.json", function (data) {
            $.each(data, function () {
                
                var managerNum = data.employees[idOfEmployee - 1].ReportsTo - 1;
                var manager;
                if (data.employees[managerNum] === undefined) {
                    manager = "None";
                } else {
                    manager = data.employees[managerNum].Name;
                }
                
                
                $.each(this, function (key, value) {
                    
                    if (idOfEmployee === value.ID) {
                        $("#employeecontent").append(
                            "<img src='" + value.ImagePath + "'>"
                                + "<div>"
                                + "<h2>" + value.Name + "</h2>"
                                + "<p>" + value.Title + "</p>"
                                + "</div>"
                                + "<ul id='eDetails' data-role='listview' data-inset='true' class='ui-listview'>"
                                + "<li><a id='managerlink' href='#employeedetails' class='ui-btn ui-btn-icon-right ui-icon-carat-r'><h2>View Manager</h2><p>"
                                + manager
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
    
    /*Click "View Manager" and AJAX repopulates Employee Details page with new employee info*/
    
    $('body').on("click", "#eDetails #managerlink", function (e) {

        var managerName = $("#managerlink p").html();
        var newManagerName;
        var idOfManager;
        var reportsNum = 0;
        
        
        $("#employeecontent").empty();
        
        $.getJSON("../data/data.json", function (data) {
            $.each(data, function () {
                
                for (var i=0; i<data.employees.length; i++) {
                    if (data.employees[i].Name === managerName) {
                        idOfManager = data.employees[i].ID;
                        newManagerName = data.employees[i].ReportsTo;  
                    }
                    for (var j=0; j<data.employees.length; j++) {
                        if (data.employees[j].ID === newManagerName) {
                            newManagerName = data.employees[j].Name;
                            
                        } else if (newManagerName === "") {
                            newManagerName = "None";
                        }

                        
                    }
                }
                
                for (var i=0; i<data.employees.length; i++) {
                    if (data.employees[i].ReportsTo === idOfManager) {
                            reportsNum += 1;
                    }
                }

                
                $.each(this, function (key, value) {
                    
                    
                    
                    if (managerName === value.Name) {
                        $("#employeecontent").append(
                            "<img src='" + value.ImagePath + "'>"
                                + "<div>"
                                + "<h2>" + value.Name + "</h2>"
                                + "<p>" + value.Title + "</p>"
                                + "</div>"
                                + "<ul id='eDetails' data-role='listview' data-inset='true' class='ui-listview'>"
                                + "<li><a id='managerlink' href='#employeedetails' class='ui-btn ui-btn-icon-right ui-icon-carat-r'><h2>View Manager</h2><p>"
                                + newManagerName
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