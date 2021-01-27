import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  subHeader: {
    color: "rgba(50, 50, 50, 1)",
    fontWeight: "bold"
  },
  nested: {
    paddingLeft: theme.spacing(4)
  },
  text: {
    paddingTop: theme.spacing(3),
    color: theme.textSecondary
  }
}));

export default function ListDividers() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Grid container direction="row" justify="center" alignItems="flex-start">
      <Grid item xs={12} sm={6}>
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          dense={true}
          subheader={
            <ListSubheader
              component="div"
              id="nested-list-subheader"
              className={classes.subHeader}
            >
              HEALTH TOPICS
            </ListSubheader>
          }
          className={classes.root}
        >
          <ListItem button>
            <ListItemText primary="Asthma" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Birth Defects" />
          </ListItem>
          <ListItem button onClick={handleClick}>
            <ListItemText primary="Cancer" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" dense={true}>
              <ListItem button className={classes.nested}>
                <ListItemText primary="All Types" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Brain/CNS" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Breast" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Liver" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Lung" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Melanoma" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Non-Hodgkins Lymphoma" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Thyroid" />
              </ListItem>
            </List>
            <ListItem button>
              <ListItemText primary="Birth Defects" />
            </ListItem>
          </Collapse>
          <ListItem button>
            <ListItemText primary="Childhood Lead" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="COPD" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Heart Attack" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Injury" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Life Expectancy" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Mortality" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Occupational Health" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Reproductive Health" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Suicide" />
          </ListItem>
        </List>
      </Grid>

      <Grid item xs={12} sm={6}>
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          dense={true}
          subheader={
            <ListSubheader
              component="div"
              id="nested-list-subheader"
              className={classes.subHeader}
            >
              ENVIRONMENTAL TOPICS
            </ListSubheader>
          }
          className={classes.root}
        >
          <ListItem button>
            <ListItemText primary="Air Quality" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Drinking Water" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Climate" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Radon" />
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography className={classes.text} color="textSecondary" gutterBottom>
          Can't find what you're looking for?
        </Typography>
        <Button size="medium" color="primary">
          All Health Topics
        </Button>
      </Grid>
    </Grid>
  );
}
