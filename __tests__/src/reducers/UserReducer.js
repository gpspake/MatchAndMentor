/* eslint-env jest */
import reducer from '../../../src/reducers/UserReducer'
import { UPDATE_NAME, UPDATE_MENTOR_ROLE, UPDATE_MENTEE_ROLE, UPDATE_MENTOR_SUMMARY,
  UPDATE_MENTEE_SUMMARY, SUBMIT_MENTOR_SUMMARY, SUBMIT_MENTEE_SUMMARY, UPDATE_BIRTHDAY } from '../../../src/actions/types'

const INITIAL_STATE = {
  name: '',
  roles: null,
  mentorSelected: false,
  menteeSelected: false,
  mentorSummary: '',
  menteeSummary: '',
  birthday: '',
};

test('user reducer should return intial state', () => {
  expect(reducer(undefined, {})).toEqual(INITIAL_STATE)
})

test('user reducer should handle UPDATE_NAME', () => {
  expect(reducer(INITIAL_STATE, { type: UPDATE_NAME, payload: 'test' })).toEqual({
    ...INITIAL_STATE,
    name: 'test'
  })
})

test('user reducer should handle UPDATE_MENTOR_ROLE', () => {
  expect(reducer(INITIAL_STATE, { type: UPDATE_MENTOR_ROLE, payload: true })).toEqual({
    ...INITIAL_STATE,
    mentorSelected: true
  })
})

test('user reducer should handle UPDATE_MENTEE_ROLE', () => {
  expect(reducer(INITIAL_STATE, { type: UPDATE_MENTEE_ROLE, payload: true })).toEqual({
    ...INITIAL_STATE,
    menteeSelected: true
  })
})

test('user reducer should handle UPDATE_MENTOR_SUMMARY', () => {
  const summary = 'this is a mentor summary'
  expect(reducer(INITIAL_STATE, { type: UPDATE_MENTOR_SUMMARY, payload: summary })).toEqual({
    ...INITIAL_STATE,
    mentorSummary: summary
  })
})

test('user reducer should handle UPDATE_MENTEE_SUMMARY', () => {
  const summary = 'this is a mentee summary'
  expect(reducer(INITIAL_STATE, { type: UPDATE_MENTEE_SUMMARY, payload: summary })).toEqual({
    ...INITIAL_STATE,
    menteeSummary: summary
  })
})

test('user reducer should handle SUBMIT_MENTOR_SUMMARY', () => {
  expect(reducer(INITIAL_STATE, { type: SUBMIT_MENTOR_SUMMARY })).toEqual({
    ...INITIAL_STATE,
    menteeSummary: ''
  })
})

test('user reducer should handle SUBMIT_MENTEE_SUMMARY', () => {
  expect(reducer(INITIAL_STATE, { type: SUBMIT_MENTEE_SUMMARY })).toEqual({
    ...INITIAL_STATE,
    mentorSummary: ''
  })
})

test('user reducer should handle UPDATE_BIRTHDAY', () => {
  expect(reducer(INITIAL_STATE, { type: UPDATE_BIRTHDAY, payload: '01/01/2000' })).toEqual({
    ...INITIAL_STATE,
    birthday: '01/01/2000'
  })
})
