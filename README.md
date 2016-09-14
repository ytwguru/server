YT Advisors Website
--------------------

#### Main website for YT Advisors

### Requirements

* [Nodejs](https://nodejs.org)

### Installation

* From the root of the project `npm install`

### Create an ecosystem.json file

* From the root director, create an ecosystem.json file.  Copy the contents from the ecosystem.json.example and save as ecosystem.json.
  Make sure to change the required paths to match your environment.


### Tests

* **All:** `npm test`

### Debugging the application

* The application uses webpack to bundle the source code and hot loader to allow live refresh while developing.
* To run in development mode `npm run start:dev`



### Deploy

##### Deploy the staging application
- Setup the staging application `pm2 deploy ecosystem.json staging setup`
- Deploy the staging application `pm2 deploy ecosystem.json staging`

##### Deploy the production application
- Setup the staging application `pm2 deploy ecosystem.json production setup`
- Deploy the staging application `pm2 deploy ecosystem.json production`

##### Additional notes about setting up your server

* Add your server public key to github deploy keys
* From the server run `ssh-keyscan -t rsa github.com >> ~/.ssh/known_hosts`
* Install PM2 `npm install pm2 -g`
* Comment out interactive mode in ~/.bashrc

```
 case $- in
     *i*) ;;
     *) return;;
 esac
```