import { db } from "../config/firebase";
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc, query, onSnapshot } from "firebase/firestore";

export async function cadastrarPost(data) {
    try {
        const result = await addDoc(collection(db, 'Post'), data)
        return result.id
    } catch (error) {
        return 'erro'
    }
}

export async function atualizarPost(idPost, data) {
    try {
        const postRef = doc(db, 'Post', idPost)
        await updateDoc(postRef, data)
        return idPost
    } catch (error) {
        console.log(error)
        return 'error'
    }
}

export async function deletarPost(idpost) {
    try {
        const postRef = doc(db, 'Post', idpost)
        await deleteDoc(postRef)
        return 'ok'
    } catch (error) {
        console.log(error)
        return 'erro'
    }
}

export async function pegarPostTempoReal(setPost) {
    const ref = query(collection(db, 'Post'))
    onSnapshot(ref, (querySnapshot) => {
        const posts = []
        querySnapshot.forEach((doc) => {
            posts.push({ id: doc.id, ...doc.data() })
        })
        setPost(posts)
    })
}