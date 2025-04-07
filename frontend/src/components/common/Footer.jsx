import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa' // For social media icons
import qrCode from '../../assets/images/Hero.jpg' // Replace with the path to your QR code image
import appStore from '../../assets/images/Hero.jpg' // Replace with the path to your App Store image
import googlePlay from '../../assets/images/Hero.jpg' // Replace with the path to your Google Play image
import appGallery from '../../assets/images/Hero.jpg' // Replace with the path to your App Gallery image

const Footer = () => {
  return (
    <footer className='bg-light py-4'>
      <Container>
        {/* Main Footer Content */}
        <Row>
          {/* Customer Service */}
          <Col md={3} sm={6} className='mb-3'>
            <h6 className='text-uppercase'>Customer Service</h6>
            <ul className='list-unstyled'>
              <li>
                <a href='#' className='text-muted'>
                  Help Centre
                </a>
              </li>
              <li>
                <a href='#' className='text-muted'>
                  Shopee Cares PH
                </a>
              </li>
              <li>
                <a href='#' className='text-muted'>
                  Payment Methods
                </a>
              </li>
              <li>
                <a href='#' className='text-muted'>
                  ShopeePay
                </a>
              </li>
              <li>
                <a href='#' className='text-muted'>
                  Shopee Coins
                </a>
              </li>
              <li>
                <a href='#' className='text-muted'>
                  Order Tracking
                </a>
              </li>
              <li>
                <a href='#' className='text-muted'>
                  Free Shipping
                </a>
              </li>
              <li>
                <a href='#' className='text-muted'>
                  Return & Refund
                </a>
              </li>
              <li>
                <a href='#' className='text-muted'>
                  Shopee Guarantee
                </a>
              </li>
              <li>
                <a href='#' className='text-muted'>
                  Overseas Product
                </a>
              </li>
              <li>
                <a href='#' className='text-muted'>
                  Contact Us
                </a>
              </li>
            </ul>
          </Col>

          {/* About Shopee */}
          <Col md={3} sm={6} className='mb-3'>
            <h6 className='text-uppercase'>About Shopee</h6>
            <ul className='list-unstyled'>
              <li>
                <a href='#' className='text-muted'>
                  About Us
                </a>
              </li>
              <li>
                <a href='#' className='text-muted'>
                  Shopee Blog
                </a>
              </li>
              <li>
                <a href='#' className='text-muted'>
                  Shopee Careers
                </a>
              </li>
              <li>
                <a href='#' className='text-muted'>
                  Shopee Policies
                </a>
              </li>
              <li>
                <a href='#' className='text-muted'>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href='#' className='text-muted'>
                  Shopee Mall
                </a>
              </li>
              <li>
                <a href='#' className='text-muted'>
                  Seller Centre
                </a>
              </li>
              <li>
                <a href='#' className='text-muted'>
                  Flash Deals
                </a>
              </li>
              <li>
                <a href='#' className='text-muted'>
                  Media Contact
                </a>
              </li>
            </ul>
          </Col>

          {/* Payment and Logistics */}
          <Col md={3} sm={6} className='mb-3'>
            <h6 className='text-uppercase'>Payment</h6>
            <div className='d-flex flex-wrap'>
              <img
                src='https://via.placeholder.com/50'
                alt='ShopeePay'
                className='me-2 mb-2'
              />
              <img
                src='https://via.placeholder.com/50'
                alt='Dragonpay'
                className='me-2 mb-2'
              />
              <img
                src='https://via.placeholder.com/50'
                alt='Stripe'
                className='me-2 mb-2'
              />
              <img
                src='https://via.placeholder.com/50'
                alt='Mastercard'
                className='me-2 mb-2'
              />
              <img
                src='https://via.placeholder.com/50'
                alt='Visa'
                className='me-2 mb-2'
              />
              <img
                src='https://via.placeholder.com/50'
                alt='BPI'
                className='me-2 mb-2'
              />
              <img
                src='https://via.placeholder.com/50'
                alt='PayMaya'
                className='me-2 mb-2'
              />
            </div>

            <h6 className='text-uppercase mt-3'>Logistics</h6>
            <div className='d-flex flex-wrap'>
              <img
                src='https://via.placeholder.com/50'
                alt='Shopee Xpress'
                className='me-2 mb-2'
              />
              <img
                src='https://via.placeholder.com/50'
                alt='GOGO'
                className='me-2 mb-2'
              />
              <img
                src='https://via.placeholder.com/50'
                alt='Ntresto'
                className='me-2 mb-2'
              />
              <img
                src='https://via.placeholder.com/50'
                alt='Ninja Van'
                className='me-2 mb-2'
              />
              <img
                src='https://via.placeholder.com/50'
                alt='J&T Express'
                className='me-2 mb-2'
              />
              <img
                src='https://via.placeholder.com/50'
                alt='2GO'
                className='me-2 mb-2'
              />
              <img
                src='https://via.placeholder.com/50'
                alt='Flash Express'
                className='me-2 mb-2'
              />
            </div>
          </Col>

          {/* Follow Us and Shopee App Download */}
          <Col md={3} sm={6} className='mb-3'>
            <h6 className='text-uppercase'>Follow Us</h6>
            <div className='d-flex'>
              <a href='#' className='text-muted me-3'>
                <FaFacebook size={24} />
              </a>
              <a href='#' className='text-muted me-3'>
                <FaInstagram size={24} />
              </a>
              <a href='#' className='text-muted me-3'>
                <FaTwitter size={24} />
              </a>
              <a href='#' className='text-muted'>
                <FaLinkedin size={24} />
              </a>
            </div>

            <h6 className='text-uppercase mt-3'>Shopee App Download</h6>
            <div className='d-flex align-items-center'>
              <img
                src={qrCode}
                alt='QR Code'
                className='me-2'
                style={{ width: '60px' }}
              />
              <div>
                <a href='#'>
                  <img
                    src={appStore}
                    alt='App Store'
                    className='mb-2'
                    style={{ width: '100px' }}
                  />
                </a>
                <a href='#'>
                  <img
                    src={googlePlay}
                    alt='Google Play'
                    className='mb-2'
                    style={{ width: '100px' }}
                  />
                </a>
                <a href='#'>
                  <img
                    src={appGallery}
                    alt='App Gallery'
                    style={{ width: '100px' }}
                  />
                </a>
              </div>
            </div>
          </Col>
        </Row>

        {/* Bottom Section */}
        <hr />
        <Row className='text-muted'>
          <Col md={6} className='text-start'>
            <p>© 2025 Shopee. All Rights Reserved.</p>
          </Col>
          <Col md={6} className='text-end'>
            <p>
              Country & Region: Singapore | Indonesia | Thailand | Malaysia |
              Vietnam | Philippines | Brazil | Mexico | Colombia | Chile |
              Taiwan
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
