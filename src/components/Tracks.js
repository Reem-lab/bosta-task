import React from 'react'
import track from '../images/track.gif';
const Tracks = () => {
  return (
    <>
    <div>
    <svg width="97" height="64" viewBox="0 0 97 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="slide-from-side" style={{"--from":"90%", "--to": "0", "--animationDelay":"2s"}}><path d="M0 40.96C0 53.6812 10.3984 64 23.2169 64H79.4576C89.1478 64 97 56.2019 97 46.5871C97 36.9822 89.1478 29.184 79.4576 29.184C78.7495 29.184 78.0608 29.2431 77.3769 29.3169C77.5603 28.085 77.6527 26.841 77.6534 25.5951C77.6534 11.4609 66.1055 0 51.8514 0C40.1774 0 30.3222 7.68985 27.1357 18.2498C25.8387 18.0338 24.5265 17.9251 23.2121 17.9249C10.3984 17.9249 0 28.2289 0 40.96Z" fill="white"></path></svg>
    <div className='track'>
      </div>
  <svg width="805" height="97" viewBox="0 0 805 97" fill="none" xmlns="http://www.w3.org/2000/svg" class="slide-from-side" style={{"--from":"70%", "--to":"0", "--animationDelay":"2s"}}><path d="M2 95L805 94.9999" stroke="#667085" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path d="M340.76 1.83984H161.436V74.4631H354.26V15.3398C354.26 7.88399 348.216 1.83984 340.76 1.83984Z" fill="white" stroke="#667085" stroke-width="3"></path><path d="M160.824 20.9453H140.222C132.946 20.9453 126.345 25.2103 123.356 31.8437L116.813 46.3613C116.318 47.4592 116.062 48.6497 116.062 49.8539V74.4637H160.824V20.9453Z" fill="white" stroke="#667085" stroke-width="3"></path><circle r="17.2068" transform="matrix(-1 0 0 1 149.985 76.3611)" fill="white" stroke="#667085" stroke-width="3"></circle><circle r="6.85836" transform="matrix(-1 0 0 1 149.985 76.3603)" fill="white" stroke="#667085" stroke-width="3"></circle><circle r="17.2068" transform="matrix(-1 0 0 1 251.877 76.3611)" fill="white" stroke="#667085" stroke-width="3"></circle><circle r="6.85836" transform="matrix(-1 0 0 1 251.877 76.3603)" fill="white" stroke="#667085" stroke-width="3"></circle><circle r="17.2068" transform="matrix(-1 0 0 1 294.863 76.3611)" fill="white" stroke="#667085" stroke-width="3"></circle><circle r="6.85836" transform="matrix(-1 0 0 1 294.863 76.3603)" fill="white" stroke="#667085" stroke-width="3"></circle><path d="M322.327 5.91211H342.188C346.606 5.91211 350.188 9.49383 350.188 13.9121V70.3909H322.327V5.91211Z" fill="#E4E7EC"></path></svg>
    </div>

<img src={track} alt="trackGif" className='track__gif' />

</>
  )
}

export default Tracks
