import React, { useReducer, useRef } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { FiTrash2, FiEdit, FiPlus, FiSave, FiX } from 'react-icons/fi';

import Card from '../../components/card';
import { LeftCardsContainer } from '../../styles/Containers';
import GoToHomeCard from '../../nodes/go_to_home_card'
import { Question, QuestionName, QuestionOptions, AnswerOptions } from './style';
import { Answer, AnswerList } from '../QuizzePage/style';
import QuizzeReducer from '../../reducers/quizze_reducer';
import { 
  doAddQuestion, doDeleteQuestion, doEditAnswer, doSaveAnswer,
  doEditQuestion, doSaveQuestion, doSelectAnswer, doAddAnswer 
} from '../../reducers/quizze_reducer/actions';

const FakeQuizze = require('../../FakeQuizze.json');

interface QuizzeParams {
  id: string | undefined;
}

const EditPage: React.FC = () => {
  const { id } = useParams<QuizzeParams>();
  const [ quizze, dispatch ] = useReducer(QuizzeReducer, FakeQuizze);
  const editingRef = useRef<HTMLInputElement>(null);

  if(!id) {
    return (
      <Redirect to="/" />
    );
  }

  if(!quizze) {
    return (<>
      <LeftCardsContainer>
        <GoToHomeCard/>
      </LeftCardsContainer>

      <Card style={{ flex: '1' }} cardSubtitle='Carregando...'/>
    </>);
  }

  return (<>
    <LeftCardsContainer>
      <GoToHomeCard/>
    </LeftCardsContainer>

    <div style={{ flex: '1' }}>
      <Card
        style={{ marginBottom: '1rem' }}
        cardTitle={`Editando Quizze`}
        cardSubtitle={quizze.name}
      >
        <div className="form-group">
          <label htmlFor="name">Nome do Quizze</label>
          <input id="name" name="name" type="text" className="custominput block" 
            defaultValue={quizze.name}
            placeholder="O quanto você sabe sobre Super Choque?"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Descrição do Quizze</label>
          <input id="description" name="description" type="text" className="custominput block" 
            defaultValue={quizze.description}
            placeholder="Será que você realmente almoçava assistindo Super Choque?"
            required
          />
        </div>
        <div className="right-align">
          <button style={{ marginRight: '10px' }} className="btn bg-red">Apagar quizze</button>
          <input type="submit" className="btn bg-green" value="Salvar"/>
        </div>
      </Card>

      <Card cardTitle="Perguntas">
        {
          quizze.questions.length === 0 ? (
            <p>Você ainda não criou perguntas para este quizze.</p>
          ) : quizze.questions.map(question => (
            <Question key={`${question.id}`}>
              {
                quizze.editingQuestion === question.id ? (
                  <input 
                    type="text"
                    className="custominput block"
                    defaultValue={question.statement}
                    style={{ marginBottom: '10px' }}
                    ref={editingRef}
                  />
                ) : (
                  <QuestionName>{question.statement}</QuestionName>
                )
              }
              <AnswerList>
                {
                  question.answers.map(answer => {
                    return quizze.editingAnswer === answer.id ? (
                      <Answer
                        key={answer.id}
                        checked={question.checkedAnswer === answer.id}
                        checkedcolor='green'
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}
                      >
                        <input type="text" style={{ flex: '1' }}
                            className="custominput" defaultValue={answer.answer}
                            ref={editingRef}
                        />
                        <AnswerOptions>
                          <div tooltip-text="Cancelar" onClick={e => {
                            e.stopPropagation();
                            dispatch(doEditAnswer(question.id, answer.id, false));
                          }}>
                            <FiX size={18} cursor='pointer' color='var(--black)'/>
                          </div>
                          <div tooltip-text="Salvar" onClick={e => {
                            e.stopPropagation();
                            dispatch(doSaveAnswer(
                              question.id, answer.id, editingRef?.current?.value || ""
                            ));
                          }}>
                            <FiSave size={18} cursor='pointer' color='var(--green)'/>
                          </div>
                        </AnswerOptions>
                      </Answer>
                    ) : (
                      <Answer
                        key={answer.id}
                        tooltip-text="Clique para selecionar como resposta correta"
                        onClick={() => dispatch(doSelectAnswer(question.id, answer.id))}
                        checked={question.checkedAnswer === answer.id}
                        checkedcolor='green'
                      >
                        {answer.answer}
                        <AnswerOptions>
                          <div tooltip-text="Apagar resposta">
                            <FiTrash2 size={18} cursor='pointer' color='var(--red)'/>
                          </div>
                          <div tooltip-text="Editar resposta" onClick={e => {
                            e.stopPropagation();
                            dispatch(doEditAnswer(question.id, answer.id, true));
                          }}>
                            <FiEdit size={18} cursor='pointer' color='var(--purple)'/>
                          </div>
                        </AnswerOptions>
                      </Answer>
                    )
                  })
                }
              </AnswerList>
              <div className="right-align">
                <QuestionOptions>
                  {
                    quizze.editingQuestion === question.id ?
                    (<>
                      <div tooltip-text="Cancelar"  onClick={() => 
                        dispatch(doEditQuestion(question.id, false))
                      }>
                        <FiX size={18} cursor='pointer' color='var(--black)'/>
                      </div>
                      <div tooltip-text="Salvar" onClick={() => 
                        dispatch(doSaveQuestion(question.id, editingRef?.current?.value || ""))
                      }>
                        <FiSave size={18} cursor='pointer' color='var(--green)'/>
                      </div>
                    </>) : 
                    // não está editando a questão
                    (<>
                      <div tooltip-text="Apagar pergunta" onClick={() => 
                        dispatch(doDeleteQuestion(question.id))
                      }>
                        <FiTrash2 size={20} cursor='pointer' color='var(--red)'/>
                      </div>
                      <div tooltip-text="Editar pergunta" onClick={() => 
                        dispatch(doEditQuestion(question.id, true))
                      }>
                        <FiEdit size={20} cursor='pointer' color='var(--purple)'/>
                      </div>
                      <div tooltip-text="Adicionar resposta" onClick={() => 
                        dispatch(doAddAnswer(question.id))
                      }>
                        <FiPlus size={20} cursor='pointer' color='var(--green)'/>
                      </div>
                    </>)
                  }
                </QuestionOptions>
              </div>
            </Question>
          ))
        }
        <div className="right-align">
          <button className="btn bg-green" onClick={() => dispatch(doAddQuestion())}>
            Adicionar pergunta
          </button>
        </div>
      </Card>
    </div>
  </>);
}

export default EditPage;