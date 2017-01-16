import React from 'react';
import Counter from './Counter';
import Buttons from './Button';
import Option from './Option';

class App extends React.Component {
  render() {
    return (
      <div>
        <Counter />
        <Option />
        <Buttons />
      </div>
    );
  }
}

// class App extends React.Component {
//   render() {
//     return (
//       <div style={ {textAlign: 'center'} }>
//         Hello
//       </div>
//     );
//   }
// }

export default App;
