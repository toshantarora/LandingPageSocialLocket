import React, { useState } from 'react';
import Logo from '../assets/images/logo.png';
import { useForm } from 'react-hook-form';
import Aboutus from '../assets/images/about-us.png';
import crypto from '../assets/images/crypto.png';
import Laptop from '../assets/images/laptop.png';
import pancakeswap from '../assets/images/uniswap.png';
import uniswap from '../assets/images/pancakeswap.png';
import Faq from '../assets/images/faq.png';
import team from '../assets/images/team.jpg';
import '../css/style.css';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { API } from '../services/ApiClient';
import Swal from 'sweetalert2';

const schema = yup.object({
  email: yup.string().email().required(),
  name: yup.string().required(),
  public_key: yup.string().required(),
  amount: yup.string().required(),
});
const Landing = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [success, setSuccess] = useState(false);

  const onSubmit = async (data, event) => {
    event.preventDefault();
    API.post('https://green.app.sociallocket.com/api/v1/contracts', data)
      .then((response) => {
        setSuccess(true);
        if (response) {
          Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Your form has been submitted.',
          });
        }
      })
      .catch((error) => {
        if (error && error.response)
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error?.response?.data?.message,
          });
      });
  };
  return (
    <>
      <header className="header">
        <div className="container">
          <nav className="navbar flex-nowrap navbar-expand-lg navbar-light justify-content-between">
            <a className="nav-logo" href="/">
              {' '}
              <img src={Logo} alt="Logo" />
            </a>
            <div className="nav-menu">
              <ul className="navbar-destop ms-auto mb-2 mb-lg-0">
                <li>
                  <a href="/countdown">Presale</a>
                </li>
                <li className="button-light">
                  <a className="" href="#">
                    Connect
                  </a>
                </li>
                <li className="button-dark">
                  <a className="" href="#">
                    Login Now
                  </a>
                </li>
              </ul>
              <ul className="navbar-mobile ms-auto mb-1 mb-lg-0">
                <li>
                  <a href="/countdown">Presale</a>
                </li>
                <li className="button-light">
                  <a className="" href="#">
                    <i className="fa fa-user-plus" />
                  </a>
                </li>
                <li className="button-dark">
                  <a className="" href="#">
                    <i className="fa fa-right-to-bracket" />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <section className="banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 banner-content">
              <h1 className="white mb-4">Welcome to Social Locket</h1>
              <h3 className="bg-blu mb-2">Go login ... Stay Connected</h3>
              <p className="white mb-4">
                Social locket provides the best way to create what's your
                creative mind, share your thoughts, and write something and your
                family and friends and the whole world.
              </p>
              <div className="mt-lg-5">
                <div className="theme-button">
                  <a href="#">Login</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-us">
        <div className="container">
          <div className="row flex-row-reverse">
            <div className="col-lg-6">
              <div className="about-us-content mb-5">
                <div className="line-tag">
                  <h5 className="bg-blu mb-3">About Social Locket</h5>
                  <span>&nbsp;</span>
                </div>
                <h2>Provide Awesome Service With Our Social Locket.</h2>
                <div className="writer-reader">
                  <ul
                    className="nav nav-pills mb-3"
                    id="pills-tab"
                    role="tablist">
                    <li className="nav-item writer" role="presentation">
                      <button
                        className="nav-link active"
                        id="pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-home"
                        type="button"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true">
                        Content Writer
                      </button>
                    </li>
                    <li className="nav-item reader" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false">
                        Content Reader
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="pills-home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab">
                      <div className="about-txt">
                        <p className="mb-2">
                          We combine strategy with marketing, design &amp;
                          technology to ensure customer prefer you.
                        </p>
                        <hr />
                        <span className="">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Quis ipsum suspendisse ultrices
                          gravida. Risus commodo.
                        </span>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-profile"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab">
                      <div className="about-txt">
                        <p className="mb-2">
                          How Can Start Social Locket Create Post We combine
                          strategy with marketing, design &amp; technology to
                          ensure customer prefer you.
                        </p>
                        <hr />
                        <span className="">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua consectetur adipiscing elit, sed
                          do eiusmod tempor incididunt ut labore et dolore magna
                          aliqua.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-center mb-4">
                <img src={Aboutus} className="img-fluid" alt="About-us" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="Connect-with">
        <div className="container">
          <div className="row align-items-center flex-row-reverse">
            <div className="col-lg-6 col-md-6">
              <div className="connect-content mb-5">
                <h2 className="white mb-4">Connect with Social Locket</h2>
                <p className="white mb-4">
                  Social Locket Free Registration is our Website. We made it
                  easy to sign up in our Website.
                </p>
                <div className="mt-5">
                  <div className="theme-button">
                    <a href="#">Login</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="text-center">
                <img src={Laptop} className="img-fluid" alt="laptop" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="faq">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="faq-content mb-5">
                <div className="line-tag">
                  <h5 className="bg-blu mb-3">Frequently asked questions</h5>
                  <span>&nbsp;</span>
                </div>
                <h2>You Are Confused! Question &amp; Answers.</h2>
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button  justify-content-end flex-row-reverse"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne">
                        How Can Start Social Locket Create Post
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                        Risus commodo.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed justify-content-end flex-row-reverse"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo">
                        How Can Start Social Locket Create Post
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                        Risus commodo.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed justify-content-end flex-row-reverse"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree">
                        How Can Start Social Locket Create Post
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                        Risus commodo.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button
                        className="accordion-button collapsed justify-content-end flex-row-reverse"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour">
                        How Can Start Social Locket Create Post
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                        Risus commodo.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-center mt-3">
                <img src={Faq} className="img-fluid" alt="faq" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-us bg-blue">
        <div className="container">
          <div className="row flex-row-reverse">
            <div className="col-lg-6">
              <div className="about-us-content mb-5">
                <div className="line-tag">
                  <h5 className="bg-blu mb-3">About Social Locket</h5>
                  <span>&nbsp;</span>
                </div>
                <h2>Provide Awesome Service With Our Social Locket.</h2>
                <div className="writer-reader">
                  <ul
                    className="nav nav-pills mb-3"
                    id="pills-tab"
                    role="tablist">
                    <li className="nav-item writer" role="presentation">
                      <button
                        className="nav-link active"
                        id="pills-pancakeswap-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-pancakeswap"
                        type="button"
                        role="tab"
                        aria-controls="pills-pancakeswap"
                        aria-selected="true">
                        <img
                          src={pancakeswap}
                          className="img-fluid"
                          alt="pancakeswap"
                        />
                      </button>
                    </li>
                    <li className="nav-item reader" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-uniswap-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-uniswap"
                        type="button"
                        role="tab"
                        aria-controls="pills-uniswap"
                        aria-selected="false">
                        <img
                          src={uniswap}
                          className="img-fluid"
                          alt="uniswap"
                        />
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="pills-pancakeswap"
                      role="tabpanel"
                      aria-labelledby="pills-pancakeswap-tab">
                      <div className="about-txt">
                        <p className="mb-2">
                          We combine strategy with marketing, design &amp;
                          technology to ensure customer prefer you.
                        </p>
                        <hr />
                        <span className="">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Quis ipsum suspendisse ultrices
                          gravida. Risus commodo.
                        </span>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-uniswap"
                      role="tabpanel"
                      aria-labelledby="pills-uniswap-tab">
                      <div className="about-txt">
                        <p className="mb-2">
                          We combine strategy with marketing, design &amp;
                          technology to ensure customer prefer you.
                        </p>
                        <hr />
                        <span className="">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Quis ipsum suspendisse ultrices
                          gravida. Risus commodo.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 m-auto">
              <div className="text-center">
                <img
                  src={crypto}
                  className="img-fluid"
                  alt="crypto"
                  width="600"
                  height="600"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="our-team">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="team-head text-center">
                <h5>OUR TEAM</h5>
                <h2>Get to Know as Closer</h2>
                <p className=" m-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="member">
                <div className="">
                  <img
                    src={team}
                    className="img-fluid rounded"
                    alt="team"
                    width="400px"
                    height="400"
                  />
                </div>
                <h4 className="mt-3">Rishabh Rawat</h4>
                <p>Lech Lead</p>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="member">
                <div className="">
                  <img
                    src={team}
                    className="img-fluid rounded"
                    alt="team"
                    width="400px"
                    height="400"
                  />
                </div>
                <h4 className="mt-3">Anil Kumar</h4>
                <p>UI/UX Designer</p>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="member">
                <div className="">
                  <img
                    src={team}
                    className="img-fluid rounded"
                    alt="team"
                    width="400px"
                    height="400"
                  />
                </div>
                <h4 className="mt-3">Saryu Sirohi</h4>
                <p>UI Developer</p>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="map-form">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="login-box">
                <div className="text-center">
                  <h2>Now It's The Time To Something New Together</h2>
                  <p className="mb-3 m-auto">
                    So let us get in touch and turn your what's your creative
                    thoughts and write something and Share hole world. &amp;
                    fill the form below
                  </p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="user-box">
                    <div class="position-relative">
                      <input
                        type="text"
                        name="name"
                        {...register('name')}
                        required=""
                      />
                      <label>Full Name*</label>
                    </div>
                    {errors.name?.message ? (
                      <div className="alert alert-danger" role="alert">
                        {errors?.name?.message}
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                  <div className="user-box">
                    <div class="position-relative">
                      <input
                        type="email"
                        name="email"
                        {...register('email')}
                        required=""
                      />
                      <label>Email Id*</label>
                    </div>
                    {errors.email?.message ? (
                      <div className="alert alert-danger" role="alert">
                        {errors?.email?.message}
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                  <div className="user-box">
                    <div class="position-relative">
                      <input
                        type="text"
                        name="public_key"
                        {...register('public_key')}
                        required=""
                      />
                      <label>Public key*</label>
                    </div>
                    {errors.public_key?.message ? (
                      <div className="alert alert-danger" role="alert">
                        {errors?.public_key?.message}
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                  <div className="user-box">
                    <div class="position-relative">
                      <input
                        type="number"
                        name="amount"
                        {...register('amount')}
                        required=""
                      />
                      <label>Amount</label>
                    </div>
                    {errors.amount?.message ? (
                      <div className="alert alert-danger" role="alert">
                        {errors?.amount?.message}
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                  <div className="text-center">
                    <button type="submit">
                      <span />
                      <span />
                      <span />
                      <span />
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="footer-logo">
                <img src={Logo} />
                <h2 className="mt-4 white m-auto">
                  Connect With Social Locket and Share Your Thoughts Whole World
                </h2>
              </div>
              <div className="social-media col-lg-12">
                <ul className="justify-content-center">
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-facebook-f" />
                      <span>Facebook</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-twitter" />
                      <span>Twitter</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-instagram" />
                      <span>Instagram</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-snapchat" />
                      <span>Snapchat</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <hr style={{ color: '#ccc' }} />
        </div>
        <div className="container policy-copyright">
          <div className="row">
            <div className="col-lg-4 col-lg-4 col-sm-12">
              <div className="policy">
                <ul>
                  <li>
                    <a href="#">Terms &amp; Conditions of Services </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-8 col-lg-8 col-sm-12">
              <div className="copyright">
                <p>Copyright © Social Locket.All Right Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* bootstrap jquery */}
      {/* bootstrap js */}
      {/* owl js */}
      {/* custom js */}
    </>
  );
};

export default Landing;
