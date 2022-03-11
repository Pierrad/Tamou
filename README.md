# Front 

## Installation

- Follow the basic installation guide at https://reactnative.dev/docs/environment-setup
- Clone the project (you need to have the api project also)
- Copy ```.env.example``` into ```.env```
- Fill the values in ```.env```

## Running

- Open a new terminal and go to project
- Run ```npm install```
- Run ```cd ios && pod install && cd ..```
- Run ```npm run start```
- Open a new terminal window in the same folder
- Run ```npm run ios``` or ```npm run android```

## Troubleshoot

If you have problems with ios, you can
- Move to ios folder
- Remove ./Pods
- Remove Podfile.lock
- Run ```pod install```


## Notes

- Make a form component that can handle array of fields, values, validation ? 
- Better way to handle icons ?
- Handle pending state in Action Button