import * as TYPES from 'store/actions/types';
import { Reducer } from 'redux';
import { get, omit, each } from 'lodash';
import { PayloadModel } from 'types';


export const INITIAL_STATE = {
  models: {}
};

export const reducer: Reducer = (state = INITIAL_STATE, action) => {
  const {type, payload} = action;

  switch (type) {
    case TYPES.REPLACE: return replace(state, payload);
    case TYPES.REPLACE_MANY: return replaceMany(state, payload);
    case TYPES.UPSERT: return upsert(state, payload);
    case TYPES.UPSERT_MANY: return upsertMany(state, payload);
    case TYPES.REMOVE: return remove(state, payload);
    case TYPES.REMOVE_MANY: return removeMany(state, payload);
    case TYPES.CLEAR_MODEL: return clearModel(state, payload);
    case TYPES.CLEAR_ALL: return INITIAL_STATE;
    default: return state;
  }
};


const replace = (state, payload: {model: PayloadModel}) => {
  const {model} = payload;

  return {
    models: {
      ...state.models,
      [model.type]: {
        ...get(state.models, model.type),
        [model.id]: model.data
      }
    }
  };
};


const upsert = (state, payload: {model: PayloadModel}) => {
  const {model} = payload;

  return {
    models: {
      ...state.models,
      [model.type]: {
        ...get(state.models, model.type),
        [model.id]: {
          ...get(state.models, [model.type, model.id]),
          ...model.data
        }
      }
    }
  };
};


const remove = (state, payload: {model: PayloadModel}) => {
  const {model} = payload;

  return {
    models: {
      ...state.models,
      [model.type]: omit(get(state.models, model.type), [model.id])
    }
  };
};


const upsertMany = (state, payload: {models: PayloadModel[]}) => {
  const {models} = payload;
  const nModels = {...state.models};
  models.forEach(model => {
    nModels[model.type] = {...get(nModels, [model.type], {})};
    nModels[model.type][model.id] =  {
      ...get(state.models, [model.type, model.id]),
      ...model.data
    };
  });

  return {
    models: nModels
  };
};


const replaceMany = (state, payload: {models: PayloadModel[]}) => {
  const {models} = payload;
  const nModels = {...state.models};
  models.forEach(model => {
    nModels[model.type] = {...get(nModels, [model.type], {})};
    nModels[model.type][model.id] =  {
      ...model.data
    };
  });

  return {
    models: nModels
  };
};


const removeMany = (state, payload: {models: PayloadModel[]}) => {
  const {models} = payload;
  const typeIds = {};
  models.forEach(model => {
    typeIds[model.type] = get(typeIds, model.type, []);
    typeIds[model.type].push(model.id);
  });

  const nModels = {};
  each(typeIds, (ids, type) => {
    nModels[type] = omit(get(state.models, type), ids);
  });

  return {
    models: {
      ...state.models,
      ...nModels
    }
  };
};


const clearModel = (state, payload: {name: string}) => {
  const {name} = payload;
  return {
    models: omit(state.models, name)
  };
};
