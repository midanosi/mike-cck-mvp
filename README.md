# Mike CCK MVP

## Context
CCK (Cambridge Community Kitchen) currently runs on a tech stack of google sheets, gmail, google forms

There is a desire to "de-googlify" the project, and have a more typical and robust tech stack to more easily test and maintain.
And a stretch goal for the project - make this new stack easily replicatable and usable for other communities doing similar work.

This repo is my personal effort to just make what CCK already is, but with the tech stack of Pocketbase and Sveltekit.
See [this notion article](https://www.notion.so/De-googlifying-CCK-project-a5b9e4d1335344ac9b9b49d1d0d00710?pvs=4) for my choice behind PocketBase.
Sveltekit choice is because Svelte is a brilliant JS framework without the footguns of React, and Sveltekit is the de-facto way to create Svelte apps. Svelte has a reputation for being easy to pick up by developers with not much experience, due to it's close similarity to just writing html.

Pocketbase is contained in the `/backend` folder, and consists of just an executable, 'pocketbase.exe'. The data is stored in sqlite file `pb_data/data.db`. 'pb_hooks' are to extend the functionality of the backend, and pb_migrations are the db migration files.

