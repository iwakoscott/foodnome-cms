import React from 'react';
import {
  Paper,
  FormControl,
  Input,
  InputLabel,
  Button
} from '@material-ui/core';
import Layout from '../components/layout';
import YeahGif from '../images/gifs/yeah.gif';
import { FaPaperPlane } from 'react-icons/fa';

export default props => (
  <Layout {...props}>
    <div
      className="igtDpy"
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 100,
        marginBottom: 50
      }}>
      <Paper
        style={{
          padding: '2em',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: 700,
          width: '100%'
        }}>
        <h1>Cook From Home With Foodnome {'🍳'}</h1>
        <img src={YeahGif} alt="Cook avatar." style={{ width: 200 }} />
        <p>
          This is the beginning of a revolution in the way we feed our
          communities. Make a living making what you love, cook on your own
          schedule, and connect with your hungry neighbors! Fill out the form
          below and we will get back to you as soon as we can!
        </p>
        <form
          action="https://foodnome.us17.list-manage.com/subscribe/post?u=eb55602632b381ff0f3bdd8aa&amp;id=6da5658005"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          class="validate"
          novalidate
          style={{ width: '100%' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%'
            }}>
            <section>
              <FormControl fullWidth>
                <InputLabel htmlFor="name" style={{ color: 'black' }}>
                  First Name
                </InputLabel>
                <Input name="FNAME" id="name" required />
              </FormControl>

              <FormControl fullWidth>
                <InputLabel htmlFor="name" style={{ color: 'black' }}>
                  Last Name
                </InputLabel>
                <Input name="LNAME" id="name" required />
              </FormControl>

              <FormControl fullWidth>
                <InputLabel htmlFor="email" style={{ color: 'black' }}>
                  Email
                </InputLabel>
                <Input type="email" name="EMAIL" id="email" required />
              </FormControl>
            </section>

            <section>
              <FormControl fullWidth>
                <InputLabel htmlFor="phone-number" style={{ color: 'black' }}>
                  Phone Number
                </InputLabel>
                <Input id="phone-number" name="PHONE" required />
              </FormControl>

              <FormControl fullWidth>
                <InputLabel htmlFor="zip-code" style={{ color: 'black' }}>
                  Zip Code
                </InputLabel>
                <Input id="zip-code" name="ZIPCODE" required />
              </FormControl>
            </section>

            <FormControl fullWidth>
              <InputLabel htmlFor="what-excites-you" style={{ color: 'black' }}>
                Is there anything you’d like to share with us?
              </InputLabel>
              <Input id="what-excites-you" name="SHARE" multiline rows={10} />
            </FormControl>
          </div>
          <section style={{ padding: '1em' }}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              style={{ float: 'right', background: '#ec008c', color: 'white' }}>
              <span style={{ margin: '0 0.25rem' }}>Apply</span>
              <FaPaperPlane
                color={'white'}
                size={20}
                style={{ margin: '0 0.25rem' }}
              />
            </Button>
          </section>
        </form>
      </Paper>
    </div>
  </Layout>
);
