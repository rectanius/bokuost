            function klf(){
                var alpha = new Array(&#39;A&#39;,&#39;B&#39;,&#39;C&#39;,&#39;D&#39;,&#39;E&#39;,&#39;F&#39;,&#39;G&#39;,&#39;H&#39;,&#39;I&#39;,&#39;J&#39;,&#39;K&#39;,&#39;L&#39;,&#39;M&#39;,&#39;N&#39;,&#39;O&#39;,&#39;P&#39;,&#39;Q&#39;,&#39;R&#39;,&#39;S&#39;,&#39;T&#39;,&#39;U&#39;,&#39;V&#39;,&#39;W&#39;,&#39;X&#39;,&#39;Y&#39;,&#39;Z&#39;,&#39;a&#39;,&#39;b&#39;,&#39;c&#39;,&#39;d&#39;,&#39;e&#39;,&#39;f&#39;,&#39;g&#39;,&#39;h&#39;,&#39;i&#39;,&#39;j&#39;,&#39;k&#39;,&#39;l&#39;,&#39;m&#39;,&#39;n&#39;,&#39;o&#39;,&#39;p&#39;,&#39;q&#39;,&#39;r&#39;,&#39;s&#39;,&#39;t&#39;,&#39;u&#39;,&#39;v&#39;,&#39;w&#39;,&#39;x&#39;,&#39;y&#39;,&#39;z&#39;);
                var i;
                for (i=0;i&lt;6;i++){
                  var a = alpha[Math.floor(Math.random() * alpha.length)];
                  var b = alpha[Math.floor(Math.random() * alpha.length)];
                  var c = alpha[Math.floor(Math.random() * alpha.length)];
                  var d = alpha[Math.floor(Math.random() * alpha.length)];
                  var e = alpha[Math.floor(Math.random() * alpha.length)];
                 }
               var code = a + &#39; &#39; + b + &#39; &#39; + &#39; &#39; + c + &#39; &#39; + d + &#39; &#39; + e;
               document.getElementById(&quot;klf&quot;).value = code
             }
             function Validklf(){
                 var string1 = removeSpaces(document.getElementById(&#39;klf&#39;).value);
                 var string2 = removeSpaces(document.getElementById(&#39;answer&#39;).value);
                 var block = document.getElementById(&#39;ada&#39;);
                 if (string1 == string2){
				
                   $(document).ready(function(){
//Generate
$.urlParam = function(name){
var results = new RegExp(&#39;[\?&amp;]&#39; + name + &#39;=([^&amp;#]*)&#39;).exec(window.location.href);
if (results==null){
return null;
}
else{
return decodeURI(results[1]) || 0;
}
}		
var getlink = $(&quot;#getlink&quot;),
gotolink = $(&quot;#gotolink&quot;),
timer = $(&#39;#timer&#39;);
if ($.urlParam(&#39;o&#39;) != null){
  var counter = 6;
  setInterval(function() {
    counter--;
    if (counter &gt;= 0) {
      count = document.getElementById(&quot;count&quot;);
      count.innerHTML = &quot;Link will appear in &quot; + counter;
    }
    if (counter === 0) {
		$(&#39;#loading&#39;).addClass(&#39;hidden&#39;);
		gotolink.prop(&#39;disabled&#39;,false);						
        gotolink.removeClass(&#39;hidden&#39;);
        clearInterval(counter);
    }
  }, 1000);
}
function gotolinkcountdown(){
var countDown = 5;
var x = setInterval(function() {
var distance = countDown -= 1;
if (distance &lt; 0) {
clearInterval(x);
}
}, 300);
}
var request = false;
getlink.click(function() {
if (request == false) {
gotolinkcountdown();
request = true;		
}
$(&#39;html, body&#39;).animate({
scrollTop: eval(gotolink.offset().top - 10)
}, 100);
});
gotolink.on(&quot;dblclick&quot;,function(){
var realurl = aesCrypto.decrypt(convertstr($.urlParam(&#39;o&#39;)),convertstr(&#39;root&#39;));
window.location.href=realurl;
});
anoAdBlock.on(true, function() {
$(&quot;#adbs&quot;).html(&quot;Adblock Detected&quot;);
$(&quot;#adb&quot;).removeClass(&#39;hidden&#39;);
}).on(false, function() {
});
})
                      }
                      else{        
                        return null;
                 }
             }
             function removeSpaces(string){
               return string.split(&#39; &#39;).join(&#39;&#39;);
             }
function trut() {
  document.getElementById(&quot;check&quot;).style.display = &quot;inline-block&quot;;
}
       $(function(){
               if (document.location.href.indexOf(&#39;#?o&#39;) &gt; 0)
	 $(&quot;.cont, #ada&quot;).css(&quot;display&quot;,&quot;inline-block&quot;);
	});
