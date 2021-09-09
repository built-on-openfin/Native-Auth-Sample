@ECHO off
ECHO The %~nx0 script args are...
for %%I IN (%*) DO ECHO %%I

cd C:\Openfin\java-app-launcher
java -jar testJava.jar %*
pause