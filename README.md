# karakata-online
![banner](.github/files/banner.png)

## About the project

This repository contains the Frontend app for Karakata.
It is an idea that focuses on solving digital and online business owners day to day customer retention problems by using technology and automation (using the Artificial Intelligence model). 

#### The problem faced
The inability of business owners to easily reach and keep up with a wide range of customers concerning sales and product availability, unpaid invoices follow up, customer retention, 
estimating a customers lifetime value, custom kind of frequent communication to keep interaction between every old and new customers with the business activities. 

#### Solution
To have a web tool where sales and customer satisfaction are automated by using communication (starting with automated Whatsapp messaging). The app will be able to generate and send receipts 
and invoices to customers as at when due by making the sales process easy as well. 

## Tech Stack

**Client:** VueJS, Vuex, TailwindCSS

**Server:** Golang, Docker, PostgreSQL,


### Tools and Cheatsheet
Before running the project locally, make sure the following have been installed:
- Node
- NPM
- Vue 2

Libraries and packages used:
- [Tailwind](https://tailwindcss.com/)
- [Vue](https://vuejs.org/v2)


Useful Links:
- [About the Project](https://docs.google.com/document/d/1yf1SmaI8NdWO9m_9Nw4VCKSmy4nuoUKweaM3qPocrVg/edit)
- [Figma](https://www.figma.com/file/z0oG20n3Q6HkNvfOMusQmQ/Karakata?node-id=934%3A486)
- [Staging URL](https://staging.karakata.online)
- [Production URL](https://karakata.online/)

- [Tailwind Cheatsheet](https://tailwindcomponents.com/cheatsheet/)
- [Chakra Docs](https://chakra-ui.com/docs/getting-started)


###  Building the app locally
Clone the project

```bash
  git clone https://github.com/segsalerty2013/karakata-online.git
```

Go to the project directory

```bash
  cd karakata-online
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run nodemon
```

### Code Standards
- Folder names should be in `camelCase` e.g `components, getStarted, auth`
- Vue files should be in `PascalCase` e.g `Home.vue, TheFooter.vue, BaseInput.vue`
- Make sure to run `npm run lint` before pushing any code.
- Never use `v-if` on the same element as `v-for`


### VueJS Style

All code must meet the [Style Guide](https://vuejs.org/v2/style-guide/). This makes certain that all code is the same format as the existing code and means it will be as readable as possible.
Any code written otherwise will not be approved.



# Contributing Guide

We believe in having everyone contribute and helping us cook our beans. This guide will give you all the information you need as regards contribution.

* [New Contributor Guide](#contributing-guide)
  * [Ways to Contribute](#ways-to-contribute)
  * [Find an Issue](#find-an-issue)
  * [Ask for Help](#ask-for-help)
  * [Pull Request Lifecycle](#pull-request-lifecycle)
  * [Development Environment Setup](#development-environment-setup)
  * [Sign Your Commits](#sign-your-commits)
  * [Pull Request Checklist](#pull-request-checklist)


Welcome! We are glad that you want to contribute to our project! 💖

As you get started, you are in the best position to give us feedback on areas of
our project that we need help with including:

* Building the project UI and screens
* Connecting these screens to an API (To be provided)
* Problems found during setting up a new developer environment
* Gaps in our quickstart Guide or documentation
* Bugs found in our apps

If anything doesn't make sense, or doesn't work when you run it, please open an issue report and let us know!

## Ways to Contribute

We welcome many different types of contributions including:

* Web design
* New features
* Bug fixes
* Documentation
* Issue Triage
* Code Review


### Come to meetings!
Absolutely everyone is welcome to come to any of our meetings. You never need an
invite to join us. In fact, we want you to join us, even if you don’t have
anything you feel like you want to contribute. Just being there is enough!

You can find out more about our meetings [here](TODO). You don’t have to turn on
your video. The first time you come, introducing yourself is more than enough.
Over time, we hope that you feel comfortable voicing your opinions, giving
feedback on others’ ideas, and even sharing your own ideas, and experiences.

## Find an Issue

We have good first issues for new contributors and help wanted issues suitable
for any contributor. Issues tagged good first issue](https://github.com/segsalerty2013/karakata-online/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) has extra information to
help you make your first contribution. [help wanted](TODO) are issues
suitable for someone who isn't a core maintainer and is good to move onto after
your first pull request.

Sometimes there won’t be any issues with these labels. That’s ok! There is
likely still something for you to work on. If you want to contribute but you
don’t know where to start, please have a look at all the [pending issues](https://github.com/segsalerty2013/karakata-online/issues?q=is%3Aissue+is%3Aopen)


#### Important !
Once you see an issue that you'd like to work on, please post a comment saying
that you want to work on it. Something like "I want to work on this" is fine. 
Also, make sure to assign the issue to yourself so others know someone is 
already working on it.

## Ask for Help

The best way to reach us with a question when contributing is to ask on slack.

* The original github issue
* The developer mailing list
* Our Slack channel


## Sign Your Commits

### DCO
Licensing is important to open source projects. It provides some assurances that
the software will continue to be available based under the terms that the
author(s) desired. We require that contributors sign off on commits submitted to
our project's repositories. The [Developer Certificate of Origin
(DCO)](https://developercertificate.org/) is a way to certify that you wrote and
have the right to contribute the code you are submitting to the project.

You sign-off by adding the following to your commit messages. Your sign-off must
match the git user and email associated with the commit.

    This is my commit message

    Signed-off-by: Your Name <your.name@example.com>

Git has a `-s` command line option to do this automatically:

    git commit -s -m 'This is my commit message'

If you forgot to do this and have not yet pushed your changes to the remote
repository, you can amend your commit with the sign-off by running 

    git commit --amend -s 

## Pull Request Checklist

When you submit your pull request, or you push new commits to it, our automated
systems will run some checks on your new code. We require that your pull request
passes these checks, but we also have more criteria than just that before we can
accept and merge it. We recommend that you check the following things locally
before you submit your code:

* It passes tests: run the following command to run all of the tests locally:
  
  ```
  npm run test
  ```

  ```
  npm run lint
  ```
* Impacted code has new or updated tests
* Documentation created/updated
* We use `GitHub Actions`  to test all pull requests. We require that all tests succeed on a pull request before it is merged.
* Follows all the code standards required.
