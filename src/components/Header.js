import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        <a>
          <img src="/images/home-icon.svg" />
          <span>HOME</span>
        </a>
        <a>
          <img src="/images/search-icon.svg" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="/images/search-icon.svg" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src="/images/original-icon.svg" />
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg" />
          <span>MOVIES</span>
        </a>
        <a>
          <img src="/images/series-icon.svg" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg  src="https://lh3.googleusercontent.com/-k_rGwch8HPk/W-5nPiHdG2I/AAAAAAAAAIY/D1xpAk2HqTsZsyU5pjdT6NMH0sOwOUXJwCEwYBhgLKtMDABHVOhw-xwgy4sOBWpi3F-9vV1AumK1apm17wKMO3OwAseOAPqzXV4xtVwjHyAN1XNPUEFaYCseAL3D464sSSSxyrQ_OkisxpFPHzbfxj7B6LGpzirnWJ7OxF3nQG_KfsAd9RHFbh8gvJ-6zT7YGOWRyNvfAQTiFf1rnJAAyUzEWkZT-akn9WYO_W7sTEF8UxNByWARsteNXWLqqpxl4E-YtlHjpxMfTfIC0S7a-L2MvjkiVeelGUbAtXcH23YevBdlB0SUbE5K8sedroz14xJjD587ID1xwnRgyszkv5M5WpqeWxJtMlyo9UMR4EE5fTa3RohqzZQQE0oa84rZnA6qbBY8wHKZ4VNfCWZibS6NX2C6bSNRf0b_hAuDmOOBDS1mKBPsvJeodX9tHWEIMH8tsETEMOXwvZrrlfBr90wH3OQMp2ons2BwdMqXg8HCCpJ5TZjnHfTAUpul6c1H6BxTCLOcT_wytnL7hkLGS173TH78zUgN7iQdFEsXWlwSpMRVe1zgZIb-q3Yq0uf3h7ep44JtZjIywE3WUpIQbokWl7HMJnVH9A5eqkrx-aFWFkQ5K5MUXT-Y-n_kqO23eSvOdrN0IPOhjiaL1DatNuUGtxc4wwIelhgY/w280-h278-p/8C9DC717-C80D-4776-9579-A7DF39389577.jpg"/>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  height:70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
`

const Logo = styled.img`
  width: 80px;
`

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    
    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`