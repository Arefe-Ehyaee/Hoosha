export default async function handler(req, res) {
    if (req.method === "POST") {
      try {
        const response = await fetch("http://193.149.164.131:32336/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(req.body), // Forward the request body
        });
  
        const data = await response.json();
        res.status(response.status).json(data); // Send back the response
      } catch (error) {
        res.status(500).json({ error: "Failed to connect to the API." });
      }
    } else {
      res.status(405).json({ error: "Method not allowed." });
    }
  }
  