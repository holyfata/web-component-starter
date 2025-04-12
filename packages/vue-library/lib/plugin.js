import { applyPolyfills, defineCustomElements } from '@holygata/core/loader';
export const ComponentLibrary = {
    async install() {
        applyPolyfills().then(() => {
            defineCustomElements();
        });
    },
};
//# sourceMappingURL=plugin.js.map