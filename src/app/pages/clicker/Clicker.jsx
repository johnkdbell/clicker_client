//React Imports
import React, { Component } from "react";
import { Row, Col } from 'antd';

//Component Imports

//Style Imports
import "./styles/clicker.scss";

var cookieCount = 0;
var autoClicker = 0;
var grandma = 0;
var anime = 0;

var grandmaUpgrade = 0;

function update()
{
  //Show/Hide Grandma Upgrade
  if (grandma >= 5 && grandmaUpgrade < 1 || grandma >= 10 && grandmaUpgrade < 2 || grandma >= 20 && grandmaUpgrade < 3)  {
    document.getElementById('testo').style.display = 'flex';
  } else {
    document.getElementById('testo').style.display = 'none';
  }

  //Show/Hide Anime
  if (cookieCount >= 500 || anime >= 1) {
    document.getElementById('idAnime').style.display = 'flex';
  } 

  document.getElementById('idcookieCount').innerHTML = Math.round((cookieCount + Number.EPSILON) * 100) / 100; //Displayed Cookie Count Amount
  document.title = Math.round((cookieCount + Number.EPSILON) * 100) / 100 + " Cookies"; //Displayed Title Cookie Count Amount

  document.getElementById('priceAutoClicker').innerHTML = ((autoClicker + 1) * 10) + " Cookies"; //Displays the price of an auto clicker
  document.getElementById('amountAutoClicker').innerHTML = autoClicker + " Auto Clickers"; //Displays the amount of auto clickers owned

  document.getElementById('priceGrandma').innerHTML = ((grandma + 1) * 100) + " Cookies";
  document.getElementById('amountGrandma').innerHTML = grandma + " Grandmas";

  document.getElementById('priceGrandmaUpgrade').innerHTML = ((grandmaUpgrade + 1) * 2500) + " Cookies";
  document.getElementById('amountGrandmaUpgrade').innerHTML = grandmaUpgrade + " Granney banent";

  document.getElementById('priceAnime').innerHTML = ((anime + 1) * 500) + " Cookies";
  document.getElementById('amountAnime').innerHTML = anime + " Anime";

  document.getElementById("cookiesPerSecond").innerHTML =
    Math.round(
      ((autoClicker +
        ((grandma * 5 * grandmaUpgrade * 5 * 2) / 5 || (grandma * 5 * 5) / 5) +
        anime * 10) /*(something...)*/ /
        5 +
        Number.EPSILON) *
        100
    ) /
      100 +
    "cps";

}

function timer() {
  cookieCount = cookieCount + Math.round((autoClicker + Number.EPSILON) * 100) / 100 / 10;

  if (grandmaUpgrade >= 1) { 
    cookieCount = cookieCount + (grandma * grandmaUpgrade) * 2;
  } else {
    cookieCount = cookieCount + grandma * 5.0 / 10;
  }

  cookieCount = cookieCount + anime * 10.0 / 10;

  update();
} setInterval(timer, 500);

function autoSave() {
  save();
  update();
} setInterval(autoSave, 300000);


function add() {
  cookieCount = cookieCount + 1; 
  update();  
}

function save() {
  localStorage.setItem("cookieCount", cookieCount);
  localStorage.setItem("autoClicker", autoClicker);
  localStorage.setItem("grandma", grandma);
  localStorage.setItem("grandmaUpgrade", grandmaUpgrade);
  localStorage.setItem("anime", anime);
}

function load() {
  
  cookieCount = localStorage.getItem("cookieCount");
  cookieCount = parseInt(cookieCount) || 0;

  autoClicker = localStorage.getItem("autoClicker");  
  autoClicker = parseInt(autoClicker) || 0;

  grandma = localStorage.getItem("grandma");  
  grandma = parseInt(grandma) || 0;

  grandmaUpgrade = localStorage.getItem("grandmaUpgrade");  
  grandmaUpgrade = parseInt(grandmaUpgrade) || 0;

  anime = localStorage.getItem("anime");  
  anime = parseInt(anime) || 0;

  save();


  update(); 
}
window.onload = load;

function buyAutoClicker()
{
  if(cookieCount >= ((autoClicker + 1) * 10 )) //If they have enough cookies for the thingy
  {
    cookieCount = cookieCount - ((autoClicker + 1) * 10); //Take cookies away
    autoClicker = autoClicker + 1; //Give them their thingy
    update();
  }
}

function buyGrandma() {
  if(cookieCount >= ((grandma + 1) * 100 )) {
    cookieCount = cookieCount - ((grandma + 1) * 100);
    grandma = grandma + 1;
    
    update();
  }
}

function buyGrandmaUpgrade() {
  if (grandma >= 1) {
    if(cookieCount >= ((grandmaUpgrade + 1) * 2500 )) {
      cookieCount = cookieCount - ((grandmaUpgrade + 1) * 2500 );
      grandmaUpgrade = grandmaUpgrade + 1;
      
      update();
    }
    
  }
}

function buyAnime()
{
  if (cookieCount >= 500) {
    
    if(cookieCount >= ((anime + 1) * 500 )) {
      cookieCount = cookieCount - ((anime + 1) * 500);
      anime = anime + 1;
      
      update();
    }

  }
}

class SecondPage extends Component
{
  componentDidMount() {
    document.title = cookieCount + " Cookies";
  }

  render() {
    return (
      <>

        <Row>
          <Col className="cookieHub" xs={4} sm={4} md={4} lg={4} xl={4} >
            <Col>
              <a className="cookie" href="#" onClick={() => add()} /* onLoad={() => load()} */ >
                <img id="cookieImg" src="https://i.pinimg.com/originals/69/ae/13/69ae13357d4efeed8530c507e26877f8.png" alt="" />
                <br/><br/>                
              </a>

              <div className="cookieAmount">
                <h2 type="text" id="idcookieCount" value="0" disabled />
              </div>
            
              <p id="cookiesPerSecond" />

              <button><a href="#" onClick={() => save()}>Save</a></button>
              <button><a href="#" onClick={() => load()}>Load</a></button>

              <br/><br/>
            </Col>
          </Col>


          <Col className="mainWindow" xs={14} sm={14} md={14} lg={14} xl={14} >              
            <Row className="gameWindow">
              <img className="game" src="https://i.pinimg.com/originals/bd/90/ba/bd90ba7c8b3ced391e376ce0f9144f68.png" alt="" />
            </Row>
            <Row className="infoWindow">

            </Row>
          </Col>

          <Col className="secondRowRight" xs={6} sm={6} md={6} lg={6} xl={6} >    
            <Row>
              <Row>   
                <button className="upgradesImageContainer">                 
                  <div className="upgradeTooltip">
                    <p id="priceAutoClicker" />
                    <p id="amountAutoClicker"/>
                  </div>
                  <img onClick={() => buyAutoClicker()} className="upgradesImage" src="https://t3.rbxcdn.com/55d0037f7405a04efed98030cd57956f" alt="" />
                </button>
              
                <button className="upgradesImageContainer">
                  <div className="upgradeTooltip">
                    <div><p id="priceGrandma" /></div>
                    <div><p id="amountGrandma"/></div>
                  </div>
                  <img onClick={() => buyGrandma()} className="upgradesImage" src="https://pbs.twimg.com/media/ESDqg2CWoAI1ov7.png" alt="" />
                </button>

                <span id="idAnime" style={{display: "none"}}>
                  <button className="upgradesImageContainer">
                    <div className="upgradeTooltip">
                      <div><p id="priceAnime" /></div>
                      <div><p id="amountAnime"/></div>
                    </div>
                    <img onClick={() => buyAnime()} className="upgradesImage" src="https://res.cloudinary.com/sfp/image/upload/w_200,f_auto/cprd/images/ste/4f890875-73fd-4228-8ea2-10c2a26c7a3e.png" alt="" />
                  </button>
                </span>
              </Row> 

              <Row></Row>

              <Row className="upgradeSection">
                <Col>
                  <div className="upgradesContainer">          
                    <div id="testo" style={{display: "none"}} className="upgradesContainer">
                      <button className="upgradesImageContainer">
                        <div className="upgradeTooltip">
                          <div><p id="priceGrandmaUpgrade" /></div>
                          <div><p id="amountGrandmaUpgrade"/></div>
                        </div>
                        <img onClick={() => buyGrandmaUpgrade()} className="upgradesImage" src="https://pbs.twimg.com/media/ESDqg2CWoAI1ov7.png" alt="" />
                      </button>
                    </div>
                  </div>
                </Col>
              </Row>
              
            </Row>
          </Col>
        
        </Row>
      </>
    );
  }
}

export default SecondPage;