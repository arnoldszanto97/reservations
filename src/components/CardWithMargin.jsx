import React from 'react';
import { Card } from '@blueprintjs/core';

const CardWithMargin = ({ children, ...props }) => (
  <Card style={{ margin: '20px' }} {...props}>
    {children}
  </Card>
);

export default CardWithMargin;

