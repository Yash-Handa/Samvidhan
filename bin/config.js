const config = {
  dev: 'development',
  prod: 'production',
  test: 'testing',
  // add general configs here
  apollo: {
    engineAPIKey: process.env.ENGINE_API_KEY,
  },
};

// by default 'development' env
process.env.NODE_ENV = process.env.NODE_ENV || config.dev;

config.env = process.env.NODE_ENV;

if (config.dev === 'development') {
  // add development related environment variables here
  process.env.DEBUG = 'Samvidhan:*';
}

const envBasedSetting = {
  development: {
    // add development related configs here
  },
  production: {
    // add production related configs here
  },
  testing: {
    // add testing related configs here
  },
};

// this is a shallow merge
module.exports = { ...config, ...envBasedSetting[config.env] };
