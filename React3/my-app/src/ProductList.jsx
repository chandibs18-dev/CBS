import React from "react";

const ProductList = React.memo(({ items = [] }) => {
  console.log("ProductList Rendering...");

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold text-white border-b border-white/30 pb-2 mb-3">
        Found {items.length} items
      </h3>

      <div className="flex flex-col gap-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center p-4 rounded-lg 
                       bg-white/20 backdrop-blur-md 
                       text-white font-semibold 
                       hover:bg-white/30 transition"
          >
            <span>{item.name}</span>
            <span className="text-green-400">${item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
});

ProductList.displayName = "ProductList";
export default ProductList;
