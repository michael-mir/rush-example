# Rush monorepo example

## First of all, install Rush globally:
```
npm install -g @microsoft/rush
```

## Rush commands

### Install package dependencies:
```
rush update
```

### Modifying package.json:
```
rush add/remove --package {package}
```

### Incremental build of changes:
```
rush build
```

### Clean rebuild of everything:
```
rush rebuild
```

### Generate change files:
```
rush change
```

### Packages versioning
```
rush version
```

### Publish packages
```
rush publish -a -b {branch} -p -r=https://npm.pkg.github.com/
```
