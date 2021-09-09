@ECHO off
ECHO The %~nx0 script args are...
for %%I IN (%*) DO ECHO %%I

cd C:\Openfin\TestJSApp\AuthSample
java -jar testJava.jar %*
pause