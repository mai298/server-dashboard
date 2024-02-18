import React from 'react';
import { auth } from '../firebase';
import { useRouter } from 'next/navigation';
import { FiLogOut } from "react-icons/fi";
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';


export default function Logout () {
    const router = useRouter();
    const { t, i18n } = useTranslation();



  const handleLogout = async () => {

    try {
      await auth.signOut();
      console.log('Logout successful');
      router.push("/");
    } catch (error) {
      console.error('Logout failed:', error.message);
    }
  };

  return (
    <div>
<Button  onClick={handleLogout} style={{
  backgroundColor: "#dc2626",
  color: "#ffffff",
  display: "flex",
  border:"none",
  alignItems: "center" ,
  padding: "0.5rem 1rem" ,
  borderRadius: "0.375rem ",
  cursor:"pointer",
  float:"right",
  top:0,
  }}>
<FiLogOut />
  {t("Logout")}
</Button>  
  </div>
  );

};

