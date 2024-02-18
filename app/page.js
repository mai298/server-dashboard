"use client"; // This is a client component 👈🏽

// src/app/page.js
import React, { useEffect, useState } from 'react';
import { auth, database } from '../firebase';
import { useRouter } from 'next/navigation';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import ServerList from '../components/ServerList';
import { I18nextProvider, useTranslation } from 'react-i18next';
import { MenuItem } from '@mui/material';
import TranslateMenu from '../components/TranslateMenu';
import i18n from '../i18n/i18n';
import SignUpComp from '../components/SignUpComp';



const Home = () => {
    const router = useRouter();

  return (
    <I18nextProvider i18n={i18n}>
    <div>
<TranslateMenu/>
<SignUpComp router={router}/>
    </div>
    </I18nextProvider>
  );
};

export default Home;

