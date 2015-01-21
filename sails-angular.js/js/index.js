angular.module('colin', ['myService','ui.bootstrap','ngMessages'])
    .controller('MainCtrl', function($scope,empData) {
            $scope.name = 'World';
           // $scope.class=orderClass;
            $scope.class=["glyphicon-chevron-down","glyphicon-chevron-up"];
            $scope.isClass="";
            $scope.sort = {
                direction:-1,
                sortable:false,//默认不排序
                current:"",    // 当前排序的标签名
                updown:"-",       //倒序/顺序
                toggle: function(v) {
                    this.sortable=true;
                    this.direction=this.direction==-1?"1":"-1";
                    this.sortable=true;
                    this.current= v.label;
                    if(this.direction==1){
                        this.updown=v.name;
                        $scope.isClass=$scope.class[1]
                    }else{
                        this.updown="-"+v.name;
                        $scope.isClass=$scope.class[0]
                    }
                    console.log(this.updown+"::"+this.direction)
                },
                filter:{
                    id:"",
                    name:"",
                    phone:"",
                    email:"",
                    qq:"",
                    city:""
                }
            };
            $scope.employees =empData.getData();
            $scope.showEdit = true;
            $scope.labels=[
                {
                    label: 'id',
                    name: 'id',
                    type: 'string'
                },{
                    label: '姓名',
                    name: 'name',
                    type: 'string'
                },{
                    label: '电话号码',
                    name: 'phone',
                    type: 'string'
                },{
                    label: '电子邮箱',
                    name: 'email',
                    type: 'string'
                },{
                    label: 'QQ',
                    name: 'qq',
                    type: 'number'
                },{
                    label: '所在城市',
                    name: 'city',
                    type: 'string'
                },
            ]
            $scope.master = {};
        })
    .controller('pag',function($scope,empData){
        $scope.totalItems = 266;
        $scope.currentPage = 4;
        $scope.setPage = function (pageNo) {
            $scope.currentPage = pageNo;
        };

        $scope.pageChanged = function() {
           // $log.log('Page changed to: ' + $scope.currentPage);
            console.log($scope.currentPage)
        };
        $scope.maxSize = 5;
    })
        .directive("edit",function($document){
            return{
                restrict: 'AE',
                require: 'ngModel',
                link: function(scope,element,attrs,ngModel){
                    element.bind("click",function(){
                        //var id = ngModel.$modelValue.id;//这里的概念很重要
                        scope.$apply(function(){
                            angular.copy(ngModel.$modelValue,scope.master);
                        })
                        var arr=$(element).parents('tr').find('input');
                        arr.each(function(index,el){
                            $(el).removeClass("inactive").addClass("active").removeAttr("readOnly");
                        })
                        scope.$apply(function(){
                            scope.showEdit = false;
                        })
                    });
                }
            }
        })
        .directive("update",function($document){
            return{
                restrict: 'AE',
                require: 'ngModel',
                link: function(scope,element,attrs,ngModel){
                    element.bind("click",function(){
                        alert("编号"+ngModel.$modelValue.id + "成员信息被更新");
                        var arr=$(element).parents('tr').find('input');
                        arr.each(function(index,el){
                            $(el).removeClass("active").addClass("inactive").attr("readOnly",true);
                        })
                        scope.$apply(function(){
                            scope.showEdit = true;
                        });
                        console.log(ngModel.$modelValue)
                    })
                }
            }
        })
        .directive("cancel",function($document){
            return{
                restrict: 'AE',
                require: 'ngModel',
                link: function(scope,element,attrs,ngModel){
                    element.bind("click",function(){
                        scope.$apply(function(){
                            angular.copy(scope.master,ngModel.$modelValue);
                        })
                        var arr=$(element).parents('tr').find('input');
                        arr.each(function(index,el){
                            $(el).removeClass("active").addClass("inactive").prop("readOnly",true);
                        })
                        scope.$apply(function(){
                            scope.showEdit = true;
                        })
                    })
                }
            }
        })
        .directive("delete",function($document){
            return{
                restrict:'AE',
                require: 'ngModel',
                link:function(scope, element, attrs,ngModel){
                    element.bind("click",function(){
                        var id = ngModel.$modelValue.id;
                        alert("delete item where employee id:=" + id);
                        scope.$apply(function(){
                            for(var i=0; i<scope.employees.length; i++){
                                if(scope.employees[i].id==id){
                                    console.log(scope.employees[i])
                                    scope.employees.splice(i,1);
                                }
                            }
                            console.log(scope.employees);
                        })
                    })
                }
            }
        });