# rush-template
Rush monorepo template

## Rush

### Install the NPM packages:
run `rush update`

### Force all projects to be rebuilt:
run `rush rebuild`

### Incremental build:
run `rush build`

### Generates change files:
run `rush change`

### Publish packages
run `rush publish`

### Deploying projects
run `rush deploy`

## Prettier

### Install prettier so you can invoke it manually:
npm install --global prettier

### See what files Prettier will operate on; use this to tune your .prettierignore rules:
prettier . --list-different

### When you are ready, this will bulk fix all existing source files in your repo:
prettier . --write
