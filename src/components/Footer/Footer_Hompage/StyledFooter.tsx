import styled from "styled-components";

export const StyledFooterHomePage = styled.div`
    .container_footer
    {
        width: auto;
        min-height : 15em;
        display: flex;
        flex-direction: row;
        .content_footer{
            width:30% ;
            margin:1em;
            min-height: 17em;
            .logo {
                display: block;
                margin-left: auto;
                margin-right: auto;
              }
        }
    }
    @media(max-width :800px)
    {
        .container_footer{
            display: flex;
            flex-direction: column;
            align-items: center;
            .content_footer{
                width:30% ;
                margin:1em;
            }
        }
       
    }
   
`;