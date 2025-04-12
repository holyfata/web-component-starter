import { Config } from '@stencil/core';

import { reactOutputTarget as react } from '@stencil/react-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';

export const config: Config = {
  namespace: 'core',
  extras: {
    experimentalImportInjection: true,
  },
  outputTargets: [
    react({
      componentCorePackage: '@holygata/core',
      proxiesFile: '../react-library/src/components/stencil-generated/index.ts',
      includeDefineCustomElements: true,
    }),
    vueOutputTarget({
      componentCorePackage: '@holygata/core', // i.e.: stencil-library
      proxiesFile: '../vue-library/src/components.ts',
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
  ],
};
