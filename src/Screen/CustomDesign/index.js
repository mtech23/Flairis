import React from "react";

import banner2 from "../../Assets/images/banner-2.png";
import UserLayout from "../../Component/UserLayout";
import Banner from "../../Component/Banner";

const CustomDesign = () => {
  return (
    <UserLayout>
      <Banner name="Custom Design" daimonImg={banner2} />
      <section className="custom_design-form-sec">
        <div className="container">
          <div className="custom_designForm-rowDiv">
            <div className="row">
              <div className="col-md-12">
                <div className="sec_title">
                  <h2>Custom Design</h2>
                </div>
              </div>

              <label class="form-label col-md-12">Name</label>
              <div className="col-md-6 mb-3">
                <input class="form-control" id="f-name" type="text" />
                <label htmlFor="f-name" class="form-label sub-label">
                  First
                </label>
              </div>

              <div className="col-md-6 mb-3">
                <input class="form-control" id="l-name" type="text" />
                <label htmlFor="l-name" class="form-label sub-label">
                  Last
                </label>
              </div>

              <div className="col-md-12 mb-3">
                <label class="form-label" htmlFor="email">
                  Email
                </label>
                <input class="form-control" id="email" type="email" />
              </div>

              <div className="col-md-12 mb-3">
                <label class="form-label" htmlFor="phone">
                  Phone
                </label>
                <input class="form-control" id="phone" type="tel" />
              </div>

              <div className="col-md-12 mb-3">
                <label class="form-label">Address</label>
                <input class="form-control" id="street-address" type="text" />
                <label class="form-label sub-label" htmlFor="street-address">
                  Street Address
                </label>
              </div>

              <div className="col-md-12 mb-3">
                <input class="form-control" id="address-line-2" type="text" />
                <label class="form-label sub-label" htmlFor="address-line-2">
                  Address Line 2
                </label>
              </div>

              <div className="col-md-6 mb-3">
                <input class="form-control" id="city" type="text" />
                <label htmlFor="city" class="form-label sub-label">
                  City
                </label>
              </div>

              <div className="col-md-6 mb-3">
                <input class="form-control" id="state" type="text" />
                <label htmlFor="state" class="form-label sub-label">
                  State / Province / Region
                </label>
              </div>

              <div className="col-md-6 mb-3">
                <input class="form-control" id="postal" type="text" />
                <label htmlFor="postal" class="form-label sub-label">
                  ZIP / Postal Code
                </label>
              </div>

              <div className="col-md-6 mb-3">
                {/* <input class="form-control" id="l-name" type="text" /> */}
                <select class="form-select form-control">
                  <option value="" selected="selected" disabled></option>
                  <option value="Afghanistan">Afghanistan</option>
                  <option value="Albania">Albania</option>
                  <option value="Algeria">Algeria</option>
                  <option value="American Samoa">American Samoa</option>
                  <option value="Andorra">Andorra</option>
                  <option value="Angola">Angola</option>
                  <option value="Anguilla">Anguilla</option>
                  <option value="Antarctica">Antarctica</option>
                  <option value="Antigua and Barbuda">
                    Antigua and Barbuda
                  </option>
                  <option value="Argentina">Argentina</option>
                  <option value="Armenia">Armenia</option>
                  <option value="Aruba">Aruba</option>
                  <option value="Australia">Australia</option>
                </select>
                <label class="form-label sub-label">Country</label>
              </div>

              <div className="col-md-4 mb-3">
                <label class="form-label">
                  METAL TYPE
                </label>
                <select class="form-select form-control">
                  <option value="18k White Gold">18k White Gold</option>
                  <option value="14k White Gold">14k White Gold</option>
                  <option value="18k Yellow Gold">18k Yellow Gold</option>
                  <option value="14k Yellow Gold">14k Yellow Gold</option>
                  <option value="14k Rose Gold">14k Rose Gold</option>
                  <option value="Platinum">Platinum</option>
                </select>
              </div>

              <div className="col-md-4 mb-3">
                <label class="form-label">
                  SELECT JEWELRY STYLE
                </label>
                <select class="form-select form-control">
                  <option value="Engagement Ring">Engagement Ring</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Earring">Earring</option>
                  <option value="Pendants">Pendants</option>
                  <option value="Bracelets">Bracelets</option>
                  <option value="Fashion Jewelry">Fashion Jewelry</option>
                </select>
              </div>

              <div className="col-md-4 mb-3">
                <label class="form-label">
                  TIME FRAME
                </label>
                <select class="form-select form-control">
                  <option value="Flexible">Flexible</option>
                  <option value="Urgent">Urgent</option>
                  <option value="Have a few weeks">Have a few weeks</option>
                </select>
              </div>

              <div className="col-md-12 mb-3">
                <label class="form-label" htmlFor="comments">COMMENTS</label>
                <textarea  class="form-control" rows={5} id="comments" type="tel"></textarea>
              </div>

              <div className="col-md-12 mb-3">
                <label class="form-label" htmlFor="number">Number</label>
                <input  class="form-control" id="number" type="tel" />
              </div>

              <div className="col-md-12 mb-3">
                <label class="form-label" htmlFor="number-2">Number</label>
                <input  class="form-control" id="number-2" type="tel" />
              </div>


            </div>
          </div>
        </div>
      </section>
    </UserLayout>
  );
};

export default CustomDesign;
