# Starter for small app (back/front end) for running script

This is a small starter for running simple scripts on a raspberry pi.
The goal is of course to install Raspbian and configure an apache for exposing the service.

The backend could be able to send email based on the result of the script but that's not the point here ;-)

## Backend
For running backend, please clone "back" folder into your www/ folder. 
Then, be sure you have every needed php module installed.

You need:
*  PHP >= 7.1.3 
> sudo apt install php
* OpenSSL PHP Extension (Included on Linux by default)
* PDO PHP Extension (MySQL, MariaDB)
> sudo apt install php-mysql
* Mbstring PHP Extension
> sudo apt install php-mbstring

During my install, I also installed those but I'm not sure they are needed...
> php-ext-dom AND/OR php-xml

Summary
To install everything needed in point of vue of the backend, please run the following command
> apt install composer php php-mysql php-mbstring php-xml mysql


### Installation
It's time to install php dependencies thanks to [Composer](https://getcomposer.org) via the following command
> composer install

Then copy .env.example file in .env and edit informations for your config.

Of course, in your apache configuration you will expose only the public folder of the back folder.

## Front-End
Based on [Angular](https://angular.io/) + [Angular Material](https://material.angular.io/), the front-end is really easy to use and implement.
For this, we play also with [Angular CLI](https://cli.angular.io/).
You can install it by running this:
> npm install -g @angular/cli

Thanks to this, you can generate easily some components, services, etc.

For running the front-end via Apache, you should follow those steps:
1. run ```npm install``` into your frontend project
2. run ```ng build --aot``` for building the project
3. Copy the content of **dist** folder into your Apache.

Install of npm

If you don't have yet npm and nodejs installed on your linux, please install nvm . Please run the following commands :

curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash


nvm install 8


nvm use 8


Voilà! Npm is now available on your linux 😃 

FYI:
Don't forget to adapt your **nginx** or **apache** config for Angular Router.

In nginx, add this: 
```
server {
        listen 80;
        listen [::]:80;

        root /var/www/example.com/html;

        index index.html index.htm index.nginx-debian.html;

        server_name example.com www.example.com;


#       ==========================
#       Add the following location
#       ==========================

        location / {
            try_files $uri $uri/ =404;
        }
}
``` 

In Apache, add the following code in your config: 
```
Options +FollowSymLinks
IndexIgnore */*
RewriteEngine on

# if a directory or a file exists, use it directly
RewriteCond %{REQUEST_FILENAME} -s [OR]
RewriteCond %{REQUEST_FILENAME} -l [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteCond %{REQUEST_URI} !/api

# otherwise forward it to index.html 
RewriteRule ^.*$ - [NC,L]
RewriteRule ^app/. /app/index.html [NC,L]
```
