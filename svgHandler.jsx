import React from 'react';
import { ReactComponent as Github } from './assets/github.svg';
//remember to delete width, height, and fill from svg

export default function Header() {
  return (
    <div className="header">
      <Github className="twitter-icon" />
    </div>
  );
}
// css:
//
// .twitter-icon{
//   height: 60%;
//   fill: #FD971F;
// }