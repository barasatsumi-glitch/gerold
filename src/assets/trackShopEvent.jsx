import React from "react";

const WEBHOOK_URL = "https://nilimabarasat125.app.n8n.cloud/webhook/shop-event";

export async function trackShopEvent({ event, email, productName, productId }) {
  try {
    await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ event, email, productName, productId }),
    });
  } catch (err) {
    console.error("Shop event failed", err);
  }
}
