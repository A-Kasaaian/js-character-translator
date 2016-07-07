# js-character-translator

This project helps you to translate a library of characters.It is sensitive to changes on your page. If an element changes on your page, It updates characters in the updated element if there is any. It is also sensitive to input and textarea fields, if anyone type in an input or textarea on your page, they'll see translated characters instead of what they have typed.
Sample: http://codepen.io/alirezakasaaian/pen/EyvNrb

## How to use it

1- place below script tag to your page before </body>. It is containing a library for your characters and their translations and a string of characters that you want to be translated on this page. It is a sample which translates english numbers on left hand to persian numbers on right hand. you can translate any character to any:
```
<script>
   var mapObj = {
          '1':"۱",
          '2':"۲",
          '3':"۳",
          '4':"۴",
          '5':"۵",
          '6':"۶",
          '7':"۷",
          '8':"۸",
          '9':"۹",
          '0':'۰'
      };
   var toTranslate = /1|2|3|4|5|6|7|8|9|0|lipstick/gi;
 </script>
  ```
2- Add translate.js after that
  enjoy it :) 
