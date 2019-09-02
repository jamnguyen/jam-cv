import { firestore } from './firebase';
import { CvModel } from '../models';

class CvService {

  static getCv(cvId) {
    return new Promise((resolve, reject) => {
      firestore.collection('users').doc(cvId).get().then(doc => {
        const newCv = new CvModel({...doc.data(), id: doc.id});
        console.log('static new cv', newCv)
        resolve(newCv);
      }, error => {
        reject(error);
      });
    });
  }

}

export default CvService;