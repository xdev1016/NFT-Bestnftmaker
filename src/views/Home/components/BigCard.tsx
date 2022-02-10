import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const BigCard: React.FC = () => {
    return (
        <OwlCarousel items = {2} className="owl-theme owl-carousel section__carousel section__carousel--big owl-loaded" loop margin={10} nav>
          <div className="card card--big">
            <a href="details.html" className="card__cover">
              <img src="img/cards/4.jpg" alt="" />
            </a>

            <div className="card__wrap">
              <div className="card__title">
                <h3><a href="details.html">X4: Foundations Collector&apos;s Edition</a></h3>
              </div>

              <ul className="card__list">
                <li><span>Category:</span></li>
                <li><span>Creator:</span></li>
              </ul>

              <div className="card__price">
                <span>Ξ .05</span>
              </div>

              <div className="card__actions">
                <button className="card__buy" type="button">Bid</button>

                <button className="card__favorite" type="button">
                  <svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'>
                    <path
                      d='M352.92,80C288,80,256,144,256,144s-32-64-96.92-64C106.32,80,64.54,124.14,64,176.81c-1.1,109.33,86.73,187.08,183,252.42a16,16,0,0,0,18,0c96.26-65.34,184.09-143.09,183-252.42C447.46,124.14,405.68,80,352.92,80Z'
                      style={{fill:'none', strokeLinecap:'round', strokeLinejoin:'round', strokeWidth:'32px'}} />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="card card--big">
            <a href="details.html" className="card__cover">
              <img src="img/cards/2.jpg" alt="" />
            </a>

            <div className="card__wrap">
              <div className="card__title">
                <h3><a href="details.html">The Witcher 3: Wild Hunt</a></h3>
              </div>

              <ul className="card__list">
                <li><span>Release date:</span> 24.03.2016</li>
                <li><span>Genres:</span> Action, Role Playing, Open World</li>
              </ul>

              <div className="card__price">
                <span>$15.36</span><s>$38.80</s><b>60% OFF</b>
              </div>

              <div className="card__actions">
                <button className="card__buy" type="button">Buy now</button>

                <button className="card__favorite" type="button">
                  <svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'>
                    <path
                      d='M352.92,80C288,80,256,144,256,144s-32-64-96.92-64C106.32,80,64.54,124.14,64,176.81c-1.1,109.33,86.73,187.08,183,252.42a16,16,0,0,0,18,0c96.26-65.34,184.09-143.09,183-252.42C447.46,124.14,405.68,80,352.92,80Z'
                      style={{fill:'none', strokeLinecap:'round', strokeLinejoin:'round', strokeWidth:'32px'}} />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="card card--big">
            <a href="details.html" className="card__cover">
              <img src="img/cards/9.jpg" alt="" />
            </a>

            <div className="card__wrap">
              <div className="card__title">
                <h3><a href="details.html">The Legend of Heroes: Trails in the Sky SC</a></h3>
              </div>

              <ul className="card__list">
                <li><span>Release date:</span> 07.12.2015</li>
                <li><span>Genres:</span> Role-playing, Turn-based, Fantasy</li>
              </ul>

              <ul className="card__platforms">
                <li className="ps"><svg xmlns='http://www.w3.org/2000/svg' width='512' height='512'
                    viewBox='0 0 512 512'>
                    <path
                      d='M399.77,203c-.8-17.1-3.3-34.5-10.8-50.1a82.45,82.45,0,0,0-16.5-23.2,105.59,105.59,0,0,0-21.3-16.3c-17.1-10.2-37.5-17-84.4-31S192,64,192,64V422.3l79.9,25.7s.1-198.8.1-299.5v-3.8c0-9.3,7.5-16.8,16.1-16.8h.5c8.5,0,15.5,7.5,15.5,16.8V278c11,5.3,29.2,9.3,41.8,9.1a47.79,47.79,0,0,0,24-5.7,49.11,49.11,0,0,0,18.4-17.8,78.64,78.64,0,0,0,9.9-27.3C400.07,225.5,400.17,214.2,399.77,203Z' />
                    <path
                      d='M86.67,357.8c27.4-9.8,89.3-29.5,89.3-29.5V281.1s-76.5,24.8-111.3,37.1c-8.6,3.1-17.3,5.9-25.7,9.5-9.8,4.1-19.4,8.7-28.1,14.8a26.29,26.29,0,0,0-9.2,10.1,17.36,17.36,0,0,0-.5,13.6c2,5.1,5.8,9.3,10.1,12.6,7.8,5.9,17.1,9.5,26.4,12.2a262.42,262.42,0,0,0,88.4,13.3c14.5-.2,36-1.9,50-4.4v-42s-11,2.5-41.3,12.5c-4.6,1.5-9.2,3.3-14,4.3a104.87,104.87,0,0,1-21.6,2.2c-6.5-.3-13.2-.7-19.3-3.1-2.2-1-4.6-2.2-5.5-4.6-.8-2,.3-4,1.7-5.4C78.87,360.9,82.87,359.3,86.67,357.8Z' />
                    <path
                      d='M512,345.9c-.1-6-3.7-11.2-7.9-15-7.1-6.3-15.9-10.3-24.7-13.5-5.5-1.9-9.3-3.3-14.7-5-25.2-8.2-51.9-11.2-78.3-11.3-8,.3-23.1.5-31,1.4-21.9,2.5-67.3,15.4-67.3,15.4v48.8s67.5-21.6,96.5-31.8a94.43,94.43,0,0,1,30.3-4.6c6.5.2,13.2.7,19.4,3.1,2.2.9,4.5,2.2,5.5,4.5.9,2.6-.9,5-2.9,6.5-4.7,3.8-10.7,5.3-16.2,7.4-41,14.5-132.7,44.7-132.7,44.7v47s117.2-39.6,170.8-58.8c8.9-3.3,17.9-6.1,26.4-10.4,7.9-4,15.8-8.6,21.8-15.3A19.74,19.74,0,0,0,512,345.9Z' />
                  </svg></li>
                <li className="xb"><svg xmlns='http://www.w3.org/2000/svg' width='512' height='512'
                    viewBox='0 0 512 512'>
                    <path
                      d='M126.8,248.3c39.7-58.6,77.9-92.8,77.9-92.8s-42.1-48.9-92.8-67.4l-3.3-.8A224.13,224.13,0,0,0,77.2,391C77.2,386.6,77.8,320.7,126.8,248.3Z' />
                    <path
                      d='M480,256A223.71,223.71,0,0,0,403.4,87.3l-3.2.9c-50.7,18.5-92.9,67.4-92.9,67.4s38.2,34.2,77.9,92.8c49,72.4,49.6,138.3,49.5,142.7A222.8,222.8,0,0,0,480,256Z' />
                    <path
                      d='M201.2,80.9c29.3,13.1,54.6,34.6,54.6,34.6s25.5-21.4,54.8-34.6c36.8-16.5,64.9-11.3,72.3-9.5a224.06,224.06,0,0,0-253.8,0C136.3,69.6,164.3,64.3,201.2,80.9Z' />
                    <path
                      d='M358.7,292.9C312.4,236,255.8,199,255.8,199s-56.3,37-102.7,93.9c-39.8,48.9-54.6,84.8-62.6,107.8l-1.3,4.8a224,224,0,0,0,333.6,0l-1.4-4.8C413.4,377.7,398.5,341.8,358.7,292.9Z' />
                  </svg></li>
                <li className="wn"><svg xmlns='http://www.w3.org/2000/svg' width='512' height='512'
                    viewBox='0 0 512 512'>
                    <path d='M480,265H232V444l248,36V265Z' />
                    <path d='M216,265H32V415l184,26.7V265Z' />
                    <path d='M480,32,232,67.4V249H480V32Z' />
                    <path d='M216,69.7,32,96V249H216V69.7Z' />
                  </svg></li>
              </ul>

              <div className="card__price">
                <span>$14.99</span><s>$29.99</s><b>50% OFF</b>
              </div>

              <div className="card__actions">
                <button className="card__buy" type="button">Buy now</button>

                <button className="card__favorite" type="button">
                  <svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'>
                    <path
                      d='M352.92,80C288,80,256,144,256,144s-32-64-96.92-64C106.32,80,64.54,124.14,64,176.81c-1.1,109.33,86.73,187.08,183,252.42a16,16,0,0,0,18,0c96.26-65.34,184.09-143.09,183-252.42C447.46,124.14,405.68,80,352.92,80Z'
                      style={{fill:'none', strokeLinecap:'round', strokeLinejoin:'round', strokeWidth:'32px'}} />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="card card--big">
            <a href="details.html" className="card__cover">
              <img src="img/cards/5.jpg" alt="" />
            </a>

            <div className="card__wrap">
              <div className="card__title">
                <h3><a href="details.html">Pillars of Eternity: Hero Edition</a></h3>
              </div>

              <ul className="card__list">
                <li><span>Release date:</span> 18.09.2019</li>
                <li><span>Genres:</span> Role-playing, Adventure, Fantasy</li>
              </ul>

              <ul className="card__platforms">
                <li className="wn"><svg xmlns='http://www.w3.org/2000/svg' width='512' height='512'
                    viewBox='0 0 512 512'>
                    <path d='M480,265H232V444l248,36V265Z' />
                    <path d='M216,265H32V415l184,26.7V265Z' />
                    <path d='M480,32,232,67.4V249H480V32Z' />
                    <path d='M216,69.7,32,96V249H216V69.7Z' />
                  </svg></li>
                <li className="ap"><svg xmlns='http://www.w3.org/2000/svg' width='512' height='512'
                    viewBox='0 0 512 512'>
                    <path
                      d='M349.13,136.86c-40.32,0-57.36,19.24-85.44,19.24C234.9,156.1,212.94,137,178,137c-34.2,0-70.67,20.88-93.83,56.45-32.52,50.16-27,144.63,25.67,225.11,18.84,28.81,44,61.12,77,61.47h.6c28.68,0,37.2-18.78,76.67-19h.6c38.88,0,46.68,18.89,75.24,18.89h.6c33-.35,59.51-36.15,78.35-64.85,13.56-20.64,18.6-31,29-54.35-76.19-28.92-88.43-136.93-13.08-178.34-23-28.8-55.32-45.48-85.79-45.48Z' />
                    <path
                      d='M340.25,32c-24,1.63-52,16.91-68.4,36.86-14.88,18.08-27.12,44.9-22.32,70.91h1.92c25.56,0,51.72-15.39,67-35.11C333.17,85.89,344.33,59.29,340.25,32Z' />
                  </svg></li>
              </ul>

              <div className="card__price">
                <span>$17.99</span><s>$29.99</s><b>40% OFF</b>
              </div>

              <div className="card__actions">
                <button className="card__buy" type="button">Buy now</button>

                <button className="card__favorite" type="button">
                  <svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'>
                    <path
                      d='M352.92,80C288,80,256,144,256,144s-32-64-96.92-64C106.32,80,64.54,124.14,64,176.81c-1.1,109.33,86.73,187.08,183,252.42a16,16,0,0,0,18,0c96.26-65.34,184.09-143.09,183-252.42C447.46,124.14,405.68,80,352.92,80Z'
                      style={{fill:'none', strokeLinecap:'round', strokeLinejoin:'round', strokeWidth:'32px'}} />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </OwlCarousel>
    )
  }

  export default BigCard