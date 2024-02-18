
async function handler(req, res) {
  // Fetch or access server data here (depending on your source)
  const serverData = await fetch('https://65d0c0f3ab7beba3d5e3a053.mockapi.io/api/servers'); // Example for mock API
  const status = serverData.status; // Extract server status information

  if (status === 200) {
    const jsonData = await serverData.json();
      res.status(200).json(jsonData);
      } else {
    res.status(500).json({ error: 'Failed to fetch server data' });
  }
}

export default handler;