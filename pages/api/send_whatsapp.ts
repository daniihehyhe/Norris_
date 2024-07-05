import { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

type UserRequestTimestamps = {
  [phone: string]: number;
};

const userRequestTimestamps: UserRequestTimestamps = {};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log('Received request:', req.method, req.body);

  if (req.method !== 'POST') {
    console.log('Invalid request method:', req.method);
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, phone } = req.body;

  if (!name || !phone) {
    console.log('Missing name or phone:', name, phone);
    return res.status(400).json({ message: 'Name and phone are required' });
  }

  const currentTime = Date.now();
  const oneMinute = 10  * 1000; // 1 минута в миллисекундах

  if (userRequestTimestamps[phone] && currentTime - userRequestTimestamps[phone] < oneMinute) {
    console.log('User has already sent a message in the last minute');
    return res.status(429).json({ message: 'You can only send one message per minute' });
  }

  // Обновить время последнего отправленного сообщения
  userRequestTimestamps[phone] = currentTime;

  const apiKey = process.env.CALLMEBOT_API_KEY;
  const recipientPhone = process.env.CALLMEBOT_PHONE; // Определенный номер получателя
  const message = `🔔 *Запрос на консультацию* 🔔\n\n🌐 *Сайт:* https://norris.kg/\n\n👤 *Имя:* ${name}\n📞 *Номер телефона:* ${phone}`;

  const url = `https://api.callmebot.com/whatsapp.php?phone=${recipientPhone}&text=${encodeURIComponent(message)}&apikey=${apiKey}`;

  try {
    const response = await fetch(url);
    const responseData = await response.text();
    console.log('WhatsApp message sent:', responseData);
    return res.status(200).json({ message: 'success' });
  } catch (error) {
    console.error('Error sending WhatsApp message:', error);
    return res.status(500).json({ message: 'error', error });
  }
};

export default handler;
