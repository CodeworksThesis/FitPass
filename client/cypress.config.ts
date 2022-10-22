import { defineConfig } from "cypress";

require('dotenv').config()

export default defineConfig({
  chromeWebSecurity:false,
  env:{
    auth0_email:'siclari98@icloud.com',
    auth0_password:'test123test',
    auth0_domain:'fitpass.eu.auth0.com',
    auth0_audience:'fitpassuniqueid',
    auth0_client_id:'At8nqhZKzFDcvJAgmCCkGDHfRFz5Ao2s'

  },
  e2e: {
    baseUrl: "http://localhost:3000",
  },
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});

/*

REACT_APP_AUTH0_DOMAIN=fitpass.eu.auth0.com
REACT_APP_AUTH0_CLIENT_ID=At8nqhZKzFDcvJAgmCCkGDHfRFz5Ao2s
REACT_APP_AUTH0_AUDIENCE=fitpassuniqueid
REACT_APP_GOOGLEMAP_APIKEY=AIzaSyB91C9Ur8kzAv_w-kbDjBl0jSsYgZlrotQ
REACT_APP_STRIPE_PUBLIC_KEY=pk_test_51Lryu9JOxwiGGkLeJAI8OrCt8OCgQO7qczW0yRJlZZqc4jaIWanEMlQt2hbWnPXwyEHznzdD5olwfrELA4qUxuMK00cPq94Y7Z




*/
