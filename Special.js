            function klf(){
                var alpha = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
                var i;
                for (i=0;i&lt;6;i++){
                  var a = alpha[Math.floor(Math.random() * alpha.length)];
                  var b = alpha[Math.floor(Math.random() * alpha.length)];
                  var c = alpha[Math.floor(Math.random() * alpha.length)];
                  var d = alpha[Math.floor(Math.random() * alpha.length)];
                  var e = alpha[Math.floor(Math.random() * alpha.length)];
                  var f = alpha[Math.floor(Math.random() * alpha.length)];
                  var g = alpha[Math.floor(Math.random() * alpha.length)];
                 }
               var code = a + ' ' + b + ' ' + ' ' + c + ' ' + d + ' ' + e + ' '+ f + ' ' + g;
               document.getElementById("klf").value = code
             }
             function Validklf(){
                 var string1 = removeSpaces(document.getElementById('klf').value);
                 var string2 = removeSpaces(document.getElementById('answer').value);
                 var block = document.getElementById('ada');
                 if (string1 == string2){
                  $(document).ready(function(){
//Generate
$.urlParam = function(name){
var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
if (results==null){
return null;
}
else{
return decodeURI(results[1]) || 0;
}
}		
var getlink = $("#getlink"),
gotolink = $("#gotolink"),
timer = $('#timer');
if ($.urlParam('o') != null){
  var counter = 6;
  setInterval(function() {
    counter--;
    if (counter >= 0) {
      count = document.getElementById("count");
      count.innerHTML = "Link will appear in " + counter;
    }
    if (counter === 0) {
		$('#loading').addClass('hidden');
		getlink.prop('disabled',false);						
        getlink.removeClass('hidden');
        clearInterval(counter);
    }
  }, 1000);
}
function gotolinkcountdown(){
var countDown = 5;
gotolink.removeClass('hidden');
gotolink.prop('disabled',true);
var x = setInterval(function() {
var distance = countDown -= 1;
gotolink.html('Plase Wait...');
if (distance < 0) {
clearInterval(x);
gotolink.prop('disabled',false);
gotolink.html('Go to Link');
}
}, 300);
}
var request = false;
getlink.click(function() {
if (request == false) {
gotolinkcountdown();
request = true;		
}
$('html, body').animate({
scrollTop: eval(gotolink.offset().top - 10)
}, 100);
});
gotolink.on("click",function(){
var realurl = aesCrypto.decrypt(convertstr($.urlParam('o')),convertstr('root'));
window.location.href=realurl;
});
noAdBlock.on(true, function() {
$("#adbs").html("Adblock Detected");
$("#adb").removeClass('hidden');
}).on(false, function() {
});
})
                      }
                      else{        
                        return null;
                      }
                  }
                  function removeSpaces(string){
                    return string.split(' ').join('');
                  }
