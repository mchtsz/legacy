"use client"
import React from "react";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const api = new WooCommerceRestApi({
    url: "localhost:8080",
    consumerKey: "", // Replace "YOUR_CONSUMER_KEY" with your actual consumer key
    consumerSecret: "YOUR_CONSUMER_SECRET", // Replace "YOUR_CONSUMER_SECRET" with your actual consumer secret
});

export default function Product() {
    

    return (
        <div className="Parent">
            <h1>Products</h1>
        </div>
    );
}