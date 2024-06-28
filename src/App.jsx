import React from 'react';
import CodeEditor from './CodeEditor';

const App = () => {

  const [lang, setLang] = React.useState('jsx');

  return (
    <div>
      <h1>Code Editor Example</h1>
      <select name="" onChange={
        (e) => {
          setLang(e.target.value);
        }
      }>
        <option selected value="javascript">JavaScript</option>
        <option value="python">Python</option>
        <option value="ruby">Ruby</option>
      </select>
      <CodeEditor language={lang} />
    </div>
  );
};

export default App;
