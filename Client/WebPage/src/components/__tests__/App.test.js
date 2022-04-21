import {render , screen ,cleanup}   from '@testing-library/react';
import App from '../../App.js';
import DisplayEvent from '../../pages/DisplayEvent.js';
import Events from '../../pages/Events.js';
import '@testing-library/jest-dom/extend-expect';
// we checked functunality + api testing 

// now we are checking rendering


//unit testing  for various componens rendering

test('should render App component',()=>{
    
    render(<App/>);
 
    const app = screen.getByTestId('app');
    expect(app).toBeInTheDocument();
})



test('should render display component',()=>{

    
    render(<DisplayEvent/>);
 
    const app1 = screen.getByTestId('app1');
    expect(app1).toBeInTheDocument();
})

test('should render event component',()=>{
    render(<Events/>);
 
    const app2 = screen.getByTestId('app2');
    expect(app2).toBeInTheDocument();
})
