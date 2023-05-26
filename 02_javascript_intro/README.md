## Javascript Intro

1. In order to write javascript code, we need to add **script** element.
2. Script element can be added in head section or body section.
3. The best practice is to put script tag **at the end** of body section after all the elements.  
   *  First reason, Browser parses index.html file from **top to bottom**. So if it's in head section and there is lot of javascript code, the browser will get busy in executing and parsing the javascript code and it wont be able to render the content of the page(body tag). Result in **bad user experience.**
   *  Second reason, almost always the elements in *script* tag needs to talk with the elements on this webpage. eg. you want to show or hide some elements so by adding the code at the end of the body tag will be confident that all these elements are rendered by the browser.
   *  **Exception** -> sometimes you have third party code which needs to be placed in the head section.
4. console.log("Hello world");  => //console.log("") is a statement, that expresses an action to be carried out, in this case we want to "log" a "message" on the "console".
5. All statements in javascript should be terminated by semicolon.
6. We can use // in javascript,to add comments. This will help other developers to understand the code.
7. Here, 'Hello world' is a string, string is a sequence of characters.
8. After running the file on live server. Go to browser>>inspect>>console and we can see the Hello world message.
   ![plot](https://github.com/RaghavKachhawaha9/javascript_beginner/blob/main/02_javascript_intro/img/console.PNG)
