import React from 'react';
// import Tracks from './Tracks';
import track from '../images/track.gif';
import '../styles/Paylogn.css';
// import track from '../images/track.gif';

const Paylogn = () => (
  <div className="track__form">
    <svg
      className="paylogn-blue"
      width="282"
      height="281"
      viewBox="0 0 282 281"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        '--from': '25%', '--to': '0', '--animationDelay': '2s', '--opacityFrom': 1,
      }}
    >
      <path d="M8.60556 73.8171L133.056 2.22689C138.021 -0.742295 144.31 -0.742295 149.275 2.22689L273.725 73.8171C278.69 76.7863 282 82.0648 282 88.0032V192.914C282 198.853 279.021 204.131 273.725 207.1L149.275 278.691C146.627 280.01 143.979 281 141 281C138.021 281 135.373 280.34 132.725 278.691L8.27463 207.1C3.30984 204.131 0 198.853 0 192.914V88.0032C0.330994 82.0648 3.64078 76.7863 8.60556 73.8171Z" fill="#BBEBF0" />
    </svg>

    <svg viewBox="0 0 77 51" width="77" height="51" fill="none" xmlns="http://www.w3.org/2000/svg" className="blue__cloud" style={{ '--from': '-50%', '--to': '0', '--animationDelay': '2s' }}><path d="M77 32.64C77 42.7772 68.7456 51 58.57 51H13.9255C6.23315 51 0 44.7858 0 37.1241C0 29.4702 6.23315 23.256 13.9255 23.256C14.4875 23.256 15.0342 23.3031 15.5771 23.3619C15.4315 22.3803 15.3581 21.3889 15.3576 20.3961C15.3576 9.13292 24.5245 0 35.8396 0C45.1066 0 52.9298 6.12785 55.4592 14.5428C56.4889 14.3707 57.5305 14.2841 58.5739 14.2839C68.7456 14.2839 77 22.4949 77 32.64Z" fill="#BBEBF0" /></svg>

    <svg width="97" height="64" viewBox="0 0 97 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="white__cloud" style={{ '--from': '90%', '--to': '0', '--animationDelay': '2s' }}><path d="M0 40.96C0 53.6812 10.3984 64 23.2169 64H79.4576C89.1478 64 97 56.2019 97 46.5871C97 36.9822 89.1478 29.184 79.4576 29.184C78.7495 29.184 78.0608 29.2431 77.3769 29.3169C77.5603 28.085 77.6527 26.841 77.6534 25.5951C77.6534 11.4609 66.1055 0 51.8514 0C40.1774 0 30.3222 7.68985 27.1357 18.2498C25.8387 18.0338 24.5265 17.9251 23.2121 17.9249C10.3984 17.9249 0 28.2289 0 40.96Z" fill="white" /></svg>

    <svg className="track1 track--with-line" width="805" height="97" viewBox="0 0 805 97" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ '--from': '70%', '--to': '0', '--animationDelay': '2s' }}>
      <path d="M2 95L805 94.9999" stroke="#667085" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M340.76 1.83984H161.436V74.4631H354.26V15.3398C354.26 7.88399 348.216 1.83984 340.76 1.83984Z" fill="white" stroke="#667085" strokeWidth="3" />
      <path d="M160.824 20.9453H140.222C132.946 20.9453 126.345 25.2103 123.356 31.8437L116.813 46.3613C116.318 47.4592 116.062 48.6497 116.062 49.8539V74.4637H160.824V20.9453Z" fill="white" stroke="#667085" strokeWidth="3" />
      <circle r="17.2068" transform="matrix(-1 0 0 1 149.985 76.3611)" fill="white" stroke="#667085" strokeWidth="3" />
      <circle r="6.85836" transform="matrix(-1 0 0 1 149.985 76.3603)" fill="white" stroke="#667085" strokeWidth="3" />
      <circle r="17.2068" transform="matrix(-1 0 0 1 251.877 76.3611)" fill="white" stroke="#667085" strokeWidth="3" />
      <circle r="6.85836" transform="matrix(-1 0 0 1 251.877 76.3603)" fill="white" stroke="#667085" strokeWidth="3" />
      <circle r="17.2068" transform="matrix(-1 0 0 1 294.863 76.3611)" fill="white" stroke="#667085" strokeWidth="3" />
      <circle r="6.85836" transform="matrix(-1 0 0 1 294.863 76.3603)" fill="white" stroke="#667085" strokeWidth="3" />
      <path d="M322.327 5.91211H342.188C346.606 5.91211 350.188 9.49383 350.188 13.9121V70.3909H322.327V5.91211Z" fill="#E4E7EC" />
    </svg>

    <img src={track} alt="trackGif" className="track__gif" />

  </div>
);

export default Paylogn;
