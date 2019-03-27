
import React from 'react';
import PropTypes from "prop-types";
import FileIcon from './fileIcon'

function getFileName(file) {
    return [
      <FileIcon
        file={file}
        key={0}
      />,
      <td
        className="file-name"
        key={1}
      >
        {file.name}
      </td>
    ];
  }

  const FileListItem = ({ file }) =>
  <tr className="file-list-item">
    {getFileName(file)}
  </tr>;
FileListItem.propTypes = {
  file: PropTypes.object.isRequired
};

export default FileListItem;
  
 