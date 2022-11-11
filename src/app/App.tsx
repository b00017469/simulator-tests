import React from 'react';

import './App.css';
import { Button } from '../common/components/button/Button';
import { ReturnComponentType } from '../common/types/ReturnComponentType';

const App = (): ReturnComponentType => {
   return (
      <div className="App">
         <Button variant="buttonOutlined">Button</Button>
      </div>
   );
};

export default App;
