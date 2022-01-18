// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import Translator from './main/Translator';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "translation" is now active!');
	const tranlatedMessage = (new Translator)._translate();
	const activeEditor = vscode.window.activeTextEditor;
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('translation.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showWarningMessage(`Testing phase: Fake translate ${tranlatedMessage}`);
		vscode.window.showInformationMessage('Hello World from Translation!');
		if (activeEditor) {
			const document = activeEditor.document;
			const selection = activeEditor.selection;

			vscode.window.showInformationMessage(
				`Selected line: ${activeEditor.viewColumn} \n
				Values: ${activeEditor.document.getText(selection)}`
				);
			
			const word = document.getText(selection);
			const reversed = word.split('').reverse().join('');

			activeEditor.edit(editBuilder => {
				editBuilder.replace(selection, reversed);
			});

			console.log('Reversed');
			
		} else {
			vscode.window.showInformationMessage('No select line ::::');
		}
		
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
