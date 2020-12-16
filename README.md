# Threads for Slack app

This is the repository for the functions that back the Threads for Slack app. It is built and deployed with [Vercel Serverless Functions](https://vercel.com/docs/serverless-functions/introduction).

## One-Click Deploy

Instantly deploy this project to Vercel by pressing the button below. If you don't have a Vercel account, this will prompt you to create one.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fstudiozeffa%2Fthreadsforslack-app)

## Development

If you'd prefer to hack on this locally, follow these steps.

### Installation

This project uses [nodejs and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to manage dependencies and provide scripts for deploying the worker to Vercel.

Install the dependencies with:

```bash
npm install
```

### Signup

To deploy the worker, you need a Vercel account = [sign up here](https://vercel.com/signup). Vercel has a [range of different plans](https://vercel.com/pricing) - it's recommended to sign up to the Hobby plan, at least to begin with.

> Note: Vercel offers an integration with GitHub to automatically deploy the codebase whenever a change is pushed to GitHub. This is only available for personal GitHub accounts with the Hobby tier. We won't use this integration, instead we can set up a GitHub Action to perform this task.

Once you have signed up, you need to authenticate your local machine with your account. Do this by running

```bash
npm run vercel login
```

This will save a set of credentials to your local machine, and will be used automatically when deploying the worker to Vercel.

### Local server

You can start a local development server with

```
npm run vercel dev
```

## Manual Deployment

To publish the app to production, you have 2 options.

### vercel.app

Vercel maintains the `vercel.app` domain, and you can push your worker to a subdomain hosted on this network. This is the default deployment mode, and is achieved by running

```
npm run vercel
```

The first time you run this command, it will ask a series of questions. You can accept the defaults for most of these questions, but when it asks about the Vercel project, you will need to create a new project, and give it a unique name.

Once deployment has completed, you can access the app at `https://{your-project-name}.vercel.app`.

### Custom domain

If you prefer to deploy to a custom domain, [Vercel has some excellent documentation on this topic](https://vercel.com/docs/custom-domains).

When registering your domain, you can choose Vercel as the domain registrar, or you can use a third party such as [Namecheap](https://www.namecheap.com/) or [iwantmyname](https://iwantmyname.com/). We recommend to:

- Use a third party registrar, in case you want to use this domain for non-Vercel related activity
- Deploy the app to a subdomain, e.g. `worker.{your-domain-name}.com`
- Set up a CNAME record in your domain registrar's DNS settings for the chosen subdomain, pointing to `cname.vercel-dns.com`

All of these instructions can be found in [Vercel's docs](https://vercel.com/docs/custom-domains).

Once a custom domain is setup, deploy the app with

```
npm run vercel
```
