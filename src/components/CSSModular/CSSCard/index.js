/**
 * Created by yisheng on 2018/4/25
 */
import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classnames from 'classnames';
import Card, {CardHeader, CardContent, CardActions} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import red from 'material-ui/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = theme => ({
  card: {
    width: 380,
  },
  actions: {
    display: 'flex',
  },
  cardConent: {
    height: 200,
    overflowY:'auto',
    whiteSpace:'pre-wrap',//必须要这个 不然高亮不会换行
    outline:0
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class CSSCard extends React.Component {
  static defaultProps={
    title:'暂无标题',
    cssHtml:''
  }
  state = {expanded: false};
  handleExpandClick = () => {
    this.setState({expanded: !this.state.expanded});
  };
  render() {
    const {classes,avatar,title,children,cssHtml} = this.props;
    const renderCardContent =
      this.state.expanded ?
        <CardContent className={classes.cardConent}>
          {children}
        </CardContent> :
        <CardContent className={classes.cardConent}>
            <div dangerouslySetInnerHTML={{ __html: cssHtml }}></div>
        </CardContent>
    return (
      <div>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                {avatar?'':'R'}
              </Avatar>
            }
            action={
              <IconButton>
                <MoreVertIcon/>
              </IconButton>
            }
            title={title}
            subheader="September 14, 2016"
          />
          {renderCardContent}
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon/>
            </IconButton>
            <IconButton aria-label="Share">
              <ShareIcon/>
            </IconButton>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon/>
            </IconButton>
          </CardActions>
        </Card>
      </div>
    );
  }
}

CSSCard.propTypes = {
  classes: PropTypes.object.isRequired,
  cssHtml:PropTypes.string.isRequired,
  avatar:PropTypes.string,
  title:PropTypes.string.isRequired,
};

export default withStyles(styles)(CSSCard);
