import React from 'react';
import { Table } from 'react-bootstrap';

const Completed = ({ completedIdeas }) => {

  let date = new Date();

  return (
    <div>
      <h2 style={{ marginTop: '2rem', textAlign: "center", marginBottom:'1em' }}>Completed challenges</h2>
      <div>
      <Table striped bordered hover style={{ width:'80%', marginLeft: '18vh', marginRight: '18vh' }}> 
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Type</th>
            <th>When</th>
          </tr>
          </thead>
          <tbody>
          {
            completedIdeas.map((el) => {
              return (
                <tr>
                <td>{completedIdeas.indexOf(el)}</td>
                <td>{el.activity}</td>
                <td>{el.type}</td>
                <td>{`${date.getHours()}:${date.getMinutes()}`}</td>
              </tr>
            )
            })
          }
          
        </tbody>
        {

        }
      </Table>
      </div>
    </div>
  );
};

export default Completed;