import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';

export const startNewNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth; //uid for user

    console.log('startNewNote');
    //uid

    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
    };

    const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`)); //create (referencia) doc
    const setDocResp = await setDoc(newDoc, newNote); //insert

    console.log(newDoc);
    console.log(setDocResp);

    //!dispatch
    //dispatch(newNote)
    //dispatch(activarNote)
  };
};
