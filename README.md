WDI Angular
===========

- Run `bower install` in the directory to install required JS libraries. 
- Run `http-server ./` in the directory and then open [http://localhost:8080](http://localhost:8080) in your browser. Press `control-c` to stop the server.

### Demo 01

- ng-app
- ng-init
- ng-model
- bindings

#### Exercise

Create a simple calculator that allows you to add two numbers. Hint: you may need to use number inputs!

### Demo 02

- ng-controller
- ng-repeat	
- modules
- controllers

#### Exercise

Using a controller, create a task list where each task has a name. Use ng-repeat to display these items in a HTMl list.

### Demo 03

- filters

#### Exercise

With a partner, create a filter for your task list.

### Demo 04

- bootstrap
- forms and basic validation
- ng-submit
- ng-disabled

#### Exercise

Create a form so that you can add items to your task list.

### Demo 05

- controller dependencies
- $http

#### Exercise

Create an API for your task list using Rails and the following models.

Category
    - name:string

Task
    - name:string
    - status:integer
    - category_id:integer

`rails-api new appname --database=postgresql`
`rails g scaffold Category name:string`
`rails g scaffold Task name:string status:integer category_id:integer`

Update your Angular app so that it pulls in tasks from the API.

### Demo 06

- CRUD for categories
- ng-click

#### Exercise

CRUD for tasks

### Demo 07

- Instructor lead refactor using factories and controllers

### Demo 08

- directives

#### Exercise

Create your own element directives (template, property, action)

