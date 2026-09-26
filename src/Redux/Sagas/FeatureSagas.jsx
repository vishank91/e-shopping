import { put, takeEvery } from "redux-saga/effects"

import { CREATE_FEATURE, CREATE_FEATURE_RED, DELETE_FEATURE, DELETE_FEATURE_RED, GET_FEATURE, GET_FEATURE_RED, UPDATE_FEATURE, UPDATE_FEATURE_RED } from "../contant"
import { createRecord, deleteRecord, getRecord, updateRecord } from "./APICallingService/index"
// import { createMultipartRecord, deleteRecord, getRecord, updateMultipartRecord } from "./APICallingService/index"

function* createSaga(action) {                                                                  //Worker Saga
    let response = yield createRecord("feature", action.payload)
    // let response = yield createMultipartRecord("feature", action.payload)
    yield put({ type: CREATE_FEATURE_RED, payload: response })
}

function* getSaga() {                                                                           //Worker Saga
    let response = yield getRecord("feature")
    yield put({ type: GET_FEATURE_RED, payload: response })
}

function* updateSaga(action) {                                                                  //Worker Saga
    yield updateRecord("feature", action.payload)
    yield put({ type: UPDATE_FEATURE_RED, payload: action.payload })
    // let response = yield updateMultipartRecord("feature", action.payload)
    // yield put({ type: UPDATE_FEATURE_RED, payload: response })
}

function* deleteSaga(action) {                                                                       //Worker Saga
    yield deleteRecord("feature", action.payload)
    yield put({ type: DELETE_FEATURE_RED, payload: action.payload })
}

export default function* FeatureSaga() {                                                  //Watcher Sagas
    yield takeEvery(CREATE_FEATURE, createSaga)
    yield takeEvery(GET_FEATURE, getSaga)
    yield takeEvery(UPDATE_FEATURE, updateSaga)
    yield takeEvery(DELETE_FEATURE, deleteSaga)
}