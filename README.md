np25keys
=====
I played around with Web-MIDI and a custom UI Design and created a keyboard trainer application based on Ionic 5.

Upright piano KW (sounds)
====

The sounds in this applications are from a free sound bank:
http://freepats.zenvoid.org/Piano/acoustic-grand-piano.html#UprightKW

>This sound bank has been created from a Kawai upright piano, located in a
>living room. Thanks to Inma Martínez de Miguel for kindly letting us access to
>her home to play and record the piano.
> 
>It was recorded by Gonzalo <humanogonzalo@gmail.com> and Roberto
><roberto@zenvoid.org> on January 2017, using a Zoom H1 portable recorder
>mounted on a tripod in front of the piano, approximately at the place where
>the head of a piano player would be.
>
>The raw recordings were cropped, edited, and processed by Roberto, using free
>software programs. This sound bank, in several formats and qualities, is
>available on the FreePats project web pages:
>
>http://freepats.zenvoid.org/Piano/acoustic-grand-piano.html#UprightKW
>
>Published under the terms of Creative Commons CC0 public domain dedication:
>https://creativecommons.org/publicdomain/zero/1.0/

Many Many Thanks to them <3

Known Issues
---

* Some animation issues
   * All the custom animations stress flex to its limits i think
   * On the play page there are a lot of panels (it lags a bit with everything on) 
     * -> investigate -> its getting better! -> probly piano roll as flex is troublesome...
   * Might be fixed with the styles clean up
* Having the options in the menu is quite nice but it is in the dom the whole time
   * As popover it would be lazy loaded but its not so nice  
   * Also having all the options available at the same time might be a bit much
   * Still dont know about Setter and Getter pattern

TODO
---
* clean up styles
  * Animation Performance
* add more lessons
* multiple midi devices (select one)

Next Version Features
---
* Stats on lessons (page)
* Multiple piano rolls for portrait view one octave each ? 24 keys.. or one dbl

IOS (need a mac for this... dayum)
---
add ios platform ionic cordova platforms add ios ionic cordova build --release ios
(fails with "xcodebuild was not found. Please install version 9.0.0 or greater from App Store")
could install vm with macos and xcode ionic has a package service but account needed (not free)

Android
---

Add android platform
--------
ionic cordova platforms add android

Create KeyStore for NP
---------

1. Generate .keystore
   `
   keytool -genkey -v -keystore %KEYSTORENAME%.keystore -alias %USER% -keyalg RSA -keysize 2048 -validity 10000
   `
2. Migrate key
   `
   keytool -importkeystore -srckeystore %KEYSTORENAME%.keystore -destkeystore %KEYSTORENAME%.keystore -deststoretype pkcs12
   `

Create .apk File (Windows)
--------

1. Build unsigned apk
   `
   ionic cordova build --release android
   `
2. Sign apk
   `
   jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore %KEYSTORENAME%.keystore -storepass %PASSWORD% platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk %USER%
   %USER% password: %PASSWORD%
    `
3. Optimize apk
   `
   zipalign -v 4 platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk .\release\np-25keys.apk
   `

