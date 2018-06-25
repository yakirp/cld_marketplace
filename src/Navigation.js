import React, { Component } from 'react';
import { Route, Link} from 'react-router-dom';
import './App.css';

class Navigation extends Component {
  render() {
    return (
      <div>
      	<table >
	      	<tbody>
	      		<br></br>
	      		<br></br>
	      		<br></br>
	        	<tr className={'ptm'}>
	            	<td className={'padl'}>
	            		<div><h3 className={'textL'}>A new and better way to acquire, engage and retain customers</h3></div>
	            		<div><h3 className={'textS'}>Modern products for sales, marketing and support to connect with customers and grow faster.</h3></div>
	            	</td>
	                <td className={'centerR'}>
	                	<img src='http://res.cloudinary.com/yakir/image/upload/c_fill,f_auto,h_428,q_auto,w_611/fnuwyn9waa4q9iolq9zv'/>
	                </td>
	                <td></td>
	            </tr>
	        </tbody>
       </table>
      </div>
    );
  }
}

export default Navigation;
