function x() {
  var a = 19;
  function y() {
    console.log(a);
  }
  y();
}
x();


function x() {
    var a = 19;
    function y() {
      console.log(a);
    }
    return y;
  }
   var z=x();
  
  
  
  

