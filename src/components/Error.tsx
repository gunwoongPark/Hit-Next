import React, { VFC } from 'react';

interface PropType {
  code: String;
}

const Error: VFC<PropType> = (props) => {
  const { code } = props;

  if (code === '404') {
    return <h1>{code} Not Found</h1>;
  } else if (code === '500') {
    return <h1>{code} Server Error</h1>;
  } else {
    return <h1>I don't know this error !!</h1>;
  }
};

export default Error;
