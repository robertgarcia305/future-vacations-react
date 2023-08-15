// steps:
//go to your directory where you want to add the react app
//   my-app should be changed to whatever your name of the app
//   npx create-react-app my-app
//   cd my-app

//   npm start
// if npm start doesn't work do: 

// npm install react-scripts
// then react-scripts start

import logo from './logo.svg';
import './App.css';

// import card


// import data
import VacationsData from './VacationsData';
import Card from './Card';

function App() {
  const data = VacationsData.map((item) => {
    <Card 
      key={item.id}
      item={item}
    />
  });

  return (
    <div className="app-wrap">
      {data}
    </div>
  );
}

export default App;
