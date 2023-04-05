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
   
Step 4 - pull code inside ec2 from the github

Step 5 - run npm start to start the local express server on your port of choice

Step 5 - Note the above node app is running on localhost port 8000(in my case), the ec2 instance cannot be accessed over web

Step 6 - Add inbound rules in the ec2 instances to allow access to this instance over http on port 80

Step 7 - Now since port 80 of your ec2 instance is open, it is listening from the web, now ngnix comes into picture, ngnix will map this port 80 of ec2 instance to                localhost 8000

Step 8 - inside ec2 instance edit the ngnix.conf file using command : sudo nano /etc/nginx/nginx.conf

Step 9 - Add 
         
         server {
                     listen      80;
                     server_name <your ipv4 address on aws>;

                     location / {
                        proxy_pass http://127.0.0.1:8000;
                    }
                }
Step 10 - save it, now access your app over web with http://<ip address>/<path of node app>
           
           BINGO!!!!!!!!
