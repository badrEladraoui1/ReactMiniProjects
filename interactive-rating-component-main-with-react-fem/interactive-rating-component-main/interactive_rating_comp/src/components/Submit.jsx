/* eslint-disable react/prop-types */
const Submit = ({ onHandleSubmit }) => {
  return (
    <button onClick={() => onHandleSubmit(true)} className="submit">
      Submit
    </button>
  );
};

export default Submit;
