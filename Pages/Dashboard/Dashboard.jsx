import { useState, useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { Container } from 'react-bootstrap';
import TranslateMenu from '../../components/TranslateMenu';
import Logout from '../../components/Logout';
import ServerList from '../../components/ServerList';


export default function Dashboard () {
  const [servers, setServers] = useState([]);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('/api/server');
      console.log(response);
      const data = response.data;
      setServers(data);
    };

    fetchData();
  }, []);

  return (
    <section className='dash'>

    <Container>
      <TranslateMenu/>
      <Logout/>

      <h2 style={{ textAlign: 'center',fontSize:'30px' }}> {t("Server Status Dashboard")}</h2>

      <ServerList servers={servers} />

    </Container>
    </section>

  );
};

