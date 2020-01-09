import * as vscode from 'vscode';

function handler() {
    vscode.window.showInformationMessage('Hello Visual Studio Code!');
}

const command: CommandModule = {
    identifier: 'helloVSCode',
    handler,
};

export default command;
