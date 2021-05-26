import styled from 'styled-components';


export const StyledCategory = styled.div`
 .container_category{
     display:flex;
     justify-content : center;
     margin :1em;
     height :16em;
    .category
    {
     height : auto;
     width : 30% ;
     margin : 1em;
     position :relative;
    
    }
    .image_category{
        height: auto;
        width: 100%;
    }
    .btn_category
    {
        position: absolute;
        left: 9em;
        top: 9em;
        background-color: #ea1212;
        color: white;
        border: aliceblue;
        height: 3em;
        width: 9em;
        cursor : pointer;
    }
    .btn_category:hover
    {
        background-color: #ff5a5a;

    }
    
 }


`;