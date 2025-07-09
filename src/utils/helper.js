function timeCompare(time1String,time2String){
    let td1=new Date(time1String);
    let td2=new Date(time2String);
    return td1.getTime()<td2.getTime();
}

module.exports={
    timeCompare
}