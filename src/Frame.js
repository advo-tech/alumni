import React from 'react';
import './Frame.css';

function Frame({ text, illustration, illustrationCaption, button, buttonLink }) {
  return (
    <div className="mainGrid">
      <div className="mainContent">
        <div className="text">
          {text}
        </div>
        { button && buttonLink ?
            <div align="center">
              <a
                className="buttonLink"
                href={buttonLink}
                target="_blank"
                rel="noreferrer"
              >
                {button}
              </a>
            </div>
          : ""}
      </div>
      <div className="illustration">
        <img src={illustration} className="drawing" />
        <figcaption>{illustrationCaption}</figcaption>
      </div>
    </div>
  );
}

export default Frame;
