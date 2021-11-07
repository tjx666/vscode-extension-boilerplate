import glob from 'glob';
import Mocha from 'mocha';
import path from 'path';

export function run(): Promise<void> {
    const mocha = new Mocha({ color: true });
    const testsRoot = path.resolve(__dirname, '..');

    return new Promise((resolve, reject) => {
        glob('**/**.test.js', { cwd: testsRoot }, (err, files) => {
            if (err) {
                return reject(err);
            }

            files.forEach((f) => mocha.addFile(path.resolve(testsRoot, f)));

            try {
                mocha.run((failures) => {
                    if (failures > 0) {
                        reject(new Error(`${failures} tests failed.`));
                    } else {
                        resolve();
                    }
                });
                // eslint-disable-next-line unicorn/catch-error-name
            } catch (testErr) {
                return reject(testErr);
            }
        });
    });
}
