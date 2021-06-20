import React, { Component } from "react";
import HorizontalCard from "../../components/Cards/horizontal_card_layout";
import VerticalCard from "../../components/Cards/vertical_card_layout";

export default class Content extends Component {
  state = {};

  render() {
    return (
      <div className="col-9 background d-flex">
        <div className="container-fluid h-100">
          <div className="row h-100">
            <div className="col-3 background h-100 w-100 d-flex no_padding">
              <div className="h-100 content_layout ">
                {!this.props.listview ? (
                  <VerticalCard
                    data={this.props.data}
                    handleRemove={this.props.handleRemove}
                    handleData={this.props.handleData}
                  />
                ) : (
                  <HorizontalCard
                    data={this.props.data}
                    handleRemove={this.props.handleRemove}
                    handleData={this.props.handleData}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
