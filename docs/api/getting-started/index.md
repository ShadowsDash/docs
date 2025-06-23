---
title: "Getting Started with Shadow's Dash API"
sidebar_label: "API Docs"
---

Before you start using the Shadow's Dash API, please take a look at the following chapters:

## Authentication

Shadow's Dash was initially **not made** for API access.
Which means some routes are simply cannot be used with API tokens, but only with user tokens.

Anyway, if you want to access hybrid or staff routes (see below), it's better for you to create an API token.

### Creating an API token
To create a token, login with an ADMIN account on your instance. Then, go to your staff panel, and click on "API access".

On this page, you will be able to generate API tokens that never expire (unless you revoke it) with ADMIN rights.

**NOTE:** User tokens expire every 72 hours. While this is not ideal for routes requiring a user token to work, we are working on a way for API tokens to impersonate someone. 

Routes are split in **three categories**:
- The `/api/staff/*` routes
- Hybrid routes
- all the others

### Staff routes
Staff routes need to be authenticated using an API key.

However, some routes are allowed to ADMINS only. Unfortunately, as I'm still working on this documentation, there is no current way to see which routes are only for admins, other than looking at each route's description, and I apologize about that.

These routes all start with the `/api/staff/` prefix.

### Hybrid routes
Hybrid routes are routes that are normally accessible using a traditional user token with no specific role (the `NORMAL` role), but can be also accessed with `ADMIN` tokens to do actions on behalf of the user, or get additional information (in hybrid `GET` routes)

Again, as I'm still working on this documentation, there is no current way to see which routes are only for admins, other than looking at each route's description, and I apologize about that.

### Other routes
Other routes include routes that either need an user bearer token to work, or routes that do not need authentication at all.

Take a look at the route you're interested in, and see if it requires authentication or not.

### How can I get my user token?
To get your user token, enter the console (`CTRL+SHIFT+C`) in your web browser (you need to be logged in your shadow's dash account). 

Then enter `localStorage.getItem("token")`. This will print the token associated with your account. This token **never expires** and has your role. (Which means if you're an `ADMIN`, your token will be able to call staff routes etc)
