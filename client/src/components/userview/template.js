import React, { useState, useEffect  } from "react";
//Video that explains the library of sweet alert: https://www.youtube.com/watch?v=f45RAS85TnA
import '../../design/designPage/fontawesome/css/all.min.css';
import '../../design/designPage/css/tooplate-wave-cafe.css';
import $ from 'jquery';
//For controlling classNames
import SearchDrinks from "./searchDrinks";
import SavedProducts from "./savedProducts";
import LockRestaurants from "./lockRestaurants";
import SavedRestaurants from "./savedRestaurants";


//Image and videos
import video from "../../design/designPage/video/wave-cafe-video-bg.mp4";

export const Template = (props) => {
    /*=============================================
    =            VARIABLES            =
    =============================================*/
    //For controlling when a button is click or not
    const [clicked, setClicked] = useState(false);
    
    /*=============================================
    =            FUNCTIONS            =
    =============================================*/
    
    /*----------  INTERFACE TEMPLADE FUNCTION  ----------*/
    useEffect(() => {
        initPage();
    
        $('.tm-page-link').click(function(event) {
          if (window.innerWidth > 991) {
            event.preventDefault();
          }
    
          highlightMenu($(event.currentTarget));
          showPage($(event.currentTarget.hash));
        });
    
        $('.tm-tab-link').on('click', e => {
          e.preventDefault();
          openTab(e, $(e.target).data('id'));
        });
    
        $('.tm-tab-link.active').click(); // Open default tab
    
        let timeout;
        window.onresize = function() {
          clearTimeout(timeout);
          timeout = setTimeout(setVideoSize, 100);
        };
      }, []);
    
      function setVideoSize() {
        const vidWidth = 1920;
        const vidHeight = 1080;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const tempVidWidth = windowHeight * vidWidth / vidHeight;
        const tempVidHeight = windowWidth * vidHeight / vidWidth;
        const newVidWidth = tempVidWidth > windowWidth ? tempVidWidth : windowWidth;
        const newVidHeight = tempVidHeight > windowHeight ? tempVidHeight : windowHeight;
        const tmVideo = $('#tm-video');
    
        tmVideo.css('width', newVidWidth);
        tmVideo.css('height', newVidHeight);
      }
    
      function openTab(evt, id) {
        $('.tm-tab-content').hide();
        $('#' + id).show();
        $('.tm-tab-link').removeClass('active');
        $(evt.currentTarget).addClass('active');
      }
    
      function initPage() {
        let pageId = window.location.hash;
    
        if (pageId) {
          highlightMenu($(`.tm-page-link[href^="${pageId}"]`));
          showPage($(pageId));
        } else {
          pageId = $('.tm-page-link.active').attr('href');
          showPage($(pageId));
        }
      }
    
      function highlightMenu(menuItem) {
        $('.tm-page-link').removeClass('active');
        menuItem.addClass('active');
      }
    
      function showPage(page) {
        $('.tm-page-content').hide();
        page.show();
      }
    
      function handleVideoControlButtonClick(e) {
        const video = document.getElementById('tm-video');
        $(this).removeClass();

        setClicked(!clicked);
    
        if (video.paused) {
          video.play();
          //$(this).addClass('fas fa-pause');
        } else {
          video.pause();
          //$(this).addClass('fas fa-play');
        }
      }
    
  
    
    /*----------  DATABASE METHODS  ----------*/
    
    
     /*=============================================
     =            HTML            =
    =============================================*/
    return (
        <div class="tm-container">
        <div class="tm-row">
        
        <div className="tm-left">
            <div className="tm-left-inner">
                <div className="tm-site-header">
                <i className="fas fa-coffee fa-3x tm-site-logo"></i>
                <h1 className="tm-site-name">ServiDrink</h1>
                </div>
                <nav className="tm-site-nav">
                <ul className="tm-site-nav-ul">
                    <li className="tm-page-nav-item">
                    <a href="#drink" className="tm-page-link active">
                        <i className="fas fa-mug-hot tm-page-link-icon"></i>
                        <span>Search Drinks</span>
                    </a>
                    </li>
                    <li className="tm-page-nav-item">
                    <a href="#about" className="tm-page-link">
                        <i className="fas fa-users tm-page-link-icon"></i>
                        <span>Saved Products</span>
                    </a>
                    </li>
                    <li className="tm-page-nav-item">
                    <a href="#special" className="tm-page-link">
                        <i className="fas fa-glass-martini tm-page-link-icon"></i>
                        <span>Lock restaurants</span>
                    </a>
                    </li>
                    <li className="tm-page-nav-item">
                    <a href="#contact" className="tm-page-link">
                        <i className="fas fa-comments tm-page-link-icon"></i>
                        <span>Saved restaurants</span>
                    </a>
                    </li>
                </ul>
                </nav>
            </div>
       </div>
        <div class="tm-right">
            <main class="tm-main">
            <SearchDrinks/>
            <LockRestaurants/>
            <SavedProducts/>
            <SavedRestaurants/>
            </main>
        </div>    
        </div>

        <div className="tm-video-wrapper">
        <i id="tm-video-control-button" className={clicked ? "fas fa-play" : "fas fa-pause"} onClick={handleVideoControlButtonClick}></i>
        <video autoPlay muted loop id="tm-video">
            <source src={video} type="video/mp4" />
        </video>
        </div>
    </div>
     
    )
}

export default Template;