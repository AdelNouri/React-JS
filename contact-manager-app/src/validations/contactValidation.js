import * as Yup from "yup"

export const contactSchema = Yup.object().shape({
    fullname: Yup.string().required('نام و نام خانوادگی الزامی می باشد'),
    photo: Yup.string().url().required('تصویر مخاطب الزامی می باشد')
    mobile: Yup.number()
})