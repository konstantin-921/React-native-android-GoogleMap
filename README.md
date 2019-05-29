Project Title
=============

This application is a test implementation for demonstrating the work of Google Maps Api for React Native. This implementation works only for android and ios. You can only deploy the application on **macOS**.

Requirements
------------

* [Install react-native dependencies for ios](https://facebook.github.io/react-native/docs/getting-started.html#installing-dependencies)
* [Install react-native dependencies for android](https://facebook.github.io/react-native/docs/getting-started.html#installing-dependencies-1)
* [Install CocoaPods](https://guides.cocoapods.org/using/getting-started.html)

Getting started
---------------
```
  https://github.com/konstantin-921/React-native-android-GoogleMap.git
  cd React-native-android-GoogleMap
  npm install
  cd ios
  pod install
```

Creating .env file
------------------

There is a **.env.example** file in the project root. You need to rename it to **.env** and enter your data into all environment variables.

Custom setting
--------------

Specify your own Google Maps API Key in .env file for the field **GOOGLE_API_KEY**. [Guide here](https://developers.google.com/maps/documentation/javascript/get-api-key)

Deployment
----------

For deployment on a device:

 ```
 react-native run-android
 react-native run-ios
 ```
