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
import Header from './Header';

const App = () => {
  const data = VacationsData.map((item) => {
    return (
      <Card 
        key={item.id}
        item={item}
      />
    )
  });

  return (
    <div className="app-wrap">
      <Header />
      <div className="data-wrap">
        {data}
      </div>
    </div>
  );
}

export default App;
