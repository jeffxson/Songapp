import styled from 'styled-components'

export const FooterStyle = styled.div`
  margin: 0;
  padding: 40px 0;
  background: #25201D;
  ;
.logosmall{
  margin-top: -100px;

}
.logosmall{
  @media (max-width: 999px) {
    
  width: 300px;
   margin-right:-170;
  }
 
}
  .flex-container{
    @media (min-width: 999px) {
      display: flex;
      height: 350px;
    }
    padding: 10px;
    flex-wrap: nowrap;
    width: 90%;
    margin: auto;
  }

  
  .ddd{
    @media (max-width: 999px) {
      font-size: 20px;
      width: 300px;
       }
     width: 375px;
   height: 39px;
   left: 897px;
    
  
   font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 40px;
  /* or 100% */
  letter-spacing: -0.03em;
  color: #FFFFFF;

  }
  form{
    @media (max-width: 999px) {
    
      width: 300px;
       }
    margin-top:-134px;
    /* This bit sets up the horizontal layout */
    display:flex;
    flex-direction:row;
    border:1px solid grey;
    width: 390px;
    background: rgba(255, 255, 255, 0.2);
    height:44px;

    border-radius: 6px;

     padding:2px;
  

  }

  input {
    width: 300px;
    height:44px;
background: rgba(255, 255, 255, 0.2);
border: none;
margin-top: 0px;
margin-bottom: 0px;
color: black;



      }
  
  input:focus {
    padding-top: 10px;

    /* removing the input focus blue box. Put this on the form if you like. */
    outline: none;
  }
  
  button {
    margin-top:1px;
    margin-right:2px;
    height:43px;
    width: 150px;

  
     
     
     background: white;
     border-radius: 6px;
     
  }
  
.texter1{
  @media (max-width: 999px) {
    font-size: 13px;
    width: 300px;
     }
  width: 417px;
  height: 216px;
  left: 897px;
padding-top:40px;  
   font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 150%;
  /* or 27px */
  letter-spacing: 0.02em;
  
  color: #FFFFFF;
  }
 

  .flex-container .flexer {
    justify-content: space-between;

    width: 90%;
    padding: 0px;
    margin: 4px;
    text-align: left;
    font-size: 9px;
  }

  .flex-container .flexer1 {
    justify-content: space-evenly;

    width: 90%;
   
    margin: 4px;
     margin-right: 50px;
    text-align: left;
    font-size: 9px;
  }

  .about {
    margin: 13px;
    color: gray;
  }
  .about p {
    font-size: 17px;
    color: gray;
  }

  h3 {
    /* Company */

  
    
     font-style: normal;
    font-weight: bold;
    font-size: 19px;
    line-height: 19px;
    
    color: #FFFFFF;
    
    
  }

  h4 {
    font-size: 21px;
    color: gray;
  }

  .kilimanjaro_widget a:hover {
    color: red;
  }
  p {
    font-size: 16px;
    color: gray;
  }

  .kilimanjaro_widget a {
     text-decoration: none;
    color: gray;
    display: inline-block;
    font-size: 13]px;
    margin: 3px;
    padding: 7px 12px;
  }
  .kilimanjaro_links a:hover {
    color: orange;
  }
  .conta {
    line-height: 10px;
    margin: 15px;
  }

  .kilimanjaro_links a {
   
    
     font-style: normal;
    font-weight: normal;
    font-size: 19px;
    line-height: 16px;
    
    color: #FFFFFF;
    
    
    margin-bottom: 5px;
    text-decoration: none;
    padding-bottom: 10px;
  }
  .kilimanjaro_social_links a:hover {
    color: orange;
  }
   
  .foo_top_header_one {
    background-color: #15151e;
    color: #fff;
  }
  .section_padding_100_70 {
    padding-top: 100px;
    padding-bottom: 70px;
  }
  .foo_top_header_one {
    color: #fff;
  }
  .kilimanjaro_part {
    margin-bottom: 30px;
  }
  .foo_top_header_one .kilimanjaro_part > h5 {
    color: #fff;
  }
  .kilimanjaro_part h4,
  .kilimanjaro_part h5 {
    margin-bottom: 30px;
  }
  .kilimanjaro_single_contact_info > p,
  .kilimanjaro_single_contact_info > h5,
  .kilimanjaro_blog_area > a,
  .foo_top_header_one .kilimanjaro_part > p {
    color: rgba(255, 255, 255, 0.5);
  }
  p,
  ul li,
  ol li {
    font-weight: 300;
  }
  ul {
    margin: 0;
    padding: 0;
  }
  .kilimanjaro_bottom_header_one {
    background-color: #111;
  }
  .section_padding_50 {
    padding: 50px 0;
  }
  .kilimanjaro_bottom_header_one p {
    color: #fff;
    margin: 0;
  }
  p,
  ul li,
  ol li {
    font-weight: 300;
  }
  .kilimanjaro_bottom_header_one a {
    color: inherit;
    font-size: 18px;
  }
  a,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 400;
  }
  .m-top-15 {
    margin-top: 15px;
  }
  ul {
    margin: 0;
    padding: 0;
  }

  .kilimanjaro_widget > li {
    display: inline-block;
  }
  p,
  ul li,
  ol li {
    font-weight: 300;
  }
  ol li,
  ul li {
    list-style: outside none none;
  }

  ul {
    margin: 0;
    padding: 0;
  } 
  .kilimanjaro_links a { 
    display: block;
    font-size: 13px;
    margin-bottom: 5px;
    padding-bottom: 10px;
  }
  .kilimanjaro_links a {
    color: rgba(255, 255, 255, 0.5);
    font-size: 18px;
    margin: 10px;
  }
  top-15 {
    margin-top: 15px;
  }
  .foo_top_header_one .kilimanjaro_part > h5 {
    color: #fff;
  }
  .kilimanjaro_part h4,
  .kilimanjaro_part h5 {
    margin-bottom: 30px;
  }
  .kilimanjaro_social_links > li {
    display: inline-block;
  }
  p,
  ul li,
  ol li {
    font-weight: 300;
  }
  .kilimanjaro_blog_area .kilimanjaro_date {
    color: #27ae60;
    font-size: 18px;
    margin-bottom: 5px;
  }
  .kilimanjaro_blog_area > p {
    color: rgba(255, 255, 255, 0.5);
    line-height: 1.3;
    margin-bottom: 0;
  }
  
  }
  .kilimanjaro_thumb {
    left: 0;
    position: absolute;
    top: 0;
    width: 75px;
  }
  .kilimanjaro_links a i {
    padding-right: 10px;
  }
  /* :: 18.0 Footer Area CSS */

  .footer_area {
    position: relative;
    z-index: 1;
  }
  .footer_bottom p > i,
  .footer_bottom p > a:hover {
    color: orange;
  }

  .social_links_area {
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding: 50px 0 30px 0;
    text-align: center;
    position: relative;
    z-index: 1;
  }
  .social_links_area > a:hover {
    color: #27ae60;
  }

  .inline-style .social_links_area > a:hover {
    background-color: transparent;
    color: #27ae60;
    border: 0px solid transparent;
  }
  .last {
    text-align: center;
    color: white;
    font-size: 12px;
    margin-bottom: 0px;
    padding-top: 40px;
  }
  
  .kilimanjaro_social_links a:hover {
    color: orange;
  }
  .kilimanjaro_social_links {
    margin: 0px;
  }
  .kilimanjaro_social_links a {
    border: 1px solid #333;
    border-radius: 6px;
    color: #888;
    display: inline-block;
    text-decoration: none;
    font-size: 13px;
    margin: 2px;
    padding: 7px 12px;
  }
`
