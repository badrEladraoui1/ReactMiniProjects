/* eslint-disable react/prop-types */

function SavedItem({savedNote}) {
  return (
    <div>
      <li>{savedNote.note}</li>
    </div>
  )
}

export default SavedItem
