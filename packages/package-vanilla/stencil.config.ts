import { Config } from "@stencil/core";
import { reactOutputTarget } from "@stencil/react-output-target";
import {
  vueOutputTarget,
  ComponentModelConfig,
} from "@stencil/vue-output-target";

export const config: Config = {
  namespace: "package-vanilla",
  outputTargets: [
    reactOutputTarget({
      // Relative path to where the React components will be generated
      outDir: "../package-react/src/stencil-output",
    }),
    vueOutputTarget({
      componentCorePackage: "package-vanilla",
      includeDefineCustomElements: true,
      proxiesFile: "../package-vue/src/stencil-output/components.ts",
    }),
    {
      type: "dist",
      esmLoaderPath: "../loader",
    },
    {
      type: "dist-custom-elements",
      customElementsExportBehavior: "auto-define-custom-elements",
      externalRuntime: false,
    },
  ],
  testing: {
    browserHeadless: "shell",
  },
};
