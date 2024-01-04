/* eslint-disable react/prop-types */
import Synonym from "./Synonym";

const Synonyms = ({ synonyms }) => {
  return (
    <div className="synonyms">
      {synonyms.map((synonym, index) => (
        <Synonym key={index} synonym={synonym}></Synonym>
      ))}
    </div>
  );
};

export default Synonyms;
