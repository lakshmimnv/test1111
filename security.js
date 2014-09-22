


var securityApp = angular.module('securityApp', ['ui.router','ngRoute','ngEkathuwa','fxpicklist','ngGrid']);

var removeTemplate = '<input type="button" value="remove" ng-click="removeRow($index)" />';

securityApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/portfolio');

    $stateProvider

        // PORTFOLIO STATES AND NESTED VIEWS ========================================
        .state('portfolio', {
            url: '/portfolio',
            templateUrl: 'partials/security/partial-portfolio.html'
        })
        // nested list with custom controller
        .state('portfolio.list', {
            url: '/list',
            templateUrl: 'partials/security/partial-portfolio-list.html',
            controller: function($scope) {
                $scope.portfolios = ['Portfolio1', 'Portfolio2', 'Portfolio3'];
            }
        })
        // nested list with just some random string data
        .state('portfolio.paragraph', {
            url: '/paragraph',
            template: 'I could sure use a drink right now.'
        })
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('group', {
            url: '/group',
            views: {

                // the main template will be placed here (relatively named)
                '': {
                    templateUrl: 'partials/security/partial-group.html',
                    controller: 'createGroupController'
                } /*,

                // the child views will be defined here (absolutely named)
                'columnOne@about': { template: 'Look I am a column!' },

                // for column two, we'll define a separate controller
                'columnTwo@about': {
                    templateUrl: 'partials/security/table-data.html',
                    controller: 'testController'
                } */
            }
        })
        .state('user', {
            url: '/user',
            templateUrl : 'partials/security/partial-user.html'
        });

});  // closes $routerApp.config()

securityApp.controller('tabsController', function($scope, $location) {
    $scope.activeTab = "groups";
    $scope.isActive = function(route) {
        $scope.activeTab = $location.val;

        return route === $location.path();
    }
});

securityApp.controller('createGroupController', function($scope, $ekathuwa){
    console.log('start')
    $scope.form={};
    $scope.form.first='john';
    $scope.form.last='tom';


    $scope.ekathuwaModalStyle = function () {
        $ekathuwa.modal({
            id: "ekathuwaModalTempId",
            scope: $scope,
            templateURL: "partials/security/modal-CreateNewGroup.html",
            contentStyle: "width:350px;heigth:400px;background-color:#1b78f7;",
            contentCustomSize: 80,
            contentPreSize: "fl"
        });
    }
    $scope.ekathuwaModalTemp = function () {
        $ekathuwa.modal({
            id: "ekathuwaModalTempId",
            scope: $scope,
            templateURL: "partials/security/modal-CreateNewGroup.html"
        });
    }
    $scope.ekathuwaModalTempHTML = function () {
        $ekathuwa.modal({
            id: "ekathuwaTemlHTMLId",
            scope: $scope,
            contentPreSize: "fl",
            templateHTML: '<div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" class="modal fade" id="ekathuwaTemlHTMLId" style="display: none;"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button aria-hidden="true" data-dismiss="modal" class="close" type="button">x</button><h4 id="myModalLabel" class="modal-title">Ekathuwa Modal Heading</h4></div><div class="modal-body"><h4>Ekathuwa modal body.</h4><button class="btn btn-warning" ng-click="btnMsgFromCntl()">Get Message</button><div class="modal-footer"><button data-dismiss="modal" class="btn btn-default" type="button">Close</button><button class="btn btn-primary" type="button">Save changes</button></div></div></div></div>'
        });
    }
    $scope.ekathuwaModalBodyTempURL = function () {
        $ekathuwa.modal({
            id: "ekathuwaBodyTempLId",
            scope: $scope,
            headerText:"Ekathuwa modal header",
            bodyTemplateURL: 'partials/security/modal-CreateNewGroup-body.html'
        })

    }
});


securityApp.controller('createGroupController', function($scope, $ekathuwa){
    console.log('start')
    $scope.form={};
    $scope.form.first='john';
    $scope.form.last='tom';


    $scope.ekathuwaModalStyle = function () {
        $ekathuwa.modal({
            id: "ekathuwaModalTempId",
            scope: $scope,
            templateURL: "partials/security/modal-CreateNewGroup.html",
            contentStyle: "width:350px;heigth:400px;background-color:#1b78f7;",
            contentCustomSize: 80,
            contentPreSize: "fl"
        });
    }
    $scope.ekathuwaModalTemp = function () {
        $ekathuwa.modal({
            id: "ekathuwaModalTempId",
            scope: $scope,
            templateURL: "partials/security/modal-CreateNewGroup.html"
        });
    }
    $scope.ekathuwaModalTempHTML = function () {
        $ekathuwa.modal({
            id: "ekathuwaTemlHTMLId",
            scope: $scope,
            contentPreSize: "fl",
            templateHTML: '<div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" class="modal fade" id="ekathuwaTemlHTMLId" style="display: none;"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button aria-hidden="true" data-dismiss="modal" class="close" type="button">x</button><h4 id="myModalLabel" class="modal-title">Ekathuwa Modal Heading</h4></div><div class="modal-body"><h4>Ekathuwa modal body.</h4><button class="btn btn-warning" ng-click="btnMsgFromCntl()">Get Message</button><div class="modal-footer"><button data-dismiss="modal" class="btn btn-default" type="button">Close</button><button class="btn btn-primary" type="button">Save changes</button></div></div></div></div>'
        });
    }
    $scope.ekathuwaModalBodyTempURL = function () {
        $ekathuwa.modal({
            id: "ekathuwaBodyTempLId",
            scope: $scope,
            headerText:"Ekathuwa modal header",
            bodyTemplateURL: 'partials/security/modal-CreateNewGroup-body.html'
        })

    }
});


securityApp.controller('testCtrl', function($scope){
    $scope.toptions=new Array();
    $scope.subHeaderSrc = "Available Application";
    $scope.subHeaderDest = "Selected Application";

    for(var i=0; i<10; i++){
        $scope.toptions.push({
            name: "testCtrl value"+i,
            value: "value"+i,
            index: i
        });
    }

    $scope.tselected=[$scope.toptions[4], $scope.toptions[5]];



});

securityApp.controller('testCtrl1', function($scope){
    $scope.toptions=new Array();
    $scope.subHeaderSrc = "Available Application";
    $scope.subHeaderDest = "Selected Application";

    for(var i=0; i<10; i++){
        $scope.toptions.push({
            name: "testCtrl1 value"+i,
            value: "value"+i,
            index: i
        });
    }

    $scope.tselected=[$scope.toptions[4], $scope.toptions[5]];
});

securityApp.controller('MyCtrloriginal', function($scope) {
    $scope.srcData = [
        {UserID: "Jsmith", FullName: "John Smith", Status: "Enabled", CompanyName: "ACI Boston"},
        {UserID: "Mlau", FullName: "Mike Lau", Status: "Disabled", CompanyName: "ACI USA"},
        {UserID: "Slee", FullName: "Shawn Lee", Status: "Enabled", CompanyName: "ACI Westchester"},
        {UserID: "Jkhan", FullName: "Jain Khan", Status: "Enabled", CompanyName: "ACI USA"},
        {UserID: "Mlau2", FullName: "Mike Lau", Status: "Disabled", CompanyName: "ACI USA"},
        {UserID: "Slee2", FullName: "Shawn Lee", Status: "Enabled", CompanyName: "ACI Westchester"},
        {UserID: "Jkhan2", FullName: "Jain Khan", Status: "Enabled", CompanyName: "ACI USA"},
        {UserID: "Mnewman", FullName: "Mike Newman", Status: "Enabled", CompanyName: "ACI USA"}
        ];
    $scope.destData = [
        {UserID: "Jkhan", FullName: "Jain Khan", Status: "Enabled", CompanyName: "ACI USA"},
        {UserID: "Mnewman", FullName: "Mike Newman", Status: "Enabled", CompanyName: "ACI USA"}
    ];

    $scope.gridOptions = { data: 'srcData' };
    $scope.gridOptionsDest = { data: 'destData' };


});

var removeTemplate = '<input type="button" value=">" ng-click="removeRow($index)" />';

/*
securityApp.controller('MyCtrl', function($scope) {

   $scope.myData = [{name: "Moroni", age: 50},
        {name: "Tiancum", age: 43},
        {name: "Jacob", age: 27},
        {name: "Nephi", age: 29},
        {name: "Enos", age: 34}];

    $scope.destData = [{name: "Moroni", age: 50},
        {name: "Tiancum", age: 43},
        {name: "Enos", age: 34}];

    $scope.srcData = [{UserID: "Jsmith", FullName: "John Smith", Status: "Enabled", CompanyName: "ACI Boston"},
        {UserID: "Mlau", FullName: "Mike Lau", Status: "Disabled", CompanyName: "ACI USA"},
        {UserID: "Slee", FullName: "Shawn Lee", Status: "Enabled", CompanyName: "ACI Westchester"},
        {UserID: "Jkhan", FullName: "Jain Khan", Status: "Enabled", CompanyName: "ACI USA"},
        {UserID: "Mlau2", FullName: "Mike Lau", Status: "Disabled", CompanyName: "ACI USA"},
        {UserID: "Slee2", FullName: "Shawn Lee", Status: "Enabled", CompanyName: "ACI Westchester"},
        {UserID: "Jkhan2", FullName: "Jain Khan", Status: "Enabled", CompanyName: "ACI USA"},
        {UserID: "Mnewman", FullName: "Mike Newman", Status: "Enabled", CompanyName: "ACI USA"}
    ];

    $scope.gridOptions = {
        data: 'myData',
        columnDefs: [{field: 'name', displayName: 'Name'}, {field:'age', displayName:'Age'}, {field: 'remove', displayName:'Select', cellTemplate: removeTemplate}]
    };



    /*
        $scope.destData = [
 {UserID: "Jkhan", FullName: "Jain Khan", Status: "Enabled", CompanyName: "ACI USA"},
 {UserID: "Mnewman", FullName: "Mike Newman", Status: "Enabled", CompanyName: "ACI USA"}
 ];*
//    $scope.gridOptionsDest = { data: 'destData' };

    $scope.gridOptionsDest = { data: 'destData' };
    $scope.addRow = function() {
        $scope.destData.push({name: 'BABA', age: 100});
    };
    $scope.removeRow = function() {
        var index = this.row.rowIndex;
        alert(index, ":   ", this.row.value);
     //  $scope.gridOptionsDest.selectItem(index, true);
        $scope.gridOptions.selectItem(index, false);
        $scope.myData.splice(index, 1);
    };
});
*/

securityApp.controller('MyCtrl', function($scope) {

    $scope.myData = [{UserID: "User1", FullName: "John Smith", Status: "Enabled", CompanyName: "ACI Boston"},
        {UserID: "User2", FullName: "Mike Lau", Status: "Disabled", CompanyName: "ACI USA"},
        {UserID: "User3", FullName: "Shawn Lee", Status: "Enabled", CompanyName: "ACI Westchester"},
        {UserID: "User4", FullName: "Jain Khan", Status: "Enabled", CompanyName: "ACI USA"},
        {UserID: "User5", FullName: "Mike Lau", Status: "Disabled", CompanyName: "ACI USA"},
        {UserID: "User6", FullName: "Shawn Lee", Status: "Enabled", CompanyName: "ACI Westchester"},
        {UserID: "User7", FullName: "Jain Khan", Status: "Enabled", CompanyName: "ACI USA"},
        {UserID: "User8", FullName: "Mike Newman", Status: "Enabled", CompanyName: "ACI USA"}
    ];
    $scope.myData1 = [
        {UserID: "User9", FullName: "Jain Khan", Status: "Enabled", CompanyName: "ACI USA"},
        {UserID: "User10", FullName: "Mike Newman", Status: "Enabled", CompanyName: "ACI USA"}
    ];

    $scope.gridOptions = {
        data: 'myData'
    };

    $scope.gridOptions1 = {
        data: 'myData1'
    };

    //ngGridEventData gets emitted after all functions in watch for data changes
    $scope.$on('ngGridEventData', function() {
        console.log("on ngGridEventData change logged");
        $scope.gridOptions.selectRow(0, false);
    });


  //  $scope.removeRowUpper = function() {
    $scope.shiftRight = function() {
        var selectedItems = $scope.gridOptions.$gridScope.selectedItems;
        console.log("selectedItems  ===== "+selectedItems);
        angular.forEach(selectedItems, function(item, index) {
            angular.forEach($scope.myData, function(item1, index2) {
                if (item.UserID === item1.UserID) {
                    item.index = index2;
                }
            });
            $scope.myData.splice(item.index, 1);
            $scope.myData1.push(item);
            $scope.gridOptions.selectAll(false);

        });
   };

    $scope.shiftRightAll = function() {
        angular.forEach($scope.myData, function(item, index) {
            $scope.gridOptions.selectItem(index, true);
        });

        var selectedItems = $scope.gridOptions.$gridScope.selectedItems;

        angular.forEach(selectedItems, function(item, index){
            angular.forEach($scope.myData, function(item1, index2) {
                if (item.UserID === item1.UserID) {
                    item.index = index2;
                }
            });
            //$scope.gridOptions.selectItem(index, true);
            $scope.myData.splice(item.index, 1);
            $scope.myData1.push(item);
        });
    };

    $scope.shiftLeftAll = function() {
        angular.forEach($scope.myData1, function(item, index) {
            $scope.gridOptions.selectItem(index, true);
        });
        var selectedItems = $scope.gridOptions.$gridScope.selectedItems;
        angular.forEach(selectedItems, function(item, index){
            angular.forEach($scope.myData1, function(item1, index2) {
                if (item.UserID === item1.UserID) {
                    item.index = index2;
                }
            });
                alert("shiftLeftAll --- index= ",index);
                //$scope.gridOptions1.selectItem(index, true);
                $scope.myData1.splice(item.index, 1);
                $scope.myData.push(item);
            
            });

/*
        var selectedItems = $scope.gridOptions1.$gridScope.selectedItems;
        console.log("selectedItems  ===== "+selectedItems);
        angular.forEach(selectedItems, function(item, index) {
            console.log("item.index ==== "+item.index);
            console.log("index ==== "+index);
            $scope.myData1.splice(index, 1);
            $scope.myData.push(item);

        }); */
    };

    $scope.shiftLeft = function() {

        var selectedItems = $scope.gridOptions1.$gridScope.selectedItems;
        console.log("selectedItems  ===== "+selectedItems);
        angular.forEach(selectedItems, function(item, index) {
            angular.forEach($scope.myData1, function(item1, index2) {
                if (item.UserID === item1.UserID) {
                    item.index = index2;
                }
            });
            console.log(item);
            console.log(index);
            $scope.myData1.splice(item.index, 1);
            $scope.myData.push(item);
            $scope.gridOptions1.selectAll(false);
        });

    };
});

securityApp.directive("subHeaderSrc", function(){
   return {
       restrict: 'A',
       scope: false,
       transclude: false,
       template: '<div>{{subHeaderSrc}}</div>'
   }
});

securityApp.directive("subHeaderDest", function(){
    return {
        restrict: 'A',
        scope: false,
        transclude: false,
        template: '<div>{{subHeaderDest}}</div>'
    }
});

securityApp.directive("ngRow", function(){
   return {
       restrict: 'C',
       scope : false,
       template: '<div>row selected.</div>'
   }
});
/*
securityApp.directive("subHeaderPlacement", function(){
    return {
        restrict: 'A',
        scope: {
            subheadersrc: "@",
            subheaderdest: "@"
        },
        transclude: false,
        template: '<div>{{subheadersrc}}</div>',
        link: function(scope, el, attr) {
            alert(getElementsByClassName('plSubHeaderSrc'));
        }
    }
}); */

