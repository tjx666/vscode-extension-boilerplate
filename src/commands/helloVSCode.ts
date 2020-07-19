/* eslint-disable unicorn/filename-case */
import vscode from 'vscode';

function handler(): void {
    vscode.window.showInformationMessage('Hello Visual Studio Code!');
}

const command: CommandModule = {
    identifier: 'helloVSCode',
    handler,
};

export default command;
