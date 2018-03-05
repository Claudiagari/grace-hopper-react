import React, { Component } from 'react';
import './css/index.css';
import image from './images/imagen1.jpg'

class Asite extends Component {
  render() {
    return (
      <div className="summary">
      <table className="summary-table">
      <thead>
        <tr>
          <th colSpan="2">Grace Murray Hopper</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan="2"><img src={image}  alt="Grace Hopper" className="photo"/>
          <p>Rear Admiral Grace M. Hopper, 1984</p>
          </td>
        </tr>
        <tr>
          <th>Nickname(s)</th>
          <td>"Amazing Grace"</td>
        </tr>
        <tr>
          <th>Born</th>
          <td>December 9, 1906
              New York City, New York, U.S.
          </td>
        </tr>
        <tr>
          <th>Died</th>
          <td>January 1, 1992 (aged 85)
              Arlington, Virginia, U.S.
          </td>
        </tr>
        <tr>
          <th>Allegiance</th>
          <td> <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/35px-Flag_of_the_United_States.svg.png" alt="EEUU"/>United States of America
          </td>
        </tr>
        <tr>
          <th>Service/branch</th>
          <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Flag_of_the_United_States_Navy.svg/35px-Flag_of_the_United_States_Navy.svg.png" alt="EEUU navy"/>United States Navy
          </td>
        </tr>
        <tr>
          <th>Years of service</th>
          <td>1943–1966, 1967–1971, 1972–1986
          </td>
        </tr>
       
      </tbody>
    </table>
      </div>
              );
            }
          }
          
          export default Asite;
