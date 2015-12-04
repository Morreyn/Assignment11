$(document).ready(function () {
    "use strict";
    
     /*"View Direct Reports" onclick, ReportsTo page shown and AJAX populates with list of people reporting to that manager.*/
    
    $('body').on("click", "#eDetails #directreportslink", function (e) {
        
/*        var name = $("#employeecontent div h2").html();
        var ObjectName = []
        
        
        $.getJSON("../data/data.json", function (data) {
            for (var i=0; i<data.employees.length; i++) {
                for (var j=0; j<employees.length; j++) {
                    if (name === data.employees[i].Name) {
                        data.employees[j]
                    }
                }                
            }
            
            
        });*/
        
        $("#reportscontent").append('<ul id="directList" data-role="listview" class="ui-listview"></ul>');
        $("#directList").listview();
        
        console.log(ObjectName);
    });
    
    // User taps on subordinate, moves to "Employee Details" page and AJAX populates with specific employee info
    
});