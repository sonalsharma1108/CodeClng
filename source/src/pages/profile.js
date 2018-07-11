import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

const genders = [
  {
    value: 'male',
    label: 'Male',
  },
  {
    value: 'female',
    label: 'Female',
  }
];

class Profile extends React.Component {
  state = {
    gender: 'male',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className="margin-top-50">
        <div className="container">
          <div className="row legend">
            <span>My Profile</span>
          </div>
          <div className="row">
            <div className="container">
              <form className={classes.container} noValidate autoComplete="off">
                <div className="row">
                  <div className="form-group col-md-4">
                    <TextField
                      label="First Name"
                      id="margin-normal"
                      className={classes.textField}
                      helperText="Required"
                      margin="normal"
                    /></div>
                  <div className="form-group col-md-4">
                    <TextField
                      label="Middle Name"
                      id="margin-normal"
                      className={classes.textField}
                      helperText="Required"
                      margin="normal"
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <TextField
                      label="Last Name"
                      id="margin-normal"
                      className={classes.textField}
                      helperText="Required"
                      margin="normal"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-4">
                    <TextField
                      label="Phone"
                      id="margin-normal"
                      className={classes.textField}
                      helperText="Required"
                      margin="normal"
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <TextField
                      label="Email"
                      id="margin-normal"
                      className={classes.textField}
                      helperText="Required"
                      margin="normal"
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <TextField
                      id="select-gender"
                      select
                      label="Gender"
                      className={classes.textField}
                      value={this.state.gender}
                      onChange={this.handleChange('gender')}
                      SelectProps={{
                        native: true,
                        MenuProps: {
                          className: classes.menu,
                        },
                      }}
                      helperText="Required"
                      margin="normal"
                    >
                      {genders.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </TextField>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div >
    )
  }
};

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile);
