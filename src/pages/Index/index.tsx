import { motion } from 'framer-motion';
import React from 'react';
import Card from '../../components/card';
import Quizze from '../../components/quizze';
import { QuizzesContainer } from './style';

const Index: React.FC = () => {
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const quizze = {
    initial: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1 }
  };

  return (
    <Card cardTitle='Quizzes disponíveis'>
      <QuizzesContainer
        variants={container}
        initial="initial"
        animate="visible"
      >
        {
          [0, 1, 2, 3, 4].map(number =>
            <motion.div key={number} variants={quizze}>
              <Quizze
                title='O quanto você sabe sobre programação?'
                description='In code we trust!'
                imageUrl='http://getwallpapers.com/wallpaper/full/1/c/f/145265.jpg'
              />
            </motion.div>
          )
        }
      </QuizzesContainer>
    </Card>
  );
}

export default Index;