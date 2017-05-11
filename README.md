# Honeycomb Discounts [![Build Status](https://travis-ci.org/Taziva/honeycomb-discount.svg?branch=master)](https://travis-ci.org/Taziva/honeycomb-discount) [![Coverage Status](https://coveralls.io/repos/github/Taziva/honeycomb-discount/badge.svg?branch=master)](https://coveralls.io/github/Taziva/honeycomb-discount?branch=master)
Applies Discounts to Honeycomb video delivery orders

## Manual
On Terminal
1. Clone the repo
2. Move into the directory
3. Run npm install
4. Run npm start

## Specification
* Creates an order composed out of:
  * Advertising Material
  * An array of broadcasters
  * Each Broadcaster must have a method of delivery

* Applies a discount to the order, based on the following conditions:
  * Firstly if 2 or more materials are sent via express delivery then the price for each express delivery is reduced to $15
  * If the total cost is over $30 apply a 10% discount on the total cost

* Returns the order to be printed to the user

## User Stories

1. As a user, so that I can order the right material, I would like to be able to choose Advertising Material
2. As a user, so that I can so that I can send material to the right people, I would like to be able to choose Broadcasters
3. As a user, so that I can as user so that I can send the material to a broadcaster when they need it , I would like to be able to choose a method of delivery
4. As a user, so that I can get more value, I would like to be able to use the discount to lower the price of express delivery if I buy 2 or more materials at express delivery
5. As a user, so that I can get more value for the price, I would like to be able to use the discount to get 10% off my total if I spend more than £30

## Technology

* JavaScript ES6
* NodeJS
* Babel
* string-table

#### Testing
* Mocha
* Chai
* Sinon

## Domain models

### Order

|Properties|Methods|
|----------|-------|
|OrderList|addOrderItem|
|Cost|calculateGrossTotalCost|
|Material||

### OrderItem

|Properties| Methods|
|----------|--------|
|broadcasterId||
|broadcaster||
|deliveryMethod||
|grossPrice||

### Order List

|Properties|Methods|
|----------|-------|
|orderItems|addOrder|


### Order Printer

|Properties|Methods|
|----------|-------|
|Order|printOrder|

### Broadcaster
|Properties|Methods|
|----------|-------|
| name|makeId|
| id||

### Advertising Material
|Properties|Methods|
|----------|-------|
|clockNumber|checkUnique|

### Delivery Method
|Properties|Methods|
|----------|-------|
|type|checkPrice|
|price||

### Order Processor
|Properties|Methods|
|----------|-------|
||processOrder|

## Processes

### Create Order
Order -- add_order_item( new OrderItem) --> OrderList -- add_order(OrderItem) --> OrderList.orderItems

### Calculate Cost
OrderProcessor -- process_order(Order) --> processedOrder

### Print Order
Order Printer -- print_order(processedOrder) --> Stdout

## Acceptance Criteria
* send WNP/SWCL001/010 to Disney, Discovery, Viacom via Standard Delivery and Horse and Country via Express Delivery based on the defined Discounts the total should be $45.00

* send ZDW/EOWW005/010 to Disney, Discovery, Viacom via Express Delivery based on the defined Discounts the total should be $40.50
