import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import DonutChart from "../Charts/DonutChart/DonutChart";
const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: theme.spacing.unit * 15,
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "#efeff4",
    borderRadius: "0px",
    borderColor: "#efeff4"
  }
});

class OrderPage extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={3}>
            <Grid container>
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <DonutChart
                    id="trade_donutchart"
                    classe="trade_donutchart"
                    height={120}
                    width={160}
                    marginLeft={40}
                  />
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper}> xs=6</Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Grid container>
              <Grid item xs={6}>
                <Paper className={classes.paper}>xs=6</Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <DonutChart
                    id="orderrate_donutchart"
                    classe="orderrate_donutchart"
                    height={120}
                    width={160}
                    legends={false}
                    marginLeft={80}
                  />
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid container>
              <Grid item xs={4}>
                <Paper className={classes.paper}>xs=4</Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>xs=4</Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>xs=4</Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

OrderPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(OrderPage);
