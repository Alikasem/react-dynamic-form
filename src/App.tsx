import React from 'react';
// external packages
import {BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom';

// pages and components
import {Home} from "./pages/home-page/Home";
import {CreateDynamicForm} from "./pages/create-dynamic-form/CreateDynamicForm";
import {CreateRule} from "./pages/create-rule/CreateRule";
import {DynamicFormList} from "./pages/dynamic-form-list/DynamicFormList";
import {RuleList} from "./pages/rule-list/RuleList";


// styles
import './App.css';

function App() {
    const activeClass = (isActive: boolean): string => isActive ? 'text-green-500' : '';
  return (
      <Router>
          <nav className="bg-gray-500 text-white">
            <ul className="flex flex-row items-center justify-center gap-3 p-3">
              <li>
                <NavLink className={({isActive}) => activeClass(isActive)} to="/">Home</NavLink>
              </li>
              <li>
                <NavLink className={({isActive}) => activeClass(isActive)} to="/dynamicFormList">Dynamic Form List</NavLink>
              </li>
              <li>
                <NavLink className={({isActive}) => activeClass(isActive)} to="/createRule">Create Rule</NavLink>
              </li>
            </ul>
          </nav>

          <div className="flex justify-center m-3">
          <Routes>
              <Route path="/" Component={Home} />
              <Route path="/createDynamicForm" Component={CreateDynamicForm} />
              <Route path="/dynamicFormList" Component={DynamicFormList} />
              <Route path="/createRule" Component={CreateRule} />
              <Route path="/ruleList" Component={RuleList}></Route>
          </Routes>
          </div>

      </Router>
  );
}

export default App;
