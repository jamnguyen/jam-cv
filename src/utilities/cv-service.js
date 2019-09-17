import { firestore } from './firebase';
import { CvModel } from '../models';

class CvService {

  static getCv(cvId) {
    return new Promise((resolve, reject) => {
      firestore.collection('cvs').doc(cvId).get().then(doc => {
        const newCv = new CvModel({...doc.data(), id: doc.id});
        resolve(newCv);
      }, error => {
        reject(error);
      });
    });
  }

  static getUserCVs(user) {
    return new Promise((resolve, reject) => {
      firestore.collection('cvs').where("owner", "==", user.uid).get().then(querySnapshot => {
        let result = [];
        querySnapshot.forEach(doc => {
          result.push(new CvModel({...doc.data(), id: doc.id}));
        });
        resolve(result);
      }, error => {
        reject(error);
      });
    });
  }

  static addCv(cv) {
    return new Promise((resolve, reject) => {
      firestore.collection("cvs").add(CvModel.standardizeData(cv))
      .then(doc => {
        resolve(doc);
      })
      .catch(error => {
        reject(error);
      });
    });
  }

  static saveCv(cv) {
    return new Promise((resolve, reject) => {
      firestore.collection('cvs').doc(cv.id).set(CvModel.standardizeData(cv)).then(result => {
        resolve(result);
      }, error => {
        reject(error);
      });
    });
  }

  static patchCv(cvId, patchData) {
    return new Promise((resolve, reject) => {
      firestore.collection('cvs').doc(cvId).set(patchData, { merge: true }).then(result => {
        resolve(result);
      }, error => {
        reject(error);
      });
    });
  }

}

export default CvService;