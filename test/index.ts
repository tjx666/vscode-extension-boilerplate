import glob from 'glob';
import Mocha from 'mocha';
import path from 'path';

export function run(testsRoot: string, cb: (error: any, failures?: number) => void): void {
    const mocha = new Mocha({ color: true });

    console.log(testsRoot);

    glob('**/**.test.js', { cwd: testsRoot }, (err, files) => {
        if (err) {
            cb(err);
            return;
        }

        // Add files to the test suite
        for (const f of files) mocha.addFile(path.resolve(testsRoot, f));

        try {
            // Run the mocha test
            mocha.run((failures) => {
                cb(null, failures);
            });
        } catch (error) {
            cb(error);
        }
    });
}
