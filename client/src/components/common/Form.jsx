// src/components/common/Form.jsx
import React from 'react';

const Form = ({ onSubmit, children }) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {children}
      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
    </form>
  );
};

export default Form;
