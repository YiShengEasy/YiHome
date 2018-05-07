/**
 * Created by yisheng on 2018/4/25
 */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import Card, { CardHeader, CardContent, CardActions } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import { IconButton, Snackbar } from 'material-ui';
import red from 'material-ui/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import copy from 'copy-to-clipboard'; //剪切板插件

const styles = theme => ({
  card: {
    width: 380,
  },
  actions: {
    display: 'flex',
  },
  cardConent: {
    height: 200,
    overflowY: 'auto',
    whiteSpace: 'pre-wrap',//必须要这个 不然高亮不会换行
    outline: 0
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
  static defaultProps = {
    title: '暂无标题',
    code: ''
  }
  state = {
    expanded: true,
    snackbarOpen: false
  };
  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };
  handleCopyCode = (string) => {
    copy(string);
    this.setState({
      snackbarOpen: true
    },()=> setTimeout(
      () => {
        this.state.snackbarOpen && this.setState({ snackbarOpen: false })
      }, 1500)
    )
  }
  render() {
    const { classes, avatar, title, description = '暂无描述', children, code, link = '' } = this.props;
    const renderCardContent =
      this.state.expanded ?
        <CardContent className={classes.cardConent}>
          {children}
        </CardContent> :
        <CardContent className={classes.cardConent}>
          <div dangerouslySetInnerHTML={{ __html: code.highlightCode }}></div>
        </CardContent>
    //弹出提示框
    const renderSnackbar =
      <Snackbar
        anchorOrigin={{ vertical: 'center', horizontal: 'center' }}
        open={this.state.snackbarOpen}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id" >代码已复制到剪切板</span>}
      />
    return (
      <div>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                {avatar ? '' : 'R'}
              </Avatar>
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title={title}
            subheader={description}
          />
          {renderCardContent}
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton onClick={()=>this.handleCopyCode(code.originalCode)} aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            {link ? <a href={link} target='_blank'>
              <IconButton aria-label="Share">
                <ShareIcon />
              </IconButton>
            </a> : ''}
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
        </Card>
        {renderSnackbar}
      </div>
    );
  }
}

CSSCard.propTypes = {
  classes: PropTypes.object.isRequired,
  code: PropTypes.object.isRequired,
  avatar: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default withStyles(styles)(CSSCard);
