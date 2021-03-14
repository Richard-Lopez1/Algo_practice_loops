function sumprint1to5() {  
    for (var x = 1;  x <= 5; x++) {
     if (x >= 2) {   
         sum = x + z ;    
         var z = sum ;
        console.log("Num:",x,',','Sum: ',sum);       
       } 
       else {
        var z = x; 
        console.log("Num:", x, ',', 'Sum: ',x);                
       }      
     }
    }
    sumprint1to5()
