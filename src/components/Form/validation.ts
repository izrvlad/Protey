import * as yup from 'yup'


export const validation = yup.object({
    name: yup.string().required("Поле должно быть заполнено"),
    parent: yup.string().required("Поле должно быть заполнено")
})