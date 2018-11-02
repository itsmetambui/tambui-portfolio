import React, { Component } from 'react';
import Wrapper from '../UI/Wrapper/Wrapper';
import Header from '../UI/Header/Header';
import MyGoogleMap from '../UI/GoogleMap/MyGoogleMap';
import classes from './Contact.module.scss';

class Contact extends Component {
    render() {
        return (
            <Wrapper>
                <div className={classes.Contact}>
                    <div className={classes.Form}>
                        <Header text="Contact me" />
                        <p>If you have any question, please don't hesitate to contact using the form below...</p>
                        <form method="POST" action="https://formspree.io/blvtam4494@gmail.com">
                            <div>
                                <div className={classes.InputWrapper}>
                                    <input type="text" name="name" placeholder="Name" />
                                    <span />
                                </div>
                                <div className={classes.InputWrapper}>
                                    <input type="email" required name="email" placeholder="Email" />
                                    <span />
                                </div>
                            </div>
                            <div>
                                <div className={classes.InputWrapper}>
                                    <input type="text" name="subject" placeholder="Subject" />
                                    <span />
                                </div>
                            </div>
                            <div>
                                <div className={classes.InputWrapper}>
                                    <textarea type="text" required name="message" placeholder="Message" />
                                    <span />
                                </div>
                            </div>
                            <input type="hidden" name="_next" value="/" />
                            <button className={classes.Submit} type="submit">
                                Send
                            </button>
                        </form>
                    </div>

                    <div className={classes.Map}>
                        <div className={classes.Info}>
                            <p>Bui Le Vu Tam,</p>
                            <p>Vietnam,</p>
                            <p>223 Xuan Thuy St., Can Tho.</p>
                            <br />
                            <p>
                                <span>@</span>: itsmetambui@gmail.com
                            </p>
                        </div>
                        <MyGoogleMap />
                    </div>
                </div>
            </Wrapper>
        );
    }
}

export default Contact;
