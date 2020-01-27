import React from 'react';
import { Card, Image, Icon, Button } from 'semantic-ui-react';

const UserRow = user => {
  const { firstName, lastName, eMail, removeRequest } = user;
  return (
    <Card>
      <Card.Content>
        <Card.Header>{firstName}</Card.Header>
        <Card.Meta>
          <span className='date'>{lastName}</span>
          <span className='date'>{eMail}</span>
          <span className='date'>{removeRequest}</span>
        </Card.Meta>
      </Card.Content>
    </Card>
  );
};

export default UserRow;
