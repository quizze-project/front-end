import React from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

import Card from '../../components/card';
import Quizze from '../../components/quizze';
import FilterCard from '../../nodes/filter_card';
import { Search } from '../../store/reducers/SearchReducer';
import { LeftCardsContainer, QuizzesContainer } from '../../styles/Containers';

const FakeQuizzeList = require('../../FakeQuizzeList.json');

interface IndexQuizze {
  id: number;
  title: string;
  description: string;
  image: string;
  questionsAmount: number;
  registrationRequired: boolean;
}

const Index: React.FC = () => {
  const { text, registrationRequired, questionsAmount } = useSelector<any, Search>(state => state);

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const quizzeVariants = {
    initial: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1 }
  };

  return (
    <>
      <LeftCardsContainer>
        <FilterCard/>
      </LeftCardsContainer>
      
      <Card cardTitle='Quizzes disponíveis' style={{ flex: 1 }}>
        <QuizzesContainer
          variants={container}
          initial="initial"
          animate="visible"
        >
          {
            (FakeQuizzeList as IndexQuizze[]).filter(quizze => {
              if(text !== "") {
                if(quizze.title.indexOf(text) === -1 || quizze.description.indexOf(text) === -1)
                  return null;
              }

              if(quizze.questionsAmount < questionsAmount) return null;
              if(!quizze.registrationRequired && registrationRequired) return null;

              return quizze;
            }).map(quizze =>
              <motion.div key={quizze.id} variants={quizzeVariants}>
                <Quizze
                  id={`${quizze.id}`}
                  title={quizze.title}
                  description={quizze.description}
                  imageUrl={quizze.image}
                />
              </motion.div>
            )
          }
        </QuizzesContainer>
      </Card>
    </>
  );
}

export default Index;