# Test Capacitor Project

Example capacitor 5 + Ionic 6 project using the `capacitor-meili` plugin

## Getting started

1. Install Packages

```bash
npm install
```

2. Copy Web Assets to Native Project:

```bash
ionic capacitor copy ios
```

3. Update Capacitor Plugins:

```bash
ionic capacitor update
```

4. Synchronize the Project:

```bash
npx cap sync ios
```

5. Open the iOS Project in Xcode:

```bash
ionic capacitor open ios
```

6. Verify Package ID:

In Xcode, navigate to the Project Navigator. Select the project root to open the project editor. Under the Identity section, verify that the Package ID matches the Bundle Identifier.

7. Manage Signing:

In the same project editor, under the Signing & Capabilities section:
- Ensure Automatically manage signing is enabled.
- Select a Development Team. Xcode will attempt to automatically prepare provisioning and signing for the selected team.

8. Select Target Device or Simulator:

In Xcode, select a target simulator or connected device from the device toolbar at the top of the Xcode window.

9. Run the App:

Click the play button in Xcode to build and run the app on the selected simulator or device.

## Summary of Commands

```bash
npm i
ionic capacitor copy ios
ionic capacitor update
npx cap sync ios
ionic capacitor open ios
```

## Additional Tips

- Ensure you have the latest version of Xcode installed.
- If you encounter any issues with signing, make sure your Apple Developer account is properly configured and connected.
- You may need to clean the build folder in Xcode if you encounter build errors (Product > Clean Build Folder).

## Podfile

Ensure that the following dependencies are in the iOS [Podfile](ios/App/Podfile)

```ruby
source 'https://cdn.cocoapods.org/'
source 'https://github.com/meili-travel-tech/meili-ios-pods'
```

## Project Dependencies

Below are the list of dependencies. You can check your package versions by running `npm ls --depth=0` from the root of the project

### Dependencies

- **@angular/animations**: 14.3.0
- **@angular/cdk**: 14.2.7
- **@angular/common**: 14.3.0
- **@angular/core**: 14.3.0
- **@angular/fire**: 7.6.1
- **@angular/forms**: 14.3.0
- **@angular/localize**: 14.3.0
- **@angular/material**: 14.2.7
- **@angular/platform-browser**: 14.3.0
- **@angular/platform-browser-dynamic**: 14.3.0
- **@angular/router**: 14.3.0
- **@capacitor/app**: 5.0.8
- **@capacitor/core**: 5.7.7
- **@capacitor/haptics**: 5.0.8
- **@capacitor/ios**: 5.7.7
- **@capacitor/keyboard**: 5.0.9
- **@capacitor/status-bar**: 5.0.8
- **@ionic/angular**: 6.7.5
- **capacitor-meili**: 0.0.1
- **ionicons**: 7.4.0
- **rxjs**: 6.6.7
- **tslib**: 2.6.3
- **zone.js**: 0.11.8

### Dev Dependencies

- **@angular-devkit/architect**: 0.1402.12
- **@angular-devkit/build-angular**: 14.2.13
- **@angular-eslint/builder**: 14.4.0
- **@angular-eslint/eslint-plugin**: 14.4.0
- **@angular-eslint/eslint-plugin-template**: 14.4.0
- **@angular-eslint/schematics**: 14.4.0
- **@angular-eslint/template-parser**: 14.4.0
- **@angular/cli**: 14.2.13
- **@angular/compiler**: 14.3.0
- **@angular/compiler-cli**: 14.3.0
- **@angular/language-service**: 14.3.0
- **@capacitor/cli**: 5.7.7
- **@ionic/angular-toolkit**: 2.3.3
- **@typescript-eslint/eslint-plugin**: 5.43.0
- **@typescript-eslint/parser**: 5.43.0
- **eslint**: 8.57.0
- **eslint-plugin-import**: 2.29.1
- **eslint-plugin-jsdoc**: 48.8.3
- **eslint-plugin-prefer-arrow**: 1.2.2
- **jasmine-core**: 3.8.0
- **jasmine-spec-reporter**: 5.0.2
- **karma**: 6.4.3
- **karma-chrome-launcher**: 3.2.0
- **karma-coverage-istanbul-reporter**: 3.0.3
- **karma-jasmine**: 4.0.2
- **karma-jasmine-html-reporter**: 1.7.0
- **karma-mocha-reporter**: 2.2.5
- **@types/jasmine**: 5.1.4
- **typescript**: 4.6.4