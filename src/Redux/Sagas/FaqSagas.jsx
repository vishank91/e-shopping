import { put, takeEvery } from "redux-saga/effects"

import { CREATE_FAQ, CREATE_FAQ_RED, DELETE_FAQ, DELETE_FAQ_RED, GET_FAQ, GET_FAQ_RED, UPDATE_FAQ, UPDATE_FAQ_RED } from "../contant"
import { createRecord, deleteRecord, getRecord, updateRecord } from "./APICallingService/index"
// import { createMultipartRecord, deleteRecord, getRecord, updateMultipartRecord } from "./APICallingService/index"

function* createSaga(action) {                                                                  //Worker Saga
    let response = yield createRecord("faq", action.payload)
    // let response = yield createMultipartRecord("faq", action.payload)
    yield put({ type: CREATE_FAQ_RED, payload: response })
}

function* getSaga() {                                                                           //Worker Saga
    let response = yield getRecord("faq")
    yield put({ type: GET_FAQ_RED, payload: response })
}

function* updateSaga(action) {                                                                  //Worker Saga
    yield updateRecord("faq", action.payload)
    yield put({ type: UPDATE_FAQ_RED, payload: action.payload })
    // let response = yield updateMultipartRecord("faq", action.payload)
    // yield put({ type: UPDATE_FAQ_RED, payload: response })
}

function* deleteSaga(action) {                                                                       //Worker Saga
    yield deleteRecord("faq", action.payload)
    yield put({ type: DELETE_FAQ_RED, payload: action.payload })
}

export default function* FaqSaga() {                                                  //Watcher Sagas
    yield takeEvery(CREATE_FAQ, createSaga)
    yield takeEvery(GET_FAQ, getSaga)
    yield takeEvery(UPDATE_FAQ, updateSaga)
    yield takeEvery(DELETE_FAQ, deleteSaga)
}