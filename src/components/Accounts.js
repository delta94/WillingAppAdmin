import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import data from "./Data.json";
import Users from "../users.json";


export default class Accounts extends Component {
  render() {
    return (
      <div>
      
        <div className="container">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col"> ID </th> <th scope="col"> Name </th>
                <th scope="col"> Telephone </th> <th scope="col"> Status </th>
                <th scope="col"> Last conection </th>
                <th scope="col"> Create date </th> <th scope="col"> Send </th>
              </tr>
            </thead>
            <tbody>
              {Users.map((element) => {
                return (
                  <tr>
                    <td> {element.id} </td> <td> {element.name} </td>
                    <td> {element.phone} </td> <td> </td>
                    <td> {element.updateDate} </td>
                    <td> {element.createDate} </td>
                    <td>
                      <button className="inTableButton"> Send </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}