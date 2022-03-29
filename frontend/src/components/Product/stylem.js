import styled from 'styled-components'

export const StoriesStyle = styled.div`

 
 
 

.card {
    background: white;
    text-decoration: none;
    color: #444;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    min-height: 100%;
    
    // sets up hover state
    position: relative;
    top: 0;
    transition: all .1s ease-in;
      
    &:hover {
      top: -2px;
      box-shadow: 0 4px 5px rgba(0,0,0,0.2);
    }
    
    
    
    h1 {
        font-size: 13px;
        font-weight: light;
        color: black;
        text-transform: uppercase;
        padding:13px;
        
    }
    
   
     
 

    


   
    
    
`