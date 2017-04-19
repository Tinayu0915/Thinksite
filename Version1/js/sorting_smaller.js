function sorting_smaller(){
      for(var k=1;k<Students.length;k++){
      for(var l=k+1;l<Students.length;l++){
        if(parseInt(Students[k][0])<parseInt(Students[l][0])){
            container1=Students[k][0];
            Students[k][0]=Students[l][0];
            Students[l][0]=container1;

        }
      }
      console.log(parseInt(Students[k][0]));
      $(".worktab tbody tr").eq(k-1).children("td").eq(0).html(Students[k][0]);
      }  
      }