import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";
function Contact() {
  const [text, setText] = useState("Exrire ici.....");
  return (
    /* <div className="main">
      <div className="para">
        <h4>Nous Contacter</h4>
        <p>Pour nous contacter, veuillez remplir le formulaire ci-dessous :</p>
      </div>
      <div className="form-maps">
        <div className="form">
          <fieldeset>
            <legend>Vos Coordonnées :</legend>
            <label className="l1">Prenom</label>
            <input type="text" placeholder="Votre Prenom" className="name" />
            <label className="l1"> Nom de famille</label>
            <input type="text" placeholder="Votre Nom" className="name" />
            <label className="l2">Email</label>
            <input type="email" placeholder="Votre email" className="name" />
            <label className="l3">Telephone</label>
            <input type="tel" placeholder="Votre Telephone" className="name" />
            <label className="l4">Ville</label>
            <input type="text" placeholder="Votre Ville" className="name" />
            <label>Message</label>
            <textarea value={text} onChange={(e) => setText(e.target.value)}></textarea>
          </fieldeset>
          <p>
            <input type="submit" value="Envoyer" />
            <input type="reset" value="Annuler" />
          </p>
        </div>
        <div
          classNme="maps"
          dangerouslySetInnerHTML={{
            __html:
              '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3235.458656249128!2d10.6284172!3d35.813221!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130275a1697e9da1%3A0x759b6ccea1553428!2sSouk%20du%20dimanche%20Lahad!5e0!3m2!1sfr!2stn!4v1690038202865!5m2!1sfr!2stn" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
          }}
        ></div>
      </div>
      <div claasName="Contact">
        <div className="email col-4">
          <h5>Ou,Par:</h5>
          <p>Par E-mail :</p>
          <p>Contact@driveeasy.com</p>
        </div>
        <div className="phone">
          <p>Par téléphone :</p>
          <p> Mobile : +2161202143(24 H / 7 J)</p>
        </div>
        <div className="Temps">
          <p>Temps du travail:</p>
          <p>Du lundi au Samedi de 08H Matin a 21H</p>
          <p>Dimanche de 09H Matin A 14H</p>
        </div>
      </div>
    </div>

   /* <section id="three" className="wrapper style1 fade-up">
            <div className="inner-with-maps">
      <div className="inner">
        <h2>Nous Contacter</h2>
        <p>Pour nous contacter, veuillez remplir le formulaire ci-dessous :</p>
        <div className="split style1">
          <section>
            <form method="post" action="#">
              <div className="row">
                <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="Prenom">Prenom</label>
                  <input type="text" name="prenom" id="prenom"  className="form-control"/>
                </div>
                <div className="form-group">
                  <label htmlFor="Nom">Nom De Famille</label>
                  <input type="text" name="nom" id="nom" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Votre Email" className="form-control"
                  />
                </div>
                </div>
                <div className="col-md-6">
                
                <div className="form-group">
                  <label htmlFor="telephone">Telephone</label>
                  <input type="tel" name="telephone" id="telephone"  className="form-control"/>
                </div>
                <div className="form-group">
                  <label htmlFor="ville">Ville</label>
                  <input type="text" name="ville" id="ville"  className="form-control"/>
                </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea value={text} onChange={(e) => setText(e.target.value)}></textarea>

                </div>
              </div>
              <ul className="actions">
                <li>
                  <a href="/" className="btn btn-primary" type="submit">
                    Envoyer
                  </a>
                </li>
                <li>
                  <a href="/" className="btn btn-secondary" type="button">
                    Annuler
                  </a>
                </li>
              </ul>
            </form>
          </section>
          <section className="wrapper style1 fade-up">
            <div
              className="maps"
              dangerouslySetInnerHTML={{
                __html:
                  '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3235.458656249128!2d10.6284172!3d35.813221!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130275a1697e9da1%3A0x759b6ccea1553428!2sSouk%20du%20dimanche%20Lahad!5e0!3m2!1sfr!2stn!4v1690038202865!5m2!1sfr!2stn" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
              }}
            ></div>
            </section>
          </div>
            <ul className="contact">
              <li className="temps"> 
                <h3>Temps de travail:</h3>
                <span>
                  Du lundi au Samedi de 08H Matin a 21H
                  <br />
                  Dimanche de 09H Matin A 14H
                  <br />
                </span>
              </li>
              <li  className="email">
                <h3>Par Email:</h3>
                <a href="/">Contact@driveeasy.com</a>
              </li>
              <li  className="phone">
                <h3> Par telephone:</h3>
                <span>Mobile : +2161202143</span>
              </li>
            </ul>
        </div>
      </div>
    </section>*/
    <div>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
              <h2 className="heading-section">Nous Contacter</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="wrapper">
                <div className="row no-gutters mb-5">
                  <div className="col-md-7">
                    <div className="contact-wrap w-100 p-md-5 p-4">
                      <h3 className="mb-4">
                        Pour nous contacter, veuillez remplir le formulaire
                        ci-dessous :
                      </h3>
                      <div id="form-message-warning" className="mb-4"></div>
                      <div id="form-message-success" className="mb-4">
                        Votre message est envoyé avec succées
                      </div>
                      <form
                        method="POST"
                        id="contactForm"
                        name="contactForm"
                        className="contactForm"
                      >
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group" >
                              <label className="label" htmlFor="name"  style={{marginLeft:"70px"}}>
                                NomComplet
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="name"
                                id="name"
                                placeholder="Nom Complet"
                                style={{ width: "200%", height: "50px" }}
                                />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="label" htmlFor="email" style={{marginLeft:"110px"}} >
                                Email{" "}
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="Email"
                                style={{ width: "200%", height: "50px" }}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <label className="label" htmlFor="ville" style={{marginLeft:"233px"}}>
                                Ville
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="subject"
                                id="subject"
                                placeholder="Ville"
                                style={{ width: "205%", height: "50px" }}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <label className="label" htmlFor="#" style={{marginLeft:"233px"}}>
                                Message
                              </label>
                              <textarea
                                name="message"
                                className="form-control"
                                id="message"
                                cols="30"
                                rows="4"
                                placeholder="Message"
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                style={{ width: "205%", height: "50px" }}
                              ></textarea>
                            </div>
                            
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="submit"
                                value="Envoyer"
                                className="btn btn-primary"
                                style={{ width: "60%", height: "50px" ,marginLeft:"200px" }}
                              />
                              <div className="submitting"></div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-5 d-flex align-items-stretch">
                  <div
              className="maps"
              dangerouslySetInnerHTML={{
                __html:
                  '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3235.458656249128!2d10.6284172!3d35.813221!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130275a1697e9da1%3A0x759b6ccea1553428!2sSouk%20du%20dimanche%20Lahad!5e0!3m2!1sfr!2stn!4v1690038202865!5m2!1sfr!2stn" width="141%" height="635" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
              }}
            ></div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <div className="dbox w-100 text-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-map-marker"></span>
                      </div>
                      <div className="text" >
                        <p style={{color:"black"}}>
                          <span>Adresse:</span><br/>
                          souk ahad,Sousse 
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="dbox w-100 text-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-phone"></span>
                      </div>
                      <div className="text">
                        <p >
                          <span>Telephone:</span>{" "}<br/>
                          <a href="tel://1234567920" style={{color:"black"}}>+216 51202143</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="dbox w-100 text-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-paper-plane"></span>
                      </div>
                      <div className="text">
                        <p >
                          <span>Email:</span>{" "}<br />
                          <a href="mailto:info@yoursite.com" style={{color:"black"}}>
                            Contact@driveeasy.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
         </div>
  );
}

export default Contact;
