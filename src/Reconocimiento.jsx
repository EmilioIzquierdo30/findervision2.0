import React, { useState } from 'react';

const Reconocimiento = () => {
    const [file, setFile] = useState(null);
    const [result, setResult] = useState(null);

    const handleFileChange = (e) => setFile(e.target.files[0]);

    const recognizePlant = async () => {
        const formData = new FormData();
        formData.append('image', file);

        const response = await fetch('https://api-reconocimiento.com/recognize', {
            method: 'POST',
            body: formData
        });
        const data = await response.json();
        setResult(data);
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={recognizePlant}>Reconocer Planta</button>
            {result && <div>{result.name}</div>}
        </div>
    );
};

export default Reconocimiento;
