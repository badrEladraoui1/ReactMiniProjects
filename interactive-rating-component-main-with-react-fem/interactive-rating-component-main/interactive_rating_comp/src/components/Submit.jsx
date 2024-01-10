/* eslint-disable react/prop-types */
const Submit = ({ onHandleSubmit }) => {
  return (
    <button className="submit" onClick={() => onHandleSubmit(true)}>
      SUBMIT
    </button>
  );
};

export default Submit;
