import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import styledComponents from 'styled-components';

const Ideas = (props) => {


  const ideas = props.ideas;
  const setIdeas = props.setIdeas;

  const slideIdeas =  props.slideIdeas;
  const setslideIdeas = props.setslideIdeas;
  const slideIdeasIndex = JSON.parse(localStorage.getItem("cardsSlider"));

  const [changeItem, setChangeItem] = useState(7);

  console.log(slideIdeas);
  
  const fetchDetails = async () => {

    const check = localStorage.getItem('cardsUpAmount');

    if (check && changeItem === ideas.length) {
      setIdeas(JSON.parse(check));
    } else {
      const data = await fetch(`https://www.boredapi.com/api/activity/`);
      const detailData = await data.json();
      if (ideas.length <= changeItem) {
        setIdeas([...ideas, { detailData }]);
      }
      localStorage.setItem("cardsUpAmount", JSON.stringify(ideas));
    }
  }

  useEffect(() => {
    fetchDetails();
  }, [ideas, changeItem])



  const removeCards = () => {
    setChangeItem(changeItem - 4);
    for (let i = 0; i < 4; i++) {
      let a = ideas.pop();
    }
    if (changeItem <= 3) {
      setChangeItem(3)
    }
    setIdeas(ideas);
    localStorage.setItem("cardsUpAmount", JSON.stringify(ideas));
  }

  const addToSliderArray = (card) => {
    const exist = slideIdeas.find((x) => x.detailData.key === card.detailData.key);
    if (exist) {
      setslideIdeas([...slideIdeas]);
    } else {
      setslideIdeas([...slideIdeas, { ...card }]);
    }

  }

  return (
    <div>
      <h2 style={{ marginTop: '1rem', textAlign: "center" }}>Choose fresh ideas to do</h2>
      <div style={{ marginLeft: 'auto', marginRight: 'auto', width: "12rem", marginTop: '1rem' }}>
        <Button onClick={() => removeCards()} style={{ marginRight: "1rem" }} variant="outline-secondary">-4 cards</Button>{' '}
        <Button onClick={() => setChangeItem(changeItem + 4)} variant="outline-success">+4 cards</Button>
      </div>

      <Grid>
        {ideas.length === changeItem + 1 ? ideas.map((el) => {
          return (
            <Card onClick={() => addToSliderArray(el)} key={el.detailData.key} border="info" style={{ width: '20rem', textAlign: "center" }}>
              <Card.Header>{el.detailData.activity}</Card.Header>
              <Card.Body>
                <Card.Text >
                  <b> {el.detailData.type}</b>
                </Card.Text>
              </Card.Body>
            </Card>

          )
        })
          : <div style={{ textAlign: "center" }}><h2>Loading...</h2></div>}
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

export default Ideas;
