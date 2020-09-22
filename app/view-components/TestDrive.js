import React, { useContext, useEffect } from 'react'
import './TestDrive.scss'

import { AppContext } from '../context/AppContext'
import ReactAce from 'react-ace-editor'

const TestDrive = () => {
  document.title = 'Test Drive Couchbase Server'
  const context = useContext(AppContext)
  const isLight = context.theme === 'light'

  const onChange = (newValue, e) => {
    console.log(newValue, e)
    // The editor object is from Ace's API
    const editor = ace.editor
    // Outputs the value of the editor
    console.log(editor.getValue())
  }

  useEffect(() => {
    console.log("fresh")
  }, [context.theme])

  return (
    <div className="test-drive">
      <div className="session-info">
        Session Info
      </div>
      <div className="main">
        <div className="left">
          <h2>Examples</h2>
          <ul>
            <li>Basic Java SDK</li>
            <li>Basic N1QL (cURL)</li>
            <li>Basic Node SDK</li>
            <li>Basic Node Ottoman</li>
            <li>Basic Python</li>
            <li>CB Workload Gen</li>
          </ul>
        </div>
        <div className="right">
          <h2>Please Select an Example</h2>
          <div className="code-source">
            <ReactAce
              mode="javascript"
              theme={isLight ? 'eclipse' : 'monokai'}
              setReadOnly={false}
              onChange={onChange}
              style={{ height: '300px' }}
              ref={instance => { ace = instance }} // Let's put things into scope
            />
          </div>
        </div>
      </div>
      <div className="output">
        <h2>Output</h2>
        <div className="code-output">
          <pre>{`
Hello   ,   
World   .
          `}</pre>
        </div>
      </div>
    </div>
  )
}

export default TestDrive