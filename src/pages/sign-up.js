import React from 'react';
import {
  Dialog,
  TextField,
  DialogActions,
  DialogContent,
} from '@material-ui/core';
import { TextButton } from '../components/Buttons';
import Button from '@material-ui/core/Button';
import { graphql, StaticQuery } from 'gatsby';
import Layout from '../components/layout';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      EMAIL: '',
      FNAME: '',
      LNAME: '',
      MMERGE4: '',
    };
  }

  handleTextChange = ({ target }) => {
    const key = target.name;
    this.setState({ [key]: target.value });
  };

  onClose = () =>
    this.props.navigate(
      this.props.location.state ? this.props.location.state.from : '/'
    );

  render() {
    const { EMAIL, FNAME, LNAME, MMERGE4 } = this.state;
    return (
      <Layout {...this.props}>
        <div style={{ minHeight: '100vh' }}>
          <StaticQuery
            query={graphql`
              query siteThemeColor {
                site {
                  siteMetadata {
                    themeColor
                  }
                }
              }
            `}
            render={data => (
              <div
                style={{
                  height: '100%',
                }}
              >
                <Dialog
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  aria-labelledby="sign-up-modal"
                  aria-describedby="sign-up-modal"
                  open={true}
                  onClose={this.onClose}
                >
                  <DialogContent
                    style={{
                      maxWidth: '30rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      flexDirection: 'column',
                      outline: 'none',
                      height: 'min-content',
                    }}
                  >
                    <div>
                      <h1>
                        Home restaurants are coming soon. Join the movement and
                        stay in the loop!
                      </h1>
                    </div>
                    <form
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        maxWidth: '30em',
                        margin: '0 auto',
                      }}
                      action="https://foodnome.us17.list-manage.com/subscribe/post?u=eb55602632b381ff0f3bdd8aa&amp;id=6da5658005"
                      method="post"
                      id="mc-embedded-subscribe-form"
                      name="mc-embedded-subscribe-form"
                      target="_blank"
                      noValidate=""
                    >
                      <div id="mc_embed_signup_scroll">
                        <TextField
                          style={{ marginTop: '6px' }}
                          fullWidth
                          variant="outlined"
                          required
                          type="email"
                          name="EMAIL"
                          id="mce-EMAIL"
                          label="Email"
                          value={EMAIL}
                          onChange={this.handleTextChange}
                          placeholder="jondoe@gmail.com"
                        />
                        <TextField
                          style={{ marginTop: '6px' }}
                          fullWidth
                          variant="outlined"
                          required
                          type="text"
                          name="FNAME"
                          id="mce-FNAME"
                          label="First Name"
                          value={FNAME}
                          onChange={this.handleTextChange}
                          placeholder="John"
                        />

                        <TextField
                          style={{ marginTop: '6px' }}
                          fullWidth
                          variant="outlined"
                          required
                          type="text"
                          name="LNAME"
                          id="mce-LNAME"
                          label="Last Name"
                          value={LNAME}
                          onChange={this.handleTextChange}
                          placeholder="Doe"
                        />
                        <TextField
                          style={{ marginTop: '6px' }}
                          fullWidth
                          variant="outlined"
                          type="text"
                          name="MMERGE4"
                          id="mce-MMERGE4"
                          label="Phone Number"
                          value={MMERGE4}
                          onChange={this.handleTextChange}
                          placeholder="5306288235"
                        />

                        <div id="mce-responses">
                          <div
                            id="mce-error-response"
                            style={{ display: 'none' }}
                          />

                          <div
                            id="mce-success-response"
                            style={{ display: 'none' }}
                          />
                        </div>

                        <div
                          style={{ position: 'absolute', left: '-5000px' }}
                          aria-hidden="true"
                        >
                          <input
                            type="text"
                            name="b_eb55602632b381ff0f3bdd8aa_6da5658005"
                            tabIndex="-1"
                          />
                        </div>
                      </div>
                      <div style={{ marginTop: '6px' }}>
                        <input type="checkbox" required />{' '}
                        <label className="small">
                          {' '}
                          I agree to the{' '}
                          <a
                            rel="noopener noreferrer"
                            target="_BLANK"
                            href="/tos"
                            state={{ from: null }}
                          >
                            Terms and Conditions
                          </a>{' '}
                        </label>
                      </div>
                    </form>
                  </DialogContent>

                  <DialogActions
                    style={{
                      float: 'right',
                      display: 'flex',
                      width: '96%',
                      margin: '0em auto 1em auto',
                      justifyContent: 'space-between',
                    }}
                  >
                    <TextButton onClick={this.onClose}>Back</TextButton>
                    <Button
                      style={{
                        backgroundColor: data.site.siteMetadata.themeColor,
                      }}
                      variant="contained"
                      color="secondary"
                      type="submit"
                      name="subscribe"
                      form="mc-embedded-subscribe-form"
                      id="mc-embedded-subscribe"
                    >
                      Subscribe
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>
            )}
          />
        </div>
      </Layout>
    );
  }
}

export default SignUp;
