import React from 'react';
import {
  withStyles,
  Grid,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
} from 'material-ui';


const ContactList = () => (
  <List>
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <i className="material-icons">phone</i>
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary="Single-line item" />
    </ListItem>
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <i className="material-icons">twitter</i>
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary="Single-line item" />
    </ListItem>
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <i className="material-icons">email</i>
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary="Single-line item" />
    </ListItem>
  </List>
);

export default ContactList;
