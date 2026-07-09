import { atom } from 'recoil'

export const isLoginAtom = atom({
    key: "isLoginAtom",
    default: !!localStorage.getItem('token')
})

export const firstNameAtom = atom({
    key: "firstNameAtom",
    default: localStorage.getItem('firstName') || ""
})