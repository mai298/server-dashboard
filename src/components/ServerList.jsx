import { ListGroup,Card, Button, Col, Container, Row } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(3),
  },
  title: {
    background: 'black',
    color: 'white',
    padding: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  ipAddress: {
    color: 'black',
  },
}));

const ServerList = ({ servers }) => {
  const classes = useStyles();

  const chartData = servers.map((server) => ({
    name: server.name,
    responseTime: server.responseTime,
    uptime: server.Uptime,
  }));

  return (
    <>
      <Container className="mx-auto">
      <Row>
        <Col>
        <BarChart  width={900} height={400} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" orientation="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="responseTime" fill="#8884d8" />
          <Bar yAxisId="right" dataKey="uptime" fill="#82ca9d" />
        </BarChart>
        </Col>

        <Col xs={1} md={2} lg={3} className='mx-auto'>
        
             <div  style={{ display: 'flex', flexWrap: 'wrap' ,gap:"10px",marginTop:"50px"}}  >

      {servers.map((server) => (
           <Card key={server.id}  style={{backgroundColor:"#fff", width: '18rem' ,marginBottom:"20px",boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
      <Card.Body>
        <Card.Title className={classes.title}>{server.name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush" >
        <ListGroup.Item className={classes.ipAddress}>IP Address: {server.IPAddress}</ListGroup.Item>
        <ListGroup.Item>responseTime: {server.responseTime}</ListGroup.Item>
        <ListGroup.Item>Uptime: {server.Uptime} hours</ListGroup.Item>
      </ListGroup>
    </Card>
     
        ))}
</div>

</Col>


        </Row>
    </Container>

    </>
  );
};

export default ServerList;

