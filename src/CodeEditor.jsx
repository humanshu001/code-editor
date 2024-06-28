import React, { useState } from 'react';
import {Highlight,  themes } from 'prism-react-renderer';


const CodeEditor = () => {
  const [code, setCode] = useState('<Your initial code>');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        style={{
          width: '100%',
          height: '200px',
          fontFamily: 'monospace',
          fontSize: '16px',
          backgroundColor: '#011627',
          color: '#d6deeb',
          padding: '10px',
          border: 'none',
          borderRadius: '4px',
          marginBottom: '10px',
        }}
      />
      <Highlight contentEditable='true' value={code}
        onChange={(e) => setCode(e.target.value)} code={code} language="jsx" theme={themes.nightOwl}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={{ ...style, padding: '20px' }}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};

export default CodeEditor;
