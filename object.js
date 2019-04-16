function checkID(data){
    return data.id == "8030403992";
 }
 
 console.log("data stuff", githubData.length);
 const myData = githubData.find(checkID);
 console.log("myData", myData);