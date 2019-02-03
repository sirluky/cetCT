import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
library.add(faArrowLeft);

export default class backbutton extends Component {
  render() {
    return (
      <div>
        <button>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      </div>
    );
  }
}
