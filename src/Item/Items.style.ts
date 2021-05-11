import styled from 'styled-components';

export const Wrapper = styled.div`

    background-color: white;
    border: 1px solid #ddd;
    border-radius: auto;
    margin: auto;
    padding: auto;
     width: inherit;
    
    Grid{
        
        container
        direction="row"
        justify="center"
        alignItems="center"
    }

    img{              
        border-radius: 8px;
        object-fit: cover;
        padding: 20px;
        width: 300px;        
        margin: auto;
        height: 300px;     
        objectFit: 'cover';   
    }
    
  Button{
    border-radius: 0 0 20px 20px;
    padding: auto;
    margin: auto;
    width: auto;
  }

`;