var input = document.getElementsByClassName('controls');

for (var i = 0; i < input.length; i++) {

   input[i].addEventListener('keyup', function(){
       if(this.value.length>=1) { 
           console.log("skateOrDie")
           this.nextElementSibling.classlist.add('fijar');
       } else {
           this.nextElementSibling.classlist.remove('fijar');
       }
   });

}