import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ConfigProvider } from "antd";
import fa_IR from "antd/lib/locale/fa_IR";
import moment from "moment";

import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";

moment.locale("en");

const App = () => (
  <Router>
    <div>
      <ConfigProvider locale={fa_IR} direction="rtl">
        <main className="page-wrapper">
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
        </main>
      </ConfigProvider>
    </div>
  </Router>
);

export default App;
