
# Adam Blockchain Computer (Adam BC):

The Adam Blockchain Computer (Adam BC) is a decentralized blockchain based super computer.

Small AI Research labs, Individual scientists, Institutions and Businesses that cannot afford tens of millions of dollars to hire large super computers can pool together a group of personal computers and use Adam BC's peer to peer computing mode to do hyper computations.

Consider Adam BC to be the _“poor person’s super computer”_.

<br/>

## Getting Started:

- [Adam BC Installation](#adam-bc-installation)

- [Create an Adam BC DApp](#creating-an-adam-bc-dapp)

- [Adam BC Documentation](/DOCUMENTATION.md)

<br/>

## Adam BC Installation:

Install the following applications on your PC before installing Adam BC.

- [Node.JS](https://nodejs.org/en/download/current/), 

- Redis (For Linux Users), 

- [Memurai](https://www.memurai.com/get-memurai) (For Windows Users).

</br>

### Download or Clone Adam BC from Github:

Go to https://Github.com/TheAdamBC/AdamBC and download or clone Adam BC's core app.

</br>

### Install NPM dependencies:

Open the unzipped or cloned Adam BC app folder in your favorite code editor (we use VS Code) and install the app's npm dependency modules. 

_npm install_

</br>

### Install 'Adam' Command Line Interface (CLI):

To use the 'Adam' command in the CLI, you'll need to install it globally. To do this, run the command below.

_npm install -g_

</br>

## Creating an Adam BC DApp:

Third-party Developers can build Decentralized Apps (DApps) on Adam BC.

With the 'Adam' keyword installed globally, you can create a Decentralized App (DApp) on Adam BC by typing the command below in the CLI terminal of your app.

_Adam create AppName_

</br>

The above command will by default create an Adam BC 'fs' DApp, a 'filesystem' heavy application.

Currently Adam BC can build 3 types of DApps; 

- 'numerics' DApp (arithmetics-heavy DApp), 

- 'fs' DApp (file-heavy data DApp), and 

- 'multimedia' DApp (image or video rich DApp).

</br>

To create a 'numerics' heavy DApp use the 'n' option keyword, to create a 'multimedia' heavy DApp use the 'm' option keyword, to create a 'filesystem' heavy DApp use the 'f' option keyword. 

The corresponding commands look like below.

_Adam create -n AppName_

_Adam create -m AppName_

_Adam create -f AppName_

</br>

Adam BC also has an additional custom command for creating a PDF heavy DApp.

To create a 'PDF' heavy DApp use the 'p' option keyword.

_Adam create -p AppName_

</br>

### Running your Project:

You can start and run your newly created Adam BC DApp by using the CLI command below.

_Adam start AppName_

</br>

If the run was successful, you should see the message "Adam BC DApp started successfully on Port 6553" in your console.

Open your browser and visit 'http://localhost:6553'. 

Click 'Start' to start computation.

</br>

### Deleting an Adam BC DApp:

To delete a DApp from Adam BC, run the command below in the Command terminal. 

_Adam delete AppName_

