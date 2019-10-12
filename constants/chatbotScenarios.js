import React from 'react';
import { Button } from 'react-native-elements';
import store from '../redux/store';
import {
  addChatbotUserMessageAction,
  changeChatbotCurrentScenarioIdAction,
} from '../redux/actions/chatbotActions';

import {
  sendPhone,
  sendCode,
  setUserToken,
} from '../redux/actions/loginActions';

const SELLER_SCENARIOS = {
  'SELLER-1': {
    id: 'SELLER-1',
    text:
      'Добавьте фотографии квартиры. Не скромничайте, чем больше фотографий, тем лучше',
    controls: [
      props => {
        return (
          <Button
            onPress={() => {
              //add seller photos action
              store.dispatch(
                addChatbotUserMessageAction({
                  text: 'Добавить',
                })
              );
              store.dispatch(changeChatbotCurrentScenarioIdAction('SELLER-2'));
            }}
            title="Добавить"
            {...props}
          ></Button>
        );
      },
    ],
  },
  'SELLER-2': {
    id: 'SELLER-2',
    text: 'Сколько в квартире изолированных комнат?',
    controls: [
      props => {
        return (
          <Button
            onPress={() => {
              //change seller number of rooms action
              store.dispatch(
                addChatbotUserMessageAction({
                  text: 'Студия',
                })
              );
              store.dispatch(changeChatbotCurrentScenarioIdAction('SELLER-3'));
            }}
            title="Студия"
            {...props}
          ></Button>
        );
      },
      props => {
        return (
          <Button
            onPress={() => {
              //change seller number of rooms action
              store.dispatch(
                addChatbotUserMessageAction({
                  text: '1 комната',
                })
              );
              store.dispatch(changeChatbotCurrentScenarioIdAction('SELLER-3'));
            }}
            title="1 комната"
            {...props}
          ></Button>
        );
      },
      props => {
        return (
          <Button
            onPress={() => {
              //change seller number of rooms action
              store.dispatch(
                addChatbotUserMessageAction({
                  text: '2 комнаты',
                })
              );
              store.dispatch(changeChatbotCurrentScenarioIdAction('SELLER-3'));
            }}
            title="2 комнаты"
            {...props}
          ></Button>
        );
      },
    ],
  },
  'SELLER-3': {
    id: 'SELLER-3',
    text: 'Максимальное количество человек',
    controls: [
      props => {
        return (
          <Button
            onPress={() => {
              //change seller number of people action
              store.dispatch(
                addChatbotUserMessageAction({
                  text: 'Один',
                })
              );
              store.dispatch(changeChatbotCurrentScenarioIdAction('SELLER-4'));
            }}
            title="Один"
            {...props}
          ></Button>
        );
      },
      props => {
        return (
          <Button
            onPress={() => {
              //change seller number of people action
              store.dispatch(
                addChatbotUserMessageAction({
                  text: 'Двое',
                })
              );
              store.dispatch(changeChatbotCurrentScenarioIdAction('SELLER-4'));
            }}
            title="Двое"
            {...props}
          ></Button>
        );
      },
      props => {
        return (
          <Button
            onPress={() => {
              //change seller number of people action
              store.dispatch(
                addChatbotUserMessageAction({
                  text: 'Трое',
                })
              );
              store.dispatch(changeChatbotCurrentScenarioIdAction('SELLER-4'));
            }}
            title="Трое"
            {...props}
          ></Button>
        );
      },
    ],
  },
  'SELLER-4': {
    id: 'SELLER-4',
    text: 'Арендная плата',
    controls: [
      props => {
        return (
          <Button
            onPress={() => {
              //set seller price action
              store.dispatch(
                addChatbotUserMessageAction({
                  text: '50000',
                })
              );
              store.dispatch(changeChatbotCurrentScenarioIdAction('SELLER-5'));
            }}
            title="50000"
            {...props}
          ></Button>
        );
      },
    ],
  },
  'SELLER-5': {
    id: 'SELLER-5',
    text: 'Срок аренды',
    controls: [
      props => {
        return (
          <Button
            onPress={() => {
              //set seller rent date action
              store.dispatch(
                addChatbotUserMessageAction({
                  text: 'Больше года',
                })
              );
              store.dispatch(changeChatbotCurrentScenarioIdAction('SELLER-6'));
            }}
            title="Больше года"
            {...props}
          ></Button>
        );
      },
      props => {
        return (
          <Button
            onPress={() => {
              //set seller rent date action
              store.dispatch(
                addChatbotUserMessageAction({
                  text: 'Несколько месяцев',
                })
              );
              store.dispatch(changeChatbotCurrentScenarioIdAction('SELLER-6'));
            }}
            title="Несколько месяцев"
            {...props}
          ></Button>
        );
      },
    ],
  },
  'SELLER-6': {
    id: 'SELLER-6',
    text: 'Координаты квартиры',
    controls: [
      props => {
        return (
          <Button
            onPress={() => {
              //set seller flat coordinates action
              store.dispatch(
                addChatbotUserMessageAction({
                  text: 'Указать',
                })
              );
              store.dispatch(changeChatbotCurrentScenarioIdAction('SELLER-7'));
            }}
            title="Указать"
            {...props}
          ></Button>
        );
      },
    ],
  },
  'SELLER-7': {
    id: 'SELLER-7',
    text: 'Адрес "Лесная, д. 7", правильно?',
    controls: [
      props => {
        return (
          <Button
            onPress={() => {
              //set seller flat address action
              store.dispatch(
                addChatbotUserMessageAction({
                  text: 'Правильно',
                })
              );
              store.dispatch(changeChatbotCurrentScenarioIdAction('SELLER-8'));
            }}
            title="Правильно"
            {...props}
          ></Button>
        );
      },
      props => {
        return (
          <Button
            onPress={() => {
              //set seller flat address action
              store.dispatch(
                addChatbotUserMessageAction({
                  text: 'Неправильно, я сам укажу',
                })
              );
              store.dispatch(
                changeChatbotCurrentScenarioIdAction('END_OF_SCENARIO')
              );
            }}
            title="Неправильно, я сам укажу"
            {...props}
          ></Button>
        );
      },
    ],
  },
  'SELLER-8': {
    id: 'SELLER-8',
    text: 'Проходите)',
  },
};

const BUYER_SCENARIOS = {
  'BUYER-1': {
    id: 'BUYER-1',
    text: 'Добавьте свои фотографии. Можно одну, но лучше всего несколько)',
    controls: [
      props => {
        return (
          <Button
            onPress={() => {
              //add buyer photos action
              store.dispatch(
                addChatbotUserMessageAction({
                  text: 'Добавить',
                })
              );
              store.dispatch(changeChatbotCurrentScenarioIdAction('BUYER-2'));
            }}
            title="Добавить"
            {...props}
          ></Button>
        );
      },
    ],
  },
  'BUYER-2': {
    id: 'BUYER-2',
    text: 'Выберите минимальное количество комнат',
    controls: [
      props => {
        return (
          <Button
            onPress={() => {
              //change number of buyer rooms action
              store.dispatch(
                addChatbotUserMessageAction({
                  text: 'Не важно',
                })
              );
              store.dispatch(changeChatbotCurrentScenarioIdAction('BUYER-3'));
            }}
            title="Не важно"
            {...props}
          ></Button>
        );
      },
      props => {
        return (
          <Button
            onPress={() => {
              //change number of buyer rooms action
              store.dispatch(
                addChatbotUserMessageAction({
                  text: 'Одна',
                })
              );
              store.dispatch(changeChatbotCurrentScenarioIdAction('BUYER-3'));
            }}
            title="Одна"
            {...props}
          ></Button>
        );
      },
      props => {
        return (
          <Button
            onPress={() => {
              //change number of buyer rooms action
              store.dispatch(
                addChatbotUserMessageAction({
                  text: 'Две',
                })
              );
              store.dispatch(changeChatbotCurrentScenarioIdAction('BUYER-3'));
            }}
            title="Две"
            {...props}
          ></Button>
        );
      },
    ],
  },
  'BUYER-3': {
    id: 'BUYER-3',
    text: 'Сколько человек будет проживать?',
    controls: [
      props => {
        return (
          <Button
            onPress={() => {
              //change buyer number of people action
              store.dispatch(
                addChatbotUserMessageAction({
                  text: 'Только я',
                })
              );
              store.dispatch(changeChatbotCurrentScenarioIdAction('BUYER-4'));
            }}
            title="Только я"
            {...props}
          ></Button>
        );
      },
      props => {
        return (
          <Button
            onPress={() => {
              //change buyer number of people action
              store.dispatch(
                addChatbotUserMessageAction({
                  text: 'Двое',
                })
              );
              store.dispatch(changeChatbotCurrentScenarioIdAction('BUYER-4'));
            }}
            title="Двое"
            {...props}
          ></Button>
        );
      },
      props => {
        return (
          <Button
            onPress={() => {
              //change buyer number of people action
              store.dispatch(
                addChatbotUserMessageAction({
                  text: 'Трое',
                })
              );
              store.dispatch(changeChatbotCurrentScenarioIdAction('BUYER-4'));
            }}
            title="Трое"
            {...props}
          ></Button>
        );
      },
    ],
  },
  'BUYER-4': {
    id: 'BUYER-4',
    text: 'Оптимальная цена? Мы будем искать максимально близкие варианты.',
    controls: [
      props => {
        return (
          <Button
            onPress={() => {
              //set buyer price action
              store.dispatch(
                addChatbotUserMessageAction({
                  text: '50000',
                })
              );
              store.dispatch(changeChatbotCurrentScenarioIdAction('BUYER-5'));
            }}
            title="50000"
            {...props}
          ></Button>
        );
      },
    ],
  },
  'BUYER-5': {
    id: 'BUYER-5',
    text: 'Срок аренды',
    controls: [
      props => {
        return (
          <Button
            onPress={() => {
              //set buyer rent date action
              store.dispatch(
                addChatbotUserMessageAction({
                  text: 'Больше года',
                })
              );
              store.dispatch(changeChatbotCurrentScenarioIdAction('BUYER-6'));
            }}
            title="Больше года"
            {...props}
          ></Button>
        );
      },
      props => {
        return (
          <Button
            onPress={() => {
              //set buyer rent date action
              store.dispatch(
                addChatbotUserMessageAction({
                  text: 'Несколько месяцев',
                })
              );
              store.dispatch(changeChatbotCurrentScenarioIdAction('BUYER-6'));
            }}
            title="Несколько месяцев"
            {...props}
          ></Button>
        );
      },
    ],
  },
  'BUYER-6': {
    id: 'BUYER-6',
    text: 'В районе какой станции метро будем искать?',
    controls: [
      props => {
        return (
          <Button
            onPress={() => {
              //set buyer metro action
              store.dispatch(
                addChatbotUserMessageAction({
                  text: 'Белорусская',
                })
              );
              store.dispatch(changeChatbotCurrentScenarioIdAction('BUYER-7'));
            }}
            title="Белорусская"
            {...props}
          ></Button>
        );
      },
    ],
  },
  'BUYER-7': {
    id: 'BUYER-7',
    text: 'Проходите)',
  },
};

const FIRST_TIME_SCENARIOS = {
  'FIRST_TIME-1': {
    id: 'FIRST_TIME-1',
    text: 'Введите свой номер телефона',
    controls: [
      props => {
        return (
          <Button
            onPress={() => {
              //set phone action
              store.dispatch(
                addChatbotUserMessageAction({
                  text: '+7(926)222-33-88',
                })
              );
              store.dispatch(
                changeChatbotCurrentScenarioIdAction('FIRST_TIME-2')
              );
              store.dispatch(sendPhone('+7(926)222-33-88'));
            }}
            title="+7(926)222-33-88"
            {...props}
          ></Button>
        );
      },
    ],
  },
  'FIRST_TIME-2': {
    id: 'FIRST_TIME-2',
    text: 'Мы отправили вам секретную ссылку в WhatsApp',
    nextMessageId: 'FIRST_TIME-3',
  },
  'FIRST_TIME-3': {
    id: 'FIRST_TIME-3',
    text: 'На нее нужно нажать',
    controls: [
      props => {
        return (
          <Button
            onPress={() => {
              // если есть флаг подтверждения, дернуть экшен
              store.dispatch(
                addChatbotUserMessageAction({
                  text: 'Готово',
                })
              );
              store.dispatch(
                changeChatbotCurrentScenarioIdAction('FIRST_TIME-4')
              );
              store.dispatch(sendCode('7766'));
              store.dispatch(setUserToken('token'));
            }}
            title="Готово"
            {...props}
          ></Button>
        );
      },
    ],
  },
  'FIRST_TIME-4': {
    id: 'FIRST_TIME-4',
    text: 'Добро пожаловать!',
    nextMessageId: 'FIRST_TIME-5',
  },
  'FIRST_TIME-5': {
    id: 'FIRST_TIME-5',
    text:
      'У нас все немного иначе чем обычно бывает. Вы ищите квартиру, и одновременно хозяин квартиры ищет вас. Чтобы показать вам результаты поиска нам нужно узнать что вы ищите и кто вы сами. Готовы?',
    controls: [
      props => {
        return (
          <Button
            onPress={() => {
              store.dispatch(
                addChatbotUserMessageAction({
                  text: 'Спрашивай',
                })
              );
              store.dispatch(
                changeChatbotCurrentScenarioIdAction('FIRST_TIME-6')
              );
            }}
            title="Спрашивай"
            {...props}
          ></Button>
        );
      },
    ],
  },
  'FIRST_TIME-6': {
    id: 'FIRST_TIME-6',
    text: 'Как вас зовут?',
    controls: [
      props => {
        return (
          <Button
            onPress={() => {
              //set buyer name action
              store.dispatch(
                addChatbotUserMessageAction({
                  text: 'Миша',
                })
              );
              store.dispatch(
                changeChatbotCurrentScenarioIdAction('FIRST_TIME-7')
              );
            }}
            title="Миша"
            {...props}
          ></Button>
        );
      },
    ],
  },
  'FIRST_TIME-7': {
    id: 'FIRST_TIME-7',
    text: 'Сколько вам лет?',
    controls: [
      props => {
        return (
          <Button
            onPress={() => {
              //set buyer age action
              store.dispatch(
                addChatbotUserMessageAction({
                  text: '31',
                })
              );
              store.dispatch(
                changeChatbotCurrentScenarioIdAction('FIRST_TIME-8')
              );
            }}
            title="31"
            {...props}
          ></Button>
        );
      },
    ],
  },
  'FIRST_TIME-8': {
    id: 'FIRST_TIME-8',
    text: 'Вы снимаете или сдаете?',
    controls: [
      props => {
        return (
          <Button
            onPress={() => {
              store.dispatch(
                addChatbotUserMessageAction({
                  text: 'Снимаю',
                })
              );
              store.dispatch(changeChatbotCurrentScenarioIdAction('BUYER-1'));
            }}
            title="Снимаю"
            {...props}
          ></Button>
        );
      },
      props => {
        return (
          <Button
            onPress={() => {
              store.dispatch(
                addChatbotUserMessageAction({
                  text: 'Сдаю',
                })
              );
              store.dispatch(changeChatbotCurrentScenarioIdAction('SELLER-1'));
            }}
            title="Сдаю"
            {...props}
          ></Button>
        );
      },
    ],
  },
};

const ENTRANCE_SCENARIOS = {
  'ENTRANCE-1': {
    id: 'ENTRANCE-1',
    text: 'Привет',
    nextMessageId: 'ENTRANCE-2',
  },
  'ENTRANCE-2': {
    id: 'ENTRANCE-2',
    text: 'Я Толедо. Помогаю и даю ценные советы.',
    nextMessageId: 'ENTRANCE-3',
  },
  'ENTRANCE-3': {
    id: 'ENTRANCE-3',
    text: 'Вы у нас первый раз?',
    controls: [
      props => {
        return (
          <Button
            onPress={() => {
              store.dispatch(
                addChatbotUserMessageAction({
                  text: 'Да, покажи мне тут все',
                })
              );
              store.dispatch(
                changeChatbotCurrentScenarioIdAction('FIRST_TIME-1')
              );
            }}
            title="Да, покажи мне тут все"
            {...props}
          ></Button>
        );
      },
      props => {
        return (
          <Button
            onPress={() => {
              store.dispatch(
                addChatbotUserMessageAction({
                  text: 'Нет, авторизуй меня',
                })
              );
              store.dispatch(
                changeChatbotCurrentScenarioIdAction('ENTRANCE-4')
              );
            }}
            title="Нет, авторизуй меня"
            {...props}
          ></Button>
        );
      },
    ],
  },
  'ENTRANCE-4': {
    id: 'ENTRANCE-4',
    text: 'Выберите пользователя',
    controls: [
      props => {
        return (
          <Button
            onPress={() => {
              store.dispatch(
                addChatbotUserMessageAction({
                  text: 'Петя',
                })
              );
              store.dispatch(setUserToken('1'));
              store.dispatch(
                changeChatbotCurrentScenarioIdAction('AUTH_SUCCESS-1')
              );
            }}
            title="Петя"
            {...props}
          ></Button>
        );
      },
      props => {
        return (
          <Button
            onPress={() => {
              store.dispatch(
                addChatbotUserMessageAction({
                  text: 'Лена',
                })
              );
              store.dispatch(setUserToken('2'));
              store.dispatch(
                changeChatbotCurrentScenarioIdAction('AUTH_SUCCESS-1')
              );
            }}
            title="Лена"
            {...props}
          ></Button>
        );
      },
    ],
  },
};

const AUTH_SUCCESS_SCENARIOS = {
  'AUTH_SUCCESS-1': {
    id: 'AUTH_SUCCESS-1',
    text: 'Отлично! Я уже нашел подходящие варианты.',
    controls: [
      props => {
        return (
          <Button
            onPress={() => {
              props.navigate('Serp');
            }}
            title="Покажи"
            {...props}
          ></Button>
        );
      },
    ],
  },
};

export const CHATBOT_SCENARIOS = {
  initialId: 'ENTRANCE-1',
  messages: {
    ...ENTRANCE_SCENARIOS,
    ...FIRST_TIME_SCENARIOS,
    ...BUYER_SCENARIOS,
    ...SELLER_SCENARIOS,
    ...AUTH_SUCCESS_SCENARIOS,
    END_OF_SCENARIO: {
      id: 'END_OF_SCENARIO',
    },
  },
};
