import './StatusPage.css'
import BackgroundMusic from '../BackgroundAudio/BackgroundAudio';
import { useState } from 'react';
function StatusPage() {
    const [status, setStatus] = useState(false);
    const fetchData = async () => {
        try {
          const response = await fetch(`https://rafaelcalves-animated-rotary-phone-r4w9gqvvgqpfp4r5-3000.preview.app.github.dev/`);
          const jsonData = await response.json();
          setStatus(jsonData.data);
        } catch (error) {
          console.error('Erro na requisição:', error);
        }
      };

    setInterval(fetchData, 1000);
    return (
        <div class={status ? 'status' : 'ok'}>
        
        {
            status ? <BackgroundMusic></BackgroundMusic> : ''
        }
       

        </div>
    )
}

export default StatusPage;