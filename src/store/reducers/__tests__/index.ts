import { UPSERT, REPLACE, UPSERT_MANY, REMOVE, REPLACE_MANY, REMOVE_MANY } from 'store/actions/types';
import { reducer, INITIAL_STATE } from '../index';


describe('Testing reducer', () => {

  describe('Testing Single Model', () => {
    const model = {
      type: 'Quiz',
      id: 'repoid',
      data: {name: 'Hello World'}
    };

    it('Should add new model', () => {
      const nState = reducer(INITIAL_STATE, {type: UPSERT, payload: {model}});
      expect(nState).toStrictEqual({
        models: {
          Quiz: {
            repoid: {
              name: 'Hello World'
            }
          }
        }
      })
    });

    it('Should update new model', () => {
      const state = reducer(INITIAL_STATE, {type: UPSERT, payload: {model}});
      const nModel = {...model, data: {newData: 'Hello New Data'}};
      const nState = reducer(state, {type: UPSERT, payload: {model: nModel}});
      expect(nState).toStrictEqual({
        models: {
          Quiz: {
            repoid: {
              name: 'Hello World',
              newData: 'Hello New Data'
            }
          }
        }
      })
    });

    it('Should replace model', () => {
      const state = reducer(INITIAL_STATE, {type: UPSERT, payload: {model}});
      const nModel = {...model, data: {newData: 'Hello New Data'}};

      const nState = reducer(state, {type: REPLACE, payload: {model: nModel}});
      expect(nState).toStrictEqual({
        models: {
          Quiz: {
            repoid: {
              newData: 'Hello New Data'
            }
          }
        }
      })
    });

    it('Should remove model', () => {
      const state = reducer(INITIAL_STATE, {type: REMOVE, payload: {model}});
      expect(state).toStrictEqual({
        models: {
          Quiz: {}
        }
      })
    });
  });

  describe('Testing Multiple Models', () => {
    const models = [
      {
        type: 'Quiz',
        id: 1,
        data: {name: 'Hello There'}
      },
      {
        type: 'Quiz',
        id: 5,
        data: {name: 'General Kenobi'}
      },
      {
        type: 'Dumb',
        id: 5,
        data: {name: 'JarJar'}
      }
    ];

    it('Should Add Multiple', () => {
      const nState = reducer(INITIAL_STATE, {type: UPSERT_MANY, payload: {models}});
      expect(nState).toStrictEqual({
        models: {
          Quiz: {
            1: {
              name: 'Hello There',
            },
            5: {
              name: 'General Kenobi'
            }
          },
          Dumb: {
            5: {
              name: 'JarJar'
            }
          }
        }
      })
    });

    it('Should Update Multiple', () => {
      const state = reducer(INITIAL_STATE, {type: UPSERT_MANY, payload: {models}});
      const nModels: any = models.map(m => ({...m, data: {newData: 'welcome'}}));
      nModels.pop();
      const nState = reducer(state, {type: UPSERT_MANY, payload: {models: nModels}});
      expect(nState).toStrictEqual({
        models: {
          Quiz: {
            1: {
              name: 'Hello There',
              newData: 'welcome'
            },
            5: {
              name: 'General Kenobi',
              newData: 'welcome'
            }
          },
          Dumb: {
            5: {
              name: 'JarJar'
            }
          }
        }
      })
    });

    it('Should Update Multiple different models', () => {
      const state = reducer(INITIAL_STATE, {type: UPSERT_MANY, payload: {models}});
      const nModels = [
        {
          type: 'Quiz',
          id: 15,
          data: {name: 'Hello There'}
        },
        {
          type: 'Quiz',
          id: 52,
          data: {name: 'General Kenobi'}
        }
      ];
      const nState = reducer(state, {type: UPSERT_MANY, payload: {models: nModels}});
      expect(state.models.Quiz).not.toEqual(nState.models.Quiz);
      expect(nState).toStrictEqual({
        models: {
          Quiz: {
            1: {
              name: 'Hello There'
            },
            5: {
              name: 'General Kenobi'
            },
            15: {
              name: 'Hello There'
            },
            52: {
              name: 'General Kenobi'
            }
          },
          Dumb: {
            5: {
              name: 'JarJar'
            }
          }
        }
      })
    });

    it('Should Replace Multiple', () => {
      const state = reducer(INITIAL_STATE, {type: UPSERT_MANY, payload: {models}});
      const nModels = models.map(m => ({...m, data: {newData: 'welcome'}}));
      nModels.pop();

      const nState = reducer(state, {type: REPLACE_MANY, payload: {models: nModels}});
      expect(nState).toStrictEqual({
        models: {
          Quiz: {
            1: {
              newData: 'welcome'
            },
            5: {
              newData: 'welcome'
            }
          },
          Dumb: {
            5: {
              name: 'JarJar'
            }
          }
        }
      })
    });

    it('Should Remove Multiple', () => {
      const state = reducer(INITIAL_STATE, {type: UPSERT_MANY, payload: {models}});
      models.pop();
      const nState = reducer(state, {type: REMOVE_MANY, payload: {models}});
      expect(nState).toStrictEqual({
        models: {
          Quiz: {},
          Dumb: {
            5: {
              name: 'JarJar'
            }
          }
        }
      })
    });
  });
});
