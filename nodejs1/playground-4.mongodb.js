// 1️⃣ Select the database
use("shopDB");

// 2️⃣ Drop collections (optional, for a clean slate)
db.productscb.drop();
db.orderscb.drop();

// 3️⃣ Insert sample products
db.productscb.insertMany([
  { _id: 1, name: "Laptop", instock: 5, price: 1000 },
  { _id: 2, name: "Mouse", instock: 10, price: 25 },
  { _id: 3, name: "Keyboard", instock: 2, price: 50 }
]);

// 4️⃣ Insert sample orders
db.orderscb.insertMany([
  { _id: 101, productId: 1, quantity: 3, customer: "Alice" },
  { _id: 102, productId: 2, quantity: 12, customer: "Bob" },
  { _id: 103, productId: 3, quantity: 2, customer: "Charlie" }
]);

// 5️⃣ Aggregate orders with stock check and show only product names
const result = db.orderscb.aggregate([
  {
    $lookup: {
      from: "productscb",
      let: { order_item: "$productId", order_qty: "$quantity" },
      pipeline: [
        {
          $match: {
            $expr: {
              $and: [
                { $eq: ["$_id", "$$order_item"] },
                { $gte: ["$instock", "$$order_qty"] }
              ]
            }
          }
        },
        {
          $project: { _id: 0, name: 1 } // Only keep the product name
        }
      ],
      as: "availableProduct"
    }
  },
  {
    $addFields: {
      isAvailable: { $gt: [{ $size: "$availableProduct" }, 0] }
    }
  },
  {
    $project: {
      _id: 1,
      customer: 1,
      productId: 1,
      quantity: 1,
      isAvailable: 1,
      availableProduct: 1
    }
  }
]).toArray();

// 6️⃣ Print the result
printjson(result);
