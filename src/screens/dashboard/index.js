import React from "react";
import "./index.scss";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import sliderImg from '../../assets/images/1.png';
import FontAwesome from 'react-fontawesome'
const Dashboard = () => {
  return (
    <div className="container">
      <div className="progrss-course">
        <div className="inner-heading">
          <h3>Progress Courses</h3>
          <a href="#">View All</a>
        </div>
        <OwlCarousel className="owl-theme" loop margin={30} nav dots={false} items={5}>
          <div class="item">
            <div className="inner-items">
              <figure>
                <img src={sliderImg} alt="" />
              </figure>
              <div className="course-cont">
                <h5>Learn The Complete Ruby on Rails Developer</h5>
                <h6>3/20</h6>
                <div class="course-progressbar">
                  <div class="course-progressbar-filler" style={{ width: "40%" }}></div>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div className="inner-items">
              <figure>
                <img src={sliderImg} alt="" />
              </figure>
              <div className="course-cont">
                <h5>Learn The Complete Ruby on Rails Developer</h5>
                <h6>3/20</h6>
                <div class="course-progressbar">
                  <div class="course-progressbar-filler" style={{ width: "40%" }}></div>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div className="inner-items">
              <figure>
                <img src={sliderImg} alt="" />
              </figure>
              <div className="course-cont">
                <h5>Learn The Complete Ruby on Rails Developer</h5>
                <h6>3/20</h6>
                <div class="course-progressbar">
                  <div class="course-progressbar-filler" style={{ width: "40%" }}></div>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div className="inner-items">
              <figure>
                <img src={sliderImg} alt="" />
              </figure>
              <div className="course-cont">
                <h5>Learn The Complete Ruby on Rails Developer</h5>
                <h6>3/20</h6>
                <div class="course-progressbar">
                  <div class="course-progressbar-filler" style={{ width: "40%" }}></div>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div className="inner-items">
              <figure>
                <img src={sliderImg} alt="" />
              </figure>
              <div className="course-cont">
                <h5>Learn The Complete Ruby on Rails Developer</h5>
                <h6>3/20</h6>
                <div class="course-progressbar">
                  <div class="course-progressbar-filler" style={{ width: "40%" }}></div>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div className="inner-items">
              <figure>
                <img src={sliderImg} alt="" />
              </figure>
              <div className="course-cont">
                <h5>Learn The Complete Ruby on Rails Developer</h5>
                <h6>3/20</h6>
                <div class="course-progressbar">
                  <div class="course-progressbar-filler" style={{ width: "40%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>


      <div className="progrss-course">
        <div className="inner-heading">
          <h3>Browse Web Development <span className="makeColor">Episodes</span></h3>
          <a href="#">View All</a>
        </div>
        <OwlCarousel className="owl-theme" loop margin={30} nav dots={false} items={4}>
          <div class="item">
            <div className="inner-items">
              <figure>
                <img src={sliderImg} alt="" />
              </figure>
              <div className="course-cont">
                <h5>Learn The Complete Ruby on Rails Developer</h5>
                <h6>3/20</h6>
                <div class="course-progressbar">
                  <div class="course-progressbar-filler" style={{ width: "40%" }}></div>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div className="inner-items">
              <figure>
                <img src={sliderImg} alt="" />
              </figure>
              <div className="course-cont">
                <h5>Learn The Complete Ruby on Rails Developer</h5>
                <h6>3/20</h6>
                <div class="course-progressbar">
                  <div class="course-progressbar-filler" style={{ width: "40%" }}></div>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div className="inner-items">
              <figure>
                <img src={sliderImg} alt="" />
              </figure>
              <div className="course-cont">
                <h5>Learn The Complete Ruby on Rails Developer</h5>
                <h6>3/20</h6>
                <div class="course-progressbar">
                  <div class="course-progressbar-filler" style={{ width: "40%" }}></div>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div className="inner-items">
              <figure>
                <img src={sliderImg} alt="" />
              </figure>
              <div className="course-cont">
                <h5>Learn The Complete Ruby on Rails Developer</h5>
                <h6>3/20</h6>
                <div class="course-progressbar">
                  <div class="course-progressbar-filler" style={{ width: "40%" }}></div>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div className="inner-items">
              <figure>
                <img src={sliderImg} alt="" />
              </figure>
              <div className="course-cont">
                <h5>Learn The Complete Ruby on Rails Developer</h5>
                <h6>3/20</h6>
                <div class="course-progressbar">
                  <div class="course-progressbar-filler" style={{ width: "40%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>


      <div className="progrss-course">
        <div className="inner-heading">
          <h3>Browse Web Development <span className="makeColor">Courses</span></h3>
          <a href="#">View All</a>
        </div>
        <OwlCarousel className="owl-theme" loop margin={30} nav dots={false} items={4}>

          <div class="item">
            <div className="inner-items">
              <figure>
                <img src={sliderImg} alt="" />
              </figure>
              <div className="course-cont">
                <h5>Learn The Complete Ruby on Rails Developer</h5>
                <h6>3/20</h6>
                <div class="course-progressbar">
                  <div class="course-progressbar-filler" style={{ width: "40%" }}></div>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div className="inner-items">
              <figure>
                <img src={sliderImg} alt="" />
              </figure>
              <div className="course-cont">
                <h5>Learn The Complete Ruby on Rails Developer</h5>
                <h6>3/20</h6>
                <div class="course-progressbar">
                  <div class="course-progressbar-filler" style={{ width: "40%" }}></div>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div className="inner-items">
              <figure>
                <img src={sliderImg} alt="" />
              </figure>
              <div className="course-cont">
                <h5>Learn The Complete Ruby on Rails Developer</h5>
                <h6>3/20</h6>
                <div class="course-progressbar">
                  <div class="course-progressbar-filler" style={{ width: "40%" }}></div>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div className="inner-items">
              <figure>
                <img src={sliderImg} alt="" />
              </figure>
              <div className="course-cont">
                <h5>Learn The Complete Ruby on Rails Developer</h5>
                <h6>3/20</h6>
                <div class="course-progressbar">
                  <div class="course-progressbar-filler" style={{ width: "40%" }}></div>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div className="inner-items">
              <figure>
                <img src={sliderImg} alt="" />
              </figure>
              <div className="course-cont">
                <h5>Learn The Complete Ruby on Rails Developer</h5>
                <h6>3/20</h6>
                <div class="course-progressbar">
                  <div class="course-progressbar-filler" style={{ width: "40%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>

      
    </div>
  );
};

export default Dashboard;