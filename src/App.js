import React from 'react';
import Review from './Review';
function App() {
  const currentYear = new Date().getFullYear()
  const yearTxt = currentYear === 2022 ? '2022' : '2022 - ' + currentYear

  return (
    <main>
      <secttion className='conatiner'>
        <div className='title'>
          <h2>Vadivelu Gems</h2>
          <div className='underline'></div>
        </div>
        <Review />
      </secttion>
      <footer class='footer'>© {yearTxt} Aravind G - Portfolio Project</footer>
    </main>
  )
}

export default App;
