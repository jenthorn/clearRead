Access-a-Read

This jQuery plugin can be added to an article page on your website to make the article easier to read for your users. The example provided is strictly for a full page article. 

//Included:
- An icon to position somewhere on your page to bring users to the access-a-read page (I've hard coded this icon in the css file, because I've set all other img tags to be display none.).
- A close button to bring back to the original page.
- An example page to show what your page could look like before clicking into access-a-read.
- An example page of what access-a-read will look like.
- CSS styles to remove everything on the page and to bring your text back to large easy to read font.
- A high contrast style sheet (white background behind black text) called accessStyle.css
- A low contrast stylesheet (black background behind white text) called accessStyleLowContrast.css


How to Use:

- Link accessStyle.css stylesheet in the head of your HTML document.
- Add a div with a class of clearReadSwitch at the bottom of your HTML document before the closing body tag. This div holds the icon your user will click to bring up the access-a-read page.
	
<div class="clearReadSwitch"></div>

-Link jQuery and the main.js file at the bottom of your HTML document in a script tag

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>

<script src="js/main.js"></script>

-In the stylesheet, the clearReadSwitch has been position fixed at the bottom of the page. If you would like to change the position of the icon feel free to change the bottom and right values.

