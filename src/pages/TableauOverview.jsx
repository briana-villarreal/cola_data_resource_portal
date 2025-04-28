export const TableauOverview = () => {
  return (
    <div className="container py-5">
      <h1 className="display-4 fw-bold mb-4">All Things Tableau</h1>

      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h2 className="h4 mb-3">What is Tableau?</h2>
          <p>Tableau is a powerful tool for creating interactive data visualizations.</p>
        </div>
      </div>

      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h2 className="h4 mb-3">Key Concepts</h2>
          <ul className="list-unstyled ps-3">
            <li><strong>Dimensions and Measures:</strong> Categorical vs quantitative data.</li>
            <li><strong>Filters:</strong> Narrow your dataset.</li>
            <li><strong>Calculated Fields:</strong> Create new data fields with formulas.</li>
            <li><strong>Dashboards:</strong> Combine multiple charts and insights.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
