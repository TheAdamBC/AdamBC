## Adam BC Installation and Running (Developer's Guide)

Install the following applications on your PC before installing Adam BC.

[Node.JS](https://nodejs.org/en/download/current/), Redis (For Linux Users), [Memurai](https://www.memurai.com/get-memurai) (For Windows Users).

## Download or Clone Adam BC from Github:

Go to https://Github.com/TheAdamBC/AdamBC and download or clone Adam BC's core app.

## Install NPM dependencies:

Open the unzipped or cloned Adam BC app folder in your favorite code editor (we use VS Code) and install the app's npm dependency modules. 

_npm install_

## Install 'Adam' Command Line Interface (CLI):

To use the 'Adam' command in the CLI, you'll need to install it globally. To do this, run the command below.

_npm install -g_

## Creating an Adam BC DApp:

With the 'Adam' keyword installed globally, you can create a Decentralized App (DApp) on Adam BC by typing the command below in the CLI terminal of your app.

_Adam create AppName_

The above command will by default create an Adam BC 'fs' DApp, a 'filesytem' heavy application.

Currently Adam BC can build 3 types of DApps; 'numerics' DApp (arithmetics-heavy DApp), 'fs' DApp (file-heavy data DApp), and 'multimedia' DApp (image or video rich DApp).

To create a 'numerics' or 'multimedia' heavy DApp, run their corresponding commands below.

_Adam create -n AppName_

_Adam create -m AppName_

_Adam create -f AppName_

## Running your Project:

You can start and run your newly created Adam BC DApp by using the CLI command below.

_Adam start AppName_

If the run was successful, you should see the message "Adam BC DApp started successfully on Port 6553" in your console.

Open your browser and visit 'http://localhost:6553'. 

Click 'Start' to start computation.

## Deleting an Adam BC DApp:

To delete a DApp from Adam BC, run the command below in the Command terminal. 

_Adam delete AppName_

