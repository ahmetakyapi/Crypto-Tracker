import React from 'react'
import styled from "styled-components";

const Header = () => {
    return (
        <Head>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <Logo href="">
                Crypto<span>Tracker</span>
            </Logo>
        </Head>
    )
}
const Head = styled.div`
  padding: 0 1rem;  
  background: antiquewhite;
`;

const Logo = styled.div `
  padding: 0.8rem 0;
  color: #7b7fda;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.5rem;
  span {
    font-weight: 500;
    font-size: 1.3rem;
    color: darkgray;
  }
`

export default Header
