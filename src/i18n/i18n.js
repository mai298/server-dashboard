import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


const resources = {
  en: {
    translation:{
    },
  },
  ar: {
    translation: {
      "Sign In":"تسجيل الدخول",
      "Sign In with Google":"تسجيل الدخول باستخدام جوجل",
      "Login":"تسجيل الدخول",
      "Email":"البريد الإلكتروني",
      "Email address":"البريد الإلكتروني",
      "Enter email":"أدخل البريد الإلكتروني",
      "Username":"اسم المستخدم",
      "Password":"كلمة المرور",
      "Don't have an account?":"ليس لديك حساب؟" ,
      "Already have an account?":"هل لديك حساب بالفعل؟",
      "Sign Up" :"انشاء حساب",
      "Name":"الاسم",
      "Server Status Dashboard":"لوحة حالة الخادم",
      "Logout":"تسجيل الخروج"

     
    },
  },

  
};



i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  
  });

export default i18n;
