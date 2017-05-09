# Honeycomb Discounts
Applies Discounts to Honeycomb video delivery orders

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

## Domain models

### Order

|Properties|Methods|
|----------|-------|
|OrderList|add_order_item|
|Cost|calculate_cost|
|Material|show_order|

### OrderItem

|Properties| Methods|
|----------|--------|
|Broadcaster||
|Delivery_Method||
|order details|create_order|

### Order List

|Properties|Methods|
|----------|-------|
|Orders|gross_cost|


### Order Printer

|Properties|Methods|
|----------|-------|
|OrderList String|print_order|
||format_order_list|

### Broadcaster
|Properties|Methods|
|----------|-------|
| name|create_unique_Id|
| id||

### Advertising Material
|Properties|Methods|
|----------|-------|
|serial|check_unique|

### Delivery Method
|Properties|Methods|
|----------|-------|
|name|check_price|
|price||

### Discount Checker
|Properties|Methods|
|----------|-------|
|Order|check_discounts|

## Processes

### Create Order
Order -- create_order --> OrderList -- add_order_item --> OrderItem.create_order;

### Calculate Cost
Order -- calculate_cost --> OrderList -- gross_cost --> Discount Checker -- check_discounts --> Order.price

### Print Order
Order Printer -- print_order --> Order

## Acceptance Criteria
* send WNP/SWCL001/010 to Disney, Discovery, Viacom via Standard Delivery and Horse and Country via Express Delivery based on the defined Discounts the total should be $45.00

* send ZDW/EOWW005/010 to Disney, Discovery, Viacom via Express Delivery based on the defined Discounts the total should be $40.50
