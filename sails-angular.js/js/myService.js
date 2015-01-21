/**
 * Created by pc on 2015/1/21.
 */
angular.module('myService',[])
    .factory('empData',function(){
        var arr=[{"id":101, "name":'John', "phone":'555-1276',"email":"dzjgulin2011@163.com","qq":"1143608417","city":"上海"},
                 {"id":103, "name":'Mary', "phone":'800-1233',"email":"zzjgulin2011@163.com","qq":"1143608417","city":"北京"},
                 {"id":105,"name":'Mike', "phone":'555-4321',"email":"dfzjgulin2011@163.com","qq":"1143608417","city":"广州"},
                 {"id":102,"name":'Adam', "phone":'555-5678',"email":"wezjgulin2011@163.com","qq":"1143608417","city":"深圳"},
                 {"id":104,"name":'Julie', "phone":'555-8765',"email":"yzjgulin2011@163.com","qq":"1143608417","city":"上海"},
                 {"id":106,"name":'Juliette', "phone":'555-5678',"email":"gzjgulin2011@163.com","qq":"1143608417","city":"上海"},
                {"id":101, "name":'John', "phone":'555-1276',"email":"dzjgulin2011@163.com","qq":"1143608417","city":"上海"},
                {"id":103, "name":'Mary', "phone":'800-1233',"email":"zzjgulin2011@163.com","qq":"1143608417","city":"北京"},
                {"id":105,"name":'Mike', "phone":'555-4321',"email":"dfzjgulin2011@163.com","qq":"1143608417","city":"广州"},
                {"id":102,"name":'Adam', "phone":'555-5678',"email":"wezjgulin2011@163.com","qq":"1143608417","city":"深圳"},
                {"id":104,"name":'Julie', "phone":'555-8765',"email":"yzjgulin2011@163.com","qq":"1143608417","city":"上海"},
                {"id":106,"name":'Juliette', "phone":'555-5678',"email":"gzjgulin2011@163.com","qq":"1143608417","city":"上海"}
        ];
        return{
            getData:function(){
                return arr;
            }
        }
    })