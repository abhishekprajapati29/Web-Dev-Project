import React, { Component } from "react";

import LeftModal from "../components/Modal/left_modal";
import Content from "../views/components/content";
import Sidebar from "./components/sidebar";
const axios = require("axios");


export default class Main extends Component {
    
  state = {
    listview: false,
    data: [],
    email: "",
    phone: "",
    country: "",
    first_name: "",
    last_name: "",
    address: "",
    country_list_show: true,
    country_list: [],
  };

  componentDidMount() {
    axios
      .get("https://api.first.org/data/v1/news")
      .then((res) => {
        // handle success
        this.setState({
          data: res.data.data,
        });
        console.log(res.data)
      })
      .catch((err) => {
        // handle error
        console.log(err);
      });
  }

  

  handleData = (data) => {
    this.setState({
      data: data,
    });
  };

  handletoggle = () => {
    this.setState({
      listview: !this.state.listview,
    });
  };

  handleRemove = (id) => {
    this.setState({
      data: this.state.data.filter((item) => item.id !== id),
    });
  };

  render() {
    return (
      <>
        <div className="container-fluid h-100">
          <div className="row h-100">
            <Sidebar
              listview={this.state.listview}
              handletoggle={this.handletoggle}
            />
            <Content
              data={this.state.data}
              handleRemove={this.handleRemove}
              listview={this.state.listview}
              handleData={this.handleData}
            />
          </div>
        </div>

        <LeftModal
          data={this.state}
          setListValue={this.setListValue}
          handleFormData={this.handleFormData}
          handleCountryData={this.handleCountryData}
        />
      </>
    );
  }
}
