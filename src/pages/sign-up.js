import React from 'react';
import Modal from '@material-ui/core/Modal';
import { TextButton } from '../components/Buttons';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';
import Layout from '../components/layout';

const FormSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

const initialState = {
  EMAIL: '',
  FNAME: '',
  LNAME: '',
  MMERGE4: ''
};

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
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
              <div>
                <Modal
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  aria-labelledby="sign-up-modal"
                  aria-describedby="sign-up-modal"
                  open={true}
                  onClose={this.onClose}>
                  <div
                    style={{
                      backgroundColor: 'white',
                      width: '30rem',
                      padding: '1em',
                      margin: '1rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      flexDirection: 'column',
                      outline: 'none'
                    }}>
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
                        height: '100%'
                      }}
                      action="https://foodnome.us17.list-manage.com/subscribe/post?u=eb55602632b381ff0f3bdd8aa&amp;id=6da5658005"
                      method="post"
                      id="mc-embedded-subscribe-form"
                      name="mc-embedded-subscribe-form"
                      target="_blank"
                      noValidate="">
                      <div id="mc_embed_signup_scroll">
                        <FormSection>
                          <label htmlFor="mce-EMAIL">Email</label>
                          <input
                            required
                            type="email"
                            name="EMAIL"
                            id="mce-EMAIL"
                            value={EMAIL}
                            onChange={this.handleTextChange}
                            placeholder="email..."
                          />
                        </FormSection>

                        <FormSection>
                          <label htmlFor="mce-FNAME">First Name</label>{' '}
                          <input
                            required
                            type="text"
                            name="FNAME"
                            id="mce-FNAME"
                            value={FNAME}
                            onChange={this.handleTextChange}
                            placeholder="first name..."
                          />
                        </FormSection>

                        <FormSection>
                          <label htmlFor="mce-LNAME">Last Name</label>{' '}
                          <input
                            required
                            type="text"
                            name="LNAME"
                            id="mce-LNAME"
                            value={LNAME}
                            onChange={this.handleTextChange}
                            placeholder="last name..."
                          />
                        </FormSection>

                        <FormSection>
                          <label htmlFor="mce-MMERGE4">Phone</label>{' '}
                          <input
                            type="text"
                            name="MMERGE4"
                            id="mce-MMERGE4"
                            value={MMERGE4}
                            onChange={this.handleTextChange}
                            placeholder="phone number..."
                          />
                        </FormSection>

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
                          aria-hidden="true">
                          <input
                            type="text"
                            name="b_eb55602632b381ff0f3bdd8aa_6da5658005"
                            tabIndex="-1"
                          />
                        </div>
                      </div>
                      <div>
                        <input type="checkbox" required />{' '}
                        <label className="small">
                          {' '}
                          I agree to the{' '}
                          <a
                            rel="noopener noreferrer"
                            target="_BLANK"
                            href="/tos"
                            state={{ from: null }}>
                            Terms and Conditions
                          </a>{' '}
                        </label>
                      </div>
                    </form>

                    <div
                      style={{
                        float: 'right',
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'space-between'
                      }}>
                      <Button
                        style={{
                          backgroundColor: data.site.siteMetadata.themeColor
                        }}
                        variant="contained"
                        color="secondary"
                        type="submit"
                        name="subscribe"
                        form="mc-embedded-subscribe-form"
                        id="mc-embedded-subscribe">
                        Subscribe
                      </Button>
                      <TextButton onClick={this.onClose}>Back</TextButton>
                    </div>
                  </div>
                </Modal>
              </div>
            )}
          />
        </div>
      </Layout>
    );
  }
}

export default SignUp;
