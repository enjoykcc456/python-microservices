import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import DashboardLayout from "./layouts/DashboardLayout.component";
import { Main } from "./pages/main/Main.component";
import { Products } from "./pages/admin/Products.component";
import { ProductCreate } from "./pages/admin/ProductCreate.component";

function App() {
  return (
    <div className="App">
      <Router>
        <DashboardLayout>
          <Route path="/" component={Main} exact />
          <Route path="/admin/products" component={Products} exact />
          <Route
            path="/admin/products/create"
            component={ProductCreate}
            exact
          />
        </DashboardLayout>
      </Router>
    </div>
  );
}

export default App;
