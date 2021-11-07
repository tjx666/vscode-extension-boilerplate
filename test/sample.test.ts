import { strictEqual } from 'assert';
import * as vscode from 'vscode';

import helloWorld from '../src/helloWorld';

describe('#test sample', () => {
    before(() => {
        vscode.window.showInformationMessage('Test begin!');
    });

    it('hello world', async () => {
        helloWorld();
        // delay to see the vscode notification
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 1.5 * 1000);
        });
    });

    it('one plus one equals two', () => {
        strictEqual(2, 1 + 1);
    });

    after(() => {
        vscode.window.showInformationMessage('Test end!');
    });
});
