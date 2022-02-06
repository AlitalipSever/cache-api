# cache-api

```
project map:
routes adding DONE
register login adding DONE
cache data models adding DONE
cache data service adding DONE
Test: half done :/

next feature rabbitMQ NOT YET :/

```

### run project
```
 npm start: "node server.js",
 nom run startDev: "nodemon server.js",
 npm test: "jest --watch"
```

### configs
```
user need to be authenticated for cache api
    first: use register service and DB admin will give you admin status
    for checking project I'll send token with email also
.env file have to be created for thos I'll send .env file with email
MongoDB cloud used for this project, not local
```
### Test DANGER!!!!
```
If you start test, it will erease all users, so do it test after when you check project
Or cantact with me, I can give new admin status
I could do different env for testing but its not best practice
```

### last tings
```
I couldn't write TTL logic, I did'nt understand also this feature but updateTime key can be user for this logic
```