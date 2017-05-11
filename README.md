# Honeycomb Discounts [![Build Status](https://travis-ci.org/Taziva/honeycomb-discount.svg?branch=master)](https://travis-ci.org/Taziva/honeycomb-discount) [![Coverage Status](https://coveralls.io/repos/github/Taziva/honeycomb-discount/badge.svg?branch=master)](https://coveralls.io/github/Taziva/honeycomb-discount?branch=master)
Applies Discounts to Honeycomb video delivery orders

## Manual
****
**How to run:**
1. Clone the repo
2. Move into the directory
3. Run npm install
4. Run npm start

**How to test:**
1. Run npm test

## Technologies
****
**Built with:**
* JavaScript ES6
* NodeJS
* Babel
* string-table

**Tested with:**
* Mocha
* Chai
* Sinon

## Decision Making
****
**Why ES6 JavaScript?**

I've been trying to improve my use of ES6 in my own projects and thought this a great time to implement it fully including using babel to compile it

**Why put the discounts in their own single file?**

It allows me to use the ES6 import functionality to put all the exported discount functions in one object which can then be iterated through allowing for the order to be processed by each discount function. The idea came from the way Redux runs Actions through every Reducer to check if it fulfils the conditions. This way any new discount can be created as a function and will automatically be processed by the order processor.

**Why abstract out the Order object?**

So that each object can get as close to single responsibility as possible. Each abstracted order type object takes care of different parts of the process so that I can make changes and root out any problems in a much simpler way rather than having to wade through a lot of code to fix a single small bug.

**Why add the validations to the order Items?**

In order to make sure I can know what information is being sent and received between objects. This way I have more control from the initial point in the application if the simpler objects are created perfectly when it comes to creating complex interactions later in the process I won't have to worry about errors if I know the information they're receive is correct.

## Specification
****
* Creates an order composed out of:
  * Advertising Material
  * An array of broadcasters
  * Each Broadcaster must have a method of delivery

* Applies a discount to the order, based on the following conditions:
  * Firstly if 2 or more materials are sent via express delivery then the price for each express delivery is reduced to $15
  * If the total cost is over $30 apply a 10% discount on the total cost

* Returns the order to be printed to the user

## User Stories
****
1. As a user, so that I can order the right material, I would like to be able to choose Advertising Material
2. As a user, so that I can so that I can send material to the right people, I would like to be able to choose Broadcasters
3. As a user, so that I can as user so that I can send the material to a broadcaster when they need it , I would like to be able to choose a method of delivery
4. As a user, so that I can get more value, I would like to be able to use the discount to lower the price of express delivery if I buy 2 or more materials at express delivery
5. As a user, so that I can get more value for the price, I would like to be able to use the discount to get 10% off my total if I spend more than £30

## Domain models
****
#### Order

|Properties|Methods|
|----------|-------|
|OrderList|addOrderItem|
|Cost|calculateGrossTotalCost|
|Material||

#### OrderItem

|Properties| Methods|
|----------|--------|
|broadcasterId||
|broadcaster||
|deliveryMethod||
|grossPrice||

#### Order List

|Properties|Methods|
|----------|-------|
|orderItems|addOrder|


#### Order Printer

|Properties|Methods|
|----------|-------|
|Order|printOrder|

#### Broadcaster
|Properties|Methods|
|----------|-------|
| name|makeId|
| id||

#### Advertising Material
|Properties|Methods|
|----------|-------|
|clockNumber|checkUnique|

#### Delivery Method
|Properties|Methods|
|----------|-------|
|type|checkPrice|
|price||

#### Order Processor
|Properties|Methods|
|----------|-------|
||processOrder|

## Processes
****
**Create Order**

Order -- add_order_item( new OrderItem) --> OrderList -- add_order(OrderItem) --> OrderList.orderItems

**Calculate Cost**

OrderProcessor -- process_order(Order) --> processedOrder

**Print Order**

Order Printer -- print_order(processedOrder) --> Stdout

## Acceptance Criteria
****
* send WNP/SWCL001/010 to Disney, Discovery, Viacom via Standard Delivery and Horse and Country via Express Delivery based on the defined Discounts the total should be $45.00

* send ZDW/EOWW005/010 to Disney, Discovery, Viacom via Express Delivery based on the defined Discounts the total should be $40.50

## Improvements
****

- Better ID system for the broadcasters
- A better way to manage the price of different delivery types
- Controlling the way the discounts affect the order incase 2 or more discounts affect the same properties of an order maybe by checking if another process has already run through the applied discounts array.
- Better mocks for the different objects
- Cleaner validation in orderList for the orderItems
- A way to autogenerate unique clockNumbers for materials
