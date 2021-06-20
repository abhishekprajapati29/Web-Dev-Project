import React, { Component } from "react";
import { country } from "../../assets/js/country_data";
import Photo from "../../assets/icons/photo.jpg";
var validator = require("validator");

export default class LeftModal extends Component {
  state = {
    email: "",
    phone: "",
    country: "",
    first_name: "",
    last_name: "",
    address: "",
    country_list_show: true,
    country_list: [],
  };

  setListValue = (data) => {
    this.setState({
      country: data,
      country_list_show: false,
    });
  };

  handleCountryData = (event) => {
    let filterData = country.filter((fil) => {
      return (
        fil.name.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
      );
    });
    this.setState({
      country_list_show: true,
      [event.target.name]: event.target.value,
      country_list: filterData,
    });
  };

  handleFormData = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div className="container">
        <div
          className="modal left fade"
          id="exampleModal1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-fullscreen border_radius"
            role="document"
          >
            <div
              className="modal-content background"
              style={{ borderRadius: "0 2rem 2rem 0" }}
            >
              <div className="modal-body no_padding d-flex">
                <div className="h-100 sidebar_layout background">
                  <div
                    className="card mb-4 zoom card_background border_radius "
                    style={{ width: "18pc" }}
                  >
                    <div className="row g-0">
                      <div className="col-md-4 overflow_hidden align_center">
                        <img
                          src={Photo}
                          alt="..."
                          style={{
                            width: "4rem",
                            height: "4rem",
                            borderRadius: "50%",
                          }}
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body padding_v">
                          <h5 className="card-title fw-bold">Hi Reader,</h5>
                          <p className="card-text">Here's your News!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="card text-center zoom card_background border_radius"
                    style={{ width: "18pc" }}
                  >
                    <div className="card-body">
                      <h5 className="card-title fw-bolder fs-4 padding_b">
                        Have a Feedback?
                      </h5>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#exampleModal1"
                        className="btn btn-lg teal font_color fw-bold"
                        style={{
                          boxShadow: "none",
                          width: "95%",
                          border: "none",
                          background: "#e08981",
                        }}
                      >
                        We're Listening!
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-8 appear" style={{ padding: "4rem" }}>
                  <h5
                    className="card-title fw-bolder"
                    style={{ fontSize: "xx-large" }}
                  >
                    Thank you so much for taking the time!
                  </h5>
                  <p
                    className="card-text font_color fw-bold "
                    style={{ marginBottom: "3rem" }}
                  >
                    Please provide the below details!
                  </p>
                  <div className="mb-3">
                    <label htmlFor="exampleFormControlInput12" className="form-label">
                      First Name:
                    </label>
                    <input
                      type="text"
                      style={{ width: "25pc" }}
                      className="form-control form_input"
                      id="exampleFormControlInput12"
                      placeholder="John"
                      name="first_name"
                      onChange={(event) => this.handleFormData(event)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                      Last Name:
                    </label>
                    <input
                      type="text"
                      autoComplete='false'
                      style={{ width: "25pc" }}
                      className="form-control form_input"
                      id="exampleFormControlInput2"
                      name="last_name"
                      placeholder="Doe"
                      onChange={(event) => this.handleFormData(event)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                      Address:
                    </label>
                    <textarea
                      type="text"
                      rows="3"
                      className="form-control form_input"
                      id="exampleFormControlInput3"
                      placeholder="Enter Your Full Postal Address"
                      name="address"
                      onChange={(event) => this.handleFormData(event)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleFormControlInput4" className="form-label">
                      Country:
                    </label>
                    <div className="dropdown">
                      <div className="input-group mb-3" style={{ width: "30pc" }}>
                        <input
                          type="text"
                          value={this.state.country}
                          name="country"
                          className="form-control form_input"
                          placeholder="India"
                          aria-label="Country"
                          aria-describedby="basic-addon2"
                          onChange={(event) => this.handleCountryData(event)}
                        />
                        <span
                          className="input-group-text form_input"
                          id="basic-addon2"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-search"
                            viewBox="0 0 16 16"
                          >
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                          </svg>
                        </span>
                      </div>

                      <ul
                        style={{ marginTop: "-16px", width: "30pc" }}
                        className={
                          "dropdown-menu country_search " +
                          (this.state.country && this.state.country_list_show
                            ? "d-block"
                            : "d-none")
                        }
                        aria-labelledby="dropdownMenuButton1"
                      >
                        {this.state.country_list.map((data) => (
                          <li>
                            <button
                              className="dropdown-item"
                              onClick={() => this.setListValue(data.name)}
                            >
                              {data.name}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mb-6" style={{ marginBottom: "3rem" }}>
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                      Email ID:
                    </label>
                    <form className="row g-3 md-3">
                      <div className="col-auto d-flex ">
                        {validator.isEmail(this.state.email) !== true ? (
                          <>
                            <input
                              type="email"
                              name="email"
                              style={{ width: "25pc" }}
                              className="form-control form_input"
                              id="exampleFormControlInput1"
                              placeholder="example@sample.com"
                              onChange={(event) => this.handleFormData(event)}
                            />

                            <p
                              className="align_center h-100 ps-3"
                              style={{ color: "red" }}
                            >
                              Please enter a valid Email
                            </p>
                          </>
                        ) : (
                          <input
                            type="email"
                            name="email"
                            style={{ width: "25pc" }}
                            className="form-control form_input"
                            id="exampleFormControlInput1"
                            placeholder="example@sample.com"
                            onChange={(event) => this.handleFormData(event)}
                          />
                        )}
                      </div>
                    </form>
                  </div>
                  <div className="mb-6" style={{ marginBottom: "3rem" }}>
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                      Phone Number:
                    </label>
                    <form className="row g-3 md-3">
                      <div className="col-auto">
                        <input
                          type="text"
                          style={{ width: "5pc" }}
                          className="form-control form_input"
                          id="phone1"
                          placeholder="+91"
                        />
                      </div>
                      <div className="col-auto">
                        <input
                          type="text"
                          name="phone"
                          className="form-control form_input"
                          id="phone2"
                          placeholder="123456789"
                          onChange={(event) => this.handleFormData(event)}
                        />
                      </div>
                      <div className="col-auto">
                        {!validator.isMobilePhone(this.state.phone) ? (
                          <p
                            className="align_center h-100 ps-3"
                            style={{ color: "red" }}
                          >
                            Please enter a valid Number
                          </p>
                        ) : null}
                      </div>
                    </form>
                  </div>
                  <button
                    type="button"
                    data-toggle="modal"
                    data-target="#exampleModal1"
                    className="btn btn-lg teal font_color fw-bold"
                    style={{
                      boxShadow: "none",
                      width: "15pc",
                      border: "none",
                      color: "white",
                    }}
                  >
                    Submit Feedback
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
