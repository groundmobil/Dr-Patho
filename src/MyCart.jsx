import React from "react";

const MyCart = () => {
  const styles = `
    .landing-page {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: transparent;
    }

    .column {
      width: 100%;
      height: 120vh;
      padding: 30px;
      background-color: transparent;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
      margin: 0 auto; /* Set left and right margins to auto to center the column */
      border-radius: 10px;
      color: white;
      font-size: 18px;
      text-align: center; /* Center the text within the column */
    }

    .column h3 {
      font-size: 44px;
      color: white;
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="landing-page">
        <div className="column">
          <h3>Booking Details</h3>
          {/* Rest of your content */}
        </div>
      </div>
    </>
  );
};

export default MyCart;
