import React from 'react';
import CustomButton from './CustomButton';

function App() {
  return (
    <div>
      <CustomButton text="Basic Button" />
      <CustomButton text="Warning button" warnMessage="This is a warning!" />
      <CustomButton text="Indented Button" indent />
    </div>
  );
}

export default App;
