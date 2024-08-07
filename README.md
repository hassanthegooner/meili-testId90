# Test Capacitor Project

Example capacitor 5 + Ionic 6 project using the `capacitor-meili` plugin

## Getting started

1. Install Packages

```bash
npm install
```

2. Copy Web Assets to Native Project:

```bash
ionic capacitor copy
```

3. Update Capacitor Plugins:

```bash
ionic capacitor update
```

> **Note:** Ensure you have the latest Meili SDK pod installed for iOS. To do this, `cd` into the iOS app directory and then run `pod update MeiliSDK`


4. Synchronize the Project:

```bash
ioniic capactior sync
```

5. Open the Project in Xcode or Android Studio:

    iOS

    ```bash
    ionic capacitor open ios
    ```

    Android

    ```bash
    ionic capacitor open android
    ```

6. Verify Package ID (iOS only):

In Xcode, navigate to the Project Navigator. Select the project root to open the project editor. Under the Identity section, verify that the Package ID matches the Bundle Identifier.

7. Manage Signing (iOS only):

In the same project editor, under the Signing & Capabilities section:
- Ensure Automatically manage signing is enabled.
- Select a Development Team. Xcode will attempt to automatically prepare provisioning and signing for the selected team.

8. Select Target Device or Simulator (iOS only):

In Xcode, select a target simulator or connected device from the device toolbar at the top of the Xcode window.

9. Run the App (iOS only):

Click the play button in Xcode to build and run the app on the selected simulator or device.

## Summary of Commands

```bash
npm i
ionic capacitor copy
ionic capacitor update
ionic capacitor sync
ionic capacitor open [ios | android]
```

## Additional Tips

- Ensure you have the latest version of Xcode installed.
- If you encounter any issues with signing, make sure your Apple Developer account is properly configured and connected.
- You may need to clean the build folder in Xcode if you encounter build errors (Product > Clean Build Folder).
- Ensure you have the latest Meili SDK pod installed. To do this, `cd` into the iOS app directory and then run `pod update MeiliSDK`

## Podfile

Ensure that the following dependencies are in the iOS [Podfile](ios/App/Podfile)

```ruby
source 'https://cdn.cocoapods.org/'
source 'https://github.com/meili-travel-tech/meili-ios-pods'
```

## Project Dependencies

Below are the list of dependencies. You can check your package versions by running `npm ls --depth=0` from the root of the project

### Dependencies

```text
├── @angular-devkit/architect@0.1402.12
├── @angular-devkit/build-angular@14.2.13
├── @angular-eslint/builder@14.4.0
├── @angular-eslint/eslint-plugin-template@14.4.0
├── @angular-eslint/eslint-plugin@14.4.0
├── @angular-eslint/schematics@14.4.0
├── @angular-eslint/template-parser@14.4.0
├── @angular/animations@14.3.0
├── @angular/cdk@14.2.7
├── @angular/cli@14.2.13
├── @angular/common@14.3.0
├── @angular/compiler-cli@14.3.0
├── @angular/compiler@14.3.0
├── @angular/core@14.3.0
├── @angular/fire@7.6.1
├── @angular/forms@14.3.0
├── @angular/language-service@14.3.0
├── @angular/localize@14.3.0
├── @angular/material@14.2.7
├── @angular/platform-browser-dynamic@14.3.0
├── @angular/platform-browser@14.3.0
├── @angular/router@14.3.0
├── @capacitor/android@5.7.7
├── @capacitor/app@5.0.8
├── @capacitor/cli@5.7.7
├── @capacitor/core@5.7.7
├── @capacitor/haptics@5.0.8
├── @capacitor/ios@5.7.7
├── @capacitor/keyboard@5.0.9
├── @capacitor/status-bar@5.0.8
├── @ionic/angular-toolkit@2.3.3
├── @ionic/angular@6.7.5
├── @types/jasmine@5.1.4
├── @typescript-eslint/eslint-plugin@5.43.0
├── @typescript-eslint/parser@5.43.0
├── capacitor-meili@0.0.6
├── eslint-plugin-import@2.29.1
├── eslint-plugin-jsdoc@48.8.3
├── eslint-plugin-prefer-arrow@1.2.2
├── eslint@8.57.0
├── ionicons@7.4.0
├── jasmine-core@3.8.0
├── jasmine-spec-reporter@5.0.2
├── karma-chrome-launcher@3.2.0
├── karma-coverage-istanbul-reporter@3.0.3
├── karma-jasmine-html-reporter@1.7.0
├── karma-jasmine@4.0.2
├── karma-mocha-reporter@2.2.5
├── karma@6.4.3
├── rxjs@6.6.7
├── tslib@2.6.3
├── typescript@4.6.4
```
