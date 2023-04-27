import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Logo from '../assets/images/logo.png';
import '../css/style.css';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { API } from '../services/ApiClient';
import { useForm } from 'react-hook-form';
import CountdownTimer from '../components/CountdownTimer';
import Swal from 'sweetalert2';

const schema = yup.object({
  email: yup.string().email().required(),
  name: yup.string().required(),
  public_key: yup.string().required(),
  amount: yup.string().required(),
});

const CountdownPage = () => {
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
              console.log('response: ', response);
              Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Your form has been submitted.',
              });
            })
            .catch((error) => {
              console.error('error----', error);
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
                <li><a href="/countdown">Presale</a></li>
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
                <li><a href="/countdown">Presale</a></li>
                  <li className="button-light">
                    <a className="" href="#">
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                  </li>
                  <li className="button-dark">
                    <a className="" href="#">
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                  </li>
                </ul>
              </div>
          </nav>
        </div>
      </header>
      <section
        className="go-live"
        style={{
          background: 'url(assests/images/about-bg-pettern.png) #f1f1f1',
          backgroundPosition: 'left center',
          backgroundRepeat: 'no-repeat',
        }}>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6">
              <CountdownTimer duration={86400 * 5} />
            </div>
            <div className="col-lg-6">
              <div className="login-box-2">
                <div className="text-center">
                  <h2 className="mt-3">The Time To Something New Together</h2>
                  <p className="mb-5 m-auto">
                    Touch and turn your what's your creative thoughts and write
                    something and Share hole world.
                  </p>
                </div>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="count-form"
                  style={{ display: 'inherit' }}>
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
                        type="text"
                        name="email"
                        required=""
                        {...register('email')}
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
                  <div className="text-center ">
                    <button type="submit">
                      <span />
                      <span />
                      <span />
                      <span />
                      Submit Now
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
            <div className="col-md-12 text-center">
              <div className="footer-logo">
                <img src={Logo} />
                <h2 className="mt-4 white w-lg-50 m-auto">
                  Connect With Social Locket and Share Your Thoughts Whole World
                </h2>
              </div>
              <div className="social-media col-md-12">
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
            <div className="col-md-4 col-lg-4 col-sm-12">
              <div className="policy">
                <ul>
                  <li>
                    <a href="#">Terms &amp; Conditions of Services </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-8 col-lg-8 col-sm-12">
              <div className="copyright text-end">
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
}

export default CountdownPage