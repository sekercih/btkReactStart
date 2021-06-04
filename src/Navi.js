
import React, { Component } from 'react'
import "./index.css";

export default class Navi extends Component {
 render() {
  return (
    <div>
      <h2 className="Nav">Mavi Teknoloji Butik</h2>
      <div className="Nav1">
        <ul>
          <li>
            <a href="#home">Hakkında</a>
          </li>

          <li>
            <a href="#contact">iletişim</a>
          </li>
          <li>
            <a href="#about">Anasayfa</a>
          </li>
        </ul>
      </div>
    </div>
  );
 }
};



