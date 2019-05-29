import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Grid from '@material-ui/core/Grid';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import Collapse from '@material-ui/core/Collapse';



// defines the cards theme and styles
const styles = theme => ({
    card: {
      maxWidth: 400,
    },
    media: {
      height: 0,
      paddingTop: "67.25%" // 16:9,
    },
    
    
     expand: {
       transform: "rotate(0deg)",
       marginLeft: "auto",
       transition: theme.transitions.create("transform", {
         duration: theme.transitions.duration.shortest
       })
     },
     expandOpen: {
       transform: "rotate(0deg)"
     },
    avatar: {
      backgroundColor: "#33ab9f"
    },
    
  });
  


class RecipeItems extends Component {
    state = {
        expanded: false,
        heartToggle: false
      };


      toggleHeart = () => {
        if (!this.state.heartToggle) {
          this.setState({
            heartToggle: true
          });
        } else {
          this.setState({
            heartToggle: false
          });
        }
      };

      handleExpandClick = () => {
             this.setState(state => ({ expanded: !state.expanded }));
         };

      // outputs version of heart icon to DOM based on current state of 'heartToggle'
  displayHeart = () => {
    if (this.state.heartToggle) {
      return <FavoriteIcon style={{ color: "#d50000" }} />;
    } else {
      return <FavoriteIcon />;
    }
  };
    render (){
      const { classes } = this.props;
            return (
                <Grid item xs={12} sm={4}>
                  <Card className={classes.card}>
                    <CardHeader
                      avatar={
                        <Avatar aria-label="Recipe" className={classes.avatar}>
            R
          </Avatar>
                      }
                      
                       action={
                           <IconButton>
                               <MoreVertIcon />
                           </IconButton>
                       }
                      title={this.props.items.recipe_title}
                      
                    />
                    <div className="card-image">
                      <CardMedia
                        className={classes.media}
                        image={this.props.items.image_url}
                        title="image dish name"
                      />
                    </div>
                    <CardContent
                      style={{ marginTop: "3px", marginBottom: "3px" }}
                    >
                      <Typography component="p">
                        {this.props.items.category}
                      </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                      <IconButton
                        aria-label="Add to favorites"
                        onClick={this.toggleHeart}
                      >
                        {this.displayHeart()}
                      </IconButton>
                       
                                      
                                      <IconButton
                                      className={clsx(classes.expand, {
                                          [classes.expandOpen]: this.state.expanded,
                                      })}
                                      onClick={this.handleExpandClick}
                                      aria-expanded={this.state.expanded}
                                      aria-label="Show more"
                                  >
                                      <ExpandMoreIcon />
                                  </IconButton> 
                    </CardActions>
                     
                                  
                                  <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                                  <CardContent>
                                      <Typography paragraph>Ingredients:</Typography>
                                      <Typography paragraph>
                                      {this.props.items.ingredients}
                                              </Typography>
                                              <Typography paragraph>Preparation Instructions:</Typography>
                                      <Typography paragraph>
                                      {this.props.items.description}
                                              </Typography>
                                  </CardContent>
                              </Collapse> 
                  </Card>
                </Grid>
              );
            }
          }



  // this allows us to use <App /> in index.js
  export default withStyles(styles)(RecipeItems);
