export const DiagnosingDataIssues = () => {
  return (
    <div className="container py-5">
      <h1 className="display-4 fw-bold mb-4">Best Practices for Diagnosing Data Issues, Analysis Methods, and Reporting</h1>

      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h2 className="h4 mb-3">Diagnosing Data Issues</h2>
          <ul className="list-unstyled ps-3">
            <li><strong>Validate the Data Source:</strong> Confirm reliability and consistency.</li>
            <li><strong>Check for Completeness:</strong> Look for missing or null values.</li>
            <li><strong>Check for Consistency:</strong> Ensure uniform formatting and category labeling.</li>
            <li><strong>Identify Anomalies:</strong> Visualize to spot outliers and irregularities.</li>
            <li><strong>Document Assumptions:</strong> Record all data assumptions clearly.</li>
          </ul>
        </div>
      </div>

      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h2 className="h4 mb-3">Identifying Measurable Metrics</h2>
          <p>Good metrics are clear, consistent, and goal-aligned.</p>
          <ul className="list-unstyled ps-3">
            <li><strong>Define KPIs:</strong> Link metrics to strategic goals.</li>
            <li><strong>Quantitative vs Qualitative:</strong> Differentiate measurable and subjective data.</li>
            <li><strong>Operational Definitions:</strong> Clearly document metric calculations.</li>
            <li><strong>Data Availability:</strong> Only use data that is reliably accessible.</li>
          </ul>
        </div>
      </div>

      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h2 className="h4 mb-3">Analysis Methods</h2>
          <div>
            <p><strong>Descriptive:</strong> Summarizes historical data (averages, percentages).</p>
            <p><strong>Diagnostic:</strong> Investigates causes behind patterns.</p>
            <p><strong>Predictive:</strong> Forecasts future trends using modeling.</p>
            <p><strong>Prescriptive:</strong> Recommends actions based on predictions.</p>
          </div>
        </div>
      </div>

      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h2 className="h4 mb-3">Reporting Methods</h2>
          <div>
            <p><strong>Static Reports:</strong> Fixed documents like PDFs or Word files.</p>
            <p><strong>Dynamic Dashboards:</strong> Interactive reports using Tableau or Power BI.</p>
            <p><strong>Data Storytelling:</strong> Combine visuals with narrative.</p>
            <p><strong>Automated Reporting:</strong> Use scripting to schedule report generation.</p>
          </div>
        </div>
      </div>

      <div className="text-center mt-5">
        <p className="fs-5 fst-italic">Good analysis turns raw data into insights. Good reporting turns insights into action.</p>
      </div>
    </div>
  );
}
