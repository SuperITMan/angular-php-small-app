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

### Installation
It's time to install php dependencies thanks to [Composer](https://getcomposer.org) via the following command
> composer install

Then copy .env.example file in .env and edit informations for your config.

## Front-End
Based on [Angular](https://angular.io/) + [Angular Material](https://material.angular.io/), the front-end is really easy to use and implement.
For this, we play also with [Angular CLI](https://cli.angular.io/).
You can install it by running this:
> npm install -g @angular/cli

Thanks to this, you can generate easily some components, services, etc.

For running the front-end via Apache, you should follow those steps:

1) run ```npm install``` into your frontend project
2) run ```ng build --aot``` for building the project
3) Copy the content of **dist** folder into your Apache.
