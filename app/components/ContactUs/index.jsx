import "./ContactUs.less";
import React from "react";

export default React.createClass({
  componentDidMount(){
    this.initializeContactForm();
    this.initializeContactMap();
  },
  appendBootstrap: function () {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "http://maps.google.com/maps/api/js?sensor=false&callback=initialize";
    document.body.appendChild(script);
  },
  initializeGoogleMap: function (id) {
    var image = 'images/icon-map.png';
    var overlayTitle = 'Agencies';
    var locations = [
      //point number 1
      ['Madison Square Garden', '4 Pennsylvania Plaza, New York, NY'],

      //point number 2
      ['Best town ever', 'Santa Cruz', 36.986021, -122.02216399999998],

      //point number 3
      ['Located in the Midwestern United States', 'Kansas'],

      //point number 4
      ['I\'ll definitly be there one day', 'Chicago', 41.8781136, -87.62979819999998]
    ];

    /*** DON'T CHANGE ANYTHING PASSED THIS LINE ***/
    id = (id === undefined) ? 'mapWrapper' : id;

    var map = new google.maps.Map(document.getElementById(id), {
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      scrollwheel: false,
      zoomControl: true,
      zoomControlOptions: {
        style: google.maps.ZoomControlStyle.LARGE,
        position: google.maps.ControlPosition.LEFT_CENTER
      },
      streetViewControl: true,
      scaleControl: false,
      zoom: 14

    });

    var myLatlng;
    var marker, i;
    var bounds = new google.maps.LatLngBounds();
    var infowindow = new google.maps.InfoWindow({content: "loading..."});

    for (i = 0; i < locations.length; i++) {


      if (locations[i][2] !== undefined && locations[i][3] !== undefined) {
        var content = '<div className="infoWindow">' + locations[i][0] + '<br>' + locations[i][1] + '</div>';
        (function (content) {
          myLatlng = new google.maps.LatLng(locations[i][2], locations[i][3]);

          marker = new google.maps.Marker({
            position: myLatlng,
            icon: image,
            title: overlayTitle,
            map: map
          });

          google.maps.event.addListener(marker, 'click', (function () {
            return function () {
              infowindow.setContent(content);
              infowindow.open(map, this);
            };

          })(this, i));

          if (locations.length > 1) {
            bounds.extend(myLatlng);
            map.fitBounds(bounds);
          } else {
            map.setCenter(myLatlng);
          }

        })(content);
      } else {

        var geocoder = new google.maps.Geocoder();
        var info = locations[i][0];
        var addr = locations[i][1];
        var latLng = locations[i][1];

        (function (info, addr) {

          geocoder.geocode({
            'address': latLng
          }, function (results) {

            var myLatlng = results[0].geometry.location;

            marker = new google.maps.Marker({
              position: myLatlng,
              icon: image,
              title: overlayTitle,
              map: map
            });
            var $content = '<div className="infoWindow">' + info + '<br>' + addr + '</div>';
            google.maps.event.addListener(marker, 'click', (function () {
              return function () {
                infowindow.setContent($content);
                infowindow.open(map, this);
              };
            })(this, i));

            if (locations.length > 1) {
              bounds.extend(myLatlng);
              map.fitBounds(bounds);
            } else {
              map.setCenter(myLatlng);
            }
          });
        })(info, addr);

      }
    }
  },
  initializeContactForm: function () {
    jQuery(function () {
      "use strict";
      if (jQuery("#contactfrm").length) {

        /*$("#contactfrm").validate({
          // debug: true,
          errorPlacement: function (error, element) {
            error.insertBefore(element);
          },
          submitHandler: function (form) {
            jQuery(form).ajaxSubmit({
              target: ".result"
            });
          },
          onkeyup: false,
          onclick: false,
          rules: {
            name: {
              required: true,
              minlength: 3
            },
            email: {
              required: true,
              email: true
            },
            phone: {
              required: true,
              minlength: 10,
              digits: true
            },
            comment: {
              required: true,
              minlength: 10,
              maxlength: 350
            }
          }
        });*/
      }

    });
  },
  initializeContactMap: function () {

    var $contact = $('#contactSlide'),
      $map = $('#mapSlide'),
      $mapWrapper = $('#mapSlideWrapper'),
      $contactWrapper = $('#contactinfoWrapper, #contactinfoWrapperPage'),
      $this = this;


    $('#mapTrigger').click(function (e) {

      $mapWrapper.css('display', 'block');
      $this.initializeGoogleMap('mapWrapper');

      $contactWrapper.animate({
        marginLeft: '-2000px'
      }, 400, function () {});


      $mapWrapper.animate({
        marginLeft: '25px'
      }, 400, function () {});

      $this.appendBootstrap();
      e.preventDefault();
    });


    $('#mapTriggerLoader').click(function (e) {

      $map.css('display', 'block');

      $contact.animate({
        marginLeft: '-2000px'
      }, 400, function () {});

      $map.animate({
        marginLeft: '0'
      }, 400, function () {
        $contact.css('display', 'none');
      });

      $this.appendBootstrap();
      e.preventDefault();
    });

    $('#mapReturn').click(function (e) {

      $contact.css('display', 'block');
      $map.animate({
        marginLeft: '3000px'
      }, 400, function () {});

      $contact.animate({
        marginLeft: '0'
      }, 400, function () {
        $map.css('display', 'none');
      });

      e.preventDefault();
    });
  },
  render: function () {
    return <section className="slice color1" id="contactSlice">
      <div className="container">
        <div className="row mb40">
          <div className="col-md-12">
            <h1>Contact us</h1>
          </div>
          <div id="contactSlide">
            <div className="col-md-3"><a href="" title="" id="mapTriggerLoader">
              <div className="iconWrapper iconBig"><i className="icon-location"></i></div>
              <span className="clearfix">Click to see the map</span></a>
              <p>For more information please submit an inquiry in the contact us form or send an email to sales@ytadvisors.com..</p>
            </div>
            <div className="col-md-6">

              <form method="post" action="js-plugin/neko-contact-ajax-plugin/php/form-handler.php" id="contactfrm">
                <label htmlFor="name"></label>
                <input type="text" name="name" id="name" placeholder="Name"
                       title="Please enter your name (at least 2 characters)"/>
                <label htmlFor="email"></label>
                <input type="email" name="email" id="email" placeholder="Email"
                       title="Please enter a valid email address"/>
                <label htmlFor="phone"></label>
                <input name="phone" type="tel" id="phone" size="30" value="" placeholder="Phone"
                       className="required digits" title="Please enter a valid phone number (at least 10 characters)"/>
                <label htmlFor="comments"></label>
                  <textarea name="comment" id="comments" cols="3" rows="5" placeholder="Enter your message..."
                            title="Please enter your message (at least 10 characters)">
                  </textarea>
                <fieldset className="clearfix securityCheck">
                  <legend>Security</legend>
                  <div className="row">
                    <div className="col-md-6 pull-left humanCheck">
                      <input className="required " id="verify" name="verify" type="text"/>
                    </div>
                  </div>
                </fieldset>
                <br />
                <div className="result"></div>
                <button name="submit" type="submit" className="btn" id="submit"> Submit</button>
              </form>


            </div>
            <div className="col-md-3">
              <address>
                <strong>Address:</strong><br/>
                YT Advisors<br/>
                4100 Forest Park Avenue, #120<br/>
                Saint Louis, MO 63108 USA <br/>
                <br/>
                <strong>Phone:</strong><br/>
                314.669.1750<br/>
              </address>
            </div>
          </div>
          <div id="mapSlide">
            <div className="col-md-12">
              <div id="mapWrapper"></div>
              <a href="#" title="" id="mapReturn" className="btn btn-small"><i className="icon-left-dir"></i> Back</a>
            </div>
          </div>
        </div>
      </div>
    </section>;
  }
});