import React from 'react'

export const Footer = () => {
  return (
    <div className="app-footer">
      <h1>Seow Vocab</h1>
      <div className="about">
        <h2>About</h2>
        <p>
          C.L. Seow's "A Grammar For Biblical Hebrew" is familiar to many Christian seminarians and scholars. This searchable lexicon contains the entirety of the vocabulary within Seow's textbook, and was developed by Michael Cuppett while enrolled in introductory Hebrew.
        </p>
        <p>
          Michael is a seminarian at <a href="https://ptsem.edu" rel="noopener noreferrer" target="_blank">Princeton Theological Seminary</a> and a <a href="https://pcusa.org" rel="noopener noreferrer" target="_blank">Presbyterian Church (U.S.A.)</a> candidate for ordination as a Minister of Word and Sacrament. He is the designer and web administrator for Evolving Faith, a progressive Christian organization with an annual conference boasting several thousand regular attendees.
        </p>
      </div>
      <div className="more">
        <h2>More</h2>
        <div className="social-link">
          <a href="https://instagram.com/michaelcuppett" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i>
          <p>Michael Cuppett on Instagram</p></a>
        </div>
        <div className="social-link">
          <a href="https://soundcloud.com/michael-cuppett" target="_blank" rel="noopener noreferrer"><i className="fab fa-soundcloud"></i>
          <p>Michael Cuppett on Soundcloud</p></a>
        </div>
        <div className="social-link">
          <a href="https://evolvingfaith.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i>
          <p>Evolving Faith</p></a>
        </div>
        <div className="social-link">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i>
          <p>Get the site code on Github</p></a>
        </div>
      </div>
    </div>
  )
}
