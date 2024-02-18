import { useState, useEffect } from 'react';
import Logout from '@/components/Logout';
import axios from 'axios';
import ServerList from '@/components/ServerList';
import { useTranslation } from 'react-i18next';
import TranslateMenu from '@/components/TranslateMenu';
import { Container } from 'react-bootstrap';


const Dashboard = () => {
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

export default Dashboard;