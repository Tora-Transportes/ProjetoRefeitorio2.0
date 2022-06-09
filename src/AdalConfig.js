import  {AuthenticationContext, adalFetch, withAdalLogin} from 'react-adal';


export const adalConfig = {
    tenant: '56eda749-b95e-4a74-93de-f01fd6b161cc',
    clientId: '5182a0de-2da4-47ae-85a5-199c60da7c86',
    endpoints: {
      api: ' 5182a0de-2da4-47ae-85a5-199c60da7c86',
    },
    cacheLocation: 'localStorage',
    redirectUri: 'http://localhost:3000'
};

export const authContext = new AuthenticationContext(adalConfig);

export const adalApiFetch = (fetch, url, options) =>
 adalFetch(authContext, adalConfig.endpoints.api, fetch, url, options);

export const withAdalLoginApi = withAdalLogin(authContext, adalConfig.endpoints.api);