import React from "react";
import ReactDOM from "react-dom";
import { createServer, Model } from "miragejs";
import { App } from "./App";

createServer({
  models: {
    transactions: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "freelance de website",
          type: "deposit",
          category: "Dev",
          amount: 800,
          created_at: new Date(),
        },
        {
          id: 2,
          title: "soma de sim",
          type: "withdraw",
          category: "Dev",
          amount: 100,
          created_at: new Date(),
        },
      ],
    });
  },
  routes() {
    this.namespace = "api";
    this.get("transactions", () => {
      return this.schema.all("transactions");
    });
    this.post("transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create("transactions", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
