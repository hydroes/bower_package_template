# README #

# If travis CI is setup then add the badge by uncommenting the code below and replacing it with travis ci deatils url 
https://travis-ci.org/hydroes/test_travis_ci.svg?branch=master

<h1>bower module template</h1>

This is a template bower module that can be used as a base to develop new bower modules.
This template comes with the following built-in:

* unit testing
* selenium testing
* less compilation to css
* javascript minification
* javascript linting
* ecma6 to ecma5 transpilation (I invite you to start taking advantage of ecma6)
* bower repository build and release tasks
* travis ci integration (registerstration with travis ci required)

-----------------------------------------
Pre notes
-----------------------------------------
Please note that unless stated all commands in this document should be run from with the project root directory.

-----------------------------------------
Installation
-----------------------------------------
NodeJs is needed for development. Please run node -v to check if you have it installed and install it it if you do not.

Before development can begin the dev dependencies for gulp need to be installed by running:
npm install

-----------------------------------------
Workflow
-----------------------------------------

1) JS files 
JS are created in the src/js/ dir, any folder structure can be used within src dir. All js files will be
compiled and minified into the dist/js/ dir. To automatically compile the files when they are saved run 
"gulp". Now everytime you save a file in the src directory it will be compiled into the dist directory into 
1 file named main.js

2) CSS and less
less files are created in the src/less/ dir, any folder structure can be used within src/less/ dir. All js files will be
compiled and minified into the dist/css/ dir. To automatically compile the files when they are saved run 
"gulp". Now everytime you save a file in the src directory it will be compiled into the dist directory into 
1 file named main.css

3) the index.html file should be used to demo your work and to run selenium tests on. By default it includes 
the dist/js/main.min.js and dist/css/main.css files. Modify it to suite your modules needs.


-----------------------------------------
Testing
-----------------------------------------

This template module allows for both unit testing and selenium testing.
Jasmine is used for testing and here are sample tests for both types.

Sample tests for both unit and end to end (selenium) tests can be found in the tests directory.
Tests are configured to load the js files within dist/js/ so that they are avalaible to be tested.

1) Unit tests

To run unit tests run the gulp task:
gulp test

2) Selenium tests

To run selenium tests you will need a JDK (Java development kit) installed
at the time of writing this can be found <a href="http://www.oracle.com/technetwork/java/javase/downloads/index.html" target="_blank">here</a>

To check if you have a JDK installed you can run:
java -version

Make sure the webdriver is up-to-date by running:
webdriver-manager update

2.1) Open up a new console and run the following to start the selenium server:
webdriver-manager start

2.2) Open up a second console start a http server for the selenium server to execute tests on:
npm start

2.3) Open up a third console and navigate to the project root, run the following to execute the selenium tests:
protractor protractor.conf.js

-----------------------------------------
Release process
-----------------------------------------

1) Bumping versions

To make your package maintainable in a bower enviroment it needs to follow bower package management rules.

To notify repositories that this package has been updated you need to "bump" up the version numbers is bower.json and package.json
this can be accomplished automatically by running:

// v0.0.1 -> v0.0.2
gulp bump 

// v0.0.1 -> v0.1.0
gulp bump --minor

// v0.0.1 -> v1.0.1
gulp bump --major

2) Tagging

// v0.0.1 -> v0.0.2 + commit + tag + push
gulp tag

// v0.0.1 -> v0.1.0 + commit + tag + push
gulp tag --minor

// v0.0.1 -> v1.0.1 + commit + tag + push
gulp tag --major
