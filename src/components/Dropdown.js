import React from 'react'
import styled from 'styled-components'

const Dropdown = () => {
  const changeLanguage = lang => {
    if (typeof window.localStorage !== 'undefined') {
      localStorage.setItem('locale', lang)
    }
    window.location.reload()
  }
  const locale =
    typeof window.localStorage !== 'undefined'
      ? localStorage.getItem('locale')
      : 'en'

  return (
    <SelectSection>
      <div className="dropdown">
        <button className="dropbtn">{locale}</button>
        <div className="dropdown-content">
          <FlagButton
            className={locale === 'es' ? 'active' : ''}
            onClick={() => {
              changeLanguage('es')
            }}
          >
            ES
          </FlagButton>

          <FlagButton
            className={locale === 'en' ? 'active' : ''}
            onClick={() => {
              changeLanguage('en')
            }}
          >
            EN
          </FlagButton>
        </div>
      </div>
    </SelectSection>
  )
}

const SelectSection = styled.div`

  .dropbtn {
    height: 40px;
    width: 60px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    text-decoration: none;
    padding: 0px;
    text-transform: uppercase;
    cursor: pointer;
    font-size: 14px;
    line-height: 21px;
    color: #fffbf2;
    text-transform: uppercase;
    font-family: 'Poppins';
    font-weight: 700;
    border: 0;
    background: transparent;

  }

  .dropdown {
    position: relative;

    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background: #131313;
    min-width: 100px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 150;
    right: 0;
    left:20px;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }
`

const FlagButton = styled.button`
  padding: ${props => (props.mode === 'large' ? '0 20px' : '20px 0')};
  display: flex;
  align-items: center;
  font-size: 11px;
  line-height: 17px;
  letter-spacing: 0.02em;
  color: #fffbf2;
  text-transform: uppercase;
  font-family: 'Poppins';
  font-weight: 700;
  padding: 12px 16px;
  display: block;
  border: 0;
  background: transparent;
  cursor: pointer;

`

export default Dropdown
