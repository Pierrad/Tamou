# Front 

## Installation

- Follow the basic installation guide at https://reactnative.dev/docs/environment-setup
- Copy .env.example into .env

## Running

- Open a new terminal and go to project
- Run ```npm install```
- Run ```cd ios && pod install && cd ..```
- Run ```npx react-native start```
- Open a new terminal window in the same folder
- Run ```npx react-native run-ios``` or ```npx react-native run-android```

## Troubleshoot

If you have problems with ios, you can
- Move to ios folder
- Remove ./Pods
- Remove Podfile.lock
- Run ```pod install```


## Notes

Store user credentials inside Keychain
- https://github.com/oblador/react-native-keychain
- https://github.com/emeraldsanto/react-native-encrypted-storage

