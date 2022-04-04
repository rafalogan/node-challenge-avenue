# Chalenge Node API AvenueConde
****

### Requeriments

* nodejs
  * express
  * pm2

### Installation

To istall the project you need to cloning the [repository](https://github.com/rafalogan/node-challenge-avenue) and run the following command:

```shell
npm install # to install the dependencies
npm start # to start the server porduction
npm run build # to build the project
npx pm2 kill # to kill the server production
```
if the installation is correct, when you will start the server in a cluster with 2 instances of server.   
the production run to defalt port 8080 on http server: [http://localhost:8080](http://localhost:8080);    
if you want to run the production on **https** you need modifiy the `ecosystem.config.yml` file change the variabel `ENABLE_HTTPS` to `true` and run the following command:

```shell
npm  start # to start the server production
````
this project contains a cert and key files to run the production on https.

To configure developer environment you need to create a file `.env` with the following content:

```.env
NODE_ENV=

PORT=
HOST=

ENABLE_HTTPS=
CERT_FILE=
KEY_FILE=

```

to run the development environment you need to run the following command:

```shell
npm run dev # to start the server development
npm test # to run the tests on watch mode
npm run test:cove # to run the tests on cove mode
```

and the additonal commands to use in ths project.

```shell
npm run lint # to run the linting
npm run lint:fix # to fix the linting
npm run style # to run the stylelint
npm run style:fix # to fix the stylelint
```

### endppoints of the project

* [GET /employees](http://localhost:8080/employees) - get all employees
* [GET /employees/:sortProperty](http://localhost:8080/employees/:sortProperty) - get employee order by properties 'id', 'name', 'lastName', 'salary' or 'age'
* [GET /employees/:sortProperty/?order=](http://localhost:8080/employees/:sortProperty/?order=) - get employee order by property on order 'asc' or 'desc';


* [GET /managers](http://localhost:8080/managers) - get all managers
* [GET /managers/:sortProperty](http://localhost:8080/managers/:sortProperty) - get manager order by properties 'id', 'name', 'lastName', 'salary' or 'age'
* [GET /managers/:sortProperty/?order=](http://localhost:8080/managers/:sortProperty/?order=) - get manager order by property on order 'asc' or 'desc';


* [GET /analysts](http://localhost:8080/analysts) - get all analysts
* [GET /analysts/:sortProperty](http://localhost:8080/analysts/:sortProperty) - get analyst order by properties 'id', 'name', 'lastName', 'salary' or 'age'
* [GET /analysts/:sortProperty/?order=](http://localhost:8080/analysts/:sortProperty/?order=) - get analyst order by property on order 'asc' or 'desc';


* GET /others - return status code 404
* method not allowed - return status code 405;

## The Original Challenge Documentation


We want to write a backend API in node.js with Express.js that handles employee information.
We currently have two types of employee `analysts` and `managers`. We also want to handle
information for our employee's dependents.

Inside of the `data` folder you will find sample data for `analysts`, `managers` and `dependents`.
Your task is to write an Express REST api that exposes the data in those JSON files according
to the requirements below:

1. A GET request to the endpoint `/managers/[SORTING_PROPERTY]/?order:[ORDER]`, where
 `SORTING_PROPERTY` is one of: id, name, lastName, salary or age, and `ORDER` is either `ASC` or
 `DESC` should return a list of managers with `salary`, `age` and `fullName` sorted by the property
 passed as the `SORTING_PROPERTY` param in ascending or descending order according to the `ORDER`
 query param. If no params are provided by the requester the list should be sorted by `id` in
 ascending order. Note that `fullName` should be the combination of `name` and `lastName`.
 
2. A GET request to the endpoint `/analysts/[SORTING_PROPERTY]/?order:[ORDER]`, where the same
 logic from the previous endpoint applies, should return `analysts` instead of `managers`
 
3. A GET request to the endpoint `/employees/[SORTING_PROPERTY]/?order:[ORDER]`, where the previous
 rules also apply, should return all employees (`analysts` and `managers`). For this endpoint each
 employee result should have an extra property `dependents` with a list of all of their dependents.

4. A GET request to the endpoint `/total-salary/[ROLE]`, where ROLE is either `analyst` or
 `manager`, should return the sum of all salaries of all employees with that role. If the param
 `ROLE` is not provide, return the sum of the salary for all employees.
 
A request to any other route, or a request with a method other the GET should return a 404 or 405
 respectively.
 
The application should run with the command `npm start`.
 
Please submit the code either exported in a `.zip` file or a link to a github repo with the final
 solution.
 
Good luck!
