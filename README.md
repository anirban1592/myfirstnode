# myfirstnode
node on aws

this guide is to create the first node hello world app in an aws ubuntu instance and host it in an ngnix web serve

Step 1 - create a ec2 instance with ubuntu as its base image (i used free tier)

Step 2 - create a repo in github and push all the code necessary for the hello world app into the repo

Step 3 - login into ec2 instance and install below :-
           >> git
           >> ngnix - run command :-
                         sudo apt-get update
                         sudo apt-get install -y nginx
                         sudo service nginx restart
