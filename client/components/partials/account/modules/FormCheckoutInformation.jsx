import React, { useContext } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { Form, Input } from 'antd';
import { StateContext } from "~/components/context/StateProvider";

function FormCheckoutInformation() {
    const {
        emailPhone,
        setEmailPhone,
        firstName,
        setFirstName,
        lastName,
        setLastName,
        address,
        setAddress,
        apartment,
        setApartment,
        city,
        setCity,
        postalCode,
        setPostalCode

    } = useContext(StateContext);

    console.log(emailPhone);

    const handleLoginSubmit = () => {
        Router.push('/account/shipping');
    };

    return (
        <Form
            className="ps-form__billing-info"
            onFinish={handleLoginSubmit}>
            <h3 className="ps-form__heading">Contact information</h3>
            <div className="form-group">
                <Form.Item
                    name="name"
                    rules={[
                        {
                            required: false,
                            message:
                                'Enter an email or mobile phone number!',
                        },
                    ]}>
                    <Input
                        className="form-control"
                        type="text"
                        placeholder="Email or phone number"
                        value={emailPhone}
                        onChange={event => setEmailPhone(event.target.value)}
                    />
                </Form.Item>
            </div>
            <div className="form-group">
                <div className="ps-checkbox">
                    <input
                        className="form-control"
                        type="checkbox"
                        id="keep-update"
                    />
                    <label htmlFor="keep-update">
                        Keep me up to date on news and exclusive offers?
                    </label>
                </div>
            </div>
            <h3 className="ps-form__heading">Shipping address</h3>
            <div className="row">
                <div className="col-sm-6">
                    <div className="form-group">
                        <Form.Item
                            name="firstName"
                            rules={[
                                {
                                    required: false,
                                    message: 'Enter your first name!',
                                },
                            ]}>
                            <Input
                                className="form-control"
                                type="text"
                                placeholder="First Name"
                                value={firstName}
                                onChange={event => setFirstName(event.target.value)}
                            />
                        </Form.Item>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="form-group">
                        <Form.Item
                            name="lastName"
                            rules={[
                                {
                                    required: false,
                                    message: 'Enter your last name!',
                                },
                            ]}>
                            <Input
                                className="form-control"
                                type="text"
                                placeholder="Last Name"
                                value={lastName}
                                onChange={event => setLastName(event.target.value)}
                            />
                        </Form.Item>
                    </div>
                </div>
            </div>
            <div className="form-group">
                <Form.Item
                    name="address"
                    rules={[
                        {
                            required: false,
                            message: 'Enter an address!',
                        },
                    ]}>
                    <Input
                        className="form-control"
                        type="text"
                        placeholder="Address"
                        value={address}
                        onChange={event => setAddress(event.target.value)}
                    />
                </Form.Item>
            </div>
            <div className="form-group">
                <Form.Item
                    name="apartment"
                    rules={[
                        {
                            required: false,
                            message: 'Enter an Apartment!',
                        },
                    ]}>
                    <Input
                        className="form-control"
                        type="text"
                        placeholder="Apartment, suite, etc. (optional)"
                        value={apartment}
                        onChange={event => setApartment(event.target.value)}
                    />
                </Form.Item>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <div className="form-group">
                        <Form.Item
                            name="city"
                            rules={[
                                {
                                    required: false,
                                    message: 'Enter a city!',
                                },
                            ]}>
                            <Input
                                className="form-control"
                                type="city"
                                placeholder="City"
                                value={city}
                                onChange={event => setCity(event.target.value)}
                            />
                        </Form.Item>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="form-group">
                        <Form.Item
                            name="postalCode"
                            rules={[
                                {
                                    required: false,
                                    message: 'Enter a postal oce!',
                                },
                            ]}>
                            <Input
                                className="form-control"
                                type="postalCode"
                                placeholder="Postal Code"
                                value={postalCode}
                                onChange={event => setPostalCode(event.target.value)}
                            />
                        </Form.Item>
                    </div>
                </div>
            </div>
            <div className="form-group">
                <div className="ps-checkbox">
                    <input
                        className="form-control"
                        type="checkbox"
                        id="save-information"
                    />
                    <label htmlFor="save-information">
                        Save this information for next time
                    </label>
                </div>
            </div>
            <div className="ps-form__submit">
                <Link href="/account/cart">
                    <a>
                        <i className="icon-arrow-left mr-2"></i>
                        Return to shopping cart
                    </a>
                </Link>
                <div className="ps-block__footer">
                    <button className="ps-btn">Continue to shipping</button>
                </div>
            </div>
        </Form>
    );
}


export default FormCheckoutInformation;
