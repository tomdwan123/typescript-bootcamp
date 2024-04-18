/* Enums allow us to define a set of naned constants. We can give these
constants numeric or string values.
There's quite a few options when it comes to enums!
 */
enum Responses1 {
  no,
  yes,
  maybe,
}

enum Respponses2 {
  no = "No",
  yes = "Yes",
  maybe = "Maybe",
}

enum Responses3 {
  no = 2,
  yes = 10,
  maybe = 24,
}

enum Responses4 {
  no = 0,
  yes = 1,
  maybe = "Maybe",
}

enum OrderStatus {
  PENDING = 10,
  SHIPPED = 34,
  DELIVERED = 324,
  RETURNED = 98,
}

const myStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus) {
  return status === OrderStatus.DELIVERED;
}

isDelivered(OrderStatus.RETURNED);

enum ArrowKeys {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right",
}
