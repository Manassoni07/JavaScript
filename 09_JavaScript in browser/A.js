/* 
JavaScript was initially created to make web pages 

browser has embedded engine called javascript engine or javascript runtime
Javascript ability in the browser is very limited to protect user's saftey 

the script tag is used to insert javascript in html 

console object methods 

1. assert() -> used to assert a condition 
2. clear()  -> clear the console 
3. log()    -> outputs the message in console
5. warn()   -> display a tabukar data
4. table()  -> used for warnings 
6. error()  -> used for errors 
7. info()   -> used for special information 

we also familier with prompt and alert 

                                            |  THEORY |
Window, BOM and DOM in JavaScript

In web development with JavaScript, understanding the Window object, Browser Object Model (BOM), and Document Object Model (DOM) is crucial for creating dynamic and interactive web pages. 

1. The Window object

The Window object is the top-level or global object in client-side JavaScript, representing the browser window itself.
It encompasses the entire browser environment, including the document, location, history, and other browser-related functionalities.
All global JavaScript objects, functions, and variables automatically become members of the Window object.
Therefore, you can access properties and methods directly (e.g., alert()) or by explicitly using the window prefix (e.g., window.alert()), according to CodeHelp. 

2. Browser Object Model (BOM)

The BOM allows JavaScript to interact with the browser.
It provides interfaces for browser control but is not officially standardized and may vary across browsers.
Key components include the window, navigator, location, screen, and history objects. Examples of BOM functionalities include window manipulation, alerts, and timing events. 

3. Document Object Model (DOM)

The DOM represents an HTML or XML document as a tree structure, enabling JavaScript to interact with the document's content, structure, and style.
It is a standardized W3C interface. The document object is the root of the DOM tree. 

Relationship between Window, BOM and DOM

The Window object is the global object.
The BOM provides browser-specific functionalities and includes the Window object. The DOM focuses on the HTML document's structure and is accessed through the document object, a property of the Window object. 
*/
