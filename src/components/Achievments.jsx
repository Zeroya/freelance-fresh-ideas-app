import React from 'react';
import styledComponents from 'styled-components';

const Achievments = (props) => {

  const achievments = props.achievments;

  return (
    <div>
      <h2 style={{ marginTop: '1rem', textAlign: "center" }}>Achievements</h2>
      <Grid style={{ marginLeft: '24vh', marginRight: '15vh', marginTop: '1rem' }}>
        {achievments && achievments?.map((el) => {
          return (
            <div key={el.key} style={{ width: '10em', height: '10em', background: "white", borderRadius: "50%", position: 'relative' }}>
              <h5 style={{ position: 'absolute', top:"50%",  transform: 'translate(-50%, -50%)', left:"50%"}}>
                {el.type}
              </h5>
            </div>
          )

        }
        )}
      </Grid>
    </div>
  );
};


const Grid = styledComponents.div`
display:grid;
grid-template-columns: repeat(auto-fit, minmax(17rem,1fr));
grid-gap:3rem;
margin:2rem ;
`;

export default Achievments;