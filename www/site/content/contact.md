---
date: 2017-01-24T16:04:19Z
title: Contact Us
type: contact/
---


<div class="page">

         <div class="page-inner pt-none">

            <!-- Google Maps - Go to the bottom of the page to change settings and map location. -->
            <div id="googlemaps" class="google-map"></div>
            <section>

               <div class="container">

                  <div class="row">
                     <div class="col-sm-12">
                        <h2 class="section-title t-center mt-none mb-xs">Contact us</h2>
                        <p class="lead text-center mb-xlg">Get in touch and let us know how we can help.</p>
                     </div>
                  </div>

                  <div class="row">
                     <div class="col-sm-4">
                        <div class="feature-box boxed center-content boxed-top-icon">
                           <div class="icon filled">
                              <i class="fa fa-life-ring"></i>
                           </div>
                           <div class="content">
                              <h3 class="title">Sales Question</h3>
                              <p class="detail">
                                 Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa santo.
                              </p>
                              <a href="#" class="read-more">Read more</a>
                           </div>
                        </div>
                     </div>

                     <div class="col-md-4">
                        <div class="feature-box boxed center-content boxed-top-icon">
                           <div class="icon filled">
                              <i class="fa fa-heart"></i>
                           </div>
                           <div class="content">
                              <h3 class="title">Help & Support</h3>
                              <p class="detail">
                                 Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim aloman.
                              </p>
                              <a href="#" class="read-more">Read more</a>
                           </div>
                        </div>
                     </div>

                     <div class="col-md-4">
                        <div class="feature-box boxed center-content boxed-top-icon">
                           <div class="icon filled">
                              <i class="fa fa-video-camera"></i>
                           </div>
                           <div class="content">
                              <h3 class="title">Media & Press</h3>
                              <p class="detail">
                                 Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim juserdiet a, venenatis vitae, justo.
                              </p>
                              <a href="#" class="read-more">Read more</a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section>
               <div class="container">
                  <div class="row pt-md">
                     <div class="col-md-8">
                        <div class="alert alert-danger hidden mt-lg" id="contactError">
                           <strong>Error!</strong> There was an error sending your message.
                           <span class="font-size-xs mt-sm display-block" id="mailErrorMessage"></span>
                        </div>

                        <div class="special-heading line">
                           <h4 class="special-heading-inner"><span> <strong>Contact</strong> Us </span></h4>
                        </div>

                        <form id="contactForm" action="http://expressbootstrap.com/php/contact-form.php" method="POST">
                           <div class="row">
                              <div class="form-group">
                                 <div class="col-md-6">
                                    <label>Name <span class="required">*</span></label>
                                    <input type="text" value="" data-msg-required="Please enter your name." maxlength="100" class="form-control" name="name" id="name" required>
                                 </div>
                                 <div class="col-md-6">
                                    <label>E-mail <span class="required">*</span></label>
                                    <input type="email" value="" data-msg-required="Please enter your email address." data-msg-email="Please enter a valid email address." maxlength="100" class="form-control" name="email" id="email" required>
                                 </div>
                              </div>
                           </div>
                           <div class="row">
                              <div class="form-group">
                                 <div class="col-md-12">
                                    <label>Subject</label>
                                    <input type="text" value="" data-msg-required="Please enter the subject." maxlength="100" class="form-control" name="subject" id="subject" required>
                                 </div>
                              </div>
                           </div>
                           <div class="row">
                              <div class="form-group">
                                 <div class="col-md-12">
                                    <label>Message <span class="required">*</span></label>
                                    <textarea maxlength="5000" data-msg-required="Please enter your message." rows="10" class="form-control" name="message" id="message" required></textarea>
                                 </div>
                              </div>
                           </div>
                           <div class="row">
                              <div class="col-md-12">
                                 <input type="submit" value="Send Message" class="btn btn-primary mb-xlg" data-loading-text="Loading...">
                              </div>
                           </div>
                        </form>
                     </div>
                     <div class="col-md-4">

                        <div class="special-heading line">
                           <h4 class="special-heading-inner"><span> Get in <strong>Touch</strong> </span></h4>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget leo at velit imperdiet varius. In eu ipsum vitae velit congue iaculis vitae at risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                        <div class="special-heading line">
                           <h4 class="special-heading-inner"><span> The <strong>Office</strong> </span></h4>
                        </div>

                        <ul class="list list-unstyled">
                           <li><i class="fa fa-map-marker"></i> <strong>Address:</strong> New Yourk, NY, 367 Veber Apt.15</li>
                           <li><i class="fa fa-phone"></i> <strong>Phone:</strong> (123) 456-789 - (321) 456-780</li>
                           <li><i class="fa fa-envelope"></i> <strong>Email:</strong> <a href="mailto:mail@example.com">mail@example.com</a></li>
                        </ul>

                        <div class="special-heading line">
                           <h4 class="special-heading-inner"><span> Business <strong>Hours</strong> </span></h4>
                        </div>
                        <ul class="list list-unstyled">
                           <li><i class="fa fa-clock-o"></i><strong> Monday - Friday</strong>: 9am to 5pm</li>
                           <li><i class="fa fa-clock-o"></i> <strong>Saturday</strong>: 9am to 2pm</li>
                           <li><i class="fa fa-clock-o"></i><strong> Sunday</strong>: Closed</li>
                        </ul>
                     </div>
                  </div>
               </div>
            </section>

            <div class="container pt-xlg">
               <div class="row">
                  <div class="col-md-12">
                     <div class="call-to-action">
                        <div class="call-to-action-content">
                           <h3 class="title m-none">Express is <strong>everything</strong> you need to create an <strong>awesome</strong> website!</h3>
                           <p class="sub-title">The <strong>#1 Selling</strong> HTML Site Template on Marketplace</p>
                        </div>
                        <div class="call-to-action-btn">
                           <a href="#" class="btn btn-primary">View More!</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
        </div>

