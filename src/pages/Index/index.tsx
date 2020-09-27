import React from 'react';
import Card from '../../components/card';
import Quizze from '../../components/quizze';
import { QuizzesContainer } from './style';

const Index: React.FC = () => {
  return (
    <Card cardTitle='Quizzes disponíveis'>
      <QuizzesContainer>
        {
          [0, 1, 2, 3, 4].map(number =>
            <Quizze
              key={number}
              title='O quanto você sabe sobre programação?'
              description='In code we trust!'
              imageUrl='http://getwallpapers.com/wallpaper/full/1/c/f/145265.jpg'
            />
          )
        }
      </QuizzesContainer>
    </Card>
  );
}

export default Index;