import React from "react";

import { trackShopEvent } from "../assets/trackShopEvent";

const handleAddToCart = (product, user) => {
  addToCart(product); // your existing logic
  trackShopEvent({
    event: "add_to_cart",
    email: user.email,
    productName: product.name,
    productId: product.id,
  });
};
