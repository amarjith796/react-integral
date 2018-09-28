import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import DonutChart from "../Charts/DonutChart/DonutChart";
import ProgressRectChart from "../Charts/ProgressRectChart/ProgressRectChart";
import LineChart from "../Charts/LineChart/LineChart";
import VolumeChart from "../Charts/VolumeChart/VolumeChart";
import MarketSnapshot from "../Charts/MarketSnapShot/MarketSnapShot";
import ProviderPerformance from "../Charts/ProviderPerformance/ProviderPerformance";
import Zoom from "@material-ui/core/Zoom";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper1: {
    height: theme.spacing.unit * 15,
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "#efeff4",
    borderRadius: "0px",
    borderColor: "#efeff4"
  },
  paper: {
    height: theme.spacing.unit * 20,
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "#efeff4",
    borderRadius: "0px",
    borderColor: "#efeff4"
  },
  circledots: {
    height: "10px",
    width: "10px",
    backgroundColor: "#bbb",
    borderRadius: "50%",
    display: "inline-block"
  }
});

class OrderPage extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={12} md={3}>
            <Grid container>
              <Grid item xs={6} md={6}>
                <Paper className={classes.paper1}>
                  <Typography
                    variant="caption"
                    align="left"
                    style={{ position: "relative", left: "6px" }}
                  >
                    TRADES
                  </Typography>

                  <DonutChart
                    id="trade_donutchart"
                    classe="trade_donutchart"
                    height={120}
                    width={160}
                    marginLeft={40}
                  />
                </Paper>
              </Grid>
              <Grid item xs={6} md={6}>
                <Paper className={classes.paper1}>
                  <Typography
                    variant="caption"
                    align="left"
                    style={{ position: "relative", left: "6px" }}
                  >
                    ORDER STREAMS
                  </Typography>
                  <Zoom in={true}>
                    <Typography
                      variant="caption"
                      align="left"
                      style={{
                        position: "relative",
                        left: "6px",
                        top: "10px",
                        fontSize: "10px"
                      }}
                    >
                      <span className={classes.circledots} /> SG/SKEW_1
                      <pre />
                      <span className={classes.circledots} /> CITIP/WF-HARD
                      <pre />
                      <span className={classes.circledots} /> CITIP/WF-EASY
                      <pre />
                      <span className={classes.circledots} /> BTMU/WF-EASY
                    </Typography>
                  </Zoom>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={3}>
            <Grid container>
              <Grid item xs={6} md={6}>
                <Paper className={classes.paper1}>
                  <Typography
                    variant="caption"
                    align="left"
                    style={{ position: "relative", left: "6px" }}
                  >
                    ORDER SUMMARY
                  </Typography>
                  <Zoom in={true}>
                    <Typography
                      variant="caption"
                      align="left"
                      style={{
                        position: "relative",
                        left: "6px",
                        top: "10px",
                        fontSize: "10px"
                      }}
                    >
                      <span className={classes.circledots} /> Order Rate:
                      <span style={{ color: "black" }}>10,000,000</span>
                      <pre />
                      <span className={classes.circledots} /> Order Amount:
                      <span style={{ color: "black" }}>Market</span>
                      <pre />
                      <span className={classes.circledots} /> Order Statud:
                      <span style={{ color: "black" }}>Buy</span>
                      <pre />
                      <span className={classes.circledots} /> Order Type:
                      <span style={{ color: "black" }}>Cancelled</span>
                    </Typography>
                  </Zoom>
                </Paper>
              </Grid>
              <Grid item xs={6} md={6}>
                <Paper className={classes.paper1}>
                  <Typography
                    variant="caption"
                    align="left"
                    style={{ position: "relative", left: "6px" }}
                  >
                    ORDER STATUS
                  </Typography>
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
          <Grid item xs={12} md={6}>
            <Grid container>
              <Grid item xs={12} md={4}>
                <Paper className={classes.paper1}>
                  <Typography
                    variant="caption"
                    align="left"
                    style={{ position: "relative", left: "6px" }}
                  >
                    RATE
                  </Typography>
                  <ProgressRectChart
                    id="orderrate"
                    classe="orderrate"
                    height={120}
                    width={200}
                  />
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper className={classes.paper1}>
                  <Typography
                    variant="caption"
                    align="left"
                    style={{ position: "relative", left: "6px" }}
                  >
                    COVER ORDER
                  </Typography>
                  <ProgressRectChart
                    id="coverorder"
                    classe="coverorder"
                    height={120}
                    width={200}
                  />
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper className={classes.paper1}>
                  <Typography
                    variant="caption"
                    align="left"
                    style={{ position: "relative", left: "6px" }}
                  >
                    TRADES PATTERN
                  </Typography>
                  <LineChart
                    id="tradespattern"
                    classe="tradespattern"
                    height={120}
                    width={200}
                  />
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper className={classes.paper}>
              <Typography
                variant="caption"
                align="left"
                style={{ position: "relative", left: "6px" }}
              >
                VOLUME CHART
              </Typography>
              <VolumeChart
                id="volumechart"
                classe="volumechart"
                height={160}
                width={360}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper className={classes.paper}>
              <Typography
                variant="caption"
                align="left"
                style={{ position: "relative", left: "6px" }}
              >
                MARKET SNAPSHOT
                <Grid container>
                  <Grid item xs={6} md={6}>
                    <MarketSnapshot
                      id="bidmarketchart"
                      classe="bidmarketchart"
                      height={160}
                      width={220}
                      direction="right"
                    />
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <MarketSnapshot
                      id="offermarketchart"
                      classe="offermarketchart"
                      height={160}
                      width={220}
                    />
                  </Grid>
                </Grid>
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper className={classes.paper}>
              <Typography
                variant="caption"
                align="left"
                style={{ position: "relative", left: "6px" }}
              >
                PROVIDER PERFORMANCE CHART
                <ProviderPerformance
                  id="providerperformace"
                  classe="providerperformace"
                  height={160}
                  width={300}
                />
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper className={classes.paper}>
              <Typography
                variant="caption"
                align="left"
                style={{ position: "relative", left: "6px" }}
              >
                X-RAY INSIGHTS
              </Typography>
              <Zoom in={true}>
                <Typography
                  variant="caption"
                  align="left"
                  style={{
                    position: "relative",
                    left: "6px",
                    fontSize: "10px",
                    fontWeight: 600
                  }}
                >
                  Market started to go through a shift at{" "}
                  <span style={{ color: "steelblue" }}>
                    2017-04-14 06:43:22{" "}
                  </span>
                  about 2506 ms after order submit time.
                  <pre />
                  High number of Rejections were seen across all sweeps of{" "}
                  <span style={{ color: "steelblue" }}>
                    8 trades attempted.
                  </span>
                  <span style={{ color: "red" }}> 3 were rejected.</span>
                  <pre /> CITIP took significant time in responding with a
                  rejection. Opportunities to match/execute with other
                  <span style={{ color: "red" }}>participants were lost.</span>
                  <pre /> Order could not recover because of{" "}
                  <span style={{ color: "red" }}>rejections from CITIP.</span>
                </Typography>
              </Zoom>
            </Paper>
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
