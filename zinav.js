//导航切换
function doClick(o){
    document.getElementById("zinav").style.display="block";
    o.className="selected";
    var j;
    var id;
    var e;
    for(var i=1;i<=11;i++){
        id ="nav"+i;
        j = document.getElementById(id);
        e = document.getElementById("sub"+i);
        if(id != o.id){
            j.className="no";
            e.style.display = "none";
        }else{
            e.style.display = "block";
        }
    }
}
