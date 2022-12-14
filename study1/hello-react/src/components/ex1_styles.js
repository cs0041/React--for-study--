import React from "react";
import "./styles.css";

export default function ex1_styles() {
  const styles = {
    container: { backgroundColor: "#F0F", height: 200 }
  };

  return (
    <div>
      {/* Inline Styles #1 */}
      <div style={styles.container}>
        <h1>Inline Style Example</h1>
      </div>

      {/* Class Styles #2 */}
      <div className="root">
        <h1>CSS Style Example</h1>
      </div>
    </div>
  );
}
