import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import { theme } from './layout/Theming';
import {
  Reboot,
  withStyles,
  Grid,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
} from 'material-ui';

import { Header, Main, Page } from './layout';
import { Accent, ContactList } from './components';


require('typeface-roboto');
import 'material-design-icons/iconfont/material-icons.css';


class Root extends Component {
  render() {
    return (
      <Fragment>
        <Page>
          <Main>
            <Header />
            <Grid container>
              <Grid item xs={12} lg={8}>
                here will be my bio
              </Grid>
              <Grid item xs={12} lg={4}>
                <div>
                  <Accent textTransform='uppercase' fontSize='1.2em'>// contact</Accent>
                </div>
                <ContactList />
              </Grid>
            </Grid>
          </Main>
        </Page>
      </Fragment>
    );
  }
}

render(
  <Fragment>
    <Reboot />
    <MuiThemeProvider theme={theme}>
      <Root />
    </MuiThemeProvider>
  </Fragment>,
  document.getElementById('app'),
);
