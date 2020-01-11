import React from "react";

import "./Dataset.css";

const Dataset = ({ dataset }) => {
  return (
    <div className="dataset">
      <h2>{dataset.name}</h2>
      <p>Total Rows: {dataset.stats.row_count}</p>
      <h3>Keys</h3>
      {dataset.stats.keys && dataset.stats.keys.length > 0 ? (
        dataset.stats.keys.map(key => {
          const totalRows = dataset.stats.row_count;
          const nullAmount = key.null_fraction * totalRows;
          const distinctAmount =
            key.distinct >= 0 ? key.distinct : key.distinct * -1 * totalRows;
          const duplicateAmount = totalRows - nullAmount - distinctAmount;
          return (
            <div key={key.id} className="key">
              <p className="key-name">{key.label}</p>
              <div className="data">
                <p>
                  <span className="label">Null:</span> {nullAmount.toFixed()}{" "}
                  rows
                </p>
                <p>
                  <span className="label">Distinct:</span>{" "}
                  {distinctAmount.toFixed()} rows
                </p>
                <p>
                  <span className="label">Duplicate:</span>{" "}
                  {duplicateAmount.toFixed()} rows
                </p>
              </div>
            </div>
          );
        })
      ) : (
        <h4>No Keys Found</h4>
      )}
    </div>
  );
};

export default Dataset;
