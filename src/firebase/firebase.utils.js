import { initializeApp } from 'firebase/app';
import {getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs} from 'firebase/firestore'
import {getAuth,
        signInWithRedirect,
        GoogleAuthProvider,
        signInWithPopup,
        signInWithEmailAndPassword,
        createUserWithEmailAndPassword,
        onAuthStateChanged,
        signOut} from 'firebase/auth';

// Your web app's Firebase configuration

const firebaseConfig = {

apiKey: "AIzaSyAlNT-aICplK9_VgM7N4TyRtpUy_eVDqi8",

authDomain: "e-clothingb.firebaseapp.com",

projectId: "e-clothingb",

storageBucket: "e-clothingb.appspot.com",

messagingSenderId: "363326969190",

appId: "1:363326969190:web:4e076e2749852e4c93a4a7"

};
  // Initialize Firebase
        const app = initializeApp(firebaseConfig);

        const googleProvider = new GoogleAuthProvider();

        googleProvider.setCustomParameters({
            prompt: 'select_account',
        })
        

    export const auth = getAuth(app);
    export const signInWithGooglePopup = ()=>signInWithPopup(auth, googleProvider);
    export const signInWithGoogleRedirect = ()=>signInWithRedirect(auth, googleProvider);

    export const db = getFirestore();

    export const addCollectionAndDocument = async(collectionKey, objectsToAdd ) =>{
        const collectionReference = collection(db, collectionKey);
        const batch = writeBatch(db);
        
        objectsToAdd.forEach((object) => {
            const docRef  = doc(collectionReference, object.title.toLowerCase());
            batch.set(docRef, object);
        });

        await batch.commit();
        console.log('done');
    };

    export const getCategoriesAndDocuments = async ()=>{
        const collectionRef = collection(db, 'categories');
        const q = query(collectionRef);
        
        const querySnapshot = await getDocs(q);
        const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot)=>{
            const {title, items} = docSnapshot.data();
            acc[title.toLowerCase()] = items;
            return acc;
        },{});

        return categoryMap;
    }
    
    export const createUserDocFromAuth = async(userAuth, additionalInfo= {})=>{
        const userDocRef= doc(db, 'users', userAuth.uid);

        console.log(userDocRef);

        const  userSnapShot = await getDoc(userDocRef);
        
    if(!userSnapShot.exists()){
        const {displayName, email}= userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt,
                ...additionalInfo,
            })
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }
    return userDocRef;
    };

    export const createAuthUserWithEmailAndPassword = async(email, password) =>{
        if(!email || !password) return;

        return await createUserWithEmailAndPassword(auth,email, password);
    }
    
    export const signInAuthUserWithEmailAndPassword = async(email, password) =>{
        if(!email || !password) return;

    return await signInWithEmailAndPassword(auth,email, password);
    }
    export const signOutUser = async()=> await signOut(auth);

    export const onAuthStateChangedListener =(callback)=>onAuthStateChanged(auth, callback);