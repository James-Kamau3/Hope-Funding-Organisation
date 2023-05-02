import React from 'react'

function Header() {
  return (
    <div className='head'>
        <h1 id = 'h1'>Hope Funding Organisation</h1>
        <div class="container">
        <button class="btn">Sign In</button>
        <button class="btn">Log In</button>
    </div>
    
    <article id='art'>
        Hope Crowd Funding Campaigns
    </article>
    <p id='txt'>
    We’ve helped people from all over Kenya crowdfund <br></br>
    the things that matter to them most. From personal fundraisers, <br></br>
    to acts of kindness, emergency relief, and more. <br></br>
    Create your campaign for free!
    </p>
      
    </div>
  )
}

export default Header;
