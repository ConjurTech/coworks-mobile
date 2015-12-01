// Default stuff
var ENV = {
  urls: {
    BASE_ENDPOINT: 'http://coworks.conjur.tech'
  }
}

// Choose the environment here for now
ENV.env = "production";
// ENV.env = "development";

// Enviroment specific variables
switch (ENV.env) {
  case 'production': break;
  case 'staging': break;
  case 'development':
  ENV.urls.BASE_ENDPOINT = 'http://localhost:3000'
  break;
}

// Set URLS last based on base endpoint
ENV.urls = {
  GET_COMPANIES: ENV.urls.BASE_ENDPOINT + '/companies',
  SIGN_IN: ENV.urls.BASE_ENDPOINT + '/auth/sign_in',
}

export default ENV;
