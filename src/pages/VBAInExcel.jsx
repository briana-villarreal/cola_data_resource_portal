export const VBAInExcel = () => {
  return (
    <div className="container py-5">
      <h1 className="display-4 fw-bold mb-4">Getting Started with VBA in Excel</h1>

      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h2 className="h4 mb-3">Setting Up VBA</h2>
          <p>1. Open Excel and press <strong>Alt + F11</strong> to open the VBA editor.</p>
          <p>2. Insert a new module: <strong>Insert &gt; Module</strong>.</p>
          <p>3. Start coding simple macros! Example:</p>
          <pre><code>Sub HelloWorld()
  MsgBox "Hello, world!"
End Sub</code></pre>
        </div>
      </div>

      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h2 className="h4 mb-3">Tips for Beginners</h2>
          <ul className="list-unstyled ps-3">
            <li>Use the <strong>Macro Recorder</strong> to learn syntax.</li>
            <li>Practice writing simple loops and conditions.</li>
            <li>Comment your code for clarity.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
