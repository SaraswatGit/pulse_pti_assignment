import React, { useState, useEffect } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import AddAgent from "./AddAgent";

function App() {
  const [agentname, setagentname] = useState("Agent Name");
  const [agentdrop, setagentdrop] = useState(false);
  function dropdownagent() {
    setagentdrop(!agentdrop);
  }
  return (
    <div className="App">
      <div className="toppart">
        PULSE PTI AGENT MANAGEMENT CONSOLE
        <div
          style={{
            position: "absolute",
            marginTop: "1vh",
            fontSize: "2vh",
            marginLeft: "85vw",
            height: "14vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div>{agentname}</div>
          <div style={{ marginTop: "5vh" }}>Lang &nbsp; Logout</div>
        </div>
      </div>
      <div className="bottompart">
        <div className="navbar">
          <div style={{ marginTop: "3vh", padding: "1vh", fontWeight: 500 }}>
            <div style={{ color: "white" }}>&nbsp; &nbsp; Dashboard</div>
            <br />
            <div className="headings"> + Company Management</div>
            <br />
            <div className="headings"> + User Management</div>
            <br />
            <div className="headings"> + License Management</div>
            <br />
            <div>
              <div className="headings" onClick={dropdownagent}>
                + Sub Agent Management
              </div>
              {agentdrop && (
                <div style={{ marginTop: "3vh", marginLeft: "2vw" }}>
                  {agentdrop && (
                    <NavLink
                      to="/AddAgent"
                      className={({ isActive }) =>
                        `link ${isActive ? "activesubheadings" : "subheadings"}`
                      }
                    >
                      &nbsp; Create New Sub-Agent{" "}
                    </NavLink>
                  )}
                  <br />

                  {agentdrop && (
                    <NavLink
                      className={({ isActive }) =>
                        `link ${isActive ? "activesubheadings" : "subheadings"}`
                      }
                      to="/ViewSubAgents"
                    >
                      &nbsp; Views Sub-Agents
                    </NavLink>
                  )}
                  <br />
                  {agentdrop && (
                    <NavLink
                      className={({ isActive }) =>
                        `link ${isActive ? "activesubheadings" : "subheadings"}`
                      }
                      to="/SetPrices"
                    >
                      &nbsp; Set Prices for Sub_Agents
                    </NavLink>
                  )}
                  <br />
                  {agentdrop && (
                    <NavLink
                      className={({ isActive }) =>
                        `link ${isActive ? "activesubheadings" : "subheadings"}`
                      }
                      to="/RechargeSubAgents"
                    >
                      &nbsp; Recharge Sub-Agents
                    </NavLink>
                  )}
                  <br />
                  {agentdrop && (
                    <NavLink
                      className={({ isActive }) =>
                        `link ${isActive ? "activesubheadings" : "subheadings"}`
                      }
                      to="/ModifySubAgents"
                    >
                      &nbsp; Modify Sub-Agents
                    </NavLink>
                  )}
                </div>
              )}
            </div>
            <br />
            <div className="headings"> + Personal Center</div>
          </div>
        </div>
        <div className="routearea">
          <Routes>
            <Route path="/AddAgent" element={<AddAgent />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
