mgo-api-test
============

NodeJS implementation for some test apis

System Requirements
===================

1. NodeJS Engine
2. MongoDB Instance , at localhost:27017
3. Open port 5000, to bind the nodejs server to.
4. all the commands must be run in the package directory.

Setup on local machine
======================

1. Run mongo mongo-init.js , to prepopulate the mongodb with dummy data that we will use for testing.
2. run npm install, this will install the nodejs dependencies for the software.

Running the server
1. node main.js // to run the server, if node is not available try nodejs command

List of available endpoints
===========================

1. Authenticate a user
path= /api/1.0/user/auth
method= GET / POST , both supported
params for POST - json payload in format {"user":"estersolomon@terrago.com","pass":"12345"}, content-type -application/json
params for GET -, user=estersolomon@terrago.com&pass=12345

eg: GET /api/1.0/user/auth?user=estersolomon@terrago.com&pass=12345
return Boolean , true = authenticated, false=not authenticated

2. List All users
path= /api/1.0/users
method= GET
params=
gender= {male/female}, {optional}
age ={integer},{optional}
limit = {number of records to retrieve}
page= {page number to retrieve}

eg: GET /api/1.0/users?gender=male&age=22&limit=15&page=2
return : json array of all user info

3. Get System Status
path= /api/1.0/status
method= GET

eg: GET /api/1.0/status
return Boolean status, true= system ok, false= system down

4. List a directory content
path= /api/1.0/listdir
method= GET
params =
path={directory path to retrieve list from}

eg: GET /api/1.0/listdir?path=/var
return : list of files and folders in the directory

Unit Tests
===========

Included file test.js includes unit tests for the component objects

System Requirement
==================

1. installed and working nodeunit, this will get installed with the package install
2. nodeunit requires a working nodejs engine, with executable named as node

Running the unit tests
======================
run the following command to start unit testing.

nodeunit test.js

unit test includes 8 assertions, to test the followinf, 
1.user authentication.
2.user profile.
3.retrieving files.
4.checking db status.