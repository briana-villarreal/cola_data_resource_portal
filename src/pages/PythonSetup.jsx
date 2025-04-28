export const PythonSetup = () => {
  return (
    <div className="container py-5">
      <h1 className="display-4 fw-bold mb-4">Getting Started with Python</h1>

      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h2 className="h4 mb-3">Setting Up Python</h2>
          <p>1. Download Python from <a href="https://python.org" target="_blank">python.org</a>.</p>
          <p>2. Install VSCode or PyCharm as your IDE.</p>
          <p>3. Open your terminal and verify installation with <code>python --version</code>.</p>
        </div>
      </div>

      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h2 className="h4 mb-3">Writing Your First Program</h2>
          <pre><code>print("Hello, world!")</code></pre>
          <p>Save the file as <code>hello.py</code> and run it in your terminal: <code>python hello.py</code>.</p>
        </div>
      </div>
    </div>
  );
};
