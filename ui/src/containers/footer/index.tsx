import React from 'react';
import './style.scss';
import { GitSVG, InstSVG } from '../../tools/svg';

const instUrl = 'https://www.instagram.com/rewdatnew/';
const gitUrl = 'https://github.com/reew-vnv';

export const Footer = () => {
  const toInstHandle = () => {
    window.open(instUrl, '_blank');
  };
  const toGitHandle = () => {
    window.open(gitUrl, '_blank');
  };
  return (
    <div className="footer">
      <span className="footer-icon" onClick={toGitHandle}><GitSVG size="28px" /></span>
      <span className="footer-icon" onClick={toInstHandle}><InstSVG size="28px" /></span>
    </div>
  );
};
