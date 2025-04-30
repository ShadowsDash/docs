---
title: "Getting Started with Shadow's Dash API"
sidebar_label: "API Docs"
---

Before you start using the Shadow's Dash API, please have a look at the following chapters:

## Understanding how authentication works

Shadow's Dash was initially **not made** for API access. Which means no API keys can be generated. (We're working on that!)

**So, how can you authenticate?**

Routes are split in **three categories**:
- The `/api/staff/*` routes
- Hybrid routes
- all the others

### Staff routes
Staff routes need to be authenticated using an `ADMIN` or a `STAFF` user token. See [How can I get my user token?](#how-can-i-get-my-user-token) to see how you can obtain it.

However, some routes are allowed to ADMINS only. Unfortunately, as I'm still working on this documentation, there is no current way to see which routes are only for admins, other than looking at each route's description, and I apologize about that.

These routes all start with the `/api/staff/` prefix.

### Hybrid routes
Hybrid routes are routes that are normally accessible using a traditional user token with no specific role (the `NORMAL` role), but can be also accessed with `ADMIN` tokens to do actions on behalf of the user, or get additional information (in hybrid `GET` routes)

Again, as I'm still working on this documentation, there is no current way to see which routes are only for admins, other than looking at each route's description, and I apologize about that.

### Other routes
Other routes include routes that either need an user bearer token to work, or routes that do not need authentication at all.

Have a look at the route you're interested in, and see if it requires authentication or not.

### How can I get my user token?
To get your user token, enter the console (`CTRL+SHIFT+C`) in your web browser (you need to be logged in your shadow's dash account). 

Then enter `localStorage.getItem("token")`. This will print the token associated with your account. This token **never expires** and has your role. (Which means if you're an `ADMIN`, your token will be able to call staff routes etc)
