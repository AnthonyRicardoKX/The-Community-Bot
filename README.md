# Webcomics Hub Bot (1.1.0)
A discord bot made using the server **Webcomics Hub!** as model for features and requirements.

## Features
* Bot commands (prefix: **wh!**).
* Custom functionality for array and object.
* MySQL database integration.
* Web scraping.

## Category
### Product
* addproduct
  ```
  Add a single product under the message author name
  addproduct <product_type> <link> <title>
  ```
* removeproduct
  ```
  Remove a single product under the message author name
  removeproduct <product_type> <title>
  ```
* searchproduct
  ```
  Shows any products recorded in the database
  searchproduct <product_type> <title>
  ```
* showproduct
  ```
  Shows ten titles per page.
  showproduct <mention user> <product_type> <page, default = 1>
  ```
### Role
* addrole
  ```
  Give role to user.
  addrole <role name>
  ```
* listrole
  ```
  List all the server's roles (10 roles per page).
  listrole <page, default = 1>
  ```
* removerole
  ```
  Remove role from user.
  removerole <role name>
  ```
### Webtoon
* schedulewebtoon
  ```
  Shows what webtoon updates at specific day alphabetically sorted.
  schedulewebtoon <name of the day / today>
  ```
* searchwebtoon
  ```
  Search for a webtoon if exist in database.
  searchwebtoon <title>
  ```
* updatewebtoon
  ```
  updatewebtoon
  ```
### Misc
* command
  ```
  command <command name>
  ```
* ping
  ```
  ping
  ```
