import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import DashboardLayout from "./layouts/dashboardLayout.component";
import { Main } from "./pages/main/main.component";
import { Admin } from "./pages/admin/admin.component";

function App() {
  return (
    <div className="App">
      <Router>
        <DashboardLayout>
          <Route path="/" component={Main} exact />
          <Route path="/admin/products" component={Admin} />
        </DashboardLayout>
      </Router>
    </div>
  );
}

export default App;
