import app from 'firebase/compat/app';
import 'firebase/compat/firestore';
import firebaseConfig from './config';
import 'firebase/compat/storage';

class Firebase {
    constructor(){
        app.initializeApp(firebaseConfig)
        this.db = app.firestore();
        this.storage = app.storage();
    }
}

const firebase = new Firebase();

export default firebase;