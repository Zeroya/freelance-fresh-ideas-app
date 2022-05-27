import React, { useState, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Card, ListGroupItem } from 'react-bootstrap';

const SlideList = (props) => {

  const slideIdeas = props.slideIdeas;
  const setslideIdeas = props.setslideIdeas;

  const completedIdeas = props.completedIdeas;
  const setcompletedIdeas = props.setcompletedIdeas;

  const achievments = props.achievments;
  const setAchievments = props.setAchievments;

  const addToCompletedPart = (card) => {
    const exist = achievments.find((x) => x.type === card.detailData.type);

    setslideIdeas(slideIdeas.filter((el) => el.detailData.key !== card.detailData.key));

    if (exist) {
      setAchievments([...achievments]);
    } else {
      setAchievments([...achievments, { ...card.detailData }]);
    }

    setcompletedIdeas([...completedIdeas, { ...card.detailData }]);
  }


  return (
    <div>
      <h2 style={{ marginTop: '1rem', textAlign: "center" }}>Ideas in my list</h2>
      <div style={{ marginLeft: '26vh', marginRight: '2em', marginTop: '1rem' }} >
        <Splide options={{
          rewind: true,
          width: 1240,
          perPage: 3,
          arrows: true,
          pagination: false,
          drag: 'free',
          gab: '2rem',

        }}>
          {slideIdeas?.map((slide) => {
            return (
              <SplideSlide key={slide.detailData.key}>
                <Card onClick={() => addToCompletedPart(slide)} border="info" style={{ width: '20rem', textAlign: "center" }}>
                  <Card.Header>{slide.detailData.activity}</Card.Header>
                  <ListGroupItem>Participants: {slide.detailData.participants}</ListGroupItem>
                  <ListGroupItem>Price: {slide.detailData.price * 15}$</ListGroupItem>
                  <Card.Body>
                    <Card.Text >
                      <b> {slide.detailData.type}</b>
                    </Card.Text>
                  </Card.Body>
                </Card>

              </SplideSlide>
            )
          })}
        </Splide>
      </div>
    </div>
  );
};

export default SlideList;