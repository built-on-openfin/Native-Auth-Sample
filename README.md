# Native-Auth-Sample

Install sample using NPM I/Install

Update paths in sProvider and testJava.bat for location of bat and jar (or other apps you're using to test)

sProvider:
 - Registers search provider and listens for input from home, using which to populate home results. 
 - Initial result is hard coded for test and will launch the testJava.bat file located in the public folder

testJava.bat:
 - Takes arguments and forwards said arguments to the runnable jar, testJava.jar.
 - Change java portion to other app to use with .net etc.

testJava.jar
 - Contains a test app to display the passed arguments but can be replaced by anything else as long as the bat file is also changed. 
