# JqueryPlugin-s-
Repo that holds jquery plugins that I authored
<br>
<hr>

<h3>About titleAnimate.js</h3>
TitleAnimate.js is a tiny plugin that helps you keep the title bar content <b> <i> changing & repeating </i> </b>, on the go with single command.
All you need is to pass the array contents and duration.
<br>


<h3>Using titleAnimate.js</h3>
   <h4>Step 1 : </h4> Include the titleAnimate.js
  
<h4>Step 2 : </h4> Prepare the array of titles <br> 
e.g.   <code> arrayOfTitles = ["Mytitle1","Mytitle2","Mytitle3"]; </code>
<h4> Step 3 : </h4> Invoke the plugin as 
<code> $('title').animateTitle({"title":arrayOfTitles,duration:500}); </code>
here <i>duration</i> is in milliseconds


<h4> To Stop the current animation </h4>
<code> $('title').animateTitle({"enabled":false}); 
</code>
<br/>
OR
<br/>
<code> $('title').animateTitle("clear");</code>
<br/>
OR
<br/>
<code> $('title').animateTitle("stop");</code>

<hr>

<h4>Default Configuration </h4>
<code>      title: originalTitle,
            duration : 2000,
            enabled : true
            
</code>
