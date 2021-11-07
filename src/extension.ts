import * as vscode from 'vscode';

import helloWorld from './helloWorld';

export function activate(context: vscode.ExtensionContext): void {
    context.subscriptions.push(
        vscode.commands.registerCommand('VSCodeExtensionBoilerplate.helloVSCode', () =>
            helloWorld(),
        ),
    );
}

export function deactivate(): void {
    // recycle resource...
}
