import { MenuItem } from '@mui/material';
import React, { useState } from 'react'
import { useTranslation,I18nextProvider } from 'react-i18next';
import i18n from '../i18n/i18n';

export default function TranslateMenu() {

    const [selectedIndex, setSelectedIndex] = useState(1);
    const { t, i18n } = useTranslation();
    const [anchorEl, setAnchorEl] = useState(null);
    
    
    const options = [
      'AR',
      'EN'
    ];
    
    const handleClose = () => {
      setAnchorEl(null);
    };
    
    const handleMenuItemClick = (event, index) => {
      setSelectedIndex(index);
      setAnchorEl(null);
      if (index === 0) {
        i18n.changeLanguage('ar');
        i18n.dir("rtl")
      } else if (index === 1) {
        i18n.changeLanguage('en');
        i18n.dir("en")
      }
    
      document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    
      handleClose();
    
    };
    

  return (
    <div>
          {options.map((option, index) => (
          <MenuItem
          sx={{fontSize:"14px", width: "7rem", height: "2rem" }}
            key={option}
            className='ms-3 mt-3'
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
    </div>
  )
}
