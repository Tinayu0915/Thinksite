var min=0;
var max=0;
function sorting_smaller(Students){
    
      for(var k=0;k<Students.length;k++){
      for(var l=k+1;l<Students.length;l++){
        if(parseInt(Students[k].ID)<parseInt(Students[l].ID)){
            container1=Students[k];
            Students[k]=Students[l];
            Students[l]=container1;

        }
      }
      }
    
      }