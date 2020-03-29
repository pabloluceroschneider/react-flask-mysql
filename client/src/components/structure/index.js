import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ButtonAppBar from './appBar';
import List from '../List';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Structure = () => {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <ButtonAppBar />
          </Grid>
          <Grid item xs={12} sm={4}></Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>
              List of Persons
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}></Grid>
          <Grid item xs={2} sm={2}></Grid>

          <Grid item  xs={8} sm={8}>
            <Paper className={classes.paper}>
              <List />
            </Paper>
          </Grid>

        </Grid>
      </div>
    );
  }

  export default Structure;