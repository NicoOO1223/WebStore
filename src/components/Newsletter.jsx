import React, { useState } from 'react';
import './Newsletter.css';
import bg from './Throwie/Newsletter.png'; 
import skater from './Throwie/Skater.jpg'


function Newsletter() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className='newsletter'>
            <img src={bg} className='newsletter-background' onClick={toggle} alt="Newsletter" />
            
            {isOpen && (
                <div className='newsletter-container'>
                    <img src={skater} className='newsletter-image'></img>
                    <div className='newsletter-content'>
                        <span className='close' onClick={toggle}>&times;</span>
                        <h2>Wez zasubskrybuj ziom!</h2>
                        <p>Dołącz do nas - zapisz sie do newslettera aby byc na bieżąco</p>
                        <form>
                            <input type='email' placeholder='Wpisz swój adres e-mail' required />
                            <button type='submit'>Zapisz sie</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Newsletter;
