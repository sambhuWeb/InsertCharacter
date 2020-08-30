# InsertCharacter

Insert Character in the middle of the string in Textarea or Input box

### Publishing NPM Package

  1. Create & PUsh Git Tag:
  
        git tag v1.1.2
        git push origin --tags
  
  2. Login to Npm
  
         npm login
         userename: r******
         password: ***
         email: sam***.***.*****@****.com
   
     To Verify if Logged in:
     
         npm whoami 
    
  3. Modify the tag version on package.json as below:
  
         {
           "name": "insertcharacter",
           "version": "1.0.0",
           ...
         }
         
  4. Publish the package in npm js
  
         npm publish 
         
         
## Installation of this package
```npm install insertcharacter```

## Usage of this package

```
let insertcharacter = require('insertcharacter');

insertcharacter(this, 'nameOfTextArea);
