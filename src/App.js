import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [body, setBody] = useState('');

  useEffect(() => {
    axios
        .get('http://localhost:8000/api')
        .then((response) => {
            const data = response.data
            setBody(data['body']);
        })
        .catch(error => {
        console.error(error);
        });
    }, [])

    return (
        <div>
            <h1>{body}</h1>
        </div>
    );
}

export default App;
