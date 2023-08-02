
const yourIP = '192.168.1.42'; // See the docs https://docs.abp.io/en/abp/latest/Getting-Started-React-Native?Tiered=No
const port  = 44339;
const apiUrl = `http://${yourIP}:${port}`;
const ENV = {
  dev: {
    apiUrl: apiUrl,
    oAuthConfig: {
      issuer: apiUrl,
      clientId: 'StokTakip_App',
      scope: 'offline_access StokTakip',
    },
    localization: {
      defaultResourceName: 'StokTakip',
    },
  },
  prod: {
    apiUrl: 'http://192.168.1.42:44339',
    oAuthConfig: {
      issuer: 'http://192.168.1.42:44339',
      clientId: 'StokTakip_App',
      scope: 'offline_access StokTakip',
    },
    localization: {
      defaultResourceName: 'StokTakip',
    },
  },
};

export const getEnvVars = () => {
  // eslint-disable-next-line no-undef
  return __DEV__ ? ENV.dev : ENV.prod;
};
