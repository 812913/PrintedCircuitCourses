/**
 * Created by person on 2016/10/31.
 */
function DisplayDate()
{
    var mydate=new Date();
    var year=mydate.getFullYear();
    var month=mydate.getMonth()+1;
    var date=mydate.getDate();
    var myweekday=mydate.getDay();
    var weekday;
    if(myweekday==0)
        weekday="星期日";
    else if (myweekday==1)
        weekday="星期一";
    else if (myweekday==2)
        weekday="星期二";
    else if (myweekday==3)
        weekday="星期三";
    else if (myweekday==4)
        weekday="星期四";
    else if (myweekday==5)
        weekday="星期五";
    else if (myweekday==6)
        weekday="星期六";
    document.write(year+"年"+month+"月"+date+"日"+weekday);
}
DisplayDate();