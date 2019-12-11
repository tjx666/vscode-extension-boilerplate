declare module 'progress-bar-webpack-plugin' {
    import { Compiler, Plugin } from 'webpack';

    interface ProgressBarPluginOptions {
        format: string;
        clear: boolean;
    }

    class ProgressBarPlugin extends Plugin {
        constructor(options?: Partial<ProgressBarPluginOptions>);
    }

    export = ProgressBarPlugin;
}
