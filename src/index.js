import AdvertisingMaterial from './js/advertisingMaterial';
import Broadcaster from './js/broadcaster';
import DeliveryMethod from './js/deliveryMethod';
import Order from './js/order';
import OrderItem from './js/orderItem';
import OrderList from './js/orderList';
import OrderPrinter from './js/orderPrinter';
import OrderProcessor from './js/orderProcessor';

const standardDelivery = new DeliveryMethod('standard');
const expressDelivery = new DeliveryMethod('express');

const Viacom = new Broadcaster('Viacom');
const Disney = new Broadcaster('Disney');
const Discovery = new Broadcaster('Discovery');
const ITV = new Broadcaster('ITV');
const Channel4 = new Broadcaster('Channel 4');
const BikeChannel = new Broadcaster('Bike Channel');
const HorseAndCountry = new Broadcaster('Horse and Country');

const material = new AdvertisingMaterial('WNP/SWCL001/010');
const materialTwo = new AdvertisingMaterial('ZDW/EOWW005/010');

const orderProcessor = new OrderProcessor();

const order = new Order(material);
const orderTwo = new Order(materialTwo);
const orderPrinter = new OrderPrinter();

order.addOrderItem(new OrderItem(Disney, standardDelivery));
order.addOrderItem(new OrderItem(Discovery, standardDelivery));
order.addOrderItem(new OrderItem(Viacom, standardDelivery));
order.addOrderItem(new OrderItem(HorseAndCountry, expressDelivery));

orderTwo.addOrderItem(new OrderItem(Disney, expressDelivery));
orderTwo.addOrderItem(new OrderItem(Discovery, expressDelivery));
orderTwo.addOrderItem(new OrderItem(Viacom, expressDelivery));

let processedOrderOne = orderProcessor.processOrder(order);
let processedOrderTwo = orderProcessor.processOrder(orderTwo);

console.log(processedOrderOne.list.orderItems[0].broadcaster);

orderPrinter.printOrder(processedOrderOne);
orderPrinter.printOrder(processedOrderTwo);
