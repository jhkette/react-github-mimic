import React from 'react';
import Time from './Time';


import CommitMessage from './commit'
import PropTypes from "prop-types";

const FileListItem = ({ file }) =>
  /* this code has been extracted
     from FileList */
  <tr className="file-list-item">
    <td className="file-name">
      {file.name}
    </td>  
      <CommitMessage
      commit={file.latestCommit}
    />
    <td className="age">
      <Time
        time={file.updated_at}
      />
    </td>    
  </tr>;
FileListItem.propTypes = {
  file: PropTypes.object.isRequired
};

export default FileListItem;