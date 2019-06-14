import {
  SHOW_WORKS,
  SHOW_WORKS_FAILURE,
  SHOW_WORKS_SUCCESS,

} from "./types.js";



export const showWorks = () => {
  return (dispatch, getState, { getFirestore }) => {
    // make async call to database
    dispatch({ type: SHOW_WORKS })
    const firestore = getFirestore();
    const works = []
    firestore.collection('works').get().then(querySnapshot => {

      querySnapshot.forEach((doc) => {
        works.push({ id: doc.id, ...doc.data() })
      });

      dispatch({ type: SHOW_WORKS_SUCCESS, payload: works });


    }).catch(err => {
      dispatch({ type: SHOW_WORKS_FAILURE }, err);
    });
  }
}

