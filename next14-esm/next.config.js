import * as path from 'path';
import * as url from 'url';

const dirname = path.dirname(url.fileURLToPath(import.meta.url));

export default {
  experimental: { esmExternals: true },
  webpack: (config) => {
    config.resolve.alias['rlayers'] = path.resolve(dirname, 'node_modules', 'rlayers', 'dist');
    return config;
  }
};
