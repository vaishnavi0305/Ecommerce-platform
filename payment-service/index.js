const express = require('express');
const app = express();
const PORT = 3004;

app.use(express.json());

app.get('/health', (req, res) => {
  res.send('Payment service is healthy');
});

app.post('/pay', (req, res) => {
  const { userId, amount } = req.body;
  if (!userId || !amount) {
    return res.status(400).json({ success: false, message: 'Missing parameters' });
  }

  // Simulate payment logic
  res.status(200).json({
    success: true,
    message: `Payment of ₹${amount} for user ${userId} processed successfully`,
  });
});

app.listen(PORT, () => {
  console.log(`Payment service running on port ${PORT}`);
});

