# angular-admin

This is a seed project of angular5 responsive website ( only have a front end for now ). The most significant advantage is it included a powerful admin side use to deliver to your customer. 

I applied this project to a lot of real project, which works fine for me and hope this project will help you as well.

## Run server

You need to provide a standard angular2 environments folder and files before build and run the server, The content should have the following structure.

```javascript
export const environment = {
  production: true,
  API_URL: window.location.origin + "/api/", // depend on your backend api design
  APP_URL: window.location.origin,
  APP:"your app name",
  GOOGLE_MAP:{
  	KEY:'Yor google map key  (can be empty string here)'
  },
  GOOGLE_LOGIN:{
  	CLIENT_ID:'your google login client id (can be empty string here)'
  },
  GOOGLE_ANALYTICS:{
    CLIENT_ID:'your google analytics client id  (can be empty string here)'
  },
  STRIPE:{
    CLIENT_KEY:'your stripe client key (can be empty string here)'
  }
};
```

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

The code can be divide to two parts, one is admin module which is in /admin folder, the other are the main website component.
The layout component use to organize layout of the page, ui module used to define the ui component like header, footer, pages folder keep the page that used to navigate in layout.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

N/A

## Running end-to-end tests

N/A

## Further help

N/A
