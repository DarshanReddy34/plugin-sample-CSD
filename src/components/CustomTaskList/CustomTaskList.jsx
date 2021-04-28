import React from 'react';

import { CustomTaskListComponentStyles } from './CustomTaskList.Styles';

// It is recommended to keep components stateless and use redux for managing states
const CustomTaskList = (props) => {
  if (!props.isOpen) {
    return null;
  }

  return (
    <CustomTaskListComponentStyles>
      Hi there this is a demo added now
      <i className="accented" onClick={props.dismissBar}>
        close
      </i>
    </CustomTaskListComponentStyles>
  );
};

export default CustomTaskList;
