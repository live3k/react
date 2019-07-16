import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: null
      };
    }
  
    componentDidMount() {
        axios.get("https://swapi.co/api/films/1/ ")
            .then(response => {
            //  this.response = response.data.title
                // console.log(response.data.director);
                // console.log(response.data.title);
		console.log(response.data);
		// console.log(response.request.response);
				
                this.setState({items: response.data})
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });

    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Ошибка: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Загрузка...</div>;
      } else {
        return (
          // <ul>
          this.state.items && <ul>
            {items.map(item => (
              <li key={item.name}>
                {item.director}{item.title} {item.opening_crawl}
                
              </li>
            ))}
          </ul>
        );
      }
    }

  }
  export default MyComponent;
  
  ReactDOM.render(
  <MyComponent />,
  document.getElementById('root')
);

// это для того чтобы я понял что оно живое
// function tick() {
//     const element = (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {new Date().toLocaleTimeString()}.</h2>
//       </div>
//     );
//     ReactDOM.render(element, document.getElementById('root'));
//   }
  
//   setInterval(tick, 1000);
