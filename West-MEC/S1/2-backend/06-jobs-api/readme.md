# steps for Heroku

## install heroku CLI tools
install from heroku.com

## create a fresh git
- delete the old .git if it exsits
- `git init` to create a fresh git repo

## log into heroku
- create an heroku account
- `heroku login`
- `heroku create [project name]`
 - project name must be all lowercase and start with a letter
 - names are global not individual
  - In github name limits are restricted to your names, here it is restricted to everyone's names
- check git to make usre its linked properly `git remote -v`

## heroku enviroment setup
- heroku config:set [key=value]
 - [key=value] is a key value pair
 - sets a .env variable on the server
- `git push heroku master`