import React from 'react';

import { motion } from 'framer-motion';
import Card from '../../components/card';
import Quizze from '../../components/quizze';
import { LeftCardsContainer, QuizzesContainer } from '../../styles/Containers';
import GoToHomeCard from '../../nodes/go_to_home_card';

const MeusQuizzes: React.FC = () => {
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

  return (<>
    <LeftCardsContainer>
      <GoToHomeCard/>
    </LeftCardsContainer>

    <Card cardTitle='Seus quizzes'>
      <QuizzesContainer
        variants={container}
        initial="initial"
        animate="visible"
      >
        {
          [0, 1].map(number =>
            <motion.div key={number} variants={quizze}>
              <Quizze
                id={`${number}`}
                title='O quanto você sabe sobre programação?'
                description='In code we trust!'
                imageUrl='http://getwallpapers.com/wallpaper/full/1/c/f/145265.jpg'
                owner={true}
              />
            </motion.div>
          )
        }
      </QuizzesContainer>
    </Card>
  </>);
}

export default MeusQuizzes;