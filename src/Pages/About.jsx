import React from 'react'
import Header from '../Layout/Header'
import about1 from '../Images/about1.webp'
import about2 from '../Images/about2.png'
import about3 from '../Images/about3.png'
import about4 from '../Images/about4.png'
import { Link } from 'react-router-dom'
export default function About() {
  return (
    <div>
      <Header></Header>
      <br /><br /><br />
      <section class="py-3 py-md-5">
        <div class="container overflow-hidden">
          <div class="row gy-5">
            <div class="col-12">
              <div class="row align-items-center gy-3 gy-md-0 gx-xl-5">
                <div class="col-xs-12 col-md-6">
                  <div class="img-wrapper position-relative bsb-hover-push">
                    <a href="#!">
                      <span class="badge rounded-pill text-bg-warning position-absolute top-0 start-0 m-3">Indian Food</span>
                      <img class="img-fluid rounded w-100 h-100 object-fit-cover" loading="lazy" src={about1} alt="Indian Food"></img>
                    </a>
                  </div>
                </div>
                <div class="col-xs-12 col-md-6">
                  <div>
                    <p class="text-secondary mb-1">Nov 11, 2024</p>
                    <h2 class="h1 mb-3">
                      <a class="link-dark text-decoration-none" href="#!">Authentic Indian Food Catering for Your Functions</a>
                    </h2>
                    <p class="mb-4">
                      Experience the rich flavors of India with our traditional dishes, expertly prepared and delivered fresh for weddings, corporate events, and celebrations. Explore our diverse Indian menu tailored for every occasion.
                    </p>

                    <Link  to='/menuitem' class="btn btn-primary">Read More</Link>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12">
              <div class="row align-items-center flex-row-reverse gy-3 gy-md-0 gx-xl-5">
                <div class="col-xs-12 col-md-6">
                  <div class="img-wrapper position-relative bsb-hover-push">
                    <a href="#!">
                      <span class="badge rounded-pill text-bg-warning position-absolute top-0 end-0 m-3">Magic of Home cooking</span>
                      <img class="img-fluid rounded w-100 h-100 object-fit-cover" loading="lazy" src={about2} alt="Travel"></img>
                    </a>
                  </div>
                </div>
                <div class="col-xs-12 col-md-6">
                  <div>
                    <p class="text-secondary mb-1">Oct 9, 2024</p>
                    <h2 class="h1 mb-3">
                      <a class="link-dark text-decoration-none" href="#!">Delicious Catering for Every Occasion</a>
                    </h2>
                    <p class="mb-4">
                      Enjoy a hassle-free dining experience with our expertly crafted dishes, delivered fresh for weddings, corporate events, and special celebrations. Explore our diverse menu tailored for every function.
                    </p>

                    <Link  to='/menuitem' class="btn btn-primary"  target="_self">Read More</Link>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12">
              <div class="row align-items-center gy-3 gy-md-0 gx-xl-5">
                <div class="col-xs-12 col-md-6">
                  <div class="img-wrapper position-relative bsb-hover-push">
                    <a href="#!">
                      <span class="badge rounded-pill text-bg-warning position-absolute top-0 start-0 m-3">Home maid food</span>
                      <img class="img-fluid rounded w-100 h-100 object-fit-cover" loading="lazy" src={about3} alt="Photography"></img>
                    </a>
                  </div>
                </div>
                <div class="col-xs-12 col-md-6">
                  <div>
                    <p class="text-secondary mb-1">Sep 17, 2024</p>
                    <h2 class="h1 mb-3">
                      <a class="link-dark text-decoration-none" href="#!">Useful Indian Cooking Tips for Beginners</a>
                    </h2>
                    <p class="mb-4">
                      Learning how to cook Indian food can be a simultaneously exciting and rewarding experience. Explore the 20 top tips for beginner cooks.
                    </p>

                    <Link  to='/menuitem' class="btn btn-primary" target="_self">Read More</Link>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12">
              <div class="row align-items-center flex-row-reverse gy-3 gy-md-0 gx-xl-5">
                <div class="col-xs-12 col-md-6">
                  <div class="img-wrapper position-relative bsb-hover-push">
                    <a href="#!">
                      <span class="badge rounded-pill text-bg-warning position-absolute top-0 end-0 m-3">pure veg restaurant</span>
                      <img class="img-fluid rounded w-100 h-100 object-fit-cover" loading="lazy" src={about4} alt="Food"></img>
                    </a>
                  </div>
                </div>
                <div class="col-xs-12 col-md-6">
                  <div>
                    <p class="text-secondary mb-1">Aug 23, 2024</p>
                    <h2 class="h1 mb-3">
                      <a class="link-dark text-decoration-none" href="#!">Delicious Dishes Crafted from Authentic Recipes</a>
                    </h2>
                    <p class="mb-4">
                      Explore a variety of mouth-watering dishes prepared with traditional and modern recipes. Indulge in flavors that bring every recipe to life.
                    </p>
                    <Link  to='/menuitem'class="btn btn-primary"  target="_self">Read More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
