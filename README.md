# burger
This project involves creating and modifying a list of burgers. the list is stored and modidfied in mySql server. One can add a new burger to the list or by pressing eat the burger, the burger is consumed and moved to the eaten burger list.

MVC file structure is used with some modifications:
    The public folder is moved to app folder.
    The config, controllers, models and routes are moved to server folder
    The view and data folders and server.js are left at the root
.
├── server
│   ├── config
│   │    ├── connection.js
│   │    └── orm.js         
│   ├──controllers
│   │    └── burgerController.js
│   ├──models
│   │    └── burgerDbRules.js
│   └── routes
│         └── burgerRoutes.js
│
│
├── app
│   ├── public
│        └── assets
│               ├── css
│               └── images
│
│
├── data
│     ├── schema.sql
│     └── seeds.sql
│
└── server.js