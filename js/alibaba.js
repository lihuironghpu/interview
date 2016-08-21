/**
 * Created by lhr on 16/8/6.
 */
//    考察变量声明提升
var foo = 1;
function main(){
    console.log(foo);//foo变量声明提前，undefined
    var foo = 2; //相当于在函数内部先声明了var foo;再在这里赋值
    console.log(foo);//2
    console.log(this.foo);//上下文环境的foo的值，1
    this.foo = 3;
    console.log(foo);//2
    console.log(this.foo);//3
}
main();
console.log(foo);//3


//考察数组基本API
var a = [1,2,3];
a.splice(1,1,6,7,8,9);//在数组index1，也就是原来2的地方，删除一个元素，在此位置插入6,7,8,9
console.log(a);//[1,6,7,8,9,3]

var a1 = [1,2,3];
a1.splice(1,0,6,7,8,9);//在数组index1，也就是原来2的地方，删除0个元素，在此位置前插入6,7,8,9
console.log(a1);//[1,6,7,8,9,2,3]


//考察字符串API 把多维数组转成1维数组
var arra = [1,[2,3,[4,5]]];
function tranOne(arr){
    var arrb = (arra+'').split(",");
    return arrb;
}
console.log(tranOne(arra));

//值类型，引用类型的理解
var obja = {"x": 1};
var objb = obja;
console.log(objb.x);//1
obja.x = 2;
console.log(objb.x);//2
obja = {"x": 3};
console.log(objb.x);//2
obja.x=4;
console.log(objb.x);//2

//数字类型转千分位表示 12345678.9转成12,345,678.9
function tranFormat(num){
    if(isNaN(num)){
        return;
    }else{
        var strArr = (num+'').split(".");
        var intStr = strArr[0]+'';
        var intArr = [];
        var len = (intStr.length)%3==0 ? (intStr.length)/3: parseInt((intStr.length)/3)+1;
        for(var i = 0; i <len ; i++){
            if(i == 0){
                var indexLen = (intStr.length)%3==0 ? 3 : (intStr.length)%3;
                intArr.push(intStr.substr(0,indexLen));
            }else{
                var startIndex = (intStr.length)%3 == 0 ? (intStr.length)%3+i*3 : (intStr.length)%3+(i-1)*3;
                intArr.push(intStr.substr(startIndex,3));
            }
        }
        return intArr.toString()+"."+strArr[1];
    }
}
function tranFormatExg(num){
    if(isNaN(num)) {
        return;
    }else{
        var intStr,pointStr='';
        if((num+'').search(".")>=0){
            intStr = (num+'').split(".")[0];
            pointStr = "." + (num+'').split(".")[1]
        }else{
            intStr = num+'';
        }
    }
    var newNum = intStr.replace(/\d{1,3}(?=(\d{3})+$)/g,"$&,");
//  d{1,3}一到3位数字  ?=(\d{3})+$   后边紧跟至少一个3个数字   结尾
    return newNum + pointStr;
}


