import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserCard from './components/UserDetails';
import UserTable from './components/UserDataTable';

const App: React.FC = () => {
  const users = [
    { name: 'Demo User', age: 28, email: 'demo.usere@example.com' },
    { name: 'Test User', age: 28, email: 'Test.usere@example.com' },
  ];
  return (
    <div className="App">
      <h2>User Details</h2>
      <UserCard name="Urmila Swain" emp_id="OTSPL-393" />

      <h2>User Table</h2>
      {/* Using UserTable component */}
      <UserTable users={users} />
    </div>
    
  );
};
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
