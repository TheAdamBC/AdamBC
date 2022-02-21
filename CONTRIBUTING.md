# Adam BC Contributing Guidelines

Welcome, thank you for your interest in contributing to the Adam Blockchain Computer Project!

The Adam Blockchain Computer (Adam BC) is a decentralized blockchain based super computer. 

Small AI Research labs, Individual scientists, Institutions on the continent that cannot afford tens of millions of dollars to hire large super computers can pool together a group of personal computers and use Adam BC's peer to peer computing mode to do hyper computations.

Consider Adam BC to be the “poor person’s super computer”.

In the interest of fostering an open and welcoming environment for everyone, we as contributors pledge to be welcoming and friendly and to make the participation in our project and our community feel safe and respected.

Everyone that is contributing to the project is expected to follow our [Code of Conduct](./CODE_OF_CONDUCT.md), [Terms of Use](https://theadambc.com/about.html#terms) policy, [Team Culture](./CULTURE_AND_VALUES.md), and [Third-party Developers](THIRD_PARTY_DEVELOPERS.md) guide. 

Please make sure that you read our guidelines in order to ensure that you are following our project’s standards.

<br/>

## Adam BC Installation Guide:

Checkout the Installation Procedure: [Adam BC Installation Guide](./INSTALLATION.md) and [Full Documentation](./README.md)

<br/>

## Submit a Pull Request

Adam BC's Git Branch naming convention is as following. 

`TYPE-ISSUE_ID-DESCRIPTION`

<br/>

Example:

```
doc-548-submit-a-pull-request-section-to-contribution-guide
```

<br/>

When `TYPE` can be:

- **feat** - is adding a new feature.
- **doc** - is documentation only changes.
- **cicd** - makes changes related to CI/CD system.
- **fix** - is a bug fix.
- **refactor** - is code change that neither fixes a bug nor adds a feature.

<br/>

**All PRs must include a commit message with the changes description!** 

<br/>

For the initial start, fork the project and use git clone command to download the repository to your computer. 

A standard procedure for working on an issue would be to:

1. `git pull`, before creating a new branch, pull the changes from upstream. Your master needs to be up to date.
```
$ git pull
```
2. Create new branch from `master` like: `doc-548-submit-a-pull-request-section-to-contribution-guide`.<br/>
```
$ git checkout -b [name_of_your_new_branch]
```
3. Work - commit - repeat (be sure to be in your branch).

4. Push changes to GitHub. 
```
$ git push origin [name_of_your_new_branch]
```

5. Submit your changes for review.
If you go to your repository on GitHub, you'll see a `Compare & pull request` button. Click on that button.
6. Start a Pull Request
Now submit the pull request and click on `Create pull request`.
7. Get a code review approval/reject.
8. After approval, merge your PR.
9. GitHub will automatically delete the branch after the merge is done. (they can still be restored).

<br/>

## Scalability, Speed, and Performance

When contributing code to Adam BC, please take into account the following considerations:

* Response Time.
* Throughput.
* Requests per Seconds.
* Network Usage.
* Memory Usage.
* Browser Rendering.
* Background Jobs.
* Task Execution Time.

<br/>

## Security & Privacy

Security and privacy are extremely important to Appwrite, developers, and users alike. 

Make sure to follow the best industry standards and practices.

To report security related issues read the guide: [Security Vulnerability](./SECURITY.md)

<br/>

## Dependencies

Please avoid introducing new dependencies to Adam BC without consulting the team. New dependencies can be very helpful but also introduce new security and privacy issues, complexity, and impact total docker image size.

Adding a new dependency should have vital value on the product with minimum possible risk.

Adam BC uses NPM as a package manager for managing code dependencies for both backend and frontend development. We try our best to avoid creating or using any unnecessary dependencies, and any new dependency to the project is subjected to a lead developer review and approval.

<br/>

## Introducing New Features

We would love you to contribute to Adam BC, but we would also like to make sure the platform is loyal to its vision and mission statement.

For us to find the right balance, please open an issue explaining your ideas before introducing a new pull request.

This will allow the Adam BC community to have sufficient discussion about the new feature value and how it fits in the product roadmap and vision.

This is also important for the Adam BC lead developers to be able to give technical input and different emphasis regarding the feature design and architecture. 

