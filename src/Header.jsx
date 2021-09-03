import React from 'react';
import './Header.css';

function Header() {
  return (
    <>
    <div className="header">
            <div className="header__left">
                      <h1><i>T<span className="header1__1">he</span></i> </h1>
                      <h1><i>E<span className="header1__1">nterpenurship</span></i></h1>
                      <h1><i>N<span className="header1__1">etwork</span></i></h1>
                        <img className="header__image" src="https://static.wixstatic.com/media/693073_afb102fc110744d6a04e7642ac8dca60~mv2.jpg/v1/fill/w_32%2Ch_32%2Clg_1%2Cusm_0.66_1.00_0.01/693073_afb102fc110744d6a04e7642ac8dca60~mv2.jpg"/>
            </div>
            <div className="header__med">
                    <a href="https://www.entrepreneurshipnetwork.net/"><h1 className="header__med1">  Home </h1></a>
                    <a href="https://www.entrepreneurshipnetwork.net/courses"> <h1 className="header__med2">Online Course</h1></a>
                    <a href="https://www.entrepreneurshipnetwork.net/hiring"> <h1 className="header__med2">We're Hiring </h1></a>
                    <a><h1 className="header__med2">More</h1></a>
            </div>

        
</div>

<div className="mid1">
<img className="mid1__image" src="./i1.png"/>
</div>
<br/>
<div className="mid2">
<img className="mid2__image" src="./i2.png"/>
</div>
<br/>
<div className="mid3">
<img className="mid3__image" src="./i3.png"/>
</div>
<br/>
<div className="mid4">
<img className="mid4__image" src="./i4.png"/>
<img className="mid4__image" src="./i5.png"/>
<img className="mid4__image" src="./i6.png"/>
</div>

<div className="mid5">
<img className="mid5__image" src="./i7.png"/>
</div>

<div className="mid6">
<img className="mid6__image" src="./i8.png"/>
</div>

<div className="mid7">
<img className="mid7__image" src="./i9.png"/>
</div>
<br/>
<div className="mid8">
<img className="mid8__image" src="./i10.png"/>
</div>


</>
  );
}

export default Header;
